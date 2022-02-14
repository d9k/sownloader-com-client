import SmuleRecordingInfo from './SmuleRecordingInfo.ts';
import ConfigRecordInfoProcess from './ConfigRecordInfoProcess.ts';
import processPerformerRename from './processPerformerRename.ts';
import SmuleRecordingInfoRaw from './SmuleRecordingInfoRaw.ts';
import processPerformerOrder from './processPerformerOrder.ts';

export default function smuleRecordingInfoProcess(
  recordingInfo: SmuleRecordingInfoRaw,
  processConfig: ConfigRecordInfoProcess
): SmuleRecordingInfo {
  const {performers, song, originalPerformer} = recordingInfo;

  const performersOrdered = processPerformerOrder(performers, processConfig.performerOrder);

  const performersRenamed = processPerformerRename(
    performersOrdered,
    processConfig.performerRename
  );

  const performersText = performersRenamed.join(` ${processConfig.performerSeparator} `);
  const songText = `${song} (${originalPerformer} cover)`;

  return {
    ...recordingInfo,
    performers: performersRenamed,
    performersText,
    songText,
    fileName: `${performersText} - ${songText}`,
  };
}
