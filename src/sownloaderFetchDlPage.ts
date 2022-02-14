const SOWNLOADER_URL = 'https://sownloader.com/index.php';

export default async function sownloaderFetchDlPage (smuleRecordingUrl: string): Promise<string> {
  const urlArgs = new URLSearchParams({
    url: smuleRecordingUrl,
  });

  const fetchResult = await fetch(`${SOWNLOADER_URL}?${urlArgs.toString()}`);

  return await fetchResult.text();
}
