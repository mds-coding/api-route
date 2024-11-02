import { HttpHandler } from "@mds-coding/http-handler-interface";
import { HttpMethod } from "@mds-coding/http-method";

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
