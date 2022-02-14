import SmuleRecordingInfo from './SmuleRecordingInfo.ts';

export default function smuleParseRecordingInfo(description: string, defaultPerformer: string = 'UnknownPerformer'): SmuleRecordingInfo {
  let recordingInfoParts = description.match(/(.*) - (.*) recorded by (.*) on Smule/m);
  let isJoinLink = false;

  if (!recordingInfoParts || !recordingInfoParts[0]) {
    console.debug(`can't parse "${description}!". Trying regex for join links`);

    isJoinLink = true;

    recordingInfoParts = description.match(/Sing (.*) - (.*) and join (.*) on Smule/m);
  }

  if (!recordingInfoParts || !recordingInfoParts[0]) {
    throw Error(`can't parse "${description}!"`);
  }

  const [ , originalPerformer, song, performersString ] = recordingInfoParts;

  const performers = performersString.split(' and ');

  if (isJoinLink) {
    performers.unshift(defaultPerformer);
  }

  return {
    originalPerformer,
    description,
    performers,
    song
  }
}
