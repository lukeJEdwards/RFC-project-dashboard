import type { connection, modualType } from "./enums";

export interface modual {
  type: modualType;
  id: string;
  status: connection;
  tagId: string;
}
