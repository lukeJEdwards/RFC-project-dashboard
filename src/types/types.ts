import type { connection } from "./enums";

export interface reader {
  id: string;
  status: connection;
  tagId: string;
}
