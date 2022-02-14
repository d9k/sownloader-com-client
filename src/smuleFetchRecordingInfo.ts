import SmuleRecordingInfo from './SmuleRecordingInfo.ts';
import smuleFetchRecordingDescription from './smuleFetchRecordingDescription.ts';
import smuleParseRecordingInfo from './smuleParseRecordingInfo.ts';

export default async function smuleFetchRecordingInfo(
  url: string,
  defaultPerformer: string,
  linkpreviewNetApiKey?: string
): Promise<SmuleRecordingInfo> {
  const description = await smuleFetchRecordingDescription(url, linkpreviewNetApiKey);

  return {
    url,
    ...smuleParseRecordingInfo(description, defaultPerformer),
  };
}
