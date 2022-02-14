import ConfigRecordInfoProcess from './ConfigRecordInfoProcess.ts';

export type Config = ConfigRecordInfoProcess & {
  defaultPerformer: string;
  linkPreviewNetApiKey: string;
}
