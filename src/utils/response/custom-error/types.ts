export type ErrorResponse = {
  errorType: string;
  errorMessage: string;
  errors: string[] | null;
  errorRaw: any;
  errorsValidation: ErrorValidation[] | null;
  stack?: string;
};

export type ErrorValidation = { [key: string]: string };
