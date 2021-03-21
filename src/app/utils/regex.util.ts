import * as execWithIndices from 'regexp-match-indices';

export class RegexUtil {
  public static replaceAll(input: string, from: string, to: string): string {

    const regex = new RegExp(this.escape(from), 'g');

    return input.replace(regex, to);

  }

  public static escape(input: string): string {

    return input
      .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
      .replace(/-/g, '\\x2d');

  }

  public static matchAll(regex: RegExp, text: string) {

    let matches = [];

    try {
      let match;
      while ((match = execWithIndices(regex, text)) != null) {
        match.lastIndex = regex.lastIndex;
        matches.push(match);

        if (!regex.global) {
          break
        }
      }
    } catch (ex) {
      console.log(ex);
    }

    return matches;

  }
}
