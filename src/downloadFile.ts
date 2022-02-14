import { fromStreamReader } from '../deps/streams.ts';

/** https://stackoverflow.com/a/61945064/1760643 */
export async function downloadFile(fileUrl: string, filePath: string) {
  const fetchResult = await fetch(fileUrl);
  const newFile = await Deno.open(filePath, { create: true, write: true })

  const streamReader = fromStreamReader(fetchResult.body!.getReader());
  await Deno.copy(streamReader, newFile);
  newFile.close();
}
