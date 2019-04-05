var data = require('./data')
var TimeService = require("./service").TimeService
var request = require("./requests")

let alexa_request = {
    request: {
        slots: {
            Stroke:
            {
                name: 'Stroke',
                value: 'free',
                confirmationStatus: 'NONE',
                source: 'USER'
            },
            Medal:
            {
                name: 'Medal',
                value: 'gold',
                confirmationStatus: 'NONE',
                source: 'USER'
            },
            Gender:
            {
                name: 'Gender',
                value: 'womens',
                confirmationStatus: 'NONE',
                source: 'USER'
            },
            AgeGroup:
            {
                name: 'AgeGroup',
                value: '910',
                confirmationStatus: 'NONE',
                source: 'USER'
            },
            Yardage:
            {
                name: 'Yardage',
                value: '25',
                confirmationStatus: 'NONE',
                source: 'USER'
            }
        }
    }
}



console.log(data)
ds = data.load()
var db = new TimeService(ds)
console.log(db)

var r = request.request_to_key(alexa_request)

answer = db.findTime(r.gender, r.age, r.stroke, r.medal)

console.log(answer)

