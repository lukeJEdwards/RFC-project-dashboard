import type { modualType } from "./enums";

export interface titleProps {
  title: string;
  subTitle?: string;
}

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
