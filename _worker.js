export default {
  async fetch(request, env) {
    const url = new Url(request.url)
    url.host = "api.openai.com"
    
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    })
  }
}
