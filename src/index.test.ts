import { HttpRequest, HttpResponse } from "@mds-coding/http";
import { ApiRoute } from "./index.js"

test("`ApiRoute` can be created", () => {
  const route = new ApiRoute<{ hello: string }, { world: string }>("GET", "/foo", (request) => {
    return new HttpResponse(200, "OK", {}, { world: request.body.hello });
  });
  expect(route).toBeDefined();
  expect(route.method).toBe("GET");
  expect(route.path).toBe("/foo");
  const request = new HttpRequest("get", "/foo", {}, { hello: "42"});
  const response = route.handler(request);
  expect(response.body.world).toBe("42");
})
