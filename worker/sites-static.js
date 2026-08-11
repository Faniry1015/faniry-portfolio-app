const securityHeaders = {
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);

  for (const [name, value] of Object.entries(securityHeaders)) {
    headers.set(name, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return withSecurityHeaders(response);
    }

    const notFoundUrl = new URL("/404.html", request.url);
    const notFoundResponse = await env.ASSETS.fetch(new Request(notFoundUrl, request));

    return withSecurityHeaders(
      new Response(notFoundResponse.body, {
        status: 404,
        headers: notFoundResponse.headers,
      }),
    );
  },
};
