export class FetchError extends Error {
  statusCode: number;

  constructor(statusText: string, statusCode: number) {
    super(statusText);
    this.statusCode = statusCode;
  }

  getStatusCode() {
    return this.statusCode;
  }
}
