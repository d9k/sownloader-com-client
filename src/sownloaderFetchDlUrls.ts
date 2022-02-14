import SownloaderDlUrls from './SownloaderDlUrls.ts';
import sownloaderFetchDlPage from './sownloaderFetchDlPage.ts';
import sownloaderParseDlUrls from './sownloaderParseUrls.ts';

export default async function sownloaderFetchDlUrls(smuleUrl: string): Promise<SownloaderDlUrls> {
  const sownloaderPageHtml = await sownloaderFetchDlPage(smuleUrl);

  return {
    smuleUrl,
    ...sownloaderParseDlUrls(sownloaderPageHtml),
  };
}
