const SOWNLOADER_URL = 'https://sownloader.com/index.php';

export type SownloaderFetchDlPageResult = {
  sownloaderPageHtml: string;
  sownloaderPageUrl: string;
}

export default async function sownloaderFetchDlPage (smuleRecordingUrl: string): Promise<SownloaderFetchDlPageResult> {
  const urlArgs = new URLSearchParams({
    url: smuleRecordingUrl,
  });

  const sownloaderPageUrl = `${SOWNLOADER_URL}?${urlArgs.toString()}`;
  const fetchResult = await fetch(sownloaderPageUrl);

  return {
    sownloaderPageUrl,
    sownloaderPageHtml: await fetchResult.text(),
  };
}
