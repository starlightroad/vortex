import validate from "deep-email-validator";
import { createError } from "./utils";

const validateEmail = async (email: string, sender?: string) => {
  try {
    const res = await validate({
      email,
      sender,
      validateRegex: true,
      validateMx: true,
      validateTypo: true,
      validateDisposable: true,
      validateSMTP: false,
    });

    const data = {
      isEmailValid: res.valid,
      validators: {
        isRegexValid: res.validators.regex?.valid,
        isTypoValid: res.validators.typo?.valid,
        isDisposableValid: res.validators.disposable?.valid,
        isMxValid: res.validators.mx?.valid,
      },
    };

    return data;
  } catch (err) {
    const error = createError(err);

    throw error;
  }
};

export default validateEmail;
