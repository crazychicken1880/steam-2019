/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');
const request_to_key = require("./requests").request_to_key
const getTime = require("./requests").getSeconds
const data = require("./data")
const service = require("./service")
const input = require("./alexa-request")
var Speech = require('ssml-builder'); 
const output = require('./output')

var svc = new service.TimeService(data.load())

console.log('BOOTED')
//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = "amzn1.ask.skill.fb99cb81-62f5-4853-b494-28af15954c8b";
const SKILL_NAME = 'swim skills';

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('AMAZON.HelpIntent');
    },
    "TimeStandardIntent": function () {
        try {
        console.log("Q1")
        var m = this.event.request.intent.slots.Medal.value;
        var key = request_to_key(this.event)
        var time = svc.findTime(key)
        this.response.speak(output.timeAnswer(m, time))
        } catch (err) {
            console.log(err)
            this.response.speak("Ah Snap. I musta pooped in the fridge")
        }
        this.emit(':responseReady');
    },
    "MedalTypeIntent": function () {
        try {
            console.log("Q2")
            var seconds = getTime(this.event)
            var key = request_to_key(this.event)
            medal = svc.findMedal(key, seconds)
            this.response.speak(output.medalAnswer(medal))
        } catch (err) {
            console.log(err)
            this.response.speak("Ah Snap. I musta pooped in the fridge")
        }
        
        this.emit(':responseReady');
    },
    "TimePopIntent": function () {
        try {
            console.log("Q3")
            var medal = this.event.request.intent.slots.Medal.value;
            var seconds = getTime(this.event)
            var key = request_to_key(this.event)
            var pop = svc.findDiff(key, seconds)
            this.response.speak(output.popAnswer(medal, pop))
        } catch (err) {
            console.log(err)
            this.response.speak("Ah Snap. I musta pooped in the fridge")
        }

        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        this.response.speak(output.explain()).listen("ask one of the three questions");
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(output.exit());
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(output.exit());
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(output.exit());
        this.emit(':responseReady');
    },
    'AMAZON.FallbackIntent': function () {
        console.log(this)
        this.response.speak(output.fail());
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};