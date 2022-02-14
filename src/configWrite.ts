import * as toml from '../deps/toml.ts';
import { Config } from './Config.ts';

export default function configWrite(configPath: string, config: Config) {
  const configTomlText = toml.stringify(config);
  Deno.writeTextFileSync(configPath, configTomlText);
}
