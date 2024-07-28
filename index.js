var RequestOptions;
(function (RequestOptions) {
    RequestOptions["get"] = "GET";
    RequestOptions["post"] = "POST";
    RequestOptions["put"] = "PUT";
    RequestOptions["patch"] = "PATCH";
    RequestOptions["head"] = "HEAD";
    RequestOptions["options"] = "OPTIONS";
    RequestOptions["trace"] = "TRACE";
    RequestOptions["connect"] = "CONNECT";
    RequestOptions["delete"] = "DELETE";
})(RequestOptions || (RequestOptions = {}));
console.log(RequestOptions.get); // "GET"
console.log(RequestOptions["post"]); // "POST"
var request = RequestOptions.get;
console.log(request);
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["OK"] = 200] = "OK";
    RequestStatus[RequestStatus["CREATED"] = 201] = "CREATED";
    RequestStatus[RequestStatus["ACCEPTED"] = 202] = "ACCEPTED";
    RequestStatus[RequestStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    RequestStatus[RequestStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    RequestStatus[RequestStatus["FOUND"] = 302] = "FOUND";
    RequestStatus[RequestStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    RequestStatus[RequestStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    RequestStatus[RequestStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    RequestStatus[RequestStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    RequestStatus[RequestStatus["CONFLICT"] = 409] = "CONFLICT";
    RequestStatus[RequestStatus["SERVER_ERROR"] = 500] = "SERVER_ERROR";
    RequestStatus[RequestStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    RequestStatus[RequestStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    RequestStatus[RequestStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    RequestStatus[RequestStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    RequestStatus[RequestStatus["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
})(RequestStatus || (RequestStatus = {}));
console.log(RequestStatus.OK);
console.log(RequestStatus["ACCEPTED"]);
var RequestType;
(function (RequestType) {
    RequestType["readData"] = "READ_DATA";
    RequestType["writeData"] = "WRITE_DATA";
    RequestType["updateData"] = "UPDATE_DATA";
    RequestType["deleteData"] = "DELETE_DATA";
    RequestType[RequestType["statusCode"] = 500] = "statusCode";
    RequestType["errorMsg"] = "Internal Server Error";
})(RequestType || (RequestType = {}));
console.log(RequestType.writeData);
console.log(RequestType["errorMsg"]);
