export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  CONNECT = "CONNECT",
  TRACE = "TRACE",
}

export const isHttpMethod = (value: any): value is HttpMethod =>
  Object.values(HttpMethod).includes(value);

export const validateHttpMethod = (
  value: any,
  allowedMethods: HttpMethod[]
): HttpMethod => {
  if (!isHttpMethod(value)) {
    throw new Error(`Invalid HTTP method: ${value}.`);
  }

  if (!allowedMethods.includes(value)) {
    throw new Error(`HTTP method ${value} is not allowed.`);
  }

  return value;
};
