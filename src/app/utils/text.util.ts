export class TextUtil {

  public static takeWords(text: string, take: number) {

    if (take <= 0) {
      return '';
    }

    text = text.trim();

    try {
      const regex = new RegExp(`^((\\S+\\s+){${take - 1}}(\\S+)).`);

      let xWords = text.match(regex);

      if (xWords && xWords.length > 1 && xWords[1].length < text.length) {
        return xWords[1] + ' ...';
      }
    } catch (ex) {
      console.log(ex);
    }

    return text;

  }

  public static capitalize(text: string) {

    return text.replace(/^\w/, c => c.toUpperCase());
    
  }
}
