
function NetRequest() {
    const request = net.request({
        url: "http://43.134.181.21:8000/",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    request.write(
        JSON.stringify({
            auth: "CjQexL5SGnC4rqVNlWEBdq",
            converstion: "红烧肉的做法?",
            userInfo: "小蜻蜓",
        })
    );
    request.on("response", (response) => {
        console.log(`**statusCode:${response.statusCode}`);
        console.log(`**header:${JSON.stringify(response.headers)}`);
        response.on("data", (chunk) => {
            console.log("接收到数据：", chunk.toString());
        });
        response.on("end", () => {
            console.log("数据接收完成");
        });
    });
    //结束请求，不然没有响应数据
    request.end();
}
