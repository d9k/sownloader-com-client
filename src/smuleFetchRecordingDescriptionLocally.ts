import { DOMParser } from "../deps/denoDom.ts";

export default async function smuleFetchRecordingDescriptionLocally(url: string): Promise<string> {
  const fetchResult = await fetch(url);

  const html = await fetchResult.text();

  const dom = new DOMParser().parseFromString(html, 'text/html');

  if (!dom) {
    console.error('html:', html);
    throw Error('html parse failed!');
  }

  const descriptionEl = dom.querySelector('meta[property="og:description"]');

  if (!descriptionEl) {
    console.error('html:', html);
    throw Error('description search in html failed!');
  }

  const description = descriptionEl.attributes.content;

  if (!description) {
    console.error('html:', html);
    console.error('descriptionEl:', descriptionEl.outerHTML);
    throw Error('description element content is empty!');
  }

  return description;
}
