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
          <a href="#" onclick="handleTelClick(event)" class="fcc w242 h57 br27 nodeco bg#FDA117 ml34">
            <img src="img/i-tel.webp" class="w50" alt="" />
            <div class="f21 fw700 ml9 cFFF">お問い合わせ</div></a
          >
          <a href="https://www.instagram.com/ouchi_bakery_strawberrytime/" target="_blank" rel="noopener noreferrer" class="fcc w242 h57 br27 nodeco bg#DB1966 ml34">
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
    if (location.href.match(regex)) a1.style.color = "#EAAC52";
  }

  const headerSp = Div(header, `sp v fxc w100p bgF9E8ED fixed top0 z200`, ``);

  // 上段：ロゴ + ボタン
  const headerTop = Div(headerSp, `fcc w100p h60 px10 mt10`, ``);
  Img(A(headerTop, `fcc`, `./`), `img/logo1.webp`, `w200 `);
  const headerTopR = Div(headerTop, `fxc`, ``);

  const telBtn = A(headerTopR, `fcc w35 h35 br17 nodeco bg#FDA117 ml8`, `tel:09028663082`);
  Img(telBtn, `img/i-tel.webp`, `w20`);

  const instaBtn = A(headerTopR, `fcc w35 h35 br17 nodeco bg#DB1966 ml8`, `https://www.instagram.com/ouchi_bakery_strawberrytime/`);
  instaBtn.target = "_blank";
  instaBtn.rel = "noopener noreferrer";
  Img(instaBtn, `img/i-insta.webp`, `w20`);

  // 下段：ナビゲーション
  const headerBottom = Div(headerSp, `fcc w100p h38 px8 gap4`, ``);
  A(headerBottom, `px8 py4 f13 fw700 nodeco nav-btn`, `./`).innerText = "HOME";
  A(headerBottom, `px8 py4 f13 fw700 nodeco nav-btn`, `./menu.html`).innerText = "メニュー";
  A(headerBottom, `px8 py4 f13 fw700 nodeco nav-btn`, `./school.html`).innerText = "パン教室";
  A(headerBottom, `px8 py4 f13 fw700 nodeco nav-btn`, `./access.html`).innerText = "アクセス";

  // 現在のページをハイライト
  const a1sSp = qsa("a", headerSp);
  for (const a1 of a1sSp) {
    if (a1.href) {
      const regex = new RegExp(a1.href + "(\\/)?$");
      if (location.href.match(regex)) a1.style.color = "#EAAC52";
    }
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
            営業時間：木・金・土 7:00~15:00(なくなり次第終了)<br />
            TEL：090-2866-3082<br />
          </div>
        </div>
      </div>
    </div>
    <div class="sp footer fcc z100 bgF9E8ED">
      <img src="${footerSpImg}" class="w430 mt-30" alt="" />
      <div class="v fxc abs bot62">
        <iframe class="w382 h227" src="${mapurl}" loading="lazy"></iframe>
        <img src="img/logo1.webp" class="w231 mt23" alt="logo" />
        <div class="f14 mt26 lh200">
          〒753-0815<br />
          山口県山口市維新公園1丁目3-11<br />
          営業時間：木・金・土 7:00~15:00(なくなり次第終了)<br />
          TEL：090-2866-3082<br />
        </div>
      </div>
    </div>
  `;
}
setFooter();
