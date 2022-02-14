import { Config } from './Config.ts';
import * as toml from '../deps/toml.ts';
import defaultConfig from './defaultConfig.ts';
import configWrite from './configWrite.ts';

export default function configRead(configPath: string): Config {
  let config: Config = defaultConfig();

  try {
    const configTomlText = Deno.readTextFileSync(configPath);
    const parsedConfig = toml.parse(configTomlText) as Config;
    config = {
      ...config,
      ...parsedConfig,
    }
  } catch (e) {}

  configWrite(configPath, config);

  return config;
}
