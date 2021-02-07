import { whyEmojiTxt } from "./code";

declare const global: {
  [x: string]: unknown
}

global.whyEmojiTxt = whyEmojiTxt;
