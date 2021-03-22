(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"actions box\">\n    <input [(ngModel)]=\"regexoptions\" (ngModelChange)=\"save()\">\n    <button (click)=\"match()\">Match</button>\n    <button (click)=\"replace()\">Replace</button>\n  </div>\n\n  <div class=\"top\">\n    <div class=\"top-match box\" [class.outline]=\"lastAction === 'match'\">\n      <h3 class=\"top-match-title vcenter\">Match <button (click)=\"regexMatches.push({text: regexmatch}); save()\"><i\n            class=\"fa fa-plus green\"></i></button></h3>\n      <h5 *ngIf=\"matcherror\" class=\"error\">{{matcherror}}</h5>\n      <div *ngFor=\"let regex of regexMatches; let index = index\" class=\"top-match-item\"\n        [class.outline]=\"regexMatchesIndex === index\">\n        <input class=\"top-match-text mono\" [(ngModel)]=\"regex.text\" (ngModelChange)=\"regexMatchesIndex = index; match()\"\n          (focus)=\"match(index)\">\n        <button (click)=\"regexMatches.splice(index, 1); match(0)\"><i class=\"fa fa-trash red\"></i></button>\n      </div>\n    </div>\n    <div class=\"top-replace box\" [class.outline]=\"lastAction === 'replace'\">\n      <h3 class=\"top-replace-title vcenter\">Replace <button\n          (click)=\"regexReplaces.push({text: regexreplace}); save()\"><i class=\"fa fa-plus green\"></i></button></h3>\n      <h5 *ngIf=\"replaceerror\" class=\"error\">{{replaceerror}}</h5>\n      <div *ngFor=\"let regex of regexReplaces; let index = index\" class=\"top-replace-item\"\n        [class.outline]=\"regexReplacesIndex === index\">\n        <input class=\"top-replace-text mono\" [(ngModel)]=\"regex.text\" (ngModelChange)=\"replace(index)\"\n          (focus)=\"replace(index)\">\n        <button (click)=\"regexReplaces.splice(index, 1); replace(0)\"><i class=\"fa fa-trash red\"></i></button>\n      </div>\n    </div>\n  </div>\n  <div class=\"body-input box clickable\">\n    <h3 (click)=\"inputshow = !inputshow\">\n      <i *ngIf=\"inputshow\" class=\"fa fa-chevron-circle-up\"></i>\n      <i *ngIf=\"!inputshow\" class=\"fa fa-chevron-circle-down\"></i>\n      Input\n    </h3>\n    <textarea *ngIf=\"inputshow\" class=\"body-input-text mono\" [(ngModel)]=\"input\"\n      (ngModelChange)=\"save(); runLastAction()\"></textarea>\n  </div>\n  <div class=\"body-output box\">\n    <div class=\"body-output-header\">\n      <h3>Output</h3>\n      <div class=\"body-output-header-actions\">\n        <div class=\"body-output-header-action\" (click)=\"options.hideNoMatches = !options.hideNoMatches\">\n          <div>Hide 'no matches'</div>\n          <app-toggle-switch [(toggle)]=\"options.hideNoMatches\"></app-toggle-switch>\n        </div>\n      </div>\n    </div>\n    <div class=\"body-output-text mono\">\n      <div *ngIf=\"replaces\">\n        <div class=\"match\" *ngFor=\"let replace of replaces; let index = index\">\n          <h5 class=\"match-input\">Line {{ index+1 }}: {{ replace.input }}</h5>\n          <div *ngFor=\"let replaceLine of replace.output.split('\\\\n')\">\n            <pre>{{ replaceLine }}</pre>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"matches\">\n        <div *ngFor=\"let match of matches; let index = index\">\n          <div *ngIf=\"match.results.length > 0 || !options.hideNoMatches\" class=\"match\">\n            <h5 class=\"match-input\">Line {{ index+1 }}: {{ match.input }}</h5>\n            <div *ngIf=\"match.results.length === 0\" class=\"note\">No matches</div>\n            <div *ngFor=\"let results of match.results; let index = index\">\n              <div class=\"match-input-text\"> > Match {{ index+1 }}</div>\n              <table class=\"match-input-table\">\n                <thead>\n                  <tr>\n                    <th class=\"match-output-index\">Item</th>\n                    <th class=\"match-output-range\">Range</th>\n                    <th>Match</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let result of results; let index = index\">\n                    <td class=\"match-output-index\">\n                      <div>{{ (index === 0 ? 'Full: ' : index + ':') }}</div>\n                    </td>\n                    <td class=\"match-output-range\">\n                      <pre>{{result.range}}</pre>\n                    </td>\n                    <td>\n                      <pre class=\"prewrap\" [innerHTML]=\"result.html | safehtml\"></pre>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"box clickable\" (click)=\"matchhelp = !matchhelp\">\n    <h3>\n      <i *ngIf=\"matchhelp\" class=\"fa fa-chevron-circle-up\"></i>\n      <i *ngIf=\"!matchhelp\" class=\"fa fa-chevron-circle-down\"></i>\n      Match Help\n    </h3>\n    <div *ngIf=\"matchhelp\">\n      <div id=\"cheatsheet\">\n        <table class=\"cheatsheet\">\n          <tbody>\n            <tr>\n              <th colspan=\"2\" data-id=\"charclasses\">Character classes</th>\n            </tr>\n            <tr>\n              <td><a>.</a></td>\n              <td>any character except newline</td>\n            </tr>\n            <tr>\n              <td><a>\\w</a><a>\\d</a><a>\\s</a></td>\n              <td>word, digit, whitespace</td>\n            </tr>\n            <tr>\n              <td><a>\\W</a><a>\\D</a><a>\\S</a></td>\n              <td>not word, digit, whitespace</td>\n            </tr>\n            <tr>\n              <td><a>[abc]</a></td>\n              <td>any of a, b, or c</td>\n            </tr>\n            <tr>\n              <td><a>[^abc]</a></td>\n              <td>not a, b, or c</td>\n            </tr>\n            <tr>\n              <td><a>[a-g]</a></td>\n              <td>character between a &amp; g</td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" data-id=\"anchors\">Anchors</th>\n            </tr>\n            <tr>\n              <td><a>^abc$</a></td>\n              <td>start / end of the string</td>\n            </tr>\n            <tr>\n              <td><a>\\b</a><a>\\B</a></td>\n              <td>word, not-word boundary</td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" data-id=\"escchars\">Escaped characters</th>\n            </tr>\n            <tr>\n              <td><a>\\.</a><a>\\*</a><a>\\\\</a></td>\n              <td>escaped special characters</td>\n            </tr>\n            <tr>\n              <td><a>\\t</a><a>\\n</a><a>\\r</a></td>\n              <td>tab, linefeed, carriage return</td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" data-id=\"groups\">Groups &amp; Lookaround</th>\n            </tr>\n            <tr>\n              <td><a>(abc)</a></td>\n              <td>capture group</td>\n            </tr>\n            <tr>\n              <td><a>\\1</a></td>\n              <td>backreference to group #1</td>\n            </tr>\n            <tr>\n              <td><a>(?:abc)</a></td>\n              <td>non-capturing group</td>\n            </tr>\n            <tr>\n              <td><a>(?=abc)</a></td>\n              <td>positive lookahead</td>\n            </tr>\n            <tr>\n              <td><a>(?!abc)</a></td>\n              <td>negative lookahead</td>\n            </tr>\n            <tr>\n              <th colspan=\"2\" data-id=\"quants\">Quantifiers &amp; Alternation</th>\n            </tr>\n            <tr>\n              <td><a>a*</a><a>a+</a><a>a?</a></td>\n              <td>0 or more, 1 or more, 0 or 1</td>\n            </tr>\n            <tr>\n              <td><a>{{ 'a{5}' }}</a><a>{{ 'a{2,}' }}</a></td>\n              <td>exactly five, two or more</td>\n            </tr>\n            <tr>\n              <td><a>{{ 'a{1,3}' }}</a></td>\n              <td>between one &amp; three</td>\n            </tr>\n            <tr>\n              <td><a>a+?</a><a>{{ 'a{2,}?' }}</a></td>\n              <td>match as few as possible</td>\n            </tr>\n            <tr>\n              <td><a>ab|cd</a></td>\n              <td>match ab or cd</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"box clickable\" (click)=\"replacehelp = !replacehelp\">\n    <h3>\n      <i *ngIf=\"replacehelp\" class=\"fa fa-chevron-circle-up\"></i>\n      <i *ngIf=\"!replacehelp\" class=\"fa fa-chevron-circle-down\"></i>\n      Replace Help\n    </h3>\n    <div *ngIf=\"replacehelp\">\n      <table class=\"standard-table\">\n        <thead>\n          <tr>\n            <th class=\"header\" scope=\"col\">Pattern</th>\n            <th class=\"header\" scope=\"col\">Inserts</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><code>$$</code></td>\n            <td>Inserts a <code>\"$\"</code>.</td>\n          </tr>\n          <tr>\n            <td><code>$&amp;</code></td>\n            <td>Inserts the matched substring.</td>\n          </tr>\n          <tr>\n            <td><code>$`</code></td>\n            <td>Inserts the portion of the string that precedes the matched substring.</td>\n          </tr>\n          <tr>\n            <td><code>$'</code></td>\n            <td>Inserts the portion of the string that follows the matched substring.</td>\n          </tr>\n          <tr>\n            <td><code>$<var>n</var></code></td>\n            <td>Where <code><var>n</var></code> is a positive integer less than 100, inserts the\n              <code><var>n</var></code>th parenthesized submatch string, provided the first\n              argument was a <a><code>RegExp</code></a>\n              object. Note that this is\n              <code>1</code>-indexed. If a group <code>n</code> is not present (e.g., if group\n              is 3), it will be replaced as a literal (e.g., <code>$3</code>).\n            </td>\n          </tr>\n          <tr>\n            <td><code>$&lt;Name&gt;</code></td>\n            <td>Where <code>Name</code> is a capturing group name. If the group is not in the\n              match, or not in the regular expression, or if a string was passed as the first argument\n              to <code>replace</code> instead of a regular expression, this resolves to a literal\n              (e.g., <code>$&lt;Name&gt;</code>).\n              Only available in browser versions supporting named capturing groups.</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toggle-switch/toggle-switch.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toggle-switch/toggle-switch.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label class=\"switch\">\n  <input [(ngModel)]=\"toggle\" [ngModelOptions]=\"{standalone: true}\" type=\"checkbox\">\n  <span class=\"slider round\"></span>\n</label>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  flex-direction: column;\n  padding: 4px;\n  background: #eee;\n}\n\n.box {\n  padding: 10px;\n}\n\n.flexcols, .body-output-header-action, .body-output-header, .body, .top-replace-item, .top-match-item, .top, .actions {\n  display: flex;\n  flex-direction: row;\n}\n\n.flexrows, .body-output, .body-input, .top-replace, .top-match {\n  display: flex;\n  flex-direction: column;\n}\n\n.grow, .body-output, .body-input, .top-replace-text, .top-replace, .top-match-text, .top-match {\n  flex-shrink: 0;\n  flex-grow: 1;\n}\n\n.actions {\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.top {\n  align-items: flex-start;\n  background: #eee;\n}\n\n.top-match {\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.top-match-title button {\n  margin-left: 8px;\n}\n\n.top-match-item {\n  border: 2px solid transparent;\n  padding: 3px;\n}\n\n.top-match-item button {\n  margin-left: 4px;\n}\n\n.top-match-item + .top-match-item {\n  margin-top: 4px;\n}\n\n.top-match-text {\n  padding: 8px;\n  outline: none;\n}\n\n.top-match-delete {\n  min-height: 50px;\n}\n\n.top-replace {\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.top-replace-title button {\n  margin-left: 8px;\n}\n\n.top-replace-item {\n  border: 2px solid transparent;\n  padding: 3px;\n}\n\n.top-replace-item button {\n  margin-left: 4px;\n}\n\n.top-replace-item + .top-replace-item {\n  margin-top: 4px;\n}\n\n.top-replace-text {\n  padding: 8px;\n  outline: none;\n}\n\n.top-replace-delete {\n  min-height: 50px;\n}\n\n.body {\n  align-items: flex-start;\n}\n\n.body-input {\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.body-input-text {\n  min-height: 150px;\n}\n\n.body-output {\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.body-output-header {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.body-output-header-action {\n  align-items: center;\n  cursor: pointer;\n  font-family: Lato, sans-serif;\n}\n\n.body-output-header-action app-toggle-switch {\n  margin-left: 4px;\n}\n\n.body-output-header-action + .body-output-header-action {\n  margin-left: 8px;\n}\n\n.body-output-text {\n  padding: 4px;\n  background: white;\n  border: 1px solid lightgrey;\n}\n\n.match + .match {\n  margin-top: 8px;\n}\n\n.match {\n  background: #fafafa;\n  border-radius: 8px;\n  padding: 8px;\n}\n\n.match-input-text {\n  margin-bottom: 4px;\n}\n\n.match-input-table {\n  border-radius: 8px;\n  background: white;\n}\n\n.match-output-index {\n  min-width: 30px;\n  text-align: center;\n}\n\n.match-output-range {\n  min-width: 60px;\n  text-align: center;\n}\n\n.match-output div,\n.match-output pre {\n  display: inline-block;\n  margin: 4px;\n}\n\n.note {\n  font-style: italic;\n  color: #aaa;\n}\n\ntd {\n  text-align: left;\n}\n\ntd:first-child {\n  text-align: right;\n}\n\ntr > td > a {\n  font-family: monospace;\n}\n\n.outline {\n  border: 2px solid #009879;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWNocy9Db2RlL3BsYXlncm91bmQvYW5ndWxhci9teS1yZWdleC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUVFLHlCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUVFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHRTtFQUdFLDJCQUFBO0VBQ0Esb0JBQUE7QUNISjs7QURNTTtFQUNFLGdCQUFBO0FDSlI7O0FEUUk7RUFFRSw2QkFBQTtFQUNBLFlBQUE7QUNQTjs7QURTTTtFQUNFLGdCQUFBO0FDUFI7O0FEVU07RUFDRSxlQUFBO0FDUlI7O0FEWUk7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBQ1hOOztBRGNJO0VBQ0UsZ0JBQUE7QUNaTjs7QURnQkU7RUFHRSwyQkFBQTtFQUNBLG9CQUFBO0FDaEJKOztBRG1CTTtFQUNFLGdCQUFBO0FDakJSOztBRHFCSTtFQUVFLDZCQUFBO0VBQ0EsWUFBQTtBQ3BCTjs7QURzQk07RUFDRSxnQkFBQTtBQ3BCUjs7QUR1Qk07RUFDRSxlQUFBO0FDckJSOztBRHlCSTtFQUVFLFlBQUE7RUFDQSxhQUFBO0FDeEJOOztBRDJCSTtFQUNFLGdCQUFBO0FDekJOOztBRDhCQTtFQUVFLHVCQUFBO0FDNUJGOztBRDhCRTtFQUdFLDJCQUFBO0VBQ0Esb0JBQUE7QUM5Qko7O0FEZ0NJO0VBQ0UsaUJBQUE7QUM5Qk47O0FEa0NFO0VBR0UsMkJBQUE7RUFDQSxvQkFBQTtBQ2xDSjs7QURvQ0k7RUFFRSw4QkFBQTtFQUNBLG1CQUFBO0FDbkNOOztBRHVDTTtFQUVFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDdENSOztBRHdDUTtFQUNFLGdCQUFBO0FDdENWOztBRHlDUTtFQUNFLGdCQUFBO0FDdkNWOztBRDRDSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDMUNOOztBRCtDQTtFQUNFLGVBQUE7QUM1Q0Y7O0FEK0NBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUM1Q0Y7O0FEK0NJO0VBQ0Usa0JBQUE7QUM3Q047O0FEZ0RJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQzlDTjs7QURtREk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNqRE47O0FEb0RJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDbEROOztBRHNESTs7RUFFRSxxQkFBQTtFQUNBLFdBQUE7QUNwRE47O0FEMERBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDdkRGOztBRDREQTtFQUNFLGdCQUFBO0FDekRGOztBRDREQTtFQUNFLGlCQUFBO0FDekRGOztBRDREQTtFQUNFLHNCQUFBO0FDekRGOztBRDREQTtFQUNFLHlCQUFBO0FDekRGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmJveCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mbGV4Y29scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5mbGV4cm93cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ncm93IHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmFjdGlvbnMge1xuICBAZXh0ZW5kIC5mbGV4Y29scztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcCB7XG4gIEBleHRlbmQgLmZsZXhjb2xzO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogI2VlZTtcblxuICAmLW1hdGNoIHtcbiAgICBAZXh0ZW5kIC5ncm93O1xuICAgIEBleHRlbmQgLmZsZXhyb3dzO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICYtdGl0bGUge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWl0ZW0ge1xuICAgICAgQGV4dGVuZCAuZmxleGNvbHM7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDNweDtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIH1cblxuICAgICAgJismIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICBAZXh0ZW5kIC5ncm93O1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAmLWRlbGV0ZSB7XG4gICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgfVxuXG4gICYtcmVwbGFjZSB7XG4gICAgQGV4dGVuZCAuZ3JvdztcbiAgICBAZXh0ZW5kIC5mbGV4cm93cztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAmLXRpdGxlIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1pdGVtIHtcbiAgICAgIEBleHRlbmQgLmZsZXhjb2xzO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiAzcHg7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICB9XG5cbiAgICAgICYrJiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgQGV4dGVuZCAuZ3JvdztcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJi1kZWxldGUge1xuICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmJvZHkge1xuICBAZXh0ZW5kIC5mbGV4Y29scztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgJi1pbnB1dCB7XG4gICAgQGV4dGVuZCAuZ3JvdztcbiAgICBAZXh0ZW5kIC5mbGV4cm93cztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAmLXRleHQge1xuICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgfVxuICB9XG5cbiAgJi1vdXRwdXQge1xuICAgIEBleHRlbmQgLmdyb3c7XG4gICAgQGV4dGVuZCAuZmxleHJvd3M7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgJi1oZWFkZXIge1xuICAgICAgQGV4dGVuZCAuZmxleGNvbHM7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmLWFjdGlvbnMge31cblxuICAgICAgJi1hY3Rpb24ge1xuICAgICAgICBAZXh0ZW5kIC5mbGV4Y29scztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcblxuICAgICAgICBhcHAtdG9nZ2xlLXN3aXRjaCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYrJiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICB9XG4gIH1cbn1cblxuLm1hdGNoKy5tYXRjaCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1hdGNoIHtcbiAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcblxuICAmLWlucHV0IHtcbiAgICAmLXRleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgICYtdGFibGUge1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgJi1vdXRwdXQge1xuICAgICYtaW5kZXgge1xuICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICYtcmFuZ2Uge1xuICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuXG4gICAgZGl2LFxuICAgIHByZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW46IDRweDtcbiAgICB9XG4gIH1cblxufVxuXG4ubm90ZSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5tYXRjaGVycm9yIHt9XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGQ6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxudHI+dGQ+YSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbi5vdXRsaW5lIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOTg3OTtcbn1cbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmxleGNvbHMsIC5ib2R5LW91dHB1dC1oZWFkZXItYWN0aW9uLCAuYm9keS1vdXRwdXQtaGVhZGVyLCAuYm9keSwgLnRvcC1yZXBsYWNlLWl0ZW0sIC50b3AtbWF0Y2gtaXRlbSwgLnRvcCwgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZmxleHJvd3MsIC5ib2R5LW91dHB1dCwgLmJvZHktaW5wdXQsIC50b3AtcmVwbGFjZSwgLnRvcC1tYXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ncm93LCAuYm9keS1vdXRwdXQsIC5ib2R5LWlucHV0LCAudG9wLXJlcGxhY2UtdGV4dCwgLnRvcC1yZXBsYWNlLCAudG9wLW1hdGNoLXRleHQsIC50b3AtbWF0Y2gge1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b3Age1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi50b3AtbWF0Y2gge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLnRvcC1tYXRjaC10aXRsZSBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLnRvcC1tYXRjaC1pdGVtIHtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi50b3AtbWF0Y2gtaXRlbSBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLnRvcC1tYXRjaC1pdGVtICsgLnRvcC1tYXRjaC1pdGVtIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLnRvcC1tYXRjaC10ZXh0IHtcbiAgcGFkZGluZzogOHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRvcC1tYXRjaC1kZWxldGUge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuLnRvcC1yZXBsYWNlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi50b3AtcmVwbGFjZS10aXRsZSBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLnRvcC1yZXBsYWNlLWl0ZW0ge1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogM3B4O1xufVxuLnRvcC1yZXBsYWNlLWl0ZW0gYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi50b3AtcmVwbGFjZS1pdGVtICsgLnRvcC1yZXBsYWNlLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4udG9wLXJlcGxhY2UtdGV4dCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50b3AtcmVwbGFjZS1kZWxldGUge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuXG4uYm9keSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmJvZHktaW5wdXQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLmJvZHktaW5wdXQtdGV4dCB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuLmJvZHktb3V0cHV0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5ib2R5LW91dHB1dC1oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm9keS1vdXRwdXQtaGVhZGVyLWFjdGlvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XG59XG4uYm9keS1vdXRwdXQtaGVhZGVyLWFjdGlvbiBhcHAtdG9nZ2xlLXN3aXRjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4uYm9keS1vdXRwdXQtaGVhZGVyLWFjdGlvbiArIC5ib2R5LW91dHB1dC1oZWFkZXItYWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5ib2R5LW91dHB1dC10ZXh0IHtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xufVxuXG4ubWF0Y2ggKyAubWF0Y2gge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tYXRjaCB7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLm1hdGNoLWlucHV0LXRleHQge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ubWF0Y2gtaW5wdXQtdGFibGUge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1hdGNoLW91dHB1dC1pbmRleCB7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdGNoLW91dHB1dC1yYW5nZSB7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdGNoLW91dHB1dCBkaXYsXG4ubWF0Y2gtb3V0cHV0IHByZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA0cHg7XG59XG5cbi5ub3RlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2FhYTtcbn1cblxudGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50ZDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG50ciA+IHRkID4gYSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbi5vdXRsaW5lIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOTg3OTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _utils_regex_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/regex.util */ "./src/app/utils/regex.util.ts");




let AppComponent = class AppComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.title = 'Reggie';
        this.regexMatches = [];
        this.regexMatchesIndex = 0;
        this.regexReplaces = [];
        this.regexReplacesIndex = 0;
        this.regexoptions = 'g';
        this.regexmatch = '(h(el)l(o))';
        this.regexreplace = '$';
        this.input = 'hello world\nhello\nzzz';
        this.replaces = [];
        this.matches = [];
        this.lastAction = 'match';
        this.matchshow = true;
        this.replaceshow = true;
        this.inputshow = true;
        this.outputshow = true;
        this.matchhelp = false;
        this.replacehelp = false;
        this.options = {
            hideNoMatches: false
        };
    }
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
        this.regexoptions = regexoptions ? regexoptions : this.regexoptions;
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
    match(index = 0) {
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
            regexItem.text = _utils_regex_util__WEBPACK_IMPORTED_MODULE_3__["RegexUtil"].replaceAll(regexItem.text, ' ', '·');
            const regexMatch = _utils_regex_util__WEBPACK_IMPORTED_MODULE_3__["RegexUtil"].replaceAll(regexItem.text, '·', ' ');
            const regex = new RegExp(regexMatch, this.regexoptions);
            let matches = [];
            const inputs = this.input.split('\n');
            for (const input of inputs) {
                const match = _utils_regex_util__WEBPACK_IMPORTED_MODULE_3__["RegexUtil"].matchAll(regex, input);
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
        }
        catch (ex) {
            this.matcherror = ex;
        }
    }
    regexhtmlmarkup(match, index) {
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
    replace(index = 0) {
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
            regexReplaceItem.text = _utils_regex_util__WEBPACK_IMPORTED_MODULE_3__["RegexUtil"].replaceAll(regexReplaceItem.text, ' ', '·');
            const regexReplace = _utils_regex_util__WEBPACK_IMPORTED_MODULE_3__["RegexUtil"].replaceAll(regexReplaceItem.text, '·', ' ');
            if (this.regexMatchesIndex > this.regexMatches.length) {
                return;
            }
            let regexItem = this.regexMatches[this.regexMatchesIndex];
            regexItem.text = _utils_regex_util__WEBPACK_IMPORTED_MODULE_3__["RegexUtil"].replaceAll(regexItem.text, ' ', '·');
            const regexMatch = _utils_regex_util__WEBPACK_IMPORTED_MODULE_3__["RegexUtil"].replaceAll(regexItem.text, '·', ' ');
            const regex = new RegExp(regexMatch, this.regexoptions);
            let replaces = [];
            const inputs = this.input.split('\n');
            for (const input of inputs) {
                const replace = input.replace(regex, regexReplace);
                replaces = replaces.concat({ input: input, output: replace });
            }
            this.replaces = replaces;
            this.save();
        }
        catch (ex) {
            this.replaceerror = ex;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_toggle_switch_toggle_switch_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/toggle-switch/toggle-switch.module */ "./src/app/components/toggle-switch/toggle-switch.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _components_toggle_switch_toggle_switch_module__WEBPACK_IMPORTED_MODULE_4__["ToggleSwitchModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/toggle-switch/toggle-switch.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/toggle-switch/toggle-switch.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 16px;\n}\n\n/* The switch - the box around the slider */\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 16px;\n}\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 2px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(12px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaWNocy9Db2RlL3BsYXlncm91bmQvYW5ndWxhci9teS1yZWdleC9zcmMvYXBwL2NvbXBvbmVudHMvdG9nZ2xlLXN3aXRjaC90b2dnbGUtc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQSwyQ0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBLCtCQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUEsZUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFHRSwyQkFBQTtBQ0NGOztBREVBLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQrLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzKy5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEycHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTJweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTJweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/toggle-switch/toggle-switch.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/toggle-switch/toggle-switch.component.ts ***!
  \*********************************************************************/
/*! exports provided: ToggleSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSwitchComponent", function() { return ToggleSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToggleSwitchComponent = class ToggleSwitchComponent {
    constructor() {
        this.toggle = false;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ToggleSwitchComponent.prototype, "toggle", void 0);
ToggleSwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toggle-switch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toggle-switch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toggle-switch/toggle-switch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toggle-switch.component.scss */ "./src/app/components/toggle-switch/toggle-switch.component.scss")).default]
    })
], ToggleSwitchComponent);



/***/ }),

/***/ "./src/app/components/toggle-switch/toggle-switch.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/toggle-switch/toggle-switch.module.ts ***!
  \******************************************************************/
/*! exports provided: ToggleSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleSwitchModule", function() { return ToggleSwitchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _toggle_switch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-switch.component */ "./src/app/components/toggle-switch/toggle-switch.component.ts");






let ToggleSwitchModule = class ToggleSwitchModule {
};
ToggleSwitchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"],
        ],
        declarations: [
            _toggle_switch_component__WEBPACK_IMPORTED_MODULE_5__["ToggleSwitchComponent"],
        ],
        exports: [
            _toggle_switch_component__WEBPACK_IMPORTED_MODULE_5__["ToggleSwitchComponent"],
        ]
    })
], ToggleSwitchModule);



/***/ }),

/***/ "./src/app/directives/checked.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/checked.directive.ts ***!
  \*************************************************/
/*! exports provided: CheckedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedDirective", function() { return CheckedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CheckedDirective = class CheckedDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    set contentEditable(condition) {
        const action = condition ? 'checked="true"' : '';
        this.ngControl.control[action]();
    }
};
CheckedDirective.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ischecked')
], CheckedDirective.prototype, "contentEditable", null);
CheckedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appChecked]'
    })
], CheckedDirective);



/***/ }),

/***/ "./src/app/directives/contenteditable.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/contenteditable.directive.ts ***!
  \*********************************************************/
/*! exports provided: ContentEditableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentEditableDirective", function() { return ContentEditableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ContentEditableDirective = class ContentEditableDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    set contentEditable(condition) {
        const action = condition ? 'contenteditable="true"' : '';
        this.ngControl.control[action]();
    }
};
ContentEditableDirective.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('contentEditable')
], ContentEditableDirective.prototype, "contentEditable", null);
ContentEditableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appContentEditable]'
    })
], ContentEditableDirective);



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contenteditable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contenteditable.directive */ "./src/app/directives/contenteditable.directive.ts");
/* harmony import */ var _checked_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checked.directive */ "./src/app/directives/checked.directive.ts");




let DirectivesModule = class DirectivesModule {
};
DirectivesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: [
            _contenteditable_directive__WEBPACK_IMPORTED_MODULE_2__["ContentEditableDirective"],
            _checked_directive__WEBPACK_IMPORTED_MODULE_3__["CheckedDirective"],
        ],
        exports: [
            _contenteditable_directive__WEBPACK_IMPORTED_MODULE_2__["ContentEditableDirective"],
            _checked_directive__WEBPACK_IMPORTED_MODULE_3__["CheckedDirective"],
        ]
    })
], DirectivesModule);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _safehtml_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safehtml.pipe */ "./src/app/pipes/safehtml.pipe.ts");



let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        declarations: [
            _safehtml_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeHtmlPipe"]
        ],
        exports: [
            _safehtml_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeHtmlPipe"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/pipes/safehtml.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/safehtml.pipe.ts ***!
  \****************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeHtmlPipe = class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value ? value : '');
    }
};
SafeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safehtml' })
], SafeHtmlPipe);



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalStorageService = class LocalStorageService {
    constructor() {
        this.window = (typeof window !== 'undefined');
    }
    getItems() {
        if (this.window) {
            return Object.entries(localStorage).map(e => { return { key: e[0], value: e[1] }; });
        }
        return null;
    }
    getItem(key) {
        if (this.window) {
            return localStorage.getItem(key);
        }
        return null;
    }
    setItem(key, val) {
        if (this.window) {
            localStorage.setItem(key, val);
        }
    }
    getJson(key) {
        try {
            return JSON.parse(this.getItem(key));
        }
        catch (_a) {
            return undefined;
        }
    }
    setJson(key, val) {
        this.setItem(key, JSON.stringify(val));
    }
    removeItem(key) {
        if (this.window) {
            localStorage.removeItem(key);
        }
    }
    clear() {
        if (this.window) {
            localStorage.clear();
        }
    }
};
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LocalStorageService);



/***/ }),

/***/ "./src/app/utils/regex.util.ts":
/*!*************************************!*\
  !*** ./src/app/utils/regex.util.ts ***!
  \*************************************/
/*! exports provided: RegexUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexUtil", function() { return RegexUtil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var regexp_match_indices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regexp-match-indices */ "./node_modules/regexp-match-indices/index.js");
/* harmony import */ var regexp_match_indices__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regexp_match_indices__WEBPACK_IMPORTED_MODULE_1__);


class RegexUtil {
    static replaceAll(input, from, to) {
        const regex = new RegExp(this.escape(from), 'g');
        return input.replace(regex, to);
    }
    static escape(input) {
        return input
            .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            .replace(/-/g, '\\x2d');
    }
    static matchAll(regex, text) {
        let matches = [];
        try {
            let match;
            while ((match = regexp_match_indices__WEBPACK_IMPORTED_MODULE_1__(regex, text)) != null) {
                match.lastIndex = regex.lastIndex;
                matches.push(match);
                if (!regex.global) {
                    break;
                }
            }
        }
        catch (ex) {
            console.log(ex);
        }
        return matches;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/richs/Code/playground/angular/my-regex/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map