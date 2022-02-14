import SmuleRecordingInfo from './SmuleRecordingInfo.ts';
import ConfigRecordInfoProcess from './ConfigRecordInfoProcess.ts';
import processPerformerRename from './processPerformerRename.ts';

export default function processSmuleRecordingInfo(recordingInfo: SmuleRecordingInfo, processConfig: ConfigRecordInfoProcess): SmuleRecordingInfo {
  const {performers, song, originalPerformer} = recordingInfo;

  const performersRenamed = processPerformerRename(performers, processConfig.performerRename);

  return {
    ...recordingInfo,
    performers: performersRenamed,
    fileName: `${performersRenamed.join(` ${processConfig.performerSeparator} `)} - ${song} (${originalPerformer} cover)`,
  };
}
