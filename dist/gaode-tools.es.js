var de = Object.defineProperty;
var ye = (t, e, r) => e in t ? de(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var s = (t, e, r) => (ye(t, typeof e != "symbol" ? e + "" : e, r), r);
const Te = {
  "border-color": "#e1f5fe",
  "font-size": "12px",
  "border-radius": ".25rem",
  "background-color": "rgba(0,0,0,.4)",
  "border-width": 0,
  "text-align": "center",
  color: "#fff"
}, C = (t = "", e = {}) => new AMap.Text({ text: t, style: { ...Te, ...e }, offset: [0, -10] }), j = (t, e) => {
  const r = t.divideBy(2).add(e.divideBy(2));
  return { text: `${Math.round(t.distance(e))}米`, textPos: r };
};
let Pe = class {
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
        j(this.startPosition, r)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        j(this.lastPosition, r)
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
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = C(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText = C(), this.lastPointToCursorText.setMap(this.map));
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
var me = typeof global == "object" && global && global.Object === Object && global;
const Ft = me;
var Me = typeof self == "object" && self && self.Object === Object && self, ve = Ft || Me || Function("return this")();
const d = ve;
var be = d.Symbol;
const p = be;
var Bt = Object.prototype, xe = Bt.hasOwnProperty, Ee = Bt.toString, L = p ? p.toStringTag : void 0;
function $e(t) {
  var e = xe.call(t, L), r = t[L];
  try {
    t[L] = void 0;
    var n = !0;
  } catch {
  }
  var o = Ee.call(t);
  return n && (e ? t[L] = r : delete t[L]), o;
}
var we = Object.prototype, _e = we.toString;
function Ce(t) {
  return _e.call(t);
}
var je = "[object Null]", Ae = "[object Undefined]", ht = p ? p.toStringTag : void 0;
function b(t) {
  return t == null ? t === void 0 ? Ae : je : ht && ht in Object(t) ? $e(t) : Ce(t);
}
function x(t) {
  return t != null && typeof t == "object";
}
var Oe = "[object Symbol]";
function X(t) {
  return typeof t == "symbol" || x(t) && b(t) == Oe;
}
function Ut(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = Array(n); ++r < n; )
    o[r] = e(t[r], r, t);
  return o;
}
var Le = Array.isArray;
const E = Le;
var Se = 1 / 0, ut = p ? p.prototype : void 0, gt = ut ? ut.toString : void 0;
function Rt(t) {
  if (typeof t == "string")
    return t;
  if (E(t))
    return Ut(t, Rt) + "";
  if (X(t))
    return gt ? gt.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Se ? "-0" : e;
}
function D(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function ke(t) {
  return t;
}
var Ie = "[object AsyncFunction]", De = "[object Function]", Fe = "[object GeneratorFunction]", Be = "[object Proxy]";
function Gt(t) {
  if (!D(t))
    return !1;
  var e = b(t);
  return e == De || e == Fe || e == Ie || e == Be;
}
var Ue = d["__core-js_shared__"];
const z = Ue;
var ft = function() {
  var t = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Re(t) {
  return !!ft && ft in t;
}
var Ge = Function.prototype, ze = Ge.toString;
function $(t) {
  if (t != null) {
    try {
      return ze.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ne = /[\\^$.*+?()[\]{}|]/g, Ke = /^\[object .+?Constructor\]$/, He = Function.prototype, Ve = Object.prototype, We = He.toString, Ye = Ve.hasOwnProperty, Xe = RegExp(
  "^" + We.call(Ye).replace(Ne, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qe(t) {
  if (!D(t) || Re(t))
    return !1;
  var e = Gt(t) ? Xe : Ke;
  return e.test($(t));
}
function Ze(t, e) {
  return t == null ? void 0 : t[e];
}
function w(t, e) {
  var r = Ze(t, e);
  return qe(r) ? r : void 0;
}
var Je = w(d, "WeakMap");
const K = Je;
var pt = Object.create, Qe = function() {
  function t() {
  }
  return function(e) {
    if (!D(e))
      return {};
    if (pt)
      return pt(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
const tr = Qe;
function er(t, e, r) {
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
function rr(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
var nr = 800, or = 16, ir = Date.now;
function sr(t) {
  var e = 0, r = 0;
  return function() {
    var n = ir(), o = or - (n - r);
    if (r = n, o > 0) {
      if (++e >= nr)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function ar(t) {
  return function() {
    return t;
  };
}
var lr = function() {
  try {
    var t = w(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const U = lr;
var cr = U ? function(t, e) {
  return U(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ar(e),
    writable: !0
  });
} : ke;
const hr = cr;
var ur = sr(hr);
const gr = ur;
function fr(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
var pr = 9007199254740991, dr = /^(?:0|[1-9]\d*)$/;
function yr(t, e) {
  var r = typeof t;
  return e = e ?? pr, !!e && (r == "number" || r != "symbol" && dr.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function zt(t, e, r) {
  e == "__proto__" && U ? U(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function Nt(t, e) {
  return t === e || t !== t && e !== e;
}
var Tr = Object.prototype, Pr = Tr.hasOwnProperty;
function Kt(t, e, r) {
  var n = t[e];
  (!(Pr.call(t, e) && Nt(n, r)) || r === void 0 && !(e in t)) && zt(t, e, r);
}
function F(t, e, r, n) {
  var o = !r;
  r || (r = {});
  for (var i = -1, a = e.length; ++i < a; ) {
    var l = e[i], u = n ? n(r[l], t[l], l, r, t) : void 0;
    u === void 0 && (u = t[l]), o ? zt(r, l, u) : Kt(r, l, u);
  }
  return r;
}
var dt = Math.max;
function mr(t, e, r) {
  return e = dt(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, o = -1, i = dt(n.length - e, 0), a = Array(i); ++o < i; )
      a[o] = n[e + o];
    o = -1;
    for (var l = Array(e + 1); ++o < e; )
      l[o] = n[o];
    return l[e] = r(a), er(t, this, l);
  };
}
var Mr = 9007199254740991;
function Ht(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Mr;
}
function Vt(t) {
  return t != null && Ht(t.length) && !Gt(t);
}
var vr = Object.prototype;
function q(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || vr;
  return t === r;
}
function br(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var xr = "[object Arguments]";
function yt(t) {
  return x(t) && b(t) == xr;
}
var Wt = Object.prototype, Er = Wt.hasOwnProperty, $r = Wt.propertyIsEnumerable, wr = yt(function() {
  return arguments;
}()) ? yt : function(t) {
  return x(t) && Er.call(t, "callee") && !$r.call(t, "callee");
};
const Yt = wr;
function _r() {
  return !1;
}
var Xt = typeof exports == "object" && exports && !exports.nodeType && exports, Tt = Xt && typeof module == "object" && module && !module.nodeType && module, Cr = Tt && Tt.exports === Xt, Pt = Cr ? d.Buffer : void 0, jr = Pt ? Pt.isBuffer : void 0, Ar = jr || _r;
const qt = Ar;
var Or = "[object Arguments]", Lr = "[object Array]", Sr = "[object Boolean]", kr = "[object Date]", Ir = "[object Error]", Dr = "[object Function]", Fr = "[object Map]", Br = "[object Number]", Ur = "[object Object]", Rr = "[object RegExp]", Gr = "[object Set]", zr = "[object String]", Nr = "[object WeakMap]", Kr = "[object ArrayBuffer]", Hr = "[object DataView]", Vr = "[object Float32Array]", Wr = "[object Float64Array]", Yr = "[object Int8Array]", Xr = "[object Int16Array]", qr = "[object Int32Array]", Zr = "[object Uint8Array]", Jr = "[object Uint8ClampedArray]", Qr = "[object Uint16Array]", tn = "[object Uint32Array]", h = {};
h[Vr] = h[Wr] = h[Yr] = h[Xr] = h[qr] = h[Zr] = h[Jr] = h[Qr] = h[tn] = !0;
h[Or] = h[Lr] = h[Kr] = h[Sr] = h[Hr] = h[kr] = h[Ir] = h[Dr] = h[Fr] = h[Br] = h[Ur] = h[Rr] = h[Gr] = h[zr] = h[Nr] = !1;
function en(t) {
  return x(t) && Ht(t.length) && !!h[b(t)];
}
function Z(t) {
  return function(e) {
    return t(e);
  };
}
var Zt = typeof exports == "object" && exports && !exports.nodeType && exports, S = Zt && typeof module == "object" && module && !module.nodeType && module, rn = S && S.exports === Zt, N = rn && Ft.process, nn = function() {
  try {
    var t = S && S.require && S.require("util").types;
    return t || N && N.binding && N.binding("util");
  } catch {
  }
}();
const A = nn;
var mt = A && A.isTypedArray, on = mt ? Z(mt) : en;
const sn = on;
var an = Object.prototype, ln = an.hasOwnProperty;
function Jt(t, e) {
  var r = E(t), n = !r && Yt(t), o = !r && !n && qt(t), i = !r && !n && !o && sn(t), a = r || n || o || i, l = a ? br(t.length, String) : [], u = l.length;
  for (var g in t)
    (e || ln.call(t, g)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
    yr(g, u))) && l.push(g);
  return l;
}
function Qt(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var cn = Qt(Object.keys, Object);
const hn = cn;
var un = Object.prototype, gn = un.hasOwnProperty;
function fn(t) {
  if (!q(t))
    return hn(t);
  var e = [];
  for (var r in Object(t))
    gn.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function J(t) {
  return Vt(t) ? Jt(t) : fn(t);
}
function pn(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var dn = Object.prototype, yn = dn.hasOwnProperty;
function Tn(t) {
  if (!D(t))
    return pn(t);
  var e = q(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !yn.call(t, n)) || r.push(n);
  return r;
}
function Q(t) {
  return Vt(t) ? Jt(t, !0) : Tn(t);
}
var Pn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, mn = /^\w*$/;
function Mn(t, e) {
  if (E(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || X(t) ? !0 : mn.test(t) || !Pn.test(t) || e != null && t in Object(e);
}
var vn = w(Object, "create");
const k = vn;
function bn() {
  this.__data__ = k ? k(null) : {}, this.size = 0;
}
function xn(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var En = "__lodash_hash_undefined__", $n = Object.prototype, wn = $n.hasOwnProperty;
function _n(t) {
  var e = this.__data__;
  if (k) {
    var r = e[t];
    return r === En ? void 0 : r;
  }
  return wn.call(e, t) ? e[t] : void 0;
}
var Cn = Object.prototype, jn = Cn.hasOwnProperty;
function An(t) {
  var e = this.__data__;
  return k ? e[t] !== void 0 : jn.call(e, t);
}
var On = "__lodash_hash_undefined__";
function Ln(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = k && e === void 0 ? On : e, this;
}
function v(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
v.prototype.clear = bn;
v.prototype.delete = xn;
v.prototype.get = _n;
v.prototype.has = An;
v.prototype.set = Ln;
function Sn() {
  this.__data__ = [], this.size = 0;
}
function R(t, e) {
  for (var r = t.length; r--; )
    if (Nt(t[r][0], e))
      return r;
  return -1;
}
var kn = Array.prototype, In = kn.splice;
function Dn(t) {
  var e = this.__data__, r = R(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : In.call(e, r, 1), --this.size, !0;
}
function Fn(t) {
  var e = this.__data__, r = R(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Bn(t) {
  return R(this.__data__, t) > -1;
}
function Un(t, e) {
  var r = this.__data__, n = R(r, t);
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
y.prototype.get = Fn;
y.prototype.has = Bn;
y.prototype.set = Un;
var Rn = w(d, "Map");
const I = Rn;
function Gn() {
  this.size = 0, this.__data__ = {
    hash: new v(),
    map: new (I || y)(),
    string: new v()
  };
}
function zn(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function G(t, e) {
  var r = t.__data__;
  return zn(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Nn(t) {
  var e = G(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Kn(t) {
  return G(this, t).get(t);
}
function Hn(t) {
  return G(this, t).has(t);
}
function Vn(t, e) {
  var r = G(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function P(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
P.prototype.clear = Gn;
P.prototype.delete = Nn;
P.prototype.get = Kn;
P.prototype.has = Hn;
P.prototype.set = Vn;
var Wn = "Expected a function";
function tt(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Wn);
  var r = function() {
    var n = arguments, o = e ? e.apply(this, n) : n[0], i = r.cache;
    if (i.has(o))
      return i.get(o);
    var a = t.apply(this, n);
    return r.cache = i.set(o, a) || i, a;
  };
  return r.cache = new (tt.Cache || P)(), r;
}
tt.Cache = P;
var Yn = 500;
function Xn(t) {
  var e = tt(t, function(n) {
    return r.size === Yn && r.clear(), n;
  }), r = e.cache;
  return e;
}
var qn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zn = /\\(\\)?/g, Jn = Xn(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(qn, function(r, n, o, i) {
    e.push(o ? i.replace(Zn, "$1") : n || r);
  }), e;
});
const Qn = Jn;
function to(t) {
  return t == null ? "" : Rt(t);
}
function et(t, e) {
  return E(t) ? t : Mn(t, e) ? [t] : Qn(to(t));
}
var eo = 1 / 0;
function te(t) {
  if (typeof t == "string" || X(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -eo ? "-0" : e;
}
function ee(t, e) {
  e = et(e, t);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[te(e[r++])];
  return r && r == n ? t : void 0;
}
function re(t, e, r) {
  var n = t == null ? void 0 : ee(t, e);
  return n === void 0 ? r : n;
}
function rt(t, e) {
  for (var r = -1, n = e.length, o = t.length; ++r < n; )
    t[o + r] = e[r];
  return t;
}
var Mt = p ? p.isConcatSpreadable : void 0;
function ro(t) {
  return E(t) || Yt(t) || !!(Mt && t && t[Mt]);
}
function ne(t, e, r, n, o) {
  var i = -1, a = t.length;
  for (r || (r = ro), o || (o = []); ++i < a; ) {
    var l = t[i];
    e > 0 && r(l) ? e > 1 ? ne(l, e - 1, r, n, o) : rt(o, l) : n || (o[o.length] = l);
  }
  return o;
}
function no(t) {
  var e = t == null ? 0 : t.length;
  return e ? ne(t, 1) : [];
}
function oo(t) {
  return gr(mr(t, void 0, no), t + "");
}
var io = Qt(Object.getPrototypeOf, Object);
const nt = io;
var so = "[object Object]", ao = Function.prototype, lo = Object.prototype, oe = ao.toString, co = lo.hasOwnProperty, ho = oe.call(Object);
function uo(t) {
  if (!x(t) || b(t) != so)
    return !1;
  var e = nt(t);
  if (e === null)
    return !0;
  var r = co.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && oe.call(r) == ho;
}
function go(t, e, r) {
  var n = -1, o = t.length;
  e < 0 && (e = -e > o ? 0 : o + e), r = r > o ? o : r, r < 0 && (r += o), o = e > r ? 0 : r - e >>> 0, e >>>= 0;
  for (var i = Array(o); ++n < o; )
    i[n] = t[n + e];
  return i;
}
function fo() {
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
    if (!I || n.length < Po - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new P(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function O(t) {
  var e = this.__data__ = new y(t);
  this.size = e.size;
}
O.prototype.clear = fo;
O.prototype.delete = po;
O.prototype.get = yo;
O.prototype.has = To;
O.prototype.set = mo;
function Mo(t, e) {
  return t && F(e, J(e), t);
}
function vo(t, e) {
  return t && F(e, Q(e), t);
}
var ie = typeof exports == "object" && exports && !exports.nodeType && exports, vt = ie && typeof module == "object" && module && !module.nodeType && module, bo = vt && vt.exports === ie, bt = bo ? d.Buffer : void 0, xt = bt ? bt.allocUnsafe : void 0;
function xo(t, e) {
  if (e)
    return t.slice();
  var r = t.length, n = xt ? xt(r) : new t.constructor(r);
  return t.copy(n), n;
}
function Eo(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = 0, i = []; ++r < n; ) {
    var a = t[r];
    e(a, r, t) && (i[o++] = a);
  }
  return i;
}
function se() {
  return [];
}
var $o = Object.prototype, wo = $o.propertyIsEnumerable, Et = Object.getOwnPropertySymbols, _o = Et ? function(t) {
  return t == null ? [] : (t = Object(t), Eo(Et(t), function(e) {
    return wo.call(t, e);
  }));
} : se;
const ot = _o;
function Co(t, e) {
  return F(t, ot(t), e);
}
var jo = Object.getOwnPropertySymbols, Ao = jo ? function(t) {
  for (var e = []; t; )
    rt(e, ot(t)), t = nt(t);
  return e;
} : se;
const ae = Ao;
function Oo(t, e) {
  return F(t, ae(t), e);
}
function le(t, e, r) {
  var n = e(t);
  return E(t) ? n : rt(n, r(t));
}
function Lo(t) {
  return le(t, J, ot);
}
function ce(t) {
  return le(t, Q, ae);
}
var So = w(d, "DataView");
const H = So;
var ko = w(d, "Promise");
const V = ko;
var Io = w(d, "Set");
const W = Io;
var $t = "[object Map]", Do = "[object Object]", wt = "[object Promise]", _t = "[object Set]", Ct = "[object WeakMap]", jt = "[object DataView]", Fo = $(H), Bo = $(I), Uo = $(V), Ro = $(W), Go = $(K), M = b;
(H && M(new H(new ArrayBuffer(1))) != jt || I && M(new I()) != $t || V && M(V.resolve()) != wt || W && M(new W()) != _t || K && M(new K()) != Ct) && (M = function(t) {
  var e = b(t), r = e == Do ? t.constructor : void 0, n = r ? $(r) : "";
  if (n)
    switch (n) {
      case Fo:
        return jt;
      case Bo:
        return $t;
      case Uo:
        return wt;
      case Ro:
        return _t;
      case Go:
        return Ct;
    }
  return e;
});
const it = M;
var zo = Object.prototype, No = zo.hasOwnProperty;
function Ko(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && No.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var Ho = d.Uint8Array;
const At = Ho;
function st(t) {
  var e = new t.constructor(t.byteLength);
  return new At(e).set(new At(t)), e;
}
function Vo(t, e) {
  var r = e ? st(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var Wo = /\w*$/;
function Yo(t) {
  var e = new t.constructor(t.source, Wo.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var Ot = p ? p.prototype : void 0, Lt = Ot ? Ot.valueOf : void 0;
function Xo(t) {
  return Lt ? Object(Lt.call(t)) : {};
}
function qo(t, e) {
  var r = e ? st(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var Zo = "[object Boolean]", Jo = "[object Date]", Qo = "[object Map]", ti = "[object Number]", ei = "[object RegExp]", ri = "[object Set]", ni = "[object String]", oi = "[object Symbol]", ii = "[object ArrayBuffer]", si = "[object DataView]", ai = "[object Float32Array]", li = "[object Float64Array]", ci = "[object Int8Array]", hi = "[object Int16Array]", ui = "[object Int32Array]", gi = "[object Uint8Array]", fi = "[object Uint8ClampedArray]", pi = "[object Uint16Array]", di = "[object Uint32Array]";
function yi(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case ii:
      return st(t);
    case Zo:
    case Jo:
      return new n(+t);
    case si:
      return Vo(t, r);
    case ai:
    case li:
    case ci:
    case hi:
    case ui:
    case gi:
    case fi:
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
  return typeof t.constructor == "function" && !q(t) ? tr(nt(t)) : {};
}
var Pi = "[object Map]";
function mi(t) {
  return x(t) && it(t) == Pi;
}
var St = A && A.isMap, Mi = St ? Z(St) : mi;
const vi = Mi;
var bi = "[object Set]";
function xi(t) {
  return x(t) && it(t) == bi;
}
var kt = A && A.isSet, Ei = kt ? Z(kt) : xi;
const $i = Ei;
var wi = 1, _i = 2, Ci = 4, he = "[object Arguments]", ji = "[object Array]", Ai = "[object Boolean]", Oi = "[object Date]", Li = "[object Error]", ue = "[object Function]", Si = "[object GeneratorFunction]", ki = "[object Map]", Ii = "[object Number]", ge = "[object Object]", Di = "[object RegExp]", Fi = "[object Set]", Bi = "[object String]", Ui = "[object Symbol]", Ri = "[object WeakMap]", Gi = "[object ArrayBuffer]", zi = "[object DataView]", Ni = "[object Float32Array]", Ki = "[object Float64Array]", Hi = "[object Int8Array]", Vi = "[object Int16Array]", Wi = "[object Int32Array]", Yi = "[object Uint8Array]", Xi = "[object Uint8ClampedArray]", qi = "[object Uint16Array]", Zi = "[object Uint32Array]", c = {};
c[he] = c[ji] = c[Gi] = c[zi] = c[Ai] = c[Oi] = c[Ni] = c[Ki] = c[Hi] = c[Vi] = c[Wi] = c[ki] = c[Ii] = c[ge] = c[Di] = c[Fi] = c[Bi] = c[Ui] = c[Yi] = c[Xi] = c[qi] = c[Zi] = !0;
c[Li] = c[ue] = c[Ri] = !1;
function B(t, e, r, n, o, i) {
  var a, l = e & wi, u = e & _i, g = e & Ci;
  if (r && (a = o ? r(t, n, o, i) : r(t)), a !== void 0)
    return a;
  if (!D(t))
    return t;
  var f = E(t);
  if (f) {
    if (a = Ko(t), !l)
      return rr(t, a);
  } else {
    var _ = it(t), at = _ == ue || _ == Si;
    if (qt(t))
      return xo(t, l);
    if (_ == ge || _ == he || at && !o) {
      if (a = u || at ? {} : Ti(t), !l)
        return u ? Oo(t, vo(a, t)) : Co(t, Mo(a, t));
    } else {
      if (!c[_])
        return o ? t : {};
      a = yi(t, _, l);
    }
  }
  i || (i = new O());
  var lt = i.get(t);
  if (lt)
    return lt;
  i.set(t, a), $i(t) ? t.forEach(function(T) {
    a.add(B(T, e, r, T, t, i));
  }) : vi(t) && t.forEach(function(T, m) {
    a.set(m, B(T, e, r, m, t, i));
  });
  var pe = g ? u ? ce : Lo : u ? Q : J, ct = f ? void 0 : pe(t);
  return fr(ct || t, function(T, m) {
    ct && (m = T, T = t[m]), Kt(a, m, B(T, e, r, m, t, i));
  }), a;
}
function Ji(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function Qi(t, e) {
  return e.length < 2 ? t : ee(t, go(e, 0, -1));
}
function ts(t, e) {
  return e = et(e, t), t = Qi(t, e), t == null || delete t[te(Ji(e))];
}
function es(t) {
  return uo(t) ? void 0 : t;
}
var rs = 1, ns = 2, os = 4, is = oo(function(t, e) {
  var r = {};
  if (t == null)
    return r;
  var n = !1;
  e = Ut(e, function(i) {
    return i = et(i, t), n || (n = i.length > 1), i;
  }), F(t, ce(t), r), n && (r = B(r, rs | ns | os, es));
  for (var o = e.length; o--; )
    ts(r, e[o]);
  return r;
});
const ss = is, It = {
  radius: 6,
  zIndex: 0,
  strokeOpacity: 0,
  fillOpacity: 0
};
class Y {
  constructor(e) {
    s(this, "map");
    s(this, "options", { ...It });
    s(this, "circleMarkers", []);
    this.map = e;
  }
  setOptions(e) {
    return this.options = { ...e, ...ss(It, "radius") }, this;
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
const Dt = {
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
    return new AMap.Polyline({ path: e, ...Dt });
  }
  addToMap() {
    this.map.add(this.lines);
  }
  removeFromTheMap() {
    this.map.remove(this.lines);
  }
  getPointInPolyline(e) {
    const r = this.map.getResolution(), n = Dt.strokeWeight * r;
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
      this.lineLengthText || (this.lineLengthText = C(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, j(o, i));
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
        j(this.startPosition, r)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        j(this.lastPosition, r)
      );
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, r && (this.polygonEditor = r), this.circleMarkers = new Y(this.map), this.midCircleMarkers = new Y(this.map), this.lines = new fe(this.map);
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
        return re(this.polygonEditor, this.editingMidTipMarkerListPath);
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
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = C(), this.lastPointToCursorText = C(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText.setMap(this.map));
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
      this.lineLengthText || (this.lineLengthText = C(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, j(o, i));
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
class cs {
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
class hs extends cs {
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
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(n), !(!this.circleMarker || !this.getEvents("mousedown").length) && this.emit("mousedown", this.circleMarker, { isMid: !1 });
    });
    s(this, "onMouseMove", (r) => {
      !this.circleMarker || !this.getEvents("mousemove").length || this.emit("mousemove", this.circleMarker, r);
    });
    s(this, "onMouseUp", () => {
      !this.getEvents("mouseup").length || !this.circleMarker || (this.emit("mouseup", this.circleMarker), this.circleMarker = null);
    });
    this.map = r.map, this.polygonEditor = r, this.circleMarkers = new Y(this.map), this.start(this.polygonEditor);
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
        return re(this.polygonEditor, this.editingMidTipMarkerListPath);
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
const fs = {
  PolygonRangingInDrawing: Pe,
  PolygonEditorRanging: as,
  PolygonEditorEvent: hs,
  PolygonRanging: ls
};
export {
  hs as PolygonEditorEvent,
  as as PolygonEditorRanging,
  ls as PolygonRanging,
  Pe as PolygonRangingInDrawing,
  fs as default
};
