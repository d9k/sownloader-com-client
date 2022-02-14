import SownloaderDlUrls from './SownloaderDlUrls.ts';

export default function sownloaderParseUrls(sownloaderHtml: string): SownloaderDlUrls {
  const m4aMatch = sownloaderHtml.match(
    /(?:url\=)(https:\/\/c-cl\.cdn\.smule\.com\/.+\.m4a)/m
  );

  if (!m4aMatch) {
    console.error('sownloaderHtml:', sownloaderHtml);
    throw Error(`can't parse audio url from sownloader html`);
  }

  const videoMatch = sownloaderHtml.match(
    /(?:url\=)(https:\/\/c-cl\.cdn\.smule\.com\/.+\.mp4)/m
  )

  const result: SownloaderDlUrls = {
    m4a: m4aMatch[1],
  };

  if (videoMatch && videoMatch[1]) {
    result.video = videoMatch[1];
  }

  return result;
}
