import type { AuthOptions } from "next-auth";
import Email from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { createTransport } from "nodemailer";

import { emailConstants, signInConstants } from "@/lib/constants";
import validateEmail from "@/lib/email";
import clientPromise from "@/lib/mongodb";
import { htmlEmailTemplates } from "@/lib/templates";

const adapter = MongoDBAdapter(clientPromise);

const authOptions: AuthOptions = {
  adapter,
  providers: [
    Email({
      server: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
      from: process.env.EMAIL_FROM,

      async sendVerificationRequest({ identifier, url, provider, theme }) {
        const transport = createTransport(provider.server);
        const result = await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: "Sign in to your account",
          text: `Sign in to your account\n${url}\n\n`,
          html: htmlEmailTemplates.signIn({ url, theme }),
        });

        const failed = result.rejected.concat(result.pending).filter(Boolean);

        if (failed.length) {
          throw new Error(emailConstants.EMAIL_FAILED_TO_SEND);
        }
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async signIn({ user, account }) {
      const { isEmailValid } = await validateEmail(user.email ?? "");

      if (isEmailValid) {
        return true;
      }

      throw new Error(signInConstants.SIGN_IN_FAILED);
    },

    async session({ session, user, newSession, trigger }) {
      if (trigger === "update") {
        if (newSession?.name || newSession?.name?.length === 0) {
          adapter.updateUser &&
            (await adapter.updateUser({
              id: user.id,
              name: (newSession.name.length && newSession.name) || null,
            }));
        }

        if (newSession?.email) {
          const { isEmailValid } = await validateEmail(newSession.email ?? "");

          if (!isEmailValid) {
            throw new Error(emailConstants.EMAIL_INVALID);
          }

          adapter.updateUser &&
            (await adapter.updateUser({
              id: user.id,
              email: newSession.email,
            }));
        }
      }

      return session;
    },
  },

  events: {
    signIn(message) {
      console.log(message);
    },
  },
};

export default authOptions;
