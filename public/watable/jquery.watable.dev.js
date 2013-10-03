/*
 WATable 1.06
 Copyright (c) 2012 Andreas Petersson, http://wootapa-watable.appspot.com/

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
 (function (e, t) {
     var n = function () {
         var n = {};
         var r = {};
         n.options = {};
         var i = {
             url: "",
             urlData: "",
             urlPost: false,
             debug: false,
             filter: false,
             columnPicker: false,
             pageSize: 10,
             pageSizes: [10, 20, 30, 40, 50, "All"],
             actions: "",
             hidePagerOnEmpty: false,
             preFill: false,
             types: {
                 string: {},
                 number: {},
                 bool: {},
                 date: {}
             }
         };
         n.ext = {};
         n.ext.XDate = function (e, t, n, r) {
             function i() {
                 var t = this instanceof i ? this : new i,
                     n = arguments,
                     r = n.length,
                     u;
                 typeof n[r - 1] == "boolean" && (u = n[--r], n = T(n, 0, r));
                 if (r) if (r == 1) if (r = n[0], r instanceof e || typeof r == "number") t[0] = new e(+r);
                         else if (r instanceof i) {
                     var n = t,
                         a = new e(+r[0]);
                     if (s(r)) a.toString = _;
                     n[0] = a
                 } else {
                     if (typeof r == "string") {
                         t[0] = new e(0);
                         e: {
                             for (var n = r, r = u || !1, a = i.parsers, f = 0, l; f < a.length; f++) if (l = a[f](n, r, t)) {
                                     t = l;
                                     break e
                                 }
                             t[0] = new e(n)
                         }
                     }
                 } else t[0] = new e(M.apply(e, n)), u || (t[0] = w(t[0]));
                 else t[0] = new e;
                 typeof u == "boolean" && o(t, u);
                 return t
             }
             function s(e) {
                 return e[0].toString === _
             }
             function o(t, n, r) {
                 if (n) {
                     if (!s(t)) r && (t[0] = new e(M(t[0].getFullYear(), t[0].getMonth(), t[0].getDate(), t[0].getHours(), t[0].getMinutes(), t[0].getSeconds(), t[0].getMilliseconds()))), t[0].toString = _
                 } else s(t) && (t[0] = r ? w(t[0]) : new e(+t[0]));
                 return t
             }
             function u(e, t, n, r, i) {
                 var s = x(y, e[0], i),
                     e = x(b, e[0], i),
                     i = t == 1 ? n % 12 : s(1),
                     o = !1;
                 r.length == 2 && typeof r[1] == "boolean" && (o = r[1], r = [n]);
                 e(t, r);
                 o && s(1) != i && (e(1, [s(1) - 1]), e(2, [E(s(0), s(1))]))
             }
             function a(e, n, r, i) {
                 var r = Number(r),
                     s = t.floor(r);
                 e["set" + k[n]](e["get" + k[n]]() + s, i || !1);
                 s != r && n < 6 && a(e, n + 1, (r - s) * A[n], i)
             }
             function f(e, n, r) {
                 var e = e.clone().setUTCMode(!0, !0),
                     n = i(n).setUTCMode(!0, !0),
                     s = 0;
                 if (r == 0 || r == 1) {
                     for (var o = 6; o >= r; o--) s /= A[o], s += y(n, !1, o) - y(e, !1, o);
                     r == 1 && (s += (n.getFullYear() - e.getFullYear()) * 12)
                 } else r == 2 ? (r = e.toDate().setUTCHours(0, 0, 0, 0), s = n.toDate().setUTCHours(0, 0, 0, 0), s = t.round((s - r) / 864e5) + (n - s - (e - r)) / 864e5) : s = (n - e) / [36e5, 6e4, 1e3, 1][r - 3];
                 return s
             }
             function l(n) {
                 var r = n(0),
                     i = n(1),
                     n = n(2),
                     i = new e(M(r, i, n)),
                     s = c(r),
                     n = s;
                 i < s ? n = c(r - 1) : (r = c(r + 1), i >= r && (n = r));
                 return t.floor(t.round((i - n) / 864e5) / 7) + 1
             }
             function c(t) {
                 t = new e(M(t, 0, 4));
                 t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 6) % 7);
                 return t
             }
             function h(e, t, n, i) {
                 var s = x(y, e, i),
                     o = x(b, e, i),
                     n = c(n === r ? s(0) : n);
                 i || (n = w(n));
                 e.setTime(+n);
                 o(2, [s(2) + (t - 1) * 7])
             }
             function p(e, t, n, r, s) {
                 var o = i.locales,
                     u = o[i.defaultLocale] || {}, a = x(y, e, s),
                     n = (typeof n == "string" ? o[n] : n) || {};
                 return d(e, t, function (e) {
                     if (r) for (var t = (e == 7 ? 2 : e) - 1; t >= 0; t--) r.push(a(t));
                     return a(e)
                 }, function (e) {
                     return n[e] || u[e]
                 }, s)
             }
             function d(e, t, n, i, s) {
                 for (var o, u, a = ""; o = t.match(O);) {
                     a += t.substr(0, o.index);
                     if (o[1]) {
                         u = a;
                         for (var a = e, f = o[1], l = n, c = i, h = s, p = f.length, m = void 0, g = ""; p > 0;) m = v(a, f.substr(0, p), l, c, h), m !== r ? (g += m, f = f.substr(p), p = f.length) : p--;
                         a = u + (g + f)
                     } else o[3] ? (u = d(e, o[4], n, i, s), parseInt(u.replace(/\D/g, ""), 10) && (a += u)) : a += o[7] || "'";
                     t = t.substr(o.index + o[0].length)
                 }
                 return a + t
             }
             function v(e, n, r, s, o) {
                 var u = i.formatters[n];
                 if (typeof u == "string") return d(e, u, r, s, o);
                 else if (typeof u == "function") return u(e, o || !1, s);
                 switch (n) {
                     case "fff":
                         return C(r(6), 3);
                     case "s":
                         return r(5);
                     case "ss":
                         return C(r(5));
                     case "m":
                         return r(4);
                     case "mm":
                         return C(r(4));
                     case "h":
                         return r(3) % 12 || 12;
                     case "hh":
                         return C(r(3) % 12 || 12);
                     case "H":
                         return r(3);
                     case "HH":
                         return C(r(3));
                     case "d":
                         return r(2);
                     case "dd":
                         return C(r(2));
                     case "ddd":
                         return s("dayNamesShort")[r(7)] || "";
                     case "dddd":
                         return s("dayNames")[r(7)] || "";
                     case "M":
                         return r(1) + 1;
                     case "MM":
                         return C(r(1) + 1);
                     case "MMM":
                         return s("monthNamesShort")[r(1)] || "";
                     case "MMMM":
                         return s("monthNames")[r(1)] || "";
                     case "yy":
                         return (r(0) + "").substring(2);
                     case "yyyy":
                         return r(0);
                     case "t":
                         return m(r, s).substr(0, 1).toLowerCase();
                     case "tt":
                         return m(r, s).toLowerCase();
                     case "T":
                         return m(r, s).substr(0, 1);
                     case "TT":
                         return m(r, s);
                     case "z":
                     case "zz":
                     case "zzz":
                         return o ? n = "Z" : (s = e.getTimezoneOffset(), e = s < 0 ? "+" : "-", r = t.floor(t.abs(s) / 60), s = t.abs(s) % 60, o = r, n == "zz" ? o = C(r) : n == "zzz" && (o = C(r) + ":" + C(s)), n = e + o), n;
                     case "w":
                         return l(r);
                     case "ww":
                         return C(l(r));
                     case "S":
                         return n = r(2), n > 10 && n < 20 ? "th" : ["st", "nd", "rd"][n % 10 - 1] || "th"
                 }
             }
             function m(e, t) {
                 return e(3) < 12 ? t("amDesignator") : t("pmDesignator")
             }
             function g(e) {
                 return !isNaN(+e[0])
             }
             function y(e, t, n) {
                 return e["get" + (t ? "UTC" : "") + k[n]]()
             }
             function b(e, t, n, r) {
                 e["set" + (t ? "UTC" : "") + k[n]].apply(e, r)
             }
             function w(t) {
                 return new e(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds())
             }
             function E(t, n) {
                 return 32 - (new e(M(t, n, 32))).getUTCDate()
             }
             function S(e) {
                 return function () {
                     return e.apply(r, [this].concat(T(arguments)))
                 }
             }
             function x(e) {
                 var t = T(arguments, 1);
                 return function () {
                     return e.apply(r, t.concat(T(arguments)))
                 }
             }
             function T(e, t, i) {
                 return n.prototype.slice.call(e, t || 0, i === r ? e.length : i)
             }
             function N(e, t) {
                 for (var n = 0; n < e.length; n++) t(e[n], n)
             }
             function C(e, t) {
                 t = t || 2;
                 for (e += ""; e.length < t;) e = "0" + e;
                 return e
             }
             var k = "FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds,Day,Year".split(","),
                 L = ["Years", "Months", "Days"],
                 A = [12, 31, 24, 60, 60, 1e3, 1],
                 O = /(([a-zA-Z])\2*)|(\((('.*?'|\(.*?\)|.)*?)\))|('(.*?)')/,
                 M = e.UTC,
                 _ = e.prototype.toUTCString,
                 D = i.prototype;
             D.length = 1;
             D.splice = n.prototype.splice;
             D.getUTCMode = S(s);
             D.setUTCMode = S(o);
             D.getTimezoneOffset = function () {
                 return s(this) ? 0 : this[0].getTimezoneOffset()
             };
             N(k, function (e, t) {
                 D["get" + e] = function () {
                     return y(this[0], s(this), t)
                 };
                 t != 8 && (D["getUTC" + e] = function () {
                     return y(this[0], !0, t)
                 });
                 t != 7 && (D["set" + e] = function (e) {
                     u(this, t, e, arguments, s(this));
                     return this
                 }, t != 8 && (D["setUTC" + e] = function (e) {
                     u(this, t, e, arguments, !0);
                     return this
                 }, D["add" + (L[t] || e)] = function (e, n) {
                     a(this, t, e, n);
                     return this
                 }, D["diff" + (L[t] || e)] = function (e) {
                     return f(this, e, t)
                 }))
             });
             D.getWeek = function () {
                 return l(x(y, this, !1))
             };
             D.getUTCWeek = function () {
                 return l(x(y, this, !0))
             };
             D.setWeek = function (e, t) {
                 h(this, e, t, !1);
                 return this
             };
             D.setUTCWeek = function (e, t) {
                 h(this, e, t, !0);
                 return this
             };
             D.addWeeks = function (e) {
                 return this.addDays(Number(e) * 7)
             };
             D.diffWeeks = function (e) {
                 return f(this, e, 2) / 7
             };
             i.parsers = [function (t, n, r) {
                     if (t = t.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/)) {
                         var i = new e(M(t[1], t[3] ? t[3] - 1 : 0, t[5] || 1, t[7] || 0, t[8] || 0, t[10] || 0, t[12] ? Number("0." + t[12]) * 1e3 : 0));
                         t[13] ? t[14] && i.setUTCMinutes(i.getUTCMinutes() + (t[15] == "-" ? 1 : -1) * (Number(t[16]) * 60 + (t[18] ? Number(t[18]) : 0))) : n || (i = w(i));
                         return r.setTime(+i)
                     }
                 }
             ];
             i.parse = function (e) {
                 return +i("" + e)
             };
             D.toString = function (e, t, n) {
                 return e === r || !g(this) ? this[0].toString() : p(this, e, t, n, s(this))
             };
             D.toUTCString = D.toGMTString = function (e, t, n) {
                 return e === r || !g(this) ? this[0].toUTCString() : p(this, e, t, n, !0)
             };
             D.toISOString = function () {
                 return this.toUTCString("yyyy-MM-dd'T'HH:mm:ss(.fff)zzz")
             };
             i.defaultLocale = "";
             i.locales = {
                 "": {
                     monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                     monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                     dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                     dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                     amDesignator: "AM",
                     pmDesignator: "PM"
                 }
             };
             i.formatters = {
                 i: "yyyy-MM-dd'T'HH:mm:ss(.fff)",
                 u: "yyyy-MM-dd'T'HH:mm:ss(.fff)zzz"
             };
             N("getTime,valueOf,toDateString,toTimeString,toLocaleString,toLocaleDateString,toLocaleTimeString,toJSON".split(","), function (e) {
                 D[e] = function () {
                     return this[0][e]()
                 }
             });
             D.setTime = function (e) {
                 this[0].setTime(e);
                 return this
             };
             D.valid = S(g);
             D.clone = function () {
                 return new i(this)
             };
             D.clearTime = function () {
                 return this.setHours(0, 0, 0, 0)
             };
             D.toDate = function () {
                 return new e(+this[0])
             };
             i.now = function () {
                 return +(new e)
             };
             i.today = function () {
                 return (new i).clearTime()
             };
             i.UTC = M;
             i.getDaysInMonth = E;
             if (typeof module !== "undefined" && module.exports) module.exports = i;
             return i
         }(Date, Math, Array);
         var s = null;
         var o = null;
         var u = null;
         var a = null;
         var f = null;
         var l = null;
         var c = null;
         var h = null;
         var p = 1;
         var d = null;
         var v = null;
         var m = null;
         var g = false;
         var y = null;
         var b = {};
         var w = null;
         var E = null;
         var S = {};
         var x = false;
         n.init = function () {
             s = n.options.id;
             if (String(n.options.pageSize).toLowerCase() == "auto") {
                 n.options[option] = -1;
                 d = n.options.pageSize;
                 e(window).on("resize", n.windowResized)
             }
             n.options.types.string = (n.options.types || {}).string || {};
             n.options.types.number = (n.options.types || {}).number || {};
             n.options.types.bool = (n.options.types || {}).bool || {};
             n.options.types.date = (n.options.types || {}).date || {};
             if (n.options.preFill) {
                 var t = {
                     cols: {
                         dummy: {
                             index: 1,
                             friendly: " ",
                             type: "none"
                         }
                     },
                     rows: []
                 };
                 for (var r = 0; r < n.options.pageSize; r++) t.rows.push({
                         dummy: " "
                     });
                 n.setData(t)
             }
             n.update()
         };
         n.createTable = function () {
             var r = new n.ext.XDate;
             if (o == null) {
                 u = l = c = null;
                 o = e('<table class="watable table table-striped table-hover table-bordered table-condensed"></table>').appendTo(s)
             }
             if (u == null) {
                 o.find("thead").remove();
                 a = f = null;
                 u = e("<thead></thead>").prependTo(o)
             }
             var i = Object.keys(h.cols).sort(function (e, t) {
                 return h.cols[e].index - h.cols[t].index
             });
             if (a == null) {
                 u.find(".sort i").tooltip("hide");
                 u.find(".sort").remove();
                 a = e('<tr class="sort"></tr>').prependTo(u);
                 if (E && !h.cols[E].hidden) {
                     var y = x ? "checked" : "";
                     var w = e("<th></th>").appendTo(a);
                     var T = e('<input {0} class="checkToggle" type="checkbox" />'.f(y)).appendTo(w);
                     T.on("change", n.checkToggleChanged)
                 }
                 for (var N = 0; N < i.length; N++) {
                     var C = i[N];
                     var k = h.cols[C];
                     if (!k.hidden) {
                         var w = e("<th></th>").appendTo(a);
                         var L = e('<a class="pull-left" href="#">{0}</a>'.f(k.friendly || C));
                         L.on("click", {
                             column: C
                         }, n.columnClicked).appendTo(w);
                         if (k.tooltip) e('<i class="icon-info-sign"></i>').tooltip({
                                 title: k.tooltip,
                                 html: true,
                                 container: "body",
                                 placement: "top",
                                 delay: {
                                     show: 500,
                                     hide: 100
                                 }
                             }).appendTo(L);
                         if (C == m) {
                             if (g) e('<i class="icon-chevron-down pull-right"></i>').appendTo(w);
                             else e('<i class="icon-chevron-up pull-right"></i>').appendTo(w)
                         }
                     }
                 }
             }
             if (f == null && n.options.filter) {
                 u.find(".filter").remove();
                 f = e('<tr class="filter"></tr>').appendTo(u);
                 var w;
                 var T;
                 var A = "";
                 var O = "";
                 if (E && !h.cols[E].hidden) {
                     O = n.options.types.bool.tooltip || "Toggle between:<br/>indeterminate,<br/>checked,<br/>unchecked";
                     var w = e("<th></th>").appendTo(f);
                     var T = e('<input class="filter indeterminate" checked type="checkbox" />').appendTo(w);
                     e.map(b, function (e, t) {
                         if (t == "unique") {
                             if (e.filter) T.prop("checked", true).removeClass("indeterminate");
                             else if (!e.filter) T.prop("checked", false).removeClass("indeterminate");
                             else if (e.filter == "") T.addClass("indeterminate")
                         }
                     });
                     O = O.trim();
                     if (O) T.tooltip({
                             title: O,
                             html: true,
                             container: "body",
                             trigger: "hover",
                             placement: "top",
                             delay: {
                                 show: 500,
                                 hide: 100
                             }
                         });
                     T.on("click", {
                         column: "unique"
                     }, n.filterChanged)
                 }
                 for (var N = 0; N < i.length; N++) {
                     var C = i[N];
                     var k = h.cols[C];
                     k.filter = k.filter === false ? false : true;
                     if (!k.hidden) {
                         w = e("<th></th>").appendTo(f);
                         switch (k.type || "none") {
                             case "number":
                                 A = n.options.types.number.placeHolder || "10..20 =50";
                                 O = n.options.types.number.tooltip || "Values 10 to 20:<br/>10..20<br/>Values exactly 50:<br/>=50";
                                 T = e('<input placeholder="{0}" class="filter" type="text" />'.f(A));
                                 T.on("keyup", {
                                     column: C
                                 }, n.filterChanged);
                                 break;
                             case "date":
                                 A = n.options.types.date.placeHolder || "-7..0";
                                 O = n.options.types.date.tooltip || "Today:<br/>0..1<br/>A week today excluded:<br/>-7..0";
                                 T = e('<div><input placeholder="{0}" class="filter" type="text" /></div>'.f(A));
                                 if (n.options.types.date.datePicker === true || n.options.types.date.datePicker == t) {
                                     if (e().datepicker) {
                                         T.addClass("date-wrap");
                                         var M = (new n.ext.XDate(false)).setHours(0, 0, 0, 0).toString("yyyy-MM-dd");
                                         var _ = e('<div style="float:right" class="date" data-date="{0}" data-date-format="{1}" />'.f(M, "yyyy-mm-dd")).appendTo(T);
                                         e('<input style="display:none" type="text"  />').appendTo(_);
                                         e('<span class="add-on"><i class="icon-chevron-right"></i></span>').on("click", {
                                             op: "l"
                                         }, n.dpOpChanged).appendTo(_);
                                         e('<span class="add-on"><i class="icon-chevron-left"></i></span>').on("click", {
                                             op: "r"
                                         }, n.dpOpChanged).appendTo(_);
                                         _.datepicker({
                                             weekStart: 1
                                         });
                                         _.on("changeDate", {
                                             column: C,
                                             input: e("input.filter", T)
                                         }, n.dpClicked)
                                     } else if (n.options.debug) console.log("datepicker plugin not found")
                                 }
                                 T.on("keyup", "input.filter", {
                                     column: C
                                 }, n.filterChanged);
                                 break;
                             case "bool":
                                 O = n.options.types.bool.tooltip || "Toggle between:<br/>indeterminate,<br/>checked,<br/>unchecked";
                                 T = e('<input class="filter indeterminate" checked type="checkbox" />');
                                 T.on("click", {
                                     column: C
                                 }, n.filterChanged);
                                 break;
                             case "string":
                                 A = n.options.types.string.placeHolder || "John Doe";
                                 O = n.options.types.string.tooltip || "Find John Doe:<br/>John Doe<br/>Find all but John Doe:<br/>!John Doe";
                                 T = e('<input placeholder="{0}" class="filter" type="text" />'.f(A));
                                 T.on("keyup", {
                                     column: C
                                 }, n.filterChanged);
                                 break;
                             case "none":
                                 T = e("<div> </div>");
                                 break
                         }
                         O = O.trim();
                         if (O) T.tooltip({
                                 title: O,
                                 html: true,
                                 container: "body",
                                 trigger: "hover",
                                 placement: "top",
                                 delay: {
                                     show: 500,
                                     hide: 100
                                 }
                             });
                         if (T && k.filter) {
                             e.map(b, function (e, t) {
                                 if (t == C) {
                                     if (e.col.type == "bool") {
                                         if (e.filter) T.prop("checked", true).removeClass("indeterminate");
                                         else if (!e.filter) T.prop("checked", false).removeClass("indeterminate");
                                         else if (e.filter == "") T.addClass("indeterminate")
                                     } else T.val(e.filter)
                                 }
                             });
                             T.appendTo(w)
                         }
                     }
                 }
             }
             if (l == null) {
                 o.find("tbody").remove();
                 l = e("<tbody></tbody>").insertAfter(u);
                 l.on("change", ".unique", n.rowChecked);
                 l.on("click", "td", n.rowClicked);
                 if (n.options.pageSize == -1) h.toRow = h.rows.length;
                 else {
                     h.toRow = h.fromRow + n.options.pageSize;
                     if (h.toRow > h.rows.length) h.toRow = h.rows.length
                 }
                 var D = 0;
                 e.each(h.rows.slice(h.fromRow, h.toRow), function (r, u) {
                     var a = e("<tr></tr>").appendTo(l);
                     if (E && !h.cols[E].hidden) {
                         var f = S[u[E]] != t ? "checked" : "";
                         var c = u["checkable"] === false ? "disabled" : "";
                         var p = e("<td></td>").appendTo(a);
                         var d = e('<input class="unique" {0} {1} type="checkbox" />'.f(f, c)).appendTo(p)
                     }
                     for (var v = 0; v < i.length; v++) {
                         var m = i[v];
                         var g = u[m] || "";
                         if (!h.cols[m]) return;
                         if (h.cols[m].unique) a.data("unique", g);
                         if (!h.cols[m].hidden) {
                             var p = e("<td></td>").appendTo(a);
                             p.data("column", m);
                             var y = u[m + "Format"] || h.cols[m].format || "{0}";
                             switch (h.cols[m].type) {
                                 case "string":
                                 case "none":
                                     p.html(y.f(g));
                                     break;
                                 case "number":
                                     g = Number(g) || 0;
                                     var b = !isNaN(h.cols[m].decimals);
                                     if (b) p.html(y.f(g.toFixed(h.cols[m].decimals)));
                                     else {
                                         (g || 0) % 1 === 0 ? p.html(y.f(g)) : p.html(y.f(g.toFixed(n.options.types.number.decimals || 2)))
                                     }
                                     break;
                                 case "date":
                                     g = (new n.ext.XDate(g, n.options.types.date.utc === true)).toString(n.options.types.date.format || "yyyy-MM-dd HH:mm:ss");
                                     p.html(y.f(g));
                                     break;
                                 case "bool":
                                     e('<input type="checkbox" {0} disabled />'.f(g ? "checked" : "")).appendTo(p);
                                     break
                             }
                         }
                     }
                     D++;
                     if (n.options.pageSize == -1) {
                         if (!n.elementInViewport(s)) {
                             var w = o.find("tfoot").length;
                             if (!w && a.prev()) {
                                 a.prev().remove();
                                 D--
                             }
                             if (!w && a.prev()) {
                                 a.prev().remove();
                                 D--
                             }
                             if (!w && a.prev()) {
                                 a.prev().remove();
                                 D--
                             }
                             a.remove();
                             D--;
                             h.toRow = h.fromRow + D;
                             return false
                         }
                     } else {
                         if (D >= n.options.pageSize) {
                             h.toRow = h.fromRow + D;
                             return false
                         }
                     }
                 });
                 if (p == 1) {
                     d = D;
                     v = Math.round(Math.ceil(h.rows.length / d))
                 }
                 if (p == v) {
                     while (D < d) {
                         var P = e("<tr></tr>").appendTo(l);
                         if (E && !h.cols[E].hidden) {
                             var H = e("<td></td>").appendTo(P);
                             var T = e('<input disabled type="checkbox" />').appendTo(H)
                         }
                         e.each(h.cols, function (t, n) {
                             if (!n.hidden) {
                                 e("<td> </td>").appendTo(P)
                             }
                         });
                         D++
                     }
                 }
             }
             if (c == null) {
                 o.find("tfoot").remove();
                 c = e("<tfoot></tfoot>").insertAfter(l);
                 var B = e("<tr></tr>").appendTo(c);
                 var j = e('<td colspan="999"></td>').appendTo(B);
                 if (h.rows.length > 0) e("<p>Rows {0}-{1} of {2}</p>".f(h.fromRow + 1, Math.min(h.toRow, h.rows.length), h.rows.length)).appendTo(j);
                 else {
                     e("<p>No results</p>").appendTo(j);
                     v = 0
                 }
                 var F = p - 2;
                 var I = p + 2;
                 if (I > v) {
                     var q = I - v;
                     I = v;
                     F -= q
                 }
                 if (F < 1) F = 1;
                 if (I < 5) I = 5;
                 var R = e('<div class="btn-toolbar"></div>').appendTo(j);
                 var U = e('<div class="btn-group"></div>').appendTo(R);
                 var z = e('<div class="pagination"></div>').appendTo(U);
                 var W = e("<ul></ul>").appendTo(z);
                 e('<li class="{0}"><a href="#">«</a></li>'.f(p == 1 ? "disabled" : "")).on("click", {
                     pageIndex: p - 1
                 }, n.pageChanged).appendTo(W);
                 for (var N = F; N <= I; N++) {
                     var L = null;
                     if (N != p) L = e('<li class="{1}"><a href="#">{0}</a></li>'.f(N, N > v ? "disabled" : ""));
                     if (N == p) L = e('<li class="active"><a href="#">{0}</a></li>'.f(N));
                     if (L != null) {
                         L.on("click", {
                             pageIndex: N
                         }, n.pageChanged);
                         L.appendTo(W)
                     }
                 }
                 e('<li class="{0}"><a href="#">»</a></li>'.f(p == v ? "disabled" : "")).on("click", {
                     pageIndex: p + 1
                 }, n.pageChanged).appendTo(W);
                 if (n.options.pageSizes.length) {
                     var X = e('<div class="btn-group dropup pagesize"></div>').appendTo(R);
                     var V = e('<button class="btn dropdown-toggle" data-toggle="dropdown" href="#">Rows </button>').appendTo(X);
                     var J = e('<span class="caret"></span>').appendTo(V);
                     var K = e('<ul class="dropdown-menu">').appendTo(X);
                     e.each(n.options.pageSizes, function (t, n) {
                         var r = e("<li></li>").appendTo(K);
                         e('<a href="#">{0}</a>'.f(n)).appendTo(r)
                     });
                     X.on("click", "a", n.pageSizeChanged)
                 }
                 if (n.options.columnPicker) {
                     var X = e('<div class="btn-group dropup columnpicker"></div>').appendTo(R);
                     var V = e('<button class="btn dropdown-toggle" data-toggle="dropdown" href="#">Columns </button>').appendTo(X);
                     var J = e('<span class="caret"></span>').appendTo(V);
                     var K = e('<ul class="dropdown-menu">').appendTo(X);
                     e.each(h.cols, function (t, n) {
                         if (n.type != "unique") {
                             var r = e("<li></li>").appendTo(K);
                             e('<input {0} type="checkbox" title="{1}" value="{1}" > {2}</input>'.f(n.hidden ? "" : "checked", t, n.friendly || t)).appendTo(r)
                         }
                     });
                     X.on("click", "input", n.columnPickerClicked)
                 }
                 if (n.options.actions) {
                     var X = e('<div class="btn-group dropup actions"></div>').appendTo(R);
                     var V = e('<button class="btn dropdown-toggle" data-toggle="dropdown" href="#"><i class="icon-list"></i> </button>').appendTo(X);
                     var J = e('<span class="caret"></span>').appendTo(V);
                     var K = e('<ul class="dropdown-menu">').appendTo(X);
                     if (n.options.actions.filter) {
                         var Q = e("<li></li>").appendTo(K);
                         e('<input {0} type="checkbox" > Filter</input>'.f(n.options.filter ? "checked" : "")).appendTo(Q);
                         Q.on("click", "input", function (e) {
                             n.options.filter = !n.options.filter;
                             u = null;
                             n.createTable()
                         })
                     }
                     if (n.options.actions.columnPicker) {
                         var Q = e("<li></li>").appendTo(K);
                         e('<input {0} type="checkbox" > ColumnPicker</input>'.f(n.options.columnPicker ? "checked" : "")).appendTo(Q);
                         Q.on("click", "input", function (e) {
                             n.options.columnPicker = !n.options.columnPicker;
                             c = null;
                             n.createTable()
                         })
                     }
                     if (n.options.actions.custom) {
                         e.each(n.options.actions.custom, function (t, n) {
                             var r = e("<li></li>").appendTo(K);
                             e(n).appendTo(r)
                         })
                     }
                 }
             }
             if (h.rows.length == 0 && n.options.hidePagerOnEmpty) e(".btn-toolbar", c).remove();
             if (n.options.debug) console.log("table created in {0} ms.".f(new n.ext.XDate - r));
             if (typeof n.options.tableCreated == "function") n.options.tableCreated.call(o.get(0), {
                     table: o.get(0)
                 })
         };
         n.update = function (t, r, i) {
             if (!n.options.url) {
                 console.log("no url found");
                 return
             }
             if (n.options.debug) console.log("requesting data from url:{0} data:{1}".f(n.options.url, JSON.stringify(n.options.urlData) || ""));
             var s = new n.ext.XDate;
             e.ajax({
                 url: n.options.url,
                 type: n.options.urlPost ? "POST" : "GET",
                 dataType: "json",
                 contentType: "application/json; charset=utf-8",
                 data: n.options.urlData,
                 async: true,
                 success: function (e) {
                     if (n.options.debug) console.log("request finished in {0} ms.".f(new n.ext.XDate - s));
                     if (e.d && e.d.cols) n.setData(e.d, r, i);
                     else n.setData(e, r, i); if (typeof t == "function") t.call(this)
                 },
                 error: function (e) {
                     console.log("request error: ".f(e))
                 }
             })
         };
         n.setData = function (r, i, s) {
             var o = e.extend(true, {}, r);
             o.fromRow = h && h.fromRow || 0;
             o.toRow = h && h.toRow || 0;
             if (i || false) o.cols = h.cols;
             h = o;
             h.rowsOrg = h.rows;
             if (p > 1) {
                 h.toRow = Math.min(h.rows.length, h.toRow);
                 h.fromRow = h.toRow - d;
                 h.fromRow = Math.max(h.fromRow, 0);
                 p = Math.ceil(h.fromRow / d) + 1;
                 v = Math.ceil(h.rows.length / d)
             } else {
                 h.fromRow = 0;
                 if (n.options.pageSize != -1) h.toRow = h.fromRow + n.options.pageSize;
                 h.toRow = Math.max(h.toRow, h.rows.length)
             }
             e.each(h.cols, function (e, t) {
                 if (!m && t.sortOrder) {
                     m = e;
                     g = t.sortOrder != "asc"
                 }
                 if (!t.type) h.cols[e].type = "none";
                 if (t.unique) E = e;
                 if (!t.index) h.cols[e].index = new n.ext.XDate;
                 t.column = e
             });
             if (E) {
                 h.cols["unique"] = {
                     column: "unique",
                     type: "unique",
                     index: -1,
                     hidden: true
                 }
             }
             if (s === true || s === t) S = [];
             else {
                 for (var a in S) S[a] = n.getRow(a)
             } if (E) {
                 e.each(h.rows, function (e, t) {
                     if (t.checked === true) S[t[E]] = t
                 })
             }
             u = null;
             l = null;
             c = null;
             n.filter();
             n.sort();
             n.createTable()
         };
         n.filter = function () {
             if (!n.options.filter) return;
             if (Object.keys(b).length == 0) return;
             else h.rows = e.extend(true, {}, h.rowsOrg);
             var t = new n.ext.XDate;
             e.each(b, function (t, r) {
                 if (n.options.debug) console.log("filtering on text:{0} col:{1} type:{2} ".f(r.filter, r.col.column, r.col.type));
                 switch (r.col.type) {
                     case "string":
                         h.rows = e.map(h.rows, function (e) {
                             var n = String(e[t]);
                             var i = r.filter.toLowerCase();
                             var s = i.charAt(0) == "!";
                             if (s) i = i.substring(1);
                             var o = n.toLowerCase().indexOf(i);
                             if (o == -1 && s) return e;
                             else if (o >= 0 && !s) {
                                 if (!e[t + "Format"] && !r.col.format) {
                                     var u = n.substring(0, o);
                                     var a = n.substring(o, o + r.filter.length);
                                     var f = n.substring(o + r.filter.length, e[t].length);
                                     e[t + "Format"] = '<span>{0}<span class="filter">{1}</span>{2}</span>'.f(u, a, f)
                                 }
                                 return e
                             }
                         });
                         break;
                     case "number":
                     case "date":
                         h.rows = e.map(h.rows, function (i) {
                             var s = r.filter.replace(/\s+/gi, " ").split(" ");
                             s = s.filter(function (e) {
                                 return e
                             });
                             var o = [">=", "<=", "..", ">", "<", "="];
                             var u = 0;
                             var a = true;
                             e.each(s, function (e, s) {
                                 for (var f = 0; f < o.length; f++) {
                                     var l = o[f];
                                     var c = s.indexOf(l);
                                     var h = s.substring(0, c);
                                     var p = s.substring(c + l.length);
                                     if (c == -1) continue;
                                     a = h.length + p.length == 0;
                                     h = parseFloat(h);
                                     p = parseFloat(p);
                                     if (isNaN(h)) h = Number.NEGATIVE_INFINITY;
                                     if (isNaN(p)) p = Number.MAX_VALUE;
                                     if (r.col.type == "date") {
                                         var d = (new n.ext.XDate(n.options.types.date.utc === true)).setHours(0, 0, 0, 0);
                                         h = d - h * -1 * 60 * 60 * 24 * 1e3;
                                         p = d - p * -1 * 60 * 60 * 24 * 1e3
                                     }
                                     switch (l) {
                                         case ">":
                                             if (i[t] > p) u++;
                                             break;
                                         case ">=":
                                             if (i[t] >= p) u++;
                                             break;
                                         case "<":
                                             if (i[t] < p) u++;
                                             break;
                                         case "<=":
                                             if (i[t] <= p) u++;
                                             break;
                                         case "=":
                                             if (i[t] == p) u++;
                                             break;
                                         case "..":
                                             if (r.col.type == "date") {
                                                 if (i[t] >= h && i[t] < p) u++
                                             } else {
                                                 if (i[t] >= h && i[t] <= p) u++
                                             }
                                             break;
                                         default:
                                             a = true
                                     }
                                     break
                                 }
                             });
                             if (s.length == 1 && a || u > 0 && a || u == s.length || r.filter == "") return i
                         });
                         break;
                     case "bool":
                         h.rows = e.map(h.rows, function (e) {
                             if (r.filter === "") return e;
                             if (Boolean(e[t]) && r.filter || !Boolean(e[t]) && !r.filter) return e
                         });
                         break;
                     case "unique":
                         h.rows = e.map(h.rows, function (e) {
                             if (r.filter === "") return e;
                             var t = e[E];
                             var n = S[t] ? S[t][E] : "";
                             if (r.filter && t === n || !r.filter && n === "") return e
                         });
                         break
                 }
                 if (r.filter === "") delete b[r.col.column]
             });
             if (n.options.debug) console.log("filtering finished in {0} ms.".f(new n.ext.XDate - t));
             p = 1;
             h.fromRow = 0;
             l = null;
             c = null
         };
         n.sort = function () {
             if (!m) return;
             var e = new n.ext.XDate;
             if (n.options.debug) console.log("sorting on col:{0} order:{1}".f(m, g ? "desc" : "asc"));
             var t = h.cols[m].type == "string";
             h.rows = h.rows.sort(function (e, n) {
                 if (t) {
                     if (String(e[m]).toLowerCase() == String(n[m]).toLowerCase()) return 0;
                     if (String(e[m]).toLowerCase() > String(n[m]).toLowerCase()) return g ? -1 : 1;
                     else return g ? 1 : -1
                 } else {
                     if (e[m] == n[m]) return 0;
                     if (e[m] > n[m]) return g ? -1 : 1;
                     else return g ? 1 : -1
                 }
             });
             if (n.options.debug) console.log("sorting finished in {0} ms.".f(new n.ext.XDate - e))
         };
         n.elementInViewport = function (e) {
             var t = e.get(0).getBoundingClientRect();
             return t.top >= 0 && t.left >= 0 && t.bottom <= window.innerHeight && t.right <= window.innerWidth
         };
         n.getRow = function (t) {
             var r = new n.ext.XDate;
             var i;
             e.each(h.rowsOrg, function (e, n) {
                 if (n[E] == t) {
                     i = n;
                     return false
                 }
             });
             if (n.options.debug) console.log("row lookup finished in {0} ms.".f(new n.ext.XDate - r));
             return i
         };
         n.filterChanged = function (t) {
             if (w != null) {
                 clearTimeout(w);
                 if (n.options.debug) console.log("filtering cancelled")
             }
             var r = this.value;
             var i = h.cols[t.data.column];
             var s = 200;
             if (i.type == "bool" || i.type == "unique") {
                 s = 0;
                 var o = e(this);
                 var u = "indeterminate";
                 if (o.hasClass(u)) {
                     t.preventDefault();
                     o.removeClass(u);
                     r = true
                 } else {
                     if (!o.is(":checked")) {
                         r = false
                     } else {
                         o.addClass(u);
                         r = ""
                     }
                 }
             }
             b[i.column] = {
                 filter: r,
                 col: i
             };
             w = setTimeout(function () {
                 w = null;
                 n.filter();
                 n.sort();
                 n.createTable()
             }, s)
         };
         n.pageChanged = function (e) {
             e.preventDefault();
             if (e.data.pageIndex < 1 || e.data.pageIndex > v) return;
             p = e.data.pageIndex;
             if (n.options.debug) console.log("paging to index:{0}".f(p));
             h.fromRow = (p - 1) * d;
             h.toRow = h.fromRow + d;
             if (h.toRow > h.rows.length) h.toRow = h.rows.length;
             if (typeof n.options.pageChanged == "function") {
                 n.options.pageChanged.call(e.target, {
                     event: e,
                     page: p
                 })
             }
             l = null;
             c = null;
             n.createTable()
         };
         n.pageSizeChanged = function (t) {
             t.preventDefault();
             var r = e(this).text().toLowerCase();
             if (n.options.debug) console.log("pagesize changed to:{0}".f(r));
             e(window).off("resize", n.windowResized);
             if (r == "all") n.options.pageSize = h.rows.length;
             else if (r == "auto") {
                 n.options.pageSize = -1;
                 e(window).on("resize", n.windowResized)
             } else n.options.pageSize = parseInt(r);
             p = 1;
             h.fromRow = 0;
             h.toRow = h.fromRow + n.options.pageSize;
             if (h.toRow > h.rows.length) h.toRow = h.rows.length;
             if (typeof n.options.pageSizeChanged == "function") {
                 n.options.pageSizeChanged.call(t.target, {
                     event: t,
                     pageSize: n.options.pageSize
                 })
             }
             l = null;
             c = null;
             n.createTable()
         };
         n.columnClicked = function (e) {
             e.preventDefault();
             if (n.options.debug) console.log("col:{0} clicked".f(e.data.column));
             if (m == e.data.column) g = !g;
             m = e.data.column;
             if (typeof n.options.columnClicked == "function") {
                 n.options.columnClicked.call(e.target, {
                     event: e,
                     column: h.cols[m],
                     descending: g
                 })
             }
             a = null;
             l = null;
             n.sort();
             n.createTable()
         };
         n.columnPickerClicked = function (t) {
             t.stopPropagation();
             var r = e(this);
             var i = r.val();
             if (n.options.debug) console.log("col:{0} {1}".f(i, r.is(":checked") ? "checked" : "unchecked"));
             h.cols[i].hidden = !h.cols[i].hidden;
             h.cols[i].index = new n.ext.XDate;
             u = null;
             l = null;
             n.createTable()
         };
         n.checkToggleChanged = function (t) {
             t.preventDefault();
             var r = e(this);
             if (r.is(":checked")) {
                 var i = new n.ext.XDate;
                 e.each(h.rows, function (e, t) {
                     var n = h.rows[e];
                     if (n.checkable === false) return;
                     S[t[E]] = n
                 });
                 if (n.options.debug) console.log("{0} rows checked in {1} ms.".f(h.rows.length, new n.ext.XDate - i));
                 x = true
             } else {
                 var i = new n.ext.XDate;
                 for (var s in S) {
                     var o = S[s];
                     if (o.checkable === false) continue;
                     else delete S[s]
                 }
                 if (n.options.debug) console.log("{0} rows unchecked in {1} ms.".f(h.rows.length, new n.ext.XDate - i));
                 x = false
             }
             l = null;
             n.createTable()
         };
         n.rowChecked = function (t) {
             t.preventDefault();
             var r = e(this);
             var i = r.closest("tr").data("unique");
             if (n.options.debug) console.log("row({0}) {1}".f(i, r.is(":checked") ? "checked" : "unchecked"));
             if (r.is(":checked")) S[i] = n.getRow(i);
             else delete S[i]
         };
         n.rowClicked = function (t) {
             if (!E) {
                 if (n.options.debug) console.log("no unique column specified");
                 return
             }
             var r = e(this);
             var i = h.cols[r.data("column")];
             var s = r.closest("tr").data("unique");
             var o = n.getRow(s);
             var u = r.closest("tr").find(".unique").is(":checked");
             if (typeof n.options.rowClicked == "function") n.options.rowClicked.call(t.target, {
                     event: t,
                     row: o,
                     column: i,
                     checked: u
                 })
         };
         n.dpOpChanged = function (e) {
             if (n.options.debug) console.log("dp oper:{0} clicked".f(e.data.op));
             e.preventDefault();
             y = e.data.op
         };
         n.dpClicked = function (t) {
             if (n.options.debug) console.log("dp date:{0} clicked".f((new n.ext.XDate(t.date, n.options.types.date.utc === true)).toString("yyyy-MM-dd")));
             t.preventDefault();
             var r = (new n.ext.XDate(false)).setHours(0, 0, 0, 0);
             var i = Math.floor(t.date / (60 * 60 * 24 * 1e3)) - Math.floor(r / (60 * 60 * 24 * 1e3));
             var s = e(t.data.input);
             var o = "..";
             var u = s.val().indexOf(o);
             var a = s.val().substring(0, u);
             var f = s.val().substring(u + o.length);
             if (y == "l") a = i;
             if (y == "r") f = i;
             s.val("{0}{1}{2}".f(a, o, f));
             e(this).datepicker("hide");
             s.trigger("keyup")
         };
         n.windowResized = function (e) {
             if (n.options.debug) console.log("window resized");
             p = 1;
             h.fromRow = 0;
             l = null;
             c = null;
             n.createTable()
         };
         r.init = function (t) {
             if (n.options.debug) console.log("watable initialization...");
             e.extend(n.options, i, t);
             n.init();
             return r
         };
         r.update = function (e, t, i) {
             if (n.options.debug) console.log("publ.update called");
             n.update(e, t, i);
             return r
         };
         r.getData = function (t, r) {
             if (n.options.debug) console.log("publ.getData called");
             t = t || false;
             r = r || false;
             var i = e.extend(true, {}, h);
             delete i.cols["unique"];
             if (!r) {
                 delete i.rows;
                 i.rows = i.rowsOrg
             }
             delete i.rowsOrg;
             delete i.fromRow;
             delete i.toRow;
             if (t) {
                 delete i.rows;
                 i.rows = e.map(S, function (e, t) {
                     return e
                 })
             }
             return i
         };
         r.setData = function (e, t, i) {
             if (n.options.debug) console.log("publ.setData called");
             n.setData(e, t, i);
             return r
         };
         r.option = function (e, i) {
             if (n.options.debug) console.log("publ.option called");
             if (i == t) return n.options[e];
             n.options[e] = i;
             u = null;
             l = null;
             c = null;
             n.createTable();
             return r
         };
         return r
     };
     e.fn.WATable = function (t) {
         t = t || {};
         return this.each(function () {
             t.id = this;
             e(this).data("WATable", (new n).init(t))
         })
     };
     String.prototype.format = String.prototype.f = function () {
         var e = this,
             t = arguments.length;
         while (t--) e = e.replace(new RegExp("\\{" + t + "\\}", "gm"), arguments[t]);
         return e
     }
 })(jQuery);