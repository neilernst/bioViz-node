var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/data"] = requestHandlers.data;
handle["/autocomplete"] = requestHandlers.autocomplete;

server.start(router.route, handle);