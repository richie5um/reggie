import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private window = (typeof window !== 'undefined');

  public getItems() {
    if (this.window) {
      return Object.entries(localStorage).map(e => { return { key: e[0], value: e[1] } });
    }
    return null;
  }

  public getItem(key: string): any {
    if (this.window) {
      return localStorage.getItem(key);
    }
    return null;
  }

  public setItem(key: string, val: string) {
    if (this.window) {
      localStorage.setItem(key, val);
    }
  }

  public getJson(key: string): any {
    try {
      return JSON.parse(this.getItem(key));
    } catch {
      return undefined;
    }
  }

  public setJson(key: string, val: any) {
    this.setItem(key, JSON.stringify(val));
  }

  public removeItem(key: string) {
    if (this.window) {
      localStorage.removeItem(key);
    }
  }

  public clear() {
    if (this.window) {
      localStorage.clear();
    }
  }
}
