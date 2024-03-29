export class CustomError extends Error {
  public status:number;
  constructor(message: any, status: number) {
    super(message);
    this.name = this.constructor.name;
    this.status = status || 500;
    Error.captureStackTrace(this, this.constructor);
  }
}