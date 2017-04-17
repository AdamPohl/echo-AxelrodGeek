'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = 'amzn1.ask.skill.f08de6a7-025a-4289-b836-5c2ebc7d84b7';
var SKILL_NAME = 'Axelrod Geek';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The prisoner's dilemma is a famous game theory problem.",
    "The Axelrod tournament consists of different strateries playing against each other in an itereted prisoner's dilemma.",
    "Robert Axelrod held the first Axelrod tournament in 1980.",
    "on 16th February 2015, Dr Vince Knight initilised the repository on GitHub to reproduce the Axelrod tournament in Python.",
    "As of 29th March 2017 there have been 4009 commits to the library from 47 contributors and 206 different stratergies.",
    "The stratergy Tit For Tat won the original tournemant.",
    "The original tournemantonly consisted of 14 stratergies."
    "Tit For Tat is regarded as the simpliest stratergy subbmitted to the Axelrod tournemant.",
    "Axelrod described his first tournemant in his 1980`s paper called  Effective choice in the Prisoner`s Dilemma.",
    "The Tit For Tat stratergy will cooperate at first and then play whatever its opponent played last.",
    "In the prisenor`s dilemma you either cooperate or defect",
    "In the prisoner`s dilemma, if both players cooperate then they both get a utility of 3, if one defects whilst the other cooperates then the defector gets a utility of 5 whilst the cooperater gets a utility of 0. If they both defect then they each get a utility of 1.",
    "Some of the stratergies in the Axelrod-Python library will alter the abilities of its opponent so that it will always win.",
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
