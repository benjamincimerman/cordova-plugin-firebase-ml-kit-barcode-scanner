#!/usr/bin/env node
"use strict";

const fs = require("fs");

var config = fs.readFileSync("config.xml").toString();
var name = config.match(/<name>([^<]*)<\/name>/)[1];

const IOSPlatform = "platforms/ios";
const IOSDestination = IOSPlatform + "/" + name + "/Resources/GoogleService-Info.plist";
const IOSSrc = "GoogleService-Info.plist";

const AndroidPlatform = "platforms/android";
const AndroidDestination = AndroidPlatform + "/app/google-services.json";
const AndroidSrc = "google-services.json";

module.exports = function(context) {

}
