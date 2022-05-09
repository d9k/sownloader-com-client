import SownloaderDlUrls from './SownloaderDlUrls.ts';
import sownloaderFetchDlPage from './sownloaderFetchDlPage.ts';
import sownloaderParseDlUrls from './sownloaderParseUrls.ts';

export default async function sownloaderFetchDlUrls(smuleUrl: string): Promise<SownloaderDlUrls> {
  const { sownloaderPageHtml, sownloaderPageUrl} = await sownloaderFetchDlPage(smuleUrl);

  let sownloaderDlUrls: SownloaderDlUrls;

  try {
    sownloaderDlUrls = sownloaderParseDlUrls(sownloaderPageHtml);
  } catch (e) {
    console.error('sownloaderPageUrl: ', sownloaderPageUrl);
    throw e;
  }

  return {
    smuleUrl,
    ...sownloaderDlUrls,
  };
}
