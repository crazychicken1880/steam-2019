const request_to_key = require("./requests").request_to_key
const data = require("./data")
const service = require("./service")
const input = require("./alexa-request")

var svc = new service.TimeService(data.load())

var requests = [
    input("boys", "1518", "50", "free", "gold")
]

var key = request_to_key(requests[0])
//console.log(JSON.stringify(key, null, "  "))

var key = request_to_key(requests[0])
svc.findTime(request_to_key(requests[idx]))

for(idx in requests){
    console.log("standard:", svc.findTime(request_to_key(requests[idx])))
}

console.log("your medal:", svc.findMedal(request_to_key(requests[0]), "23.98"))
console.log("seconds to drop:", svc.findDiff(request_to_key(requests[0]), "18.98"))