import { exec } from '../deps/exec.ts';

export default async function execWithTrace(cmdParts: string[]): Promise<string> {
  console.log("> " + cmdParts.join(" "));
  return exec(cmdParts);
}
