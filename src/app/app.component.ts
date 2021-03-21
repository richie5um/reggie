import { Component } from '@angular/core';
import { RegexUtil } from './utils/regex.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-regex';

  public regexoptions: string = 'g';
  public regexmatch: string = '(h(el)l(o))';
  public regexreplace: string = '';
  public input: string = 'hello world\nhello\nzzz';
  public replaces: any[] = [];
  public matches: any[] = [];

  match() {
    this.matches = undefined;
    this.replaces = undefined;

    const regex = new RegExp(this.regexmatch, this.regexoptions);

    let matches = [];
    const inputs = this.input.split('\n');
    for (const input of inputs) {
      const match = RegexUtil.matchAll(regex, input);
      matches = matches.concat({ input: input, results: match });
    }

    for (const match of matches) {
      for (const results of match.results) {
        for (let j = 0; j < results.length; ++j) {
          const html = this.regexhtmlmarkup(results, j)

          results[j] = { text: results[j], html: html };
        }
      }
    }

    this.matches = matches;
  }

  private regexhtmlmarkup(match, index) {
    let matchelements = match.input.split('');
    const position = match.indices[index];

    matchelements.splice(position[1], 0, '</span>');
    matchelements.splice(position[0], 0, '<span class="highlight">');

    return matchelements.join('');
  }

  replace() {
    this.matches = undefined;
    this.replaces = undefined;

    let replaces = [];
    const inputs = this.input.split('\n');
    for (const input of inputs) {
      const replace = RegexUtil.replaceAll(input, this.regexmatch, this.regexreplace);
      replaces = replaces.concat({ input: input, output: replace });
    }

    this.replaces = replaces;
  }
}
