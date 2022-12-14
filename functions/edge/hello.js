export async function onRequest(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  const app_name = env.APP_NAME;
  const kv_app_name = await env.astrotests.get("KV_APP_NAME");

  return new Response(`Hello, ${app_name} - ${kv_app_name}!`);
}
