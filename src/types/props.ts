import type { modualType } from "./enums";

export interface svgProps {
  fill?: string;
  stroke?: string;
}

export interface modualProps {
  id: string;
  tagId: string;
  modualType: modualType;
  videoTitle?: string;
}
