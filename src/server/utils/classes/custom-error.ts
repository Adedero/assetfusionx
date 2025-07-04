export default class CustomError extends Error {
  data: Record<string, unknown>;

  constructor(
    message: string,
    error: Error | unknown,
    data: Record<string, unknown> = {}
  ) {
    super();

    if (error instanceof Error) {
      this.message = `${message}: ${error.message}`;
      this.cause = error.cause;
      this.name = error.name;
      this.stack = error.stack;
    } else {
      this.message = String(error);
    }

    this.data = data;
  }
}
