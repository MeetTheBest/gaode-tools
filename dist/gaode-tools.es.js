var Ie = Object.defineProperty, De = Object.defineProperties;
var Re = Object.getOwnPropertyDescriptors;
var $t = Object.getOwnPropertySymbols;
var Be = Object.prototype.hasOwnProperty, Fe = Object.prototype.propertyIsEnumerable;
var et = (t, e, n) => e in t ? Ie(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, E = (t, e) => {
  for (var n in e || (e = {}))
    Be.call(e, n) && et(t, n, e[n]);
  if ($t)
    for (var n of $t(e))
      Fe.call(e, n) && et(t, n, e[n]);
  return t;
}, nt = (t, e) => De(t, Re(e));
var a = (t, e, n) => (et(t, typeof e != "symbol" ? e + "" : e, n), n);
const Ne = {
  "border-color": "#e1f5fe",
  "font-size": "12px",
  "border-radius": ".25rem",
  "background-color": "rgba(0,0,0,.4)",
  "border-width": 0,
  "text-align": "center",
  color: "#fff"
}, N = (t = "", e = {}) => new AMap.Text({ text: t, style: E(E({}, Ne), e), offset: [0, -10] }), U = (t, e) => {
  const n = t.divideBy(2).add(e.divideBy(2));
  return { text: `${Math.round(t.distance(e))}米`, textPos: n };
};
let Ue = class {
  constructor(e) {
    a(this, "map");
    // 开始点位到鼠标位置的文本
    a(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    a(this, "lastPointToCursorText", null);
    // 起始点位
    a(this, "startPosition", null);
    // 上次点击点位
    a(this, "lastPosition", null);
    /**
     * 点图点击事件
     * @param {MapEvent} event
     */
    a(this, "getClickPosition", (e) => {
      const n = e.lnglat;
      this.startPosition ? this.startPosition && (this.lastPosition = n, this.createDistanceText()) : this.startPosition = n;
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    a(this, "onMouseMoveInDrawPolygon", (e) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const n = e.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        U(this.startPosition, n)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        U(this.lastPosition, n)
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
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = N(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText = N(), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(e, { text: n, textPos: o }) {
    e.setText(n), e.setPosition(o);
  }
  removeDistanceText() {
    var e, n;
    (e = this.startPointToCursorText) == null || e.remove(), this.startPointToCursorText = null, (n = this.lastPointToCursorText) == null || n.remove(), this.lastPointToCursorText = null;
  }
  reset() {
    return this.startPosition = null, this.lastPosition = null, this.removeDistanceText(), this;
  }
  destroy() {
    return this.reset(), this.stop(), this;
  }
};
var Ge = typeof global == "object" && global && global.Object === Object && global;
const ee = Ge;
var ze = typeof self == "object" && self && self.Object === Object && self, He = ee || ze || Function("return this")();
const C = He;
var We = C.Symbol;
const $ = We;
var ne = Object.prototype, Ke = ne.hasOwnProperty, Ve = ne.toString, W = $ ? $.toStringTag : void 0;
function Ye(t) {
  var e = Ke.call(t, W), n = t[W];
  try {
    t[W] = void 0;
    var o = !0;
  } catch (i) {
  }
  var r = Ve.call(t);
  return o && (e ? t[W] = n : delete t[W]), r;
}
var Xe = Object.prototype, Ze = Xe.toString;
function qe(t) {
  return Ze.call(t);
}
var Je = "[object Null]", Qe = "[object Undefined]", wt = $ ? $.toStringTag : void 0;
function I(t) {
  return t == null ? t === void 0 ? Qe : Je : wt && wt in Object(t) ? Ye(t) : qe(t);
}
function D(t) {
  return t != null && typeof t == "object";
}
var tn = "[object Symbol]";
function J(t) {
  return typeof t == "symbol" || D(t) && I(t) == tn;
}
function oe(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length, r = Array(o); ++n < o; )
    r[n] = e(t[n], n, t);
  return r;
}
var en = Array.isArray;
const R = en;
var nn = 1 / 0, _t = $ ? $.prototype : void 0, kt = _t ? _t.toString : void 0;
function re(t) {
  if (typeof t == "string")
    return t;
  if (R(t))
    return oe(t, re) + "";
  if (J(t))
    return kt ? kt.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -nn ? "-0" : e;
}
var on = /\s/;
function rn(t) {
  for (var e = t.length; e-- && on.test(t.charAt(e)); )
    ;
  return e;
}
var sn = /^\s+/;
function an(t) {
  return t && t.slice(0, rn(t) + 1).replace(sn, "");
}
function w(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Lt = 0 / 0, ln = /^[-+]0x[0-9a-f]+$/i, hn = /^0b[01]+$/i, cn = /^0o[0-7]+$/i, un = parseInt;
function lt(t) {
  if (typeof t == "number")
    return t;
  if (J(t))
    return Lt;
  if (w(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = w(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = an(t);
  var n = hn.test(t);
  return n || cn.test(t) ? un(t.slice(2), n ? 2 : 8) : ln.test(t) ? Lt : +t;
}
function ie(t) {
  return t;
}
var gn = "[object AsyncFunction]", pn = "[object Function]", fn = "[object GeneratorFunction]", dn = "[object Proxy]";
function se(t) {
  if (!w(t))
    return !1;
  var e = I(t);
  return e == pn || e == fn || e == gn || e == dn;
}
var yn = C["__core-js_shared__"];
const ot = yn;
var Ot = function() {
  var t = /[^.]+$/.exec(ot && ot.keys && ot.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Tn(t) {
  return !!Ot && Ot in t;
}
var Pn = Function.prototype, mn = Pn.toString;
function B(t) {
  if (t != null) {
    try {
      return mn.call(t);
    } catch (e) {
    }
    try {
      return t + "";
    } catch (e) {
    }
  }
  return "";
}
var xn = /[\\^$.*+?()[\]{}|]/g, bn = /^\[object .+?Constructor\]$/, vn = Function.prototype, Mn = Object.prototype, En = vn.toString, Cn = Mn.hasOwnProperty, $n = RegExp(
  "^" + En.call(Cn).replace(xn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wn(t) {
  if (!w(t) || Tn(t))
    return !1;
  var e = se(t) ? $n : bn;
  return e.test(B(t));
}
function _n(t, e) {
  return t == null ? void 0 : t[e];
}
function F(t, e) {
  var n = _n(t, e);
  return wn(n) ? n : void 0;
}
var kn = F(C, "WeakMap");
const ht = kn;
var At = Object.create, Ln = function() {
  function t() {
  }
  return function(e) {
    if (!w(e))
      return {};
    if (At)
      return At(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
const On = Ln;
function An(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function jn(t, e) {
  var n = -1, o = t.length;
  for (e || (e = Array(o)); ++n < o; )
    e[n] = t[n];
  return e;
}
var Sn = 800, In = 16, Dn = Date.now;
function Rn(t) {
  var e = 0, n = 0;
  return function() {
    var o = Dn(), r = In - (o - n);
    if (n = o, r > 0) {
      if (++e >= Sn)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Bn(t) {
  return function() {
    return t;
  };
}
var Fn = function() {
  try {
    var t = F(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (e) {
  }
}();
const q = Fn;
var Nn = q ? function(t, e) {
  return q(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Bn(e),
    writable: !0
  });
} : ie;
const Un = Nn;
var Gn = Rn(Un);
const ae = Gn;
function zn(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length; ++n < o && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var Hn = 9007199254740991, Wn = /^(?:0|[1-9]\d*)$/;
function Kn(t, e) {
  var n = typeof t;
  return e = e == null ? Hn : e, !!e && (n == "number" || n != "symbol" && Wn.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function le(t, e, n) {
  e == "__proto__" && q ? q(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function he(t, e) {
  return t === e || t !== t && e !== e;
}
var Vn = Object.prototype, Yn = Vn.hasOwnProperty;
function ce(t, e, n) {
  var o = t[e];
  (!(Yn.call(t, e) && he(o, n)) || n === void 0 && !(e in t)) && le(t, e, n);
}
function X(t, e, n, o) {
  var r = !n;
  n || (n = {});
  for (var i = -1, s = e.length; ++i < s; ) {
    var l = e[i], h = o ? o(n[l], t[l], l, n, t) : void 0;
    h === void 0 && (h = t[l]), r ? le(n, l, h) : ce(n, l, h);
  }
  return n;
}
var jt = Math.max;
function ue(t, e, n) {
  return e = jt(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var o = arguments, r = -1, i = jt(o.length - e, 0), s = Array(i); ++r < i; )
      s[r] = o[e + r];
    r = -1;
    for (var l = Array(e + 1); ++r < e; )
      l[r] = o[r];
    return l[e] = n(s), An(t, this, l);
  };
}
function Xn(t, e) {
  return ae(ue(t, e, ie), t + "");
}
var Zn = 9007199254740991;
function ge(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Zn;
}
function pe(t) {
  return t != null && ge(t.length) && !se(t);
}
var qn = Object.prototype;
function ft(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || qn;
  return t === n;
}
function Jn(t, e) {
  for (var n = -1, o = Array(t); ++n < t; )
    o[n] = e(n);
  return o;
}
var Qn = "[object Arguments]";
function St(t) {
  return D(t) && I(t) == Qn;
}
var fe = Object.prototype, to = fe.hasOwnProperty, eo = fe.propertyIsEnumerable, no = St(function() {
  return arguments;
}()) ? St : function(t) {
  return D(t) && to.call(t, "callee") && !eo.call(t, "callee");
};
const de = no;
function oo() {
  return !1;
}
var ye = typeof exports == "object" && exports && !exports.nodeType && exports, It = ye && typeof module == "object" && module && !module.nodeType && module, ro = It && It.exports === ye, Dt = ro ? C.Buffer : void 0, io = Dt ? Dt.isBuffer : void 0, so = io || oo;
const Te = so;
var ao = "[object Arguments]", lo = "[object Array]", ho = "[object Boolean]", co = "[object Date]", uo = "[object Error]", go = "[object Function]", po = "[object Map]", fo = "[object Number]", yo = "[object Object]", To = "[object RegExp]", Po = "[object Set]", mo = "[object String]", xo = "[object WeakMap]", bo = "[object ArrayBuffer]", vo = "[object DataView]", Mo = "[object Float32Array]", Eo = "[object Float64Array]", Co = "[object Int8Array]", $o = "[object Int16Array]", wo = "[object Int32Array]", _o = "[object Uint8Array]", ko = "[object Uint8ClampedArray]", Lo = "[object Uint16Array]", Oo = "[object Uint32Array]", g = {};
g[Mo] = g[Eo] = g[Co] = g[$o] = g[wo] = g[_o] = g[ko] = g[Lo] = g[Oo] = !0;
g[ao] = g[lo] = g[bo] = g[ho] = g[vo] = g[co] = g[uo] = g[go] = g[po] = g[fo] = g[yo] = g[To] = g[Po] = g[mo] = g[xo] = !1;
function Ao(t) {
  return D(t) && ge(t.length) && !!g[I(t)];
}
function dt(t) {
  return function(e) {
    return t(e);
  };
}
var Pe = typeof exports == "object" && exports && !exports.nodeType && exports, K = Pe && typeof module == "object" && module && !module.nodeType && module, jo = K && K.exports === Pe, rt = jo && ee.process, So = function() {
  try {
    var t = K && K.require && K.require("util").types;
    return t || rt && rt.binding && rt.binding("util");
  } catch (e) {
  }
}();
const G = So;
var Rt = G && G.isTypedArray, Io = Rt ? dt(Rt) : Ao;
const Do = Io;
var Ro = Object.prototype, Bo = Ro.hasOwnProperty;
function me(t, e) {
  var n = R(t), o = !n && de(t), r = !n && !o && Te(t), i = !n && !o && !r && Do(t), s = n || o || r || i, l = s ? Jn(t.length, String) : [], h = l.length;
  for (var c in t)
    (e || Bo.call(t, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Kn(c, h))) && l.push(c);
  return l;
}
function xe(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var Fo = xe(Object.keys, Object);
const No = Fo;
var Uo = Object.prototype, Go = Uo.hasOwnProperty;
function zo(t) {
  if (!ft(t))
    return No(t);
  var e = [];
  for (var n in Object(t))
    Go.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function yt(t) {
  return pe(t) ? me(t) : zo(t);
}
function Ho(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Wo = Object.prototype, Ko = Wo.hasOwnProperty;
function Vo(t) {
  if (!w(t))
    return Ho(t);
  var e = ft(t), n = [];
  for (var o in t)
    o == "constructor" && (e || !Ko.call(t, o)) || n.push(o);
  return n;
}
function Tt(t) {
  return pe(t) ? me(t, !0) : Vo(t);
}
var Yo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xo = /^\w*$/;
function Zo(t, e) {
  if (R(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || J(t) ? !0 : Xo.test(t) || !Yo.test(t) || e != null && t in Object(e);
}
var qo = F(Object, "create");
const V = qo;
function Jo() {
  this.__data__ = V ? V(null) : {}, this.size = 0;
}
function Qo(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var tr = "__lodash_hash_undefined__", er = Object.prototype, nr = er.hasOwnProperty;
function or(t) {
  var e = this.__data__;
  if (V) {
    var n = e[t];
    return n === tr ? void 0 : n;
  }
  return nr.call(e, t) ? e[t] : void 0;
}
var rr = Object.prototype, ir = rr.hasOwnProperty;
function sr(t) {
  var e = this.__data__;
  return V ? e[t] !== void 0 : ir.call(e, t);
}
var ar = "__lodash_hash_undefined__";
function lr(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = V && e === void 0 ? ar : e, this;
}
function S(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
S.prototype.clear = Jo;
S.prototype.delete = Qo;
S.prototype.get = or;
S.prototype.has = sr;
S.prototype.set = lr;
function hr() {
  this.__data__ = [], this.size = 0;
}
function Q(t, e) {
  for (var n = t.length; n--; )
    if (he(t[n][0], e))
      return n;
  return -1;
}
var cr = Array.prototype, ur = cr.splice;
function gr(t) {
  var e = this.__data__, n = Q(e, t);
  if (n < 0)
    return !1;
  var o = e.length - 1;
  return n == o ? e.pop() : ur.call(e, n, 1), --this.size, !0;
}
function pr(t) {
  var e = this.__data__, n = Q(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function fr(t) {
  return Q(this.__data__, t) > -1;
}
function dr(t, e) {
  var n = this.__data__, o = Q(n, t);
  return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this;
}
function _(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
_.prototype.clear = hr;
_.prototype.delete = gr;
_.prototype.get = pr;
_.prototype.has = fr;
_.prototype.set = dr;
var yr = F(C, "Map");
const Y = yr;
function Tr() {
  this.size = 0, this.__data__ = {
    hash: new S(),
    map: new (Y || _)(),
    string: new S()
  };
}
function Pr(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function tt(t, e) {
  var n = t.__data__;
  return Pr(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function mr(t) {
  var e = tt(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function xr(t) {
  return tt(this, t).get(t);
}
function br(t) {
  return tt(this, t).has(t);
}
function vr(t, e) {
  var n = tt(this, t), o = n.size;
  return n.set(t, e), this.size += n.size == o ? 0 : 1, this;
}
function L(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var o = t[e];
    this.set(o[0], o[1]);
  }
}
L.prototype.clear = Tr;
L.prototype.delete = mr;
L.prototype.get = xr;
L.prototype.has = br;
L.prototype.set = vr;
var Mr = "Expected a function";
function Pt(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Mr);
  var n = function() {
    var o = arguments, r = e ? e.apply(this, o) : o[0], i = n.cache;
    if (i.has(r))
      return i.get(r);
    var s = t.apply(this, o);
    return n.cache = i.set(r, s) || i, s;
  };
  return n.cache = new (Pt.Cache || L)(), n;
}
Pt.Cache = L;
var Er = 500;
function Cr(t) {
  var e = Pt(t, function(o) {
    return n.size === Er && n.clear(), o;
  }), n = e.cache;
  return e;
}
var $r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wr = /\\(\\)?/g, _r = Cr(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace($r, function(n, o, r, i) {
    e.push(r ? i.replace(wr, "$1") : o || n);
  }), e;
});
const kr = _r;
function Lr(t) {
  return t == null ? "" : re(t);
}
function mt(t, e) {
  return R(t) ? t : Zo(t, e) ? [t] : kr(Lr(t));
}
var Or = 1 / 0;
function be(t) {
  if (typeof t == "string" || J(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -Or ? "-0" : e;
}
function ve(t, e) {
  e = mt(e, t);
  for (var n = 0, o = e.length; t != null && n < o; )
    t = t[be(e[n++])];
  return n && n == o ? t : void 0;
}
function Me(t, e, n) {
  var o = t == null ? void 0 : ve(t, e);
  return o === void 0 ? n : o;
}
function xt(t, e) {
  for (var n = -1, o = e.length, r = t.length; ++n < o; )
    t[r + n] = e[n];
  return t;
}
var Bt = $ ? $.isConcatSpreadable : void 0;
function Ar(t) {
  return R(t) || de(t) || !!(Bt && t && t[Bt]);
}
function Ee(t, e, n, o, r) {
  var i = -1, s = t.length;
  for (n || (n = Ar), r || (r = []); ++i < s; ) {
    var l = t[i];
    e > 0 && n(l) ? e > 1 ? Ee(l, e - 1, n, o, r) : xt(r, l) : o || (r[r.length] = l);
  }
  return r;
}
function jr(t) {
  var e = t == null ? 0 : t.length;
  return e ? Ee(t, 1) : [];
}
function Sr(t) {
  return ae(ue(t, void 0, jr), t + "");
}
var Ir = xe(Object.getPrototypeOf, Object);
const bt = Ir;
var Dr = "[object Object]", Rr = Function.prototype, Br = Object.prototype, Ce = Rr.toString, Fr = Br.hasOwnProperty, Nr = Ce.call(Object);
function Ur(t) {
  if (!D(t) || I(t) != Dr)
    return !1;
  var e = bt(t);
  if (e === null)
    return !0;
  var n = Fr.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && Ce.call(n) == Nr;
}
function Gr(t, e, n) {
  var o = -1, r = t.length;
  e < 0 && (e = -e > r ? 0 : r + e), n = n > r ? r : n, n < 0 && (n += r), r = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var i = Array(r); ++o < r; )
    i[o] = t[o + e];
  return i;
}
function zr() {
  this.__data__ = new _(), this.size = 0;
}
function Hr(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Wr(t) {
  return this.__data__.get(t);
}
function Kr(t) {
  return this.__data__.has(t);
}
var Vr = 200;
function Yr(t, e) {
  var n = this.__data__;
  if (n instanceof _) {
    var o = n.__data__;
    if (!Y || o.length < Vr - 1)
      return o.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new L(o);
  }
  return n.set(t, e), this.size = n.size, this;
}
function z(t) {
  var e = this.__data__ = new _(t);
  this.size = e.size;
}
z.prototype.clear = zr;
z.prototype.delete = Hr;
z.prototype.get = Wr;
z.prototype.has = Kr;
z.prototype.set = Yr;
function Xr(t, e) {
  return t && X(e, yt(e), t);
}
function Zr(t, e) {
  return t && X(e, Tt(e), t);
}
var $e = typeof exports == "object" && exports && !exports.nodeType && exports, Ft = $e && typeof module == "object" && module && !module.nodeType && module, qr = Ft && Ft.exports === $e, Nt = qr ? C.Buffer : void 0, Ut = Nt ? Nt.allocUnsafe : void 0;
function Jr(t, e) {
  if (e)
    return t.slice();
  var n = t.length, o = Ut ? Ut(n) : new t.constructor(n);
  return t.copy(o), o;
}
function Qr(t, e) {
  for (var n = -1, o = t == null ? 0 : t.length, r = 0, i = []; ++n < o; ) {
    var s = t[n];
    e(s, n, t) && (i[r++] = s);
  }
  return i;
}
function we() {
  return [];
}
var ti = Object.prototype, ei = ti.propertyIsEnumerable, Gt = Object.getOwnPropertySymbols, ni = Gt ? function(t) {
  return t == null ? [] : (t = Object(t), Qr(Gt(t), function(e) {
    return ei.call(t, e);
  }));
} : we;
const vt = ni;
function oi(t, e) {
  return X(t, vt(t), e);
}
var ri = Object.getOwnPropertySymbols, ii = ri ? function(t) {
  for (var e = []; t; )
    xt(e, vt(t)), t = bt(t);
  return e;
} : we;
const _e = ii;
function si(t, e) {
  return X(t, _e(t), e);
}
function ke(t, e, n) {
  var o = e(t);
  return R(t) ? o : xt(o, n(t));
}
function ai(t) {
  return ke(t, yt, vt);
}
function Le(t) {
  return ke(t, Tt, _e);
}
var li = F(C, "DataView");
const ct = li;
var hi = F(C, "Promise");
const ut = hi;
var ci = F(C, "Set");
const gt = ci;
var zt = "[object Map]", ui = "[object Object]", Ht = "[object Promise]", Wt = "[object Set]", Kt = "[object WeakMap]", Vt = "[object DataView]", gi = B(ct), pi = B(Y), fi = B(ut), di = B(gt), yi = B(ht), j = I;
(ct && j(new ct(new ArrayBuffer(1))) != Vt || Y && j(new Y()) != zt || ut && j(ut.resolve()) != Ht || gt && j(new gt()) != Wt || ht && j(new ht()) != Kt) && (j = function(t) {
  var e = I(t), n = e == ui ? t.constructor : void 0, o = n ? B(n) : "";
  if (o)
    switch (o) {
      case gi:
        return Vt;
      case pi:
        return zt;
      case fi:
        return Ht;
      case di:
        return Wt;
      case yi:
        return Kt;
    }
  return e;
});
const Mt = j;
var Ti = Object.prototype, Pi = Ti.hasOwnProperty;
function mi(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && Pi.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var xi = C.Uint8Array;
const Yt = xi;
function Et(t) {
  var e = new t.constructor(t.byteLength);
  return new Yt(e).set(new Yt(t)), e;
}
function bi(t, e) {
  var n = e ? Et(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var vi = /\w*$/;
function Mi(t) {
  var e = new t.constructor(t.source, vi.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var Xt = $ ? $.prototype : void 0, Zt = Xt ? Xt.valueOf : void 0;
function Ei(t) {
  return Zt ? Object(Zt.call(t)) : {};
}
function Ci(t, e) {
  var n = e ? Et(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var $i = "[object Boolean]", wi = "[object Date]", _i = "[object Map]", ki = "[object Number]", Li = "[object RegExp]", Oi = "[object Set]", Ai = "[object String]", ji = "[object Symbol]", Si = "[object ArrayBuffer]", Ii = "[object DataView]", Di = "[object Float32Array]", Ri = "[object Float64Array]", Bi = "[object Int8Array]", Fi = "[object Int16Array]", Ni = "[object Int32Array]", Ui = "[object Uint8Array]", Gi = "[object Uint8ClampedArray]", zi = "[object Uint16Array]", Hi = "[object Uint32Array]";
function Wi(t, e, n) {
  var o = t.constructor;
  switch (e) {
    case Si:
      return Et(t);
    case $i:
    case wi:
      return new o(+t);
    case Ii:
      return bi(t, n);
    case Di:
    case Ri:
    case Bi:
    case Fi:
    case Ni:
    case Ui:
    case Gi:
    case zi:
    case Hi:
      return Ci(t, n);
    case _i:
      return new o();
    case ki:
    case Ai:
      return new o(t);
    case Li:
      return Mi(t);
    case Oi:
      return new o();
    case ji:
      return Ei(t);
  }
}
function Ki(t) {
  return typeof t.constructor == "function" && !ft(t) ? On(bt(t)) : {};
}
var Vi = "[object Map]";
function Yi(t) {
  return D(t) && Mt(t) == Vi;
}
var qt = G && G.isMap, Xi = qt ? dt(qt) : Yi;
const Zi = Xi;
var qi = "[object Set]";
function Ji(t) {
  return D(t) && Mt(t) == qi;
}
var Jt = G && G.isSet, Qi = Jt ? dt(Jt) : Ji;
const ts = Qi;
var es = 1, ns = 2, os = 4, Oe = "[object Arguments]", rs = "[object Array]", is = "[object Boolean]", ss = "[object Date]", as = "[object Error]", Ae = "[object Function]", ls = "[object GeneratorFunction]", hs = "[object Map]", cs = "[object Number]", je = "[object Object]", us = "[object RegExp]", gs = "[object Set]", ps = "[object String]", fs = "[object Symbol]", ds = "[object WeakMap]", ys = "[object ArrayBuffer]", Ts = "[object DataView]", Ps = "[object Float32Array]", ms = "[object Float64Array]", xs = "[object Int8Array]", bs = "[object Int16Array]", vs = "[object Int32Array]", Ms = "[object Uint8Array]", Es = "[object Uint8ClampedArray]", Cs = "[object Uint16Array]", $s = "[object Uint32Array]", u = {};
u[Oe] = u[rs] = u[ys] = u[Ts] = u[is] = u[ss] = u[Ps] = u[ms] = u[xs] = u[bs] = u[vs] = u[hs] = u[cs] = u[je] = u[us] = u[gs] = u[ps] = u[fs] = u[Ms] = u[Es] = u[Cs] = u[$s] = !0;
u[as] = u[Ae] = u[ds] = !1;
function Z(t, e, n, o, r, i) {
  var s, l = e & es, h = e & ns, c = e & os;
  if (n && (s = r ? n(t, o, r, i) : n(t)), s !== void 0)
    return s;
  if (!w(t))
    return t;
  var f = R(t);
  if (f) {
    if (s = mi(t), !l)
      return jn(t, s);
  } else {
    var T = Mt(t), d = T == Ae || T == ls;
    if (Te(t))
      return Jr(t, l);
    if (T == je || T == Oe || d && !r) {
      if (s = h || d ? {} : Ki(t), !l)
        return h ? si(t, Zr(s, t)) : oi(t, Xr(s, t));
    } else {
      if (!u[T])
        return r ? t : {};
      s = Wi(t, T, l);
    }
  }
  i || (i = new z());
  var p = i.get(t);
  if (p)
    return p;
  i.set(t, s), ts(t) ? t.forEach(function(P) {
    s.add(Z(P, e, n, P, t, i));
  }) : Zi(t) && t.forEach(function(P, m) {
    s.set(m, Z(P, e, n, m, t, i));
  });
  var M = c ? h ? Le : ai : h ? Tt : yt, v = f ? void 0 : M(t);
  return zn(v || t, function(P, m) {
    v && (m = P, P = t[m]), ce(s, m, Z(P, e, n, m, t, i));
  }), s;
}
var ws = function() {
  return C.Date.now();
};
const it = ws;
var _s = "Expected a function", ks = Math.max, Ls = Math.min;
function Os(t, e, n) {
  var o, r, i, s, l, h, c = 0, f = !1, T = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(_s);
  e = lt(e) || 0, w(n) && (f = !!n.leading, T = "maxWait" in n, i = T ? ks(lt(n.maxWait) || 0, e) : i, d = "trailing" in n ? !!n.trailing : d);
  function p(y) {
    var k = o, H = r;
    return o = r = void 0, c = y, s = t.apply(H, k), s;
  }
  function M(y) {
    return c = y, l = setTimeout(m, e), f ? p(y) : s;
  }
  function v(y) {
    var k = y - h, H = y - c, Ct = e - k;
    return T ? Ls(Ct, i - H) : Ct;
  }
  function P(y) {
    var k = y - h, H = y - c;
    return h === void 0 || k >= e || k < 0 || T && H >= i;
  }
  function m() {
    var y = it();
    if (P(y))
      return x(y);
    l = setTimeout(m, v(y));
  }
  function x(y) {
    return l = void 0, d && o ? p(y) : (o = r = void 0, s);
  }
  function O() {
    l !== void 0 && clearTimeout(l), c = 0, o = h = r = l = void 0;
  }
  function b() {
    return l === void 0 ? s : x(it());
  }
  function A() {
    var y = it(), k = P(y);
    if (o = arguments, r = this, h = y, k) {
      if (l === void 0)
        return M(h);
      if (T)
        return clearTimeout(l), l = setTimeout(m, e), p(h);
    }
    return l === void 0 && (l = setTimeout(m, e)), s;
  }
  return A.cancel = O, A.flush = b, A;
}
var As = "Expected a function";
function js(t, e, n) {
  if (typeof t != "function")
    throw new TypeError(As);
  return setTimeout(function() {
    t.apply(void 0, n);
  }, e);
}
var Ss = Xn(function(t, e, n) {
  return js(t, lt(e) || 0, n);
});
const st = Ss;
function Is(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function Ds(t, e) {
  return e.length < 2 ? t : ve(t, Gr(e, 0, -1));
}
function Rs(t, e) {
  return e = mt(e, t), t = Ds(t, e), t == null || delete t[be(Is(e))];
}
function Bs(t) {
  return Ur(t) ? void 0 : t;
}
var Fs = 1, Ns = 2, Us = 4, Gs = Sr(function(t, e) {
  var n = {};
  if (t == null)
    return n;
  var o = !1;
  e = oe(e, function(i) {
    return i = mt(i, t), o || (o = i.length > 1), i;
  }), X(t, Le(t), n), o && (n = Z(n, Fs | Ns | Us, Bs));
  for (var r = e.length; r--; )
    Rs(n, e[r]);
  return n;
});
const zs = Gs;
var Hs = "Expected a function";
function Ws(t, e, n) {
  var o = !0, r = !0;
  if (typeof t != "function")
    throw new TypeError(Hs);
  return w(n) && (o = "leading" in n ? !!n.leading : o, r = "trailing" in n ? !!n.trailing : r), Os(t, e, {
    leading: o,
    maxWait: e,
    trailing: r
  });
}
const Qt = {
  radius: 6,
  zIndex: 0,
  strokeOpacity: 0,
  fillOpacity: 0
};
class pt {
  constructor(e) {
    a(this, "map");
    a(this, "options", E({}, Qt));
    a(this, "circleMarkers", []);
    this.map = e;
  }
  setOptions(e) {
    return this.options = E(E({}, e), zs(Qt, "radius")), this;
  }
  createCircleMarkersByPaths(e) {
    this.removeFromTheMap(), this.reset(), e.forEach((n) => {
      this.circleMarkers.push(this.createCircleMarker(n));
    }), this.addToMap();
  }
  createCircleMarker(e) {
    return new AMap.CircleMarker(E({ center: e }, this.options));
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
    var n;
    return (n = this.circleMarkers.find((o) => this.isPointInCircle(e, o))) != null ? n : null;
  }
  /**
   * 获取点是否在围栏编辑器的蓝色操作点上（即中间点）
   * @param {*} pos
   * @returns
   */
  getInCircleMarkersPoint(e) {
    const n = this.circleMarkers.find((r) => this.isPointInCircle(e, r));
    return this.circleMarkers.findIndex((r) => r === n) % 2 === 0 ? null : n != null ? n : null;
  }
  isPointInCircle(e, n) {
    return n.contains(e);
  }
  reset() {
    this.circleMarkers = [];
  }
  destroy() {
    this.removeFromTheMap(), this.reset();
  }
}
const te = {
  zIndex: 1,
  strokeColor: "#00D3FC",
  strokeWeight: 8,
  strokeOpacity: 0
};
class Se {
  constructor(e) {
    a(this, "map");
    a(this, "linesPath", []);
    a(this, "lines", []);
    if (!e)
      throw new Error("map not found");
    this.map = e;
  }
  getLinesByPaths(e) {
    let n = 0;
    const o = e.length;
    for (; n < o; ) {
      const r = n + 1 >= o ? 0 : n + 1;
      this.linesPath.push([e[n], e[r]]), n++;
    }
    return this.linesPath;
  }
  createLinesByPaths(e) {
    this.reset(), this.getLinesByPaths(e);
  }
  createPolyLine(e) {
    return new AMap.Polyline(E({ path: e }, te));
  }
  addToMap() {
    this.map.add(this.lines);
  }
  removeFromTheMap() {
    this.map.remove(this.lines);
  }
  getPointInPolyline(e) {
    const n = this.map.getResolution(), o = te.strokeWeight * n;
    return this.linesPath.find(
      (i) => AMap.GeometryUtil.isPointOnSegment(e, i[0], i[1], o)
    );
  }
  reset() {
    this.linesPath = [], this.lines = [];
  }
}
class Ks {
  constructor(e, n) {
    a(this, "map");
    // 实点
    a(this, "circleMarkers", null);
    // 中间点
    a(this, "midCircleMarkers", null);
    // 线集合
    a(this, "lines", null);
    // 编辑器
    a(this, "polygonEditor", null);
    // 多边形路径
    a(this, "polygonPaths", []);
    // 多边形全部路径（包括中间虚电）
    a(this, "polygonTotalPaths", []);
    // 多边形
    a(this, "polygon", null);
    // 开始点位到鼠标位置的文本
    a(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    a(this, "lastPointToCursorText", null);
    // 线长的文本呢
    a(this, "lineLengthText", null);
    // 操作点
    a(this, "circleMarker", null);
    // 操作中间点
    a(this, "midCircleMarker", null);
    // 起始点位
    a(this, "startPosition", null);
    // 上次点击点位
    a(this, "lastPosition", null);
    // 兜底设置编辑中间点标记列表路径
    a(this, "editingMidTipMarkerListPath", null);
    a(this, "onPolygonEditorAdjust", ({ target: e }) => {
      this.polygonPaths = e.getPath(), this.circleMarkers.createCircleMarkersByPaths(this.polygonPaths), this.lines.createLinesByPaths(this.polygonPaths), Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      }), this.reset();
    });
    a(this, "onMouseDown", (e) => {
      const n = e.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(n), this.midCircleMarker = this.midCircleMarkers.getInCircleMarkersPoint(n);
    });
    a(this, "onMovePolygonEditorPoint", (e) => {
      if (this.midCircleMarker)
        return;
      if (!this.circleMarker) {
        this.reset();
        return;
      }
      const n = this.circleMarker.getCenter(), o = (f) => `${f.lng}-${f.lat}`;
      let r = this.polygonPaths.findIndex((f) => o(f) === o(n));
      if (r === -1)
        return;
      const i = this.polygonPaths.length, s = r - 1 <= -1 ? i - 1 : r - 1, l = r + 1 >= i ? 0 : r + 1, h = this.polygonPaths.at(s), c = this.polygonPaths.at(l);
      this.setPosition(h, c), this.onMouseMoveInDrawPolygon(e);
    });
    a(this, "onMovePolygonEditorMidPoint", (e) => {
      if (this.circleMarker)
        return;
      if (!this.midCircleMarker) {
        this.reset();
        return;
      }
      const n = this.midCircleMarker.getCenter(), o = (f) => `${f.lng}-${f.lat}`;
      let r = this.polygonTotalPaths.findIndex((f) => o(f) === o(n));
      if (r === -1)
        return;
      const i = this.polygonTotalPaths.length, s = r - 1 <= -1 ? i - 1 : r - 1, l = r + 1 >= i ? 0 : r + 1, h = this.polygonTotalPaths.at(s), c = this.polygonTotalPaths.at(l);
      this.setPosition(h, c), this.onMouseMoveInDrawPolygon(e);
    });
    a(this, "onMouseUp", () => {
      this.circleMarker = null, this.midCircleMarker = null, this.reset();
    });
    a(this, "onInPolygonEditorLine", (e) => {
      if (this.circleMarker)
        return this.removeLineDistanceText();
      const n = e.lnglat, o = this.lines.getPointInPolyline(n);
      if (!o)
        return this.removeLineDistanceText();
      const [r, i] = o;
      this.lineLengthText || (this.lineLengthText = N(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, U(r, i));
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    a(this, "onMouseMoveInDrawPolygon", (e) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const n = e.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        U(this.startPosition, n)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        U(this.lastPosition, n)
      );
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, n && (this.polygonEditor = n), this.circleMarkers = new pt(this.map), this.midCircleMarkers = new pt(this.map), this.lines = new Se(this.map);
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
    var n, o;
    const { singleRingListHandle: e } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return Me(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (n = this.polygonEditor.editingMidTipMarkerList) != null && n.length ? this.polygonEditor.editingMidTipMarkerList : e ? (o = e == null ? void 0 : e.list) == null ? void 0 : o.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const e = this.getPolygonEditorTargetPaths(), n = this.getEditingMidTipMarkerList();
    let o = 0;
    const r = [], i = e.length;
    for (; o < i; ) {
      r.push(e[o]);
      const s = n[o];
      s && r.push(s.getCenter()), o++;
    }
    return r;
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   */
  start(e) {
    var r, i, s;
    if (!e && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = e;
    const { controlPoint: n, midControlPoint: o } = this.polygonEditor;
    return this.polygonPaths = this.getPolygonEditorTargetPaths(), this.circleMarkers.setOptions(n).createCircleMarkersByPaths(this.polygonPaths), this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.setOptions(o).createCircleMarkersByPaths(this.polygonTotalPaths), this.lines.createLinesByPaths(this.polygonPaths), (r = this.polygonEditor) == null || r.on("adjust", this.onPolygonEditorAdjust), (i = this.polygonEditor) == null || i.on("removenode", this.onPolygonEditorAdjust), (s = this.polygonEditor) == null || s.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("mousemove", this.onMovePolygonEditorPoint), this.map.on("mousemove", this.onMovePolygonEditorMidPoint), this.map.on("mousemove", this.onInPolygonEditorLine), this.map.on("mouseup", this.onMouseUp), this;
  }
  /**
   * 移除多边形编辑器，可操作点位事件
   */
  stop() {
    var e, n, o;
    (e = this.polygonEditor) == null || e.off("adjust", this.onPolygonEditorAdjust), (n = this.polygonEditor) == null || n.off("removenode", this.onPolygonEditorAdjust), (o = this.polygonEditor) == null || o.off("addnode", this.onPolygonEditorAdjust), this.map.off("mousedown", this.onMouseDown), this.map.off("mousemove", this.onMovePolygonEditorPoint), this.map.off("mousemove", this.onMovePolygonEditorMidPoint), this.map.off("mousemove", this.onInPolygonEditorLine), this.map.off("mouseup", this.onMouseUp);
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
  setPosition(e, n) {
    this.startPosition = e, this.lastPosition = n, this.createDistanceText();
  }
  /**
   * 创建距离文本
   * @returns
   */
  createDistanceText() {
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = N(), this.lastPointToCursorText = N(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(e, { text: n, textPos: o }) {
    e.setText(n), e.setPosition(o);
  }
  removeLineDistanceText() {
    var e;
    (e = this.lineLengthText) == null || e.remove(), this.lineLengthText = null;
  }
  removeDistanceText() {
    var e, n;
    (e = this.startPointToCursorText) == null || e.remove(), (n = this.lastPointToCursorText) == null || n.remove(), this.startPointToCursorText = null, this.lastPointToCursorText = null;
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
class Vs {
  constructor(e) {
    a(this, "map");
    // 线集合
    a(this, "lines", null);
    // 多边形
    a(this, "polygon", null);
    // 线长的文本呢
    a(this, "lineLengthText", null);
    // 兜底设置编辑中间点标记列表路径
    a(this, "editingMidTipMarkerListPath", null);
    a(this, "onPolygonRanging", (e) => {
      const n = e.lnglat, o = this.lines.getPointInPolyline(n);
      if (!o)
        return this.removeLineDistanceText();
      const [r, i] = o;
      this.lineLengthText || (this.lineLengthText = N(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, U(r, i));
    });
    if (!e)
      throw new Error("map not found!");
    this.map = e, this.lines = new Se(this.map);
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
  updateDistanceText(e, { text: n, textPos: o }) {
    e.setText(n), e.setPosition(o);
  }
  removeLineDistanceText() {
    var e;
    (e = this.lineLengthText) == null || e.remove(), this.lineLengthText = null;
  }
  /**
   * 拖拽结束后，需要重新计算一下点位数据
   */
  // private onDragEnd() {
  //     //
  // }
  destroy() {
    return this.polygon = null, this.stop(), this.removeLineDistanceText(), this;
  }
}
class Ys {
  constructor() {
    a(this, "events", {});
  }
  getEvents(e) {
    return this.events[e] || (this.events[e] = []), this.events[e];
  }
  emit(e, ...n) {
    this.getEvents(e).forEach((r) => r(...n));
  }
  on(e, n) {
    !e || typeof e != "string" || this.getEvents(e).push(n);
  }
  once(e, n) {
    if (!e || typeof e != "string")
      return;
    const o = (r) => {
      n(r), this.off(e, o);
    };
    this.on(e, o);
  }
  off(e, n) {
    !e || typeof e != "string" || (this.events[e] = this.getEvents(e).filter((o) => o !== n));
  }
  hasEvents(e, n) {
    return !!this.getEvents(e).find((o) => o === n);
  }
  clearEvents(e) {
    e ? this.events[e] = [] : this.events = {};
  }
}
class Xs extends Ys {
  constructor(n) {
    super();
    a(this, "map");
    // 全部点
    a(this, "circleMarkers", null);
    // 编辑器
    a(this, "polygonEditor", null);
    // 多边形全部路径（包括中间点）
    a(this, "polygonTotalPaths", []);
    // 操作点
    a(this, "circleMarker", null);
    // 兜底设置编辑中间点标记列表路径
    a(this, "editingMidTipMarkerListPath", null);
    a(this, "onPolygonEditorAdjust", () => {
      Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      });
    });
    a(this, "onMouseDown", (n) => {
      const o = n.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(o), !(!this.circleMarker || !this.getEvents("mousedown").length) && this.emit("mousedown", this.circleMarker);
    });
    a(this, "onMouseMove", (n) => {
      !this.circleMarker || !this.getEvents("mousemove").length || this.emit("mousemove", this.circleMarker, n);
    });
    // private onMouseOut = (event: Common.Event) => {
    //     if (!this.circleMarker) return;
    //     const events = this.getEvents('mouseout');
    //     if (!events.length) return;
    //     this.emit('mouseout', this.circleMarker, event);
    // };
    a(this, "onMouseUp", () => {
      !this.getEvents("mouseup").length || !this.circleMarker || (this.emit("mouseup", this.circleMarker), this.circleMarker = null);
    });
    this.map = n.map, this.polygonEditor = n, this.circleMarkers = new pt(this.map), this.start(this.polygonEditor);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var n;
    return this.polygonEditor ? (n = this.polygonEditor.getTarget().getPath()) != null ? n : [] : [];
  }
  /**
   * 
   */
  setEditingMidTipMarkerListPath(n) {
    return this.editingMidTipMarkerListPath = n, this;
  }
  /**
   * 获取编辑中间点标记列表
   * @returns 
   */
  getEditingMidTipMarkerList() {
    var o, r;
    const { singleRingListHandle: n } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return Me(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (o = this.polygonEditor.editingMidTipMarkerList) != null && o.length ? this.polygonEditor.editingMidTipMarkerList : n ? (r = n == null ? void 0 : n.list) == null ? void 0 : r.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const n = this.getPolygonEditorTargetPaths(), o = this.getEditingMidTipMarkerList();
    let r = 0;
    const i = [], s = n.length;
    for (; r < s; ) {
      i.push(n[r]);
      const l = o[r];
      l && i.push(l.getCenter()), r++;
    }
    return i;
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   */
  start(n) {
    var r, i, s;
    if (!n && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = n;
    const { midControlPoint: o } = this.polygonEditor;
    return this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.setOptions(o).createCircleMarkersByPaths(this.polygonTotalPaths), (r = this.polygonEditor) == null || r.on("adjust", this.onPolygonEditorAdjust), (i = this.polygonEditor) == null || i.on("removenode", this.onPolygonEditorAdjust), (s = this.polygonEditor) == null || s.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("mousemove", this.onMouseMove), this.map.on("mouseup", this.onMouseUp), this;
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
class Zs {
  constructor(e) {
    a(this, "opts");
    a(this, "map");
    a(this, "width");
    a(this, "height");
    a(this, "center");
    a(this, "leftTop");
    // 左上点
    a(this, "rightTop");
    // 右上点
    a(this, "leftBottom");
    // 左下点
    a(this, "rightBottom");
    // 右下点
    a(this, "likeRectangle");
    return this.bindOptsToSelf(e), e.path || this.setPoints(), this.create();
  }
  bindOptsToSelf(e) {
    this.opts = e, Object.entries(e).forEach(([n, o]) => {
      this[n] = o;
    });
  }
  calcPoints(e) {
    const [n, o] = e || this.center, r = new AMap.LngLat(n, o), i = Math.floor(this.width / 2), s = Math.floor(this.height / 2), l = r.offset(-i / 2, s / 2), h = r.offset(i / 2, s / 2), c = r.offset(-i / 2, -s / 2), f = r.offset(i / 2, -s / 2);
    return {
      leftTop: [l.lng, l.lat],
      rightTop: [h.lng, h.lat],
      leftBottom: [c.lng, c.lat],
      rightBottom: [f.lng, f.lat]
    };
  }
  setCenter(e) {
    this.likeRectangle.likeRectangleCenter = this.center = e;
  }
  setPoints() {
    const { leftTop: e, rightTop: n, leftBottom: o, rightBottom: r } = this.calcPoints();
    this.leftTop = e, this.rightTop = n, this.leftBottom = o, this.rightBottom = r;
  }
  create() {
    var n, o, r;
    const e = ((n = this.opts) == null ? void 0 : n.path) || [this.leftTop, this.rightTop, this.rightBottom, this.leftBottom];
    if (this.likeRectangle = new AMap.Polygon(), this.likeRectangle.setOptions(E({ path: e }, this.opts)), this.enhanceProperty(), this.registryEvent(), (o = this.opts) != null && o.path) {
      const [i, s, l, h] = (r = this.opts) == null ? void 0 : r.path;
      this.updatePoints(i, s, l, h);
    }
    return this.likeRectangle;
  }
  enhanceProperty() {
    this.likeRectangle.likeRectangle = this, this.likeRectangle.leftTop = this.leftTop, this.likeRectangle.rightTop = this.rightTop, this.likeRectangle.rightBottom = this.rightBottom, this.likeRectangle.leftBottom = this.leftBottom, this.likeRectangle.likeRectangleCenter = this.center;
  }
  registryEvent() {
    this.likeRectangle && (this.onDragEnd = this.onDragEnd.bind(this), this.likeRectangle.on("dragend", this.onDragEnd));
  }
  onDragEnd(e) {
    const o = e.target.getPath(), [r, i, s, l] = o;
    this.updatePoints(r, i, s, l);
  }
  updatePoints(e, n, o, r) {
    this.likeRectangle.leftTop = this.leftTop = e, this.likeRectangle.rightTop = this.rightTop = n, this.likeRectangle.rightBottom = this.rightBottom = o, this.likeRectangle.leftBottom = this.leftBottom = r, this.setCenter(this.getCenter());
  }
  getCenter() {
    var n;
    return (n = this.map.getFitZoomAndCenterByOverlays([this.likeRectangle])) == null ? void 0 : n.pop();
  }
}
const at = 10;
class qs {
  constructor(e, n, o) {
    a(this, "point");
    a(this, "points");
    a(this, "center");
    a(this, "context");
    a(this, "isEnabled", !1);
    this.context = e, this.point = n, this.points = o, this.init(), this.clearClientEvent();
  }
  get len() {
    return this.points.length - 1;
  }
  get extData() {
    return this.point.getExtData();
  }
  get idx() {
    return this.extData.idx;
  }
  get map() {
    return this.context.map;
  }
  get xAxisMax() {
    return document.body.clientWidth;
  }
  get yAxisMax() {
    return document.body.clientHeight;
  }
  enable() {
    this.isEnabled || (this.isEnabled = !0, this.setCursorPointer("move"), this.registryEvent());
  }
  disable() {
    this.isEnabled = !1, this.setCursorPointer("pointer"), this.destroyEvent();
  }
  setCursorPointer(e) {
    var n;
    (n = this.point) == null || n.setOptions({ cursor: e });
  }
  init() {
    this.center = this.point.getCenter(), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onDragStart = this.onDragStart.bind(this), this.onDragging = Ws(this.onDragging.bind(this), 100), this.onDragEnd = this.onDragEnd.bind(this), this.defaultRegistryEvent();
  }
  clearClientEvent() {
    this.point.clearEvents("click");
  }
  defaultRegistryEvent() {
    this.point.on("mouseover", this.onMouseOver), this.point.on("mouseout", this.onMouseOut);
  }
  registryEvent() {
    this.point.on("dragstart", this.onDragStart), this.point.on("dragend", this.onDragEnd), console.log("注册完成");
  }
  destroyEvent() {
    this.point.off("dragstart", this.onDragStart), this.point.off("dragend", this.onDragEnd);
  }
  onMouseOver() {
    console.log(`点位${this.extData.idx} 移入`), this.enable();
  }
  onMouseOut() {
    console.log(`点位${this.extData.idx} 移出`), this.disable();
  }
  onDragStart(e) {
    console.log(`点位${this.extData.idx} 移动开始`), st(this.context.onChange, at, e);
  }
  onDragging(e) {
    const { pixel: n } = e;
    this.updateNextLeftPoint(n, e), this.updateNextRightPoint(n, e), st(this.context.onChange, at, e);
  }
  onDragEnd(e) {
    const { target: n, pixel: o } = e;
    this.updateNextLeftPoint(o, e), this.updateNextRightPoint(o, e), this.center = n.getCenter(), st(this.context.onChange, at, e);
  }
  /**
   * 更新下一个左节点位置
   */
  updateNextLeftPoint(e, n) {
    const o = this.idx - 1 >= 0 ? this.idx - 1 : this.len, r = this.points[o], i = this.map.lngLatToContainer(r.getCenter()), s = this.map.lngLatToContainer(this.center), l = (s.y - i.y) / (s.x - i.x), h = s.y - l * s.x, c = o - 1 >= 0 ? o - 1 : this.len, f = this.points[c], T = this.map.lngLatToContainer(f.getCenter()), d = -1 / l;
    let p = T.y - d * T.x;
    const M = i.y - d * i.x - p;
    console.log("updateNextLeftPoint 验证", M), Math.abs(M) >= 0.1 && (console.log("=== updateNextLeftPoint 矫正 b2 值 ==="), console.log(`矫正前 b2 = ${p}`), p += M, console.log(`矫正后 b2 = ${p}`), console.log("updateNextLeftPoint 矫正后验证", i.y - d * i.x - p));
    const v = l, P = e.y - v * e.x;
    let m = [], x = 0;
    for (; x < this.xAxisMax; ) {
      const O = d * x + p, b = O - v * x - P;
      if (-2 <= b && b <= 2)
        if (m.push(b), -0.01 <= b && b <= 0.01) {
          console.log("updateNextLeftPoint.val ===>", b);
          const A = new AMap.Pixel(x, O);
          this.dispatch(r, A, n.originEvent);
          break;
        } else
          x += 5e-3;
      else
        x += 0.5;
    }
    x >= this.xAxisMax && (console.log(m), console.error("updateNextLeftPoint ===> 未找到交点"), console.log("k1 ===>", l), console.log("b1 ===>", h), console.log("验证", i.y - l * i.x - h), console.log("k2 ===>", d), console.log("b2 ===>", p), console.log("验证", i.y - d * i.x - p), console.log("k3 ===>", v), console.log("b3 ===>", P));
  }
  /**
   * 更新下一个右节点位置
   */
  updateNextRightPoint(e, n) {
    const o = this.idx + 1 <= this.len ? this.idx + 1 : 0, r = this.points[o], i = this.map.lngLatToContainer(r.getCenter()), s = this.map.lngLatToContainer(this.center), l = (s.y - i.y) / (s.x - i.x), h = s.y - l * s.x, c = o + 1 <= this.len ? o + 1 : 0, f = this.points[c], T = this.map.lngLatToContainer(f.getCenter()), d = -1 / l;
    let p = T.y - d * T.x;
    const M = i.y - d * i.x - p;
    console.log("updateNextRightPoint 验证", M), Math.abs(M) >= 0.01 && (console.log("=== updateNextRightPoint 矫正 b2 值 ==="), console.log(`矫正前 b2 = ${p}`), p += M, console.log(`矫正后 b2 = ${p}`));
    const v = l, P = e.y - v * e.x, m = [];
    let x = 0;
    for (; x < this.xAxisMax; ) {
      const O = d * x + p, b = O - v * x - P;
      if (-2 < b && b < 2)
        if (m.push(b), -0.01 <= b && b <= 0.01) {
          console.log("updateNextRightPoint.val ===>", b);
          const A = new AMap.Pixel(x, O);
          this.dispatch(r, A, n.originEvent);
          break;
        } else
          x += 5e-3;
      else
        x += 0.5;
    }
    x >= this.xAxisMax && (console.log(m), console.error("updateNextRightPoint ===> 未找到交点"), console.log("k1 ===>", l), console.log("b1 ===>", h), console.log("验证", i.y - l * i.x - h), console.log("k2 ===>", d), console.log("b2 ===>", p), console.log("验证", i.y - d * i.x - p), console.log("k3 ===>", v), console.log("b3 ===>", P), console.log("验证", e.y - v * e.x - P));
  }
  dispatch(e, n, o) {
    const i = {
      lnglat: this.map.containerToLngLat(n),
      originEvent: o
      // 这里的鼠标事件直接透传即可
    };
    e.emit("dragend", i);
  }
}
class Js {
  constructor(e, n, o) {
    a(this, "opts");
    a(this, "map");
    a(this, "likeRectangle");
    a(this, "polygonEditor");
    a(this, "polygonEditorOpen");
    a(this, "controlPoints");
    return this.map = e, this.likeRectangle = n, this.opts = o, this.onChange = this.onChange.bind(this), this.createEditor();
  }
  get options() {
    return nt(E({}, this.opts), {
      midControlPoint: { radius: 0 }
    });
  }
  /**
   * 重新 polygonEditor.open 方法
   */
  open() {
    this.polygonEditorOpen(), this.controlPointRegistryEvent();
  }
  findControlPoint(e) {
    return this.controlPoints.find((n) => {
      const o = n.point.getCenter(), r = `${o.lng}_${o.lat}`, i = e.getCenter(), s = `${i.lng}_${i.lat}`;
      return r === s;
    });
  }
  createEditor() {
    const e = this.likeRectangle;
    return this.polygonEditor = new AMap.PolygonEditor(this.map, e, this.options), this.enhanceProperty(), this.polygonEditor;
  }
  enhanceProperty() {
    this.polygonEditor.likeRectangleEditor = this, this.polygonEditorOpen = this.polygonEditor.open, this.polygonEditor.open = this.open.bind(this);
  }
  controlPointRegistryEvent() {
    var n, o, r, i;
    const e = (i = (r = (o = (n = this.polygonEditor) == null ? void 0 : n.singleRingListHandle) == null ? void 0 : o.list) == null ? void 0 : r.editingVertexMarkerList) != null ? i : [];
    this.controlPoints = e.map((s, l) => {
      const h = s.getExtData() || {};
      return s.setExtData(nt(E({}, h), { idx: l })), new qs(this, s, e);
    });
  }
  onChange() {
    var e, n;
    this.updateCenterMarker(), this.updateLikeRectanglePath(), (n = (e = this.opts).onChange) == null || n.call(e);
  }
  updateCenterMarker() {
  }
  updateLikeRectanglePath() {
    const [
      e,
      n,
      o,
      r
    ] = this.controlPoints, i = e.point.getCenter(), s = n.point.getCenter(), l = o.point.getCenter(), h = r.point.getCenter();
    this.likeRectangle.likeRectangle.updatePoints(
      [i.lng, i.lat],
      [s.lng, s.lat],
      [l.lng, l.lat],
      [h.lng, h.lat]
    );
  }
}
const ea = {
  PolygonRangingInDrawing: Ue,
  PolygonEditorRanging: Ks,
  PolygonEditorEvent: Xs,
  PolygonRanging: Vs,
  LikeRectangle: Zs,
  LikeRectangleEditor: Js
};
export {
  Zs as LikeRectangle,
  Js as LikeRectangleEditor,
  Xs as PolygonEditorEvent,
  Ks as PolygonEditorRanging,
  Vs as PolygonRanging,
  Ue as PolygonRangingInDrawing,
  ea as default
};
