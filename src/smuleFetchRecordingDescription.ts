import smuleFetchRecordingDescriptionLocally from './smuleFetchRecordingDescriptionLocally.ts';
import smuleFetchRecordingDescriptionByService from './smuleFetchRecordingDescriptionByService.ts';

export default async function smuleFetchRecordingDescription(smuleUrl: string, linkpreviewNetApiKey?: string): Promise<string> {
  let descriptionFetchedByService;
  try {
    descriptionFetchedByService = await smuleFetchRecordingDescriptionByService(smuleUrl, linkpreviewNetApiKey);
  } catch (e) {
    console.error(e);
  }

  if (descriptionFetchedByService) {
    return descriptionFetchedByService
  } else {
    console.error("can't fetch Smule recording description by service");
  }

  const descriptionFetchedLocally = await smuleFetchRecordingDescriptionLocally(smuleUrl);

  if (!descriptionFetchedLocally) {
    throw Error("Fail to fetch Smule recording description locally");
  }

  return descriptionFetchedLocally;
}
