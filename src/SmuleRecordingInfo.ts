import SmuleRecordingInfoRaw from './SmuleRecordingInfoRaw.ts';

export type SmuleRecordingInfo = SmuleRecordingInfoRaw & {
  performersText: string;
  songText: string;
  fileName?: string;
}

export default SmuleRecordingInfo;
