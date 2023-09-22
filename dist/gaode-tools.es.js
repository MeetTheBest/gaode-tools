var Pe = Object.defineProperty;
var gt = Object.getOwnPropertySymbols;
var me = Object.prototype.hasOwnProperty, Me = Object.prototype.propertyIsEnumerable;
var N = (t, e, r) => e in t ? Pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, P = (t, e) => {
  for (var r in e || (e = {}))
    me.call(e, r) && N(t, r, e[r]);
  if (gt)
    for (var r of gt(e))
      Me.call(e, r) && N(t, r, e[r]);
  return t;
};
var s = (t, e, r) => (N(t, typeof e != "symbol" ? e + "" : e, r), r);
const ve = {
  "border-color": "#e1f5fe",
  "font-size": "12px",
  "border-radius": ".25rem",
  "background-color": "rgba(0,0,0,.4)",
  "border-width": 0,
  "text-align": "center",
  color: "#fff"
}, j = (t = "", e = {}) => new AMap.Text({ text: t, style: P(P({}, ve), e), offset: [0, -10] }), A = (t, e) => {
  const r = t.divideBy(2).add(e.divideBy(2));
  return { text: `${Math.round(t.distance(e))}米`, textPos: r };
};
let be = class {
  constructor(e) {
    s(this, "map");
    // 开始点位到鼠标位置的文本
    s(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    s(this, "lastPointToCursorText", null);
    // 起始点位
    s(this, "startPosition", null);
    // 上次点击点位
    s(this, "lastPosition", null);
    /**
     * 点图点击事件
     * @param {MapEvent} event
     */
    s(this, "getClickPosition", (e) => {
      const r = e.lnglat;
      this.startPosition ? this.startPosition && (this.lastPosition = r, this.createDistanceText()) : this.startPosition = r;
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    s(this, "onMouseMoveInDrawPolygon", (e) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const r = e.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        A(this.startPosition, r)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        A(this.lastPosition, r)
      );
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e;
  }
  /**
   * 注册地图事件
   */
  start() {
    this.map.on("click", this.getClickPosition), this.map.on("mousemove", this.onMouseMoveInDrawPolygon);
  }
  /**
   * 移除地图注册事件
   */
  stop() {
    this.map.off("click", this.getClickPosition), this.map.off("mousemove", this.onMouseMoveInDrawPolygon);
  }
  /**
   * 创建距离文本
   * @returns
   */
  createDistanceText() {
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = j(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText = j(), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(e, { text: r, textPos: n }) {
    e.setText(r), e.setPosition(n);
  }
  removeDistanceText() {
    var e, r;
    (e = this.startPointToCursorText) == null || e.remove(), this.startPointToCursorText = null, (r = this.lastPointToCursorText) == null || r.remove(), this.lastPointToCursorText = null;
  }
  reset() {
    return this.startPosition = null, this.lastPosition = null, this.removeDistanceText(), this;
  }
  destroy() {
    return this.reset(), this.stop(), this;
  }
};
var xe = typeof global == "object" && global && global.Object === Object && global;
const Rt = xe;
var Ee = typeof self == "object" && self && self.Object === Object && self, $e = Rt || Ee || Function("return this")();
const d = $e;
var we = d.Symbol;
const p = we;
var Gt = Object.prototype, _e = Gt.hasOwnProperty, Ce = Gt.toString, S = p ? p.toStringTag : void 0;
function je(t) {
  var e = _e.call(t, S), r = t[S];
  try {
    t[S] = void 0;
    var n = !0;
  } catch (i) {
  }
  var o = Ce.call(t);
  return n && (e ? t[S] = r : delete t[S]), o;
}
var Ae = Object.prototype, Oe = Ae.toString;
function Le(t) {
  return Oe.call(t);
}
var Se = "[object Null]", Ie = "[object Undefined]", ft = p ? p.toStringTag : void 0;
function x(t) {
  return t == null ? t === void 0 ? Ie : Se : ft && ft in Object(t) ? je(t) : Le(t);
}
function E(t) {
  return t != null && typeof t == "object";
}
var ke = "[object Symbol]";
function Z(t) {
  return typeof t == "symbol" || E(t) && x(t) == ke;
}
function zt(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = Array(n); ++r < n; )
    o[r] = e(t[r], r, t);
  return o;
}
var De = Array.isArray;
const $ = De;
var Fe = 1 / 0, pt = p ? p.prototype : void 0, dt = pt ? pt.toString : void 0;
function Nt(t) {
  if (typeof t == "string")
    return t;
  if ($(t))
    return zt(t, Nt) + "";
  if (Z(t))
    return dt ? dt.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Fe ? "-0" : e;
}
function F(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function Be(t) {
  return t;
}
var Ue = "[object AsyncFunction]", Re = "[object Function]", Ge = "[object GeneratorFunction]", ze = "[object Proxy]";
function Kt(t) {
  if (!F(t))
    return !1;
  var e = x(t);
  return e == Re || e == Ge || e == Ue || e == ze;
}
var Ne = d["__core-js_shared__"];
const K = Ne;
var yt = function() {
  var t = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ke(t) {
  return !!yt && yt in t;
}
var He = Function.prototype, Ve = He.toString;
function w(t) {
  if (t != null) {
    try {
      return Ve.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
var We = /[\\^$.*+?()[\]{}|]/g, Ye = /^\[object .+?Constructor\]$/, Xe = Function.prototype, qe = Object.prototype, Ze = Xe.toString, Je = qe.hasOwnProperty, Qe = RegExp(
  "^" + Ze.call(Je).replace(We, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function tr(t) {
  if (!F(t) || Ke(t))
    return !1;
  var e = Kt(t) ? Qe : Ye;
  return e.test(w(t));
}
function er(t, e) {
  return t == null ? void 0 : t[e];
}
function _(t, e) {
  var r = er(t, e);
  return tr(r) ? r : void 0;
}
var rr = _(d, "WeakMap");
const V = rr;
var Tt = Object.create, nr = function() {
  function t() {
  }
  return function(e) {
    if (!F(e))
      return {};
    if (Tt)
      return Tt(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
const or = nr;
function ir(t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
}
function sr(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
var ar = 800, lr = 16, cr = Date.now;
function hr(t) {
  var e = 0, r = 0;
  return function() {
    var n = cr(), o = lr - (n - r);
    if (r = n, o > 0) {
      if (++e >= ar)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function ur(t) {
  return function() {
    return t;
  };
}
var gr = function() {
  try {
    var t = _(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (e) {
  }
}();
const R = gr;
var fr = R ? function(t, e) {
  return R(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ur(e),
    writable: !0
  });
} : Be;
const pr = fr;
var dr = hr(pr);
const yr = dr;
function Tr(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
var Pr = 9007199254740991, mr = /^(?:0|[1-9]\d*)$/;
function Mr(t, e) {
  var r = typeof t;
  return e = e == null ? Pr : e, !!e && (r == "number" || r != "symbol" && mr.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Ht(t, e, r) {
  e == "__proto__" && R ? R(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function Vt(t, e) {
  return t === e || t !== t && e !== e;
}
var vr = Object.prototype, br = vr.hasOwnProperty;
function Wt(t, e, r) {
  var n = t[e];
  (!(br.call(t, e) && Vt(n, r)) || r === void 0 && !(e in t)) && Ht(t, e, r);
}
function B(t, e, r, n) {
  var o = !r;
  r || (r = {});
  for (var i = -1, a = e.length; ++i < a; ) {
    var l = e[i], u = n ? n(r[l], t[l], l, r, t) : void 0;
    u === void 0 && (u = t[l]), o ? Ht(r, l, u) : Wt(r, l, u);
  }
  return r;
}
var Pt = Math.max;
function xr(t, e, r) {
  return e = Pt(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, o = -1, i = Pt(n.length - e, 0), a = Array(i); ++o < i; )
      a[o] = n[e + o];
    o = -1;
    for (var l = Array(e + 1); ++o < e; )
      l[o] = n[o];
    return l[e] = r(a), ir(t, this, l);
  };
}
var Er = 9007199254740991;
function Yt(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Er;
}
function Xt(t) {
  return t != null && Yt(t.length) && !Kt(t);
}
var $r = Object.prototype;
function J(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || $r;
  return t === r;
}
function wr(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var _r = "[object Arguments]";
function mt(t) {
  return E(t) && x(t) == _r;
}
var qt = Object.prototype, Cr = qt.hasOwnProperty, jr = qt.propertyIsEnumerable, Ar = mt(function() {
  return arguments;
}()) ? mt : function(t) {
  return E(t) && Cr.call(t, "callee") && !jr.call(t, "callee");
};
const Zt = Ar;
function Or() {
  return !1;
}
var Jt = typeof exports == "object" && exports && !exports.nodeType && exports, Mt = Jt && typeof module == "object" && module && !module.nodeType && module, Lr = Mt && Mt.exports === Jt, vt = Lr ? d.Buffer : void 0, Sr = vt ? vt.isBuffer : void 0, Ir = Sr || Or;
const Qt = Ir;
var kr = "[object Arguments]", Dr = "[object Array]", Fr = "[object Boolean]", Br = "[object Date]", Ur = "[object Error]", Rr = "[object Function]", Gr = "[object Map]", zr = "[object Number]", Nr = "[object Object]", Kr = "[object RegExp]", Hr = "[object Set]", Vr = "[object String]", Wr = "[object WeakMap]", Yr = "[object ArrayBuffer]", Xr = "[object DataView]", qr = "[object Float32Array]", Zr = "[object Float64Array]", Jr = "[object Int8Array]", Qr = "[object Int16Array]", tn = "[object Int32Array]", en = "[object Uint8Array]", rn = "[object Uint8ClampedArray]", nn = "[object Uint16Array]", on = "[object Uint32Array]", h = {};
h[qr] = h[Zr] = h[Jr] = h[Qr] = h[tn] = h[en] = h[rn] = h[nn] = h[on] = !0;
h[kr] = h[Dr] = h[Yr] = h[Fr] = h[Xr] = h[Br] = h[Ur] = h[Rr] = h[Gr] = h[zr] = h[Nr] = h[Kr] = h[Hr] = h[Vr] = h[Wr] = !1;
function sn(t) {
  return E(t) && Yt(t.length) && !!h[x(t)];
}
function Q(t) {
  return function(e) {
    return t(e);
  };
}
var te = typeof exports == "object" && exports && !exports.nodeType && exports, I = te && typeof module == "object" && module && !module.nodeType && module, an = I && I.exports === te, H = an && Rt.process, ln = function() {
  try {
    var t = I && I.require && I.require("util").types;
    return t || H && H.binding && H.binding("util");
  } catch (e) {
  }
}();
const O = ln;
var bt = O && O.isTypedArray, cn = bt ? Q(bt) : sn;
const hn = cn;
var un = Object.prototype, gn = un.hasOwnProperty;
function ee(t, e) {
  var r = $(t), n = !r && Zt(t), o = !r && !n && Qt(t), i = !r && !n && !o && hn(t), a = r || n || o || i, l = a ? wr(t.length, String) : [], u = l.length;
  for (var g in t)
    (e || gn.call(t, g)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
    Mr(g, u))) && l.push(g);
  return l;
}
function re(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var fn = re(Object.keys, Object);
const pn = fn;
var dn = Object.prototype, yn = dn.hasOwnProperty;
function Tn(t) {
  if (!J(t))
    return pn(t);
  var e = [];
  for (var r in Object(t))
    yn.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function tt(t) {
  return Xt(t) ? ee(t) : Tn(t);
}
function Pn(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var mn = Object.prototype, Mn = mn.hasOwnProperty;
function vn(t) {
  if (!F(t))
    return Pn(t);
  var e = J(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !Mn.call(t, n)) || r.push(n);
  return r;
}
function et(t) {
  return Xt(t) ? ee(t, !0) : vn(t);
}
var bn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xn = /^\w*$/;
function En(t, e) {
  if ($(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || Z(t) ? !0 : xn.test(t) || !bn.test(t) || e != null && t in Object(e);
}
var $n = _(Object, "create");
const k = $n;
function wn() {
  this.__data__ = k ? k(null) : {}, this.size = 0;
}
function _n(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Cn = "__lodash_hash_undefined__", jn = Object.prototype, An = jn.hasOwnProperty;
function On(t) {
  var e = this.__data__;
  if (k) {
    var r = e[t];
    return r === Cn ? void 0 : r;
  }
  return An.call(e, t) ? e[t] : void 0;
}
var Ln = Object.prototype, Sn = Ln.hasOwnProperty;
function In(t) {
  var e = this.__data__;
  return k ? e[t] !== void 0 : Sn.call(e, t);
}
var kn = "__lodash_hash_undefined__";
function Dn(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = k && e === void 0 ? kn : e, this;
}
function b(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
b.prototype.clear = wn;
b.prototype.delete = _n;
b.prototype.get = On;
b.prototype.has = In;
b.prototype.set = Dn;
function Fn() {
  this.__data__ = [], this.size = 0;
}
function G(t, e) {
  for (var r = t.length; r--; )
    if (Vt(t[r][0], e))
      return r;
  return -1;
}
var Bn = Array.prototype, Un = Bn.splice;
function Rn(t) {
  var e = this.__data__, r = G(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Un.call(e, r, 1), --this.size, !0;
}
function Gn(t) {
  var e = this.__data__, r = G(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function zn(t) {
  return G(this.__data__, t) > -1;
}
function Nn(t, e) {
  var r = this.__data__, n = G(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function y(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
y.prototype.clear = Fn;
y.prototype.delete = Rn;
y.prototype.get = Gn;
y.prototype.has = zn;
y.prototype.set = Nn;
var Kn = _(d, "Map");
const D = Kn;
function Hn() {
  this.size = 0, this.__data__ = {
    hash: new b(),
    map: new (D || y)(),
    string: new b()
  };
}
function Vn(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function z(t, e) {
  var r = t.__data__;
  return Vn(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Wn(t) {
  var e = z(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Yn(t) {
  return z(this, t).get(t);
}
function Xn(t) {
  return z(this, t).has(t);
}
function qn(t, e) {
  var r = z(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function m(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
m.prototype.clear = Hn;
m.prototype.delete = Wn;
m.prototype.get = Yn;
m.prototype.has = Xn;
m.prototype.set = qn;
var Zn = "Expected a function";
function rt(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Zn);
  var r = function() {
    var n = arguments, o = e ? e.apply(this, n) : n[0], i = r.cache;
    if (i.has(o))
      return i.get(o);
    var a = t.apply(this, n);
    return r.cache = i.set(o, a) || i, a;
  };
  return r.cache = new (rt.Cache || m)(), r;
}
rt.Cache = m;
var Jn = 500;
function Qn(t) {
  var e = rt(t, function(n) {
    return r.size === Jn && r.clear(), n;
  }), r = e.cache;
  return e;
}
var to = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, eo = /\\(\\)?/g, ro = Qn(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(to, function(r, n, o, i) {
    e.push(o ? i.replace(eo, "$1") : n || r);
  }), e;
});
const no = ro;
function oo(t) {
  return t == null ? "" : Nt(t);
}
function nt(t, e) {
  return $(t) ? t : En(t, e) ? [t] : no(oo(t));
}
var io = 1 / 0;
function ne(t) {
  if (typeof t == "string" || Z(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -io ? "-0" : e;
}
function oe(t, e) {
  e = nt(e, t);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[ne(e[r++])];
  return r && r == n ? t : void 0;
}
function ie(t, e, r) {
  var n = t == null ? void 0 : oe(t, e);
  return n === void 0 ? r : n;
}
function ot(t, e) {
  for (var r = -1, n = e.length, o = t.length; ++r < n; )
    t[o + r] = e[r];
  return t;
}
var xt = p ? p.isConcatSpreadable : void 0;
function so(t) {
  return $(t) || Zt(t) || !!(xt && t && t[xt]);
}
function se(t, e, r, n, o) {
  var i = -1, a = t.length;
  for (r || (r = so), o || (o = []); ++i < a; ) {
    var l = t[i];
    e > 0 && r(l) ? e > 1 ? se(l, e - 1, r, n, o) : ot(o, l) : n || (o[o.length] = l);
  }
  return o;
}
function ao(t) {
  var e = t == null ? 0 : t.length;
  return e ? se(t, 1) : [];
}
function lo(t) {
  return yr(xr(t, void 0, ao), t + "");
}
var co = re(Object.getPrototypeOf, Object);
const it = co;
var ho = "[object Object]", uo = Function.prototype, go = Object.prototype, ae = uo.toString, fo = go.hasOwnProperty, po = ae.call(Object);
function yo(t) {
  if (!E(t) || x(t) != ho)
    return !1;
  var e = it(t);
  if (e === null)
    return !0;
  var r = fo.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && ae.call(r) == po;
}
function To(t, e, r) {
  var n = -1, o = t.length;
  e < 0 && (e = -e > o ? 0 : o + e), r = r > o ? o : r, r < 0 && (r += o), o = e > r ? 0 : r - e >>> 0, e >>>= 0;
  for (var i = Array(o); ++n < o; )
    i[n] = t[n + e];
  return i;
}
function Po() {
  this.__data__ = new y(), this.size = 0;
}
function mo(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function Mo(t) {
  return this.__data__.get(t);
}
function vo(t) {
  return this.__data__.has(t);
}
var bo = 200;
function xo(t, e) {
  var r = this.__data__;
  if (r instanceof y) {
    var n = r.__data__;
    if (!D || n.length < bo - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new m(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function L(t) {
  var e = this.__data__ = new y(t);
  this.size = e.size;
}
L.prototype.clear = Po;
L.prototype.delete = mo;
L.prototype.get = Mo;
L.prototype.has = vo;
L.prototype.set = xo;
function Eo(t, e) {
  return t && B(e, tt(e), t);
}
function $o(t, e) {
  return t && B(e, et(e), t);
}
var le = typeof exports == "object" && exports && !exports.nodeType && exports, Et = le && typeof module == "object" && module && !module.nodeType && module, wo = Et && Et.exports === le, $t = wo ? d.Buffer : void 0, wt = $t ? $t.allocUnsafe : void 0;
function _o(t, e) {
  if (e)
    return t.slice();
  var r = t.length, n = wt ? wt(r) : new t.constructor(r);
  return t.copy(n), n;
}
function Co(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = 0, i = []; ++r < n; ) {
    var a = t[r];
    e(a, r, t) && (i[o++] = a);
  }
  return i;
}
function ce() {
  return [];
}
var jo = Object.prototype, Ao = jo.propertyIsEnumerable, _t = Object.getOwnPropertySymbols, Oo = _t ? function(t) {
  return t == null ? [] : (t = Object(t), Co(_t(t), function(e) {
    return Ao.call(t, e);
  }));
} : ce;
const st = Oo;
function Lo(t, e) {
  return B(t, st(t), e);
}
var So = Object.getOwnPropertySymbols, Io = So ? function(t) {
  for (var e = []; t; )
    ot(e, st(t)), t = it(t);
  return e;
} : ce;
const he = Io;
function ko(t, e) {
  return B(t, he(t), e);
}
function ue(t, e, r) {
  var n = e(t);
  return $(t) ? n : ot(n, r(t));
}
function Do(t) {
  return ue(t, tt, st);
}
function ge(t) {
  return ue(t, et, he);
}
var Fo = _(d, "DataView");
const W = Fo;
var Bo = _(d, "Promise");
const Y = Bo;
var Uo = _(d, "Set");
const X = Uo;
var Ct = "[object Map]", Ro = "[object Object]", jt = "[object Promise]", At = "[object Set]", Ot = "[object WeakMap]", Lt = "[object DataView]", Go = w(W), zo = w(D), No = w(Y), Ko = w(X), Ho = w(V), v = x;
(W && v(new W(new ArrayBuffer(1))) != Lt || D && v(new D()) != Ct || Y && v(Y.resolve()) != jt || X && v(new X()) != At || V && v(new V()) != Ot) && (v = function(t) {
  var e = x(t), r = e == Ro ? t.constructor : void 0, n = r ? w(r) : "";
  if (n)
    switch (n) {
      case Go:
        return Lt;
      case zo:
        return Ct;
      case No:
        return jt;
      case Ko:
        return At;
      case Ho:
        return Ot;
    }
  return e;
});
const at = v;
var Vo = Object.prototype, Wo = Vo.hasOwnProperty;
function Yo(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && Wo.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var Xo = d.Uint8Array;
const St = Xo;
function lt(t) {
  var e = new t.constructor(t.byteLength);
  return new St(e).set(new St(t)), e;
}
function qo(t, e) {
  var r = e ? lt(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var Zo = /\w*$/;
function Jo(t) {
  var e = new t.constructor(t.source, Zo.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var It = p ? p.prototype : void 0, kt = It ? It.valueOf : void 0;
function Qo(t) {
  return kt ? Object(kt.call(t)) : {};
}
function ti(t, e) {
  var r = e ? lt(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var ei = "[object Boolean]", ri = "[object Date]", ni = "[object Map]", oi = "[object Number]", ii = "[object RegExp]", si = "[object Set]", ai = "[object String]", li = "[object Symbol]", ci = "[object ArrayBuffer]", hi = "[object DataView]", ui = "[object Float32Array]", gi = "[object Float64Array]", fi = "[object Int8Array]", pi = "[object Int16Array]", di = "[object Int32Array]", yi = "[object Uint8Array]", Ti = "[object Uint8ClampedArray]", Pi = "[object Uint16Array]", mi = "[object Uint32Array]";
function Mi(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case ci:
      return lt(t);
    case ei:
    case ri:
      return new n(+t);
    case hi:
      return qo(t, r);
    case ui:
    case gi:
    case fi:
    case pi:
    case di:
    case yi:
    case Ti:
    case Pi:
    case mi:
      return ti(t, r);
    case ni:
      return new n();
    case oi:
    case ai:
      return new n(t);
    case ii:
      return Jo(t);
    case si:
      return new n();
    case li:
      return Qo(t);
  }
}
function vi(t) {
  return typeof t.constructor == "function" && !J(t) ? or(it(t)) : {};
}
var bi = "[object Map]";
function xi(t) {
  return E(t) && at(t) == bi;
}
var Dt = O && O.isMap, Ei = Dt ? Q(Dt) : xi;
const $i = Ei;
var wi = "[object Set]";
function _i(t) {
  return E(t) && at(t) == wi;
}
var Ft = O && O.isSet, Ci = Ft ? Q(Ft) : _i;
const ji = Ci;
var Ai = 1, Oi = 2, Li = 4, fe = "[object Arguments]", Si = "[object Array]", Ii = "[object Boolean]", ki = "[object Date]", Di = "[object Error]", pe = "[object Function]", Fi = "[object GeneratorFunction]", Bi = "[object Map]", Ui = "[object Number]", de = "[object Object]", Ri = "[object RegExp]", Gi = "[object Set]", zi = "[object String]", Ni = "[object Symbol]", Ki = "[object WeakMap]", Hi = "[object ArrayBuffer]", Vi = "[object DataView]", Wi = "[object Float32Array]", Yi = "[object Float64Array]", Xi = "[object Int8Array]", qi = "[object Int16Array]", Zi = "[object Int32Array]", Ji = "[object Uint8Array]", Qi = "[object Uint8ClampedArray]", ts = "[object Uint16Array]", es = "[object Uint32Array]", c = {};
c[fe] = c[Si] = c[Hi] = c[Vi] = c[Ii] = c[ki] = c[Wi] = c[Yi] = c[Xi] = c[qi] = c[Zi] = c[Bi] = c[Ui] = c[de] = c[Ri] = c[Gi] = c[zi] = c[Ni] = c[Ji] = c[Qi] = c[ts] = c[es] = !0;
c[Di] = c[pe] = c[Ki] = !1;
function U(t, e, r, n, o, i) {
  var a, l = e & Ai, u = e & Oi, g = e & Li;
  if (r && (a = o ? r(t, n, o, i) : r(t)), a !== void 0)
    return a;
  if (!F(t))
    return t;
  var f = $(t);
  if (f) {
    if (a = Yo(t), !l)
      return sr(t, a);
  } else {
    var C = at(t), ct = C == pe || C == Fi;
    if (Qt(t))
      return _o(t, l);
    if (C == de || C == fe || ct && !o) {
      if (a = u || ct ? {} : vi(t), !l)
        return u ? ko(t, $o(a, t)) : Lo(t, Eo(a, t));
    } else {
      if (!c[C])
        return o ? t : {};
      a = Mi(t, C, l);
    }
  }
  i || (i = new L());
  var ht = i.get(t);
  if (ht)
    return ht;
  i.set(t, a), ji(t) ? t.forEach(function(T) {
    a.add(U(T, e, r, T, t, i));
  }) : $i(t) && t.forEach(function(T, M) {
    a.set(M, U(T, e, r, M, t, i));
  });
  var Te = g ? u ? ge : Do : u ? et : tt, ut = f ? void 0 : Te(t);
  return Tr(ut || t, function(T, M) {
    ut && (M = T, T = t[M]), Wt(a, M, U(T, e, r, M, t, i));
  }), a;
}
function rs(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function ns(t, e) {
  return e.length < 2 ? t : oe(t, To(e, 0, -1));
}
function os(t, e) {
  return e = nt(e, t), t = ns(t, e), t == null || delete t[ne(rs(e))];
}
function is(t) {
  return yo(t) ? void 0 : t;
}
var ss = 1, as = 2, ls = 4, cs = lo(function(t, e) {
  var r = {};
  if (t == null)
    return r;
  var n = !1;
  e = zt(e, function(i) {
    return i = nt(i, t), n || (n = i.length > 1), i;
  }), B(t, ge(t), r), n && (r = U(r, ss | as | ls, is));
  for (var o = e.length; o--; )
    os(r, e[o]);
  return r;
});
const hs = cs, Bt = {
  radius: 6,
  zIndex: 0,
  strokeOpacity: 0,
  fillOpacity: 0
};
class q {
  constructor(e) {
    s(this, "map");
    s(this, "options", P({}, Bt));
    s(this, "circleMarkers", []);
    this.map = e;
  }
  setOptions(e) {
    return this.options = P(P({}, e), hs(Bt, "radius")), this;
  }
  createCircleMarkersByPaths(e) {
    this.removeFromTheMap(), this.reset(), e.forEach((r) => {
      this.circleMarkers.push(this.createCircleMarker(r));
    }), this.addToMap();
  }
  createCircleMarker(e) {
    return new AMap.CircleMarker(P({ center: e }, this.options));
  }
  addToMap() {
    this.map.add(this.circleMarkers);
  }
  removeFromTheMap() {
    this.map.remove(this.circleMarkers);
  }
  /**
   * 获取点是否在围栏编辑器的白色操作点上
   * @param {AMap.LngLat} pos
   * @returns
   */
  getPointInCircleMarkers(e) {
    var r;
    return (r = this.circleMarkers.find((n) => this.isPointInCircle(e, n))) != null ? r : null;
  }
  /**
   * 获取点是否在围栏编辑器的蓝色操作点上（即中间点）
   * @param {*} pos
   * @returns
   */
  getInCircleMarkersPoint(e) {
    const r = this.circleMarkers.find((o) => this.isPointInCircle(e, o));
    return this.circleMarkers.findIndex((o) => o === r) % 2 === 0 ? null : r != null ? r : null;
  }
  isPointInCircle(e, r) {
    return r.contains(e);
  }
  reset() {
    this.circleMarkers = [];
  }
  destroy() {
    this.removeFromTheMap(), this.reset();
  }
}
const Ut = {
  zIndex: 1,
  strokeColor: "#00D3FC",
  strokeWeight: 8,
  strokeOpacity: 0
};
class ye {
  constructor(e) {
    s(this, "map");
    s(this, "linesPath", []);
    s(this, "lines", []);
    if (!e)
      throw new Error("map not found");
    this.map = e;
  }
  getLinesByPaths(e) {
    let r = 0;
    const n = e.length;
    for (; r < n; ) {
      const o = r + 1 >= n ? 0 : r + 1;
      this.linesPath.push([e[r], e[o]]), r++;
    }
    return this.linesPath;
  }
  createLinesByPaths(e) {
    this.reset(), this.getLinesByPaths(e);
  }
  createPolyLine(e) {
    return new AMap.Polyline(P({ path: e }, Ut));
  }
  addToMap() {
    this.map.add(this.lines);
  }
  removeFromTheMap() {
    this.map.remove(this.lines);
  }
  getPointInPolyline(e) {
    const r = this.map.getResolution(), n = Ut.strokeWeight * r;
    return this.linesPath.find(
      (i) => AMap.GeometryUtil.isPointOnSegment(e, i[0], i[1], n)
    );
  }
  reset() {
    this.linesPath = [], this.lines = [];
  }
}
class us {
  constructor(e, r) {
    s(this, "map");
    // 实点
    s(this, "circleMarkers", null);
    // 中间点
    s(this, "midCircleMarkers", null);
    // 线集合
    s(this, "lines", null);
    // 编辑器
    s(this, "polygonEditor", null);
    // 多边形路径
    s(this, "polygonPaths", []);
    // 多边形全部路径（包括中间虚电）
    s(this, "polygonTotalPaths", []);
    // 多边形
    s(this, "polygon", null);
    // 开始点位到鼠标位置的文本
    s(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    s(this, "lastPointToCursorText", null);
    // 线长的文本呢
    s(this, "lineLengthText", null);
    // 操作点
    s(this, "circleMarker", null);
    // 操作中间点
    s(this, "midCircleMarker", null);
    // 起始点位
    s(this, "startPosition", null);
    // 上次点击点位
    s(this, "lastPosition", null);
    // 兜底设置编辑中间点标记列表路径
    s(this, "editingMidTipMarkerListPath", null);
    s(this, "onPolygonEditorAdjust", ({ target: e }) => {
      this.polygonPaths = e.getPath(), this.circleMarkers.createCircleMarkersByPaths(this.polygonPaths), this.lines.createLinesByPaths(this.polygonPaths), Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      }), this.reset();
    });
    s(this, "onMouseDown", (e) => {
      const r = e.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(r), this.midCircleMarker = this.midCircleMarkers.getInCircleMarkersPoint(r);
    });
    s(this, "onMovePolygonEditorPoint", (e) => {
      if (this.midCircleMarker)
        return;
      if (!this.circleMarker) {
        this.reset();
        return;
      }
      const r = this.circleMarker.getCenter(), n = (f) => `${f.lng}-${f.lat}`;
      let o = this.polygonPaths.findIndex((f) => n(f) === n(r));
      if (o === -1)
        return;
      const i = this.polygonPaths.length, a = o - 1 <= -1 ? i - 1 : o - 1, l = o + 1 >= i ? 0 : o + 1, u = this.polygonPaths.at(a), g = this.polygonPaths.at(l);
      this.setPosition(u, g), this.onMouseMoveInDrawPolygon(e);
    });
    s(this, "onMovePolygonEditorMidPoint", (e) => {
      if (this.circleMarker)
        return;
      if (!this.midCircleMarker) {
        this.reset();
        return;
      }
      const r = this.midCircleMarker.getCenter(), n = (f) => `${f.lng}-${f.lat}`;
      let o = this.polygonTotalPaths.findIndex((f) => n(f) === n(r));
      if (o === -1)
        return;
      const i = this.polygonTotalPaths.length, a = o - 1 <= -1 ? i - 1 : o - 1, l = o + 1 >= i ? 0 : o + 1, u = this.polygonTotalPaths.at(a), g = this.polygonTotalPaths.at(l);
      this.setPosition(u, g), this.onMouseMoveInDrawPolygon(e);
    });
    s(this, "onMouseUp", () => {
      this.circleMarker = null, this.midCircleMarker = null, this.reset();
    });
    s(this, "onInPolygonEditorLine", (e) => {
      if (this.circleMarker)
        return this.removeLineDistanceText();
      const r = e.lnglat, n = this.lines.getPointInPolyline(r);
      if (!n)
        return this.removeLineDistanceText();
      const [o, i] = n;
      this.lineLengthText || (this.lineLengthText = j(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, A(o, i));
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    s(this, "onMouseMoveInDrawPolygon", (e) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const r = e.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        A(this.startPosition, r)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        A(this.lastPosition, r)
      );
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, r && (this.polygonEditor = r), this.circleMarkers = new q(this.map), this.midCircleMarkers = new q(this.map), this.lines = new ye(this.map);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var e;
    return this.polygonEditor ? (e = this.polygonEditor.getTarget().getPath()) != null ? e : [] : [];
  }
  /**
   * 
   */
  setEditingMidTipMarkerListPath(e) {
    return this.editingMidTipMarkerListPath = e, this;
  }
  /**
   * 
   * @returns 
   */
  getEditingMidTipMarkerList() {
    var r, n;
    const { singleRingListHandle: e } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return ie(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (r = this.polygonEditor.editingMidTipMarkerList) != null && r.length ? this.polygonEditor.editingMidTipMarkerList : e ? (n = e == null ? void 0 : e.list) == null ? void 0 : n.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const e = this.getPolygonEditorTargetPaths(), r = this.getEditingMidTipMarkerList();
    let n = 0;
    const o = [], i = e.length;
    for (; n < i; ) {
      o.push(e[n]);
      const a = r[n];
      a && o.push(a.getCenter()), n++;
    }
    return o;
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   */
  start(e) {
    var o, i, a;
    if (!e && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = e;
    const { controlPoint: r, midControlPoint: n } = this.polygonEditor;
    return this.polygonPaths = this.getPolygonEditorTargetPaths(), this.circleMarkers.setOptions(r).createCircleMarkersByPaths(this.polygonPaths), this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.setOptions(n).createCircleMarkersByPaths(this.polygonTotalPaths), this.lines.createLinesByPaths(this.polygonPaths), (o = this.polygonEditor) == null || o.on("adjust", this.onPolygonEditorAdjust), (i = this.polygonEditor) == null || i.on("removenode", this.onPolygonEditorAdjust), (a = this.polygonEditor) == null || a.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("mousemove", this.onMovePolygonEditorPoint), this.map.on("mousemove", this.onMovePolygonEditorMidPoint), this.map.on("mousemove", this.onInPolygonEditorLine), this.map.on("mouseup", this.onMouseUp), this;
  }
  /**
   * 移除多边形编辑器，可操作点位事件
   */
  stop() {
    var e, r, n;
    (e = this.polygonEditor) == null || e.off("adjust", this.onPolygonEditorAdjust), (r = this.polygonEditor) == null || r.off("removenode", this.onPolygonEditorAdjust), (n = this.polygonEditor) == null || n.off("addnode", this.onPolygonEditorAdjust), this.map.off("mousedown", this.onMouseDown), this.map.off("mousemove", this.onMovePolygonEditorPoint), this.map.off("mousemove", this.onMovePolygonEditorMidPoint), this.map.off("mousemove", this.onInPolygonEditorLine), this.map.off("mouseup", this.onMouseUp);
  }
  /**
   * 开始边线测距
   * @param polygon 
   * @returns 
   */
  startLineRanging(e) {
    if (!e)
      throw new Error("polygonEditor not found");
    this.polygon || (this.polygon = e, this.lines.createLinesByPaths(this.polygon.getPath()), this.map.on("mousemove", this.onInPolygonEditorLine));
  }
  stopLineRanging() {
    this.map.off("mousemove", this.onInPolygonEditorLine);
  }
  /**
   * 设置起始点位、一次点位
   * @param {object} startPosition
   * @param {object} lastPosition
   */
  setPosition(e, r) {
    this.startPosition = e, this.lastPosition = r, this.createDistanceText();
  }
  /**
   * 创建距离文本
   * @returns
   */
  createDistanceText() {
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = j(), this.lastPointToCursorText = j(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(e, { text: r, textPos: n }) {
    e.setText(r), e.setPosition(n);
  }
  removeLineDistanceText() {
    var e;
    (e = this.lineLengthText) == null || e.remove(), this.lineLengthText = null;
  }
  removeDistanceText() {
    var e, r;
    (e = this.startPointToCursorText) == null || e.remove(), (r = this.lastPointToCursorText) == null || r.remove(), this.startPointToCursorText = null, this.lastPointToCursorText = null;
  }
  reset() {
    return this.startPosition = null, this.lastPosition = null, this.removeDistanceText(), this.removeLineDistanceText(), this;
  }
  destroy() {
    return console.log("=== 销毁 围栏编辑测距事件 =="), this.reset(), this.stop(), this.circleMarkers.destroy(), this;
  }
  destroyLineRanging() {
    return console.log("=== 销毁 围栏查看测距事件 =="), this.polygon = null, this.startPosition = null, this.lastPosition = null, this.removeLineDistanceText(), this.stopLineRanging(), this;
  }
}
class gs {
  constructor(e) {
    s(this, "map");
    // 线集合
    s(this, "lines", null);
    // 多边形
    s(this, "polygon", null);
    // 线长的文本呢
    s(this, "lineLengthText", null);
    // 兜底设置编辑中间点标记列表路径
    s(this, "editingMidTipMarkerListPath", null);
    s(this, "onPolygonRanging", (e) => {
      const r = e.lnglat, n = this.lines.getPointInPolyline(r);
      if (!n)
        return this.removeLineDistanceText();
      const [o, i] = n;
      this.lineLengthText || (this.lineLengthText = j(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, A(o, i));
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, this.lines = new ye(this.map);
  }
  /**
   * 开始边线测距
   * @param polygon 
   * @returns 
   */
  start(e) {
    if (!e)
      throw new Error("polygon not found");
    this.polygon || (this.polygon = e, this.lines.createLinesByPaths(this.polygon.getPath()), this.map.on("mousemove", this.onPolygonRanging));
  }
  stop() {
    this.map.off("mousemove", this.onPolygonRanging);
  }
  updateDistanceText(e, { text: r, textPos: n }) {
    e.setText(r), e.setPosition(n);
  }
  removeLineDistanceText() {
    var e;
    (e = this.lineLengthText) == null || e.remove(), this.lineLengthText = null;
  }
  destroy() {
    return this.polygon = null, this.stop(), this.removeLineDistanceText(), this;
  }
}
class fs {
  constructor() {
    s(this, "events", {});
  }
  getEvents(e) {
    return this.events[e] || (this.events[e] = []), this.events[e];
  }
  emit(e, ...r) {
    this.getEvents(e).forEach((o) => o(...r));
  }
  on(e, r) {
    !e || typeof e != "string" || this.getEvents(e).push(r);
  }
  once(e, r) {
    if (!e || typeof e != "string")
      return;
    const n = (o) => {
      r(o), this.off(e, n);
    };
    this.on(e, n);
  }
  off(e, r) {
    !e || typeof e != "string" || (this.events[e] = this.getEvents(e).filter((n) => n !== r));
  }
  hasEvents(e, r) {
    return !!this.getEvents(e).find((n) => n === r);
  }
  clearEvents(e) {
    e ? this.events[e] = [] : this.events = {};
  }
}
class ps extends fs {
  constructor(r) {
    super();
    s(this, "map");
    // 全部点
    s(this, "circleMarkers", null);
    // 编辑器
    s(this, "polygonEditor", null);
    // 多边形全部路径（包括中间点）
    s(this, "polygonTotalPaths", []);
    // 操作点
    s(this, "circleMarker", null);
    // 兜底设置编辑中间点标记列表路径
    s(this, "editingMidTipMarkerListPath", null);
    s(this, "onPolygonEditorAdjust", () => {
      Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      });
    });
    s(this, "onMouseDown", (r) => {
      const n = r.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(n), !(!this.circleMarker || !this.getEvents("mousedown").length) && this.emit("mousedown", this.circleMarker);
    });
    s(this, "onMouseMove", (r) => {
      !this.circleMarker || !this.getEvents("mousemove").length || this.emit("mousemove", this.circleMarker, r);
    });
    s(this, "onMouseUp", () => {
      !this.getEvents("mouseup").length || !this.circleMarker || (this.emit("mouseup", this.circleMarker), this.circleMarker = null);
    });
    this.map = r.map, this.polygonEditor = r, this.circleMarkers = new q(this.map), this.start(this.polygonEditor);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var r;
    return this.polygonEditor ? (r = this.polygonEditor.getTarget().getPath()) != null ? r : [] : [];
  }
  /**
   * 
   */
  setEditingMidTipMarkerListPath(r) {
    return this.editingMidTipMarkerListPath = r, this;
  }
  /**
   * 获取编辑中间点标记列表
   * @returns 
   */
  getEditingMidTipMarkerList() {
    var n, o;
    const { singleRingListHandle: r } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return ie(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (n = this.polygonEditor.editingMidTipMarkerList) != null && n.length ? this.polygonEditor.editingMidTipMarkerList : r ? (o = r == null ? void 0 : r.list) == null ? void 0 : o.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const r = this.getPolygonEditorTargetPaths(), n = this.getEditingMidTipMarkerList();
    let o = 0;
    const i = [], a = r.length;
    for (; o < a; ) {
      i.push(r[o]);
      const l = n[o];
      l && i.push(l.getCenter()), o++;
    }
    return i;
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   */
  start(r) {
    var o, i, a;
    if (!r && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = r;
    const { midControlPoint: n } = this.polygonEditor;
    return this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.setOptions(n).createCircleMarkersByPaths(this.polygonTotalPaths), (o = this.polygonEditor) == null || o.on("adjust", this.onPolygonEditorAdjust), (i = this.polygonEditor) == null || i.on("removenode", this.onPolygonEditorAdjust), (a = this.polygonEditor) == null || a.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("mousemove", this.onMouseMove), this.map.on("mouseup", this.onMouseUp), this;
  }
  /**
   * 
   */
  stop() {
    this.map.off("mousedown", this.onMouseDown), this.map.off("mousemove", this.onMouseMove), this.map.off("mouseup", this.onMouseUp);
  }
  destroy() {
    return this.stop(), this.circleMarkers.destroy(), this;
  }
}
const Ts = {
  PolygonRangingInDrawing: be,
  PolygonEditorRanging: us,
  PolygonEditorEvent: ps,
  PolygonRanging: gs
};
export {
  ps as PolygonEditorEvent,
  us as PolygonEditorRanging,
  gs as PolygonRanging,
  be as PolygonRangingInDrawing,
  Ts as default
};
