type EMOJI_HASH = {
  [emojiCode: string]: Array<string>;
}

export const whyEmojiTxt = (emojiIcon :string) :string =>  {
  const unicode :EMOJI_HASH = require("./emoji_ja2shortname_hira.json")
  if(emojiIcon){
    const emojiIconShortNameList :Array<string> = unicode[emojiIcon]
    if(emojiIconShortNameList === undefined){
      return '絵文字未対応'
    }else{
      const emojiIconShortName :string | undefined = emojiIconShortNameList.shift()
      if(emojiIconShortName === undefined) {
        return '翻訳未対応'
      }else{
        return emojiIconShortName
      }
    }
  }else{
    return '---'
  }
}
