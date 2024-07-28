enum RequestOptions {
  get = "GET",
  post = "POST",
  put = "PUT",
  patch = "PATCH",
  head = "HEAD",
  options = "OPTIONS",
  trace = "TRACE",
  connect = "CONNECT",
  delete = "DELETE",
}

console.log(RequestOptions.get); // "GET"
console.log(RequestOptions["post"]); // "POST"

const request: RequestOptions = RequestOptions.get;
console.log(request);

enum RequestStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
}

console.log(RequestStatus.OK);
console.log(RequestStatus["ACCEPTED"]);

interface ApiResponse<T> {
  status: RequestStatus;
  data: T;
}

enum RequestType {
  readData = "READ_DATA",
  writeData = "WRITE_DATA",
  updateData = "UPDATE_DATA",
  deleteData = "DELETE_DATA",
  statusCode = 500,
  errorMsg = "Internal Server Error",
}

console.log(RequestType.writeData);
console.log(RequestType["errorMsg"]);
