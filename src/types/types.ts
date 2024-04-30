import type { connection, modualType, Logging } from "./enums";

export interface modual {
  type: modualType;
  id: string;
  status: connection;
  tagId: string;
  videoTitle?: string;
}

export interface log {
  type: Logging;
  message: string;
}
