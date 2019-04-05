const fs     = require('fs')
const Speech = require('ssml-builder');

function readLines(file){
    return fs.readFileSync(file, 'utf-8').split('\n').filter(Boolean);
}
const helpMsg  = fs.readFileSync('help.txt', 'utf8');
const errMsgs  = readLines('error.txt')
const exitMsgs = readLines('exit.txt') 

/**
 * Say the seconds
 * @param {Number} s 
 */
function speakSeconds(s){
    if(s === 0){
        return ""
    } else {
        //make sure the seconds only have hundreths
        s = s.toFixed(2)
        return s + " seconds"
    }
}

/**
 * Say the minutes
 * @param {*} m the minutes to include 
 */
function speakMinutes(m){
    if(m === 0){
        return ""
    } else if(m === 1){
        return "1 minute"
    } else {
        return "" + m + " minutes"
    }
}

/**
 * Say the time the way a coach would
 * @param {Number} seconds 
 */
function asSwimTime(seconds){
    var min = Math.floor(seconds/60)
    var sec = seconds - (min * 60)
    return speakMinutes(min) + " " + speakSeconds(sec)
}

/**
 * What to say when you need help
 */
function explain() {
    var speech = new Speech();
    speech.paragraph(helpMsg)
    return speech.ssml(true)
}

/**
 * What to say when there is a failure
 */
function fail() {
    var speech = new Speech();
    speech.say(errMsgs[Math.floor(Math.random() * errMsgs.length)])
    return speech.ssml(true)
}

/**
 * What to say wher there is an error
 * @param {Error} err 
 */
function error(err) {
    var speech = new Speech();
    speech.say("There was a problem")
    .pauseByStrength('weak')
    .say(err.message)
    return speech.ssml()
}

/**
 * What to say when it quits
 */
function exit() {
    console.log('Exit called')
    var speech = new Speech();
    speech.say(exitMsgs[Math.floor(Math.random()*exitMsgs.length)])
    return speech.ssml()
}

/**
 * Answer to Question 1
 * @param {String} medal 
 * @param {Number} time 
 */
function timeAnswer(medal, time) {
    var answer = new Speech();
    answer
        .say("the")
        .say(medal)
        .say("time is ")
        .say(asSwimTime(time))
    return answer.ssml(true)
}
/**
 * Answer to Question 2
 * @param {String} medal 
 */
function medalAnswer(medal) {
    var answer = new Speech();
    answer
        .say("that time is a")
        .say(medal)
    
        if (medal === 'gold'){
            answer.audio('soundbank://soundlibrary/human/amzn_sfx_large_crowd_cheer_03')
        } else if (medal === 'silver'){
            answer.audio('soundbank://soundlibrary/human/amzn_sfx_large_crowd_cheer_01')
        } else if (medal === 'bronze'){
            answer.audio('soundbank://soundlibrary/human/amzn_sfx_crowd_applause_02')
        }

    return answer.ssml(true)
}

/**
 * Answer to Question 3
 * @param {String} medal 
 * @param {Number} pop 
 */
function popAnswer(medal, pop) {
    console.log('MEDAL POP = ' + pop)
    var answer = new Speech();
    if(pop <= 0){
        answer
        .sayAs({word: 'woo hoo', interpret: 'interjection'})
        .pause('300ms')
        .say("that is already a ")
        .prosody({volume: "x-loud"}, medal)
        .say('time')                
    } else {
        answer
            .say("To reach the ")
            .prosody({volume: "x-loud"}, medal)
            .say("time") 
            .pause('300ms')
            .say("pop ")
            .say(asSwimTime(pop))
    }
    return answer.ssml(true)
}

module.exports = exports = {
    explain: explain,
    timeAnswer, timeAnswer,
    medalAnswer, medalAnswer,
    popAnswer, popAnswer,
    fail: fail,
    error: error,
    exit: exit
}