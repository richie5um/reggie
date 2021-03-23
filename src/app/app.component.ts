import { Component } from '@angular/core';
import * as CircuitBreaker from 'opossum';

import { LocalStorageService } from './services/local-storage.service';
import { RegexUtil } from './utils/regex.util';

export interface RegexMatch {
  text: string;
}

export interface Options {
  hideNoMatches: boolean;
  hideLine: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reggie';

  public regexMatches: RegexMatch[] = [];
  public regexMatchesIndex = 0;

  public regexReplaces: RegexMatch[] = [];
  public regexReplacesIndex = 0;

  public regexoptions: string = 'g';
  public regexmatch: string = '(h(el)l(o))';
  public regexreplace: string = '$';
  public input: string = 'hello world\nhello\nzzz';
  public replaces: any[] = [];
  public matches: any[] = [];
  public lastAction: string = 'match';

  public matchshow: boolean = true;
  public replaceshow: boolean = true;
  public inputshow: boolean = true;
  public outputshow: boolean = true;

  public matchhelp: boolean = false;
  public replacehelp: boolean = false;

  public matcherror: any;
  public replaceerror: any;

  public options: Options = {
    hideNoMatches: false,
    hideLine: false
  };

  private debug = true;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.load();
    this.runLastAction();
  }

  load() {
    const matches = this.localStorageService.getJson('re-matches');
    this.regexMatches = matches ? matches : [{ text: this.regexmatch }];

    const matchesIndex = this.localStorageService.getJson('re-matchesindex');
    this.regexMatchesIndex = matchesIndex ? matchesIndex : 0;

    if (this.regexMatchesIndex > this.regexMatches.length) {
      this.regexMatchesIndex = 0;
    }

    const replaces = this.localStorageService.getJson('re-replaces');
    this.regexReplaces = replaces ? replaces : [{ text: this.regexreplace }];

    const replacesIndex = this.localStorageService.getJson('re-replacesindex');
    this.regexReplacesIndex = replacesIndex ? replacesIndex : 0;

    if (this.regexReplacesIndex > this.regexReplaces.length) {
      this.regexReplacesIndex = 0;
    }

    const regexoptions = this.localStorageService.getItem('re-options');
    this.regexoptions = regexoptions ? regexoptions : this.regexoptions

    const input = this.localStorageService.getItem('re-input');
    this.input = input ? input : this.input;

    const lastaction = this.localStorageService.getItem('re-lastaction');
    this.lastAction = lastaction ? lastaction : this.lastAction;

    const options = this.localStorageService.getJson('re-alloptions');
    this.options = options ? options : this.options;
  }

  save() {
    this.localStorageService.setJson('re-matches', this.regexMatches);
    this.localStorageService.setJson('re-matchesindex', this.regexMatchesIndex);

    this.localStorageService.setJson('re-replaces', this.regexReplaces);
    this.localStorageService.setJson('re-replacesindex', this.regexReplacesIndex);

    this.localStorageService.setJson('re-alloptions', this.options);

    this.localStorageService.setItem('re-options', this.regexoptions);
    this.localStorageService.setItem('re-input', this.input);
    this.localStorageService.setItem('re-lastaction', this.lastAction);
  }

  runLastAction() {
    if (this.debug) {
      return;
    }

    switch (this.lastAction) {
      case 'replace':
        this.replace();
        break;
      case 'match':
      default:
        this.match();
        break;
    }
  }

  automatch(index = 0) {
    if (this.debug) {
      return;
    }

    this.match(index);
  }

  match(index = 0) {
    const options = {
      timeout: 3000,
      errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
      resetTimeout: 10000
    };

    const breaker = new CircuitBreaker(() => {
      return new Promise((resolve) => {
        this.matchInternal(index);
        resolve(true);
      });
    }, options);

    breaker.fallback(() => {
      this.matcherror = 'There is a problem'
    });

    breaker.fire()
      .then(() => {
        console.log('finished');
      })
      .catch((err) => {
        this.matcherror = err;
      });
  }

  matchInternal(index = 0) {
    console.log('match', index);

    try {
      this.matcherror = undefined;
      this.lastAction = 'match';

      this.matches = undefined;
      this.replaces = undefined;

      this.regexMatchesIndex = index;

      if (this.regexMatchesIndex > this.regexMatches.length) {
        return;
      }

      let regexItem = this.regexMatches[this.regexMatchesIndex];
      regexItem.text = RegexUtil.replaceAll(regexItem.text, ' ', '·');
      const regexMatch = RegexUtil.replaceAll(regexItem.text, '·', ' ');

      const regex = new RegExp(regexMatch, this.regexoptions);

      let matches = [];
      const inputs = this.input.split('\n');
      for (const input of inputs) {
        const match = RegexUtil.matchAll(regex, input);
        matches = matches.concat({ input: input, results: match });
      }

      for (const match of matches) {
        for (const results of match.results) {
          for (let j = 0; j < results.length; ++j) {
            const html = this.regexhtmlmarkup(results, j);

            let range = '';
            if (j < results.indices.length) {
              const position = results.indices[j];
              if (position) {
                range = `[${position[0]}, ${position[1]}]`;
              }
            }

            results[j] = { text: results[j], html: html, range };
          }
        }
      }

      this.matches = matches;

      this.save();
    } catch (ex) {
      this.matcherror = ex;
    }
  }

  autoreplace(index = 0) {
    if (this.debug) {
      return;
    }

    this.replace(index);
  }


  replace(index = 0) {
    const options = {
      timeout: 3000,
      errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
      resetTimeout: 10000
    };

    const breaker = new CircuitBreaker(() => {
      return new Promise((resolve) => {
        this.replaceInternal(index);
        resolve(true);
      });
    }, options);

    breaker.fallback(() => this.replaceerror = 'There is a problem');

    breaker.fire()
      .then(console.log)
      .catch((err) => {
        this.replaceerror = err;
      });
  }

  replaceInternal(index = 0) {
    console.log('replace', index);
    try {
      this.replaceerror = undefined;
      this.lastAction = 'replace';

      this.matches = undefined;
      this.replaces = undefined;

      this.regexReplacesIndex = index;

      if (this.regexReplacesIndex > this.regexReplaces.length) {
        return;
      }

      let regexReplaceItem = this.regexReplaces[this.regexReplacesIndex];
      regexReplaceItem.text = RegexUtil.replaceAll(regexReplaceItem.text, ' ', '·');
      const regexReplace = RegexUtil.replaceAll(regexReplaceItem.text, '·', ' ');

      if (this.regexMatchesIndex > this.regexMatches.length) {
        return;
      }

      let regexItem = this.regexMatches[this.regexMatchesIndex];
      regexItem.text = RegexUtil.replaceAll(regexItem.text, ' ', '·');
      const regexMatch = RegexUtil.replaceAll(regexItem.text, '·', ' ');

      const regex = new RegExp(regexMatch, this.regexoptions);

      let replaces = [];
      const inputs = this.input.split('\n');
      for (const input of inputs) {
        const replace = input.replace(regex, regexReplace);
        replaces = replaces.concat({ input: input, output: replace });
      }

      this.replaces = replaces;
      this.save();
    } catch (ex) {
      this.replaceerror = ex;
    }

  }

  private regexhtmlmarkup(match, index) {
    let matchelements = match.input.split('');

    if (index < match.indices.length) {
      const position = match.indices[index];

      if (position) {
        matchelements.splice(position[1], 0, '</span>');
        matchelements.splice(position[0], 0, `<span class="highlight highlight-${index}">`);

        return matchelements.join('');
      }
    }

    return match.input;
  }

}
