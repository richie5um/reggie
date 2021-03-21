import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
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
  private lastAction: string;

  public matchhelp: boolean = false;
  public replacehelp: boolean = false;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.load();
    this.match();
  }

  load() {
    const match = this.localStorageService.getItem('re-match');
    this.regexmatch = match ? match : this.regexmatch;

    const options = this.localStorageService.getItem('re-options');
    this.regexoptions = options ? options : this.regexoptions

    const replace = this.localStorageService.getItem('re-replace');
    this.regexreplace = replace ? replace : this.regexreplace;

    const input = this.localStorageService.getItem('re-input');
    this.input = input ? input : this.input;
  }

  save() {
    this.localStorageService.setItem('re-match', this.regexmatch);
    this.localStorageService.setItem('re-options', this.regexoptions);
    this.localStorageService.setItem('re-replace', this.regexreplace);
    this.localStorageService.setItem('re-input', this.input);
  }

  runLastAction() {
    switch (this.lastAction) {
      case 'replace':
        this.replace();
      case 'match':
      default:
        this.match();
    }
  }

  match() {
    this.lastAction = 'match';
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

    if (index < match.indices.length) {
      const position = match.indices[index];

      if (position) {
        matchelements.splice(position[1], 0, '</span>');
        matchelements.splice(position[0], 0, '<span class="highlight">');

        return matchelements.join('');
      }
    }

    return match.input;
  }

  replace() {
    this.lastAction = 'replace';
    this.matches = undefined;
    this.replaces = undefined;

    const regex = new RegExp(this.regexmatch, this.regexoptions);

    let replaces = [];
    const inputs = this.input.split('\n');
    for (const input of inputs) {
      const replace = input.replace(regex, this.regexreplace);
      replaces = replaces.concat({ input: input, output: replace });
    }

    this.replaces = replaces;
  }
}
