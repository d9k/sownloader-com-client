import { Config } from './Config.ts';

export default function defaultConfig(): Config {
  return {
    defaultPerformer: 'UnknownPerformer',
    linkPreviewNetApiKey: '',
    performerSeparator: 'and',
    performerOrder: ['bbb', 'aaa'],
    performerRename: {'bbb': 'B. B. B.'},
  };
}
