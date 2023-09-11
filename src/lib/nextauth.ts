import type { AuthOptions } from "next-auth";
import Email from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { createTransport } from "nodemailer";

import { emailConstants, signInConstants } from "@/lib/constants";
import validateEmail from "@/lib/email";
import clientPromise from "@/lib/mongodb";

const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
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

    session({ session, user }) {
      return {
        ...session,
        user,
      };
    },
  },

  events: {
    signIn(message) {
      console.log(message);
    },
  },
};

export default authOptions;
