export const createError = (err: unknown) => {
  const error = (err instanceof Error && err) || new Error(JSON.stringify(err));
  error.message = error.message.replace("Error: ", "");

  return error;
};

export const toTitleCase = (str: string) => {
  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
};
