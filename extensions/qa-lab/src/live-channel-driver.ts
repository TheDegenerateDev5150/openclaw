// Qa Lab plugin module models native live channel-driver metadata.

export type QaLiveChannelId = "discord" | "matrix" | "slack" | "telegram" | "whatsapp";

export const QA_LIVE_SUPPORTED_CHANNELS = [
  "discord",
  "matrix",
  "slack",
  "telegram",
  "whatsapp",
] as const satisfies readonly QaLiveChannelId[];

export function isQaLiveSupportedChannel(input?: string | null): input is QaLiveChannelId {
  const normalized = input?.trim().toLowerCase();
  return Boolean(normalized && QA_LIVE_SUPPORTED_CHANNELS.includes(normalized as QaLiveChannelId));
}
