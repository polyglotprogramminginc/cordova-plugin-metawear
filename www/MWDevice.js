/**
 *
 * Created by Lance Gleason of Polyglot Programming LLC. on 10/11/2015.
 * http://www.polyglotprogramminginc.com
 * https://github.com/lgleasain
 * Twitter: @lgleasain
 *
 */

var exec = require('cordova/exec');

module.exports.initialize = function(success, failure){
    console.log("MWDevice.js: initialize");
    exec(success,  failure,  "MWDevice","initialize",[]);
}

module.exports.connect = function(macAddress, success, failure){
    console.log("MWDevice.js: connect");
    exec(success, failure, "MWDevice", "connect", [macAddress]);
}
module.exports.disconnect = function(){
    console.log("MWDevice.js: disconnect");
    exec(null, null, "MWDevice", "disconnect", []);
}

module.exports.scanForDevices = function(success, failure){
    console.log("MWDevice.js: scanForDevices");
    exec(success, failure, "MWDevice", 'scanForDevices', []);
}

module.exports.supportedModules = function(success, failure){
    console.log("MWDevice.js: supportedModules");
    exec(success, failure, "MWDevice", 'supportedModules', []);
}

module.exports.readRssi = function(success, failure){
    console.log("MWDevice.js: scanForDevices");
    exec(success, failure, "MWDevice", 'readRssi', []);
}

module.exports.startAccelerometer = function(success, failure){
    console.log("MWDevice.js: start Accelerometer");
    exec(success, failure, "MWDevice", 'startAccelerometer', []);
}

module.exports.stopAccelerometer = function(){
    console.log("MWDevice.js: stopAccelerometer");
    exec(null, null, "MWDevice", 'stopAccelerometer', []);
}

module.exports.gpioReadAnalogIn = function(pin, success, failure, pullup, readMode){
    console.log("MWDevice.js: gpioReadAnalogIn");
    if(pullup === undefined){
        pullup = null;
    }
    if(readMode === undefined){
        readMode = null;
    }
    console.log(pullup);
    console.log(readMode);
    exec(success, failure, "MWDevice", 'gpioReadAnalogIn', [Number(pin),pullup,readMode]);
}

module.exports.startGyroscope = function(success, failure){
    console.log("MWDevice.js: start Gyroscope");
    exec(success, failure, "MWDevice", 'startGyroscope', []);
}

module.exports.stopGyroscope = function(){
    console.log("MWDevice.js: stopGyroscope");
    exec(null, null, "MWDevice", 'stopGyroscope', []);
}
