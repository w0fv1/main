import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { render } from "https://deno.land/x/mustache@v0.3.0/mod.ts";

serve(async (_req) => {
  // 每次请求都读取模板文件，确保热更新生效
  const template = await Deno.readTextFile("./error.mustache");

  const html = render(template, {
    errorMessage: "服务器出错了，请稍后再试！",
    errorCode: "ERR-404-NOTFOUND",
  });

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
