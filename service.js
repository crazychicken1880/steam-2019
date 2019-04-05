//var data = require("./data")


//
//console.log(data)


//Questions 1 - 
//console.log(data["boys"][14]["fly"]["silver"])
//console.log(data["boys"][18][100]["fly"]["silver"])

//Questions 2 - Given a time & scope find the medal
// var time 
// console.log("Testing time of " + time + " for boys/10/breast")
// var scope = data["boys"][10]["breast"]
// //onsole.log(scope)
// var medals = ["bronze", "silver", "gold"]

// var your_medal = "no medal"
// for(i in medals){
//     //console.log(time + "=>" + scope[medals[i]])
//     if(time <= scope[medals[i]]){
//         your_medal = medals[i]
//     }
// }
// console.log("your medal is: " + your_medal)

//Questions 2 - Given a time & scope find the medal
//console.log("Testing time of " + time + " for boys/10/breast/gold")
// var goal = data["boys"][10]["breast"]["gold"]

// var drop = (time - goal).toFixed(2)

// if(drop < 0){
//     console.log("You are already there!")
// } else {
//     console.log('You need to drop ' + drop + " seconds")  
// }

const utils = require("./common")

module.exports.TimeService = class TimeService {

    constructor(data){
        this._data   = data
        this._medals = ["bronze", "silver", "gold"]
    }

    findTime(key){
        try {
            //console.log("searching::" + key.gender + "/" + key.age + "/" + key.distance + "/" + key.stroke + "/" + key.medal)
            return this._data[key.gender][key.age][key.distance][key.stroke][key.medal].toFixed(2)
        } catch (err) {
            console.log(err)
            return "Unknown"
        }
    }
    
    findMedal(key, time){
        try {
            if(typeof time === 'string'){
                time = utils.time_to_seconds(time)
            }

            var scope = this._data[key.gender][key.age][key.distance][key.stroke]
            var your_medal = "no medal"
            var medals = this._medals
            console.log(medals)
            for(var idx in medals) {
                if(time <= scope[medals[idx]]){
                    your_medal = medals[idx]
                }   
            }
            return your_medal
        } catch (err) {
            console.log(err)
            return "Unknown"
        }
    }

    findDiff(key, time){
        try {
            if(typeof time === 'string'){
                time = utils.time_to_seconds(time)
            }
            var goal = this._data[key.gender][key.age][key.distance][key.stroke][key.medal]
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

    dump(){
        return JSON.stringify(this._data, null, "  ")
    }   
}