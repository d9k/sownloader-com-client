import smuleFetchRecordingDescription from './smuleFetchRecordingDescription.ts';
import smuleParseRecordingInfo from './smuleParseRecordingInfo.ts';
import SmuleRecordingInfoRaw from './SmuleRecordingInfoRaw.ts';

export default async function smuleFetchRecordingInfo(
  url: string,
  defaultPerformer: string,
  linkpreviewNetApiKey?: string
): Promise<SmuleRecordingInfoRaw> {
  const description = await smuleFetchRecordingDescription(url, linkpreviewNetApiKey);

  return {
    url,
    ...smuleParseRecordingInfo(description, defaultPerformer),
  };
}
