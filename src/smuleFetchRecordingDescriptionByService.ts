const LINKPREVIEW_NET_API_URL = 'http://api.linkpreview.net/';

export default async function smuleFetchRecordingDescriptionByService(url: string, linkpreviewNetApiKey?: string): Promise<string> {
  if (!linkpreviewNetApiKey) {
    throw Error('linkpreview.net API key is not set!');
  }

  const queryParams = new URLSearchParams({key: linkpreviewNetApiKey, q: url})
  const fetchResult = await fetch(LINKPREVIEW_NET_API_URL + '?' + queryParams.toString());
  const json = await fetchResult.json();
  return json.description;
}
