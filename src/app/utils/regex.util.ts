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

    let match;
    while ((match = execWithIndices(regex, text)) != null) {
      match.lastIndex = regex.lastIndex;

      // Check for '.*' matching nothing issues, and exit early.
      if (match.length === 1 && match[0] === '' && match.lastIndex === text.length) {
        break;
      }

      // To prevent loops for regex that match zero characters.
      if (match.index === regex.lastIndex && match.length === match.filter(m => m.length === 0).length) {
        regex.lastIndex++;
      }

      // Circuit breaker
      if (matches.length > 1000) {
        throw `CircuitBreaker: Exceeded match limit (1000)`;
      }

      matches.push(match);

      if (!regex.global) {
        break
      }
    }

    return matches;

  }
}
