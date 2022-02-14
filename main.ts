#!/usr/bin/awk BEGIN{system("deno run --allow-all "ARGV[1]"  "ARGV[2]" "ARGV[3]" "ARGV[4]" "ARGV[5])}
import * as path from './deps/path.ts';
import * as flags from './deps/flags.ts';
import util from "./deps/util.ts";
import smuleFetchRecordingInfo from './src/smuleFetchRecordingInfo.ts';
import configRead from './src/configRead.ts';
import processSmuleRecordingInfo from './src/processSmuleRecordingInfo.ts';
import json from './src/json.ts';
import sownloaderFetchDlUrls from './src/sownloaderFetchDlUrls.ts';

util.inspect.defaultOptions.breakLength = 200;
util.inspect.defaultOptions.maxArrayLength = 200;

let scriptPath = path.fromFileUrl(import.meta.url);
let scriptFile = path.basename(scriptPath);
const configPath = Deno.env.get("HOME") + "/.sownloader-com-client";

const args = flags.parse(Deno.args);

function showUsageAndExit() {
  console.log(
    `Usage:
    ${scriptFile} [--default-perfomer="DEFAULT_PERFORMER"] SMULE_RECORDING_URL`
  );
  Deno.exit(1);
}

if (args._.length < 1) {
  showUsageAndExit();
}

const config = configRead(configPath);

const {
  linkPreviewNetApiKey,
  performerSeparator,
  performerRename,
  performerOrder
} = config;

const defaultPerformer = args['default-performer'] || config.defaultPerformer;

const smuleRecordingUrl: string = args._[0] + '';

// console.log(smuleUrlToDownload);

const recordingInfo = await smuleFetchRecordingInfo(
  smuleRecordingUrl,
  defaultPerformer,
  linkPreviewNetApiKey
);

const recordingInfoProcessed = await processSmuleRecordingInfo(recordingInfo, {
  performerRename,
  performerOrder,
  performerSeparator
})

console.log('recording info:', json(recordingInfoProcessed));

const sownloaderDlUrls = await sownloaderFetchDlUrls(smuleRecordingUrl);

console.log('sownloader dl urls:', json(sownloaderDlUrls));
