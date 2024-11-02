import { ApiRoute } from "./index.js"
import { HttpRequest } from "@mds-coding/http-request";
import { HttpResponse } from "@mds-coding/http-response";

test("`ApiRoute` can be created", () => {
  const route = new ApiRoute<{ hello: string }, { world: string }>("get", "/foo", (request) => {
    return new HttpResponse(200, "OK", {}, { world: request.body.hello });
  });
  expect(route).toBeDefined();
  expect(route.method).toBe("get");
  expect(route.path).toBe("/foo");
  const request = new HttpRequest("get", "/foo", {}, { hello: "42"});
  const response = route.handler(request);
  expect(response.body.world).toBe("42");
})
