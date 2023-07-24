var pe = Object.defineProperty;
var de = (t, e, r) => e in t ? pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var s = (t, e, r) => (de(t, typeof e != "symbol" ? e + "" : e, r), r);
const ye = {
  "border-color": "#e1f5fe",
  "font-size": "12px",
  "border-radius": ".25rem",
  "background-color": "rgba(0,0,0,.4)",
  "border-width": 0,
  "text-align": "center",
  color: "#fff"
}, j = (t = "", e = {}) => new AMap.Text({ text: t, style: { ...ye, ...e }, offset: [0, -10] }), E = (t, e) => {
  const r = t.divideBy(2).add(e.divideBy(2));
  return { text: `${Math.round(t.distance(e))}米`, textPos: r };
};
let Te = class {
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
        E(this.startPosition, r)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        E(this.lastPosition, r)
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
var Pe = typeof global == "object" && global && global.Object === Object && global;
const Ft = Pe;
var me = typeof self == "object" && self && self.Object === Object && self, be = Ft || me || Function("return this")();
const d = be;
var ve = d.Symbol;
const p = ve;
var Bt = Object.prototype, Me = Bt.hasOwnProperty, xe = Bt.toString, S = p ? p.toStringTag : void 0;
function $e(t) {
  var e = Me.call(t, S), r = t[S];
  try {
    t[S] = void 0;
    var n = !0;
  } catch {
  }
  var o = xe.call(t);
  return n && (e ? t[S] = r : delete t[S]), o;
}
var _e = Object.prototype, we = _e.toString;
function Ce(t) {
  return we.call(t);
}
var je = "[object Null]", Ee = "[object Undefined]", ct = p ? p.toStringTag : void 0;
function M(t) {
  return t == null ? t === void 0 ? Ee : je : ct && ct in Object(t) ? $e(t) : Ce(t);
}
function x(t) {
  return t != null && typeof t == "object";
}
var Oe = "[object Symbol]";
function Y(t) {
  return typeof t == "symbol" || x(t) && M(t) == Oe;
}
function Rt(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = Array(n); ++r < n; )
    o[r] = e(t[r], r, t);
  return o;
}
var Ae = Array.isArray;
const $ = Ae;
var Se = 1 / 0, ut = p ? p.prototype : void 0, ht = ut ? ut.toString : void 0;
function Ut(t) {
  if (typeof t == "string")
    return t;
  if ($(t))
    return Rt(t, Ut) + "";
  if (Y(t))
    return ht ? ht.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Se ? "-0" : e;
}
function k(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function Ie(t) {
  return t;
}
var Le = "[object AsyncFunction]", De = "[object Function]", ke = "[object GeneratorFunction]", Fe = "[object Proxy]";
function Nt(t) {
  if (!k(t))
    return !1;
  var e = M(t);
  return e == De || e == ke || e == Le || e == Fe;
}
var Be = d["__core-js_shared__"];
const G = Be;
var ft = function() {
  var t = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Re(t) {
  return !!ft && ft in t;
}
var Ue = Function.prototype, Ne = Ue.toString;
function _(t) {
  if (t != null) {
    try {
      return Ne.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ge = /[\\^$.*+?()[\]{}|]/g, ze = /^\[object .+?Constructor\]$/, Ke = Function.prototype, He = Object.prototype, Ve = Ke.toString, We = He.hasOwnProperty, Ye = RegExp(
  "^" + Ve.call(We).replace(Ge, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xe(t) {
  if (!k(t) || Re(t))
    return !1;
  var e = Nt(t) ? Ye : ze;
  return e.test(_(t));
}
function qe(t, e) {
  return t == null ? void 0 : t[e];
}
function w(t, e) {
  var r = qe(t, e);
  return Xe(r) ? r : void 0;
}
var Ze = w(d, "WeakMap");
const K = Ze;
var gt = Object.create, Je = function() {
  function t() {
  }
  return function(e) {
    if (!k(e))
      return {};
    if (gt)
      return gt(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
const Qe = Je;
function tr(t, e, r) {
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
function er(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
var rr = 800, nr = 16, or = Date.now;
function ir(t) {
  var e = 0, r = 0;
  return function() {
    var n = or(), o = nr - (n - r);
    if (r = n, o > 0) {
      if (++e >= rr)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function sr(t) {
  return function() {
    return t;
  };
}
var ar = function() {
  try {
    var t = w(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const R = ar;
var lr = R ? function(t, e) {
  return R(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: sr(e),
    writable: !0
  });
} : Ie;
const cr = lr;
var ur = ir(cr);
const hr = ur;
function fr(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
var gr = 9007199254740991, pr = /^(?:0|[1-9]\d*)$/;
function dr(t, e) {
  var r = typeof t;
  return e = e ?? gr, !!e && (r == "number" || r != "symbol" && pr.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Gt(t, e, r) {
  e == "__proto__" && R ? R(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function zt(t, e) {
  return t === e || t !== t && e !== e;
}
var yr = Object.prototype, Tr = yr.hasOwnProperty;
function Kt(t, e, r) {
  var n = t[e];
  (!(Tr.call(t, e) && zt(n, r)) || r === void 0 && !(e in t)) && Gt(t, e, r);
}
function F(t, e, r, n) {
  var o = !r;
  r || (r = {});
  for (var i = -1, a = e.length; ++i < a; ) {
    var l = e[i], h = n ? n(r[l], t[l], l, r, t) : void 0;
    h === void 0 && (h = t[l]), o ? Gt(r, l, h) : Kt(r, l, h);
  }
  return r;
}
var pt = Math.max;
function Pr(t, e, r) {
  return e = pt(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, o = -1, i = pt(n.length - e, 0), a = Array(i); ++o < i; )
      a[o] = n[e + o];
    o = -1;
    for (var l = Array(e + 1); ++o < e; )
      l[o] = n[o];
    return l[e] = r(a), tr(t, this, l);
  };
}
var mr = 9007199254740991;
function Ht(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= mr;
}
function Vt(t) {
  return t != null && Ht(t.length) && !Nt(t);
}
var br = Object.prototype;
function X(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || br;
  return t === r;
}
function vr(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var Mr = "[object Arguments]";
function dt(t) {
  return x(t) && M(t) == Mr;
}
var Wt = Object.prototype, xr = Wt.hasOwnProperty, $r = Wt.propertyIsEnumerable, _r = dt(function() {
  return arguments;
}()) ? dt : function(t) {
  return x(t) && xr.call(t, "callee") && !$r.call(t, "callee");
};
const Yt = _r;
function wr() {
  return !1;
}
var Xt = typeof exports == "object" && exports && !exports.nodeType && exports, yt = Xt && typeof module == "object" && module && !module.nodeType && module, Cr = yt && yt.exports === Xt, Tt = Cr ? d.Buffer : void 0, jr = Tt ? Tt.isBuffer : void 0, Er = jr || wr;
const qt = Er;
var Or = "[object Arguments]", Ar = "[object Array]", Sr = "[object Boolean]", Ir = "[object Date]", Lr = "[object Error]", Dr = "[object Function]", kr = "[object Map]", Fr = "[object Number]", Br = "[object Object]", Rr = "[object RegExp]", Ur = "[object Set]", Nr = "[object String]", Gr = "[object WeakMap]", zr = "[object ArrayBuffer]", Kr = "[object DataView]", Hr = "[object Float32Array]", Vr = "[object Float64Array]", Wr = "[object Int8Array]", Yr = "[object Int16Array]", Xr = "[object Int32Array]", qr = "[object Uint8Array]", Zr = "[object Uint8ClampedArray]", Jr = "[object Uint16Array]", Qr = "[object Uint32Array]", u = {};
u[Hr] = u[Vr] = u[Wr] = u[Yr] = u[Xr] = u[qr] = u[Zr] = u[Jr] = u[Qr] = !0;
u[Or] = u[Ar] = u[zr] = u[Sr] = u[Kr] = u[Ir] = u[Lr] = u[Dr] = u[kr] = u[Fr] = u[Br] = u[Rr] = u[Ur] = u[Nr] = u[Gr] = !1;
function tn(t) {
  return x(t) && Ht(t.length) && !!u[M(t)];
}
function q(t) {
  return function(e) {
    return t(e);
  };
}
var Zt = typeof exports == "object" && exports && !exports.nodeType && exports, I = Zt && typeof module == "object" && module && !module.nodeType && module, en = I && I.exports === Zt, z = en && Ft.process, rn = function() {
  try {
    var t = I && I.require && I.require("util").types;
    return t || z && z.binding && z.binding("util");
  } catch {
  }
}();
const O = rn;
var Pt = O && O.isTypedArray, nn = Pt ? q(Pt) : tn;
const on = nn;
var sn = Object.prototype, an = sn.hasOwnProperty;
function Jt(t, e) {
  var r = $(t), n = !r && Yt(t), o = !r && !n && qt(t), i = !r && !n && !o && on(t), a = r || n || o || i, l = a ? vr(t.length, String) : [], h = l.length;
  for (var f in t)
    (e || an.call(t, f)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    dr(f, h))) && l.push(f);
  return l;
}
function Qt(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var ln = Qt(Object.keys, Object);
const cn = ln;
var un = Object.prototype, hn = un.hasOwnProperty;
function fn(t) {
  if (!X(t))
    return cn(t);
  var e = [];
  for (var r in Object(t))
    hn.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function Z(t) {
  return Vt(t) ? Jt(t) : fn(t);
}
function gn(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var pn = Object.prototype, dn = pn.hasOwnProperty;
function yn(t) {
  if (!k(t))
    return gn(t);
  var e = X(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !dn.call(t, n)) || r.push(n);
  return r;
}
function J(t) {
  return Vt(t) ? Jt(t, !0) : yn(t);
}
var Tn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pn = /^\w*$/;
function mn(t, e) {
  if ($(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || Y(t) ? !0 : Pn.test(t) || !Tn.test(t) || e != null && t in Object(e);
}
var bn = w(Object, "create");
const L = bn;
function vn() {
  this.__data__ = L ? L(null) : {}, this.size = 0;
}
function Mn(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var xn = "__lodash_hash_undefined__", $n = Object.prototype, _n = $n.hasOwnProperty;
function wn(t) {
  var e = this.__data__;
  if (L) {
    var r = e[t];
    return r === xn ? void 0 : r;
  }
  return _n.call(e, t) ? e[t] : void 0;
}
var Cn = Object.prototype, jn = Cn.hasOwnProperty;
function En(t) {
  var e = this.__data__;
  return L ? e[t] !== void 0 : jn.call(e, t);
}
var On = "__lodash_hash_undefined__";
function An(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = L && e === void 0 ? On : e, this;
}
function v(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
v.prototype.clear = vn;
v.prototype.delete = Mn;
v.prototype.get = wn;
v.prototype.has = En;
v.prototype.set = An;
function Sn() {
  this.__data__ = [], this.size = 0;
}
function U(t, e) {
  for (var r = t.length; r--; )
    if (zt(t[r][0], e))
      return r;
  return -1;
}
var In = Array.prototype, Ln = In.splice;
function Dn(t) {
  var e = this.__data__, r = U(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Ln.call(e, r, 1), --this.size, !0;
}
function kn(t) {
  var e = this.__data__, r = U(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Fn(t) {
  return U(this.__data__, t) > -1;
}
function Bn(t, e) {
  var r = this.__data__, n = U(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function y(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
y.prototype.clear = Sn;
y.prototype.delete = Dn;
y.prototype.get = kn;
y.prototype.has = Fn;
y.prototype.set = Bn;
var Rn = w(d, "Map");
const D = Rn;
function Un() {
  this.size = 0, this.__data__ = {
    hash: new v(),
    map: new (D || y)(),
    string: new v()
  };
}
function Nn(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function N(t, e) {
  var r = t.__data__;
  return Nn(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Gn(t) {
  var e = N(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function zn(t) {
  return N(this, t).get(t);
}
function Kn(t) {
  return N(this, t).has(t);
}
function Hn(t, e) {
  var r = N(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function P(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
P.prototype.clear = Un;
P.prototype.delete = Gn;
P.prototype.get = zn;
P.prototype.has = Kn;
P.prototype.set = Hn;
var Vn = "Expected a function";
function Q(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Vn);
  var r = function() {
    var n = arguments, o = e ? e.apply(this, n) : n[0], i = r.cache;
    if (i.has(o))
      return i.get(o);
    var a = t.apply(this, n);
    return r.cache = i.set(o, a) || i, a;
  };
  return r.cache = new (Q.Cache || P)(), r;
}
Q.Cache = P;
var Wn = 500;
function Yn(t) {
  var e = Q(t, function(n) {
    return r.size === Wn && r.clear(), n;
  }), r = e.cache;
  return e;
}
var Xn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qn = /\\(\\)?/g, Zn = Yn(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Xn, function(r, n, o, i) {
    e.push(o ? i.replace(qn, "$1") : n || r);
  }), e;
});
const Jn = Zn;
function Qn(t) {
  return t == null ? "" : Ut(t);
}
function tt(t, e) {
  return $(t) ? t : mn(t, e) ? [t] : Jn(Qn(t));
}
var to = 1 / 0;
function te(t) {
  if (typeof t == "string" || Y(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -to ? "-0" : e;
}
function ee(t, e) {
  e = tt(e, t);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[te(e[r++])];
  return r && r == n ? t : void 0;
}
function eo(t, e, r) {
  var n = t == null ? void 0 : ee(t, e);
  return n === void 0 ? r : n;
}
function et(t, e) {
  for (var r = -1, n = e.length, o = t.length; ++r < n; )
    t[o + r] = e[r];
  return t;
}
var mt = p ? p.isConcatSpreadable : void 0;
function ro(t) {
  return $(t) || Yt(t) || !!(mt && t && t[mt]);
}
function re(t, e, r, n, o) {
  var i = -1, a = t.length;
  for (r || (r = ro), o || (o = []); ++i < a; ) {
    var l = t[i];
    e > 0 && r(l) ? e > 1 ? re(l, e - 1, r, n, o) : et(o, l) : n || (o[o.length] = l);
  }
  return o;
}
function no(t) {
  var e = t == null ? 0 : t.length;
  return e ? re(t, 1) : [];
}
function oo(t) {
  return hr(Pr(t, void 0, no), t + "");
}
var io = Qt(Object.getPrototypeOf, Object);
const rt = io;
var so = "[object Object]", ao = Function.prototype, lo = Object.prototype, ne = ao.toString, co = lo.hasOwnProperty, uo = ne.call(Object);
function ho(t) {
  if (!x(t) || M(t) != so)
    return !1;
  var e = rt(t);
  if (e === null)
    return !0;
  var r = co.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && ne.call(r) == uo;
}
function fo(t, e, r) {
  var n = -1, o = t.length;
  e < 0 && (e = -e > o ? 0 : o + e), r = r > o ? o : r, r < 0 && (r += o), o = e > r ? 0 : r - e >>> 0, e >>>= 0;
  for (var i = Array(o); ++n < o; )
    i[n] = t[n + e];
  return i;
}
function go() {
  this.__data__ = new y(), this.size = 0;
}
function po(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function yo(t) {
  return this.__data__.get(t);
}
function To(t) {
  return this.__data__.has(t);
}
var Po = 200;
function mo(t, e) {
  var r = this.__data__;
  if (r instanceof y) {
    var n = r.__data__;
    if (!D || n.length < Po - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new P(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function A(t) {
  var e = this.__data__ = new y(t);
  this.size = e.size;
}
A.prototype.clear = go;
A.prototype.delete = po;
A.prototype.get = yo;
A.prototype.has = To;
A.prototype.set = mo;
function bo(t, e) {
  return t && F(e, Z(e), t);
}
function vo(t, e) {
  return t && F(e, J(e), t);
}
var oe = typeof exports == "object" && exports && !exports.nodeType && exports, bt = oe && typeof module == "object" && module && !module.nodeType && module, Mo = bt && bt.exports === oe, vt = Mo ? d.Buffer : void 0, Mt = vt ? vt.allocUnsafe : void 0;
function xo(t, e) {
  if (e)
    return t.slice();
  var r = t.length, n = Mt ? Mt(r) : new t.constructor(r);
  return t.copy(n), n;
}
function $o(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = 0, i = []; ++r < n; ) {
    var a = t[r];
    e(a, r, t) && (i[o++] = a);
  }
  return i;
}
function ie() {
  return [];
}
var _o = Object.prototype, wo = _o.propertyIsEnumerable, xt = Object.getOwnPropertySymbols, Co = xt ? function(t) {
  return t == null ? [] : (t = Object(t), $o(xt(t), function(e) {
    return wo.call(t, e);
  }));
} : ie;
const nt = Co;
function jo(t, e) {
  return F(t, nt(t), e);
}
var Eo = Object.getOwnPropertySymbols, Oo = Eo ? function(t) {
  for (var e = []; t; )
    et(e, nt(t)), t = rt(t);
  return e;
} : ie;
const se = Oo;
function Ao(t, e) {
  return F(t, se(t), e);
}
function ae(t, e, r) {
  var n = e(t);
  return $(t) ? n : et(n, r(t));
}
function So(t) {
  return ae(t, Z, nt);
}
function le(t) {
  return ae(t, J, se);
}
var Io = w(d, "DataView");
const H = Io;
var Lo = w(d, "Promise");
const V = Lo;
var Do = w(d, "Set");
const W = Do;
var $t = "[object Map]", ko = "[object Object]", _t = "[object Promise]", wt = "[object Set]", Ct = "[object WeakMap]", jt = "[object DataView]", Fo = _(H), Bo = _(D), Ro = _(V), Uo = _(W), No = _(K), b = M;
(H && b(new H(new ArrayBuffer(1))) != jt || D && b(new D()) != $t || V && b(V.resolve()) != _t || W && b(new W()) != wt || K && b(new K()) != Ct) && (b = function(t) {
  var e = M(t), r = e == ko ? t.constructor : void 0, n = r ? _(r) : "";
  if (n)
    switch (n) {
      case Fo:
        return jt;
      case Bo:
        return $t;
      case Ro:
        return _t;
      case Uo:
        return wt;
      case No:
        return Ct;
    }
  return e;
});
const ot = b;
var Go = Object.prototype, zo = Go.hasOwnProperty;
function Ko(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && zo.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var Ho = d.Uint8Array;
const Et = Ho;
function it(t) {
  var e = new t.constructor(t.byteLength);
  return new Et(e).set(new Et(t)), e;
}
function Vo(t, e) {
  var r = e ? it(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var Wo = /\w*$/;
function Yo(t) {
  var e = new t.constructor(t.source, Wo.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var Ot = p ? p.prototype : void 0, At = Ot ? Ot.valueOf : void 0;
function Xo(t) {
  return At ? Object(At.call(t)) : {};
}
function qo(t, e) {
  var r = e ? it(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var Zo = "[object Boolean]", Jo = "[object Date]", Qo = "[object Map]", ti = "[object Number]", ei = "[object RegExp]", ri = "[object Set]", ni = "[object String]", oi = "[object Symbol]", ii = "[object ArrayBuffer]", si = "[object DataView]", ai = "[object Float32Array]", li = "[object Float64Array]", ci = "[object Int8Array]", ui = "[object Int16Array]", hi = "[object Int32Array]", fi = "[object Uint8Array]", gi = "[object Uint8ClampedArray]", pi = "[object Uint16Array]", di = "[object Uint32Array]";
function yi(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case ii:
      return it(t);
    case Zo:
    case Jo:
      return new n(+t);
    case si:
      return Vo(t, r);
    case ai:
    case li:
    case ci:
    case ui:
    case hi:
    case fi:
    case gi:
    case pi:
    case di:
      return qo(t, r);
    case Qo:
      return new n();
    case ti:
    case ni:
      return new n(t);
    case ei:
      return Yo(t);
    case ri:
      return new n();
    case oi:
      return Xo(t);
  }
}
function Ti(t) {
  return typeof t.constructor == "function" && !X(t) ? Qe(rt(t)) : {};
}
var Pi = "[object Map]";
function mi(t) {
  return x(t) && ot(t) == Pi;
}
var St = O && O.isMap, bi = St ? q(St) : mi;
const vi = bi;
var Mi = "[object Set]";
function xi(t) {
  return x(t) && ot(t) == Mi;
}
var It = O && O.isSet, $i = It ? q(It) : xi;
const _i = $i;
var wi = 1, Ci = 2, ji = 4, ce = "[object Arguments]", Ei = "[object Array]", Oi = "[object Boolean]", Ai = "[object Date]", Si = "[object Error]", ue = "[object Function]", Ii = "[object GeneratorFunction]", Li = "[object Map]", Di = "[object Number]", he = "[object Object]", ki = "[object RegExp]", Fi = "[object Set]", Bi = "[object String]", Ri = "[object Symbol]", Ui = "[object WeakMap]", Ni = "[object ArrayBuffer]", Gi = "[object DataView]", zi = "[object Float32Array]", Ki = "[object Float64Array]", Hi = "[object Int8Array]", Vi = "[object Int16Array]", Wi = "[object Int32Array]", Yi = "[object Uint8Array]", Xi = "[object Uint8ClampedArray]", qi = "[object Uint16Array]", Zi = "[object Uint32Array]", c = {};
c[ce] = c[Ei] = c[Ni] = c[Gi] = c[Oi] = c[Ai] = c[zi] = c[Ki] = c[Hi] = c[Vi] = c[Wi] = c[Li] = c[Di] = c[he] = c[ki] = c[Fi] = c[Bi] = c[Ri] = c[Yi] = c[Xi] = c[qi] = c[Zi] = !0;
c[Si] = c[ue] = c[Ui] = !1;
function B(t, e, r, n, o, i) {
  var a, l = e & wi, h = e & Ci, f = e & ji;
  if (r && (a = o ? r(t, n, o, i) : r(t)), a !== void 0)
    return a;
  if (!k(t))
    return t;
  var g = $(t);
  if (g) {
    if (a = Ko(t), !l)
      return er(t, a);
  } else {
    var C = ot(t), st = C == ue || C == Ii;
    if (qt(t))
      return xo(t, l);
    if (C == he || C == ce || st && !o) {
      if (a = h || st ? {} : Ti(t), !l)
        return h ? Ao(t, vo(a, t)) : jo(t, bo(a, t));
    } else {
      if (!c[C])
        return o ? t : {};
      a = yi(t, C, l);
    }
  }
  i || (i = new A());
  var at = i.get(t);
  if (at)
    return at;
  i.set(t, a), _i(t) ? t.forEach(function(T) {
    a.add(B(T, e, r, T, t, i));
  }) : vi(t) && t.forEach(function(T, m) {
    a.set(m, B(T, e, r, m, t, i));
  });
  var ge = f ? h ? le : So : h ? J : Z, lt = g ? void 0 : ge(t);
  return fr(lt || t, function(T, m) {
    lt && (m = T, T = t[m]), Kt(a, m, B(T, e, r, m, t, i));
  }), a;
}
function Ji(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function Qi(t, e) {
  return e.length < 2 ? t : ee(t, fo(e, 0, -1));
}
function ts(t, e) {
  return e = tt(e, t), t = Qi(t, e), t == null || delete t[te(Ji(e))];
}
function es(t) {
  return ho(t) ? void 0 : t;
}
var rs = 1, ns = 2, os = 4, is = oo(function(t, e) {
  var r = {};
  if (t == null)
    return r;
  var n = !1;
  e = Rt(e, function(i) {
    return i = tt(i, t), n || (n = i.length > 1), i;
  }), F(t, le(t), r), n && (r = B(r, rs | ns | os, es));
  for (var o = e.length; o--; )
    ts(r, e[o]);
  return r;
});
const ss = is, Lt = {
  radius: 6,
  zIndex: 0,
  strokeOpacity: 0,
  fillOpacity: 0
};
class Dt {
  constructor(e) {
    s(this, "map");
    s(this, "options", { ...Lt });
    s(this, "circleMarkers", []);
    this.map = e;
  }
  setOptions(e) {
    return this.options = { ...e, ...ss(Lt, "radius") }, this;
  }
  createCircleMarkersByPaths(e) {
    this.removeFromTheMap(), this.reset(), e.forEach((r) => {
      this.circleMarkers.push(this.createCircleMarker(r));
    }), this.addToMap();
  }
  createCircleMarker(e) {
    return new AMap.CircleMarker({ center: e, ...this.options });
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
    return this.circleMarkers.find((r) => this.isPointInCircle(e, r)) ?? null;
  }
  /**
   * 获取点是否在围栏编辑器的蓝色操作点上（即中间点）
   * @param {*} pos
   * @returns
   */
  getInCircleMarkersPoint(e) {
    const r = this.circleMarkers.find((o) => this.isPointInCircle(e, o));
    return this.circleMarkers.findIndex((o) => o === r) % 2 === 0 ? null : r ?? null;
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
const kt = {
  zIndex: 1,
  strokeColor: "#00D3FC",
  strokeWeight: 8,
  strokeOpacity: 0
};
class fe {
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
    return new AMap.Polyline({ path: e, ...kt });
  }
  addToMap() {
    this.map.add(this.lines);
  }
  removeFromTheMap() {
    this.map.remove(this.lines);
  }
  getPointInPolyline(e) {
    const r = this.map.getResolution(), n = kt.strokeWeight * r;
    return this.linesPath.find(
      (i) => AMap.GeometryUtil.isPointOnSegment(e, i[0], i[1], n)
    );
  }
  reset() {
    this.linesPath = [], this.lines = [];
  }
}
class as {
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
      const r = this.circleMarker.getCenter(), n = (g) => `${g.lng}-${g.lat}`;
      let o = this.polygonPaths.findIndex((g) => n(g) === n(r));
      if (o === -1)
        return;
      const i = this.polygonPaths.length, a = o - 1 <= -1 ? i - 1 : o - 1, l = o + 1 >= i ? 0 : o + 1, h = this.polygonPaths.at(a), f = this.polygonPaths.at(l);
      this.setPosition(h, f), this.onMouseMoveInDrawPolygon(e);
    });
    s(this, "onMovePolygonEditorMidPoint", (e) => {
      if (this.circleMarker)
        return;
      if (!this.midCircleMarker) {
        this.reset();
        return;
      }
      const r = this.midCircleMarker.getCenter(), n = (g) => `${g.lng}-${g.lat}`;
      let o = this.polygonTotalPaths.findIndex((g) => n(g) === n(r));
      if (o === -1)
        return;
      const i = this.polygonTotalPaths.length, a = o - 1 <= -1 ? i - 1 : o - 1, l = o + 1 >= i ? 0 : o + 1, h = this.polygonTotalPaths.at(a), f = this.polygonTotalPaths.at(l);
      this.setPosition(h, f), this.onMouseMoveInDrawPolygon(e);
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
      this.lineLengthText || (this.lineLengthText = j(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, E(o, i));
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
        E(this.startPosition, r)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        E(this.lastPosition, r)
      );
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, r && (this.polygonEditor = r), this.circleMarkers = new Dt(this.map), this.midCircleMarkers = new Dt(this.map), this.lines = new fe(this.map);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    return this.polygonEditor ? this.polygonEditor.getTarget().getPath() ?? [] : [];
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
        return eo(this.polygonEditor, this.editingMidTipMarkerListPath);
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
class ls {
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
      this.lineLengthText || (this.lineLengthText = j(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, E(o, i));
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, this.lines = new fe(this.map);
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
const hs = {
  PolygonRangingInDrawing: Te,
  PolygonEditorRanging: as,
  PolygonRanging: ls
};
export {
  as as PolygonEditorRanging,
  ls as PolygonRanging,
  Te as PolygonRangingInDrawing,
  hs as default
};
