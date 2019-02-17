var data = require("./data")


//
//console.log(data)


//Questions 1 - 
//console.log(data["boys"][14]["fly"]["silver"])
//console.log(data["boys"][18][100]["fly"]["silver"])

//Questions 2 - Given a time & scope find the medal

var time = 44.32
console.log("Testing time of " + time + " for boys/10/breast")
var scope = data["boys"][10]["breast"]
//onsole.log(scope)
var medals = ["bronze", "silver", "gold"]

var your_medal = "no medal"
for(i in medals){
    //console.log(time + "=>" + scope[medals[i]])
    if(time <= scope[medals[i]]){
        your_medal = medals[i]
    }
}
console.log("your medal is: " + your_medal)

//Questions 2 - Given a time & scope find the medal
//console.log("Testing time of " + time + " for boys/10/breast/gold")
var goal = data["boys"][10]["breast"]["gold"]

var drop = (time - goal).toFixed(2)

if(drop < 0){
    console.log("You are already there!")
} else {
    console.log('You need to drop ' + drop + " seconds")  
}

class TimeService {
    constructor(data){
        this.data = data
        this.medals = ["bronze", "silver", "gold"]
    }

    findTime(gender, age, stroke, medal){
        try {
            return data[gender][age][stroke][medal].toFixed(2)
        } catch (err) {
            return "Unknown"
        }
    }
    
    findMedal(gender, age, stroke, time){
        try {

            if(typeof time === 'string'){
                time = utils.time_to_seconds(time)
            }

            var scope = data[gender][age][stroke]
            var your_medal = "no medal"
            for(i in medals) {
                //console.log(time + "=>" + scope[medals[i]])
                if(time <= scope[medals[i]]){
                    your_medal = this.medals[i]
                }   
            }
            return your_medal
        } catch (err) {
            return "Unknown"
        }
    }

    findDiff(gender, age, stroke, medal, time){
        try {

            if(typeof time === 'string'){
                time = utils.time_to_seconds(time)
            }

            var goal = data[gender][age][stroke][medal]
            var drop = (time - goal).toFixed(2)
            if(drop < 0){
               return 0
            } else {
                return drop
            }
        } catch (err) {
            return "Unknown"
        }
    }
    
}

class Scope{
    constructor(){}

    get gender(){
        return this._gender
    }

    set gender(gender){
        this._gender = gender
        return this
    }

    get age(){
        return this._age
    }

    set age(age){
        this._age = age
        return this
    }

    get stroke(){
        return this._stroke
    }

    set stroke(stroke){
        this._stroke = stroke
        return this
    }
}


console.log("===================================================")
let service = new TimeService(data)
console.log(service.findTime("boys", "12", "breast", "silver"))
console.log(service.findMedal("boys", "12", "breast","23 seconds"))
console.log(service.findDiff("boys", "11", "breast","silver", "6 minutes")) 

// service.findTime(medal, scope)
// service.findMedal(time,scope)
// service.findDiff(time, medal, scope)