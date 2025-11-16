const isNum = (x) => typeof x === "number" && isFinite(x);
const { min, max, abs, round, floor, ceil, PI, random, sin, cos, log10, log2, sign, sqrt } = Math;
const minmax = (v1, v2, v3) => max(v1, min(v2, v3));
const numor0 = (num) => (isNaN(Number(num)) ? 0 : Number(num));
const nf = (num) => (isNaN(num) ? "-" : new Intl.NumberFormat().format(num));

Date.dummy = () => {};
Date.prototype.day = function () {
  return "日月火水木金土"[this.getDay()];
};
Date.prototype.format = function (format = "y-M-d h:m:s.f") {
  const y = this.getFullYear();
  const M = String(this.getMonth() + 1).padStart(2, "0");
  const d = String(this.getDate()).padStart(2, "0");
  const h = String(this.getHours()).padStart(2, "0");
  const m = String(this.getMinutes()).padStart(2, "0");
  const s = String(this.getSeconds()).padStart(2, "0");
  const f = String(this.getMilliseconds()).padStart(3, "0");
  return format.replace(/[Yy]/g, y).replace(/M/g, M).replace(/[Dd]/g, d).replace(/h/g, h).replace(/m/g, m).replace(/s/g, s).replace(/f/g, f);
};
Date.prototype.ymd = function (sp1 = "-") {
  const y = this.getFullYear();
  const M = String(this.getMonth() + 1).padStart(2, "0");
  const d = String(this.getDate()).padStart(2, "0");
  return `${y}${sp1}${M}${sp1}${d}`;
};
Date.prototype.ymdhmsf = function (sp1 = "-", sp2 = " ", sp3 = ":", sp4 = ".") {
  const y = this.getFullYear();
  const M = String(this.getMonth() + 1).padStart(2, "0");
  const d = String(this.getDate()).padStart(2, "0");
  const h = String(this.getHours()).padStart(2, "0");
  const m = String(this.getMinutes()).padStart(2, "0");
  const s = String(this.getSeconds()).padStart(2, "0");
  const f = String(this.getMilliseconds()).padStart(3, "0");
  return `${y}${sp1}${M}${sp1}${d}${sp2}${h}${sp3}${m}${sp3}${s}${sp4}${f}`;
};
Date.prototype.ymdhms = function (sp1 = "-", sp2 = " ", sp3 = ":") {
  const y = this.getFullYear();
  const M = String(this.getMonth() + 1).padStart(2, "0");
  const d = String(this.getDate()).padStart(2, "0");
  const h = String(this.getHours()).padStart(2, "0");
  const m = String(this.getMinutes()).padStart(2, "0");
  const s = String(this.getSeconds()).padStart(2, "0");
  return `${y}${sp1}${M}${sp1}${d}${sp2}${h}${sp3}${m}${sp3}${s}`;
};
Date.prototype.hms = function (sp3 = ":") {
  const h = String(this.getHours()).padStart(2, "0");
  const m = String(this.getMinutes()).padStart(2, "0");
  const s = String(this.getSeconds()).padStart(2, "0");
  return `${h}${sp3}${m}${sp3}${s}`;
};
Date.prototype.hm = function (sp3 = ":") {
  const h = String(this.getHours()).padStart(2, "0");
  const m = String(this.getMinutes()).padStart(2, "0");
  return `${h}${sp3}${m}`;
};
Date.prototype.lenMonth = function () {
  const dt = new Date(this);
  dt.setDate(1);
  dt.setMonth(dt.getMonth() + 1);
  dt.setDate(0);
  return dt.getDate();
};
Date.prototype.addymd = function (y, M, d) {
  if (y) this.setFullYear(this.getFullYear() + y);
  if (M) this.setMonth(this.getMonth() + M);
  if (d) this.setDate(this.getDate() + d);
  return this;
};
Date.prototype.setymd = function (y, M, d) {
  if (y != null) this.setFullYear(y);
  if (M != null) this.setMonth(M - 1);
  if (d != null) this.setDate(d);
  return this;
};
Date.prototype.addhms = function (h, m, s, f) {
  if (h) this.setHours(this.getHours() + h);
  if (m) this.setMinutes(this.getMinutes() + m);
  if (s) this.setSeconds(this.getSeconds() + s);
  if (f) this.setMilliseconds(this.getMilliseconds() + f);
  return this;
};
Date.prototype.sethms = function (h, m, s, f) {
  if (h != null) this.setHours(h);
  if (m != null) this.setMinutes(m);
  if (s != null) this.setSeconds(s);
  if (f != null) this.setMilliseconds(f);
  return this;
};
const getdt = (...d) => (d.length ? new Date(...d) : new Date());
const getms = (...d) => (d.length ? new Date(...d).getTime() : new Date().getTime());
const getdthm = (hm) => new Date(`2000-01-01 ${hm}`);

Element.dummy = () => {};
Element.prototype.addclass = function (tokens) {
  this.classList.add(...tokens.split(" "));
};
Element.prototype.remclass = function (tokens) {
  this.classList.remove(...tokens.split(" "));
};
Element.prototype.getRect = function () {
  return this.getBoundingClientRect();
};
/**
 * @return {HTMLDivElement|HTMLInputElement|HTMLFormElement|HTMLVideoElement|HTMLCanvasElement}
 */
function qs(selector, parent = null) {
  if (parent) return parent.querySelector(selector);
  return document.querySelector(selector);
}
/**
 * @return {Array<HTMLDivElement|HTMLInputElement|HTMLFormElement|HTMLVideoElement|HTMLCanvasElement>}
 */
function qsa(selector, parent = null) {
  if (parent) return Array.from(parent.querySelectorAll(selector));
  return Array.from(document.querySelectorAll(selector));
}
/**
 * @param {HTMLDivElement} parent
 */
function Style(parent, text = "") {
  const elm = document.createElement("style");
  if (parent) parent.append(elm);
  elm.innerText = text;
  return elm;
}
/**
 * @param {HTMLDivElement} parent
 * @param {HTMLDivElement} setting
 * @param {CSSStyleDeclaration} style
 */
function Div(parent, className = "", text = "", setting = {}, style = {}) {
  const elm = document.createElement("div");
  if (parent) parent.append(elm);
  elm.className = className;
  elm.innerText = text;
  Object.assign(elm, setting);
  Object.assign(elm.style, style);
  return elm;
}
/**
 * @param {HTMLDivElement} parent
 * @param {HTMLAnchorElement} setting
 * @param {CSSStyleDeclaration} style
 */
function A(parent, className = "", href = "", setting = {}, style = {}) {
  const elm = document.createElement("a");
  if (parent) parent.append(elm);
  elm.className = className;
  elm.href = href;
  Object.assign(elm, setting);
  Object.assign(elm.style, style);
  return elm;
}
/**
 * @param {HTMLDivElement} parent
 * @param {HTMLImageElement} setting
 * @param {CSSStyleDeclaration} style
 */
function Img(parent, src = "", className = "", text = "", setting = {}, style = {}) {
  const elm = document.createElement("img");
  if (parent) parent.append(elm);
  elm.src = src;
  elm.className = className + " img1px";
  elm.innerText = text;
  Object.assign(elm, setting);
  Object.assign(elm.style, style);
  return elm;
}
/**
 * @param {HTMLDivElement} parent
 * @param {HTMLSelectElement} setting
 * @param {CSSStyleDeclaration} style
 */
function Select(parent, className = "", setting = {}, style = {}) {
  const elm = document.createElement("select");
  if (parent) parent.append(elm);
  elm.className = className;
  Object.assign(elm, setting);
  Object.assign(elm.style, style);
  elm.onV = () => {};
  elm.addEventListener("change", () => elm.onV(elm.value));
  return elm;
}
function Inputfile(parent, className = "", text = "ファイルの選択", onchange = () => {}, setting = {}, style = {}) {
  const input = document.createElement("input");
  input.type = "file";
  const button = document.createElement("button");
  if (parent) parent.appendChild(button);
  button.innerText = text;
  button.onclick = () => ((input.value = ""), input.click());
  button.className = "file";
  input.style.display = "none";
  if (parent) parent.appendChild(input);
  input.onchange = () => onchange(input);
  button.className = className;
  Object.keys(setting).forEach((key) => (input[key] = setting[key]));
  Object.keys(style).forEach((key) => (button.style[key] = style[key]));
  return { input, button };
}
HTMLSelectElement.dummy = () => {};
HTMLSelectElement.prototype.add = function (value, text) {
  if (!text) text = value;
  const option2 = new Option(text, value);
  this.append(option2);
  return option2;
};

function InputRadio(parent, className = "", { name, value, checked = false, accentColor = "#DB1966" }) {
  const elm = document.createElement("input");
  elm.type = "radio";
  elm.name = name;
  elm.value = value;
  elm.checked = checked;
  elm.className = className;
  elm.style.accentColor = accentColor;

  elm.onV = () => {};
  elm.addEventListener("change", () => elm.onV(elm.value));

  if (parent) parent.append(elm);
  return elm;
}
/**
 * @param {HTMLDivElement} parent
 * @param {HTMLInputElement} setting
 * @param {CSSStyleDeclaration} style
 */
function Inputnum(parent, className = "", setting = {}, style = {}) {
  const elm = document.createElement("input");
  if (parent) parent.appendChild(elm);
  elm.type = "number";
  elm.className = className;
  for (const [key, value] of Object.entries(setting)) elm[key] = value;
  Object.keys(style).forEach((key) => (elm.style[key] = style[key]));
  return elm;
}
function InputText(parent, className = "", setting = {}, style = {}) {
  const elm = document.createElement("input");
  if (parent) parent.append(elm);
  elm.type = "text";
  elm.className = className;
  Object.assign(elm, setting);
  Object.assign(elm.style, style);
  elm.onV = () => {};
  elm.addEventListener("change", () => elm.onV(elm.value));
  return elm;
}

/**
 * @param {HTMLDivElement} parent
 * @param {HTMLInputElement} setting
 * @param {CSSStyleDeclaration} style
 */
function InputMail(parent, className = "", setting = {}, style = {}) {
  const elm = document.createElement("input");
  if (parent) parent.append(elm);
  elm.type = "email";
  elm.className = className;
  Object.assign(elm, setting);
  Object.assign(elm.style, style);
  elm.onV = () => {};
  elm.addEventListener("change", () => elm.onV(elm.value));
  return elm;
}
/**
 * @param {HTMLDivElement} parent
 * @param {HTMLInputElement} setting
 * @param {CSSStyleDeclaration} style
 */
function InputTel(parent, className = "", setting = {}, style = {}) {
  const elm = document.createElement("input");
  if (parent) parent.append(elm);
  elm.type = "tel";
  elm.className = className;
  Object.assign(elm, setting);
  Object.assign(elm.style, style);
  elm.onV = () => {};
  elm.addEventListener("change", () => elm.onV(elm.value));
  return elm;
}
/**
 * @param {HTMLDivElement} parent
 * @param {HTMLInputElement} setting
 * @param {CSSStyleDeclaration} style
 */
function Textarea(parent, className = "", setting = {}, style = {}) {
  const elm = document.createElement("textarea");
  if (parent) parent.append(elm);
  elm.className = className;
  Object.assign(elm, setting);
  Object.assign(elm.style, style);
  elm.onV = () => {};
  elm.addEventListener("change", () => elm.onV(elm.value));
  return elm;
}
class Check {
  constructor(parent, className1 = "", bool = false, text = "", setting = { className2: "", className3: "" }) {
    this.elm = Div(parent, `fxc pointer ${className1}`);
    this.check = Div(this.elm, `fcc check w180em h180em bw1 ${setting.className2 || ""}`);
    const urlcheck = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
              <polyline  points="0,3 2,5 6,1" fill="none" stroke="%23EE9F20"></polyline></svg>`;
    this.img = Img(this.check, urlcheck, "w90p h90p");
    if (text) this.divText = Div(this.elm, `ml80em ${setting.className3 || ""}`, text);
    this.bool = bool;
    this.update();
    this.elm.onclick = () => this.change();
    return this;
  }
  update() {
    if (this.bool) this.img.classList.remove("op1p");
    else this.img.classList.add("op1p");
    this.onchange(this.bool);
    return this;
  }
  change() {
    this.bool = !this.bool;
    this.update();
    return this;
  }
  set(bool) {
    this.bool = bool;
    this.update();
    return this;
  }
  onchange(bool) {}
}

const dicstyle = {};
const clsesClassListener = new Set();
const cssesClassListener = {
  f: (v) => `font-size:${v} !important;`,
  fw: (v) => `font-weight:${v} !important;`,
  w: (v) => `min-width:${v} !important; width:${v} !important; max-width:${v} !important;`,
  h: (v) => `min-height:${v} !important; height:${v} !important; max-height:${v} !important;`,
  wa: (v) => `width:${v} !important;`,
  ha: (v) => `height:${v} !important;`,
  miw: (v) => `min-width:${v} !important;`,
  mih: (v) => `min-height:${v} !important;`,
  mw: (v) => `max-width:${v} !important;`,
  mh: (v) => `max-height:${v} !important;`,
  lh: (v) => `line-height:${v} !important;`,
  br: (v) => `border-radius:${v} !important;`,
  brt: (v) => `border-top-right-radius:${v} !important; border-top-left-radius:${v} !important;`,
  brb: (v) => `border-bottom-right-radius:${v} !important; border-bottom-left-radius:${v} !important;`,
  brr: (v) => `border-top-right-radius:${v} !important; border-bottom-right-radius:${v} !important;`,
  brl: (v) => `border-top-left-radius:${v} !important; border-bottom-left-radius:${v} !important;`,
  top: (v) => `top:${v} !important;`,
  bot: (v) => `bottom:${v} !important;`,
  rht: (v) => `right:${v} !important;`,
  lft: (v) => `left:${v} !important;`,
  m: (v) => `margin:${v} !important;`,
  mx: (v) => `margin-right:${v} !important; margin-left:${v} !important;`,
  my: (v) => `margin-top:${v} !important; margin-bottom:${v} !important;`,
  mr: (v) => `margin-right:${v} !important;`,
  ml: (v) => `margin-left:${v} !important;`,
  mt: (v) => `margin-top:${v} !important;`,
  mb: (v) => `margin-bottom:${v} !important;`,
  p: (v) => `padding:${v} !important;`,
  px: (v) => `padding-right:${v} !important; padding-left:${v} !important;`,
  py: (v) => `padding-top:${v} !important; padding-bottom:${v} !important;`,
  pr: (v) => `padding-right:${v} !important;`,
  pl: (v) => `padding-left:${v} !important;`,
  pt: (v) => `padding-top:${v} !important;`,
  pb: (v) => `padding-bottom:${v} !important;`,
  ls: (v) => `letter-spacing:${v} !important;`,
  av: (v) => `letter-spacing:${v} !important;`,
  z: (v) => `z-index:${v} !important;`,
  trx: (v) => `transform: translateX(${v}) !important;`,
  try: (v) => `transform: translateY(${v}) !important;`,
  trxy: (v) => `transform: translate(${v},${v}) !important;`,
  rot: (v) => `transform: rotate(${v});`,
  op: (v) => `opacity:${v} !important;`,
  c: (v) => `color:${v} !important;`,
  bg: (v) => `background-color:${v} !important;`,
  bc: (v) => `border-color:${v} !important;`,
  bw: (v) => `border-width:${v} !important;`,
  bwt: (v) => `border-top-width:${v} !important;`,
  bwb: (v) => `border-bottom-width:${v} !important;`,
  bwr: (v) => `border-right-width:${v} !important;`,
  bwl: (v) => `border-left-width:${v} !important;`,
  grid: (v) => `display: grid; grid-template-columns:repeat(${v},1fr) !important;`,
};
const regexClassListener = new RegExp(`^(-?)(${Object.keys(cssesClassListener).join("|")})(-?[\\dA-F]+?)(|px|p|vh|vw|em)$`);
function classListener() {
  const ww = document.documentElement.clientWidth;
  const wh = document.documentElement.clientHeight;
  const wBase = 768 < ww ? 1920 : 375;
  const hBase = 768 < ww ? 1080 : 500;
  const xSe = 768 < ww ? 1 : 375 / 430;
  const scale = minmax(0.5, min(ww / wBase, wh / hBase), 1.5) * xSe;

  const elms = qsa("[class]");
  elms.forEach((elm) => (elm.className = elm.className.replace(/#/g, "")).split(/\s+/).forEach((cls) => clsesClassListener.add(cls)));
  clsesClassListener.forEach((cls) => {
    const match = cls.match(regexClassListener);
    if (!match) return;
    // console.log(cls);
    let [, minus, type, value, unit] = match;
    let sharp = "";
    const style = (dicstyle[cls] ||= Style(document.body));
    if (type.match(/^c|bc|bg$/)) unit = "c";
    else isNaN((value = Number(value))) && console.log("classListener", [minus, type, value, unit]);
    if (type == "fw") null;
    else if (type == "z") null;
    else if (type == "grid") null;
    else if (type == "lh" && unit == "") value /= 100;
    else if (type == "rot") unit = "deg";
    else if (type == "av") (value /= 10), (unit = "em");
    else if (unit == "") (value = round(value * scale)), (unit = "px");
    if (unit == "p") unit = "%";
    else if (unit == "em") value /= 100;
    else if (unit == "c") (sharp = "#"), (unit = "");

    value = minus ? `calc(100% - ${value + unit})` : sharp + value + unit;
    const css = cssesClassListener[type](value);
    if (!css) return;
    const newStyle = `.${cls} { ${css} }`;
    if (style.innerHTML !== newStyle) style.innerHTML = newStyle;
  });
  elms.forEach((elm) => elm.classList.remove("img1px"));
}
classListener(), setInterval(classListener, 100);

function fontLoader() {
  const csses = [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap" },
  ];
  for (const css of csses) {
    const link = document.createElement("link");
    (link.rel = css.rel), (link.href = css.href);
    document.body.append(link);
  }
}
window.addEventListener("load", () => setTimeout(fontLoader, 100));

function mailto(to, title, body, option = {}) {
  return new Promise(async (resolve, reject) => {
    const dataobj = { to, title, body, ...option };
    console.log("mailto", dataobj);
    const xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = () => {
      if (xhr1.readyState == 4) {
        if (xhr1.status != 200) reject(xhr1.status);
        else {
          const received = JSON.parse(xhr1.response);
          console.log("mailto", received);
          resolve(received);
        }
      }
    };
    xhr1.open("post", "https://6qmykuzh4b.execute-api.ap-northeast-1.amazonaws.com/all-mail");
    xhr1.send(JSON.stringify(dataobj));
  });
}

function handleTelClick(event) {
  event.preventDefault();
  alert("お問い合わせ先：\n電話番号は 090-2866-3082 です\n最新情報はInstagramでご確認ください♪");
}

function setHeader() {
  const header = qs(".header");
  header.className = "w100p";

  const headerPc = /* HTML */ `
    <div class="pc w100p h164"></div>
    <div class="pc header fbc w100p h164 bgFFF fixed top0 z200">
      <a href="./" class="fcc ml32">
        <img src="img/logo1.webp" class="w374" alt="" />
      </a>
      <div class="v fce mr52">
        <div class="fcc mt9">
          <a href="./" class="px23 f20 fw700 nodeco">HOME</a>
          <a href="./menu.html" class="px23 f20 fw700 nodeco">メニュー</a>
          <a href="./school.html" class="px23 f20 fw700 nodeco">パン教室</a>
          <a href="./access.html" class="px23 f20 fw700 nodeco">アクセス</a>
          <a href="#" onclick="handleTelClick(event)" class="fcc w242 h57 br27 nodeco bg#DB1966 ml34">
            <img src="img/i-tel.webp" class="w50" alt="" />
            <div class="f21 fw700 ml9 cFFF">お問い合わせ</div></a
          >
          <a href="https://www.instagram.com/ouchi_bakery_strawberrytime/" target="_blank" rel="noopener noreferrer" class="fcc w242 h57 br27 nodeco bg#FDA117 ml34">
            <img src="img/i-insta.webp" class="w50" alt="" />
            <div class="f21 fw700 ml9 cFFF">Instagram</div></a
          >
        </div>
      </div>
    </div>
  `;
  header.innerHTML = headerPc;
  const a1s = qsa("a", header);
  for (const a1 of a1s) {
    const regex = new RegExp(a1.href + "(\\/)?$");
    console.log(location.href, regex, location.href.match(regex));

    if (location.href.match(regex)) a1.style.color = "#EAAC52";
  }

  const headerSp = Div(header, `sp header fbc w100p h58 bgFFF fixed top0 z1`, ``);
  Img(A(headerSp, `fcc`, `./`), `img/logo1.webp`, `w138 ml10`);
  const headerL = Div(headerSp, `fxc`, ``);
  Img(A(headerL, `fcc`, `./contact`), `img/sp/i-mail.webp`, `w30 h28 mr10`);
  Img(A(headerL, `fcc`, `./estimate`), `img/sp/i-dentaku.webp`, `w30 h28 mr10`);
  const ham = Img(headerL, `img/sp/i-ham.webp`, `w41 mr10`);
  ham.onclick = () => toggleMenu();

  Div(document.body, `lft0 lft100p`, ``);
  const menuSp = Div(headerSp, `v fcc w100p h100p fixed top0 lft100p z100`, ``);
  Img(menuSp, `img/sp/menu1.webp`, `w100p -h56 abs top56 cover`);
  const headMenu = Div(menuSp, `w100p h56 fbc bgFFF`, ``);
  Img(A(headMenu, `fcc`, `./`), `img/logo1.webp`, `w138 ml11`);
  const cross = Img(headMenu, `img/sp/i-cross.webp`, `w29 mr20`);
  cross.onclick = () => toggleMenu();
  const bodyMenu = Div(menuSp, `v fxc w100p -h58 bgF5F5F5`, ``);

  const menuList = Div(bodyMenu, `v`, ``);
  [
    { href: "./", icon: "img/sp/menu-home.webp", iweight: "24", label: "HOME", arrow: false },
    { href: "./menu", icon: "img/sp/menu-service.webp", iweight: "23", label: "メニュー", arrow: true },
    { href: "./school", icon: "img/sp/menu-works.webp", iweight: "26", label: "パン教室", arrow: false },
    { href: "./price", icon: "img/sp/menu-price.webp", iweight: "24", label: "イベント", arrow: false },
    { href: "./point", icon: "img/sp/menu-point.webp", iweight: "38", label: "アクセス", arrow: false },
    { href: "tel:09028663082", icon: "img/i-tel.webp", iweight: "26", label: "", arrow: false },
    { href: "https://www.instagram.com/ouchi_bakery_strawberrytime/", icon: "img/i-insta.webp", iweight: "26", label: "", arrow: false },
  ].forEach((item) => {
    const href = item.arrow ? "javascript:void(0)" : item.href;
    const a = A(menuList, `fxc h58 w432 pl15 nodeco pointer`, href);

    Img(a, `${item.icon}`, `w${item.iweight} ml31 mr10`);
    const label = Div(a, "nodeco", item.label);
    if (item.arrow) {
      const arrow = Img(a, `img/sp/i-ku.webp`, `h15 ml10 pointer`);
      const subMenu = Div(menuList, `fcc wrap w432 mr10 mt10 pb30 hidden`, ``);
      [
        { href: "./clean1", label: "遺品整理", bg: "3B5EA0" },
        { href: "./clean4", label: "リフォーム", bg: "F99E17" },
        { href: "./clean2", label: "空き家整理", bg: "EDCD0E" },
        { href: "./clean5", label: "ゴミ屋敷片付け", bg: "D3467E" },
        { href: "./clean3", label: "生前整理", bg: "4C9D66" },
        { href: "./clean6", label: "オフィス整理", bg: "555555" },
      ].forEach((sub) => {
        const link = A(subMenu, `nodeco`, sub.href);
        const buttn = Div(link, `w150 h43 fcc br18 m5 bg${sub.bg} bw2 bcFFF shadow1`);
        Img(buttn, "img/sp/back1.webp", "abs w150 z10");
        Div(buttn, "cFFF f16 ls002em z20", sub.label);
      });
      a.onclick = (e) => {
        e.preventDefault();
        const isNowHidden = subMenu.classList.toggle("hidden");
        arrow.classList.replace(isNowHidden ? "h7" : "h15", isNowHidden ? "h15" : "h7");
        label.style.color = isNowHidden ? "" : "#F99E17";
        arrow.src = isNowHidden ? "img/sp/i-ku.webp" : "img/sp/i-ku2.webp";
        a.style.borderBottom = "1px solid #707070";
        subMenu.style.borderBottom = "";
        if (isNowHidden) {
          a.style.borderBottom = "1px solid #707070";
          subMenu.style.borderBottom = "";
        } else {
          a.style.borderBottom = "";
          subMenu.style.borderBottom = "1px solid #707070";
        }
      };
    }
    a.style.borderBottom = "1px solid #707070";
  });

  let isOpen = false;
  menuSp.style.transition = "left 500ms";
  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) menuSp.addclass("lft0"), menuSp.remclass("lft100p");
    else menuSp.addclass("lft100p"), menuSp.remclass("lft0");
  }
}
setHeader();
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-service");
  const submenu = document.getElementById("submenu-service");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    submenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !submenu.contains(e.target)) {
      submenu.classList.add("hidden");
    }
  });
});

function setFooter() {
  const footerPcImg = document.body.dataset.footerImg || "img/footer.webp";
  const footerSpImg = document.body.dataset.footerSpImg || "img/sp/footer.webp";
  const mapurl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.1685800270866!2d131.43501605769313!3d34.16019916001695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354490bfdd5cd357%3A0xb3984796b1053fee!2z44GK44GG44Gh44OZ44O844Kr44Oq44O8IHN0cmF3YmVycnl0aW1l!5e0!3m2!1sja!2sjp!4v1752224075332!5m2!1sja!2sjp";
  const footer = qs(".footer");
  footer.outerHTML = /* HTML */ `
    <div class="pc footer fcc z100">
      <img src="${footerPcImg}" class="w1920 h628 mt-90" alt="" />
      <div class="fxc abs bot155">
        <iframe class="w440 h360" src="${mapurl}" loading="lazy"></iframe>
        <div class="v f  ml115">
          <img src="img/logo1.webp" class="w374" alt="" />
          <div class="f22 mt46">
            〒753-0815<br />
            山口県山口市維新公園1丁目3-11<br />
            営業時間：木・金・土曜 7:00~15:00(なくなり次第終了)<br />
            TEL：090-2866-3082<br />
          </div>
        </div>
      </div>
    </div>
    <div class="sp footer fcc z100">
      <img src="${footerSpImg}" class="w430 mt-30" alt="" />
      <div class="v fxc abs bot62">
        <iframe class="w382 h227" src="${mapurl}" loading="lazy"></iframe>
        <img src="img/logo1.webp" class="w231 mt23" alt="logo" />
        <div class="f14 mt26 lh200">
          〒753-0815<br />
          山口県山口市維新公園1丁目3-11<br />
          営業時間：木・金・土曜 7:00~15:00(なくなり次第終了)<br />
          TEL：090-2866-3082<br />
        </div>
      </div>
    </div>
  `;
}
setFooter();

const qaGruops = [
  {
    name1: "すべて",
    img1: "i-tiger.webp",
    color1: "F8BA56",
    qas: [
      {
        q: `病院より在宅緩和ケアをすすめられました。在宅緩和ケアと在宅看護は何が違うのでしょうか？`,
        a: `在宅看護は看護師が訪問看護として、お住まいまでお伺いさせて頂き、医師の指示のもと看護ケアを致します。\n\n在宅緩和ケアは医師、看護師、理学療法士など多職種で連携して痛みのコントロールをしながら、住み慣れた在宅でその人らしく過ごすサポートをさせて頂きます`,
      },
      { q: `家族も緩和ケアの対象になりますか？`, a: `はい。緩和ケアは患者さんだけでなく、ご家族も重要な支援の対象です。介護の負担、心の不安、看取り後のグリーフケア（遺族ケア）なども含まれます。` },
      {
        q: `治療を受けながら緩和ケアを始めてもよいのですか？`,
        a: `もちろんです。がん治療やその他の積極的な治療を受けながら、緩和ケアも同時に取り入れることができます。そのほうが、治療の副作用を和らげたり、治療の継続がしやすくなったりする利点があります。`,
      },
      {
        q: `在宅緩和ケアの良いところはなんですか？`,
        a: `1. 住み慣れた場所で過ごせる安心感\n家という慣れた環境で、自分らしく穏やかに生活できることが大きなメリットです。病院とは違い、家族やペットと自然な形で一緒に過ごせることも、心の安定につながります\n\n2. 家族との時間を大切にできる\n入院と違い、面会時間の制限がなく、家族との自由な時間が持てます。日常の中で自然にコミュニケーションが取れるため、かけがえのない時間を一緒に過ごせます。\n\n3. 本人の意思を尊重しやすい\n病状に応じた柔軟な対応が可能で、本人の希望に沿ったケア（例えば「病院に行かず家で過ごしたい」など）を実現しやすくなります。\n\n4. 身体的・精神的な症状を自宅で緩和できる\n訪問診療や訪問看護を活用して、痛み、呼吸苦、倦怠感などの症状を在宅でコントロールすることができます。緊急時も24時間対応可能な体制が整っている場合が多く、安心して過ごせます。`,
      },
    ],
  },
  {
    name1: "リハトケア",
    img1: "i-bird.webp",
    color1: "B1E4E5",
    qas: [
      { q: ``, a: `` },
      { q: ``, a: `` },
      { q: ``, a: `` },
      { q: ``, a: `` },
    ],
  },
  {
    name1: "ポストケア",
    img1: "i-bear3.webp",
    color1: "C3D178",
    qas: [
      { q: ``, a: `` },
      { q: ``, a: `` },
      { q: ``, a: `` },
      { q: ``, a: `` },
    ],
  },
  {
    name1: "その他",
    img1: "",
    color1: "D8D8D8",
    qas: [
      { q: ``, a: `` },
      { q: ``, a: `` },
      { q: ``, a: `` },
      { q: ``, a: `` },
    ],
  },
];
function setQa() {
  const qa = qs(".qa");
  if (!qa) return;
  const divTabs = Div(qa, `mt127 mb320`, ``);
  for (let iTab = 0; iTab < qaGruops.length; iTab++) {
    const qaGroup = qaGruops[iTab];
    const divTab = Div(divTabs, `w1392 py57 bgF4E070 z1`, ``);
    for (const qa of qaGroup.qas) {
      const divQa = Div(divTab, `w1172 bgFFF px55 py29 mb35 mx55`, ``);
      const divQ = Div(divQa, `f`, ``);
      Div(divQ, `w91 h86 pt10 pl5 br50p f44 fw700 bgF8BA56 cFFF tc`, `Q`);
      Div(divQ, `mw954 f30 ml36 mt25`, `${qa.q}`);
      const line1 = Img(divQa, `img/line1.webp`, `w1173 mt32`);
      const divA = Div(divQa, `f mt47 mb26`, ``);
      Div(divA, `w91 h86 pt10 pl5 br50p f44 fw700 bgB1E4E5 cFFF tc`, `A`);
      Div(divA, `mw954 f30 ml36`, `${qa.a}`);
      const button1 = Img(divQa, `img/i-open.webp`, `w55 abs top40 rht52`);
      let isOpen = true;
      button1.onclick = () => {
        isOpen = !isOpen;
        if (isOpen) line1.remclass("hidden"), divA.remclass("hidden");
        else line1.addclass("hidden"), divA.addclass("hidden");
      };
    }
    const button2 = Div(divTabs, `fcc w311 h93 brt30 abs top-92 lft${324 * iTab} bg${qaGroup.color1} pointer`, ``);
    if (qaGroup.img1) Img(button2, `img/${qaGroup.img1}`, `w45`);
    Div(button2, `f30 fw700 mx13`, `${qaGroup.name1}`);
    button2.onclick = () => show(iTab);
  }
  function show(iTab) {
    for (let iTab2 = 0; iTab2 < qaGruops.length; iTab2++) {
      const divTab = divTabs.children[iTab2 * 2];
      if (iTab2 == iTab) divTab.remclass("hidden");
      else divTab.addclass("hidden");
    }
  }
  show(0);
}
setQa();

const contactQs = [
  { name1: "姓", type1: "text", placeholder: "例）山田", autocomplete: "family-name", required: true },
  { name1: "名", type1: "text", placeholder: "例）太郎", autocomplete: "given-name", required: true },
  { name1: "姓(フリガナ)", type1: "text", placeholder: "例）ヤマダ", autocomplete: "family-name-kana", required: true },
  { name1: "名(フリガナ)", type1: "text", placeholder: "例）タロウ", autocomplete: "given-name-kana", required: true },
  { name1: "電話番号", type1: "tel", placeholder: "000-0000-0000", autocomplete: "tel", required: true },
  { name1: "メールアドレス", type1: "mail", placeholder: "sample@aaa.com", autocomplete: "email", required: true },
  { type1: "section", label: "本人" },
  { name1: "郵便番号", type1: "text", placeholder: "〒0000000", autocomplete: "postal-code1", required: true },
  { name1: "住所", type1: "text", placeholder: "豊川市", autocomplete: "address-line1", required: true },
  { name1: "ご依頼住所", type1: "select", options: ["ご本人住所に送付", "別の住所で依頼する"], required: false },
  { type1: "section", label: "ご依頼先住所" },
  { name1: "郵便番号", type1: "text", placeholder: "〒0000000", autocomplete: "postal-code2", required: true },
  { name1: "住所", type1: "text", placeholder: "豊川市", autocomplete: "address-line2", required: true },
  { name1: "連絡手段", type1: "select", options: ["電話", "メール", "どちらでも"], required: true },

  { name1: "お問い合わせ内容", type1: "textArea", placeholder: "例）時間指定はできますか？", required: true },
];
function setContact() {
  const contact = qs(".contact");
  if (!contact) return;
  const divContact = Div(contact, `v f w1036 px109 py82 mb666 mt115 bgFFF bw3 bcDB1966`, ``);
  let zip1Input, addr1Input;
  let zip2Input, addr2Input;
  let input1;
  for (const q of contactQs) {
    const divQ = Div(divContact, `f mt27`, ``);
    const divTitle = Div(divQ, `fxc w195 h55 mr32`, ``);
    if (q.type1 !== "section") {
      const divTitleText = Div(divTitle, `f20 fw700 `, `${q.name1}`);
      if (q.required) Div(divTitleText, `abs top-5 rht-20 cFA4423`, `※`);
    } else {
      Div(divTitle, "w1036 h39 bg#DB1966 cFFF f23 pl21", q.label);
    }
    if (q.type1 === "section") {
      continue;
    } else if (q.type1 == "select") {
      let label, radio;
      const radioWrapper = Div(divContact, `v f`, ``);
      q.options.forEach((opt) => {
        if (q.name1 === "ご依頼住所") {
          label = Div(radioWrapper, `fxc w976 h60 px28 bc707070 bw1  f20 `, ``);
          radio = InputRadio(label, "mr8 ", {
            name: q.name1,
            value: opt,
            checked: q.ans === opt,
          });
          label.appendChild(document.createTextNode(opt));
        } else if (q.name1 === "連絡手段") {
          label = Div(divQ, `fxc wrap mb16 f20 `, ``);
          radio = InputRadio(label, "mx36", {
            name: q.name1,
            value: opt,
            checked: q.ans === opt,
          });
          radio.onV = (v) => {
            q.ans = v;
          };
          label.appendChild(document.createTextNode(opt));
        }
      });
    } else if (q.type1 == "text") {
      if (q.name1 === "姓" || q.name1 === "名" || q.name1 === "姓(フリガナ)" || q.name1 === "名(フリガナ)") {
        input1 = InputText(divQ, `w488 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      } else if (q.name1 === "郵便番号") {
        if (q.autocomplete === "postal-code1") {
          zip1Input = InputText(divQ, "w557 h55 px28 f20 br17 bgEFEFEF", {
            id: "zip",
            name: "zip",
            placeholder: "例:100-0001",
            maxlength: 8, // XXX-YYYY で 8 文字
          });
        } else if (q.autocomplete === "postal-code2") {
          zip2Input = InputText(divQ, "w557 h55 px28 f20 br17 bgEFEFEF", {
            id: "zip",
            name: "zip",
            placeholder: "例:100-0001",
            maxlength: 8, // XXX-YYYY で 8 文字
          });
        }
        const searchBtn = Div(divQ, "f23 fcc ml10  w217 h55 br17 bgA5A5A5 cFFF pointer", "〒 住所検索");

        searchBtn.onclick = () => {
          const raw = (q.autocomplete === "postal-code1" ? zip1Input.value : zip2Input.value).trim();
          const key = raw.replace(/-/g, "");
          const address = dicpost[key];

          if (!address) {
            alert("該当する住所が見つかりません。");
            return;
          }

          if (q.autocomplete === "postal-code1") {
            addr1Input.value = address;
          } else {
            addr2Input.value = address;
          }
        };
        if (q.autocomplete === "postal-code1") {
          input1 = zip1Input;
        } else if (q.autocomplete === "postal-code2") {
          input1 = zip2Input;
        }
      } else if (q.name1 === "住所") {
        if (q.autocomplete === "address-line1") {
          addr1Input = InputText(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
          input1 = addr1Input;
        } else if (q.autocomplete === "address-line2") {
          addr2Input = InputText(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
          input1 = addr2Input;
        }
      } else {
        input1 = InputText(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      }
      input1.onV = (v) => (q.ans = v);
    } else if (q.type1 == "mail") {
      const input1 = InputMail(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      input1.onV = (v) => {
        delete q.ans, input1.remclass("cA00");
        if (q.regex.test(v)) q.ans = v;
        else alert("メールアドレスの形式が正しくありません。"), input1.addclass("cA00");
      };
    } else if (q.type1 == "tel") {
      const input1 = InputTel(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      input1.onV = (v) => {
        delete q.ans, input1.remclass("cA00");
        if (q.regex.test(v)) q.ans = v;
        else alert("電話番号の形式が正しくありません。"), input1.addclass("cA00");
      };
    } else if (q.type1 == "mes") {
      Div(divQ, `fxc w976 h55 f18`, `${q.mes}`);
    } else if (q.type1 == "dateTime") {
      divTitle.remclass("fxc"), divTitle.addclass("fendc");
      q.anss ||= ["", ""];
      const select1 = Select(divQ, `w463 h55 px28 f20 bgEFEFEF br17`);
      select1.add("", "項目から選択してください");
      for (let dt1 = getdt(); dt1 < getdt().addymd(1); dt1.addymd(0, 0, 1)) {
        const ymd1 = dt1.ymd();
        const day1 = dt1.day();
        if (day1 != "日") select1.add(`${ymd1} ${day1}`);
      }
      select1.onV = (v) => (q.anss[0] = v);
      const select2 = Select(divQ, `w463 h55 px28 f20 bgEFEFEF br17 ml58`);
      select2.add("", "項目から選択してください");
      for (let time1 = getdthm("10:00"); time1 <= getdthm("18:00"); time1.addhms(1)) {
        const hm1 = time1.hm();
        select2.add(`${hm1}`);
      }
      select2.onV = (v) => (q.anss[1] = v);
    } else if (q.type1 == "textArea") {
      const input1 = Textarea(divQ, `w787 h212 px28 py13 f20 bgEFEFEF br17`, { placeholder: q.placeholder });
      input1.onV = (v) => (q.ans = v);
    } else if (q.type1 == "") {
    } else if (q.type1 == "") {
    } else if (q.type1 == "") {
    } else {
    }
  }
  const divContact1 = Div(divContact, `v fcc`);
  Div(divContact1, `tc mt40 f23`, ``, {
    innerHTML: /* HTML */ `※送信前に内容のご確認をお願い致します。<br />
      ※「<a href="#privacy" class="c#DB1966 nodeco">プライバシーポリシー</a>」をご一読いただき、チェックをお願いします。`,
  });
  Div(
    divContact1,
    `w976 h243 px34 py21 ofaa bw1 br17 mt62 f16`,
    `プライバシーポリシー
クリーンサポート Y2（以下、「当社」といいます）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。

個人情報の管理
当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。

個人情報の利用目的
本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、e-mailアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。 お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。GoogleアナリティクスではCookieを使用し、お客様の本サイトへの訪問履歴を収集、記録、分析しています。このデータは匿名で収集されており、個人を特定するものではありません。
この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細はGoogleアナリティクスサービス利用規約のページやGoogleポリシーと規約ページをご覧ください。

 `,
    { id: "privacy" }
  );
  const check1 = new Check(divContact1, `mt32 f23`, false, `プライバシーポリシーに同意する`, { className2: `w30 h30 bw2 br9` });

  const button1 = Div(divContact1, `f23 fcc w521 h78 br36 f27 bgDB1966 cFFF mt53 shadow1 pointer`, `送信する`);
  button1.onclick = async () => {
    for (const q of contactQs) if (q.anss) q.ans = `${q.anss[0] || "----"} ${q.anss[1] || "----"}`;
    const span1 = `<span style="display:inline-block;width:12em">`;
    const span2 = `<span style="display:inline-block;width:2em">`;
    const spanE = `</span>`;
    // const html = contactQs.map((o) => `${span1}${o.name1}${spanE}${span2}：${spanE}${o.ans || "----"}`).join("<br>\n");
    const html = /* HTML */ `<table>
      ${contactQs.map((o) => `<tr><td>${o.name1}</td><td>：</td><td>${o.ans || "----"}</td></tr>`).join("")}
    </table>`;
    console.log(html);

    let isErr1 = false;
    for (const q of contactQs) {
      if (q.type1 == "mes") continue;
      if (!q.required) continue;
      if (q.anss) {
        for (const ans of q.anss) {
          if (!ans) alert(`${q.name1} が入力されていません。`), (isErr1 = true);
          if (isErr1) return;
        }
      } else {
        if (!q.ans) alert(`${q.name1} が入力されていません。`), (isErr1 = true);
      }
      if (isErr1) return;
    }

    if (!check1.bool) alert(`プライバシーポリシーに同意していません。`), (isErr1 = true);
    if (isErr1) return;

    alert("送信中です。");
    await mailto("hayashi@main-inc.biz", "ホームページからのお問い合わせ", html.trim(), { type: "html" });
    alert("送信が完了しました。");
    button1.remove();
  };
  Div(divContact, `tc mt76 f23`, ``, {
    innerHTML: /* HTML */ `このサイトはreCAPTCHAによって保護されており、
      <br />
      Googleの<a href="#privacy" class="c#DB1966 nodeco">プライバシーポリシー</a>と<a href="#privacy" class="c#DB1966 nodeco">利用規約</a>が適用されます。`,
  });
}
setContact();

function setContactSp() {
  const contact = qs(".contactSp");
  if (!contact) return;
  const divContact = Div(contact, `v fxc w326 p26 br25 mb100 bgFFF bw2 bcDB1966`, ``);
  let zip1Input, addr1Input;
  let zip2Input, addr2Input;

  for (const q of contactQs) {
    const divQ = Div(divContact, `v f my3`, ``);
    const divTitle = Div(divQ, `f  `, ``);

    if (q.type1 !== "section") {
      const divTitleText = Div(divTitle, `f16 fw700 mb3`, `${q.name1}`);
      if (q.required) Div(divTitleText, `abs top-4 rht-15 cFA4423 f11`, `※`);
    } else {
      Div(divTitle, "w330 h29 bg#DB1966 cFFF f16 pl9 mt25 mb10", q.label);
    }
    if (q.type1 === "section") {
      continue;
    } else if (q.type1 == "select") {
      let label, radio;
      const labelin = Div(divQ, "f wrap w336");
      q.options.forEach((opt) => {
        if (q.name1 === "ご依頼住所") {
          label = Div(divQ, `fxc wrap mb16 f16 w336  my7`, ``);
          radio = InputRadio(label, "mr13 ml10", {
            name: q.name1,
            value: opt,
            checked: q.ans === opt,
          });
          label.appendChild(document.createTextNode(opt));
        } else if (q.name1 === "連絡手段") {
          label = Div(labelin, `f wrap mb16 f16 mr20`, ``);
          radio = InputRadio(label, "my7 ml9", {
            name: q.name1,
            value: opt,
            checked: q.ans === opt,
          });
          radio.onV = (v) => {
            q.ans = v;
          };
          label.appendChild(document.createTextNode(opt));
        }
      });
    } else if (q.type1 === "text") {
      let input1;
      if (q.name1 === "郵便番号") {
        const postalwrap = Div(divQ, "f wrap");
        if (q.autocomplete === "postal-code1") {
          zip1Input = InputText(postalwrap, `w151 h43 px21 f16 bgEFEFEF br17`, {
            placeholder: "例:100-0001",
            autocomplete: q.autocomplete,
            maxlength: 8,
          });
          input1 = zip1Input;
        } else if (q.autocomplete === "postal-code2") {
          zip2Input = InputText(postalwrap, `w151 h43 px21 f16 bgEFEFEF br17`, {
            placeholder: "例:100-0001",
            autocomplete: q.autocomplete,
            maxlength: 8,
          });
          input1 = zip2Input;
        }
        const btn = Div(postalwrap, `ml8 px10 f16 fcc h43 br17 bgA5A5A5 cFFF pointer`, `〒 住所検索`);
        btn.onclick = () => {
          const raw = input1.value.trim().replace(/-/g, "");
          const address = dicpost[raw];
          if (!address) return alert("該当する住所が見つかりません。");
          if (q.autocomplete === "postal-code1") addr1Input.value = address;
          else addr2Input.value = address;
        };
      } else if (q.name1 === "住所") {
        if (q.autocomplete === "address-line1") {
          addr1Input = InputText(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, {
            placeholder: q.placeholder,
            autocomplete: q.autocomplete,
          });
          input1 = addr1Input;
        } else if (q.autocomplete === "address-line2") {
          addr2Input = InputText(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, {
            placeholder: q.placeholder,
            autocomplete: q.autocomplete,
          });
          input1 = addr2Input;
        }
      } else {
        input1 = InputText(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, {
          placeholder: q.placeholder,
          autocomplete: q.autocomplete,
        });
      }

      // 最後に onV をセット
      input1.onV = (v) => (q.ans = v);
    } else if (q.type1 == "mail") {
      const input1 = InputMail(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      input1.onV = (v) => {
        delete q.ans, input1.remclass("cA00");
        if (q.regex.test(v)) q.ans = v;
        else alert("メールアドレスの形式が正しくありません。"), input1.addclass("cA00");
      };
    } else if (q.type1 == "tel") {
      const input1 = InputTel(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      input1.onV = (v) => {
        delete q.ans, input1.remclass("cA00");
        if (q.regex.test(v)) q.ans = v;
        else alert("電話番号の形式が正しくありません。"), input1.addclass("cA00");
      };
    } else if (q.type1 == "mes") {
      Div(divQ, `fxc w313 f13`, `${q.mes}`);
    } else if (q.type1 == "dateTime") {
      q.anss ||= ["", ""];
      const select1 = Select(divQ, `w289 h42 px21 f16 bgEFEFEF br17`);
      select1.add("", "項目から選択してください");
      for (let dt1 = getdt(); dt1 < getdt().addymd(1); dt1.addymd(0, 0, 1)) {
        const ymd1 = dt1.ymd();
        const day1 = dt1.day();
        if (day1 != "日") select1.add(`${ymd1} ${day1}`);
      }
      select1.onV = (v) => (q.anss[0] = v);
      const select2 = Select(divQ, `w289 h42 px21 f16 bgEFEFEF br17 mt16`);
      select2.add("", "項目から選択してください");
      for (let time1 = getdthm("10:00"); time1 <= getdthm("18:00"); time1.addhms(1)) {
        const hm1 = time1.hm();
        select2.add(`${hm1}`);
      }
      select2.onV = (v) => (q.anss[1] = v);
    } else if (q.type1 == "textArea") {
      const input1 = Textarea(divQ, `w286 h292 px21 py13 f16 bgEFEFEF br17`, { placeholder: q.placeholder });
      input1.onV = (v) => (q.ans = v);
    } else if (q.type1 == "") {
    } else if (q.type1 == "") {
    } else if (q.type1 == "") {
    } else {
    }
  }

  Div(divContact, `tc mt32 f16`, ``, {
    innerHTML: /* HTML */ `※送信前に内容のご確認を<br />
      お願い致します。<br />
      ※「<a href="#privacySp" class="c#DB1966 nodeco">プライバシーポリシー</a>」<br />
      をご一読いただき、チェックをお願いします。`,
  });
  Div(
    divContact,
    `w280 h184 px26 py18 ofaa bw1 br17 mt48 f16`,
    `プライバシーポリシー
             クリーンサポート Y2（以下、「当社」といいます）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
              
              個人情報の管理
              当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
              
              個人情報の利用目的
              本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、メールアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。 お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
              `,
    { id: "privacySp" }
  );
  const check1 = new Check(divContact, `f16 mt20`, false, `プライバシーポリシーに同意する`, { className2: `w26 h26 bw2 br9` });

  const button1 = Div(divContact, `fcc w150 h40 br36 f15 bgDB1966 cFFF mt24 shadow1 pointer`, `送信する`);
  button1.onclick = async () => {
    for (const q of contactQs) if (q.anss) q.ans = `${q.anss[0] || "----"} ${q.anss[1] || "----"}`;
    const span1 = `<span style="display:inline-block;width:12em">`;
    const span2 = `<span style="display:inline-block;width:2em">`;
    const spanE = `</span>`;
    // const html = contactQs.map((o) => `${span1}${o.name1}${spanE}${span2}：${spanE}${o.ans || "----"}`).join("<br>\n");
    const html = /* HTML */ `<table>
      ${contactQs.map((o) => `<tr><td>${o.name1}</td><td>：</td><td>${o.ans || "----"}</td></tr>`).join("")}
    </table>`;
    console.log(html);

    let isErr1 = false;
    for (const q of contactQs) {
      if (q.type1 == "mes") continue;
      if (!q.required) continue;
      if (q.anss) {
        for (const ans of q.anss) {
          if (!ans) alert(`${q.name1} が入力されていません。`), (isErr1 = true);
          if (isErr1) return;
        }
      } else {
        if (!q.ans) alert(`${q.name1} が入力されていません。`), (isErr1 = true);
      }
      if (isErr1) return;
    }

    if (!check1.bool) alert(`プライバシーポリシーに同意していません。`), (isErr1 = true);
    if (isErr1) return;

    alert("送信中です。");
    await mailto("hayashi@main-inc.biz", "ホームページからのお問い合わせ", html.trim(), { type: "html" });
    alert("送信が完了しました。");
    button1.remove();
  };
}
setContactSp();

const estimateQs = [
  { name1: "姓", type1: "text", placeholder: "例）山田", autocomplete: "family-name", required: true },
  { name1: "名", type1: "text", placeholder: "例）太郎", autocomplete: "given-name", required: true },
  { name1: "姓(フリガナ)", type1: "text", placeholder: "例）ヤマダ", autocomplete: "family-name-kana", required: true },
  { name1: "名(フリガナ)", type1: "text", placeholder: "例）タロウ", autocomplete: "given-name-kana", required: true },
  { name1: "電話番号", type1: "tel", placeholder: "000-0000-0000", autocomplete: "tel", required: true },
  { name1: "メールアドレス", type1: "mail", placeholder: "sample@aaa.com", autocomplete: "email", required: true },
  { type1: "section", label: "本人" },
  { name1: "郵便番号", type1: "text", placeholder: "〒0000000", autocomplete: "postal-code1", required: true },
  { name1: "住所", type1: "text", placeholder: "豊川市", autocomplete: "address-line1", required: true },
  { name1: "ご依頼住所", type1: "radio", options: ["ご本人住所に送付", "別の住所で検索する"], required: false },
  { type1: "section", label: "ご依頼先住所" },
  { name1: "郵便番号", type1: "text", placeholder: "〒0000000", autocomplete: "postal-code2", required: true },
  { name1: "住所", type1: "text", placeholder: "豊川市", autocomplete: "address-line2", required: true },
  { name1: "連絡手段", type1: "radio", options: ["電話", "メール", "どちらでも"], required: true },
  { name1: "ご希望のサービス", type1: "multiradio", options: ["遺品整理", "空き家整理", "生前整理", "リフォーム", "ゴミ屋敷片付け", "オフィス整理", "ハウスクリーニング", "遺品供養"], required: true },

  { name1: "お部屋の写真", type1: "file", placeholder: "写真をアップロード", required: true },

  { name1: "作業規模の目安", type1: "select", options: ["一戸建て", "マンション", "アパート", "ビル・その他"], required: true },

  { name1: "間取りや広さ", type1: "text", placeholder: "1LDK", required: true },

  { name1: "エレベーターの有無", type1: "radio", options: ["有", "無"], required: true },

  { name1: "駐車スペースの有無", type1: "radio", options: ["有", "無"], required: true },

  { name1: "ご相談・ご要望", type1: "textArea", placeholder: "例；「女性スタッフ希望」「なるべく費用を抑えたい」など", required: false },
];
function setEstimate() {
  const estimate = qs(".estimate");
  if (!estimate) return;
  const divEstimate = Div(estimate, `v f w1036 px109 py82 mb666 mt115 bgFFF bw3 bcFDA217`, ``);
  let zip1Input, addr1Input;
  let zip2Input, addr2Input;
  let input1;
  for (const q of estimateQs) {
    const divQ = Div(divEstimate, `f mt27`, ``);
    const divTitle = Div(divQ, `fxc w195 h55 mr32`, ``);
    if (q.type1 !== "section") {
      const divTitleText = Div(divTitle, `f20 fw700 `, `${q.name1}`);
      if (q.required) Div(divTitleText, `abs top-5 rht-20 cFDA217`, `※`);
    } else {
      Div(divTitle, "w1036 h39 bg#FDA217 cFFF f23 pl21", q.label);
    }

    if (q.type1 === "section") {
      continue;
    } else if (q.type1 == "file") {
      const divQ2 = Div(divQ, "v fxc");
      Div(divQ2, "f16", "各部屋、間取りが見える範囲の写真でお願いします。\n写真でわかる範囲の見積もりです。最終的には現地確認で算出いたします。");
      const fileInput = Inputfile(divQ2, "w594 h62 px8 py18 f20 bgEFEFEF br17 v mt12", "写真をアップロード");
      fileInput.className = "custom-file";
      Img(divQ2, `img/icon_up.webp`, `abs rht45 bot18 w34`);
    } else if (q.type1 == "select") {
      const select1 = Select(divQ, `w787 h55 px28 f20 bgEFEFEF br17`);
      select1.add("", "項目から選択してください");
      for (const option of q.options) select1.add(option);
      select1.onV = (v) => (q.ans = v);
    } else if (q.type1 == "radio") {
      let label, radio;
      const radioWrapper = Div(divEstimate, `v f`, ``);
      q.options.forEach((opt) => {
        if (q.name1 === "ご依頼住所") {
          label = Div(radioWrapper, `fxc w976 h60 px28 bc707070 bw1 f20`, ``);
          radio = InputRadio(label, "mr8 ", {
            name: q.name1,
            value: opt,
            checked: q.ans === opt,
            accentColor: "#E68A01",
          });
          label.appendChild(document.createTextNode(opt));
        } else {
          label = Div(divQ, `fxc wrap mb16 f20  mx18`, ``);
          radio = InputRadio(label, "mx36", {
            name: q.name1,
            value: opt,
            checked: q.ans === opt,
            accentColor: "#E68A01",
          });
          radio.onV = (v) => {
            q.ans = v;
          };
          label.appendChild(document.createTextNode(opt));
        }
      });
    } else if (q.type1 == "multiradio") {
      q.ans = [];
      const wrapper = Div(divQ, `w787 h192 px8 py18 f20 bgEFEFEF br17 fxc v `, ``);
      const wrapper1 = Div(wrapper, "f wrap wa100p");
      q.options.slice(0, 6).forEach((opt, i) => {
        const label = Div(wrapper1, `fxc f20 mx15 my9`, ``);
        const radio = InputRadio(label, "", {
          name: `${q.name1}_${i}`,
          value: opt,
          checked: false,
          accentColor: "#E68A01",
        });

        radio._wasChecked = false;
        radio.addEventListener("click", () => {
          radio.checked = !radio._wasChecked;
          radio._wasChecked = radio.checked;
          radio.onV(radio.value);
        });

        radio.onV = (v) => {
          if (radio.checked) {
            if (!q.ans.includes(v)) q.ans.push(v);
          } else {
            q.ans = q.ans.filter((x) => x !== v);
          }
          console.log(q.name1, q.ans);
        };

        label.appendChild(document.createTextNode(opt));
      });
      const wrapper3 = Div(wrapper, "fcc w700 nowrap");
      Div(wrapper3, `fxc my8 f16 w86`, `オプション `);
      Div(
        wrapper3,
        "wa100p mx8",
        "",
        {},
        {
          borderTop: "1px dashed #6E605B",
          height: "0",
        }
      );
      //const row2 = Div(wrapper, `w787 h? px18 f20 bgEFEFEF br17 f wrap mt10`, ``);
      const wrapper2 = Div(wrapper, "f wrap w100p");
      q.options.slice(6).forEach((opt, i) => {
        const label = Div(wrapper2, `fxc f20 mx15 my9`, ``);
        const radio = InputRadio(label, "", {
          name: `${q.name1}_opt${6 + i}`,
          value: opt,
          checked: false,
          accentColor: "#E68A01",
        });
        radio._wasChecked = false;
        label.appendChild(document.createTextNode(opt));
        radio.addEventListener("click", () => {
          radio.checked = !radio._wasChecked;
          radio._wasChecked = radio.checked;
          radio.onV(radio.value);
        });
        radio.onV = (v) => {
          if (radio.checked) {
            if (!q.ans.includes(v)) q.ans.push(v);
          } else {
            q.ans = q.ans.filter((x) => x !== v);
          }
        };
      });

      continue;
    } else if (q.type1 == "text") {
      if (q.name1 === "姓" || q.name1 === "名" || q.name1 === "姓(フリガナ)" || q.name1 === "名(フリガナ)") {
        input1 = InputText(divQ, `w488 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      } else if (q.name1 === "郵便番号") {
        if (q.autocomplete === "postal-code1") {
          zip1Input = InputText(divQ, "w557 h55 px28 f20 br17 bgEFEFEF", {
            id: "zip",
            name: "zip",
            placeholder: "例:100-0001",
            maxlength: 8, // XXX-YYYY で 8 文字
          });
        } else if (q.autocomplete === "postal-code2") {
          zip2Input = InputText(divQ, "w557 h55 px28 f20 br17 bgEFEFEF", {
            id: "zip",
            name: "zip",
            placeholder: "例:100-0001",
            maxlength: 8, // XXX-YYYY で 8 文字
          });
        }
        const searchBtn = Div(divQ, "f23 fcc ml10  w217 h55 br17 bgA5A5A5 cFFF pointer", "〒 住所検索");

        searchBtn.onclick = () => {
          const raw = (q.autocomplete === "postal-code1" ? zip1Input.value : zip2Input.value).trim();
          const key = raw.replace(/-/g, "");
          const address = dicpost[key];

          if (!address) {
            alert("該当する住所が見つかりません。");
            return;
          }

          if (q.autocomplete === "postal-code1") {
            addr1Input.value = address;
          } else {
            addr2Input.value = address;
          }
        };
        if (q.autocomplete === "postal-code1") {
          input1 = zip1Input;
        } else if (q.autocomplete === "postal-code2") {
          input1 = zip2Input;
        }
      } else if (q.name1 === "住所") {
        if (q.autocomplete === "address-line1") {
          addr1Input = InputText(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
          input1 = addr1Input;
        } else if (q.autocomplete === "address-line2") {
          addr2Input = InputText(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
          input1 = addr2Input;
        }
      } else {
        input1 = InputText(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      }
      input1.onV = (v) => (q.ans = v);
    } else if (q.type1 == "mail") {
      const input1 = InputMail(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      input1.onV = (v) => {
        delete q.ans, input1.remclass("cA00");
        if (q.regex.test(v)) q.ans = v;
        else alert("メールアドレスの形式が正しくありません。"), input1.addclass("cA00");
      };
    } else if (q.type1 == "tel") {
      const input1 = InputTel(divQ, `w787 h55 px28 f20 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      input1.onV = (v) => {
        delete q.ans, input1.remclass("cA00");
        if (q.regex.test(v)) q.ans = v;
        else alert("電話番号の形式が正しくありません。"), input1.addclass("cA00");
      };
    } else if (q.type1 == "mes") {
      Div(divQ, `fxc w976 h55 f18`, `${q.mes}`);
    } else if (q.type1 == "dateTime") {
      divTitle.remclass("fxc"), divTitle.addclass("fendc");
      q.anss ||= ["", ""];
      const select1 = Select(divQ, `w463 h55 px28 f20 bgEFEFEF br17`);
      select1.add("", "項目から選択してください");
      for (let dt1 = getdt(); dt1 < getdt().addymd(1); dt1.addymd(0, 0, 1)) {
        const ymd1 = dt1.ymd();
        const day1 = dt1.day();
        if (day1 != "日") select1.add(`${ymd1} ${day1}`);
      }
      select1.onV = (v) => (q.anss[0] = v);
      const select2 = Select(divQ, `w463 h55 px28 f20 bgEFEFEF br17 ml58`);
      select2.add("", "項目から選択してください");
      for (let time1 = getdthm("10:00"); time1 <= getdthm("18:00"); time1.addhms(1)) {
        const hm1 = time1.hm();
        select2.add(`${hm1}`);
      }
      select2.onV = (v) => (q.anss[1] = v);
    } else if (q.type1 == "textArea") {
      const input1 = Textarea(divQ, `w787 h212 px28 py13 f20 bgEFEFEF br17`, { placeholder: q.placeholder });
      input1.onV = (v) => (q.ans = v);
    } else if (q.type1 == "") {
    } else if (q.type1 == "") {
    } else if (q.type1 == "") {
    } else {
    }
  }
  const divEstimate1 = Div(divEstimate, `v fcc`);
  Div(divEstimate1, `tc mt40 f23`, ``, {
    innerHTML: /* HTML */ `※送信前に内容のご確認をお願い致します。<br />
      ※「<a href="#privacy" class="c#FDA217 nodeco">プライバシーポリシー</a>」をご一読いただき、チェックをお願いします。`,
  });
  Div(
    divEstimate1,
    `w976 h243 px34 py21 ofaa bw1 br17 mt62 f16`,
    `プライバシーポリシー
クリーンサポート Y2（以下、「当社」といいます）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。

個人情報の管理
当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。

個人情報の利用目的
本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、e-mailアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。 お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。GoogleアナリティクスではCookieを使用し、お客様の本サイトへの訪問履歴を収集、記録、分析しています。このデータは匿名で収集されており、個人を特定するものではありません。
この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細はGoogleアナリティクスサービス利用規約のページやGoogleポリシーと規約ページをご覧ください。

 `,
    { id: "privacy" }
  );
  const check1 = new Check(divEstimate1, `mt32 f23`, false, `プライバシーポリシーに同意する`, { className2: `w30 h30 bw2 br9` });

  const button1 = Div(divEstimate1, `f23 fcc w521 h78 br36 f27 bgFDA217 cFFF mt53 shadow1 pointer`, `送信する`);
  button1.onclick = async () => {
    for (const q of estimateQs) if (q.anss) q.ans = `${q.anss[0] || "----"} ${q.anss[1] || "----"}`;
    const span1 = `<span style="display:inline-block;width:12em">`;
    const span2 = `<span style="display:inline-block;width:2em">`;
    const spanE = `</span>`;
    // const html = estimateQs.map((o) => `${span1}${o.name1}${spanE}${span2}：${spanE}${o.ans || "----"}`).join("<br>\n");
    const html = /* HTML */ `<table>
      ${estimateQs.map((o) => `<tr><td>${o.name1}</td><td>：</td><td>${o.ans || "----"}</td></tr>`).join("")}
    </table>`;
    console.log(html);

    let isErr1 = false;
    for (const q of estimateQs) {
      if (q.type1 == "mes") continue;
      if (!q.required) continue;
      if (q.anss) {
        for (const ans of q.anss) {
          if (!ans) alert(`${q.name1} が入力されていません。`), (isErr1 = true);
          if (isErr1) return;
        }
      } else {
        if (!q.ans) alert(`${q.name1} が入力されていません。`), (isErr1 = true);
      }
      if (isErr1) return;
    }

    if (!check1.bool) alert(`プライバシーポリシーに同意していません。`), (isErr1 = true);
    if (isErr1) return;

    alert("送信中です。");
    await mailto("hayashi@main-inc.biz", "ホームページからのお問い合わせ", html.trim(), { type: "html" });
    alert("送信が完了しました。");
    button1.remove();
  };
  Div(divEstimate, `tc mt76 f23`, ``, {
    innerHTML: /* HTML */ `このサイトはreCAPTCHAによって保護されており、
      <br />
      Googleの<a href="#privacy" class="c#FDA217 nodeco">プライバシーポリシー</a>と<a href="#privacy" class="c#FDA217 nodeco">利用規約</a>が適用されます。`,
  });
}
setEstimate();

function setEstimateSp() {
  const estimate = qs(".estimateSp");
  if (!estimate) return;
  const divEstimate = Div(estimate, `v fxc w326 p26 br25 mb100 bgFFF bw2 bcFDA217`, ``);
  let zip1Input, addr1Input;
  let zip2Input, addr2Input;

  for (const q of estimateQs) {
    const divQ = Div(divEstimate, `v f my3`, ``);
    const divTitle = Div(divQ, `f  `, ``);
    if (q.type1 !== "section") {
      const divTitleText = Div(divTitle, `f16 fw700 mb3`, `${q.name1}`);
      if (q.required) Div(divTitleText, `abs top-4 rht-15 cFA4423 f11`, `※`);
    } else {
      Div(divTitle, "w330 h29 bg#FDA217 cFFF f16 pl9 mt25 mb10", q.label);
    }

    if (q.type1 === "section") {
      continue;
    } else if (q.type1 === "file") {
      const divQ2 = Div(divQ, "v fxc");
      Div(divQ2, "f11 mb2", "各部屋、間取りが見える範囲の写真でお願いします。\n写真でわかる範囲の見積もりです。\n最終的には現地確認で算出いたします。");
      const { input, button } = Inputfile(divQ2, "w289 h42 px10 f16 bgEFEFEF br17", "写真をアップロード");
      // モバイルではアイコンを小さめに
      Img(divQ2, `img/icon_up.webp`, `abs rht25 bot12 w20`);
      continue;
    } else if (q.type1 === "select") {
      const select1 = Select(divQ, `w289 h42 px10 f16 bgEFEFEF br17`);
      select1.add("", "選択してください");
      for (const option of q.options) {
        select1.add(option);
      }
      select1.onV = (v) => (q.ans = v);
      continue;
    } else if (q.type1 === "multiradio") {
      q.ans = [];
      const wrapper = Div(divQ, `w319 px5 py6 f wrap bgEFEFEF br17`, ``);
      q.options.slice(0, 6).forEach((opt, i) => {
        const label = Div(wrapper, `fxc f16 mx8 my6`, ``);
        const radio = InputRadio(label, "", {
          name: `${q.name1}_${i}`,
          value: opt,
          checked: false,
          accentColor: "#E68A01",
        });
        // トグル動作
        radio._wasChecked = false;
        radio.addEventListener("click", () => {
          radio.checked = !radio._wasChecked;
          radio._wasChecked = radio.checked;
          if (radio.checked) {
            q.ans.push(opt);
          } else {
            q.ans = q.ans.filter((x) => x !== opt);
          }
        });
        label.appendChild(document.createTextNode(opt));
      });
      const wrapper3 = Div(wrapper, "fcc w289 nowrap");
      Div(wrapper3, `fxc my8 f11 w86 ml10`, `オプション `);
      Div(
        wrapper3,
        "wa100p mx8",
        "",
        {},
        {
          borderTop: "1px dashed #6E605B",
          height: "0",
        }
      );
      const wrapper2 = Div(wrapper, "f wrap w100p");
      q.options.slice(6).forEach((opt, i) => {
        const label = Div(wrapper2, `fxc f16 mx8 my6`, ``);
        const radio = InputRadio(label, "", {
          name: `${q.name1}_opt${6 + i}`,
          value: opt,
          checked: false,
          accentColor: "#E68A01",
        });
        radio._wasChecked = false;
        label.appendChild(document.createTextNode(opt));
        radio.addEventListener("click", () => {
          radio.checked = !radio._wasChecked;
          radio._wasChecked = radio.checked;
          radio.onV(radio.value);
        });
        radio.onV = (v) => {
          if (radio.checked) {
            if (!q.ans.includes(v)) q.ans.push(v);
          } else {
            q.ans = q.ans.filter((x) => x !== v);
          }
        };
      });
      continue;
    } else if (q.type1 == "radio") {
      let label, radio;
      const labelin = Div(divQ, "f wrap w336");
      q.options.forEach((opt) => {
        if (q.name1 === "ご依頼住所") {
          label = Div(divQ, `fxc wrap mb16 f16 w336  my7`, ``);
          radio = InputRadio(label, "mr13 ml10", {
            name: q.name1,
            value: opt,
            checked: q.ans === opt,
          });
          label.appendChild(document.createTextNode(opt));
        } else {
          label = Div(labelin, `f wrap mb16 f16 mr20`, ``);
          radio = InputRadio(label, "my7 ml9", {
            name: q.name1,
            value: opt,
            checked: q.ans === opt,
          });
          radio.onV = (v) => {
            q.ans = v;
          };
          label.appendChild(document.createTextNode(opt));
        }
      });
    } else if (q.type1 === "text") {
      let input1;
      if (q.name1 === "郵便番号") {
        const postalwrap = Div(divQ, "f wrap");
        if (q.autocomplete === "postal-code1") {
          zip1Input = InputText(postalwrap, `w151 h43 px21 f16 bgEFEFEF br17`, {
            placeholder: "例:100-0001",
            autocomplete: q.autocomplete,
            maxlength: 8,
          });
          input1 = zip1Input;
        } else if (q.autocomplete === "postal-code2") {
          zip2Input = InputText(postalwrap, `w151 h43 px21 f16 bgEFEFEF br17`, {
            placeholder: "例:100-0001",
            autocomplete: q.autocomplete,
            maxlength: 8,
          });
          input1 = zip2Input;
        }
        const btn = Div(postalwrap, `ml8 px10 f16 fcc h43 br17 bgA5A5A5 cFFF pointer`, `〒 住所検索`);
        btn.onclick = () => {
          const raw = input1.value.trim().replace(/-/g, "");
          const address = dicpost[raw];
          if (!address) return alert("該当する住所が見つかりません。");
          if (q.autocomplete === "postal-code1") addr1Input.value = address;
          else addr2Input.value = address;
        };
      } else if (q.name1 === "住所") {
        if (q.autocomplete === "address-line1") {
          addr1Input = InputText(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, {
            placeholder: q.placeholder,
            autocomplete: q.autocomplete,
          });
          input1 = addr1Input;
        } else if (q.autocomplete === "address-line2") {
          addr2Input = InputText(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, {
            placeholder: q.placeholder,
            autocomplete: q.autocomplete,
          });
          input1 = addr2Input;
        }
      } else {
        input1 = InputText(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, {
          placeholder: q.placeholder,
          autocomplete: q.autocomplete,
        });
      }

      // 最後に onV をセット
      input1.onV = (v) => (q.ans = v);
    } else if (q.type1 == "mail") {
      const input1 = InputMail(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      input1.onV = (v) => {
        delete q.ans, input1.remclass("cA00");
        if (q.regex.test(v)) q.ans = v;
        else alert("メールアドレスの形式が正しくありません。"), input1.addclass("cA00");
      };
    } else if (q.type1 == "tel") {
      const input1 = InputTel(divQ, `w289 h42 px21 f16 bgEFEFEF br17`, { placeholder: q.placeholder, autocomplete: q.autocomplete });
      input1.onV = (v) => {
        delete q.ans, input1.remclass("cA00");
        if (q.regex.test(v)) q.ans = v;
        else alert("電話番号の形式が正しくありません。"), input1.addclass("cA00");
      };
    } else if (q.type1 == "mes") {
      Div(divQ, `fxc w313 f13`, `${q.mes}`);
    } else if (q.type1 == "dateTime") {
      q.anss ||= ["", ""];
      const select1 = Select(divQ, `w289 h42 px21 f16 bgEFEFEF br17`);
      select1.add("", "項目から選択してください");
      for (let dt1 = getdt(); dt1 < getdt().addymd(1); dt1.addymd(0, 0, 1)) {
        const ymd1 = dt1.ymd();
        const day1 = dt1.day();
        if (day1 != "日") select1.add(`${ymd1} ${day1}`);
      }
      select1.onV = (v) => (q.anss[0] = v);
      const select2 = Select(divQ, `w289 h42 px21 f16 bgEFEFEF br17 mt16`);
      select2.add("", "項目から選択してください");
      for (let time1 = getdthm("10:00"); time1 <= getdthm("18:00"); time1.addhms(1)) {
        const hm1 = time1.hm();
        select2.add(`${hm1}`);
      }
      select2.onV = (v) => (q.anss[1] = v);
    } else if (q.type1 == "textArea") {
      const input1 = Textarea(divQ, `w286 h292 px21 py13 f16 bgEFEFEF br17`, { placeholder: q.placeholder });
      input1.onV = (v) => (q.ans = v);
    } else if (q.type1 == "") {
    } else if (q.type1 == "") {
    } else if (q.type1 == "") {
    } else {
    }
  }

  Div(divEstimate, `tc mt32 f16`, ``, {
    innerHTML: /* HTML */ `※送信前に内容のご確認を<br />
      お願い致します。<br />
      ※「<a href="#privacySp" class="c#FDA217 nodeco">プライバシーポリシー</a>」<br />
      をご一読いただき、チェックをお願いします。`,
  });
  Div(
    divEstimate,
    `w280 h184 px26 py18 ofaa bw1 br17 mt48 f16`,
    `プライバシーポリシー
              株式会社 アットカマル （以下、「当社」といいます）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
              
              個人情報の管理
              当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
              
              個人情報の利用目的
              本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、メールアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。 お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
              `,
    { id: "privacySp" }
  );
  const check1 = new Check(divEstimate, `f16 mt20`, false, `プライバシーポリシーに同意する`, { className2: `w26 h26 bw2 br9` });

  const button1 = Div(divEstimate, `fcc w150 h40 br36 f15 bgFDA217 cFFF mt24 shadow1 pointer`, `送信する`);
  Div(divEstimate, `tc mt20 f16`, ``, {
    innerHTML: /* HTML */ `このサイトはreCAPTCHAによって <br />保護されており、 Googleの <br /><a href="#privacy" class="c#FDA217 nodeco">プライバシーポリシー</a>と<a
        href="#privacy"
        class="c#FDA217 nodeco"
        >利用規約</a
      >が <br />適用されます。`,
  });
  button1.onclick = async () => {
    for (const q of estimateQs) if (q.anss) q.ans = `${q.anss[0] || "----"} ${q.anss[1] || "----"}`;
    const span1 = `<span style="display:inline-block;width:12em">`;
    const span2 = `<span style="display:inline-block;width:2em">`;
    const spanE = `</span>`;
    // const html = estimateQs.map((o) => `${span1}${o.name1}${spanE}${span2}：${spanE}${o.ans || "----"}`).join("<br>\n");
    const html = /* HTML */ `<table>
      ${estimateQs.map((o) => `<tr><td>${o.name1}</td><td>：</td><td>${o.ans || "----"}</td></tr>`).join("")}
    </table>`;
    console.log(html);

    let isErr1 = false;
    for (const q of estimateQs) {
      if (q.type1 == "mes") continue;
      if (!q.required) continue;
      if (q.anss) {
        for (const ans of q.anss) {
          if (!ans) alert(`${q.name1} が入力されていません。`), (isErr1 = true);
          if (isErr1) return;
        }
      } else {
        if (!q.ans) alert(`${q.name1} が入力されていません。`), (isErr1 = true);
      }
      if (isErr1) return;
    }

    if (!check1.bool) alert(`プライバシーポリシーに同意していません。`), (isErr1 = true);
    if (isErr1) return;

    alert("送信中です。");
    await mailto("hayashi@main-inc.biz", "ホームページからのお問い合わせ", html.trim(), { type: "html" });
    alert("送信が完了しました。");
    button1.remove();
  };
}
setEstimateSp();
