import ConfigRecordInfoProcess from './ConfigRecordInfoProcess.ts';

export default function processPerformerRename(performers: string[], renameRules: ConfigRecordInfoProcess['performerRename'] = {}) {
  if (!renameRules) {
    return performers;
  }

  return performers.map(performer => {
    return renameRules[performer] || performer;
  })
}
