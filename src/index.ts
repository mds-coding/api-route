import { HttpHandler, HttpMethod } from "@mds-coding/http";

export class ApiRoute<RequestBodyT, ResponseBodyT> {
  method: HttpMethod;
  path: string;
  handler: HttpHandler<RequestBodyT, ResponseBodyT>;

  constructor(method: HttpMethod, path: string, handler: HttpHandler<RequestBodyT, ResponseBodyT>) {
    this.method = method;
    this.path = path;
    this.handler = handler;
  }
}
