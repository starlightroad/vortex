export const emailConstants = {
  EMAIL_EXISTS: "Email is taken",
  EMAIL_FAILED_TO_SEND: "Email could not be sent",
  EMAIL_NOT_FOUND: "Couldn't find your account",
  EMAIL_INVALID: "Invalid email",
};

export const signInConstants = {
  SIGN_IN_SUCCESS: "Please check your email to sign in",
  SIGN_IN_FAILED: emailConstants.EMAIL_INVALID,
};

export const dbConstants = {
  URI_NOT_FOUND:
    "Please make sure the environment variable 'MONGODB_URI' is defined inside .env.local",
  CONNECTION_FAILED: "Unable to connect to database",
};
