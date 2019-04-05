function getSlotValue(event, slot, alt){
    return event.request.intent.slots[slot].value
}

function request_to_key(event){
    _gender   = event.request.intent.slots.Gender.value
    _agegroup = event.request.intent.slots.AgeGroup.value
    _stroke = event.request.intent.slots.Stroke.value
    _medal =  event.request.intent.slots.Medal  ? event.request.intent.slots.Medal.value : null
    _distance = event.request.intent.slots.Distance.value

    gender = gender_token(_gender)
    age    = age_token(_agegroup)
    stroke = stroke_token(_stroke)
    medal = medal_token(_medal)
    distance = distance_token(_distance)

    return {
        gender: gender,
        age: age,
        stroke: stroke,
        distance: distance,
        medal: medal,
    }
}

function getSeconds(event){
    var minutes = 0
    if (event.request.intent.slots.Minutes.value){
        minutes   = Number.parseInt(event.request.intent.slots.Minutes.value)
    }
    var seconds = Number.parseInt(event.request.intent.slots.Seconds.value)
    var hundreths  = Number.parseInt(event.request.intent.slots.Hundreths.value)
    var time = (minutes * 60) + seconds + (hundreths / 100)
    return time
}

function gender_token(input){
    switch(input){
        case "women":
        case "girls":
        case "girl":
        case "female":
        case "women's":
        case "ladies":
            return "girls"
        case "men":
        case "boys":
        case "boy":
        case "male":
        case "men's":
        case "dudes":
            return "boys"
        default:
            throw new Error("unknown gender")

    }
}

function medal_token(input){

    if(!input) return null

    switch(input){
        case "gold":
            return "gold"
        case "silver":
            return "silver"
        case "bronze":
            return "bronze"
        default:
            throw new Error("no such medal")
    }
}


function stroke_token(input){
    switch(input){
        case "free":
        case "freestyle":
        case "crawl":
            return "free"
        case "back":
        case "backstroke":
            return "back"
        case "breast":
        case "breaststroke":
            return "breast"
         case "fly":
         case "butterfly":
            return "fly"
        case "im":
        case "individual medley":
            return "im"
        default:
            throw new Error("no such stroke")
    }
}


function age_token(input){
    console.log('AGE GROUP:', input)
    switch(input){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "6u":
        case "6U":
        case "6 and under":
        case "six and under":
            return 6
        case "7":
        case "8":
        case "78":
            return 8
        case "9":
        case "10":
        case "910":
        case 910:
            return 10
        case "11":
        case "12":
        case "1112":
        case 1112:
            return 12
        case "13":
        case "14":
        case "1314":
        case 1314:
            return 14
        case "15":
        case "16":
        case "17":
        case "18":
        case "1518":
        case 1518:
            return 18
        default:
            throw new Error("Invalid age group")
    }
}
function distance_token(input){
    switch(input){
        case "25 yard":
        case "25 yards":
        case "25":
        case 25:
            return 25
        case "50 yards":
        case "50 yard":
        case "50":
        case 50:
            return 50
        case "100 yards":
        case "100 yard":
        case "100":
        case 100:
            return 100
        default:
            throw new Error("not a distance")
    }
}

module.exports = {
    request_to_key : request_to_key,
    getSeconds : getSeconds
}