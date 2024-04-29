// src/index.js
var src_default = {
  async fetch(request, env, ctx) {
    if (request.method === 'POST') {
           return new Response('This is a POST Request', {
               headers: {
                   'content-type': 'application/json',
               },
           });
       }
       else{
           return new Response('Hello World - this is NOT a POST Request', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map

