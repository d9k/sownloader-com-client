#!/usr/bin/awk BEGIN{system("deno run --allow-all "ARGV[1]"  "ARGV[2]" "ARGV[3]" "ARGV[4]" "ARGV[5])}
import * as path from './deps/path.ts';
import * as flags from './deps/flags.ts';
import util from "./deps/util.ts";
import smuleFetchRecordingInfo from './src/smuleFetchRecordingInfo.ts';
import configRead from './src/configRead.ts';
import smuleRecordingInfoProcess from './src/smuleRecordingInfoProcess.ts';
import json from './src/json.ts';
import sownloaderFetchDlUrls from './src/sownloaderFetchDlUrls.ts';
import { downloadFile } from './src/downloadFile.ts';
import execWithTrace from './src/execWithTrace.ts';

util.inspect.defaultOptions.breakLength = 200;
util.inspect.defaultOptions.maxArrayLength = 200;

// TODO can't get own name when installed from web
//   see https://github.com/denoland/deno/issues/5725
// let scriptPath = path.fromFileUrl(import.meta.url);
// let scriptFile = path.basename(scriptPath);

let scriptFile = 'sownloader-com-client';

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

const recordingInfoRaw = await smuleFetchRecordingInfo(
  smuleRecordingUrl,
  defaultPerformer,
  linkPreviewNetApiKey
);

const recordingInfo = smuleRecordingInfoProcess(recordingInfoRaw, {
  performerRename,
  performerOrder,
  performerSeparator
})

console.log('recording info:', json(recordingInfo));

const sownloaderDlUrls = await sownloaderFetchDlUrls(smuleRecordingUrl);

console.log('sownloader dl urls:', json(sownloaderDlUrls));

const { fileName } = recordingInfo;

const m4a = `${fileName}.m4a`;
const mp3 = `${fileName}.mp3`;
const video = `${fileName}.mp4`;

const processAudio = async () => {
  console.log('Downloading audio...');

  await downloadFile(sownloaderDlUrls.m4a, m4a);

  console.log('Audio saved');
  console.log('Converting to mp3...');

  await execWithTrace([
    'ffmpeg',
    // overwrite without asking
    '-y',
    '-i', m4a,
    '-metadata', `artist=${recordingInfo.performersText}`,
    '-metadata', `title=${recordingInfo.songText}`,
    '-codec:a', 'libmp3lame',
    '-qscale:a', '1',
    mp3,
  ]);

  console.log('Converted to mp3...');
}

const processVideo = async () => {
  if (!sownloaderDlUrls.video) {
    return;
  }

  console.log('Downloading video...');

  await downloadFile(sownloaderDlUrls.video, video);

  console.log('Video saved');
}

// run in parallel
processAudio().then();
processVideo().then();
