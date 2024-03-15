//take data from another server
const http = require('http');

const Options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
}
const apiReq = http.request(Options, (apiRes) => {
    apiRes.on("data", (data) => {
        console.log(data.toString());
    })
})

apiReq.on("error", () => {
    console.log(e);
})
apiReq.end();