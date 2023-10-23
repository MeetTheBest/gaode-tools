var jl = Object.defineProperty, Yl = Object.defineProperties;
var Wl = Object.getOwnPropertyDescriptors;
var ja = Object.getOwnPropertySymbols;
var Xl = Object.prototype.hasOwnProperty, Hl = Object.prototype.propertyIsEnumerable;
var jn = (t, r, e) => r in t ? jl(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, Yt = (t, r) => {
  for (var e in r || (r = {}))
    Xl.call(r, e) && jn(t, e, r[e]);
  if (ja)
    for (var e of ja(r))
      Hl.call(r, e) && jn(t, e, r[e]);
  return t;
}, Yn = (t, r) => Yl(t, Wl(r));
var B = (t, r, e) => (jn(t, typeof r != "symbol" ? r + "" : r, e), e);
var hr = (t, r, e) => new Promise((n, i) => {
  var a = (u) => {
    try {
      s(e.next(u));
    } catch (l) {
      i(l);
    }
  }, o = (u) => {
    try {
      s(e.throw(u));
    } catch (l) {
      i(l);
    }
  }, s = (u) => u.done ? n(u.value) : Promise.resolve(u.value).then(a, o);
  s((e = e.apply(t, r)).next());
});
const Vl = {
  "border-color": "#e1f5fe",
  "font-size": "12px",
  "border-radius": ".25rem",
  "background-color": "rgba(0,0,0,.4)",
  "border-width": 0,
  "text-align": "center",
  color: "#fff"
}, Wn = () => Math.random().toString(16).substring(2), Ya = (t, r = 2) => Number.isNaN(+t) ? t : +t.toFixed(Math.max(r, 0)), Zr = (t = "", r = {}) => new AMap.Text({ text: t, style: Yt(Yt({}, Vl), r), offset: [0, -10] }), Jr = (t, r) => {
  const e = t.divideBy(2).add(r.divideBy(2));
  return { text: `${Math.round(t.distance(r))}米`, textPos: e };
};
let ql = class {
  constructor(r) {
    B(this, "map");
    // 开始点位到鼠标位置的文本
    B(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    B(this, "lastPointToCursorText", null);
    // 起始点位
    B(this, "startPosition", null);
    // 上次点击点位
    B(this, "lastPosition", null);
    /**
     * 点图点击事件
     * @param {MapEvent} event
     */
    B(this, "getClickPosition", (r) => {
      const e = r.lnglat;
      this.startPosition ? this.startPosition && (this.lastPosition = e, this.createDistanceText()) : this.startPosition = e;
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    B(this, "onMouseMoveInDrawPolygon", (r) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const e = r.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        Jr(this.startPosition, e)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        Jr(this.lastPosition, e)
      );
    });
    if (!r)
      throw new Error("map not found!");
    this.map = r;
  }
  /**
  * 注册地图事件
  */
  open() {
    this.start();
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
  close() {
    this.stop();
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
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = Zr(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText = Zr(), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(r, { text: e, textPos: n }) {
    r.setText(e), r.setPosition(n);
  }
  removeDistanceText() {
    var r, e;
    (r = this.startPointToCursorText) == null || r.remove(), this.startPointToCursorText = null, (e = this.lastPointToCursorText) == null || e.remove(), this.lastPointToCursorText = null;
  }
  reset() {
    return this.startPosition = null, this.lastPosition = null, this.removeDistanceText(), this;
  }
  destroy() {
    return this.reset(), this.stop(), this;
  }
};
var Ul = typeof global == "object" && global && global.Object === Object && global;
const vs = Ul;
var Kl = typeof self == "object" && self && self.Object === Object && self, Zl = vs || Kl || Function("return this")();
const tr = Zl;
var Jl = tr.Symbol;
const nr = Jl;
var ps = Object.prototype, Ql = ps.hasOwnProperty, tf = ps.toString, he = nr ? nr.toStringTag : void 0;
function rf(t) {
  var r = Ql.call(t, he), e = t[he];
  try {
    t[he] = void 0;
    var n = !0;
  } catch (a) {
  }
  var i = tf.call(t);
  return n && (r ? t[he] = e : delete t[he]), i;
}
var ef = Object.prototype, nf = ef.toString;
function af(t) {
  return nf.call(t);
}
var of = "[object Null]", sf = "[object Undefined]", Wa = nr ? nr.toStringTag : void 0;
function Gr(t) {
  return t == null ? t === void 0 ? sf : of : Wa && Wa in Object(t) ? rf(t) : af(t);
}
function Lr(t) {
  return t != null && typeof t == "object";
}
var uf = "[object Symbol]";
function Sn(t) {
  return typeof t == "symbol" || Lr(t) && Gr(t) == uf;
}
function ds(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length, i = Array(n); ++e < n; )
    i[e] = r(t[e], e, t);
  return i;
}
var lf = Array.isArray;
const Fr = lf;
var ff = 1 / 0, Xa = nr ? nr.prototype : void 0, Ha = Xa ? Xa.toString : void 0;
function hs(t) {
  if (typeof t == "string")
    return t;
  if (Fr(t))
    return ds(t, hs) + "";
  if (Sn(t))
    return Ha ? Ha.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -ff ? "-0" : r;
}
var cf = /\s/;
function vf(t) {
  for (var r = t.length; r-- && cf.test(t.charAt(r)); )
    ;
  return r;
}
var pf = /^\s+/;
function df(t) {
  return t && t.slice(0, vf(t) + 1).replace(pf, "");
}
function lr(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
var Va = 0 / 0, hf = /^[-+]0x[0-9a-f]+$/i, gf = /^0b[01]+$/i, mf = /^0o[0-7]+$/i, yf = parseInt;
function qa(t) {
  if (typeof t == "number")
    return t;
  if (Sn(t))
    return Va;
  if (lr(t)) {
    var r = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = lr(r) ? r + "" : r;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = df(t);
  var e = gf.test(t);
  return e || mf.test(t) ? yf(t.slice(2), e ? 2 : 8) : hf.test(t) ? Va : +t;
}
function xf(t) {
  return t;
}
var bf = "[object AsyncFunction]", Ef = "[object Function]", Sf = "[object GeneratorFunction]", Cf = "[object Proxy]";
function gs(t) {
  if (!lr(t))
    return !1;
  var r = Gr(t);
  return r == Ef || r == Sf || r == bf || r == Cf;
}
var _f = tr["__core-js_shared__"];
const Xn = _f;
var Ua = function() {
  var t = /[^.]+$/.exec(Xn && Xn.keys && Xn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Mf(t) {
  return !!Ua && Ua in t;
}
var Tf = Function.prototype, Pf = Tf.toString;
function Nr(t) {
  if (t != null) {
    try {
      return Pf.call(t);
    } catch (r) {
    }
    try {
      return t + "";
    } catch (r) {
    }
  }
  return "";
}
var Df = /[\\^$.*+?()[\]{}|]/g, wf = /^\[object .+?Constructor\]$/, Rf = Function.prototype, Of = Object.prototype, If = Rf.toString, kf = Of.hasOwnProperty, Af = RegExp(
  "^" + If.call(kf).replace(Df, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Bf(t) {
  if (!lr(t) || Mf(t))
    return !1;
  var r = gs(t) ? Af : wf;
  return r.test(Nr(t));
}
function zf(t, r) {
  return t == null ? void 0 : t[r];
}
function $r(t, r) {
  var e = zf(t, r);
  return Bf(e) ? e : void 0;
}
var Gf = $r(tr, "WeakMap");
const si = Gf;
var Ka = Object.create, Lf = function() {
  function t() {
  }
  return function(r) {
    if (!lr(r))
      return {};
    if (Ka)
      return Ka(r);
    t.prototype = r;
    var e = new t();
    return t.prototype = void 0, e;
  };
}();
const Ff = Lf;
function Nf(t, r, e) {
  switch (e.length) {
    case 0:
      return t.call(r);
    case 1:
      return t.call(r, e[0]);
    case 2:
      return t.call(r, e[0], e[1]);
    case 3:
      return t.call(r, e[0], e[1], e[2]);
  }
  return t.apply(r, e);
}
function $f(t, r) {
  var e = -1, n = t.length;
  for (r || (r = Array(n)); ++e < n; )
    r[e] = t[e];
  return r;
}
var jf = 800, Yf = 16, Wf = Date.now;
function Xf(t) {
  var r = 0, e = 0;
  return function() {
    var n = Wf(), i = Yf - (n - e);
    if (e = n, i > 0) {
      if (++r >= jf)
        return arguments[0];
    } else
      r = 0;
    return t.apply(void 0, arguments);
  };
}
function Hf(t) {
  return function() {
    return t;
  };
}
var Vf = function() {
  try {
    var t = $r(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (r) {
  }
}();
const fn = Vf;
var qf = fn ? function(t, r) {
  return fn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Hf(r),
    writable: !0
  });
} : xf;
const Uf = qf;
var Kf = Xf(Uf);
const Zf = Kf;
function Jf(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length; ++e < n && r(t[e], e, t) !== !1; )
    ;
  return t;
}
var Qf = 9007199254740991, tc = /^(?:0|[1-9]\d*)$/;
function rc(t, r) {
  var e = typeof t;
  return r = r == null ? Qf : r, !!r && (e == "number" || e != "symbol" && tc.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
function ms(t, r, e) {
  r == "__proto__" && fn ? fn(t, r, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[r] = e;
}
function ys(t, r) {
  return t === r || t !== t && r !== r;
}
var ec = Object.prototype, nc = ec.hasOwnProperty;
function xs(t, r, e) {
  var n = t[r];
  (!(nc.call(t, r) && ys(n, e)) || e === void 0 && !(r in t)) && ms(t, r, e);
}
function Be(t, r, e, n) {
  var i = !e;
  e || (e = {});
  for (var a = -1, o = r.length; ++a < o; ) {
    var s = r[a], u = n ? n(e[s], t[s], s, e, t) : void 0;
    u === void 0 && (u = t[s]), i ? ms(e, s, u) : xs(e, s, u);
  }
  return e;
}
var Za = Math.max;
function ic(t, r, e) {
  return r = Za(r === void 0 ? t.length - 1 : r, 0), function() {
    for (var n = arguments, i = -1, a = Za(n.length - r, 0), o = Array(a); ++i < a; )
      o[i] = n[r + i];
    i = -1;
    for (var s = Array(r + 1); ++i < r; )
      s[i] = n[i];
    return s[r] = e(o), Nf(t, this, s);
  };
}
var ac = 9007199254740991;
function bs(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ac;
}
function Es(t) {
  return t != null && bs(t.length) && !gs(t);
}
var oc = Object.prototype;
function $i(t) {
  var r = t && t.constructor, e = typeof r == "function" && r.prototype || oc;
  return t === e;
}
function sc(t, r) {
  for (var e = -1, n = Array(t); ++e < t; )
    n[e] = r(e);
  return n;
}
var uc = "[object Arguments]";
function Ja(t) {
  return Lr(t) && Gr(t) == uc;
}
var Ss = Object.prototype, lc = Ss.hasOwnProperty, fc = Ss.propertyIsEnumerable, cc = Ja(function() {
  return arguments;
}()) ? Ja : function(t) {
  return Lr(t) && lc.call(t, "callee") && !fc.call(t, "callee");
};
const Cs = cc;
function vc() {
  return !1;
}
var _s = typeof exports == "object" && exports && !exports.nodeType && exports, Qa = _s && typeof module == "object" && module && !module.nodeType && module, pc = Qa && Qa.exports === _s, to = pc ? tr.Buffer : void 0, dc = to ? to.isBuffer : void 0, hc = dc || vc;
const Ms = hc;
var gc = "[object Arguments]", mc = "[object Array]", yc = "[object Boolean]", xc = "[object Date]", bc = "[object Error]", Ec = "[object Function]", Sc = "[object Map]", Cc = "[object Number]", _c = "[object Object]", Mc = "[object RegExp]", Tc = "[object Set]", Pc = "[object String]", Dc = "[object WeakMap]", wc = "[object ArrayBuffer]", Rc = "[object DataView]", Oc = "[object Float32Array]", Ic = "[object Float64Array]", kc = "[object Int8Array]", Ac = "[object Int16Array]", Bc = "[object Int32Array]", zc = "[object Uint8Array]", Gc = "[object Uint8ClampedArray]", Lc = "[object Uint16Array]", Fc = "[object Uint32Array]", mt = {};
mt[Oc] = mt[Ic] = mt[kc] = mt[Ac] = mt[Bc] = mt[zc] = mt[Gc] = mt[Lc] = mt[Fc] = !0;
mt[gc] = mt[mc] = mt[wc] = mt[yc] = mt[Rc] = mt[xc] = mt[bc] = mt[Ec] = mt[Sc] = mt[Cc] = mt[_c] = mt[Mc] = mt[Tc] = mt[Pc] = mt[Dc] = !1;
function Nc(t) {
  return Lr(t) && bs(t.length) && !!mt[Gr(t)];
}
function ji(t) {
  return function(r) {
    return t(r);
  };
}
var Ts = typeof exports == "object" && exports && !exports.nodeType && exports, be = Ts && typeof module == "object" && module && !module.nodeType && module, $c = be && be.exports === Ts, Hn = $c && vs.process, jc = function() {
  try {
    var t = be && be.require && be.require("util").types;
    return t || Hn && Hn.binding && Hn.binding("util");
  } catch (r) {
  }
}();
const te = jc;
var ro = te && te.isTypedArray, Yc = ro ? ji(ro) : Nc;
const Wc = Yc;
var Xc = Object.prototype, Hc = Xc.hasOwnProperty;
function Ps(t, r) {
  var e = Fr(t), n = !e && Cs(t), i = !e && !n && Ms(t), a = !e && !n && !i && Wc(t), o = e || n || i || a, s = o ? sc(t.length, String) : [], u = s.length;
  for (var l in t)
    (r || Hc.call(t, l)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    rc(l, u))) && s.push(l);
  return s;
}
function Ds(t, r) {
  return function(e) {
    return t(r(e));
  };
}
var Vc = Ds(Object.keys, Object);
const qc = Vc;
var Uc = Object.prototype, Kc = Uc.hasOwnProperty;
function Zc(t) {
  if (!$i(t))
    return qc(t);
  var r = [];
  for (var e in Object(t))
    Kc.call(t, e) && e != "constructor" && r.push(e);
  return r;
}
function Yi(t) {
  return Es(t) ? Ps(t) : Zc(t);
}
function Jc(t) {
  var r = [];
  if (t != null)
    for (var e in Object(t))
      r.push(e);
  return r;
}
var Qc = Object.prototype, tv = Qc.hasOwnProperty;
function rv(t) {
  if (!lr(t))
    return Jc(t);
  var r = $i(t), e = [];
  for (var n in t)
    n == "constructor" && (r || !tv.call(t, n)) || e.push(n);
  return e;
}
function Wi(t) {
  return Es(t) ? Ps(t, !0) : rv(t);
}
var ev = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nv = /^\w*$/;
function iv(t, r) {
  if (Fr(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Sn(t) ? !0 : nv.test(t) || !ev.test(t) || r != null && t in Object(r);
}
var av = $r(Object, "create");
const Pe = av;
function ov() {
  this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
}
function sv(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var uv = "__lodash_hash_undefined__", lv = Object.prototype, fv = lv.hasOwnProperty;
function cv(t) {
  var r = this.__data__;
  if (Pe) {
    var e = r[t];
    return e === uv ? void 0 : e;
  }
  return fv.call(r, t) ? r[t] : void 0;
}
var vv = Object.prototype, pv = vv.hasOwnProperty;
function dv(t) {
  var r = this.__data__;
  return Pe ? r[t] !== void 0 : pv.call(r, t);
}
var hv = "__lodash_hash_undefined__";
function gv(t, r) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Pe && r === void 0 ? hv : r, this;
}
function Ir(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
Ir.prototype.clear = ov;
Ir.prototype.delete = sv;
Ir.prototype.get = cv;
Ir.prototype.has = dv;
Ir.prototype.set = gv;
function mv() {
  this.__data__ = [], this.size = 0;
}
function Cn(t, r) {
  for (var e = t.length; e--; )
    if (ys(t[e][0], r))
      return e;
  return -1;
}
var yv = Array.prototype, xv = yv.splice;
function bv(t) {
  var r = this.__data__, e = Cn(r, t);
  if (e < 0)
    return !1;
  var n = r.length - 1;
  return e == n ? r.pop() : xv.call(r, e, 1), --this.size, !0;
}
function Ev(t) {
  var r = this.__data__, e = Cn(r, t);
  return e < 0 ? void 0 : r[e][1];
}
function Sv(t) {
  return Cn(this.__data__, t) > -1;
}
function Cv(t, r) {
  var e = this.__data__, n = Cn(e, t);
  return n < 0 ? (++this.size, e.push([t, r])) : e[n][1] = r, this;
}
function vr(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
vr.prototype.clear = mv;
vr.prototype.delete = bv;
vr.prototype.get = Ev;
vr.prototype.has = Sv;
vr.prototype.set = Cv;
var _v = $r(tr, "Map");
const De = _v;
function Mv() {
  this.size = 0, this.__data__ = {
    hash: new Ir(),
    map: new (De || vr)(),
    string: new Ir()
  };
}
function Tv(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function _n(t, r) {
  var e = t.__data__;
  return Tv(r) ? e[typeof r == "string" ? "string" : "hash"] : e.map;
}
function Pv(t) {
  var r = _n(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function Dv(t) {
  return _n(this, t).get(t);
}
function wv(t) {
  return _n(this, t).has(t);
}
function Rv(t, r) {
  var e = _n(this, t), n = e.size;
  return e.set(t, r), this.size += e.size == n ? 0 : 1, this;
}
function Cr(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
Cr.prototype.clear = Mv;
Cr.prototype.delete = Pv;
Cr.prototype.get = Dv;
Cr.prototype.has = wv;
Cr.prototype.set = Rv;
var Ov = "Expected a function";
function Xi(t, r) {
  if (typeof t != "function" || r != null && typeof r != "function")
    throw new TypeError(Ov);
  var e = function() {
    var n = arguments, i = r ? r.apply(this, n) : n[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, n);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Xi.Cache || Cr)(), e;
}
Xi.Cache = Cr;
var Iv = 500;
function kv(t) {
  var r = Xi(t, function(n) {
    return e.size === Iv && e.clear(), n;
  }), e = r.cache;
  return r;
}
var Av = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bv = /\\(\\)?/g, zv = kv(function(t) {
  var r = [];
  return t.charCodeAt(0) === 46 && r.push(""), t.replace(Av, function(e, n, i, a) {
    r.push(i ? a.replace(Bv, "$1") : n || e);
  }), r;
});
const Gv = zv;
function Lv(t) {
  return t == null ? "" : hs(t);
}
function Hi(t, r) {
  return Fr(t) ? t : iv(t, r) ? [t] : Gv(Lv(t));
}
var Fv = 1 / 0;
function ws(t) {
  if (typeof t == "string" || Sn(t))
    return t;
  var r = t + "";
  return r == "0" && 1 / t == -Fv ? "-0" : r;
}
function Rs(t, r) {
  r = Hi(r, t);
  for (var e = 0, n = r.length; t != null && e < n; )
    t = t[ws(r[e++])];
  return e && e == n ? t : void 0;
}
function Os(t, r, e) {
  var n = t == null ? void 0 : Rs(t, r);
  return n === void 0 ? e : n;
}
function Vi(t, r) {
  for (var e = -1, n = r.length, i = t.length; ++e < n; )
    t[i + e] = r[e];
  return t;
}
var eo = nr ? nr.isConcatSpreadable : void 0;
function Nv(t) {
  return Fr(t) || Cs(t) || !!(eo && t && t[eo]);
}
function Is(t, r, e, n, i) {
  var a = -1, o = t.length;
  for (e || (e = Nv), i || (i = []); ++a < o; ) {
    var s = t[a];
    r > 0 && e(s) ? r > 1 ? Is(s, r - 1, e, n, i) : Vi(i, s) : n || (i[i.length] = s);
  }
  return i;
}
function $v(t) {
  var r = t == null ? 0 : t.length;
  return r ? Is(t, 1) : [];
}
function jv(t) {
  return Zf(ic(t, void 0, $v), t + "");
}
var Yv = Ds(Object.getPrototypeOf, Object);
const qi = Yv;
var Wv = "[object Object]", Xv = Function.prototype, Hv = Object.prototype, ks = Xv.toString, Vv = Hv.hasOwnProperty, qv = ks.call(Object);
function Uv(t) {
  if (!Lr(t) || Gr(t) != Wv)
    return !1;
  var r = qi(t);
  if (r === null)
    return !0;
  var e = Vv.call(r, "constructor") && r.constructor;
  return typeof e == "function" && e instanceof e && ks.call(e) == qv;
}
function Kv(t, r, e) {
  var n = -1, i = t.length;
  r < 0 && (r = -r > i ? 0 : i + r), e = e > i ? i : e, e < 0 && (e += i), i = r > e ? 0 : e - r >>> 0, r >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = t[n + r];
  return a;
}
function Zv() {
  this.__data__ = new vr(), this.size = 0;
}
function Jv(t) {
  var r = this.__data__, e = r.delete(t);
  return this.size = r.size, e;
}
function Qv(t) {
  return this.__data__.get(t);
}
function tp(t) {
  return this.__data__.has(t);
}
var rp = 200;
function ep(t, r) {
  var e = this.__data__;
  if (e instanceof vr) {
    var n = e.__data__;
    if (!De || n.length < rp - 1)
      return n.push([t, r]), this.size = ++e.size, this;
    e = this.__data__ = new Cr(n);
  }
  return e.set(t, r), this.size = e.size, this;
}
function ue(t) {
  var r = this.__data__ = new vr(t);
  this.size = r.size;
}
ue.prototype.clear = Zv;
ue.prototype.delete = Jv;
ue.prototype.get = Qv;
ue.prototype.has = tp;
ue.prototype.set = ep;
function np(t, r) {
  return t && Be(r, Yi(r), t);
}
function ip(t, r) {
  return t && Be(r, Wi(r), t);
}
var As = typeof exports == "object" && exports && !exports.nodeType && exports, no = As && typeof module == "object" && module && !module.nodeType && module, ap = no && no.exports === As, io = ap ? tr.Buffer : void 0, ao = io ? io.allocUnsafe : void 0;
function op(t, r) {
  if (r)
    return t.slice();
  var e = t.length, n = ao ? ao(e) : new t.constructor(e);
  return t.copy(n), n;
}
function sp(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length, i = 0, a = []; ++e < n; ) {
    var o = t[e];
    r(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Bs() {
  return [];
}
var up = Object.prototype, lp = up.propertyIsEnumerable, oo = Object.getOwnPropertySymbols, fp = oo ? function(t) {
  return t == null ? [] : (t = Object(t), sp(oo(t), function(r) {
    return lp.call(t, r);
  }));
} : Bs;
const Ui = fp;
function cp(t, r) {
  return Be(t, Ui(t), r);
}
var vp = Object.getOwnPropertySymbols, pp = vp ? function(t) {
  for (var r = []; t; )
    Vi(r, Ui(t)), t = qi(t);
  return r;
} : Bs;
const zs = pp;
function dp(t, r) {
  return Be(t, zs(t), r);
}
function Gs(t, r, e) {
  var n = r(t);
  return Fr(t) ? n : Vi(n, e(t));
}
function hp(t) {
  return Gs(t, Yi, Ui);
}
function Ls(t) {
  return Gs(t, Wi, zs);
}
var gp = $r(tr, "DataView");
const ui = gp;
var mp = $r(tr, "Promise");
const li = mp;
var yp = $r(tr, "Set");
const fi = yp;
var so = "[object Map]", xp = "[object Object]", uo = "[object Promise]", lo = "[object Set]", fo = "[object WeakMap]", co = "[object DataView]", bp = Nr(ui), Ep = Nr(De), Sp = Nr(li), Cp = Nr(fi), _p = Nr(si), Mr = Gr;
(ui && Mr(new ui(new ArrayBuffer(1))) != co || De && Mr(new De()) != so || li && Mr(li.resolve()) != uo || fi && Mr(new fi()) != lo || si && Mr(new si()) != fo) && (Mr = function(t) {
  var r = Gr(t), e = r == xp ? t.constructor : void 0, n = e ? Nr(e) : "";
  if (n)
    switch (n) {
      case bp:
        return co;
      case Ep:
        return so;
      case Sp:
        return uo;
      case Cp:
        return lo;
      case _p:
        return fo;
    }
  return r;
});
const Ki = Mr;
var Mp = Object.prototype, Tp = Mp.hasOwnProperty;
function Pp(t) {
  var r = t.length, e = new t.constructor(r);
  return r && typeof t[0] == "string" && Tp.call(t, "index") && (e.index = t.index, e.input = t.input), e;
}
var Dp = tr.Uint8Array;
const vo = Dp;
function Zi(t) {
  var r = new t.constructor(t.byteLength);
  return new vo(r).set(new vo(t)), r;
}
function wp(t, r) {
  var e = r ? Zi(t.buffer) : t.buffer;
  return new t.constructor(e, t.byteOffset, t.byteLength);
}
var Rp = /\w*$/;
function Op(t) {
  var r = new t.constructor(t.source, Rp.exec(t));
  return r.lastIndex = t.lastIndex, r;
}
var po = nr ? nr.prototype : void 0, ho = po ? po.valueOf : void 0;
function Ip(t) {
  return ho ? Object(ho.call(t)) : {};
}
function kp(t, r) {
  var e = r ? Zi(t.buffer) : t.buffer;
  return new t.constructor(e, t.byteOffset, t.length);
}
var Ap = "[object Boolean]", Bp = "[object Date]", zp = "[object Map]", Gp = "[object Number]", Lp = "[object RegExp]", Fp = "[object Set]", Np = "[object String]", $p = "[object Symbol]", jp = "[object ArrayBuffer]", Yp = "[object DataView]", Wp = "[object Float32Array]", Xp = "[object Float64Array]", Hp = "[object Int8Array]", Vp = "[object Int16Array]", qp = "[object Int32Array]", Up = "[object Uint8Array]", Kp = "[object Uint8ClampedArray]", Zp = "[object Uint16Array]", Jp = "[object Uint32Array]";
function Qp(t, r, e) {
  var n = t.constructor;
  switch (r) {
    case jp:
      return Zi(t);
    case Ap:
    case Bp:
      return new n(+t);
    case Yp:
      return wp(t, e);
    case Wp:
    case Xp:
    case Hp:
    case Vp:
    case qp:
    case Up:
    case Kp:
    case Zp:
    case Jp:
      return kp(t, e);
    case zp:
      return new n();
    case Gp:
    case Np:
      return new n(t);
    case Lp:
      return Op(t);
    case Fp:
      return new n();
    case $p:
      return Ip(t);
  }
}
function td(t) {
  return typeof t.constructor == "function" && !$i(t) ? Ff(qi(t)) : {};
}
var rd = "[object Map]";
function ed(t) {
  return Lr(t) && Ki(t) == rd;
}
var go = te && te.isMap, nd = go ? ji(go) : ed;
const id = nd;
var ad = "[object Set]";
function od(t) {
  return Lr(t) && Ki(t) == ad;
}
var mo = te && te.isSet, sd = mo ? ji(mo) : od;
const ud = sd;
var ld = 1, fd = 2, cd = 4, Fs = "[object Arguments]", vd = "[object Array]", pd = "[object Boolean]", dd = "[object Date]", hd = "[object Error]", Ns = "[object Function]", gd = "[object GeneratorFunction]", md = "[object Map]", yd = "[object Number]", $s = "[object Object]", xd = "[object RegExp]", bd = "[object Set]", Ed = "[object String]", Sd = "[object Symbol]", Cd = "[object WeakMap]", _d = "[object ArrayBuffer]", Md = "[object DataView]", Td = "[object Float32Array]", Pd = "[object Float64Array]", Dd = "[object Int8Array]", wd = "[object Int16Array]", Rd = "[object Int32Array]", Od = "[object Uint8Array]", Id = "[object Uint8ClampedArray]", kd = "[object Uint16Array]", Ad = "[object Uint32Array]", gt = {};
gt[Fs] = gt[vd] = gt[_d] = gt[Md] = gt[pd] = gt[dd] = gt[Td] = gt[Pd] = gt[Dd] = gt[wd] = gt[Rd] = gt[md] = gt[yd] = gt[$s] = gt[xd] = gt[bd] = gt[Ed] = gt[Sd] = gt[Od] = gt[Id] = gt[kd] = gt[Ad] = !0;
gt[hd] = gt[Ns] = gt[Cd] = !1;
function sn(t, r, e, n, i, a) {
  var o, s = r & ld, u = r & fd, l = r & cd;
  if (e && (o = i ? e(t, n, i, a) : e(t)), o !== void 0)
    return o;
  if (!lr(t))
    return t;
  var f = Fr(t);
  if (f) {
    if (o = Pp(t), !s)
      return $f(t, o);
  } else {
    var c = Ki(t), v = c == Ns || c == gd;
    if (Ms(t))
      return op(t, s);
    if (c == $s || c == Fs || v && !i) {
      if (o = u || v ? {} : td(t), !s)
        return u ? dp(t, ip(o, t)) : cp(t, np(o, t));
    } else {
      if (!gt[c])
        return i ? t : {};
      o = Qp(t, c, s);
    }
  }
  a || (a = new ue());
  var p = a.get(t);
  if (p)
    return p;
  a.set(t, o), ud(t) ? t.forEach(function(g) {
    o.add(sn(g, r, e, g, t, a));
  }) : id(t) && t.forEach(function(g, m) {
    o.set(m, sn(g, r, e, m, t, a));
  });
  var d = l ? u ? Ls : hp : u ? Wi : Yi, h = f ? void 0 : d(t);
  return Jf(h || t, function(g, m) {
    h && (m = g, g = t[m]), xs(o, m, sn(g, r, e, m, t, a));
  }), o;
}
var Bd = function() {
  return tr.Date.now();
};
const Vn = Bd;
var zd = "Expected a function", Gd = Math.max, Ld = Math.min;
function Fd(t, r, e) {
  var n, i, a, o, s, u, l = 0, f = !1, c = !1, v = !0;
  if (typeof t != "function")
    throw new TypeError(zd);
  r = qa(r) || 0, lr(e) && (f = !!e.leading, c = "maxWait" in e, a = c ? Gd(qa(e.maxWait) || 0, r) : a, v = "trailing" in e ? !!e.trailing : v);
  function p(x) {
    var S = n, _ = i;
    return n = i = void 0, l = x, o = t.apply(_, S), o;
  }
  function d(x) {
    return l = x, s = setTimeout(m, r), f ? p(x) : o;
  }
  function h(x) {
    var S = x - u, _ = x - l, T = r - S;
    return c ? Ld(T, a - _) : T;
  }
  function g(x) {
    var S = x - u, _ = x - l;
    return u === void 0 || S >= r || S < 0 || c && _ >= a;
  }
  function m() {
    var x = Vn();
    if (g(x))
      return y(x);
    s = setTimeout(m, h(x));
  }
  function y(x) {
    return s = void 0, v && n ? p(x) : (n = i = void 0, o);
  }
  function b() {
    s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0;
  }
  function E() {
    return s === void 0 ? o : y(Vn());
  }
  function C() {
    var x = Vn(), S = g(x);
    if (n = arguments, i = this, u = x, S) {
      if (s === void 0)
        return d(u);
      if (c)
        return clearTimeout(s), s = setTimeout(m, r), p(u);
    }
    return s === void 0 && (s = setTimeout(m, r)), o;
  }
  return C.cancel = b, C.flush = E, C;
}
function Nd(t) {
  var r = t == null ? 0 : t.length;
  return r ? t[r - 1] : void 0;
}
function $d(t, r) {
  return r.length < 2 ? t : Rs(t, Kv(r, 0, -1));
}
function jd(t, r) {
  return r = Hi(r, t), t = $d(t, r), t == null || delete t[ws(Nd(r))];
}
function Yd(t) {
  return Uv(t) ? void 0 : t;
}
var Wd = 1, Xd = 2, Hd = 4, Vd = jv(function(t, r) {
  var e = {};
  if (t == null)
    return e;
  var n = !1;
  r = ds(r, function(a) {
    return a = Hi(a, t), n || (n = a.length > 1), a;
  }), Be(t, Ls(t), e), n && (e = sn(e, Wd | Xd | Hd, Yd));
  for (var i = r.length; i--; )
    jd(e, r[i]);
  return e;
});
const qd = Vd;
var Ud = "Expected a function";
function Kd(t, r, e) {
  var n = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(Ud);
  return lr(e) && (n = "leading" in e ? !!e.leading : n, i = "trailing" in e ? !!e.trailing : i), Fd(t, r, {
    leading: n,
    maxWait: r,
    trailing: i
  });
}
const yo = {
  radius: 6,
  zIndex: 0,
  strokeOpacity: 0,
  fillOpacity: 0
};
class ci {
  constructor(r) {
    B(this, "map");
    B(this, "options", Yt({}, yo));
    B(this, "circleMarkers", []);
    this.map = r;
  }
  setOptions(r) {
    return this.options = Yt(Yt({}, r), qd(yo, "radius")), this;
  }
  createCircleMarkersByPaths(r) {
    this.removeFromTheMap(), this.reset(), r.forEach((e) => {
      this.circleMarkers.push(this.createCircleMarker(e));
    }), this.addToMap();
  }
  createCircleMarker(r) {
    return new AMap.CircleMarker(Yt({ center: r }, this.options));
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
  getPointInCircleMarkers(r) {
    var e;
    return (e = this.circleMarkers.find((n) => this.isPointInCircle(r, n))) != null ? e : null;
  }
  /**
   * 获取点是否在围栏编辑器的蓝色操作点上（即中间点）
   * @param {*} pos
   * @returns
   */
  getInCircleMarkersPoint(r) {
    const e = this.circleMarkers.find((i) => this.isPointInCircle(r, i));
    return this.circleMarkers.findIndex((i) => i === e) % 2 === 0 ? null : e != null ? e : null;
  }
  isPointInCircle(r, e) {
    return e.contains(r);
  }
  reset() {
    this.circleMarkers = [];
  }
  destroy() {
    this.removeFromTheMap(), this.reset();
  }
}
const xo = {
  zIndex: 1,
  strokeColor: "#00D3FC",
  strokeWeight: 8,
  strokeOpacity: 0
};
class js {
  constructor(r) {
    B(this, "map");
    B(this, "linesPath", []);
    B(this, "lines", []);
    if (!r)
      throw new Error("map not found");
    this.map = r;
  }
  getLinesByPaths(r) {
    let e = 0;
    const n = r.length;
    for (; e < n; ) {
      const i = e + 1 >= n ? 0 : e + 1;
      this.linesPath.push([r[e], r[i]]), e++;
    }
    return this.linesPath;
  }
  createLinesByPaths(r) {
    this.reset(), this.getLinesByPaths(r);
  }
  createPolyLine(r) {
    return new AMap.Polyline(Yt({ path: r }, xo));
  }
  addToMap() {
    this.map.add(this.lines);
  }
  removeFromTheMap() {
    this.map.remove(this.lines);
  }
  getPointInPolyline(r) {
    const e = this.map.getResolution(), n = xo.strokeWeight * e;
    return this.linesPath.find(
      (a) => AMap.GeometryUtil.isPointOnSegment(r, a[0], a[1], n)
    );
  }
  reset() {
    this.linesPath = [], this.lines = [];
  }
}
class Zd {
  constructor(r, e) {
    B(this, "map");
    // 实点
    B(this, "circleMarkers", null);
    // 中间点
    B(this, "midCircleMarkers", null);
    // 线集合
    B(this, "lines", null);
    // 编辑器
    B(this, "polygonEditor", null);
    // 多边形路径
    B(this, "polygonPaths", []);
    // 多边形全部路径（包括中间虚电）
    B(this, "polygonTotalPaths", []);
    // 多边形
    B(this, "polygon", null);
    // 开始点位到鼠标位置的文本
    B(this, "startPointToCursorText", null);
    // 最后一次点位到鼠标位置的文本
    B(this, "lastPointToCursorText", null);
    // 线长的文本呢
    B(this, "lineLengthText", null);
    // 操作点
    B(this, "circleMarker", null);
    // 操作中间点
    B(this, "midCircleMarker", null);
    // 起始点位
    B(this, "startPosition", null);
    // 上次点击点位
    B(this, "lastPosition", null);
    // 兜底设置编辑中间点标记列表路径
    B(this, "editingMidTipMarkerListPath", null);
    B(this, "onPolygonEditorAdjust", ({ target: r }) => {
      this.polygonPaths = r.getPath(), this.circleMarkers.createCircleMarkersByPaths(this.polygonPaths), this.lines.createLinesByPaths(this.polygonPaths), Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      }), this.reset();
    });
    B(this, "onMouseDown", (r) => {
      const e = r.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(e), this.midCircleMarker = this.midCircleMarkers.getInCircleMarkersPoint(e);
    });
    B(this, "onMovePolygonEditorPoint", (r) => {
      if (this.midCircleMarker)
        return;
      if (!this.circleMarker) {
        this.reset();
        return;
      }
      const e = this.circleMarker.getCenter(), n = (f) => `${f.lng}-${f.lat}`;
      let i = this.polygonPaths.findIndex((f) => n(f) === n(e));
      if (i === -1)
        return;
      const a = this.polygonPaths.length, o = i - 1 <= -1 ? a - 1 : i - 1, s = i + 1 >= a ? 0 : i + 1, u = this.polygonPaths.at(o), l = this.polygonPaths.at(s);
      this.setPosition(u, l), this.onMouseMoveInDrawPolygon(r);
    });
    B(this, "onMovePolygonEditorMidPoint", (r) => {
      if (this.circleMarker)
        return;
      if (!this.midCircleMarker) {
        this.reset();
        return;
      }
      const e = this.midCircleMarker.getCenter(), n = (f) => `${f.lng}-${f.lat}`;
      let i = this.polygonTotalPaths.findIndex((f) => n(f) === n(e));
      if (i === -1)
        return;
      const a = this.polygonTotalPaths.length, o = i - 1 <= -1 ? a - 1 : i - 1, s = i + 1 >= a ? 0 : i + 1, u = this.polygonTotalPaths.at(o), l = this.polygonTotalPaths.at(s);
      this.setPosition(u, l), this.onMouseMoveInDrawPolygon(r);
    });
    B(this, "onMouseUp", () => {
      this.circleMarker = null, this.midCircleMarker = null, this.reset();
    });
    B(this, "onInPolygonEditorLine", (r) => {
      if (this.circleMarker)
        return this.removeLineDistanceText();
      const e = r.lnglat, n = this.lines.getPointInPolyline(e);
      if (!n)
        return this.removeLineDistanceText();
      const [i, a] = n;
      this.lineLengthText || (this.lineLengthText = Zr(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, Jr(i, a));
    });
    /**
     * 获取新增围栏时，鼠标移动位置
     * @param {*} event
     */
    B(this, "onMouseMoveInDrawPolygon", (r) => {
      if (!this.startPosition || !this.lastPosition)
        return;
      const e = r.lnglat;
      this.updateDistanceText(
        this.startPointToCursorText,
        Jr(this.startPosition, e)
      ), this.updateDistanceText(
        this.lastPointToCursorText,
        Jr(this.lastPosition, e)
      );
    });
    if (!r)
      throw new Error("map not found!");
    this.map = r, e && (this.polygonEditor = e), this.circleMarkers = new ci(this.map), this.midCircleMarkers = new ci(this.map), this.lines = new js(this.map);
  }
  /**
   * 获取编辑器目标多边形路径
   * @returns
   */
  getPolygonEditorTargetPaths() {
    var r, e, n;
    return this.polygonEditor ? (n = (e = (r = this.polygonEditor) == null ? void 0 : r.getTarget) == null ? void 0 : e.call(r).getPath()) != null ? n : [] : [];
  }
  /**
   * 
   */
  setEditingMidTipMarkerListPath(r) {
    return this.editingMidTipMarkerListPath = r, this;
  }
  /**
   * 
   * @returns 
   */
  getEditingMidTipMarkerList() {
    var e, n;
    const { singleRingListHandle: r } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return Os(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (e = this.polygonEditor.editingMidTipMarkerList) != null && e.length ? this.polygonEditor.editingMidTipMarkerList : r ? (n = r == null ? void 0 : r.list) == null ? void 0 : n.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const r = this.getPolygonEditorTargetPaths(), e = this.getEditingMidTipMarkerList();
    let n = 0;
    const i = [], a = r.length;
    for (; n < a; ) {
      i.push(r[n]);
      const o = e[n];
      o && i.push(o.getCenter()), n++;
    }
    return i;
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   * @param polygonEditor 
   */
  open(r) {
    this.start(r);
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   * @param polygonEditor 
   */
  start(r) {
    var i, a, o;
    if (!r && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = r;
    const { controlPoint: e, midControlPoint: n } = this.polygonEditor;
    return this.polygonPaths = this.getPolygonEditorTargetPaths(), this.circleMarkers.setOptions(e).createCircleMarkersByPaths(this.polygonPaths), this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.midCircleMarkers.setOptions(n).createCircleMarkersByPaths(this.polygonTotalPaths), this.lines.createLinesByPaths(this.polygonPaths), (i = this.polygonEditor) == null || i.on("adjust", this.onPolygonEditorAdjust), (a = this.polygonEditor) == null || a.on("removenode", this.onPolygonEditorAdjust), (o = this.polygonEditor) == null || o.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("mousemove", this.onMovePolygonEditorPoint), this.map.on("mousemove", this.onMovePolygonEditorMidPoint), this.map.on("mousemove", this.onInPolygonEditorLine), this.map.on("mouseup", this.onMouseUp), this;
  }
  /**
   * 移除多边形编辑器，可操作点位事件
   */
  close() {
    this.stop();
  }
  /**
   * 移除多边形编辑器，可操作点位事件
   */
  stop() {
    var r, e, n;
    (r = this.polygonEditor) == null || r.off("adjust", this.onPolygonEditorAdjust), (e = this.polygonEditor) == null || e.off("removenode", this.onPolygonEditorAdjust), (n = this.polygonEditor) == null || n.off("addnode", this.onPolygonEditorAdjust), this.map.off("mousedown", this.onMouseDown), this.map.off("mousemove", this.onMovePolygonEditorPoint), this.map.off("mousemove", this.onMovePolygonEditorMidPoint), this.map.off("mousemove", this.onInPolygonEditorLine), this.map.off("mouseup", this.onMouseUp);
  }
  /**
   * 开始边线测距
   * @param polygon 
   * @returns 
   */
  startLineRanging(r) {
    if (!r)
      throw new Error("polygonEditor not found");
    this.polygon || (this.polygon = r, this.lines.createLinesByPaths(this.polygon.getPath()), this.map.on("mousemove", this.onInPolygonEditorLine));
  }
  stopLineRanging() {
    this.map.off("mousemove", this.onInPolygonEditorLine);
  }
  /**
   * 设置起始点位、一次点位
   * @param {object} startPosition
   * @param {object} lastPosition
   */
  setPosition(r, e) {
    this.startPosition = r, this.lastPosition = e, this.createDistanceText();
  }
  /**
   * 创建距离文本
   * @returns
   */
  createDistanceText() {
    this.startPointToCursorText && this.lastPointToCursorText || (this.startPointToCursorText = Zr(), this.lastPointToCursorText = Zr(), this.startPointToCursorText.setMap(this.map), this.lastPointToCursorText.setMap(this.map));
  }
  updateDistanceText(r, { text: e, textPos: n }) {
    r.setText(e), r.setPosition(n);
  }
  removeLineDistanceText() {
    var r;
    (r = this.lineLengthText) == null || r.remove(), this.lineLengthText = null;
  }
  removeDistanceText() {
    var r, e;
    (r = this.startPointToCursorText) == null || r.remove(), (e = this.lastPointToCursorText) == null || e.remove(), this.startPointToCursorText = null, this.lastPointToCursorText = null;
  }
  reset() {
    return this.startPosition = null, this.lastPosition = null, this.removeDistanceText(), this.removeLineDistanceText(), this;
  }
  destroy() {
    return this.reset(), this.stop(), this.circleMarkers.destroy(), this;
  }
  destroyLineRanging() {
    return this.polygon = null, this.startPosition = null, this.lastPosition = null, this.removeLineDistanceText(), this.stopLineRanging(), this;
  }
}
class Jd {
  constructor(r, e) {
    B(this, "opts");
    B(this, "map");
    // 线集合
    B(this, "lines", null);
    // 多边形
    B(this, "polygon", null);
    // 线长的文本呢
    B(this, "lineLengthText", null);
    // 兜底设置编辑中间点标记列表路径
    B(this, "editingMidTipMarkerListPath", null);
    B(this, "onPolygonRanging", (r) => {
      const e = r.lnglat, n = this.lines.getPointInPolyline(e);
      if (!n)
        return this.removeLineDistanceText();
      const [i, a] = n;
      this.lineLengthText || (this.lineLengthText = Zr(), this.lineLengthText.add(this.map)), this.updateDistanceText(this.lineLengthText, Jr(i, a));
    });
    /**
    * 拖拽结束后，需要重新计算一下点位数据
    */
    B(this, "onRotateEndEnd", () => hr(this, null, function* () {
      yield Promise.resolve();
      const r = this.polygon;
      this.onDragEnd({ target: r });
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    B(this, "onDragEnd", (r) => hr(this, null, function* () {
      var n;
      const e = r.target;
      (n = this.lines) == null || n.reset(), yield Promise.resolve(), this.lines.createLinesByPaths(e.getPath());
    }));
    if (!r)
      throw new Error("map not found!");
    this.opts = e, this.map = r, this.lines = new js(this.map), this.immediateActive();
  }
  get immediate() {
    var r;
    return (r = this.opts) == null ? void 0 : r.immediate;
  }
  get draggable() {
    var e;
    return ((e = this.polygon) == null ? void 0 : e.getOptions()).draggable;
  }
  get rotatable() {
    var r;
    return (r = this.polygon) == null ? void 0 : r.rotatable;
  }
  /**
   * 立刻激活
   */
  immediateActive() {
    var e;
    const r = (e = this.opts) == null ? void 0 : e.target;
    this.immediate && r.CLASS_NAME === "Overlay.Polygon" && this.open(r);
  }
  /**
   * 开始边线测距
   * @param polygon 
   * @returns 
   */
  open(r) {
    this.start(r || this.polygon);
  }
  /**
   * 开始边线测距
   * @param polygon 
   * @returns 
   */
  start(r) {
    if (!r)
      return;
    this.polygon = r, this.lines.createLinesByPaths(this.polygon.getPath()), this.map.hasEvents("mousemove", this.onPolygonRanging) || this.map.on("mousemove", this.onPolygonRanging), this.registryPolygonEvents();
  }
  registryPolygonEvents() {
    this.polygon && (this.draggable && this.polygon.on("dragend", this.onDragEnd), this.rotatable && "likeRectangle" in this.polygon && this.polygon.on("rotateEnd", this.onRotateEndEnd));
  }
  destroyPolygonEvents() {
    var r, e, n, i;
    this.polygon && ((e = (r = this.polygon).off) == null || e.call(r, "dragend", this.onDragEnd), (i = (n = this.polygon).off) == null || i.call(n, "rotateEnd", this.onRotateEndEnd));
  }
  close() {
    this.stop();
  }
  stop() {
    this.map.off("mousemove", this.onPolygonRanging);
  }
  updateDistanceText(r, { text: e, textPos: n }) {
    r.setText(e), r.setPosition(n);
  }
  removeLineDistanceText() {
    var r;
    (r = this.lineLengthText) == null || r.remove(), this.lineLengthText = null;
  }
  destroy() {
    return this.stop(), this.removeLineDistanceText(), this.destroyPolygonEvents(), this.polygon = null, this;
  }
}
class Ji {
  constructor() {
    B(this, "events", {});
  }
  getEvents(r) {
    return this.events[r] || (this.events[r] = []), this.events[r];
  }
  emit(r, ...e) {
    this.getEvents(r).forEach((i) => i(...e));
  }
  on(r, e) {
    !r || typeof r != "string" || this.getEvents(r).push(e);
  }
  once(r, e) {
    if (!r || typeof r != "string")
      return;
    const n = (i) => {
      e(i), this.off(r, n);
    };
    this.on(r, n);
  }
  off(r, e) {
    !r || typeof r != "string" || (this.events[r] = this.getEvents(r).filter((n) => n !== e));
  }
  hasEvents(r, e) {
    return !!this.getEvents(r).find((n) => n === e);
  }
  clearEvents(r) {
    r ? this.events[r] = [] : this.events = {};
  }
}
class Qd extends Ji {
  constructor(e) {
    super();
    B(this, "map");
    // 全部点
    B(this, "circleMarkers", null);
    // 编辑器
    B(this, "polygonEditor", null);
    // 多边形全部路径（包括中间点）
    B(this, "polygonTotalPaths", []);
    // 操作点
    B(this, "circleMarker", null);
    // 兜底设置编辑中间点标记列表路径
    B(this, "editingMidTipMarkerListPath", null);
    B(this, "onPolygonEditorAdjust", () => {
      Promise.resolve().then(() => {
        this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.createCircleMarkersByPaths(this.polygonTotalPaths);
      });
    });
    B(this, "onMouseDown", (e) => {
      const n = e.lnglat;
      this.circleMarker = this.circleMarkers.getPointInCircleMarkers(n), !(!this.circleMarker || !this.getEvents("mousedown").length) && this.emit("mousedown", this.circleMarker);
    });
    B(this, "onMouseMove", (e) => {
      !this.circleMarker || !this.getEvents("mousemove").length || this.emit("mousemove", this.circleMarker, e);
    });
    // private onMouseOut = (event: Common.Event) => {
    //     if (!this.circleMarker) return;
    //     const events = this.getEvents('mouseout');
    //     if (!events.length) return;
    //     this.emit('mouseout', this.circleMarker, event);
    // };
    B(this, "onMouseUp", () => {
      !this.getEvents("mouseup").length || !this.circleMarker || (this.emit("mouseup", this.circleMarker), this.circleMarker = null);
    });
    this.map = e.map, this.polygonEditor = e, this.circleMarkers = new ci(this.map), this.open(this.polygonEditor);
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
   * 获取编辑中间点标记列表
   * @returns 
   */
  getEditingMidTipMarkerList() {
    var n, i;
    const { singleRingListHandle: e } = this.polygonEditor;
    if (this.editingMidTipMarkerListPath) {
      if (typeof this.editingMidTipMarkerListPath == "function")
        return this.editingMidTipMarkerListPath(this.polygonEditor);
      if (typeof this.editingMidTipMarkerListPath == "string")
        return Os(this.polygonEditor, this.editingMidTipMarkerListPath);
    }
    return (n = this.polygonEditor.editingMidTipMarkerList) != null && n.length ? this.polygonEditor.editingMidTipMarkerList : e ? (i = e == null ? void 0 : e.list) == null ? void 0 : i.editingMidTipMarkerList : [];
  }
  /**
   * 获取编辑围栏所有点位（白色操作点+蓝色中间操作点）
   * @returns
   */
  getPolygonEditorTargetTotalPaths() {
    const e = this.getPolygonEditorTargetPaths(), n = this.getEditingMidTipMarkerList();
    let i = 0;
    const a = [], o = e.length;
    for (; i < o; ) {
      a.push(e[i]);
      const s = n[i];
      s && a.push(s.getCenter()), i++;
    }
    return a;
  }
  /**
  * 注册多边形编辑器，可操作点位事件
  */
  open(e) {
    this.start(e);
  }
  /**
   * 注册多边形编辑器，可操作点位事件
   */
  start(e) {
    var i, a, o;
    if (!e && !this.polygonEditor)
      throw new Error("polygonEditor not found");
    this.polygonEditor = e;
    const { midControlPoint: n } = this.polygonEditor;
    return this.polygonTotalPaths = this.getPolygonEditorTargetTotalPaths(), this.circleMarkers.setOptions(n).createCircleMarkersByPaths(this.polygonTotalPaths), (i = this.polygonEditor) == null || i.on("adjust", this.onPolygonEditorAdjust), (a = this.polygonEditor) == null || a.on("removenode", this.onPolygonEditorAdjust), (o = this.polygonEditor) == null || o.on("addnode", this.onPolygonEditorAdjust), this.map.on("mousedown", this.onMouseDown), this.map.on("mousemove", this.onMouseMove), this.map.on("mouseup", this.onMouseUp), this;
  }
  /**
   * 停止事件行为
   */
  close() {
    this.stop();
  }
  /**
   * 停止事件行为
   */
  stop() {
    this.map.off("mousedown", this.onMouseDown), this.map.off("mousemove", this.onMouseMove), this.map.off("mouseup", this.onMouseUp);
  }
  destroy() {
    return this.close(), this.circleMarkers.destroy(), this;
  }
}
function th(t) {
  for (var r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e];
  return r.map(function(n) {
    return n.split(" ").map(function(i) {
      return i ? "" + t + i : "";
    }).join(" ");
  }).join(" ");
}
function rh(t, r) {
  return r.replace(/([^}{]*){/gm, function(e, n) {
    return n.replace(/\.([^{,\s\d.]+)/g, "." + t + "$1") + "{";
  });
}
function or(t, r) {
  return function(e) {
    e && (t[r] = e);
  };
}
function Ys(t, r, e) {
  return function(n) {
    n && (t[r][e] = n);
  };
}
function bo(t, r) {
  return function(e) {
    var n = e.prototype;
    t.forEach(function(i) {
      r(n, i);
    });
  };
}
function eh(t, r) {
  return r === void 0 && (r = {}), function(e, n) {
    t.forEach(function(i) {
      var a = r[i] || i;
      a in e || (e[a] = function() {
        for (var o, s = [], u = 0; u < arguments.length; u++)
          s[u] = arguments[u];
        var l = (o = this[n])[i].apply(o, s);
        return l === this[n] ? this : l;
      });
    });
  };
}
var nh = "function", ih = "object", ah = "string", oh = "number", Qi = "undefined", Ws = typeof window !== Qi, sh = typeof document !== Qi && document, uh = [{
  open: "(",
  close: ")"
}, {
  open: '"',
  close: '"'
}, {
  open: "'",
  close: "'"
}, {
  open: '\\"',
  close: '\\"'
}, {
  open: "\\'",
  close: "\\'"
}], _t = 1e-7, He = {
  cm: function(t) {
    return t * 96 / 2.54;
  },
  mm: function(t) {
    return t * 96 / 254;
  },
  in: function(t) {
    return t * 96;
  },
  pt: function(t) {
    return t * 96 / 72;
  },
  pc: function(t) {
    return t * 96 / 6;
  },
  "%": function(t, r) {
    return t * r / 100;
  },
  vw: function(t, r) {
    return r === void 0 && (r = window.innerWidth), t / 100 * r;
  },
  vh: function(t, r) {
    return r === void 0 && (r = window.innerHeight), t / 100 * r;
  },
  vmax: function(t, r) {
    return r === void 0 && (r = Math.max(window.innerWidth, window.innerHeight)), t / 100 * r;
  },
  vmin: function(t, r) {
    return r === void 0 && (r = Math.min(window.innerWidth, window.innerHeight)), t / 100 * r;
  }
};
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
function lh() {
  for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length;
  for (var n = Array(t), i = 0, r = 0; r < e; r++)
    for (var a = arguments[r], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
function Tr(t, r, e, n) {
  return (t * n + r * e) / (e + n);
}
function Mn(t) {
  return typeof t === Qi;
}
function Jt(t) {
  return t && typeof t === ih;
}
function Mt(t) {
  return Array.isArray(t);
}
function Nt(t) {
  return typeof t === ah;
}
function re(t) {
  return typeof t === oh;
}
function ta(t) {
  return typeof t === nh;
}
function fh(t, r) {
  var e = t === "" || t == " ", n = r === "" || r == " ";
  return n && e || t === r;
}
function Xs(t, r, e, n, i) {
  var a = ra(t, r, e);
  return a ? e : ch(t, r, e + 1, n, i);
}
function ra(t, r, e) {
  if (!t.ignore)
    return null;
  var n = r.slice(Math.max(e - 3, 0), e + 3).join("");
  return new RegExp(t.ignore).exec(n);
}
function ch(t, r, e, n, i) {
  for (var a = function(l) {
    var f = r[l].trim();
    if (f === t.close && !ra(t, r, l))
      return {
        value: l
      };
    var c = l, v = $t(i, function(p) {
      var d = p.open;
      return d === f;
    });
    if (v && (c = Xs(v, r, l, n, i)), c === -1)
      return o = l, "break";
    l = c, o = l;
  }, o, s = e; s < n; ++s) {
    var u = a(s);
    if (s = o, typeof u == "object")
      return u.value;
    if (u === "break")
      break;
  }
  return -1;
}
function ea(t, r) {
  var e = Nt(r) ? {
    separator: r
  } : r, n = e.separator, i = n === void 0 ? "," : n, a = e.isSeparateFirst, o = e.isSeparateOnlyOpenClose, s = e.isSeparateOpenClose, u = s === void 0 ? o : s, l = e.openCloseCharacters, f = l === void 0 ? uh : l, c = f.map(function(S) {
    var _ = S.open, T = S.close;
    return _ === T ? _ : _ + "|" + T;
  }).join("|"), v = "(\\s*" + i + "\\s*|" + c + "|\\s+)", p = new RegExp(v, "g"), d = t.split(p).filter(function(S) {
    return S && S !== "undefined";
  }), h = d.length, g = [], m = [];
  function y() {
    return m.length ? (g.push(m.join("")), m = [], !0) : !1;
  }
  for (var b = function(S) {
    var _ = d[S].trim(), T = S, D = $t(f, function(w) {
      var I = w.open;
      return I === _;
    }), O = $t(f, function(w) {
      var I = w.close;
      return I === _;
    });
    if (D) {
      if (T = Xs(D, d, S, h, f), T !== -1 && u)
        return y() && a || (g.push(d.slice(S, T + 1).join("")), S = T, a) ? (E = S, "break") : (E = S, "continue");
    } else if (O && !ra(O, d, S)) {
      var R = lh(f);
      return R.splice(f.indexOf(O), 1), {
        value: ea(t, {
          separator: i,
          isSeparateFirst: a,
          isSeparateOnlyOpenClose: o,
          isSeparateOpenClose: u,
          openCloseCharacters: R
        })
      };
    } else if (fh(_, i) && !o)
      return y(), a ? (E = S, "break") : (E = S, "continue");
    T === -1 && (T = h - 1), m.push(d.slice(S, T + 1).join("")), S = T, E = S;
  }, E, C = 0; C < h; ++C) {
    var x = b(C);
    if (C = E, typeof x == "object")
      return x.value;
    if (x === "break")
      break;
  }
  return m.length && g.push(m.join("")), g;
}
function br(t) {
  return ea(t, "");
}
function Or(t) {
  return ea(t, ",");
}
function Hs(t) {
  var r = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);
  return !r || r.length < 4 ? {} : {
    prefix: r[1],
    value: r[2],
    suffix: r[3]
  };
}
function ze(t) {
  var r = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);
  if (!r)
    return {
      prefix: "",
      unit: "",
      value: NaN
    };
  var e = r[1], n = r[2], i = r[3];
  return {
    prefix: e,
    unit: i,
    value: parseFloat(n)
  };
}
function vh(t) {
  return t.replace(/[\s-_]+([^\s-_])/g, function(r, e) {
    return e.toUpperCase();
  });
}
function un(t, r) {
  return r === void 0 && (r = "-"), t.replace(/([a-z])([A-Z])/g, function(e, n, i) {
    return "" + n + r + i.toLowerCase();
  });
}
function we() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
function fr(t, r, e) {
  e === void 0 && (e = -1);
  for (var n = t.length, i = 0; i < n; ++i)
    if (r(t[i], i, t))
      return i;
  return e;
}
function $t(t, r, e) {
  var n = fr(t, r);
  return n > -1 ? t[n] : e;
}
var Vs = /* @__PURE__ */ function() {
  var t = we(), r = Ws && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return r ? r.bind(window) : function(e) {
    var n = we(), i = setTimeout(function() {
      e(n - t);
    }, 1e3 / 60);
    return i;
  };
}(), ph = /* @__PURE__ */ function() {
  var t = Ws && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return t ? t.bind(window) : function(r) {
    clearTimeout(r);
  };
}();
function cr(t) {
  return Object.keys(t);
}
function dh(t) {
  var r = cr(t);
  return r.map(function(e) {
    return t[e];
  });
}
function vt(t, r) {
  var e = ze(t), n = e.value, i = e.unit;
  if (Jt(r)) {
    var a = r[i];
    if (a) {
      if (ta(a))
        return a(n);
      if (He[i])
        return He[i](n, a);
    }
  } else if (i === "%")
    return n * r / 100;
  return He[i] ? He[i](n) : n;
}
function vi(t, r, e) {
  return Math.max(r, Math.min(t, e));
}
function Eo(t, r, e, n) {
  return n === void 0 && (n = t[0] / t[1]), [[et(r[0], _t), et(r[0] / n, _t)], [et(r[1] * n, _t), et(r[1], _t)]].filter(function(i) {
    return i.every(function(a, o) {
      var s = r[o], u = et(s, _t);
      return e ? a <= s || a <= u : a >= s || a >= u;
    });
  })[0] || t;
}
function qs(t, r, e, n) {
  if (!n)
    return t.map(function(p, d) {
      return vi(p, r[d], e[d]);
    });
  var i = t[0], a = t[1], o = n === !0 ? i / a : n, s = Eo(t, r, !1, o), u = s[0], l = s[1], f = Eo(t, e, !0, o), c = f[0], v = f[1];
  return i < u || a < l ? (i = u, a = l) : (i > c || a > v) && (i = c, a = v), [i, a];
}
function hh(t) {
  for (var r = t.length, e = 0, n = r - 1; n >= 0; --n)
    e += t[n];
  return e;
}
function pi(t) {
  for (var r = t.length, e = 0, n = r - 1; n >= 0; --n)
    e += t[n];
  return r ? e / r : 0;
}
function Et(t, r) {
  var e = r[0] - t[0], n = r[1] - t[1], i = Math.atan2(n, e);
  return i >= 0 ? i : i + Math.PI * 2;
}
function gh(t) {
  return [0, 1].map(function(r) {
    return pi(t.map(function(e) {
      return e[r];
    }));
  });
}
function So(t) {
  var r = gh(t), e = Et(r, t[0]), n = Et(r, t[1]);
  return e < n && n - e < Math.PI || e > n && n - e < -Math.PI ? 1 : -1;
}
function sr(t, r) {
  return Math.sqrt(Math.pow((r ? r[0] : 0) - t[0], 2) + Math.pow((r ? r[1] : 0) - t[1], 2));
}
function et(t, r) {
  if (!r)
    return t;
  var e = 1 / r;
  return Math.round(t / r) / e;
}
function Co(t, r) {
  return t.forEach(function(e, n) {
    t[n] = et(t[n], r);
  }), t;
}
function mh(t) {
  for (var r = [], e = 0; e < t; ++e)
    r.push(e);
  return r;
}
function yh(t) {
  return t.reduce(function(r, e) {
    return r.concat(e);
  }, []);
}
function Us(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
function Dt(t, r) {
  return t.classList ? t.classList.contains(r) : !!t.className.match(new RegExp("(\\s|^)" + r + "(\\s|$)"));
}
function Ks(t, r) {
  t.classList ? t.classList.add(r) : t.className += " " + r;
}
function Zs(t, r) {
  if (t.classList)
    t.classList.remove(r);
  else {
    var e = new RegExp("(\\s|^)" + r + "(\\s|$)");
    t.className = t.className.replace(e, " ");
  }
}
function Ot(t, r, e, n) {
  t.addEventListener(r, e, n);
}
function Pt(t, r, e, n) {
  t.removeEventListener(r, e, n);
}
function le(t) {
  return (t == null ? void 0 : t.ownerDocument) || sh;
}
function na(t) {
  return le(t).documentElement;
}
function _r(t) {
  return le(t).body;
}
function xr(t) {
  var r;
  return ((r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView) || window;
}
function Js(t) {
  return t && "postMessage" in t && "blur" in t && "self" in t;
}
function fe(t) {
  return Jt(t) && t.nodeName && t.nodeType && "ownerDocument" in t;
}
var xh = /* @__PURE__ */ function() {
  function t() {
    this.keys = [], this.values = [];
  }
  var r = t.prototype;
  return r.get = function(e) {
    return this.values[this.keys.indexOf(e)];
  }, r.set = function(e, n) {
    var i = this.keys, a = this.values, o = i.indexOf(e), s = o === -1 ? i.length : o;
    i[s] = e, a[s] = n;
  }, t;
}(), bh = /* @__PURE__ */ function() {
  function t() {
    this.object = {};
  }
  var r = t.prototype;
  return r.get = function(e) {
    return this.object[e];
  }, r.set = function(e, n) {
    this.object[e] = n;
  }, t;
}(), Eh = typeof Map == "function", Sh = /* @__PURE__ */ function() {
  function t() {
  }
  var r = t.prototype;
  return r.connect = function(e, n) {
    this.prev = e, this.next = n, e && (e.next = this), n && (n.prev = this);
  }, r.disconnect = function() {
    var e = this.prev, n = this.next;
    e && (e.next = n), n && (n.prev = e);
  }, r.getIndex = function() {
    for (var e = this, n = -1; e; )
      e = e.prev, ++n;
    return n;
  }, t;
}();
function Ch(t, r) {
  var e = [], n = [];
  return t.forEach(function(i) {
    var a = i[0], o = i[1], s = new Sh();
    e[a] = s, n[o] = s;
  }), e.forEach(function(i, a) {
    i.connect(e[a - 1]);
  }), t.filter(function(i, a) {
    return !r[a];
  }).map(function(i, a) {
    var o = i[0], s = i[1];
    if (o === s)
      return [0, 0];
    var u = e[o], l = n[s - 1], f = u.getIndex();
    u.disconnect(), l ? u.connect(l, l.next) : u.connect(void 0, e[0]);
    var c = u.getIndex();
    return [f, c];
  });
}
var _h = /* @__PURE__ */ function() {
  function t(e, n, i, a, o, s, u, l) {
    this.prevList = e, this.list = n, this.added = i, this.removed = a, this.changed = o, this.maintained = s, this.changedBeforeAdded = u, this.fixed = l;
  }
  var r = t.prototype;
  return Object.defineProperty(r, "ordered", {
    get: function() {
      return this.cacheOrdered || this.caculateOrdered(), this.cacheOrdered;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(r, "pureChanged", {
    get: function() {
      return this.cachePureChanged || this.caculateOrdered(), this.cachePureChanged;
    },
    enumerable: !0,
    configurable: !0
  }), r.caculateOrdered = function() {
    var e = Ch(this.changedBeforeAdded, this.fixed), n = this.changed, i = [];
    this.cacheOrdered = e.filter(function(a, o) {
      var s = a[0], u = a[1], l = n[o], f = l[0], c = l[1];
      if (s !== u)
        return i.push([f, c]), !0;
    }), this.cachePureChanged = i;
  }, t;
}();
function Ge(t, r, e) {
  var n = Eh ? Map : e ? bh : xh, i = e || function(y) {
    return y;
  }, a = [], o = [], s = [], u = t.map(i), l = r.map(i), f = new n(), c = new n(), v = [], p = [], d = {}, h = [], g = 0, m = 0;
  return u.forEach(function(y, b) {
    f.set(y, b);
  }), l.forEach(function(y, b) {
    c.set(y, b);
  }), u.forEach(function(y, b) {
    var E = c.get(y);
    typeof E == "undefined" ? (++m, o.push(b)) : d[E] = m;
  }), l.forEach(function(y, b) {
    var E = f.get(y);
    typeof E == "undefined" ? (a.push(b), ++g) : (s.push([E, b]), m = d[b] || 0, v.push([E - m, b - g]), p.push(b === E), E !== b && h.push([E, b]));
  }), o.reverse(), new _h(t, r, a, o, h, s, v, p);
}
var Mh = /* @__PURE__ */ function() {
  function t(e, n) {
    e === void 0 && (e = []), this.findKeyCallback = n, this.list = [].slice.call(e);
  }
  var r = t.prototype;
  return r.update = function(e) {
    var n = [].slice.call(e), i = Ge(this.list, n, this.findKeyCallback);
    return this.list = n, i;
  }, t;
}(), di = function(t, r) {
  return di = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, di(t, r);
};
function Le(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  di(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var rr = function() {
  return rr = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, rr.apply(this, arguments);
};
function Qs(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (e[n[i]] = t[n[i]]);
  return e;
}
function _o(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = r.length, a; n < i; n++)
      (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return t.concat(a || Array.prototype.slice.call(r));
}
function Mo(t) {
  var r = 0;
  return t.map(function(e) {
    return e == null ? "$compat".concat(++r) : "".concat(e);
  });
}
function tu(t) {
  var r = [];
  return t.forEach(function(e) {
    r = r.concat(Mt(e) ? tu(e) : e);
  }), r;
}
function qn(t, r) {
  if (!r)
    return t;
  for (var e in r)
    Mn(t[e]) && (t[e] = r[e]);
  return t;
}
function cn(t, r) {
  if (t === r)
    return !1;
  for (var e in t)
    if (!(e in r))
      return !0;
  for (var e in r)
    if (t[e] !== r[e])
      return !0;
  return !1;
}
function To(t) {
  var r = t.className, e = Qs(t, ["className"]);
  return r != null && (e.class = r), delete e.style, delete e.children, e;
}
function Po(t) {
  var r = {}, e = {};
  for (var n in t)
    n.indexOf("on") === 0 ? e[n] = t[n] : r[n] = t[n];
  return [r, e];
}
function Tn(t) {
  if (!t)
    return null;
  var r = t.b;
  return fe(r) ? r : Tn(t.c);
}
function ru(t) {
  var r = t.parentNode;
  r && r.removeChild(t);
}
function eu(t) {
  t.forEach(function(r) {
    r();
  });
}
function Th() {
  return this.constructor(this.props, this.context);
}
var ia = 0, Pn = /* @__PURE__ */ function() {
  function t(e, n, i, a, o, s, u) {
    u === void 0 && (u = {}), this.t = e, this.d = n, this.k = i, this.i = a, this.c = o, this.ref = s, this.ps = u, this.typ = "prov", this._ps = [], this._cs = {}, this._hyd = null, this._sel = !1;
  }
  var r = t.prototype;
  return r.s = function() {
    return !0;
  }, r.u = function(e, n, i, a, o) {
    var s = this, u = s.d, l = dh(n).filter(function(d) {
      return d.$_req;
    }), f = tu(l.map(function(d) {
      return d.$_subs;
    })), c = $t(f, function(d) {
      return d.d === u;
    });
    if (s.b && !Nt(i) && !o && !s.s(i.props, a) && !c) {
      var v = f.reduce(function(d, h) {
        var g = h.d;
        return d[0] ? d[0].d === g && d.push(h) : g > u && d.push(h), d;
      }, []);
      return v.forEach(function(d) {
        Fe(d, d._ps, [d.o], e, n, !0);
      }), !1;
    }
    s.o = i, s.ss(a);
    var p = s.ps;
    return Nt(i) || (s.ps = i.props, s.ref = i.ref), aa(this), s.r(e, n, s.b ? p : {}, a), !0;
  }, r.md = function() {
    this.rr();
  }, r.ss = function() {
  }, r.ud = function() {
    this.rr();
  }, r.rr = function() {
    var e = this, n = e.ref, i = e.fr;
    n && n(i ? i.current : e.b);
  }, t;
}();
function nu() {
  return Object.__CROACT_CURRENT_INSTNACE__;
}
function Ph() {
  return ia;
}
function Dh(t) {
  ia = t;
}
function aa(t) {
  return Object.__CROACT_CURRENT_INSTNACE__ = t, ia = 0, t;
}
var oa = /* @__PURE__ */ function() {
  function t(e, n) {
    e === void 0 && (e = {}), this.props = e, this.context = n, this.state = {}, this.$_timer = 0, this.$_state = {}, this.$_subs = [], this.$_cs = {};
  }
  var r = t.prototype;
  return r.render = function() {
    return null;
  }, r.shouldComponentUpdate = function(e, n) {
    return this.props !== e || this.state !== n;
  }, r.setState = function(e, n, i) {
    var a = this;
    a.$_timer || (a.$_state = {}), clearTimeout(a.$_timer), a.$_timer = 0, a.$_state = rr(rr({}, a.$_state), e), i ? a.$_setState(n, i) : a.$_timer = window.setTimeout(function() {
      a.$_timer = 0, a.$_setState(n, i);
    });
  }, r.forceUpdate = function(e) {
    this.setState({}, e, !0);
  }, r.componentDidMount = function() {
  }, r.componentDidUpdate = function(e, n) {
  }, r.componentWillUnmount = function() {
  }, r.$_setState = function(e, n) {
    var i = [], a = this.$_p, o = Fe(a.c, [a], [a.o], i, a._cs, rr(rr({}, this.state), this.$_state), n);
    o && (e && i.push(e), eu(i), aa(null));
  }, t;
}(), iu = /* @__PURE__ */ function(t) {
  Le(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  var e = r.prototype;
  return e.shouldComponentUpdate = function(n, i) {
    return cn(this.props, n) || cn(this.state, i);
  }, r;
}(oa);
function au(t) {
  var r = function(e) {
    r.current = e;
  };
  return r.current = t, r;
}
function wh(t) {
  return t._fr = !0, t;
}
function Rh(t, r, e, n) {
  var i, a;
  return !((i = t == null ? void 0 : t.prototype) === null || i === void 0) && i.render ? a = new t(r, e) : (a = new oa(r, e), a.constructor = t, t._fr ? (n.fr = au(), a.render = function() {
    return this.constructor(this.props, n.fr);
  }) : a.render = Th), a.$_p = n, a;
}
var Oh = /* @__PURE__ */ function(t) {
  Le(r, t);
  function r(n, i, a, o, s, u, l) {
    l === void 0 && (l = {});
    var f = t.call(this, n, i, a, o, s, u, qn(l, n.defaultProps)) || this;
    return f.typ = "comp", f._usefs = [], f._uefs = [], f._defs = [], f;
  }
  var e = r.prototype;
  return e.s = function(n, i) {
    var a = this.b;
    return a.shouldComponentUpdate(qn(n, this.t.defaultProps), i || a.state) !== !1;
  }, e.r = function(n, i, a) {
    var o, s, u = this, l = u.t;
    u.ps = qn(u.ps, u.t.defaultProps);
    var f = u.ps, c = !u.b, v = l.contextType, p = u.b, d = v == null ? void 0 : v.get(u);
    u._cs = i, c ? (p = Rh(l, f, d, u), u.b = p) : (p.props = f, p.context = d);
    var h = p.state;
    u._usefs = [], u._uefs = [];
    var g = p.render();
    ((s = (o = g == null ? void 0 : g.props) === null || o === void 0 ? void 0 : o.children) === null || s === void 0 ? void 0 : s.length) === 0 && (g.props.children = u.ps.children);
    var m = rr(rr({}, i), p.$_cs);
    Fe(u, u._ps, g ? [g] : [], n, m), c ? u._uefs.push(function() {
      v == null || v.register(u), p.componentDidMount();
    }) : u._uefs.push(function() {
      p.componentDidUpdate(a, h);
    }), n.push(function() {
      u._usefs.forEach(function(y) {
        y();
      }), c ? u.md() : u.ud(), u._defs = u._uefs.map(function(y) {
        return y();
      });
    });
  }, e.ss = function(n) {
    var i = this.b;
    !i || !n || (i.state = n);
  }, e.un = function() {
    var n, i = this;
    i._ps.forEach(function(o) {
      o.un();
    });
    var a = i.t;
    (n = a.contextType) === null || n === void 0 || n.unregister(i), clearTimeout(i.b.$_timer), i._defs.forEach(function(o) {
      o && o();
    }), i.b.componentWillUnmount();
  }, r;
}(Pn);
function Ih(t, r, e) {
  var n = sa(To(t), To(r)), i = n.added, a = n.removed, o = n.changed;
  for (var s in i)
    e.setAttribute(s, i[s]);
  for (var u in o)
    e.setAttribute(u, o[u][1]);
  for (var l in a)
    e.removeAttribute(l);
}
function kh(t, r, e) {
  var n = sa(t, r), i = n.added, a = n.removed;
  for (var o in a)
    e.e(o, !0);
  for (var s in i)
    e.e(s);
}
function sa(t, r) {
  var e = cr(t), n = cr(r), i = Ge(e, n, function(u) {
    return u;
  }), a = {}, o = {}, s = {};
  return i.added.forEach(function(u) {
    var l = n[u];
    a[l] = r[l];
  }), i.removed.forEach(function(u) {
    var l = e[u];
    o[l] = t[l];
  }), i.maintained.forEach(function(u) {
    var l = u[0], f = e[l], c = [t[f], r[f]];
    t[f] !== r[f] && (s[f] = c);
  }), {
    added: a,
    removed: o,
    changed: s
  };
}
function Ah(t, r, e) {
  var n = e.style, i = sa(t, r), a = i.added, o = i.removed, s = i.changed;
  for (var u in a) {
    var l = un(u, "-");
    n.setProperty(l, a[u]);
  }
  for (var u in s) {
    var f = un(u, "-");
    n.setProperty(f, s[u][1]);
  }
  for (var u in o) {
    var c = un(u, "-");
    n.removeProperty(c);
  }
}
function Bh(t) {
  return t.replace(/^on/g, "").toLowerCase();
}
var zh = /* @__PURE__ */ function(t) {
  Le(r, t);
  function r() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "elem", n._es = {}, n._svg = !1, n;
  }
  var e = r.prototype;
  return e.e = function(n, i) {
    var a = this, o = a._es, s = a.b, u = Bh(n);
    i ? (Pt(s, u, o[n]), delete o[n]) : (o[n] = function(l) {
      var f, c;
      (c = (f = a.ps)[n]) === null || c === void 0 || c.call(f, l);
    }, Ot(s, u, o[n]));
  }, e.s = function(n) {
    return cn(this.ps, n);
  }, e.r = function(n, i, a) {
    var o, s = this, u = !s.b, l = s.ps;
    if (u) {
      var f = Tn(s.c), c = !1;
      s._svg || s.t === "svg" ? c = !0 : c = f && f.ownerSVGElement, s._svg = c;
      var v = (o = s._hyd) === null || o === void 0 ? void 0 : o.splice(0, 1)[0], p = s.t;
      if (v)
        s._hyd = [].slice.call(v.children || []);
      else {
        var d = le(f);
        c ? v = d.createElementNS("http://www.w3.org/2000/svg", p) : v = d.createElement(p);
      }
      s.b = v;
    }
    Fe(s, s._ps, l.children, n, i);
    var h = s.b, g = Po(a), m = g[0], y = g[1], b = Po(l), E = b[0], C = b[1];
    return Ih(m, E, h), kh(y, C, s), Ah(a.style || {}, l.style || {}, h), n.push(function() {
      u ? s.md() : s.ud();
    }), !0;
  }, e.un = function() {
    var n = this, i = n._es, a = n.b;
    for (var o in i)
      Pt(a, o, i[o]);
    n._ps.forEach(function(s) {
      s.un();
    }), n._es = {}, n._sel || ru(a);
  }, r;
}(Pn);
function Re(t) {
  if (!t || fe(t))
    return t;
  var r = t.$_p._ps;
  return r.length ? Re(r[0].b) : null;
}
function ou(t) {
  if (t) {
    if (t.b && fe(t.b))
      return t;
    var r = t._ps;
    return r.length ? ou(r[0]) : null;
  }
}
function Kt(t, r) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  var i = r || {}, a = i.key, o = i.ref, s = Qs(i, ["key", "ref"]);
  return {
    type: t,
    key: a,
    ref: o,
    props: rr(rr({}, s), {
      children: yh(e).filter(function(u) {
        return u != null && u !== !1;
      })
    })
  };
}
var su = /* @__PURE__ */ function(t) {
  Le(r, t);
  function r(n, i) {
    i === void 0 && (i = 0);
    var a = t.call(this, "container", i, "container", 0, null) || this;
    return a.typ = "container", a.b = n, a;
  }
  var e = r.prototype;
  return e.r = function() {
    return !0;
  }, e.un = function() {
  }, r;
}(Pn), Gh = /* @__PURE__ */ function(t) {
  Le(r, t);
  function r() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "text", n;
  }
  var e = r.prototype;
  return e.r = function(n) {
    var i, a = this, o = !a.b;
    if (o) {
      var s = Tn(a.c), u = (i = a._hyd) === null || i === void 0 ? void 0 : i.splice(0, 1)[0];
      a.b = u || le(s).createTextNode(a.t.replace("text_", ""));
    }
    return n.push(function() {
      o ? a.md() : a.ud();
    }), !0;
  }, e.un = function() {
    ru(this.b);
  }, r;
}(Pn);
function Lh(t, r, e) {
  var n = e.map(function(u) {
    return Nt(u) ? null : u.key;
  }), i = Mo(r.map(function(u) {
    return u.k;
  })), a = Mo(n), o = Ge(i, a, function(u) {
    return u;
  });
  o.removed.forEach(function(u) {
    r.splice(u, 1)[0].un();
  }), o.ordered.forEach(function(u) {
    var l = u[0], f = u[1], c = r.splice(l, 1)[0];
    r.splice(f, 0, c);
    var v = Re(c.b), p = Re(r[f + 1] && r[f + 1].b);
    v && v.parentNode.insertBefore(v, p);
  }), o.added.forEach(function(u) {
    r.splice(u, 0, Do(e[u], n[u], u, t));
  });
  var s = o.maintained.filter(function(u) {
    u[0];
    var l = u[1], f = e[l], c = r[l], v = Nt(f) ? "text_".concat(f) : f.type;
    return v !== c.t ? (c.un(), r.splice(l, 1, Do(f, n[l], l, t)), !0) : (c.i = l, !1);
  });
  return _o(_o([], o.added, !0), s.map(function(u) {
    u[0];
    var l = u[1];
    return l;
  }), !0);
}
function Fh(t, r) {
  for (var e = t._ps, n = e.length, i = r.i + 1; i < n; ++i) {
    var a = Re(e[i].b);
    if (a)
      return a;
  }
  return null;
}
function Do(t, r, e, n) {
  var i = n.d + 1;
  if (Nt(t) || re(t))
    return new Gh("text_".concat(t), i, r, e, n, null, {});
  var a = t.type, o = typeof a == "string" ? zh : Oh;
  return new o(a, i, r, e, n, t.ref, t.props);
}
function Fe(t, r, e, n, i, a, o) {
  var s = Lh(t, r, e), u = t._hyd, l = r.filter(function(c, v) {
    return c._hyd = u, c.u(n, i, e[v], a, o);
  });
  t.typ === "container" && t._sel && r.forEach(function(c) {
    var v = ou(c);
    v && (v._sel = !0);
  }), t._hyd = null;
  var f = Tn(t);
  return f && s.reverse().forEach(function(c) {
    var v = r[c], p = Re(v.b);
    if (p && f !== p && !p.parentNode) {
      var d = Fh(t, v);
      f.insertBefore(p, d);
    }
  }), l.length > 0;
}
function Nh(t, r, e, n) {
  e === void 0 && (e = r.__CROACT__), n === void 0 && (n = {});
  var i = !!e;
  e || (e = new su(r));
  var a = [];
  return Fe(e, e._ps, t ? [t] : [], a, n, void 0, void 0), eu(a), aa(null), i || (r.__CROACT__ = e), e;
}
function wo(t, r, e) {
  return !e && t && (e = new su(r.parentElement), e._hyd = [r], e._sel = !0), Nh(t, r, e), e;
}
function uu(t) {
  var r = nu(), e = r._hs || (r._hs = []), n = Ph(), i = e[n];
  if (Dh(n + 1), i) {
    if (!cn(i.deps, t.deps))
      return i.updated = !1, i;
    e[n] = t;
  } else
    e.push(t);
  return t.value = t.func(), t.updated = !0, t;
}
function $h(t, r) {
  var e = uu({
    func: t,
    deps: r
  });
  return e.value;
}
function jh(t) {
  return $h(function() {
    return au(t);
  }, []);
}
function lu(t, r, e) {
  var n = nu(), i = uu({
    func: function() {
      return t;
    },
    deps: r
  }), a = e ? n._usefs : n._uefs;
  i.updated ? a.push(function() {
    return i.effect && i.effect(), i.effect = t(), i.effect;
  }) : a.push(function() {
    return i.effect;
  });
}
function Yh(t, r, e) {
  lu(function() {
    t == null || t(r());
  }, e, !0);
}
function ua(t, r) {
  for (var e = t.length, n = 0; n < e; ++n)
    if (r(t[n], n))
      return !0;
  return !1;
}
function fu(t, r) {
  for (var e = t.length, n = 0; n < e; ++n)
    if (r(t[n], n))
      return t[n];
  return null;
}
function cu(t) {
  var r = t;
  if (typeof r == "undefined") {
    if (typeof navigator == "undefined" || !navigator)
      return "";
    r = navigator.userAgent || "";
  }
  return r.toLowerCase();
}
function la(t, r) {
  try {
    return new RegExp(t, "g").exec(r);
  } catch (e) {
    return null;
  }
}
function Wh() {
  if (typeof navigator == "undefined" || !navigator || !navigator.userAgentData)
    return !1;
  var t = navigator.userAgentData, r = t.brands || t.uaList;
  return !!(r && r.length);
}
function Xh(t, r) {
  var e = la("(" + t + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", r);
  return e ? e[3] : "";
}
function hi(t) {
  return t.replace(/_/g, ".");
}
function me(t, r) {
  var e = null, n = "-1";
  return ua(t, function(i) {
    var a = la("(" + i.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", r);
    return !a || i.brand ? !1 : (e = i, n = a[3] || "-1", i.versionAlias ? n = i.versionAlias : i.versionTest && (n = Xh(i.versionTest.toLowerCase(), r) || n), n = hi(n), !0);
  }), {
    preset: e,
    version: n
  };
}
function ge(t, r) {
  var e = {
    brand: "",
    version: "-1"
  };
  return ua(t, function(n) {
    var i = vu(r, n);
    return i ? (e.brand = n.id, e.version = n.versionAlias || i.version, e.version !== "-1") : !1;
  }), e;
}
function vu(t, r) {
  return fu(t, function(e) {
    var n = e.brand;
    return la("" + r.test, n.toLowerCase());
  });
}
var gi = [{
  test: "phantomjs",
  id: "phantomjs"
}, {
  test: "whale",
  id: "whale"
}, {
  test: "edgios|edge|edg",
  id: "edge"
}, {
  test: "msie|trident|windows phone",
  id: "ie",
  versionTest: "iemobile|msie|rv"
}, {
  test: "miuibrowser",
  id: "miui browser"
}, {
  test: "samsungbrowser",
  id: "samsung internet"
}, {
  test: "samsung",
  id: "samsung internet",
  versionTest: "version"
}, {
  test: "chrome|crios",
  id: "chrome"
}, {
  test: "firefox|fxios",
  id: "firefox"
}, {
  test: "android",
  id: "android browser",
  versionTest: "version"
}, {
  test: "safari|iphone|ipad|ipod",
  id: "safari",
  versionTest: "version"
}], pu = [{
  test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
  id: "chrome",
  versionTest: "chrome"
}, {
  test: "chromium",
  id: "chrome"
}, {
  test: "whale",
  id: "chrome",
  versionAlias: "-1",
  brand: !0
}], mi = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}], du = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], hu = [{
  test: "windows phone",
  id: "windows phone"
}, {
  test: "windows 2000",
  id: "window",
  versionAlias: "5.0"
}, {
  test: "windows nt",
  id: "window"
}, {
  test: "win32|windows",
  id: "window"
}, {
  test: "iphone|ipad|ipod",
  id: "ios",
  versionTest: "iphone os|cpu os"
}, {
  test: "macos|macintel|mac os x",
  id: "mac"
}, {
  test: "android|linux armv81",
  id: "android"
}, {
  test: "tizen",
  id: "tizen"
}, {
  test: "webos|web0s",
  id: "webos"
}];
function gu(t) {
  return !!me(du, t).preset;
}
function Hh(t) {
  var r = cu(t), e = !!/mobi/g.exec(r), n = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: gu(r),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, i = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, a = me(gi, r), o = a.preset, s = a.version, u = me(hu, r), l = u.preset, f = u.version, c = me(pu, r);
  if (n.chromium = !!c.preset, n.chromiumVersion = c.version, !n.chromium) {
    var v = me(mi, r);
    n.webkit = !!v.preset, n.webkitVersion = v.version;
  }
  return l && (i.name = l.id, i.version = f, i.majorVersion = parseInt(f, 10)), o && (n.name = o.id, n.version = s, n.webview && i.name === "ios" && n.name !== "safari" && (n.webview = !1)), n.majorVersion = parseInt(n.version, 10), {
    browser: n,
    os: i,
    isMobile: e,
    isHints: !1
  };
}
function Vh(t) {
  var r = navigator.userAgentData, e = (r.uaList || r.brands).slice(), n = t && t.fullVersionList, i = r.mobile || !1, a = e[0], o = (t && t.platform || r.platform || navigator.platform).toLowerCase(), s = {
    name: a.brand,
    version: a.version,
    majorVersion: -1,
    webkit: !1,
    webkitVersion: "-1",
    chromium: !1,
    chromiumVersion: "-1",
    webview: !!ge(du, e).brand || gu(cu())
  }, u = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  s.webkit = !s.chromium && ua(mi, function(d) {
    return vu(e, d);
  });
  var l = ge(pu, e);
  if (s.chromium = !!l.brand, s.chromiumVersion = l.version, !s.chromium) {
    var f = ge(mi, e);
    s.webkit = !!f.brand, s.webkitVersion = f.version;
  }
  var c = fu(hu, function(d) {
    return new RegExp("" + d.test, "g").exec(o);
  });
  if (u.name = c ? c.id : "", t && (u.version = t.platformVersion), n && n.length) {
    var v = ge(gi, n);
    s.name = v.brand || s.name, s.version = v.version || s.version;
  } else {
    var p = ge(gi, e);
    s.name = p.brand || s.name, s.version = p.brand && t ? t.uaFullVersion : p.version;
  }
  return s.webkit && (u.name = i ? "ios" : "mac"), u.name === "ios" && s.webview && (s.version = "-1"), u.version = hi(u.version), s.version = hi(s.version), u.majorVersion = parseInt(u.version, 10), s.majorVersion = parseInt(s.version, 10), {
    browser: s,
    os: u,
    isMobile: i,
    isHints: !0
  };
}
function qh(t) {
  return typeof t == "undefined" && Wh() ? Vh() : Hh(t);
}
function Uh(t, r, e, n, i, a) {
  for (var o = 0; o < i; ++o) {
    var s = e + o * i, u = n + o * i;
    t[s] += t[u] * a, r[s] += r[u] * a;
  }
}
function Kh(t, r, e, n, i) {
  for (var a = 0; a < i; ++a) {
    var o = e + a * i, s = n + a * i, u = t[o], l = r[o];
    t[o] = t[s], t[s] = u, r[o] = r[s], r[s] = l;
  }
}
function Zh(t, r, e, n, i) {
  for (var a = 0; a < n; ++a) {
    var o = e + a * n;
    t[o] /= i, r[o] /= i;
  }
}
function mu(t, r, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var n = t.slice(), i = 0; i < e; ++i)
    n[i * e + r - 1] = 0, n[(r - 1) * e + i] = 0;
  return n[(r - 1) * (e + 1)] = 1, n;
}
function ir(t, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  for (var e = t.slice(), n = yt(r), i = 0; i < r; ++i) {
    var a = r * i + i;
    if (!et(e[a], _t)) {
      for (var o = i + 1; o < r; ++o)
        if (e[r * i + o]) {
          Kh(e, n, i, o, r);
          break;
        }
    }
    if (!et(e[a], _t))
      return [];
    Zh(e, n, i, r, e[a]);
    for (var o = 0; o < r; ++o) {
      var s = o, u = o + i * r, l = e[u];
      !et(l, _t) || i === o || Uh(e, n, s, i, r, -l);
    }
  }
  return n;
}
function Jh(t, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  for (var e = [], n = 0; n < r; ++n)
    for (var i = 0; i < r; ++i)
      e[i * r + n] = t[r * n + i];
  return e;
}
function yu(t, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  for (var e = [], n = t[r * r - 1], i = 0; i < r - 1; ++i)
    e[i] = t[r * (r - 1) + i] / n;
  return e[r - 1] = 0, e;
}
function Qh(t, r) {
  for (var e = yt(r), n = 0; n < r - 1; ++n)
    e[r * (r - 1) + n] = t[n] || 0;
  return e;
}
function kr(t, r) {
  for (var e = t.slice(), n = t.length; n < r - 1; ++n)
    e[n] = 0;
  return e[r - 1] = 1, e;
}
function Qt(t, r, e) {
  if (r === void 0 && (r = Math.sqrt(t.length)), r === e)
    return t;
  for (var n = yt(e), i = Math.min(r, e), a = 0; a < i - 1; ++a) {
    for (var o = 0; o < i - 1; ++o)
      n[a * e + o] = t[a * r + o];
    n[(a + 1) * e - 1] = t[(a + 1) * r - 1], n[(e - 1) * e + a] = t[(r - 1) * r + a];
  }
  return n[e * e - 1] = t[r * r - 1], n;
}
function vn(t) {
  for (var r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e];
  var n = yt(t);
  return r.forEach(function(i) {
    n = pt(n, i, t);
  }), n;
}
function pt(t, r, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  var n = [], i = t.length / e, a = r.length / i;
  if (i) {
    if (!a)
      return t;
  } else
    return r;
  for (var o = 0; o < e; ++o)
    for (var s = 0; s < a; ++s) {
      n[s * e + o] = 0;
      for (var u = 0; u < i; ++u)
        n[s * e + o] += t[u * e + o] * r[s * i + u];
    }
  return n;
}
function lt(t, r) {
  for (var e = Math.min(t.length, r.length), n = t.slice(), i = 0; i < e; ++i)
    n[i] = n[i] + r[i];
  return n;
}
function tt(t, r) {
  for (var e = Math.min(t.length, r.length), n = t.slice(), i = 0; i < e; ++i)
    n[i] = n[i] - r[i];
  return n;
}
function tg(t, r) {
  return r === void 0 && (r = t.length === 6), r ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t;
}
function xu(t, r) {
  return r === void 0 && (r = t.length === 9), r ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t;
}
function kt(t, r, e) {
  e === void 0 && (e = r.length);
  var n = pt(t, r, e), i = n[e - 1];
  return n.map(function(a) {
    return a / i;
  });
}
function rg(t, r) {
  return pt(t, [1, 0, 0, 0, 0, Math.cos(r), Math.sin(r), 0, 0, -Math.sin(r), Math.cos(r), 0, 0, 0, 0, 1], 4);
}
function eg(t, r) {
  return pt(t, [Math.cos(r), 0, -Math.sin(r), 0, 0, 1, 0, 0, Math.sin(r), 0, Math.cos(r), 0, 0, 0, 0, 1], 4);
}
function ng(t, r) {
  return pt(t, $e(r, 4));
}
function Ve(t, r) {
  var e = r[0], n = e === void 0 ? 1 : e, i = r[1], a = i === void 0 ? 1 : i, o = r[2], s = o === void 0 ? 1 : o;
  return pt(t, [n, 0, 0, 0, 0, a, 0, 0, 0, 0, s, 0, 0, 0, 0, 1], 4);
}
function Ne(t, r) {
  return kt($e(r, 3), kr(t, 3));
}
function Un(t, r) {
  var e = r[0], n = e === void 0 ? 0 : e, i = r[1], a = i === void 0 ? 0 : i, o = r[2], s = o === void 0 ? 0 : o;
  return pt(t, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, a, s, 1], 4);
}
function Ro(t, r) {
  return pt(t, r, 4);
}
function $e(t, r) {
  var e = Math.cos(t), n = Math.sin(t), i = yt(r);
  return i[0] = e, i[1] = n, i[r] = -n, i[r + 1] = e, i;
}
function yt(t) {
  for (var r = t * t, e = [], n = 0; n < r; ++n)
    e[n] = n % (t + 1) ? 0 : 1;
  return e;
}
function fa(t, r) {
  for (var e = yt(r), n = Math.min(t.length, r - 1), i = 0; i < n; ++i)
    e[(r + 1) * i] = t[i];
  return e;
}
function Ar(t, r) {
  for (var e = yt(r), n = Math.min(t.length, r - 1), i = 0; i < n; ++i)
    e[r * (r - 1) + i] = t[i];
  return e;
}
function ca(t, r, e, n, i, a, o, s) {
  var u = t[0], l = t[1], f = r[0], c = r[1], v = e[0], p = e[1], d = n[0], h = n[1], g = i[0], m = i[1], y = a[0], b = a[1], E = o[0], C = o[1], x = s[0], S = s[1], _ = [u, 0, f, 0, v, 0, d, 0, l, 0, c, 0, p, 0, h, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, u, 0, f, 0, v, 0, d, 0, l, 0, c, 0, p, 0, h, 0, 1, 0, 1, 0, 1, 0, 1, -g * u, -m * u, -y * f, -b * f, -E * v, -C * v, -x * d, -S * d, -g * l, -m * l, -y * c, -b * c, -E * p, -C * p, -x * h, -S * h], T = ir(_, 8);
  if (!T.length)
    return [];
  var D = pt(T, [g, m, y, b, E, C, x, S], 8);
  return D[8] = 1, Qt(Jh(D), 3, 4);
}
var Ee = function() {
  return Ee = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Ee.apply(this, arguments);
};
function ig() {
  return [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ];
}
function Oe(t, r) {
  return r === void 0 && (r = 0), Xr(ee(t, r));
}
function ag(t, r) {
  var e = kt(t, [r[0], r[1] || 0, r[2] || 0, 1], 4), n = e[3] || 1;
  return [
    e[0] / n,
    e[1] / n,
    e[2] / n
  ];
}
function Xr(t) {
  var r = ig();
  return t.forEach(function(e) {
    var n = e.matrixFunction, i = e.functionValue;
    n && (r = n(r, i));
  }), r;
}
function ee(t, r) {
  r === void 0 && (r = 0);
  var e = Mt(t) ? t : br(t);
  return e.map(function(n) {
    var i = Hs(n), a = i.prefix, o = i.value, s = null, u = a, l = "";
    if (a === "translate" || a === "translateX" || a === "translate3d") {
      var f = Jt(r) ? Ee(Ee({}, r), { "o%": r["%"] }) : {
        "%": r,
        "o%": r
      }, c = Or(o).map(function(w, I) {
        return I === 0 && "x%" in f ? f["%"] = r["x%"] : I === 1 && "y%" in f ? f["%"] = r["y%"] : f["%"] = r["o%"], vt(w, f);
      }), v = c[0], p = c[1], d = p === void 0 ? 0 : p, h = c[2], g = h === void 0 ? 0 : h;
      s = Un, l = [v, d, g];
    } else if (a === "translateY") {
      var m = Jt(r) ? Ee({ "%": r["y%"] }, r) : {
        "%": r
      }, d = vt(o, m);
      s = Un, l = [0, d, 0];
    } else if (a === "translateZ") {
      var g = parseFloat(o);
      s = Un, l = [0, 0, g];
    } else if (a === "scale" || a === "scale3d") {
      var y = Or(o).map(function(w) {
        return parseFloat(w);
      }), b = y[0], E = y[1], C = E === void 0 ? b : E, x = y[2], S = x === void 0 ? 1 : x;
      s = Ve, l = [b, C, S];
    } else if (a === "scaleX") {
      var b = parseFloat(o);
      s = Ve, l = [b, 1, 1];
    } else if (a === "scaleY") {
      var C = parseFloat(o);
      s = Ve, l = [1, C, 1];
    } else if (a === "scaleZ") {
      var S = parseFloat(o);
      s = Ve, l = [1, 1, S];
    } else if (a === "rotate" || a === "rotateZ" || a === "rotateX" || a === "rotateY") {
      var _ = ze(o), T = _.unit, D = _.value, O = T === "rad" ? D : D * Math.PI / 180;
      a === "rotate" || a === "rotateZ" ? (u = "rotateZ", s = ng) : a === "rotateX" ? s = rg : a === "rotateY" && (s = eg), l = O;
    } else if (a === "matrix3d")
      s = Ro, l = Or(o).map(function(w) {
        return parseFloat(w);
      });
    else if (a === "matrix") {
      var R = Or(o).map(function(w) {
        return parseFloat(w);
      });
      s = Ro, l = [
        R[0],
        R[1],
        0,
        0,
        R[2],
        R[3],
        0,
        0,
        0,
        0,
        1,
        0,
        R[4],
        R[5],
        0,
        1
      ];
    } else
      u = "";
    return {
      name: a,
      functionName: u,
      value: o,
      matrixFunction: s,
      functionValue: l
    };
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var yi = function(t, r) {
  return yi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (e[i] = n[i]);
  }, yi(t, r);
};
function og(t, r) {
  yi(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var bu = typeof Map == "function" ? void 0 : function() {
  var t = 0;
  return function(r) {
    return r.__DIFF_KEY__ || (r.__DIFF_KEY__ = ++t);
  };
}(), sg = /* @__PURE__ */ function(t) {
  og(r, t);
  function r(e) {
    return e === void 0 && (e = []), t.call(this, e, bu) || this;
  }
  return r;
}(Mh);
function ug(t, r) {
  return Ge(t, r, bu);
}
const Eu = sg;
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
var xi = function() {
  return xi = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, xi.apply(this, arguments);
};
function lg() {
  for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length;
  for (var n = Array(t), i = 0, r = 0; r < e; r++)
    for (var a = arguments[r], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
var fg = /* @__PURE__ */ function() {
  function t() {
    this._events = {};
  }
  var r = t.prototype;
  return r.on = function(e, n) {
    if (Jt(e))
      for (var i in e)
        this.on(i, e[i]);
    else
      this._addEvent(e, n, {});
    return this;
  }, r.off = function(e, n) {
    if (!e)
      this._events = {};
    else if (Jt(e))
      for (var i in e)
        this.off(i);
    else if (!n)
      this._events[e] = [];
    else {
      var a = this._events[e];
      if (a) {
        var o = fr(a, function(s) {
          return s.listener === n;
        });
        o > -1 && a.splice(o, 1);
      }
    }
    return this;
  }, r.once = function(e, n) {
    var i = this;
    return n && this._addEvent(e, n, {
      once: !0
    }), new Promise(function(a) {
      i._addEvent(e, a, {
        once: !0
      });
    });
  }, r.emit = function(e, n) {
    var i = this;
    n === void 0 && (n = {});
    var a = this._events[e];
    if (!e || !a)
      return !0;
    var o = !1;
    return n.eventType = e, n.stop = function() {
      o = !0;
    }, n.currentTarget = this, lg(a).forEach(function(s) {
      s.listener(n), s.once && i.off(e, s.listener);
    }), !o;
  }, r.trigger = function(e, n) {
    return n === void 0 && (n = {}), this.emit(e, n);
  }, r._addEvent = function(e, n, i) {
    var a = this._events;
    a[e] = a[e] || [];
    var o = a[e];
    o.push(xi({
      listener: n
    }, i));
  }, t;
}();
const Dn = fg;
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
var bi = function(t, r) {
  return bi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (e[i] = n[i]);
  }, bi(t, r);
};
function cg(t, r) {
  bi(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Hr = function() {
  return Hr = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Hr.apply(this, arguments);
};
function vg(t) {
  var r = t.container;
  return r === document.body ? [r.scrollLeft || document.documentElement.scrollLeft, r.scrollTop || document.documentElement.scrollTop] : [r.scrollLeft, r.scrollTop];
}
function Oo(t, r) {
  return t.addEventListener("scroll", r), function() {
    t.removeEventListener("scroll", r);
  };
}
function qe(t) {
  if (t) {
    if (Nt(t))
      return document.querySelector(t);
  } else
    return null;
  if (ta(t))
    return t();
  if (t instanceof Element)
    return t;
  if ("current" in t)
    return t.current;
  if ("value" in t)
    return t.value;
}
var pg = /* @__PURE__ */ function(t) {
  cg(r, t);
  function r() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n._startRect = null, n._startPos = [], n._prevTime = 0, n._timer = 0, n._prevScrollPos = [0, 0], n._isWait = !1, n._flag = !1, n._currentOptions = null, n._lock = !1, n._unregister = null, n._onScroll = function() {
      var i = n._currentOptions;
      n._lock || !i || n.emit("scrollDrag", {
        next: function(a) {
          n.checkScroll({
            container: i.container,
            inputEvent: a
          });
        }
      });
    }, n;
  }
  var e = r.prototype;
  return e.dragStart = function(n, i) {
    var a = qe(i.container);
    if (!a) {
      this._flag = !1;
      return;
    }
    var o = 0, s = 0, u = 0, l = 0;
    if (a === document.body)
      u = window.innerWidth, l = window.innerHeight;
    else {
      var f = a.getBoundingClientRect();
      o = f.top, s = f.left, u = f.width, l = f.height;
    }
    this._flag = !0, this._startPos = [n.clientX, n.clientY], this._startRect = {
      top: o,
      left: s,
      width: u,
      height: l
    }, this._prevScrollPos = this._getScrollPosition([0, 0], i), this._currentOptions = i, this._registerScrollEvent(i);
  }, e.drag = function(n, i) {
    if (clearTimeout(this._timer), !!this._flag) {
      var a = n.clientX, o = n.clientY, s = i.threshold, u = s === void 0 ? 0 : s, l = this, f = l._startRect, c = l._startPos;
      this._currentOptions = i;
      var v = [0, 0];
      return f.top > o - u ? (c[1] > f.top || o < c[1]) && (v[1] = -1) : f.top + f.height < o + u && (c[1] < f.top + f.height || o > c[1]) && (v[1] = 1), f.left > a - u ? (c[0] > f.left || a < c[0]) && (v[0] = -1) : f.left + f.width < a + u && (c[0] < f.left + f.width || a > c[0]) && (v[0] = 1), !v[0] && !v[1] ? !1 : this._continueDrag(Hr(Hr({}, i), {
        direction: v,
        inputEvent: n,
        isDrag: !0
      }));
    }
  }, e.checkScroll = function(n) {
    var i = this;
    if (this._isWait)
      return !1;
    var a = n.prevScrollPos, o = a === void 0 ? this._prevScrollPos : a, s = n.direction, u = n.throttleTime, l = u === void 0 ? 0 : u, f = n.inputEvent, c = n.isDrag, v = this._getScrollPosition(s || [0, 0], n), p = v[0] - o[0], d = v[1] - o[1], h = s || [p ? Math.abs(p) / p : 0, d ? Math.abs(d) / d : 0];
    return this._prevScrollPos = v, this._lock = !1, !p && !d ? !1 : (this.emit("move", {
      offsetX: h[0] ? p : 0,
      offsetY: h[1] ? d : 0,
      inputEvent: f
    }), l && c && (clearTimeout(this._timer), this._timer = window.setTimeout(function() {
      i._continueDrag(n);
    }, l)), !0);
  }, e.dragEnd = function() {
    this._flag = !1, this._lock = !1, clearTimeout(this._timer), this._unregisterScrollEvent();
  }, e._getScrollPosition = function(n, i) {
    var a = i.container, o = i.getScrollPosition, s = o === void 0 ? vg : o;
    return s({
      container: qe(a),
      direction: n
    });
  }, e._continueDrag = function(n) {
    var i = this, a, o = n.container, s = n.direction, u = n.throttleTime, l = n.useScroll, f = n.isDrag, c = n.inputEvent;
    if (!(!this._flag || f && this._isWait)) {
      var v = we(), p = Math.max(u + this._prevTime - v, 0);
      if (p > 0)
        return clearTimeout(this._timer), this._timer = window.setTimeout(function() {
          i._continueDrag(n);
        }, p), !1;
      this._prevTime = v;
      var d = this._getScrollPosition(s, n);
      this._prevScrollPos = d, f && (this._isWait = !0), l || (this._lock = !0);
      var h = {
        container: qe(o),
        direction: s,
        inputEvent: c
      };
      return (a = n.requestScroll) === null || a === void 0 || a.call(n, h), this.emit("scroll", h), this._isWait = !1, l || this.checkScroll(Hr(Hr({}, n), {
        prevScrollPos: d,
        direction: s,
        inputEvent: c
      }));
    }
  }, e._registerScrollEvent = function(n) {
    this._unregisterScrollEvent();
    var i = n.checkScrollEvent;
    if (i) {
      var a = i === !0 ? Oo : i, o = qe(n.container);
      i === !0 && (o === document.body || o === document.documentElement) ? this._unregister = Oo(window, this._onScroll) : this._unregister = a(o, this._onScroll);
    }
  }, e._unregisterScrollEvent = function() {
    var n;
    (n = this._unregister) === null || n === void 0 || n.call(this), this._unregister = null;
  }, r;
}(Dn);
const dg = pg;
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
function hg() {
  for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length;
  for (var n = Array(t), i = 0, r = 0; r < e; r++)
    for (var a = arguments[r], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
function Ft(t) {
  return et(t, _t);
}
function gg(t, r) {
  return t.every(function(e, n) {
    return Ft(e - r[n]) === 0;
  });
}
function mg(t, r) {
  return !Ft(t[0] - r[0]) && !Ft(t[1] - r[1]);
}
function Su(t) {
  return t.length < 3 ? 0 : Math.abs(hh(t.map(function(r, e) {
    var n = t[e + 1] || t[0];
    return r[0] * n[1] - n[0] * r[1];
  }))) / 2;
}
function Io(t, r) {
  var e = r.width, n = r.height, i = r.left, a = r.top, o = Br(t), s = o.minX, u = o.minY, l = o.maxX, f = o.maxY, c = e / (l - s), v = n / (f - u);
  return t.map(function(p) {
    return [i + (p[0] - s) * c, a + (p[1] - u) * v];
  });
}
function Br(t) {
  var r = t.map(function(n) {
    return n[0];
  }), e = t.map(function(n) {
    return n[1];
  });
  return {
    minX: Math.min.apply(Math, r),
    minY: Math.min.apply(Math, e),
    maxX: Math.max.apply(Math, r),
    maxY: Math.max.apply(Math, e)
  };
}
function Ei(t, r, e) {
  var n = t[0], i = t[1], a = Br(r), o = a.minX, s = a.maxX, u = [[o, i], [s, i]], l = pn(u[0], u[1]), f = Si(r), c = [];
  if (f.forEach(function(d) {
    var h = pn(d[0], d[1]), g = d[0];
    if (gg(l, h))
      c.push({
        pos: t,
        line: d,
        type: "line"
      });
    else {
      var m = Cu(va(l, h), [u, d]);
      m.forEach(function(y) {
        d.some(function(b) {
          return mg(b, y);
        }) ? c.push({
          pos: y,
          line: d,
          type: "point"
        }) : Ft(g[1] - i) !== 0 && c.push({
          pos: y,
          line: d,
          type: "intersection"
        });
      });
    }
  }), !e && $t(c, function(d) {
    return d[0] === n;
  }))
    return !0;
  var v = 0, p = {};
  return c.forEach(function(d) {
    var h = d.pos, g = d.type, m = d.line;
    if (!(h[0] > n))
      if (g === "intersection")
        ++v;
      else {
        if (g === "line")
          return;
        if (g === "point") {
          var y = $t(m, function(C) {
            return C[1] !== i;
          }), b = p[h[0]], E = y[1] > i ? 1 : -1;
          b ? b !== E && ++v : p[h[0]] = E;
        }
      }
  }), v % 2 === 1;
}
function pn(t, r) {
  var e = t[0], n = t[1], i = r[0], a = r[1], o = i - e, s = a - n;
  Math.abs(o) < _t && (o = 0), Math.abs(s) < _t && (s = 0);
  var u = 0, l = 0, f = 0;
  return o ? s ? (u = -s / o, l = 1, f = -u * e - n) : (l = 1, f = -n) : s && (u = -1, f = e), [u, l, f];
}
function va(t, r) {
  var e = t[0], n = t[1], i = t[2], a = r[0], o = r[1], s = r[2], u = e === 0 && a === 0, l = n === 0 && o === 0, f = [];
  if (u && l)
    return [];
  if (u) {
    var c = -i / n, v = -s / o;
    return c !== v ? [] : [[-1 / 0, c], [1 / 0, c]];
  } else if (l) {
    var p = -i / e, d = -s / a;
    return p !== d ? [] : [[p, -1 / 0], [p, 1 / 0]];
  } else if (e === 0) {
    var h = -i / n, g = -(o * h + s) / a;
    f = [[g, h]];
  } else if (a === 0) {
    var h = -s / o, g = -(n * h + i) / e;
    f = [[g, h]];
  } else if (n === 0) {
    var g = -i / e, h = -(a * g + s) / o;
    f = [[g, h]];
  } else if (o === 0) {
    var g = -s / a, h = -(e * g + i) / n;
    f = [[g, h]];
  } else {
    var g = (n * s - o * i) / (o * e - n * a), h = -(e * g + i) / n;
    f = [[g, h]];
  }
  return f.map(function(m) {
    return [m[0], m[1]];
  });
}
function Cu(t, r) {
  var e = r.map(function(c) {
    return [0, 1].map(function(v) {
      return [Math.min(c[0][v], c[1][v]), Math.max(c[0][v], c[1][v])];
    });
  }), n = [];
  if (t.length === 2) {
    var i = t[0], a = i[0], o = i[1];
    if (Ft(a - t[1][0])) {
      if (!Ft(o - t[1][1])) {
        var l = Math.max.apply(Math, e.map(function(c) {
          return c[0][0];
        })), f = Math.min.apply(Math, e.map(function(c) {
          return c[0][1];
        }));
        if (Ft(l - f) > 0)
          return [];
        n = [[l, o], [f, o]];
      }
    } else {
      var s = Math.max.apply(Math, e.map(function(c) {
        return c[1][0];
      })), u = Math.min.apply(Math, e.map(function(c) {
        return c[1][1];
      }));
      if (Ft(s - u) > 0)
        return [];
      n = [[a, s], [a, u]];
    }
  }
  return n.length || (n = t.filter(function(c) {
    var v = c[0], p = c[1];
    return e.every(function(d) {
      return 0 <= Ft(v - d[0][0]) && 0 <= Ft(d[0][1] - v) && 0 <= Ft(p - d[1][0]) && 0 <= Ft(d[1][1] - p);
    });
  })), n.map(function(c) {
    return [Ft(c[0]), Ft(c[1])];
  });
}
function Si(t) {
  return hg(t.slice(1), [t[0]]).map(function(r, e) {
    return [t[e], r];
  });
}
function yg(t, r) {
  var e = t.slice(), n = r.slice();
  So(e) === -1 && e.reverse(), So(n) === -1 && n.reverse();
  var i = Si(e), a = Si(n), o = i.map(function(f) {
    return pn(f[0], f[1]);
  }), s = a.map(function(f) {
    return pn(f[0], f[1]);
  }), u = [];
  o.forEach(function(f, c) {
    var v = i[c], p = [];
    s.forEach(function(d, h) {
      var g = va(f, d), m = Cu(g, [v, a[h]]);
      p.push.apply(p, m.map(function(y) {
        return {
          index1: c,
          index2: h,
          pos: y,
          type: "intersection"
        };
      }));
    }), p.sort(function(d, h) {
      return sr(v[0], d.pos) - sr(v[0], h.pos);
    }), u.push.apply(u, p), Ei(v[1], n) && u.push({
      index1: c,
      index2: -1,
      pos: v[1],
      type: "inside"
    });
  }), a.forEach(function(f, c) {
    if (Ei(f[1], e)) {
      var v = !1, p = fr(u, function(d) {
        var h = d.index2;
        return h === c ? (v = !0, !1) : !!v;
      });
      p === -1 && (v = !1, p = fr(u, function(d) {
        var h = d.index1, g = d.index2;
        return h === -1 && g + 1 === c ? (v = !0, !1) : !!v;
      })), p === -1 ? u.push({
        index1: -1,
        index2: c,
        pos: f[1],
        type: "inside"
      }) : u.splice(p, 0, {
        index1: -1,
        index2: c,
        pos: f[1],
        type: "inside"
      });
    }
  });
  var l = {};
  return u.filter(function(f) {
    var c = f.pos, v = c[0] + "x" + c[1];
    return l[v] ? !1 : (l[v] = !0, !0);
  });
}
function xg(t, r) {
  var e = yg(t, r);
  return e.map(function(n) {
    var i = n.pos;
    return i;
  });
}
function bg(t, r) {
  var e = xg(t, r);
  return Su(e);
}
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
var Ci = function(t, r) {
  return Ci = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (e[i] = n[i]);
  }, Ci(t, r);
};
function Eg(t, r) {
  Ci(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Ct = function() {
  return Ct = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Ct.apply(this, arguments);
};
function Sg(t, r) {
  var e = r[0] - t[0], n = r[1] - t[1], i = Math.atan2(n, e);
  return i >= 0 ? i : i + Math.PI * 2;
}
function Kn(t) {
  return Sg([
    t[0].clientX,
    t[0].clientY
  ], [
    t[1].clientX,
    t[1].clientY
  ]) / Math.PI * 180;
}
function Cg(t) {
  return t.touches && t.touches.length >= 2;
}
function Ue(t) {
  return t ? t.touches ? Mg(t.touches) : [_u(t)] : [];
}
function _g(t) {
  return t && (t.type.indexOf("mouse") > -1 || "button" in t);
}
function ko(t, r, e) {
  var n = e.length, i = Se(t, n), a = i.clientX, o = i.clientY, s = i.originalClientX, u = i.originalClientY, l = Se(r, n), f = l.clientX, c = l.clientY, v = Se(e, n), p = v.clientX, d = v.clientY, h = a - f, g = o - c, m = a - p, y = o - d;
  return {
    clientX: s,
    clientY: u,
    deltaX: h,
    deltaY: g,
    distX: m,
    distY: y
  };
}
function Zn(t) {
  return Math.sqrt(Math.pow(t[0].clientX - t[1].clientX, 2) + Math.pow(t[0].clientY - t[1].clientY, 2));
}
function Mg(t) {
  for (var r = Math.min(t.length, 2), e = [], n = 0; n < r; ++n)
    e.push(_u(t[n]));
  return e;
}
function _u(t) {
  return {
    clientX: t.clientX,
    clientY: t.clientY
  };
}
function Se(t, r) {
  r === void 0 && (r = t.length);
  for (var e = {
    clientX: 0,
    clientY: 0,
    originalClientX: 0,
    originalClientY: 0
  }, n = Math.min(t.length, r), i = 0; i < n; ++i) {
    var a = t[i];
    e.originalClientX += "originalClientX" in a ? a.originalClientX : a.clientX, e.originalClientY += "originalClientY" in a ? a.originalClientY : a.clientY, e.clientX += a.clientX, e.clientY += a.clientY;
  }
  return r ? {
    clientX: e.clientX / r,
    clientY: e.clientY / r,
    originalClientX: e.originalClientX / r,
    originalClientY: e.originalClientY / r
  } : e;
}
var Jn = /* @__PURE__ */ function() {
  function t(r) {
    this.prevClients = [], this.startClients = [], this.movement = 0, this.length = 0, this.startClients = r, this.prevClients = r, this.length = r.length;
  }
  return t.prototype.getAngle = function(r) {
    return r === void 0 && (r = this.prevClients), Kn(r);
  }, t.prototype.getRotation = function(r) {
    return r === void 0 && (r = this.prevClients), Kn(r) - Kn(this.startClients);
  }, t.prototype.getPosition = function(r, e) {
    r === void 0 && (r = this.prevClients);
    var n = ko(r || this.prevClients, this.prevClients, this.startClients), i = n.deltaX, a = n.deltaY;
    return this.movement += Math.sqrt(i * i + a * a), this.prevClients = r, n;
  }, t.prototype.getPositions = function(r) {
    r === void 0 && (r = this.prevClients);
    for (var e = this.prevClients, n = this.startClients, i = Math.min(this.length, e.length), a = [], o = 0; o < i; ++o)
      a[o] = ko([r[o]], [e[o]], [n[o]]);
    return a;
  }, t.prototype.getMovement = function(r) {
    var e = this.movement;
    if (!r)
      return e;
    var n = Se(r, this.length), i = Se(this.prevClients, this.length), a = n.clientX - i.clientX, o = n.clientY - i.clientY;
    return Math.sqrt(a * a + o * o) + e;
  }, t.prototype.getDistance = function(r) {
    return r === void 0 && (r = this.prevClients), Zn(r);
  }, t.prototype.getScale = function(r) {
    return r === void 0 && (r = this.prevClients), Zn(r) / Zn(this.startClients);
  }, t.prototype.move = function(r, e) {
    this.startClients.forEach(function(n) {
      n.clientX -= r, n.clientY -= e;
    }), this.prevClients.forEach(function(n) {
      n.clientX -= r, n.clientY -= e;
    });
  }, t;
}(), Ao = ["textarea", "input"], Tg = /* @__PURE__ */ function(t) {
  Eg(r, t);
  function r(e, n) {
    n === void 0 && (n = {});
    var i = t.call(this) || this;
    i.options = {}, i.flag = !1, i.pinchFlag = !1, i.data = {}, i.isDrag = !1, i.isPinch = !1, i.clientStores = [], i.targets = [], i.prevTime = 0, i.doubleFlag = !1, i._useMouse = !1, i._useTouch = !1, i._useDrag = !1, i._dragFlag = !1, i._isTrusted = !1, i._isMouseEvent = !1, i._isSecondaryButton = !1, i._preventMouseEvent = !1, i._prevInputEvent = null, i._isDragAPI = !1, i._isIdle = !0, i._window = window, i.onDragStart = function(v, p) {
      if (p === void 0 && (p = !0), !(!i.flag && v.cancelable === !1)) {
        var d = v.type.indexOf("drag") >= -1;
        if (!(i.flag && d)) {
          i._isDragAPI = !0;
          var h = i.options, g = h.container, m = h.pinchOutside, y = h.preventWheelClick, b = h.preventRightClick, E = h.preventDefault, C = h.checkInput, x = h.dragFocusedInput, S = h.preventClickEventOnDragStart, _ = h.preventClickEventOnDrag, T = h.preventClickEventByCondition, D = i._useTouch, O = !i.flag;
          if (i._isSecondaryButton = v.which === 3 || v.button === 2, y && (v.which === 2 || v.button === 1) || b && (v.which === 3 || v.button === 2))
            return i.stop(), !1;
          if (O) {
            var R = i._window.document.activeElement, w = v.target;
            if (w) {
              var I = w.tagName.toLowerCase(), k = Ao.indexOf(I) > -1, F = w.isContentEditable;
              if (k || F) {
                if (C || !x && R === w)
                  return !1;
                if (R && (R === w || F && R.isContentEditable && R.contains(w)))
                  if (x)
                    w.blur();
                  else
                    return !1;
              } else if ((E || v.type === "touchstart") && R) {
                var L = R.tagName.toLowerCase();
                (R.isContentEditable || Ao.indexOf(L) > -1) && R.blur();
              }
              (S || _ || T) && Ot(i._window, "click", i._onClick, !0);
            }
            i.clientStores = [new Jn(Ue(v))], i._isIdle = !1, i.flag = !0, i.isDrag = !1, i._isTrusted = p, i._dragFlag = !0, i._prevInputEvent = v, i.data = {}, i.doubleFlag = we() - i.prevTime < 200, i._isMouseEvent = _g(v), !i._isMouseEvent && i._preventMouseEvent && (i._preventMouseEvent = !1);
            var A = i._preventMouseEvent || i.emit("dragStart", Ct(Ct({ data: i.data, datas: i.data, inputEvent: v, isMouseEvent: i._isMouseEvent, isSecondaryButton: i._isSecondaryButton, isTrusted: p, isDouble: i.doubleFlag }, i.getCurrentStore().getPosition()), { preventDefault: function() {
              v.preventDefault();
            }, preventDrag: function() {
              i._dragFlag = !1;
            } }));
            A === !1 && i.stop(), i._isMouseEvent && i.flag && E && v.preventDefault();
          }
          if (!i.flag)
            return !1;
          var $ = 0;
          if (O ? (i._attchDragEvent(), D && m && ($ = setTimeout(function() {
            Ot(g, "touchstart", i.onDragStart, {
              passive: !1
            });
          }))) : D && m && Pt(g, "touchstart", i.onDragStart), i.flag && Cg(v)) {
            if (clearTimeout($), O && v.touches.length !== v.changedTouches.length)
              return;
            i.pinchFlag || i.onPinchStart(v);
          }
        }
      }
    }, i.onDrag = function(v, p) {
      if (i.flag) {
        var d = i.options.preventDefault;
        !i._isMouseEvent && d && v.preventDefault(), i._prevInputEvent = v;
        var h = Ue(v), g = i.moveClients(h, v, !1);
        if (i._dragFlag) {
          if (i.pinchFlag || g.deltaX || g.deltaY) {
            var m = i._preventMouseEvent || i.emit("drag", Ct(Ct({}, g), { isScroll: !!p, inputEvent: v }));
            if (m === !1) {
              i.stop();
              return;
            }
          }
          i.pinchFlag && i.onPinch(v, h);
        }
        i.getCurrentStore().getPosition(h, !0);
      }
    }, i.onDragEnd = function(v) {
      if (i.flag) {
        var p = i.options, d = p.pinchOutside, h = p.container, g = p.preventClickEventOnDrag, m = p.preventClickEventOnDragStart, y = p.preventClickEventByCondition, b = i.isDrag;
        (g || m || y) && requestAnimationFrame(function() {
          i._allowClickEvent();
        }), !y && !m && g && !b && i._allowClickEvent(), i._useTouch && d && Pt(h, "touchstart", i.onDragStart), i.pinchFlag && i.onPinchEnd(v);
        var E = v != null && v.touches ? Ue(v) : [], C = E.length;
        C === 0 || !i.options.keepDragging ? i.flag = !1 : i._addStore(new Jn(E));
        var x = i._getPosition(), S = we(), _ = !b && i.doubleFlag;
        i._prevInputEvent = null, i.prevTime = b || _ ? 0 : S, i.flag || (i._dettachDragEvent(), i._preventMouseEvent || i.emit("dragEnd", Ct({ data: i.data, datas: i.data, isDouble: _, isDrag: b, isClick: !b, isMouseEvent: i._isMouseEvent, isSecondaryButton: i._isSecondaryButton, inputEvent: v, isTrusted: i._isTrusted }, x)), i.clientStores = [], i._isMouseEvent || (i._preventMouseEvent = !0, requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            i._preventMouseEvent = !1;
          });
        })), i._isIdle = !0);
      }
    }, i.onBlur = function() {
      i.onDragEnd();
    }, i._allowClickEvent = function() {
      Pt(i._window, "click", i._onClick, !0);
    }, i._onClick = function(v) {
      i._allowClickEvent(), i._preventMouseEvent = !1;
      var p = i.options.preventClickEventByCondition;
      p != null && p(v) || (v.stopPropagation(), v.preventDefault());
    }, i._onContextMenu = function(v) {
      var p = i.options;
      p.preventRightClick ? i.onDragEnd(v) : v.preventDefault();
    }, i._passCallback = function() {
    };
    var a = [].concat(e), o = a[0];
    i._window = Js(o) ? o : xr(o), i.options = Ct({ checkInput: !1, container: o && !("document" in o) ? xr(o) : o, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, n);
    var s = i.options, u = s.container, l = s.events, f = s.checkWindowBlur;
    if (i._useDrag = l.indexOf("drag") > -1, i._useTouch = l.indexOf("touch") > -1, i._useMouse = l.indexOf("mouse") > -1, i.targets = a, i._useDrag && a.forEach(function(v) {
      Ot(v, "dragstart", i.onDragStart);
    }), i._useMouse && (a.forEach(function(v) {
      Ot(v, "mousedown", i.onDragStart), Ot(v, "mousemove", i._passCallback);
    }), Ot(u, "contextmenu", i._onContextMenu)), f && Ot(xr(), "blur", i.onBlur), i._useTouch) {
      var c = {
        passive: !1
      };
      a.forEach(function(v) {
        Ot(v, "touchstart", i.onDragStart, c), Ot(v, "touchmove", i._passCallback, c);
      });
    }
    return i;
  }
  return r.prototype.stop = function() {
    this.isDrag = !1, this.data = {}, this.clientStores = [], this.pinchFlag = !1, this.doubleFlag = !1, this.prevTime = 0, this.flag = !1, this._isIdle = !0, this._allowClickEvent(), this._dettachDragEvent(), this._isDragAPI = !1;
  }, r.prototype.getMovement = function(e) {
    return this.getCurrentStore().getMovement(e) + this.clientStores.slice(1).reduce(function(n, i) {
      return n + i.movement;
    }, 0);
  }, r.prototype.isDragging = function() {
    return this.isDrag;
  }, r.prototype.isIdle = function() {
    return this._isIdle;
  }, r.prototype.isFlag = function() {
    return this.flag;
  }, r.prototype.isPinchFlag = function() {
    return this.pinchFlag;
  }, r.prototype.isDoubleFlag = function() {
    return this.doubleFlag;
  }, r.prototype.isPinching = function() {
    return this.isPinch;
  }, r.prototype.scrollBy = function(e, n, i, a) {
    a === void 0 && (a = !0), this.flag && (this.clientStores[0].move(e, n), a && this.onDrag(i, !0));
  }, r.prototype.move = function(e, n) {
    var i = e[0], a = e[1], o = this.getCurrentStore(), s = o.prevClients;
    return this.moveClients(s.map(function(u) {
      var l = u.clientX, f = u.clientY;
      return {
        clientX: l + i,
        clientY: f + a,
        originalClientX: l,
        originalClientY: f
      };
    }), n, !0);
  }, r.prototype.triggerDragStart = function(e) {
    this.onDragStart(e, !1);
  }, r.prototype.setEventData = function(e) {
    var n = this.data;
    for (var i in e)
      n[i] = e[i];
    return this;
  }, r.prototype.setEventDatas = function(e) {
    return this.setEventData(e);
  }, r.prototype.getCurrentEvent = function(e) {
    return e === void 0 && (e = this._prevInputEvent), Ct(Ct({ data: this.data, datas: this.data }, this._getPosition()), { movement: this.getMovement(), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, inputEvent: e });
  }, r.prototype.getEventData = function() {
    return this.data;
  }, r.prototype.getEventDatas = function() {
    return this.data;
  }, r.prototype.unset = function() {
    var e = this, n = this.targets, i = this.options.container;
    this.off(), Pt(this._window, "blur", this.onBlur), this._useDrag && n.forEach(function(a) {
      Pt(a, "dragstart", e.onDragStart);
    }), this._useMouse && (n.forEach(function(a) {
      Pt(a, "mousedown", e.onDragStart);
    }), Pt(i, "contextmenu", this._onContextMenu)), this._useTouch && (n.forEach(function(a) {
      Pt(a, "touchstart", e.onDragStart);
    }), Pt(i, "touchstart", this.onDragStart)), this._prevInputEvent = null, this._allowClickEvent(), this._dettachDragEvent();
  }, r.prototype.onPinchStart = function(e) {
    var n = this, i = this.options.pinchThreshold;
    if (!(this.isDrag && this.getMovement() > i)) {
      var a = new Jn(Ue(e));
      this.pinchFlag = !0, this._addStore(a);
      var o = this.emit("pinchStart", Ct(Ct({ data: this.data, datas: this.data, angle: a.getAngle(), touches: this.getCurrentStore().getPositions() }, a.getPosition()), { inputEvent: e, isTrusted: this._isTrusted, preventDefault: function() {
        e.preventDefault();
      }, preventDrag: function() {
        n._dragFlag = !1;
      } }));
      o === !1 && (this.pinchFlag = !1);
    }
  }, r.prototype.onPinch = function(e, n) {
    if (!(!this.flag || !this.pinchFlag || n.length < 2)) {
      var i = this.getCurrentStore();
      this.isPinch = !0, this.emit("pinch", Ct(Ct({ data: this.data, datas: this.data, movement: this.getMovement(n), angle: i.getAngle(n), rotation: i.getRotation(n), touches: i.getPositions(n), scale: i.getScale(n), distance: i.getDistance(n) }, i.getPosition(n)), { inputEvent: e, isTrusted: this._isTrusted }));
    }
  }, r.prototype.onPinchEnd = function(e) {
    if (this.pinchFlag) {
      var n = this.isPinch;
      this.isPinch = !1, this.pinchFlag = !1;
      var i = this.getCurrentStore();
      this.emit("pinchEnd", Ct(Ct({ data: this.data, datas: this.data, isPinch: n, touches: i.getPositions() }, i.getPosition()), { inputEvent: e }));
    }
  }, r.prototype.getCurrentStore = function() {
    return this.clientStores[0];
  }, r.prototype.moveClients = function(e, n, i) {
    var a = this._getPosition(e, i), o = this.isDrag;
    (a.deltaX || a.deltaY) && (this.isDrag = !0);
    var s = !1;
    return !o && this.isDrag && (s = !0), Ct(Ct({ data: this.data, datas: this.data }, a), { movement: this.getMovement(e), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, isMouseEvent: this._isMouseEvent, isSecondaryButton: this._isSecondaryButton, inputEvent: n, isTrusted: this._isTrusted, isFirstDrag: s });
  }, r.prototype._addStore = function(e) {
    this.clientStores.splice(0, 0, e);
  }, r.prototype._getPosition = function(e, n) {
    var i = this.getCurrentStore(), a = i.getPosition(e, n), o = this.clientStores.slice(1).reduce(function(l, f) {
      var c = f.getPosition();
      return l.distX += c.distX, l.distY += c.distY, l;
    }, a), s = o.distX, u = o.distY;
    return Ct(Ct({}, a), { distX: s, distY: u });
  }, r.prototype._attchDragEvent = function() {
    var e = this._window, n = this.options.container, i = {
      passive: !1
    };
    this._isDragAPI && (Ot(n, "dragover", this.onDrag, i), Ot(e, "dragend", this.onDragEnd)), this._useMouse && (Ot(n, "mousemove", this.onDrag), Ot(e, "mouseup", this.onDragEnd)), this._useTouch && (Ot(n, "touchmove", this.onDrag, i), Ot(e, "touchend", this.onDragEnd, i), Ot(e, "touchcancel", this.onDragEnd, i));
  }, r.prototype._dettachDragEvent = function() {
    var e = this._window, n = this.options.container;
    this._isDragAPI && (Pt(n, "dragover", this.onDrag), Pt(e, "dragend", this.onDragEnd)), this._useMouse && (Pt(n, "mousemove", this.onDrag), Pt(e, "mouseup", this.onDragEnd)), this._useTouch && (Pt(n, "touchstart", this.onDragStart), Pt(n, "touchmove", this.onDrag), Pt(e, "touchend", this.onDragEnd), Pt(e, "touchcancel", this.onDragEnd));
  }, r;
}(Dn);
function Pg(t) {
  for (var r = 5381, e = t.length; e; )
    r = r * 33 ^ t.charCodeAt(--e);
  return r >>> 0;
}
var Dg = Pg;
function wg(t) {
  return Dg(t).toString(36);
}
function Rg(t) {
  if (t && t.getRootNode) {
    var r = t.getRootNode();
    if (r.nodeType === 11)
      return r;
  }
}
function Og(t, r, e) {
  return e.original ? r : r.replace(/([^};{\s}][^};{]*|^\s*){/mg, function(n, i) {
    var a = i.trim();
    return (a ? Or(a) : [""]).map(function(o) {
      var s = o.trim();
      return s.indexOf("@") === 0 ? s : s.indexOf(":global") > -1 ? s.replace(/\:global/g, "") : s.indexOf(":host") > -1 ? "".concat(s.replace(/\:host/g, ".".concat(t))) : s ? ".".concat(t, " ").concat(s) : ".".concat(t);
    }).join(", ") + " {";
  });
}
function Ig(t, r, e, n, i) {
  var a = le(n), o = a.createElement("style");
  return o.setAttribute("type", "text/css"), o.setAttribute("data-styled-id", t), o.setAttribute("data-styled-count", "1"), e.nonce && o.setAttribute("nonce", e.nonce), o.innerHTML = Og(t, r, e), (i || a.head || a.body).appendChild(o), o;
}
function kg(t) {
  var r = "rCS" + wg(t);
  return {
    className: r,
    inject: function(e, n) {
      n === void 0 && (n = {});
      var i = Rg(e), a = (i || e.ownerDocument || document).querySelector('style[data-styled-id="'.concat(r, '"]'));
      if (!a)
        a = Ig(r, t, n, e, i);
      else {
        var o = parseFloat(a.getAttribute("data-styled-count")) || 0;
        a.setAttribute("data-styled-count", "".concat(o + 1));
      }
      return {
        destroy: function() {
          var s, u = parseFloat(a.getAttribute("data-styled-count")) || 0;
          u <= 1 ? (a.remove ? a.remove() : (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = null) : a.setAttribute("data-styled-count", "".concat(u - 1));
        }
      };
    }
  };
}
var _i = function() {
  return _i = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, _i.apply(this, arguments);
};
function Ag(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (e[n[i]] = t[n[i]]);
  return e;
}
function Mu(t, r) {
  var e = kg(r), n = e.className;
  return wh(function(i, a) {
    var o = i.className, s = o === void 0 ? "" : o;
    i.cspNonce;
    var u = Ag(i, ["className", "cspNonce"]), l = jh();
    return Yh(a, function() {
      return l.current;
    }, []), lu(function() {
      var f = e.inject(l.current, {
        nonce: i.cspNonce
      });
      return function() {
        f.destroy();
      };
    }, []), Kt(t, _i({
      ref: l,
      "data-styled-id": n,
      className: "".concat(s, " ").concat(n)
    }, u));
  });
}
var Mi = function(t, r) {
  return Mi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, Mi(t, r);
};
function je(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Mi(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var M = function() {
  return M = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, M.apply(this, arguments);
};
function Bg(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (e[n[i]] = t[n[i]]);
  return e;
}
function zg(t, r, e, n) {
  var i = arguments.length, a = i < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, e) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(t, r, e, n);
  else
    for (var s = t.length - 1; s >= 0; s--)
      (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(r, e, a) : o(r, e)) || a);
  return i > 3 && a && Object.defineProperty(r, e, a), a;
}
function Gg(t) {
  var r = typeof Symbol == "function" && Symbol.iterator, e = r && t[r], n = 0;
  if (e)
    return e.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function P(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var n = e.call(t), i, a = [], o;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (e = n.return) && e.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}
function N(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, i = r.length, a; n < i; n++)
      (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return t.concat(a || Array.prototype.slice.call(r));
}
function ce(t, r) {
  return M({ events: [], props: [], name: t }, r);
}
var Lg = ["n", "w", "s", "e"], pa = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function Fg(t, r) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * t, 'px" height="').concat(32 * t, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(r, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function Ng(t) {
  var r = Fg(1, t), e = Math.round(t / 45) * 45 % 180, n = "ns-resize";
  return e === 135 ? n = "nwse-resize" : e === 45 ? n = "nesw-resize" : e === 90 && (n = "ew-resize"), "cursor:".concat(n, ";cursor: url('").concat(r, "') 16 16, ").concat(n, ";");
}
var ve = qh(), Tu = ve.browser.webkit, Pu = Tu && function() {
  var t = typeof window == "undefined" ? { userAgent: "" } : window.navigator, r = /applewebkit\/([^\s]+)/g.exec(t.userAgent.toLowerCase());
  return r ? parseFloat(r[1]) < 605 : !1;
}(), Du = ve.browser.name, wu = parseInt(ve.browser.version, 10), $g = Du === "chrome", jg = ve.browser.chromium, Yg = parseInt(ve.browser.chromiumVersion, 10) || 0, Wg = $g && wu >= 109 || jg && Yg >= 109, Xg = Du === "firefox", Hg = parseInt(ve.browser.webkitVersion, 10) >= 612 || wu >= 15, da = "moveable-", Vg = pa.map(function(t) {
  var r = "", e = "", n = "center", i = "center", a = "calc(var(--moveable-control-padding, 20) * -1px)";
  return t.indexOf("n") > -1 && (r = "top: ".concat(a, ";"), i = "bottom"), t.indexOf("s") > -1 && (r = "top: 0px;", i = "top"), t.indexOf("w") > -1 && (e = "left: ".concat(a, ";"), n = "right"), t.indexOf("e") > -1 && (e = "left: 0px;", n = "left"), '.around-control[data-direction*="'.concat(t, `"] {
        `).concat(e).concat(r, `
        transform-origin: `).concat(n, " ").concat(i, `;
    }`);
}).join(`
`), qg = `
{
position: absolute;
width: 1px;
height: 1px;
left: 0;
top: 0;
z-index: 3000;
--moveable-color: #4af;
--zoom: 1;
--zoompx: 1px;
--moveable-line-padding: 0;
--moveable-control-padding: 0;
will-change: transform;
outline: 1px solid transparent;
}
.control-box {
z-index: 0;
}
.line, .control {
position: absolute;
left: 0;
top: 0;
will-change: transform;
}
.control {
width: 14px;
height: 14px;
border-radius: 50%;
border: 2px solid #fff;
box-sizing: border-box;
background: #4af;
background: var(--moveable-color);
margin-top: -7px;
margin-left: -7px;
border: 2px solid #fff;
z-index: 10;
}
.around-control {
position: absolute;
will-change: transform;
width: calc(var(--moveable-control-padding, 20) * 1px);
height: calc(var(--moveable-control-padding, 20) * 1px);
left: calc(var(--moveable-control-padding, 20) * -0.5px);
top: calc(var(--moveable-control-padding, 20) * -0.5px);
box-sizing: border-box;
background: transparent;
z-index: 8;
cursor: alias;
transform-origin: center center;
}
`.concat(Vg, `
.padding {
position: absolute;
top: 0px;
left: 0px;
width: 100px;
height: 100px;
transform-origin: 0 0;
}
.line {
width: 1px;
height: 1px;
background: #4af;
background: var(--moveable-color);
transform-origin: 0px 50%;
}
.line.edge {
z-index: 1;
background: transparent;
}
.line.dashed {
box-sizing: border-box;
background: transparent;
}
.line.dashed.horizontal {
border-top: 1px dashed #4af;
border-top-color: #4af;
border-top-color: var(--moveable-color);
}
.line.dashed.vertical {
border-left: 1px dashed #4af;
border-left-color: #4af;
border-left-color: var(--moveable-color);
}
.line.vertical {
transform: translateX(-50%);
}
.line.horizontal {
transform: translateY(-50%);
}
.line.vertical.bold {
width: 2px;
}
.line.horizontal.bold {
height: 2px;
}

.control.origin {
border-color: #f55;
background: #fff;
width: 12px;
height: 12px;
margin-top: -6px;
margin-left: -6px;
pointer-events: none;
}
`).concat([0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map(function(t) {
  return `
.direction[data-rotation="`.concat(t, '"], :global .view-control-rotation').concat(t, ` {
`).concat(Ng(t), `
}
`);
}).join(`
`), `

.line.direction:before {
content: "";
position: absolute;
width: 100%;
height: calc(var(--moveable-line-padding, 0) * 1px);
bottom: 0;
left: 0;
}
.group {
z-index: -1;
}
.area {
position: absolute;
}
.area-pieces {
position: absolute;
top: 0;
left: 0;
display: none;
}
.area.avoid, .area.pass {
pointer-events: none;
}
.area.avoid+.area-pieces {
display: block;
}
.area-piece {
position: absolute;
}

`).concat(Pu ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), Ug = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], Ti = 1e-4, Lt = 1e-7, Ke = 1e-9, Pi = Math.pow(10, 10), Bo = -Pi, Kg = {
  n: [0, -1],
  e: [1, 0],
  s: [0, 1],
  w: [-1, 0],
  nw: [-1, -1],
  ne: [1, -1],
  sw: [-1, 1],
  se: [1, 1]
}, ha = {
  n: [0, 1],
  e: [1, 3],
  s: [3, 2],
  w: [2, 0],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}, Ru = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, Ou = [
  "isMoveableElement",
  "updateRect",
  "updateTarget",
  "destroy",
  "dragStart",
  "isInside",
  "hitTest",
  "setState",
  "getRect",
  "request",
  "isDragging",
  "getManager",
  "forceUpdate",
  "waitToChangeTarget",
  "updateSelectors",
  "getTargets",
  "stopDrag",
  "getControlBoxElement",
  "getMoveables",
  "getDragElement"
];
function Ye(t, r, e, n, i, a) {
  var o, s;
  a === void 0 && (a = "draggable");
  var u = (s = (o = r.gestos[a]) === null || o === void 0 ? void 0 : o.move(e, t.inputEvent)) !== null && s !== void 0 ? s : {}, l = u.originalDatas || u.datas, f = l[a] || (l[a] = {});
  return M(M({}, i ? ml(r, u) : u), { isPinch: !!n, parentEvent: !0, datas: f, originalDatas: t.originalDatas });
}
var ne = /* @__PURE__ */ function() {
  function t(r) {
    var e;
    r === void 0 && (r = "draggable"), this.ableName = r, this.prevX = 0, this.prevY = 0, this.startX = 0, this.startY = 0, this.isDrag = !1, this.isFlag = !1, this.datas = {
      draggable: {}
    }, this.datas = (e = {}, e[r] = {}, e);
  }
  return t.prototype.dragStart = function(r, e) {
    this.isDrag = !1, this.isFlag = !1;
    var n = e.originalDatas;
    return this.datas = n, n[this.ableName] || (n[this.ableName] = {}), M(M({}, this.move(r, e.inputEvent)), { type: "dragstart" });
  }, t.prototype.drag = function(r, e) {
    return this.move([
      r[0] - this.prevX,
      r[1] - this.prevY
    ], e);
  }, t.prototype.move = function(r, e) {
    var n, i, a = !1;
    if (!this.isFlag)
      this.prevX = r[0], this.prevY = r[1], this.startX = r[0], this.startY = r[1], n = r[0], i = r[1], this.isFlag = !0;
    else {
      var o = this.isDrag;
      n = this.prevX + r[0], i = this.prevY + r[1], (r[0] || r[1]) && (this.isDrag = !0), !o && this.isDrag && (a = !0);
    }
    return this.prevX = n, this.prevY = i, {
      type: "drag",
      clientX: n,
      clientY: i,
      inputEvent: e,
      isFirstDrag: a,
      isDrag: this.isDrag,
      distX: n - this.startX,
      distY: i - this.startY,
      deltaX: r[0],
      deltaY: r[1],
      datas: this.datas[this.ableName],
      originalDatas: this.datas,
      parentEvent: !0,
      parentGesto: this
    };
  }, t;
}();
function Qr(t, r, e, n) {
  var i = t.length === 16, a = i ? 4 : 3, o = Yr(t, e, n, a), s = P(o, 4), u = P(s[0], 2), l = u[0], f = u[1], c = P(s[1], 2), v = c[0], p = c[1], d = P(s[2], 2), h = d[0], g = d[1], m = P(s[3], 2), y = m[0], b = m[1], E = P(bt(t, r, a), 2), C = E[0], x = E[1], S = Math.min(l, v, h, y), _ = Math.min(f, p, g, b), T = Math.max(l, v, h, y), D = Math.max(f, p, g, b);
  l = l - S || 0, v = v - S || 0, h = h - S || 0, y = y - S || 0, f = f - _ || 0, p = p - _ || 0, g = g - _ || 0, b = b - _ || 0, C = C - S || 0, x = x - _ || 0;
  var O = t[0], R = t[a + 1], w = Xt(O * R);
  return {
    left: S,
    top: _,
    right: T,
    bottom: D,
    origin: [C, x],
    pos1: [l, f],
    pos2: [v, p],
    pos3: [h, g],
    pos4: [y, b],
    direction: w
  };
}
function Iu(t, r) {
  var e = r.clientX, n = r.clientY, i = r.datas, a = t.state, o = a.moveableClientRect, s = a.rootMatrix, u = a.is3d, l = a.pos1, f = o.left, c = o.top, v = u ? 4 : 3, p = P(tt(oe(s, [e - f, n - c], v), l), 2), d = p[0], h = p[1], g = P(ar({ datas: i, distX: d, distY: h }), 2), m = g[0], y = g[1];
  return [m, y];
}
function jr(t, r) {
  var e = r.datas, n = t.state, i = n.allMatrix, a = n.beforeMatrix, o = n.is3d, s = n.left, u = n.top, l = n.origin, f = n.offsetMatrix, c = n.targetMatrix, v = n.transformOrigin, p = o ? 4 : 3;
  e.is3d = o, e.matrix = i, e.targetMatrix = c, e.beforeMatrix = a, e.offsetMatrix = f, e.transformOrigin = v, e.inverseMatrix = ir(i, p), e.inverseBeforeMatrix = ir(a, p), e.absoluteOrigin = kr(lt([s, u], l), p), e.startDragBeforeDist = kt(e.inverseBeforeMatrix, e.absoluteOrigin, p), e.startDragDist = kt(e.inverseMatrix, e.absoluteOrigin, p);
}
function Zg(t) {
  return Qr(t.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function wn(t, r, e) {
  var n = r.datas, i = r.originalDatas.beforeRenderable, a = n.transformIndex, o = i.nextTransforms, s = o.length, u = i.nextTransformAppendedIndexes, l = -1;
  a === -1 ? (e === "translate" ? l = 0 : e === "rotate" && (l = fr(o, function(p) {
    return p.match(/scale\(/g);
  })), l === -1 && (l = o.length), n.transformIndex = l) : $t(u, function(p) {
    return p.index === a && p.functionName === e;
  }) ? l = a : l = a + u.filter(function(p) {
    return p.index < a;
  }).length;
  var f = Sm(o, t.state, l), c = f.targetFunction, v = e === "rotate" ? "rotateZ" : e;
  n.beforeFunctionTexts = f.beforeFunctionTexts, n.afterFunctionTexts = f.afterFunctionTexts, n.beforeTransform = f.beforeFunctionMatrix, n.beforeTransform2 = f.beforeFunctionMatrix2, n.targetTansform = f.targetFunctionMatrix, n.afterTransform = f.afterFunctionMatrix, n.afterTransform2 = f.afterFunctionMatrix2, n.targetAllTransform = f.allFunctionMatrix, c.functionName === v ? (n.afterFunctionTexts.splice(0, 1), n.isAppendTransform = !1) : s > l && (n.isAppendTransform = !0, i.nextTransformAppendedIndexes = N(N([], P(u), !1), [{
    functionName: e,
    index: l,
    isAppend: !0
  }], !1));
}
function Rn(t, r, e) {
  return "".concat(t.beforeFunctionTexts.join(" "), " ").concat(t.isAppendTransform ? e : r, " ").concat(t.afterFunctionTexts.join(" "));
}
function Jg(t) {
  var r = t.datas, e = t.distX, n = t.distY, i = P(Au({ datas: r, distX: e, distY: n }), 2), a = i[0], o = i[1], s = ku(r, Qh([a, o], 4));
  return kt(s, kr([0, 0, 0], 4), 4);
}
function ku(t, r, e) {
  var n = t.beforeTransform, i = t.afterTransform, a = t.beforeTransform2, o = t.afterTransform2, s = t.targetAllTransform, u = e ? pt(s, r, 4) : pt(r, s, 4), l = pt(ir(e ? a : n, 4), u, 4), f = pt(l, ir(e ? o : i, 4), 4);
  return f;
}
function Au(t) {
  var r = t.datas, e = t.distX, n = t.distY, i = r.inverseBeforeMatrix, a = r.is3d, o = r.startDragBeforeDist, s = r.absoluteOrigin, u = a ? 4 : 3;
  return tt(kt(i, lt(s, [e, n]), u), o);
}
function ar(t, r) {
  var e = t.datas, n = t.distX, i = t.distY, a = e.inverseBeforeMatrix, o = e.inverseMatrix, s = e.is3d, u = e.startDragBeforeDist, l = e.startDragDist, f = e.absoluteOrigin, c = s ? 4 : 3;
  return tt(kt(r ? a : o, lt(f, [n, i]), c), r ? u : l);
}
function Qg(t, r) {
  var e = t.datas, n = t.distX, i = t.distY, a = e.beforeMatrix, o = e.matrix, s = e.is3d, u = e.startDragBeforeDist, l = e.startDragDist, f = e.absoluteOrigin, c = s ? 4 : 3;
  return tt(kt(r ? a : o, lt(r ? u : l, [n, i]), c), f);
}
function t0(t, r, e, n, i, a) {
  return n === void 0 && (n = r), i === void 0 && (i = e), a === void 0 && (a = [0, 0]), t ? t.map(function(o, s) {
    var u = ze(o), l = u.value, f = u.unit, c = s ? i : n, v = s ? e : r;
    if (o === "%" || isNaN(l)) {
      var p = c ? a[s] / c : 0;
      return v * p;
    } else if (f !== "%")
      return l;
    return v * l / 100;
  }) : a;
}
function Bu(t) {
  var r = [];
  return t[1] >= 0 && (t[0] >= 0 && r.push(3), t[0] <= 0 && r.push(2)), t[1] <= 0 && (t[0] >= 0 && r.push(1), t[0] <= 0 && r.push(0)), r;
}
function r0(t, r) {
  return Bu(r).map(function(e) {
    return t[e];
  });
}
function wt(t, r) {
  var e = (r[0] + 1) / 2, n = (r[1] + 1) / 2, i = [
    Tr(t[0][0], t[1][0], e, 1 - e),
    Tr(t[0][1], t[1][1], e, 1 - e)
  ], a = [
    Tr(t[2][0], t[3][0], e, 1 - e),
    Tr(t[2][1], t[3][1], e, 1 - e)
  ];
  return [
    Tr(i[0], a[0], n, 1 - n),
    Tr(i[1], a[1], n, 1 - n)
  ];
}
function e0(t, r, e, n, i, a) {
  var o = Yr(r, e, n, i), s = wt(o, a), u = t[0] - s[0], l = t[1] - s[1];
  return [u, l];
}
function We(t, r, e, n) {
  return pt(t, _e(r, n, e), n);
}
function n0(t, r, e, n) {
  var i = t.transformOrigin, a = t.offsetMatrix, o = t.is3d, s = o ? 4 : 3, u;
  if (Nt(e)) {
    var l = r.beforeTransform, f = r.afterTransform;
    n ? u = Qt(Oe(e), 4, s) : u = Qt(pt(pt(l, Oe([e]), 4), f, 4), 4, s);
  } else
    u = e;
  return We(a, u, i, s);
}
function i0(t, r) {
  var e = t.transformOrigin, n = t.offsetMatrix, i = t.is3d, a = t.targetMatrix, o = t.targetAllTransform, s = i ? 4 : 3;
  return We(n, pt(o || a, fa(r, s), s), e, s);
}
function On(t, r) {
  var e = pe(r);
  return {
    setTransform: function(n, i) {
      i === void 0 && (i = -1), e.startTransforms = Mt(n) ? n : br(n), Di(t, r, i);
    },
    setTransformIndex: function(n) {
      Di(t, r, n);
    }
  };
}
function In(t, r, e) {
  var n = pe(r), i = n.startTransforms;
  Di(t, r, fr(i, function(a) {
    return a.indexOf("".concat(e, "(")) === 0;
  }));
}
function Di(t, r, e) {
  var n = pe(r), i = r.datas;
  if (i.transformIndex = e, e !== -1) {
    var a = n.startTransforms[e];
    if (a) {
      var o = t.state, s = ee([a], {
        "x%": function(u) {
          return u / 100 * o.offsetWidth;
        },
        "y%": function(u) {
          return u / 100 * o.offsetHeight;
        }
      });
      i.startValue = s[0].functionValue;
    }
  }
}
function ga(t, r) {
  var e = pe(t);
  e.nextTransforms = br(r);
}
function pe(t) {
  return t.originalDatas.beforeRenderable;
}
function dn(t) {
  var r = t.originalDatas.beforeRenderable;
  return r.nextTransforms;
}
function Ze(t) {
  return (dn(t) || []).join(" ");
}
function Je(t) {
  return pe(t).nextStyle;
}
function zu(t, r, e, n, i) {
  ga(i, r);
  var a = zt.drag(t, Ye(i, t.state, e, n, !1)), o = a ? a.transform : r;
  return M(M({ transform: r, drag: a }, Gt({
    transform: o
  }, i)), { afterTransform: o });
}
function ma(t, r, e, n, i, a) {
  var o = n0(t.state, i, r, a), s = s0(t, e, n, o);
  return s;
}
function Gu(t, r, e, n, i, a, o) {
  var s = ma(t, r, e, i, a, o), u = t.state, l = u.left, f = u.top, c = t.props.groupable, v = c ? l : 0, p = c ? f : 0, d = tt(n, s);
  return tt(d, [v, p]);
}
function a0(t, r, e, n, i, a, o) {
  var s = Gu(t, r, e, n, i, a, o);
  return s;
}
function o0(t, r, e) {
  return [
    r ? -1 + t[0] / (r / 2) : 0,
    e ? -1 + t[1] / (e / 2) : 0
  ];
}
function s0(t, r, e, n) {
  n === void 0 && (n = t.state.allMatrix);
  var i = t.state, a = i.width, o = i.height, s = i.is3d, u = s ? 4 : 3, l = [
    a / 2 * (1 + r[0]) + e[0],
    o / 2 * (1 + r[1]) + e[1]
  ];
  return bt(n, l, u);
}
function u0(t, r, e) {
  var n = e.fixedDirection, i = e.fixedPosition, a = e.fixedOffset;
  return Gu(t, "rotate(".concat(r, "deg)"), n, i, a, e);
}
function l0(t, r, e, n, i, a) {
  var o = t.props.groupable, s = t.state, u = s.transformOrigin, l = s.offsetMatrix, f = s.is3d, c = s.width, v = s.height, p = s.left, d = s.top, h = a.fixedDirection, g = a.nextTargetMatrix || s.targetMatrix, m = f ? 4 : 3, y = t0(i, r, e, c, v, u), b = o ? p : 0, E = o ? d : 0, C = We(l, g, y, m), x = e0(n, C, r, e, m, h);
  return tt(x, [b, E]);
}
function f0(t, r) {
  return wt(qt(t.state), r);
}
function c0(t, r) {
  var e = t.targetGesto, n = t.controlGesto, i;
  return e != null && e.isFlag() && (i = e.getEventData()[r]), !i && (n != null && n.isFlag()) && (i = n.getEventData()[r]), i || {};
}
function v0(t) {
  if (t && t.getRootNode) {
    var r = t.getRootNode();
    if (r.nodeType === 11)
      return r;
  }
}
function p0(t) {
  var r = t("scale"), e = t("rotate"), n = t("translate"), i = [];
  return n && n !== "0px" && n !== "none" && i.push("translate(".concat(n.split(/\s+/).join(","), ")")), e && e !== "1" && e !== "none" && i.push("rotate(".concat(e, ")")), r && r !== "1" && r !== "none" && i.push("scale(".concat(r.split(/\s+/).join(","), ")")), i;
}
function Lu(t, r, e) {
  for (var n = t, i = [], a = na(t) || _r(t), o = !e && t === r || t === a, s = o, u = !1, l = 3, f, c, v, p = !1, d = ke(r, r, !0).offsetParent, h = 1; n && !s; ) {
    s = o;
    var g = jt(n), m = g("position"), y = ol(n), b = m === "fixed", E = p0(g), C = tg(lm(y)), x = void 0, S = !1, _ = !1, T = 0, D = 0, O = 0, R = 0, w = {
      hasTransform: !1,
      fixedContainer: null
    };
    b && (p = !0, w = dm(n), d = w.fixedContainer);
    var I = C.length;
    !u && (I === 16 || E.length) && (u = !0, l = 4, Ai(i), v && (v = Qt(v, 3, 4))), u && I === 9 && (C = Qt(C, 3, 4));
    var k = pm(n, t), F = k.tagName, L = k.hasOffset, A = k.isSVG, $ = k.origin, j = k.targetOrigin, G = k.offset, q = P(G, 2), U = q[0], W = q[1];
    F === "svg" && v && (i.push({
      type: "target",
      target: n,
      matrix: hm(n, l)
    }), i.push({
      type: "offset",
      target: n,
      matrix: yt(l)
    }));
    var X = parseFloat(g("zoom")) || 1;
    if (b)
      x = w.fixedContainer, S = !0;
    else {
      var Y = ke(n, r, !1, !0, g), V = Y.offsetZoom;
      if (x = Y.offsetParent, S = Y.isEnd, _ = Y.isStatic, h *= V, (Y.isCustomElement || V !== 1) && _)
        U -= x.offsetLeft, W -= x.offsetTop;
      else if (Xg || Wg) {
        var J = Y.parentSlotElement;
        if (J) {
          for (var nt = x, rt = 0, Z = 0; nt && v0(nt); )
            rt += nt.offsetLeft, Z += nt.offsetTop, nt = nt.offsetParent;
          U -= rt, W -= Z;
        }
      }
    }
    if (Tu && !Hg && L && !A && _ && (m === "relative" || m === "static") && (U -= x.offsetLeft, W -= x.offsetTop, o = o || S), b)
      L && w.hasTransform && (O = x.clientLeft, R = x.clientTop);
    else if (L && d !== x && (T = x.clientLeft, D = x.clientTop), L && x === a) {
      var K = sl(n, !1);
      U += K[0], W += K[1];
    }
    if (i.push({
      type: "target",
      target: n,
      matrix: _e(C, l, $)
    }), E.length && (i.push({
      type: "offset",
      target: n,
      matrix: yt(l)
    }), i.push({
      type: "target",
      target: n,
      matrix: _e(Oe(E), l, $)
    })), L) {
      var ft = n === t, at = ft ? 0 : n.scrollLeft, ot = ft ? 0 : n.scrollTop;
      i.push({
        type: "offset",
        target: n,
        matrix: Ar([
          U - at + T - O,
          W - ot + D - R
        ], l)
      });
    } else
      i.push({
        type: "offset",
        target: n,
        origin: $
      });
    if (X !== 1 && i.push({
      type: "zoom",
      target: n,
      matrix: _e(fa([X, X], l), l, [0, 0])
    }), v || (v = C), f || (f = $), c || (c = j), s || b)
      break;
    n = x, o = S, (!e || n === a) && (s = o);
  }
  return v || (v = yt(l)), f || (f = [0, 0]), c || (c = [0, 0]), {
    zoom: h,
    offsetContainer: d,
    matrixes: i,
    targetMatrix: v,
    transformOrigin: f,
    targetOrigin: c,
    is3d: u,
    hasFixed: p
  };
}
var Pr = null, Dr = null, Vr = null;
function ie(t) {
  t ? (window.Map && (Pr = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map()), Vr = []) : (Pr = null, Vr = null, Dr = null);
}
function d0(t) {
  var r = Dr == null ? void 0 : Dr.get(t);
  if (r)
    return r;
  var e = Me(t, !0);
  return Dr && Dr.set(t, e), e;
}
function h0(t, r) {
  if (Vr) {
    var e = $t(Vr, function(i) {
      return i[0][0] == t && i[0][1] == r;
    });
    if (e)
      return e[1];
  }
  var n = Lu(t, r, !0);
  return Vr && Vr.push([[t, r], n]), n;
}
function jt(t) {
  var r = Pr == null ? void 0 : Pr.get(t);
  if (!r) {
    var e = xr(t).getComputedStyle(t);
    if (!Pr)
      return function(a) {
        return e[a];
      };
    r = {
      style: e,
      cached: {}
    }, Pr.set(t, r);
  }
  var n = r.cached, i = r.style;
  return function(a) {
    return a in n || (n[a] = i[a]), n[a];
  };
}
function Zt(t, r, e) {
  var n = e.originalDatas;
  n.groupable = n.groupable || {};
  var i = n.groupable;
  i.childDatas = i.childDatas || [];
  var a = i.childDatas;
  return t.moveables.map(function(o, s) {
    return a[s] = a[s] || {}, a[s][r] = a[s][r] || {}, M(M({}, e), { isRequestChild: !0, datas: a[s][r], originalDatas: a[s] });
  });
}
function Qn(t, r, e, n, i, a, o) {
  var s = !!e.match(/Start$/g), u = !!e.match(/End$/g), l = i.isPinch, f = i.datas, c = Zt(t, r.name, i), v = t.moveables, p = c.map(function(d, h) {
    var g = v[h], m = g.state, y = m.gestos, b = d;
    if (s)
      b = new ne(o).dragStart(n, d);
    else {
      if (y[o] || (y[o] = f.childGestos[h]), !y[o])
        return;
      b = Ye(d, m, n, l, a, o);
    }
    var E = r[e](g, M(M({}, b), { parentFlag: !0 }));
    return u && (y[o] = null), E;
  });
  return s && (f.childGestos = v.map(function(d) {
    return d.state.gestos[o];
  })), p;
}
function ur(t, r, e, n, i, a) {
  i === void 0 && (i = function(f, c) {
    return c;
  });
  var o = !!e.match(/End$/g), s = Zt(t, r.name, n), u = t.moveables, l = s.map(function(f, c) {
    var v = u[c], p = f;
    p = i(v, f);
    var d = r[e](v, M(M({}, p), { parentFlag: !0 }));
    return d && a && a(v, f, d, c), o && (v.state.gestos = {}), d;
  });
  return l;
}
function hn(t, r, e, n) {
  var i = e.fixedDirection, a = e.fixedPosition, o = n.datas.startPositions || qt(r.state), s = wt(o, i), u = P(kt($e(-t.rotation / 180 * Math.PI, 3), [s[0] - a[0], s[1] - a[1], 1], 3), 2), l = u[0], f = u[1];
  return n.datas.originalX = l, n.datas.originalY = f, n;
}
function Fu(t, r, e, n) {
  var i = t.getState(), a = i.renderPoses, o = i.rotation, s = i.direction, u = zr(t.props, r).zoom, l = Ce(o / Math.PI * 180), f = {}, c = t.renderState;
  c.renderDirectionMap || (c.renderDirectionMap = {});
  var v = c.renderDirectionMap;
  e.forEach(function(d) {
    var h = d.dir;
    f[h] = !0;
  });
  var p = Xt(s);
  return e.map(function(d) {
    var h = d.data, g = d.classNames, m = d.dir, y = ha[m];
    if (!y || !f[m])
      return null;
    v[m] = !0;
    var b = (et(l, 15) + p * Ru[m] + 720) % 180, E = {};
    return cr(h).forEach(function(C) {
      E["data-".concat(C)] = h[C];
    }), n.createElement("div", M({ className: Q.apply(void 0, N(["control", "direction", m, r], P(g), !1)), "data-rotation": b, "data-direction": m }, E, { key: "direction-".concat(m), style: xn.apply(void 0, N([o, u], P(y.map(function(C) {
      return a[C];
    })), !1)) }));
  });
}
function Nu(t, r, e, n) {
  var i = zr(t.props, e), a = i.renderDirections, o = a === void 0 ? r : a, s = i.displayAroundControls;
  if (!o)
    return [];
  var u = o === !0 ? pa : o;
  return N(N([], P(s ? Wu(t, n, e, u) : []), !1), P(Fu(t, e, u.map(function(l) {
    return {
      data: {},
      classNames: [],
      dir: l
    };
  }), n)), !1);
}
function Ie(t, r, e, n, i, a) {
  for (var o = [], s = 6; s < arguments.length; s++)
    o[s - 6] = arguments[s];
  var u = Et(e, n), l = r ? et(u / Math.PI * 180, 15) % 180 : -1;
  return t.createElement("div", { key: "line-".concat(a), className: Q.apply(void 0, N(["line", "direction", r ? "edge" : "", r], P(o), !1)), "data-rotation": l, "data-line-key": a, "data-direction": r, style: xe(e, n, i, u) });
}
function $u(t, r, e, n, i) {
  var a = e === !0 ? Lg : e;
  return a.map(function(o, s) {
    var u = P(ha[o], 2), l = u[0], f = u[1];
    if (f != null)
      return Ie(t, o, n[l], n[f], i, "".concat(r, "Edge").concat(s), r);
  }).filter(Boolean);
}
function ju(t) {
  return function(r, e) {
    var n = zr(r.props, t).edge;
    return n && (n === !0 || n.length) ? N(N([], P($u(e, t, n, r.getState().renderPoses, r.props.zoom)), !1), P(g0(r, t, e)), !1) : Yu(r, t, e);
  };
}
function Yu(t, r, e) {
  return Nu(t, pa, r, e);
}
function g0(t, r, e) {
  return Nu(t, ["nw", "ne", "sw", "se"], r, e);
}
function Wu(t, r, e, n) {
  var i = t.renderState;
  i.renderDirectionMap || (i.renderDirectionMap = {});
  var a = t.getState(), o = a.renderPoses, s = a.rotation, u = a.direction, l = i.renderDirectionMap, f = t.props.zoom, c = Xt(u), v = s / Math.PI * 180;
  return (n || cr(l)).map(function(p) {
    var d = ha[p];
    if (!d)
      return null;
    var h = (et(v, 15) + c * Ru[p] + 720) % 180, g = ["around-control"];
    return e && g.push("direction", e), r.createElement("div", { className: Q.apply(void 0, N([], P(g), !1)), "data-rotation": h, "data-direction": p, key: "direction-around-".concat(p), style: xn.apply(void 0, N([s, f], P(d.map(function(m) {
      return o[m];
    })), !1)) });
  });
}
function ya(t, r, e) {
  var n = t || {}, i = n.position, a = i === void 0 ? "client" : i, o = n.left, s = o === void 0 ? -1 / 0 : o, u = n.top, l = u === void 0 ? -1 / 0 : u, f = n.right, c = f === void 0 ? 1 / 0 : f, v = n.bottom, p = v === void 0 ? 1 / 0 : v, d = {
    position: a,
    left: s,
    top: l,
    right: c,
    bottom: p
  };
  return {
    vertical: zo(d, r, !0),
    horizontal: zo(d, e, !1)
  };
}
function kn(t, r) {
  var e = t.state, n = e.containerClientRect, i = n.clientHeight, a = n.clientWidth, o = n.clientLeft, s = n.clientTop, u = e.snapOffset, l = u.left, f = u.top, c = u.right, v = u.bottom, p = r || t.props.bounds || {}, d = p.position || "client", h = d === "css", g = p.left, m = g === void 0 ? -1 / 0 : g, y = p.top, b = y === void 0 ? -1 / 0 : y, E = p.right, C = E === void 0 ? h ? -1 / 0 : 1 / 0 : E, x = p.bottom, S = x === void 0 ? h ? -1 / 0 : 1 / 0 : x;
  return h && (C = a + c - l - C, S = i + v - f - S), {
    left: m + l - o,
    right: C + l - o,
    top: b + f - s,
    bottom: S + f - s
  };
}
function m0(t, r, e) {
  var n = kn(t), i = n.left, a = n.top, o = n.right, s = n.bottom, u = P(e, 2), l = u[0], f = u[1], c = P(tt(e, r), 2), v = c[0], p = c[1];
  z(v) < Lt && (v = 0), z(p) < Lt && (p = 0);
  var d = p > 0, h = v > 0, g = {
    isBound: !1,
    offset: 0,
    pos: 0
  }, m = {
    isBound: !1,
    offset: 0,
    pos: 0
  };
  if (v === 0 && p === 0)
    return {
      vertical: g,
      horizontal: m
    };
  if (v === 0)
    d ? s < f && (m.pos = s, m.offset = f - s) : a > f && (m.pos = a, m.offset = f - a);
  else if (p === 0)
    h ? o < l && (g.pos = o, g.offset = l - o) : i > l && (g.pos = i, g.offset = l - i);
  else {
    var y = p / v, b = e[1] - y * l, E = 0, C = 0, x = !1;
    h && o <= l ? (E = y * o + b, C = o, x = !0) : !h && l <= i && (E = y * i + b, C = i, x = !0), x && (E < a || E > s) && (x = !1), x || (d && s <= f ? (E = s, C = (E - b) / y, x = !0) : !d && f <= a && (E = a, C = (E - b) / y, x = !0)), x && (g.isBound = !0, g.pos = C, g.offset = l - C, m.isBound = !0, m.pos = E, m.offset = f - E);
  }
  return {
    vertical: g,
    horizontal: m
  };
}
function zo(t, r, e) {
  var n = t[e ? "left" : "top"], i = t[e ? "right" : "bottom"], a = Math.min.apply(Math, N([], P(r), !1)), o = Math.max.apply(Math, N([], P(r), !1)), s = [];
  return n + 1 > a && s.push({
    direction: "start",
    isBound: !0,
    offset: a - n,
    pos: n
  }), i - 1 < o && s.push({
    direction: "end",
    isBound: !0,
    offset: o - i,
    pos: i
  }), s.length || s.push({
    isBound: !1,
    offset: 0,
    pos: 0
  }), s.sort(function(u, l) {
    return z(l.offset) - z(u.offset);
  });
}
function Go(t, r, e) {
  var n = e ? t.map(function(i) {
    return Ne(i, e);
  }) : t;
  return n.some(function(i) {
    return i[0] < r.left && z(i[0] - r.left) > 0.1 || i[0] > r.right && z(i[0] - r.right) > 0.1 || i[1] < r.top && z(i[1] - r.top) > 0.1 || i[1] > r.bottom && z(i[1] - r.bottom) > 0.1;
  });
}
function y0(t, r, e) {
  var n = Vt(t), i = Math.sqrt(n * n - r * r) || 0;
  return [i, -i].sort(function(a, o) {
    return z(a - t[e ? 0 : 1]) - z(o - t[e ? 0 : 1]);
  }).map(function(a) {
    return Et([0, 0], e ? [a, r] : [r, a]);
  });
}
function x0(t, r, e, n, i) {
  if (!t.props.bounds)
    return [];
  var a = i * Math.PI / 180, o = kn(t), s = o.left, u = o.top, l = o.right, f = o.bottom, c = s - n[0], v = l - n[0], p = u - n[1], d = f - n[1], h = {
    left: c,
    top: p,
    right: v,
    bottom: d
  };
  if (!Go(e, h, 0))
    return [];
  var g = [];
  return [
    [c, 0],
    [v, 0],
    [p, 1],
    [d, 1]
  ].forEach(function(m) {
    var y = P(m, 2), b = y[0], E = y[1];
    e.forEach(function(C) {
      var x = Et([0, 0], C);
      g.push.apply(g, N([], P(y0(C, b, E).map(function(S) {
        return a + S - x;
      }).filter(function(S) {
        return !Go(r, h, S);
      }).map(function(S) {
        return et(S * 180 / Math.PI, Lt);
      })), !1));
    });
  }), g;
}
var b0 = ["left", "right", "center"], E0 = ["top", "bottom", "middle"], Lo = {
  left: "start",
  right: "end",
  center: "center",
  top: "start",
  bottom: "end",
  middle: "center"
}, Er = {
  start: "left",
  end: "right",
  center: "center"
}, Sr = {
  start: "top",
  end: "bottom",
  center: "middle"
};
function qr() {
  return {
    left: !1,
    top: !1,
    right: !1,
    bottom: !1
  };
}
function de(t, r) {
  var e = t.props, n = e.snappable, i = e.bounds, a = e.innerBounds, o = e.verticalGuidelines, s = e.horizontalGuidelines, u = e.snapGridWidth, l = e.snapGridHeight, f = t.state, c = f.guidelines, v = f.enableSnap;
  return !n || !v || r && n !== !0 && n.indexOf(r) < 0 ? !1 : !!(u || l || i || a || c && c.length || o && o.length || s && s.length);
}
function xa(t) {
  return t === !1 ? {} : t === !0 || !t ? { left: !0, right: !0, top: !0, bottom: !0 } : t;
}
function S0(t, r) {
  var e = xa(t), n = {};
  for (var i in e)
    i in r && e[i] && (n[i] = r[i]);
  return n;
}
function ba(t, r) {
  var e = S0(t, r), n = E0.filter(function(a) {
    return a in e;
  }), i = b0.filter(function(a) {
    return a in e;
  });
  return {
    horizontalNames: n,
    verticalNames: i,
    horizontal: n.map(function(a) {
      return e[a];
    }),
    vertical: i.map(function(a) {
      return e[a];
    })
  };
}
function C0(t, r, e) {
  var n = bt(t, [r.clientLeft, r.clientTop], e);
  return [
    r.left + n[0],
    r.top + n[1]
  ];
}
function _0(t) {
  var r = P(t, 2), e = r[0], n = r[1], i = n[0] - e[0], a = n[1] - e[1];
  Math.abs(i) < _t && (i = 0), Math.abs(a) < _t && (a = 0);
  var o = 0, s = 0, u = 0;
  return i ? a ? (o = -a / i, s = 1, u = o * e[0] - e[1]) : (s = 1, u = -e[1]) : (o = -1, u = e[0]), [o, s, u].map(function(l) {
    return et(l, _t);
  });
}
function An(t, r, e, n, i, a) {
  n === void 0 && (n = []), i === void 0 && (i = []);
  var o = t.props, s = bm(a, o.snapThreshold, 5);
  return Xu(t.state.guidelines, r, e, n, i, s);
}
function Xu(t, r, e, n, i, a) {
  return {
    vertical: No(t, "vertical", r, a, n),
    horizontal: No(t, "horizontal", e, a, i)
  };
}
function M0(t, r, e) {
  var n = P(e, 2), i = n[0], a = n[1], o = P(r, 2), s = o[0], u = o[1], l = P(tt(e, r), 2), f = l[0], c = l[1], v = c > 0, p = f > 0;
  f = bn(f), c = bn(c);
  var d = {
    isSnap: !1,
    offset: 0,
    pos: 0
  }, h = {
    isSnap: !1,
    offset: 0,
    pos: 0
  };
  if (f === 0 && c === 0)
    return {
      vertical: d,
      horizontal: h
    };
  var g = An(t, f ? [i] : [], c ? [a] : []), m = g.vertical, y = g.horizontal;
  m.posInfos.filter(function(F) {
    var L = F.pos;
    return p ? L >= s : L <= s;
  }), y.posInfos.filter(function(F) {
    var L = F.pos;
    return v ? L >= u : L <= u;
  }), m.isSnap = m.posInfos.length > 0, y.isSnap = y.posInfos.length > 0;
  var b = wi(m), E = b.isSnap, C = b.guideline, x = wi(y), S = x.isSnap, _ = x.guideline, T = S ? _.pos[1] : 0, D = E ? C.pos[0] : 0;
  if (f === 0)
    S && (h.isSnap = !0, h.pos = _.pos[1], h.offset = a - h.pos);
  else if (c === 0)
    E && (d.isSnap = !0, d.pos = D, d.offset = i - D);
  else {
    var O = c / f, R = e[1] - O * i, w = 0, I = 0, k = !1;
    E ? (I = D, w = O * I + R, k = !0) : S && (w = T, I = (w - R) / O, k = !0), k && (d.isSnap = !0, d.pos = I, d.offset = i - I, h.isSnap = !0, h.pos = w, h.offset = a - w);
  }
  return {
    vertical: d,
    horizontal: h
  };
}
function mr(t) {
  var r = "";
  return t === -1 || t === "top" || t === "left" ? r = "start" : t === 0 || t === "center" || t === "middle" ? r = "center" : (t === 1 || t === "right" || t === "bottom") && (r = "end"), r;
}
function Fo(t, r, e) {
  var n = ba(t.props.snapDirections, r), i = An(t, n.vertical, n.horizontal, n.verticalNames.map(function(s) {
    return mr(s);
  }), n.horizontalNames.map(function(s) {
    return mr(s);
  }), e), a = mr(n.horizontalNames[i.horizontal.index]), o = mr(n.verticalNames[i.vertical.index]);
  return {
    vertical: M(M({}, i.vertical), { direction: o }),
    horizontal: M(M({}, i.horizontal), { direction: a })
  };
}
function wi(t) {
  var r = t.isSnap;
  if (!r)
    return {
      isSnap: !1,
      offset: 0,
      dist: -1,
      pos: 0,
      guideline: null
    };
  var e = t.posInfos[0], n = e.guidelineInfos[0], i = n.offset, a = n.dist, o = n.guideline;
  return {
    isSnap: r,
    offset: i,
    dist: a,
    pos: e.pos,
    guideline: o
  };
}
function No(t, r, e, n, i) {
  var a, o;
  if (i === void 0 && (i = []), !t || !t.length)
    return {
      isSnap: !1,
      index: -1,
      direction: "",
      posInfos: []
    };
  var s = r === "vertical", u = s ? 0 : 1, l = e.map(function(c, v) {
    var p = i[v] || "", d = t.map(function(h) {
      var g = h.pos, m = c - g[u];
      return {
        offset: m,
        dist: z(m),
        guideline: h,
        direction: p
      };
    }).filter(function(h) {
      var g = h.guideline, m = h.dist, y = g.type;
      return !(y !== r || m > n);
    }).sort(function(h, g) {
      return h.dist - g.dist;
    });
    return {
      pos: c,
      index: v,
      guidelineInfos: d,
      direction: p
    };
  }).filter(function(c) {
    return c.guidelineInfos.length > 0;
  }).sort(function(c, v) {
    return c.guidelineInfos[0].dist - v.guidelineInfos[0].dist;
  }), f = l.length > 0;
  return {
    isSnap: f,
    index: f ? l[0].index : -1,
    direction: (o = (a = l[0]) === null || a === void 0 ? void 0 : a.direction) !== null && o !== void 0 ? o : "",
    posInfos: l
  };
}
function T0(t, r, e, n) {
  n === void 0 && (n = 1);
  var i = [];
  e[0] && e[1] ? i = [
    e,
    [-e[0], e[1]],
    [e[0], -e[1]]
  ] : !e[0] && !e[1] ? [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1]
  ].forEach(function(c, v, p) {
    var d = p[v + 1] || p[0];
    i.push(c), i.push([
      (c[0] + d[0]) / 2,
      (c[1] + d[1]) / 2
    ]);
  }) : t.props.keepRatio ? i.push([-1, -1], [-1, 1], [1, -1], [1, 1], e) : (i.push.apply(i, N([], P(r0([
    [-1, -1],
    [1, -1],
    [-1, -1],
    [1, 1]
  ], e)), !1)), i.length > 1 && i.push([
    (i[0][0] + i[1][0]) / 2,
    (i[0][1] + i[1][1]) / 2
  ]));
  var a = i.map(function(c) {
    return wt(r, c);
  }), o = a.map(function(c) {
    return c[0];
  }), s = a.map(function(c) {
    return c[1];
  }), u = An(t, o, s, i.map(function(c) {
    return mr(c[0]);
  }), i.map(function(c) {
    return mr(c[1]);
  }), n), l = mr(i.map(function(c) {
    return c[0];
  })[u.vertical.index]), f = mr(i.map(function(c) {
    return c[1];
  })[u.horizontal.index]);
  return {
    vertical: M(M({}, u.vertical), { direction: l }),
    horizontal: M(M({}, u.horizontal), { direction: f })
  };
}
function Hu(t, r) {
  var e = z(t.offset), n = z(r.offset);
  return t.isBound && r.isBound ? n - e : t.isBound ? -1 : r.isBound ? 1 : t.isSnap && r.isSnap ? n - e : t.isSnap ? -1 : r.isSnap || e < Lt ? 1 : n < Lt ? -1 : e - n;
}
function gn(t, r) {
  return t.slice().sort(function(e, n) {
    var i = e.sign[r], a = n.sign[r], o = e.offset[r], s = n.offset[r];
    if (i) {
      if (!a)
        return -1;
    } else
      return 1;
    return Hu({ isBound: e.isBound, isSnap: e.isSnap, offset: o }, { isBound: n.isBound, isSnap: n.isSnap, offset: s });
  })[0];
}
function P0(t, r, e) {
  var n = [];
  if (e)
    z(r[0]) !== 1 || z(r[1]) !== 1 ? n.push([r, [-1, -1]], [r, [-1, 1]], [r, [1, -1]], [r, [1, 1]]) : n.push([r, [t[0], -t[1]]], [r, [-t[0], t[1]]]), n.push([r, t]);
  else if (t[0] && t[1] || !t[0] && !t[1]) {
    var i = t[0] ? t : [1, 1];
    [1, -1].forEach(function(o) {
      [1, -1].forEach(function(s) {
        var u = [o * i[0], s * i[1]];
        r[0] === u[0] && r[1] === u[1] || n.push([r, u]);
      });
    });
  } else if (t[0]) {
    var a = z(r[0]) === 1 ? [1] : [1, -1];
    a.forEach(function(o) {
      n.push([
        [r[0], -1],
        [o * t[0], -1]
      ], [
        [r[0], 0],
        [o * t[0], 0]
      ], [
        [r[0], 1],
        [o * t[0], 1]
      ]);
    });
  } else if (t[1]) {
    var a = z(r[1]) === 1 ? [1] : [1, -1];
    a.forEach(function(s) {
      n.push([
        [-1, r[1]],
        [-1, s * t[1]]
      ], [
        [0, r[1]],
        [0, s * t[1]]
      ], [
        [1, r[1]],
        [1, s * t[1]]
      ]);
    });
  }
  return n;
}
function Vu(t, r) {
  var e = pi([r[0][0], r[1][0]]), n = pi([r[0][1], r[1][1]]);
  return {
    vertical: e <= t[0],
    horizontal: n <= t[1]
  };
}
function Ea(t, r) {
  var e = P(r, 2), n = e[0], i = e[1], a = i[0] - n[0], o = i[1] - n[1];
  z(a) < Lt && (a = 0), z(o) < Lt && (o = 0);
  var s, u;
  if (!a)
    s = n[0], u = t[0];
  else if (!o)
    s = n[1], u = t[1];
  else {
    var l = o / a;
    s = l * (t[0] - n[0]) + n[1], u = t[1];
  }
  return s - u;
}
function qu(t, r, e, n) {
  return n === void 0 && (n = Lt), t.every(function(i) {
    var a = Ea(i, r), o = a <= 0;
    return o === e || z(a) <= n;
  });
}
function $o(t, r, e, n, i) {
  return i === void 0 && (i = 0), n && r - i <= t || !n && t <= e + i ? {
    isBound: !0,
    offset: n ? r - t : e - t
  } : {
    isBound: !1,
    offset: 0
  };
}
function D0(t, r) {
  var e = r.line, n = r.centerSign, i = r.verticalSign, a = r.horizontalSign, o = r.lineConstants, s = t.props.innerBounds;
  if (!s)
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var u = s.left, l = s.top, f = s.width, c = s.height, v = [[u, l], [u, l + c]], p = [[u, l], [u + f, l]], d = [[u + f, l], [u + f, l + c]], h = [[u, l + c], [u + f, l + c]];
  if (qu([
    [u, l],
    [u + f, l],
    [u, l + c],
    [u + f, l + c]
  ], e, n))
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var g = yr(e, o, p, i), m = yr(e, o, h, i), y = yr(e, o, v, a), b = yr(e, o, d, a), E = g.isBound && m.isBound, C = g.isBound || m.isBound, x = y.isBound && b.isBound, S = y.isBound || b.isBound, _ = ae(g.offset, m.offset), T = ae(y.offset, b.offset), D = [0, 0], O = !1, R = !1;
  return z(T) < z(_) ? (D = [_, 0], O = C, R = E) : (D = [0, T], O = S, R = x), {
    isAllBound: R,
    isVerticalBound: C,
    isHorizontalBound: S,
    isBound: O,
    offset: D
  };
}
function yr(t, r, e, n, i, a) {
  var o = P(r, 2), s = o[0], u = o[1], l = t[0], f = e[0], c = e[1], v = bn(c[1] - f[1]), p = bn(c[0] - f[0]), d = u, h = s, g = -s / u;
  if (p) {
    if (!v) {
      if (a && !d)
        return {
          isBound: !1,
          offset: 0
        };
      if (h) {
        var E = (f[1] - l[1]) / g + l[0];
        return $o(E, f[0], c[0], n, i);
      } else {
        var y = f[1] - l[1], b = z(y) <= (i || 0);
        return {
          isBound: b,
          offset: b ? y : 0
        };
      }
    }
  } else {
    if (a && !h)
      return {
        isBound: !1,
        offset: 0
      };
    if (d) {
      var m = g * (f[0] - l[0]) + l[1];
      return $o(m, f[1], c[1], n, i);
    } else {
      var y = f[0] - l[0], b = z(y) <= (i || 0);
      return {
        isBound: b,
        offset: b ? y : 0
      };
    }
  }
  return {
    isBound: !1,
    offset: 0
  };
}
function Uu(t, r, e) {
  return r.map(function(n) {
    var i = D0(t, n), a = i.isBound, o = i.offset, s = i.isVerticalBound, u = i.isHorizontalBound, l = n.multiple, f = ar({
      datas: e,
      distX: o[0],
      distY: o[1]
    }).map(function(c, v) {
      return c * (l[v] ? 2 / l[v] : 0);
    });
    return {
      sign: l,
      isBound: a,
      isVerticalBound: s,
      isHorizontalBound: u,
      isSnap: !1,
      offset: f
    };
  });
}
function w0(t, r, e) {
  var n, i = Sa(t, r, [0, 0], !1).map(function(v) {
    return M(M({}, v), { multiple: v.multiple.map(function(p) {
      return z(p) * 2;
    }) });
  }), a = Uu(t, i, e), o = gn(a, 0), s = gn(a, 1), u = 0, l = 0, f = o.isVerticalBound || s.isVerticalBound, c = o.isHorizontalBound || s.isHorizontalBound;
  return (f || c) && (n = P(Qg({
    datas: e,
    distX: -o.offset[0],
    distY: -s.offset[1]
  }), 2), u = n[0], l = n[1]), {
    vertical: {
      isBound: f,
      offset: u
    },
    horizontal: {
      isBound: c,
      offset: l
    }
  };
}
function R0(t, r) {
  var e = [], n = t[0], i = t[1];
  return n && i ? e.push([[0, i * 2], t, [-n, i]], [[n * 2, 0], t, [n, -i]]) : n ? (e.push([[n * 2, 0], [n, 1], [n, -1]]), r && e.push([[0, -1], [n, -1], [-n, -1]], [[0, 1], [n, 1], [-n, 1]])) : i ? (e.push([[0, i * 2], [1, i], [-1, i]]), r && e.push([[-1, 0], [-1, i], [-1, -i]], [[1, 0], [1, i], [1, -i]])) : e.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]]), e;
}
function Sa(t, r, e, n) {
  var i = t.state, a = i.allMatrix, o = i.is3d, s = Yr(a, 100, 100, o ? 4 : 3), u = wt(s, [0, 0]);
  return R0(e, n).map(function(l) {
    var f = P(l, 3), c = f[0], v = f[1], p = f[2], d = [
      wt(s, v),
      wt(s, p)
    ], h = _0(d), g = Vu(u, d), m = g.vertical, y = g.horizontal, b = Ea(u, d) <= 0;
    return {
      multiple: c,
      centerSign: b,
      verticalSign: m,
      horizontalSign: y,
      lineConstants: h,
      line: [
        wt(r, v),
        wt(r, p)
      ]
    };
  });
}
function jo(t, r, e, n) {
  var i = n ? t.map(function(a) {
    return Ne(a, n);
  }) : t;
  return [
    [i[0], i[1]],
    [i[1], i[3]],
    [i[3], i[2]],
    [i[2], i[0]]
  ].some(function(a) {
    var o = Ea(e, a) <= 0;
    return !qu(r, a, o);
  });
}
function O0(t) {
  var r = P(t, 2), e = r[0], n = r[1], i = n[0] - e[0], a = n[1] - e[1];
  if (!i)
    return z(e[0]);
  if (!a)
    return z(e[1]);
  var o = a / i;
  return z((-o * e[0] + e[1]) / Math.sqrt(Math.pow(o, 2) + 1));
}
function I0(t) {
  var r = P(t, 2), e = r[0], n = r[1], i = n[0] - e[0], a = n[1] - e[1];
  if (!i)
    return [e[0], 0];
  if (!a)
    return [0, e[1]];
  var o = a / i, s = -o * e[0] + e[1];
  return [
    -s / (o + 1 / o),
    s / (o * o + 1)
  ];
}
function k0(t, r, e, n, i) {
  var a = t.props.innerBounds, o = i * Math.PI / 180;
  if (!a)
    return [];
  var s = a.left, u = a.top, l = a.width, f = a.height, c = s - n[0], v = s + l - n[0], p = u - n[1], d = u + f - n[1], h = [
    [c, p],
    [v, p],
    [c, d],
    [v, d]
  ], g = wt(e, [0, 0]);
  if (!jo(e, h, g, 0))
    return [];
  var m = [], y = h.map(function(b) {
    return [
      Vt(b),
      Et([0, 0], b)
    ];
  });
  return [
    [e[0], e[1]],
    [e[1], e[3]],
    [e[3], e[2]],
    [e[2], e[0]]
  ].forEach(function(b) {
    var E = Et([0, 0], I0(b)), C = O0(b);
    m.push.apply(m, N([], P(y.filter(function(x) {
      var S = P(x, 1), _ = S[0];
      return _ && C <= _;
    }).map(function(x) {
      var S = P(x, 2), _ = S[0], T = S[1], D = Math.acos(_ ? C / _ : 0), O = T + D, R = T - D;
      return [
        o + O - E,
        o + R - E
      ];
    }).reduce(function(x, S) {
      return x.push.apply(x, N([], P(S), !1)), x;
    }, []).filter(function(x) {
      return !jo(r, h, g, x);
    }).map(function(x) {
      return et(x * 180 / Math.PI, Lt);
    })), !1));
  }), m;
}
function A0(t) {
  var r = t.props.innerBounds, e = qr();
  if (!r)
    return {
      boundMap: e,
      vertical: [],
      horizontal: []
    };
  var n = t.getRect(), i = n.pos1, a = n.pos2, o = n.pos3, s = n.pos4, u = [i, a, o, s], l = wt(u, [0, 0]), f = r.left, c = r.top, v = r.width, p = r.height, d = [[f, c], [f, c + p]], h = [[f, c], [f + v, c]], g = [[f + v, c], [f + v, c + p]], m = [[f, c + p], [f + v, c + p]], y = Sa(t, u, [0, 0], !1), b = [], E = [];
  return y.forEach(function(C) {
    var x = C.line, S = C.lineConstants, _ = Vu(l, x), T = _.horizontal, D = _.vertical, O = yr(x, S, h, D, 1, !0), R = yr(x, S, m, D, 1, !0), w = yr(x, S, d, T, 1, !0), I = yr(x, S, g, T, 1, !0);
    O.isBound && !e.top && (b.push(c), e.top = !0), R.isBound && !e.bottom && (b.push(c + p), e.bottom = !0), w.isBound && !e.left && (E.push(f), e.left = !0), I.isBound && !e.right && (E.push(f + v), e.right = !0);
  }), {
    boundMap: e,
    horizontal: b,
    vertical: E
  };
}
function B0(t, r, e, n) {
  var i = r[0] - t[0], a = r[1] - t[1];
  if (z(i) < _t && (i = 0), z(a) < _t && (a = 0), !i)
    return n ? [0, 0] : [0, e];
  if (!a)
    return n ? [e, 0] : [0, 0];
  var o = a / i, s = t[1] - o * t[0];
  if (n) {
    var u = o * (r[0] + e) + s;
    return [e, u - r[1]];
  } else {
    var l = (r[1] + e - s) / o;
    return [l - r[0], e];
  }
}
function Ri(t, r, e, n, i) {
  var a = B0(t, r, e, n);
  if (!a)
    return {
      isOutside: !1,
      offset: [0, 0]
    };
  var o = sr(t, r), s = sr(a, t), u = sr(a, r), l = s > o || u > o, f = P(ar({
    datas: i,
    distX: a[0],
    distY: a[1]
  }), 2), c = f[0], v = f[1];
  return {
    offset: [c, v],
    isOutside: l
  };
}
function mn(t, r) {
  return t.isBound ? t.offset : r.isSnap ? wi(r).offset : 0;
}
function z0(t, r, e, n, i) {
  var a = P(r, 2), o = a[0], s = a[1], u = P(e, 2), l = u[0], f = u[1], c = P(n, 2), v = c[0], p = c[1], d = P(i, 2), h = d[0], g = d[1], m = -h, y = -g;
  if (t && o && s) {
    m = 0, y = 0;
    var b = [];
    if (l && f ? b.push([0, g], [h, 0]) : l ? b.push([h, 0]) : f ? b.push([0, g]) : v && p ? b.push([0, g], [h, 0]) : v ? b.push([h, 0]) : p && b.push([0, g]), b.length) {
      b.sort(function(S, _) {
        return Vt(tt([o, s], S)) - Vt(tt([o, s], _));
      });
      var E = b[0];
      if (E[0] && z(o) > _t)
        m = -E[0], y = s * z(o + m) / z(o) - s;
      else if (E[1] && z(s) > _t) {
        var C = s;
        y = -E[1], m = o * z(s + y) / z(C) - o;
      }
      if (t && f && l)
        if (z(m) > _t && z(m) < z(h)) {
          var x = z(h) / z(m);
          m *= x, y *= x;
        } else if (z(y) > _t && z(y) < z(g)) {
          var x = z(g) / z(y);
          m *= x, y *= x;
        } else
          m = ae(-h, m), y = ae(-g, y);
    }
  } else
    m = o || l ? -h : 0, y = s || f ? -g : 0;
  return [m, y];
}
function G0(t, r, e, n, i, a) {
  if (!de(t, "draggable"))
    return [
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      },
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      }
    ];
  var o = Ma(a.absolutePoses, [r, e]), s = Ht(o), u = s.left, l = s.right, f = s.top, c = s.bottom, v = {
    horizontal: o.map(function(I) {
      return I[1];
    }),
    vertical: o.map(function(I) {
      return I[0];
    })
  }, p = xa(t.props.snapDirections), d = ba(p, {
    left: u,
    right: l,
    top: f,
    bottom: c,
    center: (u + l) / 2,
    middle: (f + c) / 2
  }), h = Bn(t, i, d, v), g = h.vertical, m = h.horizontal, y = w0(t, o, a), b = y.vertical, E = y.horizontal, C = g.isSnap, x = m.isSnap, S = g.isBound || b.isBound, _ = m.isBound || E.isBound, T = ae(g.offset, b.offset), D = ae(m.offset, E.offset), O = P(z0(n, [r, e], [S, _], [C, x], [T, D]), 2), R = O[0], w = O[1];
  return [
    {
      isBound: S,
      isSnap: C,
      offset: R
    },
    {
      isBound: _,
      isSnap: x,
      offset: w
    }
  ];
}
function Bn(t, r, e, n) {
  n === void 0 && (n = e);
  var i = ya(kn(t), n.vertical, n.horizontal), a = i.horizontal, o = i.vertical, s = r ? {
    horizontal: { isSnap: !1, index: -1 },
    vertical: { isSnap: !1, index: -1 }
  } : An(t, e.vertical, e.horizontal), u = s.horizontal, l = s.vertical, f = mn(a[0], u), c = mn(o[0], l), v = z(f), p = z(c);
  return {
    horizontal: {
      isBound: a[0].isBound,
      isSnap: u.isSnap,
      snapIndex: u.index,
      offset: f,
      dist: v,
      bounds: a,
      snap: u
    },
    vertical: {
      isBound: o[0].isBound,
      isSnap: l.isSnap,
      snapIndex: l.index,
      offset: c,
      dist: p,
      bounds: o,
      snap: l
    }
  };
}
function Yo(t, r, e, n, i) {
  var a = ya(r, e, n), o = a.horizontal, s = a.vertical, u = Xu(t, e, n, [], [], i), l = u.horizontal, f = u.vertical, c = mn(o[0], l), v = mn(s[0], f), p = z(c), d = z(v);
  return {
    horizontal: {
      isBound: o[0].isBound,
      isSnap: l.isSnap,
      snapIndex: l.index,
      offset: c,
      dist: p,
      bounds: o,
      snap: l
    },
    vertical: {
      isBound: s[0].isBound,
      isSnap: f.isSnap,
      snapIndex: f.index,
      offset: v,
      dist: d,
      bounds: s,
      snap: f
    }
  };
}
function L0(t, r, e, n) {
  var i = Et(t, r) / Math.PI * 180, a = e.vertical, o = a.isBound, s = a.isSnap, u = a.dist, l = e.horizontal, f = l.isBound, c = l.isSnap, v = l.dist, p = i % 180, d = p < 3 || p > 177, h = p > 87 && p < 93;
  return v < u && (o || s && !h && (!n || !d)) ? "vertical" : f || c && !d && (!n || !h) ? "horizontal" : "";
}
function F0(t, r, e, n, i, a) {
  return e.map(function(o) {
    var s = P(o, 2), u = s[0], l = s[1], f = wt(r, u), c = wt(r, l), v = n ? N0(t, f, c, i) : Bn(t, i, {
      vertical: [c[0]],
      horizontal: [c[1]]
    }), p = v.horizontal, d = p.offset, h = p.isBound, g = p.isSnap, m = v.vertical, y = m.offset, b = m.isBound, E = m.isSnap, C = tt(l, u);
    if (!y && !d)
      return {
        isBound: b || h,
        isSnap: E || g,
        sign: C,
        offset: [0, 0]
      };
    var x = L0(f, c, v, n);
    if (!x)
      return {
        sign: C,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var S = x === "vertical", _ = [0, 0];
    return !n && z(l[0]) === 1 && z(l[1]) === 1 && u[0] !== l[0] && u[1] !== l[1] ? _ = ar({
      datas: a,
      distX: -y,
      distY: -d
    }) : _ = Ri(f, c, -(S ? y : d), S, a).offset, _ = _.map(function(T, D) {
      return T * (C[D] ? 2 / C[D] : 0);
    }), {
      sign: C,
      isBound: S ? b : h,
      isSnap: S ? E : g,
      offset: _
    };
  });
}
function Wo(t, r) {
  return t.isBound ? t.offset : r.isSnap ? r.offset : 0;
}
function N0(t, r, e, n) {
  var i = m0(t, r, e), a = i.horizontal, o = i.vertical, s = n ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : M0(t, r, e), u = s.horizontal, l = s.vertical, f = Wo(a, u), c = Wo(o, l), v = z(f), p = z(c);
  return {
    horizontal: {
      isBound: a.isBound,
      isSnap: u.isSnap,
      offset: f,
      dist: v
    },
    vertical: {
      isBound: o.isBound,
      isSnap: l.isSnap,
      offset: c,
      dist: p
    }
  };
}
function $0(t, r, e, n, i) {
  var a = [-e[0], -e[1]], o = t.state, s = o.width, u = o.height, l = t.props.bounds, f = 1 / 0, c = 1 / 0;
  if (l) {
    var v = [
      [e[0], -e[1]],
      [-e[0], e[1]]
    ], p = l.left, d = p === void 0 ? -1 / 0 : p, h = l.top, g = h === void 0 ? -1 / 0 : h, m = l.right, y = m === void 0 ? 1 / 0 : m, b = l.bottom, E = b === void 0 ? 1 / 0 : b;
    v.forEach(function(C) {
      var x = C[0] !== a[0], S = C[1] !== a[1], _ = wt(r, C), T = Et(n, _) * 360 / Math.PI;
      if (S) {
        var D = _.slice();
        (z(T - 360) < 2 || z(T - 180) < 2) && (D[1] = n[1]);
        var O = Ri(n, D, (n[1] < _[1] ? E : g) - _[1], !1, i), R = P(O.offset, 2), w = R[1], I = O.isOutside;
        isNaN(w) || (c = u + (I ? 1 : -1) * z(w));
      }
      if (x) {
        var D = _.slice();
        (z(T - 90) < 2 || z(T - 270) < 2) && (D[0] = n[0]);
        var k = Ri(n, D, (n[0] < _[0] ? y : d) - _[0], !0, i), F = P(k.offset, 1), L = F[0], A = k.isOutside;
        isNaN(L) || (f = s + (A ? 1 : -1) * z(L));
      }
    });
  }
  return {
    maxWidth: f,
    maxHeight: c
  };
}
var zt = {
  name: "draggable",
  props: [
    "draggable",
    "throttleDrag",
    "throttleDragRotate",
    "hideThrottleDragRotateLine",
    "startDragRotate",
    "edgeDraggable"
  ],
  events: [
    "dragStart",
    "drag",
    "dragEnd",
    "dragGroupStart",
    "dragGroup",
    "dragGroupEnd"
  ],
  requestStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  requestChildStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  render: function(t, r) {
    var e = t.props, n = e.hideThrottleDragRotateLine, i = e.throttleDragRotate, a = e.zoom, o = t.getState(), s = o.dragInfo, u = o.beforeOrigin;
    if (n || !i || !s)
      return [];
    var l = s.dist;
    if (!l[0] && !l[1])
      return [];
    var f = Vt(l), c = Et(l, [0, 0]);
    return [r.createElement("div", { className: Q("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(f, "px"),
      transform: "translate(".concat(u[0], "px, ").concat(u[1], "px) rotate(").concat(c, "rad) scaleY(").concat(a, ")")
    } })];
  },
  dragStart: function(t, r) {
    var e = r.datas, n = r.parentEvent, i = r.parentGesto, a = t.state, o = a.gestos, s = a.style;
    if (o.draggable)
      return !1;
    o.draggable = i || t.targetGesto, e.datas = {}, e.left = parseFloat(s.left || "") || 0, e.top = parseFloat(s.top || "") || 0, e.bottom = parseFloat(s.bottom || "") || 0, e.right = parseFloat(s.right || "") || 0, e.startValue = [0, 0], jr(t, r), In(t, r, "translate"), am(t, e), e.prevDist = [0, 0], e.prevBeforeDist = [0, 0], e.isDrag = !1, e.deltaOffset = [0, 0];
    var u = it(t, r, M({ set: function(f) {
      e.startValue = f;
    } }, On(t, r))), l = n || H(t, "onDragStart", u);
    return l !== !1 ? (e.isDrag = !0, t.state.dragInfo = {
      startRect: t.getRect(),
      dist: [0, 0]
    }) : (o.draggable = null, e.isPinch = !1), e.isDrag ? u : !1;
  },
  drag: function(t, r) {
    if (r) {
      wn(t, r, "translate");
      var e = r.datas, n = r.parentEvent, i = r.parentFlag, a = r.isPinch, o = r.deltaOffset, s = r.useSnap, u = r.isRequest, l = r.distX, f = r.distY, c = e.isDrag, v = e.prevDist, p = e.prevBeforeDist, d = e.startValue;
      if (c) {
        o && (l += o[0], f += o[1]);
        var h = t.props, g = h.parentMoveable, m = n ? 0 : h.throttleDrag || 0, y = n ? 0 : h.throttleDragRotate || 0, b = 0, E = !1, C = !1, x = !1, S = !1;
        if (!n && y > 0 && (l || f)) {
          var _ = h.startDragRotate || 0, T = et(_ + Et([0, 0], [l, f]) * 180 / Math.PI, y) - _, D = f * Math.abs(Math.cos((T - 90) / 180 * Math.PI)), O = l * Math.abs(Math.cos(T / 180 * Math.PI)), R = Vt([O, D]);
          b = T * Math.PI / 180, l = R * Math.cos(b), f = R * Math.sin(b);
        }
        if (!a && !n && !i) {
          var w = P(G0(t, l, f, y, !s && u || o, e), 2), I = w[0], k = w[1];
          E = I.isSnap, C = I.isBound, x = k.isSnap, S = k.isBound;
          var F = I.offset, L = k.offset;
          l += F, f += L;
        }
        var A = lt(Au({ datas: e, distX: l, distY: f }), d), $ = lt(Jg({ datas: e, distX: l, distY: f }), d);
        Co($, Lt), Co(A, Lt), y || (!E && !C && ($[0] = et($[0], m), A[0] = et(A[0], m)), !x && !S && ($[1] = et($[1], m), A[1] = et(A[1], m)));
        var j = tt(A, d), G = tt($, d), q = tt(G, v), U = tt(j, p);
        e.prevDist = G, e.prevBeforeDist = j, e.passDelta = q, e.passDist = G;
        var W = e.left + j[0], X = e.top + j[1], Y = e.right - j[0], V = e.bottom - j[1], J = Rn(e, "translate(".concat($[0], "px, ").concat($[1], "px)"), "translate(".concat(G[0], "px, ").concat(G[1], "px)"));
        if (ga(r, J), t.state.dragInfo.dist = n ? [0, 0] : G, !(!n && !g && q.every(function(ft) {
          return !ft;
        }) && U.some(function(ft) {
          return !ft;
        }))) {
          var nt = t.state, rt = nt.width, Z = nt.height, K = it(t, r, M({ transform: J, dist: G, delta: q, translate: $, beforeDist: j, beforeDelta: U, beforeTranslate: A, left: W, top: X, right: Y, bottom: V, width: rt, height: Z, isPinch: a }, Gt({
            transform: J
          }, r)));
          return !n && H(t, "onDrag", K), K;
        }
      }
    }
  },
  dragAfter: function(t, r) {
    var e = r.datas, n = e.deltaOffset;
    return n[0] || n[1] ? (e.deltaOffset = [0, 0], this.drag(t, M(M({}, r), { deltaOffset: n }))) : !1;
  },
  dragEnd: function(t, r) {
    var e = r.parentEvent, n = r.datas;
    if (t.state.dragInfo = null, !!n.isDrag) {
      n.isDrag = !1;
      var i = Wt(t, r, {});
      return !e && H(t, "onDragEnd", i), i;
    }
  },
  dragGroupStart: function(t, r) {
    var e = r.datas, n = r.clientX, i = r.clientY, a = this.dragStart(t, r);
    if (!a)
      return !1;
    var o = Qn(t, this, "dragStart", [
      n || 0,
      i || 0
    ], r, !1, "draggable"), s = M(M({}, a), { targets: t.props.targets, events: o }), u = H(t, "onDragGroupStart", s);
    return e.isDrag = u !== !1, e.isDrag ? a : !1;
  },
  dragGroup: function(t, r) {
    var e = r.datas;
    if (e.isDrag) {
      var n = this.drag(t, r), i = r.datas.passDelta, a = Qn(t, this, "drag", i, r, !1, "draggable");
      if (n) {
        var o = M({ targets: t.props.targets, events: a }, n);
        return H(t, "onDragGroup", o), o;
      }
    }
  },
  dragGroupEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isDrag) {
      this.dragEnd(t, r);
      var i = Qn(t, this, "dragEnd", [0, 0], r, !1, "draggable");
      return H(t, "onDragGroupEnd", Wt(t, r, {
        targets: t.props.targets,
        events: i
      })), e;
    }
  },
  /**
       * @method Moveable.Draggable#request
       * @param {object} [e] - the draggable's request parameter
       * @param {number} [e.x] - x position
       * @param {number} [e.y] - y position
       * @param {number} [e.deltaX] - X number to move
       * @param {number} [e.deltaY] - Y number to move
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("draggable", { deltaX: 10, deltaY: 10 }, true);
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("draggable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 });
       * moveable.request("draggable", { x: 220, y: 100 });
       * moveable.request("draggable", { x: 240, y: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var r = {}, e = t.getRect(), n = 0, i = 0, a = !1;
    return {
      isControl: !1,
      requestStart: function(o) {
        return a = o.useSnap, { datas: r, useSnap: a };
      },
      request: function(o) {
        return "x" in o ? n = o.x - e.left : "deltaX" in o && (n += o.deltaX), "y" in o ? i = o.y - e.top : "deltaY" in o && (i += o.deltaY), { datas: r, distX: n, distY: i, useSnap: a };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0, useSnap: a };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.draggable = null, t.state.dragInfo = null;
  }
};
function Ku(t, r) {
  var e = wt(t, r), n = [0, 0];
  return {
    fixedPosition: e,
    fixedDirection: r,
    fixedOffset: n
  };
}
function j0(t, r) {
  var e = t.allMatrix, n = t.is3d, i = t.width, a = t.height, o = n ? 4 : 3, s = [
    i / 2 * (1 + r[0]),
    a / 2 * (1 + r[1])
  ], u = bt(e, s, o), l = [0, 0];
  return {
    fixedPosition: u,
    fixedDirection: r,
    fixedOffset: l
  };
}
function Zu(t, r) {
  var e = t.allMatrix, n = t.is3d, i = t.width, a = t.height, o = n ? 4 : 3, s = o0(r, i, a), u = bt(e, r, o), l = [
    i ? 0 : r[0],
    a ? 0 : r[1]
  ];
  return {
    fixedPosition: u,
    fixedDirection: s,
    fixedOffset: l
  };
}
var Xo = Da("resizable"), Oi = {
  name: "resizable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "resizable",
    "throttleResize",
    "renderDirections",
    "displayAroundControls",
    "keepRatio",
    "resizeFormat",
    "keepRatioFinally",
    "edge",
    "checkResizableError"
  ],
  events: [
    "resizeStart",
    "beforeResize",
    "resize",
    "resizeEnd",
    "resizeGroupStart",
    "beforeResizeGroup",
    "resizeGroup",
    "resizeGroupEnd"
  ],
  render: ju("resizable"),
  dragControlCondition: Xo,
  viewClassName: Pa("resizable"),
  dragControlStart: function(t, r) {
    var e, n = r.inputEvent, i = r.isPinch, a = r.isGroup, o = r.parentDirection, s = r.parentGesto, u = r.datas, l = r.parentFixedDirection, f = r.parentEvent, c = vl(o, i, n, u), v = t.state, p = v.target, d = v.width, h = v.height, g = v.gestos;
    if (!c || !p || g.resizable)
      return !1;
    g.resizable = s || t.controlGesto, !i && jr(t, r), u.datas = {}, u.direction = c, u.startOffsetWidth = d, u.startOffsetHeight = h, u.prevWidth = 0, u.prevHeight = 0, u.minSize = [0, 0], u.startWidth = v.inlineCSSWidth || v.cssWidth, u.startHeight = v.inlineCSSHeight || v.cssHeight, u.maxSize = [1 / 0, 1 / 0], a || (u.minSize = [
      v.minOffsetWidth,
      v.minOffsetHeight
    ], u.maxSize = [
      v.maxOffsetWidth,
      v.maxOffsetHeight
    ]);
    var m = t.props.transformOrigin || "% %";
    u.transformOrigin = m && Nt(m) ? m.split(" ") : m, u.startOffsetMatrix = v.offsetMatrix, u.startTransformOrigin = v.transformOrigin, u.isWidth = (e = r == null ? void 0 : r.parentIsWidth) !== null && e !== void 0 ? e : !c[0] && !c[1] || c[0] || !c[1];
    function y(T) {
      u.ratio = T && isFinite(T) ? T : 0;
    }
    u.startPositions = qt(t.state);
    function b(T) {
      var D = Ku(u.startPositions, T);
      u.fixedDirection = D.fixedDirection, u.fixedPosition = D.fixedPosition, u.fixedOffset = D.fixedOffset;
    }
    function E(T) {
      var D = Zu(t.state, T);
      u.fixedDirection = D.fixedDirection, u.fixedPosition = D.fixedPosition, u.fixedOffset = D.fixedOffset;
    }
    function C(T) {
      u.minSize = [
        vt("".concat(T[0]), 0) || 0,
        vt("".concat(T[1]), 0) || 0
      ];
    }
    function x(T) {
      var D = [
        T[0] || 1 / 0,
        T[1] || 1 / 0
      ];
      (!re(D[0]) || isFinite(D[0])) && (D[0] = vt("".concat(D[0]), 0) || 1 / 0), (!re(D[1]) || isFinite(D[1])) && (D[1] = vt("".concat(D[1]), 0) || 1 / 0), u.maxSize = D;
    }
    y(d / h), b(l || [-c[0], -c[1]]), u.setFixedDirection = b, u.setFixedPosition = E, u.setMin = C, u.setMax = x;
    var S = it(t, r, {
      direction: c,
      startRatio: u.ratio,
      set: function(T) {
        var D = P(T, 2), O = D[0], R = D[1];
        u.startWidth = O, u.startHeight = R;
      },
      setMin: C,
      setMax: x,
      setRatio: y,
      setFixedDirection: b,
      setFixedPosition: E,
      setOrigin: function(T) {
        u.transformOrigin = T;
      },
      dragStart: zt.dragStart(t, new ne().dragStart([0, 0], r))
    }), _ = f || H(t, "onResizeStart", S);
    return u.startFixedDirection = u.fixedDirection, u.startFixedPosition = u.fixedPosition, _ !== !1 && (u.isResize = !0, t.state.snapRenderInfo = {
      request: r.isRequest,
      direction: c
    }), u.isResize ? S : !1;
  },
  dragControl: function(t, r) {
    var e, n = r.datas, i = r.parentFlag, a = r.isPinch, o = r.parentKeepRatio, s = r.dragClient, u = r.parentDist, l = r.useSnap, f = r.isRequest, c = r.isGroup, v = r.parentEvent, p = r.resolveMatrix, d = n.isResize, h = n.transformOrigin, g = n.startWidth, m = n.startHeight, y = n.prevWidth, b = n.prevHeight, E = n.minSize, C = n.maxSize, x = n.ratio, S = n.startOffsetWidth, _ = n.startOffsetHeight, T = n.isWidth;
    if (!d)
      return;
    if (p) {
      var D = t.state.is3d, O = n.startOffsetMatrix, R = n.startTransformOrigin, w = D ? 4 : 3, I = Oe(dn(r)), k = Math.sqrt(I.length);
      w !== k && (I = Qt(I, k, w));
      var F = We(O, I, R, w), L = Yr(F, S, _, w);
      n.startPositions = L, n.nextTargetMatrix = I, n.nextAllMatrix = F;
    }
    var A = zr(t.props, "resizable"), $ = A.resizeFormat, j = A.throttleResize, G = j === void 0 ? i ? 0 : 1 : j, q = A.parentMoveable, U = A.keepRatioFinally, W = n.direction, X = W, Y = 0, V = 0;
    !W[0] && !W[1] && (X = [1, 1]);
    var J = x && (o != null ? o : A.keepRatio) || !1;
    function nt() {
      var St = n.fixedDirection, Tt = xl(X, J, n, r);
      Y = Tt.distWidth, V = Tt.distHeight;
      var pr = X[0] - St[0] || J ? Math.max(S + Y, Lt) : S, dr = X[1] - St[1] || J ? Math.max(_ + V, Lt) : _;
      return J && S && _ && (T ? dr = pr / x : pr = dr * x), [pr, dr];
    }
    var rt = P(nt(), 2), Z = rt[0], K = rt[1];
    v || (n.setFixedDirection(n.fixedDirection), H(t, "onBeforeResize", it(t, r, {
      startFixedDirection: n.startFixedDirection,
      startFixedPosition: n.startFixedPosition,
      setFixedDirection: function(St) {
        var Tt;
        return n.setFixedDirection(St), Tt = P(nt(), 2), Z = Tt[0], K = Tt[1], [Z, K];
      },
      setFixedPosition: function(St) {
        var Tt;
        return n.setFixedPosition(St), Tt = P(nt(), 2), Z = Tt[0], K = Tt[1], [Z, K];
      },
      boundingWidth: Z,
      boundingHeight: K,
      setSize: function(St) {
        var Tt;
        Tt = P(St, 2), Z = Tt[0], K = Tt[1];
      }
    }, !0)));
    var ft = s;
    s || (!i && a ? ft = f0(t, [0, 0]) : ft = n.fixedPosition);
    var at = [0, 0];
    a || (at = nm(t, Z, K, W, ft, !l && f, n)), u && (!u[0] && (at[0] = 0), !u[1] && (at[1] = 0));
    function ot() {
      var St;
      $ && (St = P($([Z, K]), 2), Z = St[0], K = St[1]), Z = et(Z, G), K = et(K, G);
    }
    if (J) {
      X[0] && X[1] && at[0] && at[1] && (z(at[0]) > z(at[1]) ? at[1] = 0 : at[0] = 0);
      var ut = !at[0] && !at[1];
      ut && ot(), X[0] && !X[1] || at[0] && !at[1] || ut && T ? (Z += at[0], K = Z / x) : (!X[0] && X[1] || !at[0] && at[1] || ut && !T) && (K += at[1], Z = K * x);
    } else
      Z += at[0], K += at[1], Z = Math.max(0, Z), K = Math.max(0, K);
    e = P(qs([Z, K], E, C, J ? x : !1), 2), Z = e[0], K = e[1], ot(), J && (c || U) && (T ? K = Z / x : Z = K * x), Y = Z - S, V = K - _;
    var xt = [Y - y, V - b];
    n.prevWidth = Y, n.prevHeight = V;
    var dt = l0(t, Z, K, ft, h, n);
    if (!(!q && xt.every(function(St) {
      return !St;
    }) && dt.every(function(St) {
      return !St;
    }))) {
      var st = zt.drag(t, Ye(r, t.state, dt, !!a, !1, "draggable")), ct = st.transform, Rt = g + Y, At = m + V, It = it(t, r, M({ width: Rt, height: At, offsetWidth: Math.round(Z), offsetHeight: Math.round(K), startRatio: x, boundingWidth: Z, boundingHeight: K, direction: W, dist: [Y, V], delta: xt, isPinch: !!a, drag: st }, dl({
        style: {
          width: "".concat(Rt, "px"),
          height: "".concat(At, "px")
        },
        transform: ct
      }, st, r)));
      return !v && H(t, "onResize", It), It;
    }
  },
  dragControlAfter: function(t, r) {
    var e = r.datas, n = e.isResize, i = e.startOffsetWidth, a = e.startOffsetHeight, o = e.prevWidth, s = e.prevHeight;
    if (!(!n || t.props.checkResizableError === !1)) {
      var u = t.state, l = u.width, f = u.height, c = l - (i + o), v = f - (a + s), p = z(c) > 3, d = z(v) > 3;
      if (p && (e.startWidth += c, e.startOffsetWidth += c, e.prevWidth += c), d && (e.startHeight += v, e.startOffsetHeight += v, e.prevHeight += v), p || d)
        return this.dragControl(t, r);
    }
  },
  dragControlEnd: function(t, r) {
    var e = r.datas, n = r.parentEvent;
    if (e.isResize) {
      e.isResize = !1;
      var i = Wt(t, r, {});
      return !n && H(t, "onResizeEnd", i), i;
    }
  },
  dragGroupControlCondition: Xo,
  dragGroupControlStart: function(t, r) {
    var e = r.datas, n = this.dragControlStart(t, M(M({}, r), { isGroup: !0 }));
    if (!n)
      return !1;
    var i = Zt(t, "resizable", r), a = e.startOffsetWidth, o = e.startOffsetHeight;
    function s() {
      var p = e.minSize;
      i.forEach(function(d) {
        var h = d.datas, g = h.minSize, m = h.startOffsetWidth, y = h.startOffsetHeight, b = a * (m ? g[0] / m : 0), E = o * (y ? g[1] / y : 0);
        p[0] = Math.max(p[0], b), p[1] = Math.max(p[1], E);
      });
    }
    function u() {
      var p = e.maxSize;
      i.forEach(function(d) {
        var h = d.datas, g = h.maxSize, m = h.startOffsetWidth, y = h.startOffsetHeight, b = a * (m ? g[0] / m : 0), E = o * (y ? g[1] / y : 0);
        p[0] = Math.min(p[0], b), p[1] = Math.min(p[1], E);
      });
    }
    var l = ur(t, this, "dragControlStart", r, function(p, d) {
      return hn(t, p, e, d);
    });
    s(), u();
    var f = function(p) {
      n.setFixedDirection(p), l.forEach(function(d, h) {
        d.setFixedDirection(p), hn(t, d.moveable, e, i[h]);
      });
    };
    e.setFixedDirection = f;
    var c = M(M({}, n), { targets: t.props.targets, events: l.map(function(p) {
      return M(M({}, p), { setMin: function(d) {
        p.setMin(d), s();
      }, setMax: function(d) {
        p.setMax(d), u();
      } });
    }), setFixedDirection: f, setMin: function(p) {
      n.setMin(p), s();
    }, setMax: function(p) {
      n.setMax(p), u();
    } }), v = H(t, "onResizeGroupStart", c);
    return e.isResize = v !== !1, e.isResize ? n : !1;
  },
  dragGroupControl: function(t, r) {
    var e = r.datas;
    if (e.isResize) {
      var n = zr(t.props, "resizable");
      Gn(t, "onBeforeResize", function(p) {
        H(t, "onBeforeResizeGroup", it(t, r, M(M({}, p), { targets: n.targets }), !0));
      });
      var i = this.dragControl(t, M(M({}, r), { isGroup: !0 }));
      if (i) {
        var a = i.boundingWidth, o = i.boundingHeight, s = i.dist, u = n.keepRatio, l = [
          a / (a - s[0]),
          o / (o - s[1])
        ], f = e.fixedPosition, c = ur(t, this, "dragControl", r, function(p, d) {
          var h = P(kt($e(t.rotation / 180 * Math.PI, 3), [
            d.datas.originalX * l[0],
            d.datas.originalY * l[1],
            1
          ], 3), 2), g = h[0], m = h[1];
          return M(M({}, d), { parentDist: null, parentScale: l, dragClient: lt(f, [g, m]), parentKeepRatio: u });
        }), v = M({ targets: n.targets, events: c }, i);
        return H(t, "onResizeGroup", v), v;
      }
    }
  },
  dragGroupControlEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isResize) {
      this.dragControlEnd(t, r);
      var i = ur(t, this, "dragControlEnd", r), a = Wt(t, r, {
        targets: t.props.targets,
        events: i
      });
      return H(t, "onResizeGroupEnd", a), e;
    }
  },
  /**
       * @method Moveable.Resizable#request
       * @param {Moveable.Resizable.ResizableRequestParam} e - the Resizable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("resizable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("resizable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 110, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 120, offsetHeight: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var r = {}, e = 0, n = 0, i = !1, a = t.getRect();
    return {
      isControl: !0,
      requestStart: function(o) {
        var s;
        return i = o.useSnap, {
          datas: r,
          parentDirection: o.direction || [1, 1],
          parentIsWidth: (s = o == null ? void 0 : o.horizontal) !== null && s !== void 0 ? s : !0,
          useSnap: i
        };
      },
      request: function(o) {
        return "offsetWidth" in o ? e = o.offsetWidth - a.offsetWidth : "deltaWidth" in o && (e += o.deltaWidth), "offsetHeight" in o ? n = o.offsetHeight - a.offsetHeight : "deltaHeight" in o && (n += o.deltaHeight), {
          datas: r,
          parentDist: [e, n],
          parentKeepRatio: o.keepRatio,
          useSnap: i
        };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0, useSnap: i };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.resizable = null;
  }
};
function ti(t, r, e, n, i) {
  var a = t.props.groupable, o = t.state, s = o.is3d ? 4 : 3, u = r.origin, l = bt(
    t.state.rootMatrix,
    // TO-DO #710
    tt([u[0], u[1]], a ? [0, 0] : [o.left, o.top]),
    s
  ), f = lt([i.left, i.top], l);
  r.startAbsoluteOrigin = f, r.prevDeg = Et(f, [e, n]) / Math.PI * 180, r.defaultDeg = r.prevDeg, r.prevSnapDeg = 0, r.loop = 0, r.startDist = sr(f, [e, n]);
}
function ln(t, r, e) {
  var n = e.defaultDeg, i = e.prevDeg, a = i % 360, o = Math.floor(i / 360);
  a < 0 && (a += 360), a > t && a > 270 && t < 90 ? ++o : a < t && a < 90 && t > 270 && --o;
  var s = r * (o * 360 + t - n);
  return e.prevDeg = n + s, s;
}
function ri(t, r, e, n) {
  return ln(Et(n.startAbsoluteOrigin, [t, r]) / Math.PI * 180, e, n);
}
function ei(t, r, e, n, i, a) {
  var o = t.props.throttleRotate, s = o === void 0 ? 0 : o, u = e.prevSnapDeg, l = 0, f = !1;
  if (a) {
    var c = em(t, r, n, i + n);
    f = c.isSnap, l = i + c.dist;
  }
  f || (l = et(i + n, s));
  var v = l - i;
  return e.prevSnapDeg = v, [v - u, v, l];
}
function Ju(t, r, e) {
  var n = P(r, 4), i = n[0], a = n[1], o = n[2], s = n[3];
  if (t === "none")
    return [];
  if (Mt(t))
    return t.map(function(g) {
      return Ju(g, [i, a, o, s], e)[0];
    });
  var u = P((t || "top").split("-"), 2), l = u[0], f = u[1], c = [i, a];
  l === "left" ? c = [o, i] : l === "right" ? c = [a, s] : l === "bottom" && (c = [s, o]);
  var v = [
    (c[0][0] + c[1][0]) / 2,
    (c[0][1] + c[1][1]) / 2
  ], p = fl(c, e);
  if (f) {
    var d = f === "top" || f === "left", h = l === "bottom" || l === "left";
    v = c[d && !h || !d && h ? 0 : 1];
  }
  return [[v, p]];
}
function Ii(t, r) {
  if (r.isRequest)
    return r.requestAble === "rotatable";
  var e = r.inputEvent.target;
  if (Dt(e, Q("rotation-control")) || t.props.rotateAroundControls && Dt(e, Q("around-control")) || Dt(e, Q("control")) && Dt(e, Q("rotatable")))
    return !0;
  var n = t.props.rotationTarget;
  return n ? wa(n, !0).some(function(i) {
    return i ? e === i || e.contains(i) : !1;
  }) : !1;
}
var Y0 = `.rotation {
position: absolute;
height: 40px;
width: 1px;
transform-origin: 50% 100%;
height: calc(40px * var(--zoom));
top: auto;
left: 0;
bottom: 100%;
will-change: transform;
}
.rotation .rotation-line {
display: block;
width: 100%;
height: 100%;
transform-origin: 50% 50%;
}
.rotation .rotation-control {
border-color: #4af;
border-color: var(--moveable-color);
background:#fff;
cursor: alias;
}
:global .view-rotation-dragging, .rotatable.direction.control {
cursor: alias;
}
.rotatable.direction.control.move {
cursor: move;
}
`, W0 = {
  name: "rotatable",
  canPinch: !0,
  props: [
    "rotatable",
    "rotationPosition",
    "throttleRotate",
    "renderDirections",
    "rotationTarget",
    "rotateAroundControls",
    "edge",
    "resolveAblesWithRotatable",
    "displayAroundControls"
  ],
  events: [
    "rotateStart",
    "beforeRotate",
    "rotate",
    "rotateEnd",
    "rotateGroupStart",
    "beforeRotateGroup",
    "rotateGroup",
    "rotateGroupEnd"
  ],
  css: [Y0],
  viewClassName: function(t) {
    return t.isDragging("rotatable") ? Q("view-rotation-dragging") : "";
  },
  render: function(t, r) {
    var e = zr(t.props, "rotatable"), n = e.rotatable, i = e.rotationPosition, a = e.zoom, o = e.renderDirections, s = e.rotateAroundControls, u = e.resolveAblesWithRotatable, l = t.getState(), f = l.renderPoses, c = l.direction;
    if (!n)
      return null;
    var v = Ju(i, f, c), p = [];
    if (v.forEach(function(m, y) {
      var b = P(m, 2), E = b[0], C = b[1];
      p.push(r.createElement(
        "div",
        { key: "rotation".concat(y), className: Q("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(E[0], "px, ").concat(E[1], "px) rotate(").concat(C, "rad)")
        } },
        r.createElement("div", { className: Q("line rotation-line"), style: {
          transform: "scaleX(".concat(a, ")")
        } }),
        r.createElement("div", { className: Q("control rotation-control"), style: {
          transform: "translate(0.5px) scale(".concat(a, ")")
        } })
      ));
    }), o) {
      var d = cr(u || {}), h = {};
      d.forEach(function(m) {
        u[m].forEach(function(y) {
          h[y] = m;
        });
      });
      var g = [];
      Mt(o) && (g = o.map(function(m) {
        var y = h[m];
        return {
          data: y ? { resolve: y } : {},
          classNames: y ? ["move"] : [],
          dir: m
        };
      })), p.push.apply(p, N([], P(Fu(t, "rotatable", g, r)), !1));
    }
    return s && p.push.apply(p, N([], P(Wu(t, r)), !1)), p;
  },
  dragControlCondition: Ii,
  dragControlStart: function(t, r) {
    var e, n, i = r.datas, a = r.clientX, o = r.clientY, s = r.parentRotate, u = r.parentFlag, l = r.isPinch, f = r.isRequest, c = t.state, v = c.target, p = c.left, d = c.top, h = c.direction, g = c.beforeDirection, m = c.targetTransform, y = c.moveableClientRect, b = c.offsetMatrix, E = c.targetMatrix, C = c.allMatrix, x = c.width, S = c.height;
    if (!f && !v)
      return !1;
    var _ = t.getRect();
    i.rect = _, i.transform = m, i.left = p, i.top = d;
    var T = function(X) {
      var Y = Zu(t.state, X);
      i.fixedDirection = Y.fixedDirection, i.fixedOffset = Y.fixedOffset, i.fixedPosition = Y.fixedPosition, G && G.setFixedPosition(X);
    }, D = function(X) {
      var Y = j0(t.state, X);
      i.fixedDirection = Y.fixedDirection, i.fixedOffset = Y.fixedOffset, i.fixedPosition = Y.fixedPosition, G && G.setFixedDirection(X);
    }, O = a, R = o;
    if (f || l || u) {
      var w = s || 0;
      i.beforeInfo = {
        origin: _.beforeOrigin,
        prevDeg: w,
        defaultDeg: w,
        prevSnapDeg: 0,
        startDist: 0
      }, i.afterInfo = M(M({}, i.beforeInfo), { origin: _.origin }), i.absoluteInfo = M(M({}, i.beforeInfo), { origin: _.origin, startValue: w });
    } else {
      var I = (n = r.inputEvent) === null || n === void 0 ? void 0 : n.target;
      if (I) {
        var k = I.getAttribute("data-direction") || "", F = Kg[k];
        if (F) {
          i.isControl = !0, i.isAroundControl = Dt(I, Q("around-control")), i.controlDirection = F;
          var L = I.getAttribute("data-resolve");
          L && (i.resolveAble = L);
          var A = ym(c.rootMatrix, c.renderPoses, y);
          e = P(wt(A, F), 2), O = e[0], R = e[1];
        }
      }
      i.beforeInfo = { origin: _.beforeOrigin }, i.afterInfo = { origin: _.origin }, i.absoluteInfo = {
        origin: _.origin,
        startValue: _.rotation
      };
      var $ = T;
      T = function(X) {
        var Y = c.is3d ? 4 : 3, V = P(lt(yu(E, Y), X), 2), J = V[0], nt = V[1], rt = kt(b, kr([J, nt], Y)), Z = kt(C, kr([X[0], X[1]], Y));
        $(X);
        var K = c.posDelta;
        i.beforeInfo.origin = tt(rt, K), i.afterInfo.origin = tt(Z, K), i.absoluteInfo.origin = tt(Z, K), ti(t, i.beforeInfo, O, R, y), ti(t, i.afterInfo, O, R, y), ti(t, i.absoluteInfo, O, R, y);
      }, D = function(X) {
        var Y = wt([
          [0, 0],
          [x, 0],
          [0, S],
          [x, S]
        ], X);
        T(Y);
      };
    }
    i.startClientX = O, i.startClientY = R, i.direction = h, i.beforeDirection = g, i.startValue = 0, i.datas = {}, In(t, r, "rotate");
    var j = !1, G = !1;
    if (i.isControl && i.resolveAble) {
      var q = i.resolveAble;
      q === "resizable" && (G = Oi.dragControlStart(t, M(M({}, new ne("resizable").dragStart([0, 0], r)), { parentPosition: i.controlPosition, parentFixedPosition: i.fixedPosition })));
    }
    G || (j = zt.dragStart(t, new ne().dragStart([0, 0], r))), T(xm(t));
    var U = it(t, r, M(M({ set: function(X) {
      i.startValue = X * Math.PI / 180;
    }, setFixedDirection: D, setFixedPosition: T }, On(t, r)), { dragStart: j, resizeStart: G })), W = H(t, "onRotateStart", U);
    return i.isRotate = W !== !1, c.snapRenderInfo = {
      request: r.isRequest
    }, i.isRotate ? U : !1;
  },
  dragControl: function(t, r) {
    var e, n, i, a = r.datas, o = r.clientDistX, s = r.clientDistY, u = r.parentRotate, l = r.parentFlag, f = r.isPinch, c = r.groupDelta, v = r.resolveMatrix, p = a.beforeDirection, d = a.beforeInfo, h = a.afterInfo, g = a.absoluteInfo, m = a.isRotate, y = a.startValue, b = a.rect, E = a.startClientX, C = a.startClientY;
    if (m) {
      wn(t, r, "rotate");
      var x = Zg(r), S = p * x, _ = t.props.parentMoveable, T = 0, D, O, R = 0, w, I, k = 0, F, L, A = 180 / Math.PI * y, $ = g.startValue, j = !1, G = E + o, q = C + s;
      if (!l && "parentDist" in r) {
        var U = r.parentDist;
        D = U, w = U, F = U;
      } else
        f || l ? (D = ln(u, p, d), w = ln(u, S, h), F = ln(u, S, g)) : (D = ri(G, q, p, d), w = ri(G, q, S, h), F = ri(G, q, S, g), j = !0);
      if (O = A + D, I = A + w, L = $ + F, H(t, "onBeforeRotate", it(t, r, {
        beforeRotation: O,
        rotation: I,
        absoluteRotation: L,
        setRotation: function(ft) {
          w = ft - A, D = w, F = w;
        }
      }, !0)), e = P(ei(t, b, d, D, A, j), 3), T = e[0], D = e[1], O = e[2], n = P(ei(t, b, h, w, A, j), 3), R = n[0], w = n[1], I = n[2], i = P(ei(t, b, g, F, $, j), 3), k = i[0], F = i[1], L = i[2], !(!k && !R && !T && !_ && !v)) {
        var W = Rn(a, "rotate(".concat(I, "deg)"), "rotate(".concat(w, "deg)"));
        v && (a.fixedPosition = ma(t, a.targetAllTransform, a.fixedDirection, a.fixedOffset, a));
        var X = u0(t, w, a), Y = tt(lt(c || [0, 0], X), a.prevInverseDist || [0, 0]);
        a.prevInverseDist = X, a.requestValue = null;
        var V = zu(t, W, Y, f, r), J = V, nt = sr([G, q], g.startAbsoluteOrigin) - g.startDist, rt = void 0;
        if (a.resolveAble === "resizable") {
          var Z = Oi.dragControl(t, M(M({}, Ye(r, t.state, [r.deltaX, r.deltaY], !!f, !1, "resizable")), { resolveMatrix: !0, parentDistance: nt }));
          Z && (rt = Z, J = dl(J, Z, r));
        }
        var K = it(t, r, M(M({ delta: R, dist: w, rotate: I, rotation: I, beforeDist: D, beforeDelta: T, beforeRotate: O, beforeRotation: O, absoluteDist: F, absoluteDelta: k, absoluteRotate: L, absoluteRotation: L, isPinch: !!f, resize: rt }, V), J));
        return H(t, "onRotate", K), K;
      }
    }
  },
  dragControlEnd: function(t, r) {
    var e = r.datas;
    if (e.isRotate) {
      e.isRotate = !1;
      var n = Wt(t, r, {});
      return H(t, "onRotateEnd", n), n;
    }
  },
  dragGroupControlCondition: Ii,
  dragGroupControlStart: function(t, r) {
    var e = r.datas, n = t.state, i = n.left, a = n.top, o = n.beforeOrigin, s = this.dragControlStart(t, r);
    if (!s)
      return !1;
    s.set(e.beforeDirection * t.rotation);
    var u = ur(t, this, "dragControlStart", r, function(c, v) {
      var p = c.state, d = p.left, h = p.top, g = p.beforeOrigin, m = lt(tt([d, h], [i, a]), tt(g, o));
      return v.datas.startGroupClient = m, v.datas.groupClient = m, M(M({}, v), { parentRotate: 0 });
    }), l = M(M({}, s), { targets: t.props.targets, events: u }), f = H(t, "onRotateGroupStart", l);
    return e.isRotate = f !== !1, e.isRotate ? s : !1;
  },
  dragGroupControl: function(t, r) {
    var e = r.datas;
    if (e.isRotate) {
      Gn(t, "onBeforeRotate", function(l) {
        H(t, "onBeforeRotateGroup", it(t, r, M(M({}, l), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, r);
      if (n) {
        var i = e.beforeDirection, a = n.beforeDist, o = a / 180 * Math.PI, s = ur(t, this, "dragControl", r, function(l, f) {
          var c = f.datas.startGroupClient, v = P(f.datas.groupClient, 2), p = v[0], d = v[1], h = P(Ne(c, o * i), 2), g = h[0], m = h[1], y = [g - p, m - d];
          return f.datas.groupClient = [g, m], M(M({}, f), { parentRotate: a, groupDelta: y });
        });
        t.rotation = i * n.beforeRotation;
        var u = M({ targets: t.props.targets, events: s, set: function(l) {
          t.rotation = l;
        }, setGroupRotation: function(l) {
          t.rotation = l;
        } }, n);
        return H(t, "onRotateGroup", u), u;
      }
    }
  },
  dragGroupControlEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isRotate) {
      this.dragControlEnd(t, r);
      var i = ur(t, this, "dragControlEnd", r), a = Wt(t, r, {
        targets: t.props.targets,
        events: i
      });
      return H(t, "onRotateGroupEnd", a), e;
    }
  },
  /**
       * @method Moveable.Rotatable#request
       * @param {object} [e] - the Resizable's request parameter
       * @param {number} [e.deltaRotate=0] -  delta number of rotation
       * @param {number} [e.rotate=0] - absolute number of moveable's rotation
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("rotatable", { deltaRotate: 10 }, true);
       *
       * * moveable.request("rotatable", { rotate: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("rotatable");
       *
       * // request
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       *
       * requester.request({ rotate: 10 });
       * requester.request({ rotate: 20 });
       * requester.request({ rotate: 30 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var r = {}, e = 0, n = t.getRotation();
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: r };
      },
      request: function(i) {
        return "deltaRotate" in i ? e += i.deltaRotate : "rotate" in i && (e = i.rotate - n), { datas: r, parentDist: e };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0 };
      }
    };
  }
};
function X0(t, r) {
  var e, n = t.direction, i = t.classNames, a = t.size, o = t.pos, s = t.zoom, u = t.key, l = n === "horizontal", f = l ? "Y" : "X";
  return r.createElement("div", {
    key: u,
    className: i.join(" "),
    style: (e = {}, e[l ? "width" : "height"] = "".concat(a), e.transform = "translate(".concat(o[0], ", ").concat(o[1], ") translate").concat(f, "(-50%) scale").concat(f, "(").concat(s, ")"), e)
  });
}
function Ca(t, r) {
  return X0(M(M({}, t), { classNames: N([
    Q("line", "guideline", t.direction)
  ], P(t.classNames), !1).filter(function(e) {
    return e;
  }), size: t.size || "".concat(t.sizeValue, "px"), pos: t.pos || t.posValue.map(function(e) {
    return "".concat(et(e, 0.1), "px");
  }) }), r);
}
function Ho(t, r, e, n, i, a, o, s) {
  var u = t.props.zoom;
  return e.map(function(l, f) {
    var c = l.type, v = l.pos, p = [0, 0];
    return p[o] = n, p[o ? 0 : 1] = -i + v, Ca({
      key: "".concat(r, "TargetGuideline").concat(f),
      classNames: [Q("target", "bold", c)],
      posValue: p,
      sizeValue: a,
      zoom: u,
      direction: r
    }, s);
  });
}
function Vo(t, r, e, n, i, a) {
  var o = t.props, s = o.zoom, u = o.isDisplayInnerSnapDigit, l = r === "horizontal" ? Er : Sr, f = i[l.start], c = i[l.end];
  return e.filter(function(v) {
    var p = v.hide, d = v.elementRect;
    if (p)
      return !1;
    if (u && d) {
      var h = d.rect;
      if (h[l.start] <= f && c <= h[l.end])
        return !1;
    }
    return !0;
  }).map(function(v, p) {
    var d = v.pos, h = v.size, g = v.element, m = v.className, y = [
      -n[0] + d[0],
      -n[1] + d[1]
    ];
    return Ca({
      key: "".concat(r, "-default-guideline-").concat(p),
      classNames: g ? [Q("bold"), m] : [Q("normal"), m],
      direction: r,
      posValue: y,
      sizeValue: h,
      zoom: s
    }, a);
  });
}
function ye(t, r, e, n, i, a, o, s) {
  var u, l = t.props, f = l.snapDigit, c = f === void 0 ? 0 : f, v = l.isDisplaySnapDigit, p = v === void 0 ? !0 : v, d = l.snapDistFormat, h = d === void 0 ? function(C, x) {
    return C;
  } : d, g = l.zoom, m = r === "horizontal" ? "X" : "Y", y = r === "vertical" ? "height" : "width", b = Math.abs(i), E = p ? parseFloat(b.toFixed(c)) : 0;
  return s.createElement(
    "div",
    { key: "".concat(r, "-").concat(e, "-guideline-").concat(n), className: Q("guideline-group", r), style: (u = {
      left: "".concat(a[0], "px"),
      top: "".concat(a[1], "px")
    }, u[y] = "".concat(b, "px"), u) },
    Ca({
      direction: r,
      classNames: [Q(e), o],
      size: "100%",
      posValue: [0, 0],
      sizeValue: b,
      zoom: g
    }, s),
    s.createElement("div", { className: Q("size-value", "gap"), style: {
      transform: "translate".concat(m, "(-50%) scale(").concat(g, ")")
    } }, E > 0 ? h(E, r) : "")
  );
}
function H0(t, r, e, n) {
  var i = t === "vertical" ? 0 : 1, a = t === "vertical" ? 1 : 0, o = i ? Er : Sr, s = e[o.start], u = e[o.end];
  return hl(r, function(l) {
    return l.pos[i];
  }).map(function(l) {
    var f = [], c = [], v = [];
    return l.forEach(function(p) {
      var d, h, g = p.element, m = p.elementRect.rect;
      if (m[o.end] < s)
        f.push(p);
      else if (u < m[o.start])
        c.push(p);
      else if (m[o.start] <= s && u <= m[o.end] && n) {
        var y = p.pos, b = { element: g, rect: M(M({}, m), (d = {}, d[o.end] = m[o.start], d)) }, E = { element: g, rect: M(M({}, m), (h = {}, h[o.start] = m[o.end], h)) }, C = [0, 0], x = [0, 0];
        C[i] = y[i], C[a] = y[a], x[i] = y[i], x[a] = y[a] + p.size, f.push({
          type: t,
          pos: C,
          size: 0,
          elementRect: b,
          direction: "",
          elementDirection: "end"
        }), c.push({
          type: t,
          pos: x,
          size: 0,
          elementRect: E,
          direction: "",
          elementDirection: "start"
        });
      }
    }), f.sort(function(p, d) {
      return d.pos[a] - p.pos[a];
    }), c.sort(function(p, d) {
      return p.pos[a] - d.pos[a];
    }), {
      total: l,
      start: f,
      end: c,
      inner: v
    };
  });
}
function V0(t, r, e, n, i) {
  var a = t.props.isDisplayInnerSnapDigit, o = [];
  return ["vertical", "horizontal"].forEach(function(s) {
    var u = r.filter(function(g) {
      return g.type === s;
    }), l = s === "vertical" ? 1 : 0, f = l ? 0 : 1, c = H0(s, u, n, a), v = l ? Sr : Er, p = l ? Er : Sr, d = n[v.start], h = n[v.end];
    c.forEach(function(g) {
      var m = g.total, y = g.start, b = g.end, E = g.inner, C = e[f] + m[0].pos[f] - n[p.start], x = n;
      y.forEach(function(S) {
        var _ = S.elementRect.rect, T = x[v.start] - _[v.end];
        if (T > 0) {
          var D = [0, 0];
          D[l] = e[l] + x[v.start] - d - T, D[f] = C, o.push(ye(t, s, "dashed", o.length, T, D, S.className, i));
        }
        x = _;
      }), x = n, b.forEach(function(S) {
        var _ = S.elementRect.rect, T = _[v.start] - x[v.end];
        if (T > 0) {
          var D = [0, 0];
          D[l] = e[l] + x[v.end] - d, D[f] = C, o.push(ye(t, s, "dashed", o.length, T, D, S.className, i));
        }
        x = _;
      }), E.forEach(function(S) {
        var _ = S.elementRect.rect, T = d - _[v.start], D = _[v.end] - h, O = [0, 0], R = [0, 0];
        O[l] = e[l] - T, O[f] = C, R[l] = e[l] + h - d, R[f] = C, o.push(ye(t, s, "dashed", o.length, T, O, S.className, i)), o.push(ye(t, s, "dashed", o.length, D, R, S.className, i));
      });
    });
  }), o;
}
function q0(t, r, e, n, i) {
  var a = [];
  return ["horizontal", "vertical"].forEach(function(o) {
    var s = r.filter(function(g) {
      return g.type === o;
    }).slice(0, 1), u = o === "vertical" ? 0 : 1, l = u ? 0 : 1, f = u ? Sr : Er, c = u ? Er : Sr, v = n[f.start], p = n[f.end], d = n[c.start], h = n[c.end];
    s.forEach(function(g) {
      var m = g.gap, y = g.gapRects, b = Math.max.apply(Math, N([d], P(y.map(function(x) {
        var S = x.rect;
        return S[c.start];
      })), !1)), E = Math.min.apply(Math, N([h], P(y.map(function(x) {
        var S = x.rect;
        return S[c.end];
      })), !1)), C = (b + E) / 2;
      b === E || C === (d + h) / 2 || y.forEach(function(x) {
        var S = x.rect, _ = x.className, T = [e[0], e[1]];
        if (S[f.end] < v)
          T[u] += S[f.end] - v;
        else if (p < S[f.start])
          T[u] += S[f.start] - v - m;
        else
          return;
        T[l] += C - d, a.push(ye(t, u ? "vertical" : "horizontal", "gap", a.length, m, T, _, i));
      });
    });
  }), a;
}
function ki(t) {
  var r = t.state, e = r.containerClientRect, n = r.hasFixed, i = e.overflow, a = e.scrollHeight, o = e.scrollWidth, s = e.clientHeight, u = e.clientWidth, l = e.clientLeft, f = e.clientTop, c = t.props, v = c.snapGap, p = v === void 0 ? !0 : v, d = c.verticalGuidelines, h = c.horizontalGuidelines, g = c.snapThreshold, m = g === void 0 ? 5 : g, y = c.snapGridWidth, b = y === void 0 ? 0 : y, E = c.snapGridHeight, C = E === void 0 ? 0 : E, x = c.maxSnapElementGuidelineDistance, S = x === void 0 ? 1 / 0 : x, _ = c.isDisplayGridGuidelines, T = Ht(qt(t.state)), D = T.top, O = T.left, R = T.bottom, w = T.right, I = { top: D, left: O, bottom: R, right: w, center: (O + w) / 2, middle: (D + R) / 2 }, k = Z0(t), F = N([], P(k), !1);
  p && F.push.apply(F, N([], P(U0(t, I, m)), !1));
  var L = M({}, r.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (F.push.apply(F, N([], P(K0(b, C, i ? o : u, i ? a : s, l, f, L, _)), !1)), n) {
    var A = e.left, $ = e.top;
    L.left += A, L.top += $, L.right += A, L.bottom += $;
  }
  return F.push.apply(F, N([], P(tl(h || !1, d || !1, i ? o : u, i ? a : s, l, f, L)), !1)), F = F.filter(function(j) {
    var G = j.element, q = j.elementRect, U = j.type;
    if (!G || !q)
      return !0;
    var W = q.rect;
    return Qu(I, W, U, S);
  }), F;
}
function U0(t, r, e) {
  var n = t.props, i = n.maxSnapElementGuidelineDistance, a = i === void 0 ? 1 / 0 : i, o = n.maxSnapElementGapDistance, s = o === void 0 ? 1 / 0 : o, u = t.state.elementRects, l = [];
  return [
    ["vertical", Er, Sr],
    ["horizontal", Sr, Er]
  ].forEach(function(f) {
    var c = P(f, 3), v = c[0], p = c[1], d = c[2], h = r[p.start], g = r[p.end], m = r[p.center], y = r[d.start], b = r[d.end];
    function E(S) {
      var _ = S.rect;
      return _[p.end] < h + e ? h - _[p.end] : g - e < _[p.start] ? _[p.start] - g : -1;
    }
    var C = u.filter(function(S) {
      var _ = S.rect;
      return _[d.start] > b || _[d.end] < y ? !1 : E(S) > 0;
    }).sort(function(S, _) {
      return E(S) - E(_);
    }), x = [];
    C.forEach(function(S) {
      C.forEach(function(_) {
        if (S !== _) {
          var T = S.rect, D = _.rect, O = T[d.start], R = T[d.end], w = D[d.start], I = D[d.end];
          O > I || w > R || x.push([S, _]);
        }
      });
    }), x.forEach(function(S) {
      var _ = P(S, 2), T = _[0], D = _[1], O = T.rect, R = D.rect, w = O[p.start], I = O[p.end], k = R[p.start], F = R[p.end], L = 0, A = 0, $ = !1, j = !1, G = !1;
      if (I <= h && g <= k) {
        if (j = !0, L = (k - I - (g - h)) / 2, A = I + L + (g - h) / 2, z(A - m) > e)
          return;
      } else if (I < k && F < h + e) {
        if ($ = !0, L = k - I, A = F + L, z(A - h) > e)
          return;
      } else if (I < k && g - e < w) {
        if (G = !0, L = k - I, A = w - L, z(A - g) > e)
          return;
      } else
        return;
      L && Qu(r, R, v, a) && (L > s || l.push({
        type: v,
        pos: v === "vertical" ? [A, 0] : [0, A],
        element: D.element,
        size: 0,
        className: D.className,
        isStart: $,
        isCenter: j,
        isEnd: G,
        gap: L,
        hide: !0,
        gapRects: [T, D],
        direction: "",
        elementDirection: ""
      }));
    });
  }), l;
}
function K0(t, r, e, n, i, a, o, s) {
  i === void 0 && (i = 0), a === void 0 && (a = 0);
  var u = [], l = o.left, f = o.top;
  if (r)
    for (var c = 0; c <= n; c += r)
      u.push({
        type: "horizontal",
        pos: [
          l,
          et(c - a + f, 0.1)
        ],
        className: Q("grid-guideline"),
        size: e,
        hide: !s,
        direction: ""
      });
  if (t)
    for (var c = 0; c <= e; c += t)
      u.push({
        type: "vertical",
        pos: [
          et(c - i + l, 0.1),
          f
        ],
        className: Q("grid-guideline"),
        size: n,
        hide: !s,
        direction: ""
      });
  return u;
}
function Qu(t, r, e, n) {
  return e === "horizontal" ? z(t.right - r.left) <= n || z(t.left - r.right) <= n || t.left <= r.right && r.left <= t.right : e === "vertical" ? z(t.bottom - r.top) <= n || z(t.top - r.bottom) <= n || t.top <= r.bottom && r.top <= t.bottom : !0;
}
function Z0(t) {
  var r = t.state, e = t.props.elementGuidelines, n = e === void 0 ? [] : e;
  if (!n.length)
    return r.elementRects = [], [];
  var i = (r.elementRects || []).filter(function(v) {
    return !v.refresh;
  }), a = n.map(function(v) {
    return Jt(v) && "element" in v ? M(M({}, v), { element: er(v.element, !0) }) : {
      element: er(v, !0)
    };
  }).filter(function(v) {
    return v.element;
  }), o = ug(i.map(function(v) {
    return v.element;
  }), a.map(function(v) {
    return v.element;
  })), s = o.maintained, u = o.added, l = [];
  s.forEach(function(v) {
    var p = P(v, 2), d = p[0], h = p[1];
    l[h] = i[d];
  }), J0(t, u.map(function(v) {
    return a[v];
  })).map(function(v, p) {
    l[u[p]] = v;
  }), r.elementRects = l;
  var f = xa(t.props.elementSnapDirections), c = [];
  return l.forEach(function(v) {
    var p = v.element, d = v.top, h = d === void 0 ? f.top : d, g = v.left, m = g === void 0 ? f.left : g, y = v.right, b = y === void 0 ? f.right : y, E = v.bottom, C = E === void 0 ? f.bottom : E, x = v.center, S = x === void 0 ? f.center : x, _ = v.middle, T = _ === void 0 ? f.middle : _, D = v.className, O = v.rect, R = ba({
      top: h,
      right: b,
      left: m,
      bottom: C,
      center: S,
      middle: T
    }, O), w = R.horizontal, I = R.vertical, k = R.horizontalNames, F = R.verticalNames, L = O.top, A = O.left, $ = O.right - A, j = O.bottom - L, G = [$, j];
    I.forEach(function(q, U) {
      c.push({
        type: "vertical",
        element: p,
        pos: [
          et(q, 0.1),
          L
        ],
        size: j,
        sizes: G,
        className: D,
        elementRect: v,
        elementDirection: Lo[F[U]] || F[U],
        direction: ""
      });
    }), w.forEach(function(q, U) {
      c.push({
        type: "horizontal",
        element: p,
        pos: [
          A,
          et(q, 0.1)
        ],
        size: $,
        sizes: G,
        className: D,
        elementRect: v,
        elementDirection: Lo[k[U]] || k[U],
        direction: ""
      });
    });
  }), c;
}
function qo(t, r) {
  return t ? t.map(function(e) {
    var n = Jt(e) ? e : { pos: e }, i = n.pos;
    return re(i) ? n : M(M({}, n), { pos: vt(i, r) });
  }) : [];
}
function tl(t, r, e, n, i, a, o) {
  i === void 0 && (i = 0), a === void 0 && (a = 0), o === void 0 && (o = { left: 0, top: 0, right: 0, bottom: 0 });
  var s = [], u = o.left, l = o.top, f = o.bottom, c = o.right, v = e + c - u, p = n + f - l;
  return qo(t, p).forEach(function(d) {
    s.push({
      type: "horizontal",
      pos: [
        u,
        et(d.pos - a + l, 0.1)
      ],
      size: v,
      className: d.className,
      direction: ""
    });
  }), qo(r, v).forEach(function(d) {
    s.push({
      type: "vertical",
      pos: [
        et(d.pos - i + u, 0.1),
        l
      ],
      size: p,
      className: d.className,
      direction: ""
    });
  }), s;
}
function J0(t, r) {
  if (!r.length)
    return [];
  var e = t.props.groupable, n = t.state, i = n.containerClientRect, a = n.rootMatrix, o = n.is3d, s = n.offsetDelta, u = o ? 4 : 3, l = P(C0(a, i, u), 2), f = l[0], c = l[1], v = e ? 0 : s[0], p = e ? 0 : s[1];
  return r.map(function(d) {
    var h = d.element.getBoundingClientRect(), g = h.left - f - v, m = h.top - c - p, y = m + h.height, b = g + h.width, E = P(oe(a, [g, m], u), 2), C = E[0], x = E[1], S = P(oe(a, [b, y], u), 2), _ = S[0], T = S[1];
    return M(M({}, d), { rect: {
      left: C,
      right: _,
      top: x,
      bottom: T,
      center: (C + _) / 2,
      middle: (x + T) / 2
    } });
  });
}
function Qe(t) {
  var r = t.state, e = r.container, n = t.props.snapContainer || e;
  if (r.snapContainer === n && r.guidelines && r.guidelines.length)
    return !1;
  var i = r.containerClientRect, a = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  };
  if (e !== n) {
    var o = er(n, !0);
    if (o) {
      var s = Me(o), u = Qo(r, [
        s.left - i.left,
        s.top - i.top
      ]), l = Qo(r, [
        s.right - i.right,
        s.bottom - i.bottom
      ]);
      a.left = et(u[0], 1e-5), a.top = et(u[1], 1e-5), a.right = et(l[0], 1e-5), a.bottom = et(l[1], 1e-5);
    }
  }
  return r.snapContainer = n, r.snapOffset = a, r.guidelines = ki(t), r.enableSnap = !0, !0;
}
function rl(t, r, e, n, i, a) {
  var o = Yr(t, r, e, a ? 4 : 3), s = wt(o, n);
  return Ma(o, tt(i, s));
}
function Uo(t) {
  return t ? t / z(t) : 0;
}
function Q0(t, r, e, n, i, a) {
  var o = a.fixedDirection, s = P0(e, o, n), u = Sa(t, r, e, n), l = N(N([], P(F0(t, r, s, n, i, a)), !1), P(Uu(t, u, a)), !1), f = gn(l, 0), c = gn(l, 1);
  return {
    width: {
      isBound: f.isBound,
      offset: f.offset[0]
    },
    height: {
      isBound: c.isBound,
      offset: c.offset[1]
    }
  };
}
function tm(t, r, e, n, i, a, o, s, u) {
  var l = wt(r, o), f = Bn(t, s, {
    vertical: [l[0]],
    horizontal: [l[1]]
  }), c = f.horizontal.offset, v = f.vertical.offset;
  if (et(v, Ti) || et(c, Ti)) {
    var p = P(ar({
      datas: u,
      distX: -v,
      distY: -c
    }), 2), d = p[0], h = p[1], g = Math.min(i || 1 / 0, e + o[0] * d), m = Math.min(a || 1 / 0, n + o[1] * h);
    return [g - e, m - n];
  }
  return [0, 0];
}
function el(t, r, e, n, i, a, o, s) {
  for (var u = qt(t.state), l = t.props.keepRatio, f = 0, c = 0, v = 0; v < 2; ++v) {
    var p = r(f, c), d = Q0(t, p, i, l, o, s), h = d.width, g = d.height, m = h.isBound, y = g.isBound, b = h.offset, E = g.offset;
    if (v === 1 && (m || (b = 0), y || (E = 0)), v === 0 && o && !m && !y)
      return [0, 0];
    if (l) {
      var C = z(b) * (e ? 1 / e : 1), x = z(E) * (n ? 1 / n : 1), S = m && y ? C < x : y || !m && C < x;
      S ? b = e * E / n : E = n * b / e;
    }
    f += b, c += E;
  }
  if (!l && i[0] && i[1]) {
    var _ = $0(t, u, i, a, s), T = _.maxWidth, D = _.maxHeight, O = P(tm(t, r(f, c).map(function(I) {
      return I.map(function(k) {
        return et(k, Ti);
      });
    }), e + f, n + c, T, D, i, o, s), 2), b = O[0], E = O[1];
    f += b, c += E;
  }
  return [f, c];
}
function Ce(t) {
  return t < 0 && (t = t % 360 + 360), t %= 360, t;
}
function rm(t, r) {
  r = Ce(r);
  var e = Math.floor(t / 360), n = e * 360 + 360 - r, i = e * 360 + r;
  return z(t - n) < z(t - i) ? n : i;
}
function ni(t, r) {
  t = Ce(t), r = Ce(r);
  var e = Ce(t - r);
  return Math.min(e, 360 - e);
}
function em(t, r, e, n) {
  var i, a = t.props, o = (i = a[nl]) !== null && i !== void 0 ? i : 5, s = a[il];
  if (de(t, "rotatable")) {
    var u = r.pos1, l = r.pos2, f = r.pos3, c = r.pos4, v = r.origin, p = e * Math.PI / 180, d = [u, l, f, c].map(function(E) {
      return tt(E, v);
    }), h = d.map(function(E) {
      return Ne(E, p);
    }), g = N(N([], P(x0(t, d, h, v, e)), !1), P(k0(t, d, h, v, e)), !1);
    g.sort(function(E, C) {
      return z(E - e) - z(C - e);
    });
    var m = g.length > 0;
    if (m)
      return {
        isSnap: m,
        dist: m ? g[0] : e
      };
  }
  if (s != null && s.length && o) {
    var y = s.slice().sort(function(E, C) {
      return ni(E, n) - ni(C, n);
    }), b = y[0];
    if (ni(b, n) <= o)
      return {
        isSnap: !0,
        dist: e + rm(n, b) - n
      };
  }
  return {
    isSnap: !1,
    dist: e
  };
}
function nm(t, r, e, n, i, a, o) {
  if (!de(t, "resizable"))
    return [0, 0];
  var s = o.fixedDirection, u = o.nextAllMatrix, l = t.state, f = l.allMatrix, c = l.is3d;
  return el(t, function(v, p) {
    return rl(u || f, r + v, e + p, s, i, c);
  }, r, e, n, i, a, o);
}
function im(t, r, e, n, i) {
  if (!de(t, "scalable"))
    return [0, 0];
  var a = i.startOffsetWidth, o = i.startOffsetHeight, s = i.fixedPosition, u = i.fixedDirection, l = i.is3d, f = el(t, function(c, v) {
    return rl(i0(i, lt(r, [c / a, v / o])), a, o, u, s, l);
  }, a, o, e, s, n, i);
  return [f[0] / a, f[1] / o];
}
function am(t, r) {
  r.absolutePoses = qt(t.state);
}
function Ko(t) {
  var r = [];
  return t.forEach(function(e) {
    e.guidelineInfos.forEach(function(n) {
      var i = n.guideline;
      $t(r, function(a) {
        return a.guideline === i;
      }) || (i.direction = "", r.push({ guideline: i, posInfo: e }));
    });
  }), r.map(function(e) {
    var n = e.guideline, i = e.posInfo;
    return M(M({}, n), { direction: i.direction });
  });
}
function Zo(t, r, e, n, i, a) {
  var o = ya(kn(t, a), r, e), s = o.vertical, u = o.horizontal, l = qr();
  s.forEach(function(d) {
    d.isBound && (d.direction === "start" && (l.left = !0), d.direction === "end" && (l.right = !0), n.push({
      type: "bounds",
      pos: d.pos
    }));
  }), u.forEach(function(d) {
    d.isBound && (d.direction === "start" && (l.top = !0), d.direction === "end" && (l.bottom = !0), i.push({
      type: "bounds",
      pos: d.pos
    }));
  });
  var f = A0(t), c = f.boundMap, v = f.vertical, p = f.horizontal;
  return v.forEach(function(d) {
    fr(n, function(h) {
      var g = h.type, m = h.pos;
      return g === "bounds" && m === d;
    }) >= 0 || n.push({
      type: "bounds",
      pos: d
    });
  }), p.forEach(function(d) {
    fr(i, function(h) {
      var g = h.type, m = h.pos;
      return g === "bounds" && m === d;
    }) >= 0 || i.push({
      type: "bounds",
      pos: d
    });
  }), {
    boundMap: l,
    innerBoundMap: c
  };
}
var om = Da("", ["resizable", "scalable"]), nl = "snapRotationThreshold", il = "snapRotationDegrees", sm = {
  name: "snappable",
  dragRelation: "strong",
  props: [
    "snappable",
    "snapContainer",
    "snapDirections",
    "elementSnapDirections",
    "snapGap",
    "snapGridWidth",
    "snapGridHeight",
    "isDisplaySnapDigit",
    "isDisplayInnerSnapDigit",
    "isDisplayGridGuidelines",
    "snapDigit",
    "snapThreshold",
    "snapRenderThreshold",
    nl,
    il,
    "horizontalGuidelines",
    "verticalGuidelines",
    "elementGuidelines",
    "bounds",
    "innerBounds",
    "snapDistFormat",
    "maxSnapElementGuidelineDistance",
    "maxSnapElementGapDistance"
  ],
  events: ["snap", "bound"],
  css: [
    `:host {
--bounds-color: #d66;
}
.guideline {
pointer-events: none;
z-index: 2;
}
.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}
.guideline-group {
position: absolute;
top: 0;
left: 0;
}
.guideline-group .size-value {
position: absolute;
color: #f55;
font-size: 12px;
font-size: calc(12px * var(--zoom));
font-weight: bold;
}
.guideline-group.horizontal .size-value {
transform-origin: 50% 100%;
transform: translateX(-50%);
left: 50%;
bottom: 5px;
bottom: calc(2px + 3px * var(--zoom));
}
.guideline-group.vertical .size-value {
transform-origin: 0% 50%;
top: 50%;
transform: translateY(-50%);
left: 5px;
left: calc(2px + 3px * var(--zoom));
}
.guideline.gap {
background: #f55;
}
.size-value.gap {
color: #f55;
}
`
  ],
  render: function(t, r) {
    var e = t.state, n = e.top, i = e.left, a = e.pos1, o = e.pos2, s = e.pos3, u = e.pos4, l = e.snapRenderInfo, f = t.props.snapRenderThreshold, c = f === void 0 ? 1 : f;
    if (!l || !l.render || !de(t, ""))
      return Kr(t, "boundMap", qr(), function(W) {
        return JSON.stringify(W);
      }), Kr(t, "innerBoundMap", qr(), function(W) {
        return JSON.stringify(W);
      }), [];
    e.guidelines = ki(t);
    var v = Math.min(a[0], o[0], s[0], u[0]), p = Math.min(a[1], o[1], s[1], u[1]), d = l.externalPoses || [], h = qt(t.state), g = [], m = [], y = [], b = [], E = [], C = Ht(h), x = C.width, S = C.height, _ = C.top, T = C.left, D = C.bottom, O = C.right, R = { left: T, right: O, top: _, bottom: D, center: (T + O) / 2, middle: (_ + D) / 2 }, w = d.length > 0, I = w ? Ht(d) : {};
    if (!l.request) {
      if (l.direction && E.push(T0(t, h, l.direction, c)), l.snap) {
        var k = Ht(h);
        l.center && (k.middle = (k.top + k.bottom) / 2, k.center = (k.left + k.right) / 2), E.push(Fo(t, k, c));
      }
      w && (l.center && (I.middle = (I.top + I.bottom) / 2, I.center = (I.left + I.right) / 2), E.push(Fo(t, I, c))), E.forEach(function(W) {
        var X = W.vertical.posInfos, Y = W.horizontal.posInfos;
        g.push.apply(g, N([], P(X.filter(function(V) {
          var J = V.guidelineInfos;
          return J.some(function(nt) {
            var rt = nt.guideline;
            return !rt.hide;
          });
        }).map(function(V) {
          return {
            type: "snap",
            pos: V.pos
          };
        })), !1)), m.push.apply(m, N([], P(Y.filter(function(V) {
          var J = V.guidelineInfos;
          return J.some(function(nt) {
            var rt = nt.guideline;
            return !rt.hide;
          });
        }).map(function(V) {
          return {
            type: "snap",
            pos: V.pos
          };
        })), !1)), y.push.apply(y, N([], P(Ko(X)), !1)), b.push.apply(b, N([], P(Ko(Y)), !1));
      });
    }
    var F = Zo(t, [T, O], [_, D], g, m), L = F.boundMap, A = F.innerBoundMap;
    w && Zo(t, [I.left, I.right], [I.top, I.bottom], g, m, l.externalBounds);
    var $ = N(N([], P(y), !1), P(b), !1), j = $.filter(function(W) {
      return W.element && !W.gapRects;
    }), G = $.filter(function(W) {
      return W.gapRects;
    }).sort(function(W, X) {
      return W.gap - X.gap;
    });
    H(t, "onSnap", {
      guidelines: $.filter(function(W) {
        var X = W.element;
        return !X;
      }),
      elements: j,
      gaps: G
    }, !0);
    var q = Kr(t, "boundMap", L, function(W) {
      return JSON.stringify(W);
    }, qr()), U = Kr(t, "innerBoundMap", A, function(W) {
      return JSON.stringify(W);
    }, qr());
    return (L === q || A === U) && H(t, "onBound", {
      bounds: L,
      innerBounds: A
    }, !0), N(N(N(N(N(N([], P(V0(t, j, [v, p], R, r)), !1), P(q0(t, G, [v, p], R, r)), !1), P(Vo(t, "horizontal", b, [i, n], R, r)), !1), P(Vo(t, "vertical", y, [i, n], R, r)), !1), P(Ho(t, "horizontal", m, v, n, x, 0, r)), !1), P(Ho(t, "vertical", g, p, i, S, 1, r)), !1);
  },
  dragStart: function(t, r) {
    t.state.snapRenderInfo = {
      request: r.isRequest,
      snap: !0,
      center: !0
    }, Qe(t);
  },
  drag: function(t) {
    var r = t.state;
    Qe(t) || (r.guidelines = ki(t)), r.snapRenderInfo && (r.snapRenderInfo.render = !0);
  },
  pinchStart: function(t) {
    this.unset(t);
  },
  dragEnd: function(t) {
    this.unset(t);
  },
  dragControlCondition: function(t, r) {
    if (om(t, r) || Ii(t, r))
      return !0;
    if (!r.isRequest && r.inputEvent)
      return Dt(r.inputEvent.target, Q("snap-control"));
  },
  dragControlStart: function(t) {
    t.state.snapRenderInfo = null, Qe(t);
  },
  dragControl: function(t) {
    this.drag(t);
  },
  dragControlEnd: function(t) {
    this.unset(t);
  },
  dragGroupStart: function(t, r) {
    this.dragStart(t, r);
  },
  dragGroup: function(t) {
    this.drag(t);
  },
  dragGroupEnd: function(t) {
    this.unset(t);
  },
  dragGroupControlStart: function(t) {
    t.state.snapRenderInfo = null, Qe(t);
  },
  dragGroupControl: function(t) {
    this.drag(t);
  },
  dragGroupControlEnd: function(t) {
    this.unset(t);
  },
  unset: function(t) {
    var r = t.state;
    r.enableSnap = !1, r.guidelines = [], r.snapRenderInfo = null, r.elementRects = [];
  }
};
function um(t, r) {
  return [
    t[0] * r[0],
    t[1] * r[1]
  ];
}
function Q() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return th.apply(void 0, N([da], P(t), !1));
}
function al(t) {
  t();
}
function lm(t) {
  return !t || t === "none" ? [1, 0, 0, 1, 0, 0] : Jt(t) ? t : Oe(t);
}
function _e(t, r, e) {
  return vn(r, Ar(e, r), t, Ar(e.map(function(n) {
    return -n;
  }), r));
}
function fm(t, r, e) {
  if (r === "%") {
    var n = _a(t.ownerSVGElement);
    return n[e ? "width" : "height"] / 100;
  }
  return 1;
}
function cm(t) {
  var r = vm(Ta(t, ":before"));
  return r.map(function(e, n) {
    var i = ze(e), a = i.value, o = i.unit;
    return a * fm(t, o, n === 0);
  });
}
function yn(t) {
  return t ? t.split(" ") : ["0", "0"];
}
function vm(t) {
  return yn(t.transformOrigin);
}
function ol(t) {
  var r = jt(t), e = r("transform");
  if (e && e !== "none")
    return e;
  if ("transform" in t) {
    var n = t.transform, i = n.baseVal;
    if (!i)
      return "";
    var a = i.length;
    if (!a)
      return "";
    for (var o = [], s = function(l) {
      var f = i[l].matrix;
      o.push("matrix(".concat(["a", "b", "c", "d", "e", "f"].map(function(c) {
        return f[c];
      }).join(", "), ")"));
    }, u = 0; u < a; ++u)
      s(u);
    return o.join(" ");
  }
  return "";
}
function ke(t, r, e, n, i) {
  var a, o, s = na(t) || _r(t), u = !1, l, f;
  if (!t || e)
    l = t;
  else {
    var c = (a = t == null ? void 0 : t.assignedSlot) === null || a === void 0 ? void 0 : a.parentElement, v = t.parentElement;
    c ? (u = !0, f = v, l = c) : l = v;
  }
  for (var p = !1, d = t === r || l === r, h = "relative", g = 1, m = parseFloat(i == null ? void 0 : i("zoom")) || 1, y = i == null ? void 0 : i("position"); l && l !== s; ) {
    r === l && (d = !0);
    var b = jt(l), E = l.tagName.toLowerCase(), C = ol(l), x = b("willChange"), S = parseFloat(b("zoom")) || 1;
    if (h = b("position"), n && S !== 1) {
      g = S;
      break;
    }
    if (
      // offsetParent is the parentElement if the target's zoom is not 1 and not absolute.
      !e && n && m !== 1 && y && y !== "absolute" || E === "svg" || h !== "static" || C && C !== "none" || x === "transform"
    )
      break;
    var _ = (o = t == null ? void 0 : t.assignedSlot) === null || o === void 0 ? void 0 : o.parentNode, T = l.parentNode;
    _ && (u = !0, f = T);
    var D = T;
    if (D && D.nodeType === 11) {
      l = D.host, p = !0, h = jt(l)("position");
      break;
    }
    l = D, h = "relative";
  }
  return {
    offsetZoom: g,
    hasSlot: u,
    parentSlotElement: f,
    isCustomElement: p,
    isStatic: h === "static",
    isEnd: d || !l || l === s,
    offsetParent: l || s
  };
}
function pm(t, r) {
  var e, n = t.tagName.toLowerCase(), i = t.offsetLeft, a = t.offsetTop, o = jt(t), s = Mn(i), u = !s, l, f;
  return !u && n !== "svg" ? (l = Pu ? cm(t) : yn(o("transformOrigin")).map(function(c) {
    return parseFloat(c);
  }), f = l.slice(), u = !0, e = P(gm(t, l, t === r && r.tagName.toLowerCase() === "g"), 4), i = e[0], a = e[1], l[0] = e[2], l[1] = e[3]) : (l = yn(o("transformOrigin")).map(function(c) {
    return parseFloat(c);
  }), f = l.slice()), {
    tagName: n,
    isSVG: s,
    hasOffset: u,
    offset: [i || 0, a || 0],
    origin: l,
    targetOrigin: f
  };
}
function sl(t, r) {
  var e = jt(t), n = jt(_r(t)), i = n("position");
  if (!r && (!i || i === "static"))
    return [0, 0];
  var a = parseInt(n("marginLeft"), 10), o = parseInt(n("marginTop"), 10);
  return e("position") === "absolute" && ((e("top") !== "auto" || e("bottom") !== "auto") && (o = 0), (e("left") !== "auto" || e("right") !== "auto") && (a = 0)), [a, o];
}
function Ai(t) {
  t.forEach(function(r) {
    var e = r.matrix;
    e && (r.matrix = Qt(e, 3, 4));
  });
}
function dm(t) {
  for (var r = t.parentElement, e = !1, n = _r(t); r; ) {
    var i = Ta(r).transform;
    if (i && i !== "none") {
      e = !0;
      break;
    }
    if (r === n)
      break;
    r = r.parentElement;
  }
  return {
    fixedContainer: r || n,
    hasTransform: e
  };
}
function zn(t, r) {
  return r === void 0 && (r = t.length > 9), "".concat(r ? "matrix3d" : "matrix", "(").concat(xu(t, !r).join(","), ")");
}
function _a(t) {
  var r = t.clientWidth, e = t.clientHeight;
  if (!t)
    return { x: 0, y: 0, width: 0, height: 0, clientWidth: r, clientHeight: e };
  var n = t.viewBox, i = n && n.baseVal || { x: 0, y: 0, width: 0, height: 0 };
  return {
    x: i.x,
    y: i.y,
    width: i.width || r,
    height: i.height || e,
    clientWidth: r,
    clientHeight: e
  };
}
function hm(t, r) {
  var e, n = _a(t), i = n.width, a = n.height, o = n.clientWidth, s = n.clientHeight, u = o / i, l = s / a, f = t.preserveAspectRatio.baseVal, c = f.align, v = f.meetOrSlice, p = [0, 0], d = [u, l], h = [0, 0];
  if (c !== 1) {
    var g = (c - 2) % 3, m = Math.floor((c - 2) / 3);
    p[0] = i * g / 2, p[1] = a * m / 2;
    var y = v === 2 ? Math.max(l, u) : Math.min(u, l);
    d[0] = y, d[1] = y, h[0] = (o - i) / 2 * g, h[1] = (s - a) / 2 * m;
  }
  var b = fa(d, r);
  return e = P(h, 2), b[r * (r - 1)] = e[0], b[r * (r - 1) + 1] = e[1], _e(b, r, p);
}
function gm(t, r, e) {
  if (!t.getBBox || !e && t.tagName.toLowerCase() === "g")
    return [0, 0, 0, 0];
  var n = jt(t), i = n("transform-box") === "fill-box", a = t.getBBox(), o = _a(t.ownerSVGElement), s = a.x - o.x, u = a.y - o.y, l = i ? r[0] : r[0] - s, f = i ? r[1] : r[1] - u;
  return [s, u, l, f];
}
function bt(t, r, e) {
  return kt(t, kr(r, e), e);
}
function Yr(t, r, e, n) {
  return [[0, 0], [r, 0], [0, e], [r, e]].map(function(i) {
    return bt(t, i, n);
  });
}
function Ht(t) {
  var r = t.map(function(l) {
    return l[0];
  }), e = t.map(function(l) {
    return l[1];
  }), n = Math.min.apply(Math, N([], P(r), !1)), i = Math.min.apply(Math, N([], P(e), !1)), a = Math.max.apply(Math, N([], P(r), !1)), o = Math.max.apply(Math, N([], P(e), !1)), s = a - n, u = o - i;
  return {
    left: n,
    top: i,
    right: a,
    bottom: o,
    width: s,
    height: u
  };
}
function Jo(t, r, e, n) {
  var i = Yr(t, r, e, n);
  return Ht(i);
}
function mm(t, r, e, n, i) {
  var a, o = t.target, s = t.origin, u = r.matrix, l = ll(o), f = l.offsetWidth, c = l.offsetHeight, v = e.getBoundingClientRect(), p = [0, 0];
  e === _r(e) && (p = sl(o, !0));
  for (var d = o.getBoundingClientRect(), h = d.left - v.left + e.scrollLeft - (e.clientLeft || 0) + p[0], g = d.top - v.top + e.scrollTop - (e.clientTop || 0) + p[1], m = d.width, y = d.height, b = vn(n, i, u), E = Jo(b, f, c, n), C = E.left, x = E.top, S = E.width, _ = E.height, T = bt(b, s, n), D = tt(T, [C, x]), O = [
    h + D[0] * m / S,
    g + D[1] * y / _
  ], R = [0, 0], w = 0; ++w < 10; ) {
    var I = ir(i, n);
    a = P(tt(bt(I, O, n), bt(I, T, n)), 2), R[0] = a[0], R[1] = a[1];
    var k = vn(n, i, Ar(R, n), u), F = Jo(k, f, c, n), L = F.left, A = F.top, $ = L - h, j = A - g;
    if (z($) < 2 && z(j) < 2)
      break;
    O[0] -= $, O[1] -= j;
  }
  return R.map(function(G) {
    return Math.round(G);
  });
}
function ym(t, r, e) {
  var n = t.length === 16, i = n ? 4 : 3, a = r.map(function(u) {
    return bt(t, u, i);
  }), o = e.left, s = e.top;
  return a.map(function(u) {
    return [u[0] + o, u[1] + s];
  });
}
function Vt(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function ul(t, r) {
  return Vt([
    r[0] - t[0],
    r[1] - t[1]
  ]);
}
function xe(t, r, e, n) {
  e === void 0 && (e = 1), n === void 0 && (n = Et(t, r));
  var i = ul(t, r);
  return {
    transform: "translateY(-50%) translate(".concat(t[0], "px, ").concat(t[1], "px) rotate(").concat(n, "rad) scaleY(").concat(e, ")"),
    width: "".concat(i, "px")
  };
}
function xn(t, r) {
  for (var e = [], n = 2; n < arguments.length; n++)
    e[n - 2] = arguments[n];
  var i = e.length, a = e.reduce(function(s, u) {
    return s + u[0];
  }, 0) / i, o = e.reduce(function(s, u) {
    return s + u[1];
  }, 0) / i;
  return {
    transform: "translateZ(0px) translate(".concat(a, "px, ").concat(o, "px) rotate(").concat(t, "rad) scale(").concat(r, ")")
  };
}
function zr(t, r) {
  var e = t[r];
  return Jt(e) ? M(M({}, t), e) : t;
}
function ll(t) {
  var r = t && !Mn(t.offsetWidth), e = 0, n = 0, i = 0, a = 0, o = 0, s = 0, u = 0, l = 0, f = 0, c = 0, v = 0, p = 0, d = 1 / 0, h = 1 / 0, g = 1 / 0, m = 1 / 0, y = 0, b = 0, E = !1;
  if (t)
    if (!r && t.tagName.toLowerCase() !== "svg") {
      var C = t.getBBox();
      E = !0, e = C.width, n = C.height, o = e, s = n, u = e, l = n, i = e, a = n;
    } else {
      var x = jt(t), S = t.style, _ = x("boxSizing") === "border-box", T = parseFloat(x("borderLeftWidth")) || 0, D = parseFloat(x("borderRightWidth")) || 0, O = parseFloat(x("borderTopWidth")) || 0, R = parseFloat(x("borderBottomWidth")) || 0, w = parseFloat(x("paddingLeft")) || 0, I = parseFloat(x("paddingRight")) || 0, k = parseFloat(x("paddingTop")) || 0, F = parseFloat(x("paddingBottom")) || 0, L = w + I, A = k + F, $ = T + D, j = O + R, G = L + $, q = A + j, U = x("position"), W = 0, X = 0;
      if ("clientLeft" in t) {
        var Y = null;
        if (U === "absolute") {
          var V = ke(t, _r(t));
          Y = V.offsetParent;
        } else
          Y = t.parentElement;
        if (Y) {
          var J = jt(Y);
          W = parseFloat(J("width")), X = parseFloat(J("height"));
        }
      }
      f = Math.max(L, vt(x("minWidth"), W) || 0), c = Math.max(A, vt(x("minHeight"), X) || 0), d = vt(x("maxWidth"), W), h = vt(x("maxHeight"), X), isNaN(d) && (d = 1 / 0), isNaN(h) && (h = 1 / 0), y = vt(S.width, 0) || 0, b = vt(S.height, 0) || 0, o = parseFloat(x("width")) || 0, s = parseFloat(x("height")) || 0, u = z(o - y) < 1 ? vi(f, y || o, d) : o, l = z(s - b) < 1 ? vi(c, b || s, h) : s, e = u, n = l, i = u, a = l, _ ? (g = d, m = h, v = f, p = c, u = e - G, l = n - q) : (g = d + G, m = h + q, v = f + G, p = c + q, e = u + G, n = l + q), i = u + L, a = l + A;
    }
  return {
    svg: E,
    offsetWidth: e,
    offsetHeight: n,
    clientWidth: i,
    clientHeight: a,
    contentWidth: u,
    contentHeight: l,
    inlineCSSWidth: y,
    inlineCSSHeight: b,
    cssWidth: o,
    cssHeight: s,
    minWidth: f,
    minHeight: c,
    maxWidth: d,
    maxHeight: h,
    minOffsetWidth: v,
    minOffsetHeight: p,
    maxOffsetWidth: g,
    maxOffsetHeight: m
  };
}
function fl(t, r) {
  return Et(r > 0 ? t[0] : t[1], r > 0 ? t[1] : t[0]);
}
function tn() {
  return {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    clientLeft: 0,
    clientTop: 0,
    clientWidth: 0,
    clientHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0
  };
}
function cl(t, r) {
  var e = t === _r(t) || t === na(t), n = {
    clientLeft: t.clientLeft,
    clientTop: t.clientTop,
    clientWidth: t.clientWidth,
    clientHeight: t.clientHeight,
    scrollWidth: t.scrollWidth,
    scrollHeight: t.scrollHeight,
    overflow: !1
  };
  return e && (n.clientHeight = Math.max(r.height, n.clientHeight), n.scrollHeight = Math.max(r.height, n.scrollHeight)), n.overflow = jt(t)("overflow") !== "visible", M(M({}, r), n);
}
function ii(t, r, e, n) {
  var i = t.left, a = t.right, o = t.top, s = t.bottom, u = r.top, l = r.left, f = {
    left: l + i,
    top: u + o,
    right: l + a,
    bottom: u + s,
    width: a - i,
    height: s - o
  };
  return e && n ? cl(e, f) : f;
}
function Me(t, r) {
  var e = 0, n = 0, i = 0, a = 0;
  if (t) {
    var o = t.getBoundingClientRect();
    e = o.left, n = o.top, i = o.width, a = o.height;
  }
  var s = {
    left: e,
    top: n,
    width: i,
    height: a,
    right: e + i,
    bottom: n + a
  };
  return t && r ? cl(t, s) : s;
}
function xm(t) {
  var r = t.props, e = r.groupable, n = r.svgOrigin, i = t.getState(), a = i.offsetWidth, o = i.offsetHeight, s = i.svg, u = i.transformOrigin;
  return !e && s && n ? Ra(n, a, o) : u;
}
function vl(t, r, e, n) {
  var i;
  if (t)
    i = t;
  else if (r)
    i = [0, 0];
  else {
    var a = e.target;
    i = pl(a, n);
  }
  return i;
}
function pl(t, r) {
  if (t) {
    var e = t.getAttribute("data-rotation") || "", n = t.getAttribute("data-direction");
    if (r.deg = e, !!n) {
      var i = [0, 0];
      return n.indexOf("w") > -1 && (i[0] = -1), n.indexOf("e") > -1 && (i[0] = 1), n.indexOf("n") > -1 && (i[1] = -1), n.indexOf("s") > -1 && (i[1] = 1), i;
    }
  }
}
function Ma(t, r) {
  return [
    lt(r, t[0]),
    lt(r, t[1]),
    lt(r, t[2]),
    lt(r, t[3])
  ];
}
function qt(t) {
  var r = t.left, e = t.top, n = t.pos1, i = t.pos2, a = t.pos3, o = t.pos4;
  return Ma([n, i, a, o], [r, e]);
}
function Bi(t, r) {
  t[r ? "controlAbles" : "targetAbles"].forEach(function(e) {
    e.unset && e.unset(t);
  });
}
function Ur(t, r) {
  var e = r ? "controlGesto" : "targetGesto", n = t[e];
  (n == null ? void 0 : n.isIdle()) === !1 && Bi(t, r), n == null || n.unset(), t[e] = null;
}
function Gt(t, r) {
  if (r) {
    var e = pe(r);
    e.nextStyle = M(M({}, e.nextStyle), t);
  }
  return {
    style: t,
    cssText: cr(t).map(function(n) {
      return "".concat(un(n, "-"), ": ").concat(t[n], ";");
    }).join("")
  };
}
function dl(t, r, e) {
  var n = r.afterTransform || r.transform;
  return M(M({}, Gt(M(M(M({}, t.style), r.style), { transform: n }), e)), { afterTransform: n, transform: t.transform });
}
function it(t, r, e, n) {
  var i = r.datas;
  i.datas || (i.datas = {});
  var a = M(M({}, e), { target: t.state.target, clientX: r.clientX, clientY: r.clientY, inputEvent: r.inputEvent, currentTarget: t, moveable: t, datas: i.datas, isRequest: r.isRequest, isRequestChild: r.isRequestChild, isFirstDrag: !!r.isFirstDrag, isTrusted: r.isTrusted !== !1, stopAble: function() {
    i.isEventStart = !1;
  }, stopDrag: function() {
    var o;
    (o = r.stop) === null || o === void 0 || o.call(r);
  } });
  return i.isStartEvent ? n || (i.lastEvent = a) : i.isStartEvent = !0, a;
}
function Wt(t, r, e) {
  var n = r.datas, i = "isDrag" in e ? e.isDrag : r.isDrag;
  return n.datas || (n.datas = {}), M(M({ isDrag: i }, e), { moveable: t, target: t.state.target, clientX: r.clientX, clientY: r.clientY, inputEvent: r.inputEvent, currentTarget: t, lastEvent: n.lastEvent, isDouble: r.isDouble, datas: n.datas, isFirstDrag: !!r.isFirstDrag });
}
function Gn(t, r, e) {
  t._emitter.on(r, e);
}
function H(t, r, e, n, i) {
  return t.triggerEvent(r, e, n, i);
}
function Ta(t, r) {
  return xr(t).getComputedStyle(t, r);
}
function rn(t, r, e) {
  var n = {}, i = {};
  return t.filter(function(a) {
    var o = a.name;
    if (n[o] || !r.some(function(s) {
      return a[s];
    }))
      return !1;
    if (!e && a.ableGroup) {
      if (i[a.ableGroup])
        return !1;
      i[a.ableGroup] = !0;
    }
    return n[o] = !0, !0;
  });
}
function zi(t, r) {
  return t === r || t == null && r == null;
}
function bm() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  for (var e = t.length - 1, n = 0; n < e; ++n) {
    var i = t[n];
    if (!Mn(i))
      return i;
  }
  return t[e];
}
function hl(t, r) {
  var e = [], n = [];
  return t.forEach(function(i, a) {
    var o = r(i, a, t), s = n.indexOf(o), u = e[s] || [];
    s === -1 && (n.push(o), e.push(u)), u.push(i);
  }), e;
}
function Em(t, r) {
  var e = [], n = {};
  return t.forEach(function(i, a) {
    var o = r(i, a, t), s = n[o];
    s || (s = [], n[o] = s, e.push(s)), s.push(i);
  }), e;
}
function gl(t) {
  return t.reduce(function(r, e) {
    return r.concat(e);
  }, []);
}
function ae() {
  for (var t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  return t.sort(function(e, n) {
    return z(n) - z(e);
  }), t[0];
}
function oe(t, r, e) {
  return kt(ir(t, e), kr(r, e), e);
}
function ml(t, r) {
  var e, n = t.is3d, i = t.rootMatrix, a = n ? 4 : 3;
  return e = P(oe(i, [r.distX, r.distY], a), 2), r.distX = e[0], r.distY = e[1], r;
}
function en(t, r, e, n) {
  if (!e[0] && !e[1])
    return r;
  var i = bt(t, [Uo(e[0]), 0], n), a = bt(t, [0, Uo(e[1])], n), o = bt(t, [
    e[0] / Vt(i),
    e[1] / Vt(a)
  ], n);
  return lt(r, o);
}
function Ut(t, r, e) {
  return e ? "".concat(t / r * 100, "%") : "".concat(t, "px");
}
function bn(t) {
  return z(t) <= Lt ? 0 : t;
}
function Pa(t) {
  return function(r) {
    if (!r.isDragging(t))
      return "";
    var e = c0(r, t), n = e.deg;
    return n ? Q("view-control-rotation".concat(n)) : "";
  };
}
function Da(t, r) {
  return r === void 0 && (r = [t]), function(e, n) {
    if (n.isRequest)
      return r.some(function(a) {
        return n.requestAble === a;
      }) ? n.parentDirection : !1;
    var i = n.inputEvent.target;
    return Dt(i, Q("direction")) && (!t || Dt(i, Q(t)));
  };
}
function Sm(t, r, e) {
  var n, i = ee(t, {
    "x%": function(C) {
      return C / 100 * r.offsetWidth;
    },
    "y%": function(C) {
      return C / 100 * r.offsetHeight;
    }
  }), a = t.slice(0, e < 0 ? void 0 : e), o = t.slice(0, e < 0 ? void 0 : e + 1), s = t[e] || "", u = e < 0 ? [] : t.slice(e), l = e < 0 ? [] : t.slice(e + 1), f = i.slice(0, e < 0 ? void 0 : e), c = i.slice(0, e < 0 ? void 0 : e + 1), v = (n = i[e]) !== null && n !== void 0 ? n : ee([""])[0], p = e < 0 ? [] : i.slice(e), d = e < 0 ? [] : i.slice(e + 1), h = v ? [v] : [], g = Xr(f), m = Xr(c), y = Xr(p), b = Xr(d), E = pt(g, y, 4);
  return {
    transforms: t,
    beforeFunctionMatrix: g,
    beforeFunctionMatrix2: m,
    targetFunctionMatrix: Xr(h),
    afterFunctionMatrix: y,
    afterFunctionMatrix2: b,
    allFunctionMatrix: E,
    beforeFunctions: f,
    beforeFunctions2: c,
    targetFunction: h[0],
    afterFunctions: p,
    afterFunctions2: d,
    beforeFunctionTexts: a,
    beforeFunctionTexts2: o,
    targetFunctionText: s,
    afterFunctionTexts: u,
    afterFunctionTexts2: l
  };
}
function Cm(t) {
  return !t || !Jt(t) || fe(t) ? !1 : Mt(t) || "length" in t;
}
function er(t, r) {
  return t ? fe(t) ? t : Nt(t) ? r ? document.querySelector(t) : t : ta(t) ? t() : Js(t) ? t : "current" in t ? t.current : t : null;
}
function wa(t, r) {
  if (!t)
    return [];
  var e = Cm(t) ? [].slice.call(t) : [t];
  return e.reduce(function(n, i) {
    return Nt(i) && r ? N(N([], P(n), !1), P([].slice.call(document.querySelectorAll(i))), !1) : (Mt(i) ? n.push(wa(i, r)) : n.push(er(i, r)), n);
  }, []);
}
function _m(t, r, e) {
  var n = Et(t, r) / Math.PI * 180;
  return n = e >= 0 ? n : 180 - n, n = n >= 0 ? n : 360 + n, n;
}
function Qo(t, r) {
  var e = t.rootMatrix, n = t.is3d, i = n ? 4 : 3, a = ir(e, i);
  return n || (a = Qt(a, 3, 4)), a[12] = 0, a[13] = 0, a[14] = 0, ag(a, r);
}
function yl(t, r, e, n, i) {
  var a = P(t, 2), o = a[0], s = a[1], u = 0, l = 0;
  if (i && o && s) {
    var f = Et([0, 0], r), c = Et([0, 0], n), v = Vt(r), p = Math.cos(f - c) * v;
    if (!n[0])
      l = p, u = l * e;
    else if (!n[1])
      u = p, l = u / e;
    else {
      var d = n[0] * o, h = n[1] * s, g = Math.atan2(d + r[0], h + r[1]), m = Math.atan2(d, h);
      g < 0 && (g += Math.PI * 2), m < 0 && (m += Math.PI * 2);
      var y = 0;
      z(g - m) < Math.PI / 2 || z(g - m) > Math.PI / 2 * 3 || (m += Math.PI), y = g - m, y > Math.PI * 2 ? y -= Math.PI * 2 : y > Math.PI ? y = 2 * Math.PI - y : y < -Math.PI && (y = -2 * Math.PI - y);
      var b = Vt([d + r[0], h + r[1]]) * Math.cos(y);
      u = b * Math.sin(m) - d, l = b * Math.cos(m) - h, n[0] < 0 && (u *= -1), n[1] < 0 && (l *= -1);
    }
  } else
    u = n[0] * r[0], l = n[1] * r[1];
  return [u, l];
}
function xl(t, r, e, n) {
  var i, a = e.ratio, o = e.startOffsetWidth, s = e.startOffsetHeight, u = 0, l = 0, f = n.distX, c = n.distY, v = n.pinchScale, p = n.parentDistance, d = n.parentDist, h = n.parentScale, g = e.fixedDirection, m = [0, 1].map(function(S) {
    return z(t[S] - g[S]);
  }), y = [0, 1].map(function(S) {
    var _ = m[S];
    return _ !== 0 && (_ = 2 / _), _;
  });
  if (d)
    u = d[0], l = d[1], r && (u ? l || (l = u / a) : u = l * a);
  else if (re(v))
    u = (v - 1) * o, l = (v - 1) * s;
  else if (h)
    u = (h[0] - 1) * o, l = (h[1] - 1) * s;
  else if (p) {
    var b = o * m[0], E = s * m[1], C = Vt([b, E]);
    u = p / C * b * y[0], l = p / C * E * y[1];
  } else {
    var x = ar({ datas: e, distX: f, distY: c });
    x = y.map(function(S, _) {
      return x[_] * S;
    }), i = P(yl([o, s], x, a, t, r), 2), u = i[0], l = i[1];
  }
  return {
    // direction,
    // sizeDirection,
    distWidth: u,
    distHeight: l
  };
}
function Gi(t, r) {
  if (r) {
    if (t === "left")
      return { x: "0%", y: "50%" };
    if (t === "top")
      return { x: "50%", y: "50%" };
    if (t === "center")
      return { x: "50%", y: "50%" };
    if (t === "right")
      return { x: "100%", y: "50%" };
    if (t === "bottom")
      return { x: "50%", y: "100%" };
    var e = P(t.split(" "), 2), n = e[0], i = e[1], a = Gi(n || ""), o = Gi(i || ""), s = M(M({}, a), o), u = {
      x: "50%",
      y: "50%"
    };
    return s.x && (u.x = s.x), s.y && (u.y = s.y), s.value && (s.x && !s.y && (u.y = s.value), !s.x && s.y && (u.x = s.value)), u;
  }
  return t === "left" ? { x: "0%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "0%" } : t === "bottom" ? { y: "100%" } : t ? t === "center" ? { value: "50%" } : { value: t } : {};
}
function Ra(t, r, e) {
  var n = Gi(t, !0), i = n.x, a = n.y;
  return [
    vt(i, r) || 0,
    vt(a, e) || 0
  ];
}
function Mm(t, r, e) {
  var n = t.map(function(a) {
    return tt(a, r);
  }), i = n.map(function(a) {
    return Ne(a, e);
  });
  return {
    prev: n,
    next: i,
    result: i.map(function(a) {
      return lt(a, r);
    })
  };
}
function bl(t, r) {
  return t.length === r.length && t.every(function(e, n) {
    var i = r[n], a = Mt(e), o = Mt(i);
    return a && o ? bl(e, i) : !a && !o ? e === i : !1;
  });
}
function Kr(t, r, e, n, i) {
  var a = t._store, o = a[r];
  if (!(r in a))
    if (i != null)
      a[r] = i, o = i;
    else
      return a[r] = e, e;
  return o === e || n(o) === n(e) ? o : (a[r] = e, e);
}
function Xt(t) {
  return t >= 0 ? 1 : -1;
}
function z(t) {
  return Math.abs(t);
}
function ai(t, r) {
  return mh(t).map(function(e) {
    return r(e);
  });
}
function El(t) {
  return re(t) ? {
    top: t,
    left: t,
    right: t,
    bottom: t
  } : {
    left: t.left || 0,
    top: t.top || 0,
    right: t.right || 0,
    bottom: t.bottom || 0
  };
}
var Tm = ce("pinchable", {
  props: [
    "pinchable"
  ],
  events: [
    "pinchStart",
    "pinch",
    "pinchEnd",
    "pinchGroupStart",
    "pinchGroup",
    "pinchGroupEnd"
  ],
  dragStart: function() {
    return !0;
  },
  pinchStart: function(t, r) {
    var e = r.datas, n = r.targets, i = r.angle, a = r.originalDatas, o = t.props, s = o.pinchable, u = o.ables;
    if (!s)
      return !1;
    var l = "onPinch".concat(n ? "Group" : "", "Start"), f = "drag".concat(n ? "Group" : "", "ControlStart"), c = (s === !0 ? t.controlAbles : u.filter(function(h) {
      return s.indexOf(h.name) > -1;
    })).filter(function(h) {
      return h.canPinch && h[f];
    }), v = it(t, r, {});
    n && (v.targets = n);
    var p = H(t, l, v);
    e.isPinch = p !== !1, e.ables = c;
    var d = e.isPinch;
    return d ? (c.forEach(function(h) {
      if (a[h.name] = a[h.name] || {}, !!h[f]) {
        var g = M(M({}, r), { datas: a[h.name], parentRotate: i, isPinch: !0 });
        h[f](t, g);
      }
    }), t.state.snapRenderInfo = {
      request: r.isRequest,
      direction: [0, 0]
    }, d) : !1;
  },
  pinch: function(t, r) {
    var e = r.datas, n = r.scale, i = r.distance, a = r.originalDatas, o = r.inputEvent, s = r.targets, u = r.angle;
    if (e.isPinch) {
      var l = i * (1 - 1 / n), f = it(t, r, {});
      s && (f.targets = s);
      var c = "onPinch".concat(s ? "Group" : "");
      H(t, c, f);
      var v = e.ables, p = "drag".concat(s ? "Group" : "", "Control");
      return v.forEach(function(d) {
        d[p] && d[p](t, M(M({}, r), { datas: a[d.name], inputEvent: o, resolveMatrix: !0, pinchScale: n, parentDistance: l, parentRotate: u, isPinch: !0 }));
      }), f;
    }
  },
  pinchEnd: function(t, r) {
    var e = r.datas, n = r.isPinch, i = r.inputEvent, a = r.targets, o = r.originalDatas;
    if (e.isPinch) {
      var s = "onPinch".concat(a ? "Group" : "", "End"), u = Wt(t, r, { isDrag: n });
      a && (u.targets = a), H(t, s, u);
      var l = e.ables, f = "drag".concat(a ? "Group" : "", "ControlEnd");
      return l.forEach(function(c) {
        c[f] && c[f](t, M(M({}, r), { isDrag: n, datas: o[c.name], inputEvent: i, isPinch: !0 }));
      }), n;
    }
  },
  pinchGroupStart: function(t, r) {
    return this.pinchStart(t, M(M({}, r), { targets: t.props.targets }));
  },
  pinchGroup: function(t, r) {
    return this.pinch(t, M(M({}, r), { targets: t.props.targets }));
  },
  pinchGroupEnd: function(t, r) {
    return this.pinchEnd(t, M(M({}, r), { targets: t.props.targets }));
  }
}), ts = Da("scalable"), Pm = {
  name: "scalable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "scalable",
    "throttleScale",
    "renderDirections",
    "keepRatio",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "scaleStart",
    "beforeScale",
    "scale",
    "scaleEnd",
    "scaleGroupStart",
    "beforeScaleGroup",
    "scaleGroup",
    "scaleGroupEnd"
  ],
  render: ju("scalable"),
  dragControlCondition: ts,
  viewClassName: Pa("scalable"),
  dragControlStart: function(t, r) {
    var e = r.datas, n = r.isPinch, i = r.inputEvent, a = r.parentDirection, o = vl(a, n, i, e), s = t.state, u = s.width, l = s.height, f = s.targetTransform, c = s.target, v = s.pos1, p = s.pos2, d = s.pos4;
    if (!o || !c)
      return !1;
    n || jr(t, r), e.datas = {}, e.transform = f, e.prevDist = [1, 1], e.direction = o, e.startOffsetWidth = u, e.startOffsetHeight = l, e.startValue = [1, 1];
    var h = !o[0] && !o[1] || o[0] || !o[1];
    In(t, r, "scale"), e.isWidth = h;
    function g(x) {
      e.ratio = x && isFinite(x) ? x : 0;
    }
    e.startPositions = qt(t.state);
    function m(x) {
      var S = Ku(e.startPositions, x);
      e.fixedDirection = S.fixedDirection, e.fixedPosition = S.fixedPosition, e.fixedOffset = S.fixedOffset;
    }
    e.setFixedDirection = m, g(sr(v, p) / sr(p, d)), m([-o[0], -o[1]]);
    var y = function(x) {
      e.minScaleSize = x;
    }, b = function(x) {
      e.maxScaleSize = x;
    };
    y([-1 / 0, -1 / 0]), b([1 / 0, 1 / 0]);
    var E = it(t, r, M(M({ direction: o, set: function(x) {
      e.startValue = x;
    }, setRatio: g, setFixedDirection: m, setMinScaleSize: y, setMaxScaleSize: b }, On(t, r)), { dragStart: zt.dragStart(t, new ne().dragStart([0, 0], r)) })), C = H(t, "onScaleStart", E);
    return e.startFixedDirection = e.fixedDirection, C !== !1 && (e.isScale = !0, t.state.snapRenderInfo = {
      request: r.isRequest,
      direction: o
    }), e.isScale ? E : !1;
  },
  dragControl: function(t, r) {
    wn(t, r, "scale");
    var e = r.datas, n = r.parentKeepRatio, i = r.parentFlag, a = r.isPinch, o = r.dragClient, s = r.isRequest, u = r.useSnap, l = r.resolveMatrix, f = e.prevDist, c = e.direction, v = e.startOffsetWidth, p = e.startOffsetHeight, d = e.isScale, h = e.startValue, g = e.isWidth, m = e.ratio;
    if (!d)
      return !1;
    var y = t.props, b = y.throttleScale, E = y.parentMoveable, C = c;
    !c[0] && !c[1] && (C = [1, 1]);
    var x = m && (n != null ? n : y.keepRatio) || !1, S = t.state, _ = [
      h[0],
      h[1]
    ];
    function T() {
      var rt = xl(C, x, e, r), Z = rt.distWidth, K = rt.distHeight, ft = v ? (v + Z) / v : 1, at = p ? (p + K) / p : 1;
      h[0] || (_[0] = Z / v), h[1] || (_[1] = K / p);
      var ot = (C[0] || x ? ft : 1) * _[0], ut = (C[1] || x ? at : 1) * _[1];
      return ot === 0 && (ot = Xt(f[0]) * Ke), ut === 0 && (ut = Xt(f[1]) * Ke), [ot, ut];
    }
    var D = T();
    if (!a && t.props.groupable) {
      var O = S.snapRenderInfo || {}, R = O.direction;
      Mt(R) && (R[0] || R[1]) && (S.snapRenderInfo = { direction: c, request: r.isRequest });
    }
    H(t, "onBeforeScale", it(t, r, {
      scale: D,
      setFixedDirection: function(rt) {
        return e.setFixedDirection(rt), D = T(), D;
      },
      startFixedDirection: e.startFixedDirection,
      setScale: function(rt) {
        D = rt;
      }
    }, !0));
    var w = [
      D[0] / _[0],
      D[1] / _[1]
    ], I = o, k = [0, 0], F = !o && !i && a;
    if (F || l ? I = ma(t, e.targetAllTransform, [0, 0], [0, 0], e) : o || (I = e.fixedPosition), a || (k = im(t, w, c, !u && s, e)), x) {
      C[0] && C[1] && k[0] && k[1] && (Math.abs(k[0] * v) > Math.abs(k[1] * p) ? k[1] = 0 : k[0] = 0);
      var L = !k[0] && !k[1];
      if (L && (g ? w[0] = et(w[0] * _[0], b) / _[0] : w[1] = et(w[1] * _[1], b) / _[1]), C[0] && !C[1] || k[0] && !k[1] || L && g) {
        w[0] += k[0];
        var A = v * w[0] * _[0] / m;
        w[1] = A / p / _[1];
      } else if (!C[0] && C[1] || !k[0] && k[1] || L && !g) {
        w[1] += k[1];
        var $ = p * w[1] * _[1] * m;
        w[0] = $ / v / _[0];
      }
    } else
      w[0] += k[0], w[1] += k[1], k[0] || (w[0] = et(w[0] * _[0], b) / _[0]), k[1] || (w[1] = et(w[1] * _[1], b) / _[1]);
    w[0] === 0 && (w[0] = Xt(f[0]) * Ke), w[1] === 0 && (w[1] = Xt(f[1]) * Ke), D = um(w, [_[0], _[1]]);
    var j = [
      v,
      p
    ], G = [
      v * D[0],
      p * D[1]
    ];
    G = qs(G, e.minScaleSize, e.maxScaleSize, x ? m : !1), D = ai(2, function(rt) {
      return j[rt] ? G[rt] / j[rt] : G[rt];
    }), w = ai(2, function(rt) {
      return D[rt] / _[rt];
    });
    var q = ai(2, function(rt) {
      return f[rt] ? w[rt] / f[rt] : w[rt];
    }), U = "scale(".concat(w.join(", "), ")"), W = "scale(".concat(D.join(", "), ")"), X = Rn(e, W, U), Y = !h[0] || !h[1], V = a0(t, Y ? W : U, e.fixedDirection, I, e.fixedOffset, e, Y), J = F ? V : tt(V, e.prevInverseDist || [0, 0]);
    if (e.prevDist = w, e.prevInverseDist = V, D[0] === f[0] && D[1] === f[1] && J.every(function(rt) {
      return !rt;
    }) && !E && !F)
      return !1;
    var nt = it(t, r, M({ offsetWidth: v, offsetHeight: p, direction: c, scale: D, dist: w, delta: q, isPinch: !!a }, zu(t, X, J, a, r)));
    return H(t, "onScale", nt), nt;
  },
  dragControlEnd: function(t, r) {
    var e = r.datas;
    if (!e.isScale)
      return !1;
    e.isScale = !1;
    var n = Wt(t, r, {});
    return H(t, "onScaleEnd", n), n;
  },
  dragGroupControlCondition: ts,
  dragGroupControlStart: function(t, r) {
    var e = r.datas, n = this.dragControlStart(t, r);
    if (!n)
      return !1;
    var i = Zt(t, "resizable", r);
    e.moveableScale = t.scale;
    var a = ur(t, this, "dragControlStart", r, function(l, f) {
      return hn(t, l, e, f);
    }), o = function(l) {
      n.setFixedDirection(l), a.forEach(function(f, c) {
        f.setFixedDirection(l), hn(t, f.moveable, e, i[c]);
      });
    };
    e.setFixedDirection = o;
    var s = M(M({}, n), { targets: t.props.targets, events: a, setFixedDirection: o }), u = H(t, "onScaleGroupStart", s);
    return e.isScale = u !== !1, e.isScale ? s : !1;
  },
  dragGroupControl: function(t, r) {
    var e = r.datas;
    if (e.isScale) {
      Gn(t, "onBeforeScale", function(f) {
        H(t, "onBeforeScaleGroup", it(t, r, M(M({}, f), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, r);
      if (n) {
        var i = n.dist, a = e.moveableScale;
        t.scale = [
          i[0] * a[0],
          i[1] * a[1]
        ];
        var o = t.props.keepRatio, s = e.fixedPosition, u = ur(t, this, "dragControl", r, function(f, c) {
          var v = P(kt($e(t.rotation / 180 * Math.PI, 3), [
            c.datas.originalX * i[0],
            c.datas.originalY * i[1],
            1
          ], 3), 2), p = v[0], d = v[1];
          return M(M({}, c), {
            parentDist: null,
            parentScale: i,
            parentKeepRatio: o,
            // recalculate child fixed position for parent group's dragging.
            dragClient: lt(s, [p, d])
          });
        }), l = M({ targets: t.props.targets, events: u }, n);
        return H(t, "onScaleGroup", l), l;
      }
    }
  },
  dragGroupControlEnd: function(t, r) {
    var e = r.isDrag, n = r.datas;
    if (n.isScale) {
      this.dragControlEnd(t, r);
      var i = ur(t, this, "dragControlEnd", r), a = Wt(t, r, {
        targets: t.props.targets,
        events: i
      });
      return H(t, "onScaleGroupEnd", a), e;
    }
  },
  /**
       * @method Moveable.Scalable#request
       * @param {Moveable.Scalable.ScalableRequestParam} e - the Scalable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("scalable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("scalable");
       *
       * // request
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function() {
    var t = {}, r = 0, e = 0, n = !1;
    return {
      isControl: !0,
      requestStart: function(i) {
        return n = i.useSnap, {
          datas: t,
          parentDirection: i.direction || [1, 1],
          useSnap: n
        };
      },
      request: function(i) {
        return r += i.deltaWidth, e += i.deltaHeight, {
          datas: t,
          parentDist: [r, e],
          parentKeepRatio: i.keepRatio,
          useSnap: n
        };
      },
      requestEnd: function() {
        return { datas: t, isDrag: !0, useSnap: n };
      }
    };
  }
};
function gr(t, r) {
  return t.map(function(e, n) {
    return Tr(e, r[n], 1, 2);
  });
}
function rs(t, r, e) {
  var n = Et(t, r), i = Et(t, e), a = i - n;
  return a >= 0 ? a : a + 2 * Math.PI;
}
function Dm(t, r) {
  var e = rs(t[0], t[1], t[2]), n = rs(r[0], r[1], r[2]), i = Math.PI;
  return !(e >= i && n <= i || e <= i && n >= i);
}
var wm = {
  name: "warpable",
  ableGroup: "size",
  props: [
    "warpable",
    "renderDirections",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "warpStart",
    "warp",
    "warpEnd"
  ],
  viewClassName: Pa("warpable"),
  render: function(t, r) {
    var e = t.props, n = e.resizable, i = e.scalable, a = e.warpable, o = e.zoom;
    if (n || i || !a)
      return [];
    var s = t.state, u = s.pos1, l = s.pos2, f = s.pos3, c = s.pos4, v = gr(u, l), p = gr(l, u), d = gr(u, f), h = gr(f, u), g = gr(f, c), m = gr(c, f), y = gr(l, c), b = gr(c, l);
    return N([
      r.createElement("div", { className: Q("line"), key: "middeLine1", style: xe(v, g, o) }),
      r.createElement("div", { className: Q("line"), key: "middeLine2", style: xe(p, m, o) }),
      r.createElement("div", { className: Q("line"), key: "middeLine3", style: xe(d, y, o) }),
      r.createElement("div", { className: Q("line"), key: "middeLine4", style: xe(h, b, o) })
    ], P(Yu(t, "warpable", r)), !1);
  },
  dragControlCondition: function(t, r) {
    if (r.isRequest)
      return !1;
    var e = r.inputEvent.target;
    return Dt(e, Q("direction")) && Dt(e, Q("warpable"));
  },
  dragControlStart: function(t, r) {
    var e = r.datas, n = r.inputEvent, i = t.props.target, a = n.target, o = pl(a, e);
    if (!o || !i)
      return !1;
    var s = t.state, u = s.transformOrigin, l = s.is3d, f = s.targetTransform, c = s.targetMatrix, v = s.width, p = s.height, d = s.left, h = s.top;
    e.datas = {}, e.targetTransform = f, e.warpTargetMatrix = l ? c : Qt(c, 3, 4), e.targetInverseMatrix = mu(ir(e.warpTargetMatrix, 4), 3, 4), e.direction = o, e.left = d, e.top = h, e.poses = [
      [0, 0],
      [v, 0],
      [0, p],
      [v, p]
    ].map(function(y) {
      return tt(y, u);
    }), e.nextPoses = e.poses.map(function(y) {
      var b = P(y, 2), E = b[0], C = b[1];
      return kt(e.warpTargetMatrix, [E, C, 0, 1], 4);
    }), e.startValue = yt(4), e.prevMatrix = yt(4), e.absolutePoses = qt(s), e.posIndexes = Bu(o), jr(t, r), In(t, r, "matrix3d"), s.snapRenderInfo = {
      request: r.isRequest,
      direction: o
    };
    var g = it(t, r, M({ set: function(y) {
      e.startValue = y;
    } }, On(t, r))), m = H(t, "onWarpStart", g);
    return m !== !1 && (e.isWarp = !0), e.isWarp;
  },
  dragControl: function(t, r) {
    var e = r.datas, n = r.isRequest, i = r.distX, a = r.distY, o = e.targetInverseMatrix, s = e.prevMatrix, u = e.isWarp, l = e.startValue, f = e.poses, c = e.posIndexes, v = e.absolutePoses;
    if (!u)
      return !1;
    if (wn(t, r, "matrix3d"), de(t, "warpable")) {
      var p = c.map(function(T) {
        return v[T];
      });
      p.length > 1 && p.push([
        (p[0][0] + p[1][0]) / 2,
        (p[0][1] + p[1][1]) / 2
      ]);
      var d = Bn(t, n, {
        horizontal: p.map(function(T) {
          return T[1] + a;
        }),
        vertical: p.map(function(T) {
          return T[0] + i;
        })
      }), h = d.horizontal, g = d.vertical;
      a -= h.offset, i -= g.offset;
    }
    var m = ar({ datas: e, distX: i, distY: a }, !0), y = e.nextPoses.slice();
    if (c.forEach(function(T) {
      y[T] = lt(y[T], m);
    }), !Ug.every(function(T) {
      return Dm(T.map(function(D) {
        return f[D];
      }), T.map(function(D) {
        return y[D];
      }));
    }))
      return !1;
    var b = ca(f[0], f[2], f[1], f[3], y[0], y[2], y[1], y[3]);
    if (!b.length)
      return !1;
    var E = pt(o, b, 4), C = ku(e, E, !0), x = pt(ir(s, 4), C, 4);
    e.prevMatrix = C;
    var S = pt(l, C, 4), _ = Rn(e, "matrix3d(".concat(S.join(", "), ")"), "matrix3d(".concat(C.join(", "), ")"));
    return ga(r, _), H(t, "onWarp", it(t, r, M({ delta: x, matrix: S, dist: C, multiply: pt, transform: _ }, Gt({
      transform: _
    }, r)))), !0;
  },
  dragControlEnd: function(t, r) {
    var e = r.datas, n = r.isDrag;
    return e.isWarp ? (e.isWarp = !1, H(t, "onWarpEnd", Wt(t, r, {})), n) : !1;
  }
}, Rm = /* @__PURE__ */ Q("area-pieces"), nn = /* @__PURE__ */ Q("area-piece"), Sl = /* @__PURE__ */ Q("avoid"), Om = Q("view-dragging");
function oi(t) {
  var r = t.areaElement;
  if (r) {
    var e = t.state, n = e.width, i = e.height;
    Zs(r, Sl), r.style.cssText += "left: 0px; top: 0px; width: ".concat(n, "px; height: ").concat(i, "px");
  }
}
function es(t) {
  return t.createElement(
    "div",
    { key: "area_pieces", className: Rm },
    t.createElement("div", { className: nn }),
    t.createElement("div", { className: nn }),
    t.createElement("div", { className: nn }),
    t.createElement("div", { className: nn })
  );
}
var Cl = {
  name: "dragArea",
  props: [
    "dragArea",
    "passDragArea"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  render: function(t, r) {
    var e = t.props, n = e.target, i = e.dragArea, a = e.groupable, o = e.passDragArea, s = t.getState(), u = s.width, l = s.height, f = s.renderPoses, c = o ? Q("area", "pass") : Q("area");
    if (a)
      return [
        r.createElement("div", { key: "area", ref: or(t, "areaElement"), className: c }),
        es(r)
      ];
    if (!n || !i)
      return [];
    var v = ca([0, 0], [u, 0], [0, l], [u, l], f[0], f[1], f[2], f[3]), p = v.length ? zn(v, !0) : "none";
    return [
      r.createElement("div", { key: "area", ref: or(t, "areaElement"), className: c, style: {
        top: "0px",
        left: "0px",
        width: "".concat(u, "px"),
        height: "".concat(l, "px"),
        transformOrigin: "0 0",
        transform: p
      } }),
      es(r)
    ];
  },
  dragStart: function(t, r) {
    var e = r.datas, n = r.clientX, i = r.clientY, a = r.inputEvent;
    if (!a)
      return !1;
    e.isDragArea = !1;
    var o = t.areaElement, s = t.state, u = s.moveableClientRect, l = s.renderPoses, f = s.rootMatrix, c = s.is3d, v = u.left, p = u.top, d = Ht(l), h = d.left, g = d.top, m = d.width, y = d.height, b = c ? 4 : 3, E = P(oe(f, [n - v, i - p], b), 2), C = E[0], x = E[1];
    C -= h, x -= g;
    var S = [
      { left: h, top: g, width: m, height: x - 10 },
      { left: h, top: g, width: C - 10, height: y },
      { left: h, top: g + x + 10, width: m, height: y - x - 10 },
      { left: h + C + 10, top: g, width: m - C - 10, height: y }
    ], _ = [].slice.call(o.nextElementSibling.children);
    S.forEach(function(T, D) {
      _[D].style.cssText = "left: ".concat(T.left, "px;top: ").concat(T.top, "px; width: ").concat(T.width, "px; height: ").concat(T.height, "px;");
    }), Ks(o, Sl), s.disableNativeEvent = !0;
  },
  drag: function(t, r) {
    var e = r.datas, n = r.inputEvent;
    if (this.enableNativeEvent(t), !n)
      return !1;
    e.isDragArea || (e.isDragArea = !0, oi(t));
  },
  dragEnd: function(t, r) {
    this.enableNativeEvent(t);
    var e = r.inputEvent, n = r.datas;
    if (!e)
      return !1;
    n.isDragArea || oi(t);
  },
  dragGroupStart: function(t, r) {
    return this.dragStart(t, r);
  },
  dragGroup: function(t, r) {
    return this.drag(t, r);
  },
  dragGroupEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  unset: function(t) {
    oi(t), t.state.disableNativeEvent = !1;
  },
  enableNativeEvent: function(t) {
    var r = t.state;
    r.disableNativeEvent && Vs(function() {
      r.disableNativeEvent = !1;
    });
  }
}, Im = ce("origin", {
  props: ["origin", "svgOrigin"],
  render: function(t, r) {
    var e = t.props, n = e.zoom, i = e.svgOrigin, a = e.groupable, o = t.getState(), s = o.beforeOrigin, u = o.rotation, l = o.svg, f = o.allMatrix, c = o.is3d, v = o.left, p = o.top, d = o.offsetWidth, h = o.offsetHeight, g;
    if (!a && l && i) {
      var m = P(Ra(i, d, h), 2), y = m[0], b = m[1], E = c ? 4 : 3, C = bt(f, [y, b], E);
      g = xn(u, n, tt(C, [v, p]));
    } else
      g = xn(u, n, s);
    return [
      r.createElement("div", { className: Q("control", "origin"), style: g, key: "beforeOrigin" })
    ];
  }
});
function km(t) {
  var r = t.scrollContainer;
  return [
    r.scrollLeft,
    r.scrollTop
  ];
}
var Am = {
  name: "scrollable",
  canPinch: !0,
  props: [
    "scrollable",
    "scrollContainer",
    "scrollThreshold",
    "scrollThrottleTime",
    "getScrollPosition",
    "scrollOptions"
  ],
  events: [
    "scroll",
    "scrollGroup"
  ],
  dragRelation: "strong",
  dragStart: function(t, r) {
    var e = t.props, n = e.scrollContainer, i = n === void 0 ? t.getContainer() : n, a = e.scrollOptions, o = new dg(), s = er(i, !0);
    r.datas.dragScroll = o, t.state.dragScroll = o;
    var u = r.isControl ? "controlGesto" : "targetGesto", l = r.targets;
    o.on("scroll", function(f) {
      var c = f.container, v = f.direction, p = it(t, r, {
        scrollContainer: c,
        direction: v
      }), d = l ? "onScrollGroup" : "onScroll";
      l && (p.targets = l), H(t, d, p);
    }).on("move", function(f) {
      var c = f.offsetX, v = f.offsetY, p = f.inputEvent;
      t[u].scrollBy(c, v, p.inputEvent, !1);
    }).on("scrollDrag", function(f) {
      var c = f.next;
      c(t[u].getCurrentEvent());
    }), o.dragStart(r, M({ container: s }, a));
  },
  checkScroll: function(t, r) {
    var e = r.datas.dragScroll;
    if (e) {
      var n = t.props, i = n.scrollContainer, a = i === void 0 ? t.getContainer() : i, o = n.scrollThreshold, s = o === void 0 ? 0 : o, u = n.scrollThrottleTime, l = u === void 0 ? 0 : u, f = n.getScrollPosition, c = f === void 0 ? km : f, v = n.scrollOptions;
      return e.drag(r, M({ container: a, threshold: s, throttleTime: l, getScrollPosition: function(p) {
        return c({ scrollContainer: p.container, direction: p.direction });
      } }, v)), !0;
    }
  },
  drag: function(t, r) {
    return this.checkScroll(t, r);
  },
  dragEnd: function(t, r) {
    r.datas.dragScroll.dragEnd(), r.datas.dragScroll = null;
  },
  dragControlStart: function(t, r) {
    return this.dragStart(t, M(M({}, r), { isControl: !0 }));
  },
  dragControl: function(t, r) {
    return this.drag(t, r);
  },
  dragControlEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  dragGroupStart: function(t, r) {
    return this.dragStart(t, M(M({}, r), { targets: t.props.targets }));
  },
  dragGroup: function(t, r) {
    return this.drag(t, M(M({}, r), { targets: t.props.targets }));
  },
  dragGroupEnd: function(t, r) {
    return this.dragEnd(t, M(M({}, r), { targets: t.props.targets }));
  },
  dragGroupControlStart: function(t, r) {
    return this.dragStart(t, M(M({}, r), { targets: t.props.targets, isControl: !0 }));
  },
  dragGroupControl: function(t, r) {
    return this.drag(t, M(M({}, r), { targets: t.props.targets }));
  },
  dragGroupControEnd: function(t, r) {
    return this.dragEnd(t, M(M({}, r), { targets: t.props.targets }));
  },
  unset: function(t) {
    var r, e = t.state;
    (r = e.dragScroll) === null || r === void 0 || r.dragEnd(), e.dragScroll = null;
  }
}, _l = {
  name: "",
  props: [
    "target",
    "dragTargetSelf",
    "dragTarget",
    "dragContainer",
    "container",
    "warpSelf",
    "rootContainer",
    "useResizeObserver",
    "useMutationObserver",
    "zoom",
    "dragFocusedInput",
    "transformOrigin",
    "ables",
    "className",
    "pinchThreshold",
    "pinchOutside",
    "triggerAblesSimultaneously",
    "checkInput",
    "cspNonce",
    "translateZ",
    "hideDefaultLines",
    "props",
    "flushSync",
    "stopPropagation",
    "preventClickEventOnDrag",
    "preventClickDefault",
    "viewContainer",
    "persistData",
    "useAccuratePosition",
    "firstRenderState",
    "linePadding",
    "controlPadding",
    "preventDefault",
    "requestStyles"
  ],
  events: [
    "changeTargets"
  ]
}, Bm = ce("padding", {
  props: ["padding"],
  render: function(t, r) {
    var e = t.props;
    if (e.dragArea)
      return [];
    var n = El(e.padding || {}), i = n.left, a = n.top, o = n.right, s = n.bottom, u = t.getState(), l = u.renderPoses, f = u.pos1, c = u.pos2, v = u.pos3, p = u.pos4, d = [f, c, v, p], h = [];
    return i > 0 && h.push([0, 2]), a > 0 && h.push([0, 1]), o > 0 && h.push([1, 3]), s > 0 && h.push([2, 3]), h.map(function(g, m) {
      var y = P(g, 2), b = y[0], E = y[1], C = d[b], x = d[E], S = l[b], _ = l[E], T = ca([0, 0], [100, 0], [0, 100], [100, 100], C, x, S, _);
      if (T.length)
        return r.createElement("div", { key: "padding".concat(m), className: Q("padding"), style: {
          transform: zn(T, !0)
        } });
    });
  }
}), ns = ["nw", "ne", "se", "sw"];
function an(t, r) {
  var e = t[0] + t[1], n = e > r ? r / e : 1;
  return t[0] *= n, t[1] = r - t[1] * n, t;
}
var zm = [1, 2, 5, 6], Gm = [0, 3, 4, 7], wr = [1, -1, -1, 1], Rr = [1, 1, -1, -1];
function Oa(t, r, e, n, i, a, o, s) {
  i === void 0 && (i = 0), a === void 0 && (a = 0), o === void 0 && (o = e), s === void 0 && (s = n);
  var u = [], l = !1, f = t.filter(function(v) {
    return !v.virtual;
  }), c = f.map(function(v) {
    var p = v.horizontal, d = v.vertical, h = v.pos;
    if (d && !l && (l = !0, u.push("/")), l) {
      var g = Math.max(0, d === 1 ? h[1] - a : s - h[1]);
      return u.push(Ut(g, n, r)), g;
    } else {
      var g = Math.max(0, p === 1 ? h[0] - i : o - h[0]);
      return u.push(Ut(g, e, r)), g;
    }
  });
  return {
    radiusPoses: f,
    styles: u,
    raws: c
  };
}
function Ml(t) {
  for (var r = [0, 0], e = [0, 0], n = t.length, i = 0; i < n; ++i) {
    var a = t[i];
    a.sub && (a.horizontal && (r[1] === 0 && (r[0] = i), r[1] = i - r[0] + 1, e[0] = i + 1), a.vertical && (e[1] === 0 && (e[0] = i), e[1] = i - e[0] + 1));
  }
  return {
    horizontalRange: r,
    verticalRange: e
  };
}
function Tl(t, r, e, n, i, a, o) {
  var s, u, l, f;
  a === void 0 && (a = [0, 0]), o === void 0 && (o = !1);
  var c = t.indexOf("/"), v = (c > -1 ? t.slice(0, c) : t).length, p = t.slice(0, v), d = t.slice(v + 1), h = p.length, g = d.length, m = g > 0, y = P(p, 4), b = y[0], E = b === void 0 ? "0px" : b, C = y[1], x = C === void 0 ? E : C, S = y[2], _ = S === void 0 ? E : S, T = y[3], D = T === void 0 ? x : T, O = P(d, 4), R = O[0], w = R === void 0 ? E : R, I = O[1], k = I === void 0 ? m ? w : x : I, F = O[2], L = F === void 0 ? m ? w : _ : F, A = O[3], $ = A === void 0 ? m ? k : D : A, j = [E, x, _, D].map(function(Y) {
    return vt(Y, r);
  }), G = [w, k, L, $].map(function(Y) {
    return vt(Y, e);
  }), q = j.slice(), U = G.slice();
  s = P(an([q[0], q[1]], r), 2), q[0] = s[0], q[1] = s[1], u = P(an([q[3], q[2]], r), 2), q[3] = u[0], q[2] = u[1], l = P(an([U[0], U[3]], e), 2), U[0] = l[0], U[3] = l[1], f = P(an([U[1], U[2]], e), 2), U[1] = f[0], U[2] = f[1];
  var W = o ? q : q.slice(0, Math.max(a[0], h)), X = o ? U : U.slice(0, Math.max(a[1], g));
  return N(N([], P(W.map(function(Y, V) {
    var J = ns[V];
    return {
      virtual: V >= h,
      horizontal: wr[V],
      vertical: 0,
      pos: [n + Y, i + (Rr[V] === -1 ? e : 0)],
      sub: !0,
      raw: j[V],
      direction: J
    };
  })), !1), P(X.map(function(Y, V) {
    var J = ns[V];
    return {
      virtual: V >= g,
      horizontal: 0,
      vertical: Rr[V],
      pos: [n + (wr[V] === -1 ? r : 0), i + Y],
      sub: !0,
      raw: G[V],
      direction: J
    };
  })), !1);
}
function Lm(t, r, e, n, i) {
  i === void 0 && (i = r.length);
  var a = Ml(t.slice(n)), o = a.horizontalRange, s = a.verticalRange, u = e - n, l = 0;
  if (u === 0)
    l = i;
  else if (u > 0 && u < o[1])
    l = o[1] - u;
  else if (u >= s[0])
    l = s[0] + s[1] - u;
  else
    return;
  t.splice(e, l), r.splice(e, l);
}
function Fm(t, r, e, n, i, a, o, s, u, l, f) {
  l === void 0 && (l = 0), f === void 0 && (f = 0);
  var c = Ml(t.slice(e)), v = c.horizontalRange, p = c.verticalRange;
  if (n > -1)
    for (var d = wr[n] === 1 ? a - l : s - a, h = v[1]; h <= n; ++h) {
      var g = Rr[h] === 1 ? f : u, m = 0;
      if (n === h ? m = a : h === 0 ? m = l + d : wr[h] === -1 && (m = s - (r[e][0] - l)), t.splice(e + h, 0, {
        horizontal: wr[h],
        vertical: 0,
        pos: [m, g]
      }), r.splice(e + h, 0, [m, g]), h === 0)
        break;
    }
  else if (i > -1) {
    var y = Rr[i] === 1 ? o - f : u - o;
    if (v[1] === 0 && p[1] === 0) {
      var b = [
        l + y,
        f
      ];
      t.push({
        horizontal: wr[0],
        vertical: 0,
        pos: b
      }), r.push(b);
    }
    for (var E = p[0], h = p[1]; h <= i; ++h) {
      var m = wr[h] === 1 ? l : s, g = 0;
      if (i === h ? g = o : h === 0 ? g = f + y : Rr[h] === 1 ? g = r[e + E][1] : Rr[h] === -1 && (g = u - (r[e + E][1] - f)), t.push({
        horizontal: 0,
        vertical: Rr[h],
        pos: [m, g]
      }), r.push([m, g]), h === 0)
        break;
    }
  }
}
function Nm(t, r) {
  r === void 0 && (r = t.map(function(i) {
    return i.raw;
  }));
  var e = t.map(function(i, a) {
    return i.horizontal ? r[a] : null;
  }).filter(function(i) {
    return i != null;
  }), n = t.map(function(i, a) {
    return i.vertical ? r[a] : null;
  }).filter(function(i) {
    return i != null;
  });
  return {
    horizontals: e,
    verticals: n
  };
}
var $m = [
  [0, -1, "n"],
  [1, 0, "e"]
], jm = [
  [-1, -1, "nw"],
  [0, -1, "n"],
  [1, -1, "ne"],
  [1, 0, "e"],
  [1, 1, "se"],
  [0, 1, "s"],
  [-1, 1, "sw"],
  [-1, 0, "w"]
];
function Ia(t, r, e) {
  var n = t.props.clipRelative, i = t.state, a = i.width, o = i.height, s = r, u = s.type, l = s.poses, f = u === "rect", c = u === "circle";
  if (u === "polygon")
    return e.map(function(x) {
      return "".concat(Ut(x[0], a, n), " ").concat(Ut(x[1], o, n));
    });
  if (f || u === "inset") {
    var v = e[1][1], p = e[3][0], d = e[7][0], h = e[5][1];
    if (f)
      return [
        v,
        p,
        h,
        d
      ].map(function(x) {
        return "".concat(x, "px");
      });
    var g = [v, a - p, o - h, d].map(function(x, S) {
      return Ut(x, S % 2 ? a : o, n);
    });
    if (e.length > 8) {
      var m = P(tt(e[4], e[0]), 2), y = m[0], b = m[1];
      g.push.apply(g, N(["round"], P(Oa(l.slice(8).map(function(x, S) {
        return M(M({}, x), { pos: e[S] });
      }), n, y, b, d, v, p, h).styles), !1));
    }
    return g;
  } else if (c || u === "ellipse") {
    var E = e[0], C = Ut(z(e[1][1] - E[1]), c ? Math.sqrt((a * a + o * o) / 2) : o, n), g = c ? [C] : [Ut(z(e[2][0] - E[0]), a, n), C];
    return g.push("at", Ut(E[0], a, n), Ut(E[1], o, n)), g;
  }
}
function En(t, r, e, n) {
  var i = [n, (n + r) / 2, r], a = [t, (t + e) / 2, e];
  return jm.map(function(o) {
    var s = P(o, 3), u = s[0], l = s[1], f = s[2], c = i[u + 1], v = a[l + 1];
    return {
      vertical: z(l),
      horizontal: z(u),
      direction: f,
      pos: [c, v]
    };
  });
}
function Pl(t) {
  var r = [1 / 0, -1 / 0], e = [1 / 0, -1 / 0];
  return t.forEach(function(n) {
    var i = n.pos;
    r[0] = Math.min(r[0], i[0]), r[1] = Math.max(r[1], i[0]), e[0] = Math.min(e[0], i[1]), e[1] = Math.max(e[1], i[1]);
  }), [
    z(r[1] - r[0]),
    z(e[1] - e[0])
  ];
}
function is(t, r, e, n, i) {
  var a, o, s, u, l, f, c, v, p;
  if (t) {
    var d = i;
    if (!d) {
      var h = jt(t), g = h("clipPath");
      d = g !== "none" ? g : h("clip");
    }
    if (!((!d || d === "none" || d === "auto") && (d = n, !d))) {
      var m = Hs(d), y = m.prefix, b = y === void 0 ? d : y, E = m.value, C = E === void 0 ? "" : E, x = b === "circle", S = " ";
      if (b === "polygon") {
        var _ = Or(C || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        S = ",";
        var T = _.map(function(Rt) {
          var At = P(Rt.split(" "), 2), It = At[0], St = At[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              vt(It, r),
              vt(St, e)
            ]
          };
        }), D = Br(T.map(function(Rt) {
          return Rt.pos;
        }));
        return {
          type: b,
          clipText: d,
          poses: T,
          splitter: S,
          left: D.minX,
          right: D.maxX,
          top: D.minY,
          bottom: D.maxY
        };
      } else if (x || b === "ellipse") {
        var O = "", R = "", w = 0, I = 0, _ = br(C);
        if (x) {
          var k = "";
          a = P(_, 4), o = a[0], k = o === void 0 ? "50%" : o, s = a[2], O = s === void 0 ? "50%" : s, u = a[3], R = u === void 0 ? "50%" : u, w = vt(k, Math.sqrt((r * r + e * e) / 2)), I = w;
        } else {
          var F = "", L = "";
          l = P(_, 5), f = l[0], F = f === void 0 ? "50%" : f, c = l[1], L = c === void 0 ? "50%" : c, v = l[3], O = v === void 0 ? "50%" : v, p = l[4], R = p === void 0 ? "50%" : p, w = vt(F, r), I = vt(L, e);
        }
        var A = [
          vt(O, r),
          vt(R, e)
        ], T = N([
          {
            vertical: 1,
            horizontal: 1,
            pos: A,
            direction: "nesw"
          }
        ], P($m.slice(0, x ? 1 : 2).map(function(It) {
          return {
            vertical: z(It[1]),
            horizontal: It[0],
            direction: It[2],
            sub: !0,
            pos: [
              A[0] + It[0] * w,
              A[1] + It[1] * I
            ]
          };
        })), !1);
        return {
          type: b,
          clipText: d,
          radiusX: w,
          radiusY: I,
          left: A[0] - w,
          top: A[1] - I,
          right: A[0] + w,
          bottom: A[1] + I,
          poses: T,
          splitter: S
        };
      } else if (b === "inset") {
        var _ = br(C || "0 0 0 0"), $ = _.indexOf("round"), j = ($ > -1 ? _.slice(0, $) : _).length, G = _.slice(j + 1), q = P(_.slice(0, j), 4), U = q[0], W = q[1], X = W === void 0 ? U : W, Y = q[2], V = Y === void 0 ? U : Y, J = q[3], nt = J === void 0 ? X : J, rt = P([U, V].map(function(It) {
          return vt(It, e);
        }), 2), Z = rt[0], K = rt[1], ft = P([nt, X].map(function(It) {
          return vt(It, r);
        }), 2), at = ft[0], ot = ft[1], ut = r - ot, xt = e - K, dt = Tl(G, ut - at, xt - Z, at, Z), T = N(N([], P(En(Z, ut, xt, at)), !1), P(dt), !1);
        return {
          type: "inset",
          clipText: d,
          poses: T,
          top: Z,
          left: at,
          right: ut,
          bottom: xt,
          radius: G,
          splitter: S
        };
      } else if (b === "rect") {
        var _ = Or(C || "0px, ".concat(r, "px, ").concat(e, "px, 0px"));
        S = ",";
        var st = P(_.map(function(pr) {
          var dr = ze(pr).value;
          return dr;
        }), 4), ct = st[0], ot = st[1], K = st[2], at = st[3], T = En(ct, ot, K, at);
        return {
          type: "rect",
          clipText: d,
          poses: T,
          top: ct,
          right: ot,
          bottom: K,
          left: at,
          values: _,
          splitter: S
        };
      }
    }
  }
}
function Ym(t, r, e, n, i) {
  var a = t[r], o = a.direction, s = a.sub, u = t.map(function() {
    return [0, 0];
  }), l = o ? o.split("") : [];
  if (n && r < 8) {
    var f = l.filter(function(w) {
      return w === "w" || w === "e";
    }), c = l.filter(function(w) {
      return w === "n" || w === "s";
    }), v = f[0], p = c[0];
    u[r] = e;
    var d = P(Pl(t), 2), h = d[0], g = d[1], m = h && g ? h / g : 0;
    if (m && i) {
      var y = (r + 4) % 8, b = t[y].pos, E = [0, 0];
      o.indexOf("w") > -1 ? E[0] = -1 : o.indexOf("e") > -1 && (E[0] = 1), o.indexOf("n") > -1 ? E[1] = -1 : o.indexOf("s") > -1 && (E[1] = 1);
      var C = yl([h, g], e, m, E, !0), x = h + C[0], S = g + C[1], _ = b[1], T = b[1], D = b[0], O = b[0];
      E[0] === -1 ? D = O - x : E[0] === 1 ? O = D + x : (D = D - x / 2, O = O + x / 2), E[1] === -1 ? _ = T - S : (E[1] === 1 || (_ = T - S / 2), T = _ + S);
      var R = En(_, O, T, D);
      t.forEach(function(w, I) {
        u[I][0] = R[I].pos[0] - w.pos[0], u[I][1] = R[I].pos[1] - w.pos[1];
      });
    } else
      t.forEach(function(w, I) {
        var k = w.direction;
        k && (k.indexOf(v) > -1 && (u[I][0] = e[0]), k.indexOf(p) > -1 && (u[I][1] = e[1]));
      }), v && (u[1][0] = e[0] / 2, u[5][0] = e[0] / 2), p && (u[3][1] = e[1] / 2, u[7][1] = e[1] / 2);
  } else
    o && !s ? l.forEach(function(w) {
      var I = w === "n" || w === "s";
      t.forEach(function(k, F) {
        var L = k.direction, A = k.horizontal, $ = k.vertical;
        !L || L.indexOf(w) === -1 || (u[F] = [
          I || !A ? 0 : e[0],
          !I || !$ ? 0 : e[1]
        ]);
      });
    }) : u[r] = e;
  return u;
}
function Wm(t, r) {
  var e = P(Iu(t, r), 2), n = e[0], i = e[1], a = r.datas, o = a.clipPath, s = a.clipIndex, u = o, l = u.type, f = u.poses, c = u.splitter, v = f.map(function(y) {
    return y.pos;
  });
  if (l === "polygon")
    v.splice(s, 0, [n, i]);
  else if (l === "inset") {
    var p = zm.indexOf(s), d = Gm.indexOf(s), h = f.length;
    if (Fm(f, v, 8, p, d, n, i, v[4][0], v[4][1], v[0][0], v[0][1]), h === f.length)
      return;
  } else
    return;
  var g = Ia(t, o, v), m = "".concat(l, "(").concat(g.join(c), ")");
  H(t, "onClip", it(t, r, M({ clipEventType: "added", clipType: l, poses: v, clipStyles: g, clipStyle: m, distX: 0, distY: 0 }, Gt({
    clipPath: m
  }, r))));
}
function Xm(t, r) {
  var e = r.datas, n = e.clipPath, i = e.clipIndex, a = n, o = a.type, s = a.poses, u = a.splitter, l = s.map(function(p) {
    return p.pos;
  }), f = l.length;
  if (o === "polygon")
    s.splice(i, 1), l.splice(i, 1);
  else if (o === "inset") {
    if (i < 8 || (Lm(s, l, i, 8, f), f === s.length))
      return;
  } else
    return;
  var c = Ia(t, n, l), v = "".concat(o, "(").concat(c.join(u), ")");
  H(t, "onClip", it(t, r, M({ clipEventType: "removed", clipType: o, poses: l, clipStyles: c, clipStyle: v, distX: 0, distY: 0 }, Gt({
    clipPath: v
  }, r))));
}
var Hm = {
  name: "clippable",
  props: [
    "clippable",
    "defaultClipPath",
    "customClipPath",
    "keepRatio",
    "clipRelative",
    "clipArea",
    "dragWithClip",
    "clipTargetBounds",
    "clipVerticalGuidelines",
    "clipHorizontalGuidelines",
    "clipSnapThreshold"
  ],
  events: [
    "clipStart",
    "clip",
    "clipEnd"
  ],
  css: [
    `.control.clip-control {
background: #6d6;
cursor: pointer;
}
.control.clip-control.clip-radius {
background: #d66;
}
.line.clip-line {
background: #6e6;
cursor: move;
z-index: 1;
}
.clip-area {
position: absolute;
top: 0;
left: 0;
}
.clip-ellipse {
position: absolute;
cursor: move;
border: 1px solid #6d6;
border: var(--zoompx) solid #6d6;
border-radius: 50%;
transform-origin: 0px 0px;
}`,
    `:host {
--bounds-color: #d66;
}`,
    `.guideline {
pointer-events: none;
z-index: 2;
}`,
    `.line.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}`
  ],
  render: function(t, r) {
    var e = t.props, n = e.customClipPath, i = e.defaultClipPath, a = e.clipArea, o = e.zoom, s = e.groupable, u = t.getState(), l = u.target, f = u.width, c = u.height, v = u.allMatrix, p = u.is3d, d = u.left, h = u.top, g = u.pos1, m = u.pos2, y = u.pos3, b = u.pos4, E = u.clipPathState, C = u.snapBoundInfos, x = u.rotation;
    if (!l || s)
      return [];
    var S = is(l, f, c, i || "inset", E || n);
    if (!S)
      return [];
    var _ = p ? 4 : 3, T = S.type, D = S.poses, O = D.map(function(ot) {
      var ut = bt(v, ot.pos, _);
      return [
        ut[0] - d,
        ut[1] - h
      ];
    }), R = [], w = [], I = T === "rect", k = T === "inset", F = T === "polygon";
    if (I || k || F) {
      var L = k ? O.slice(0, 8) : O;
      w = L.map(function(ot, ut) {
        var xt = ut === 0 ? L[L.length - 1] : L[ut - 1], dt = Et(xt, ot), st = ul(xt, ot);
        return r.createElement("div", { key: "clipLine".concat(ut), className: Q("line", "clip-line", "snap-control"), "data-clip-index": ut, style: {
          width: "".concat(st, "px"),
          transform: "translate(".concat(xt[0], "px, ").concat(xt[1], "px) rotate(").concat(dt, "rad) scaleY(").concat(o, ")")
        } });
      });
    }
    if (R = O.map(function(ot, ut) {
      return r.createElement("div", { key: "clipControl".concat(ut), className: Q("control", "clip-control", "snap-control"), "data-clip-index": ut, style: {
        transform: "translate(".concat(ot[0], "px, ").concat(ot[1], "px) rotate(").concat(x, "rad) scale(").concat(o, ")")
      } });
    }), k && R.push.apply(R, N([], P(O.slice(8).map(function(ot, ut) {
      return r.createElement("div", { key: "clipRadiusControl".concat(ut), className: Q("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + ut, style: {
        transform: "translate(".concat(ot[0], "px, ").concat(ot[1], "px) rotate(").concat(x, "rad) scale(").concat(o, ")")
      } });
    })), !1)), T === "circle" || T === "ellipse") {
      var A = S.left, $ = S.top, j = S.radiusX, G = S.radiusY, q = P(tt(bt(v, [A, $], _), bt(v, [0, 0], _)), 2), U = q[0], W = q[1], X = "none";
      if (!a) {
        for (var Y = Math.max(10, j / 5, G / 5), V = [], J = 0; J <= Y; ++J) {
          var nt = Math.PI * 2 / Y * J;
          V.push([
            j + (j - o) * Math.cos(nt),
            G + (G - o) * Math.sin(nt)
          ]);
        }
        V.push([j, -2]), V.push([-2, -2]), V.push([-2, G * 2 + 2]), V.push([j * 2 + 2, G * 2 + 2]), V.push([j * 2 + 2, -2]), V.push([j, -2]), X = "polygon(".concat(V.map(function(ot) {
          return "".concat(ot[0], "px ").concat(ot[1], "px");
        }).join(", "), ")");
      }
      R.push(r.createElement("div", { key: "clipEllipse", className: Q("clip-ellipse", "snap-control"), style: {
        width: "".concat(j * 2, "px"),
        height: "".concat(G * 2, "px"),
        clipPath: X,
        transform: "translate(".concat(-d + U, "px, ").concat(-h + W, "px) ").concat(zn(v))
      } }));
    }
    if (a) {
      var rt = Ht(N([g, m, y, b], P(O), !1)), Z = rt.width, K = rt.height, ft = rt.left, at = rt.top;
      if (F || I || k) {
        var V = k ? O.slice(0, 8) : O;
        R.push(r.createElement("div", { key: "clipArea", className: Q("clip-area", "snap-control"), style: {
          width: "".concat(Z, "px"),
          height: "".concat(K, "px"),
          transform: "translate(".concat(ft, "px, ").concat(at, "px)"),
          clipPath: "polygon(".concat(V.map(function(ut) {
            return "".concat(ut[0] - ft, "px ").concat(ut[1] - at, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return C && ["vertical", "horizontal"].forEach(function(ot) {
      var ut = C[ot], xt = ot === "horizontal";
      ut.isSnap && w.push.apply(w, N([], P(ut.snap.posInfos.map(function(dt, st) {
        var ct = dt.pos, Rt = tt(bt(v, xt ? [0, ct] : [ct, 0], _), [d, h]), At = tt(bt(v, xt ? [f, ct] : [ct, c], _), [d, h]);
        return Ie(r, "", Rt, At, o, "clip".concat(ot, "snap").concat(st), "guideline");
      })), !1)), ut.isBound && w.push.apply(w, N([], P(ut.bounds.map(function(dt, st) {
        var ct = dt.pos, Rt = tt(bt(v, xt ? [0, ct] : [ct, 0], _), [d, h]), At = tt(bt(v, xt ? [f, ct] : [ct, c], _), [d, h]);
        return Ie(r, "", Rt, At, o, "clip".concat(ot, "bounds").concat(st), "guideline", "bounds", "bold");
      })), !1));
    }), N(N([], P(R), !1), P(w), !1);
  },
  dragControlCondition: function(t, r) {
    return r.inputEvent && (r.inputEvent.target.getAttribute("class") || "").indexOf("clip") > -1;
  },
  dragStart: function(t, r) {
    var e = t.props, n = e.dragWithClip, i = n === void 0 ? !0 : n;
    return i ? !1 : this.dragControlStart(t, r);
  },
  drag: function(t, r) {
    return this.dragControl(t, M(M({}, r), { isDragTarget: !0 }));
  },
  dragEnd: function(t, r) {
    return this.dragControlEnd(t, r);
  },
  dragControlStart: function(t, r) {
    var e = t.state, n = t.props, i = n.defaultClipPath, a = n.customClipPath, o = e.target, s = e.width, u = e.height, l = r.inputEvent ? r.inputEvent.target : null, f = l && l.getAttribute("class") || "", c = r.datas, v = is(o, s, u, i || "inset", a);
    if (!v)
      return !1;
    var p = v.clipText, d = v.type, h = v.poses, g = H(t, "onClipStart", it(t, r, {
      clipType: d,
      clipStyle: p,
      poses: h.map(function(m) {
        return m.pos;
      })
    }));
    return g === !1 ? (c.isClipStart = !1, !1) : (c.isControl = f && f.indexOf("clip-control") > -1, c.isLine = f.indexOf("clip-line") > -1, c.isArea = f.indexOf("clip-area") > -1 || f.indexOf("clip-ellipse") > -1, c.clipIndex = l ? parseInt(l.getAttribute("data-clip-index"), 10) : -1, c.clipPath = v, c.isClipStart = !0, e.clipPathState = p, jr(t, r), !0);
  },
  dragControl: function(t, r) {
    var e, n, i, a = r.datas, o = r.originalDatas, s = r.isDragTarget;
    if (!a.isClipStart)
      return !1;
    var u = a, l = u.isControl, f = u.isLine, c = u.isArea, v = u.clipIndex, p = u.clipPath;
    if (!p)
      return !1;
    var d = zr(t.props, "clippable"), h = d.keepRatio, g = 0, m = 0, y = o.draggable, b = ar(r);
    s && y ? (e = P(y.prevBeforeDist, 2), g = e[0], m = e[1]) : (n = P(b, 2), g = n[0], m = n[1]);
    var E = [g, m], C = t.state, x = C.width, S = C.height, _ = !c && !l && !f, T = p.type, D = p.poses, O = p.splitter, R = D.map(function(ht) {
      return ht.pos;
    });
    _ && (g = -g, m = -m);
    var w = !l || D[v].direction === "nesw", I = T === "inset" || T === "rect", k = D.map(function() {
      return [0, 0];
    });
    if (l && !w) {
      var F = D[v], L = F.horizontal, A = F.vertical, $ = [
        g * z(L),
        m * z(A)
      ];
      k = Ym(D, v, $, I, h);
    } else
      w && (k = R.map(function() {
        return [g, m];
      }));
    var j = R.map(function(ht, Bt) {
      return lt(ht, k[Bt]);
    }), G = N([], P(j), !1);
    C.snapBoundInfos = null;
    var q = p.type === "circle", U = p.type === "ellipse";
    if (q || U) {
      var W = Ht(j), X = z(W.bottom - W.top), Y = z(U ? W.right - W.left : X), V = j[0][1] + X, J = j[0][0] - Y, nt = j[0][0] + Y;
      q && (G.push([nt, W.bottom]), k.push([1, 0])), G.push([W.left, V]), k.push([0, 1]), G.push([J, W.bottom]), k.push([1, 0]);
    }
    var rt = tl((d.clipHorizontalGuidelines || []).map(function(ht) {
      return vt("".concat(ht), S);
    }), (d.clipVerticalGuidelines || []).map(function(ht) {
      return vt("".concat(ht), x);
    }), x, S), Z = [], K = [];
    if (q || U)
      Z = [G[4][0], G[2][0]], K = [G[1][1], G[3][1]];
    else if (I) {
      var ft = [G[0], G[2], G[4], G[6]], at = [k[0], k[2], k[4], k[6]];
      Z = ft.filter(function(ht, Bt) {
        return at[Bt][0];
      }).map(function(ht) {
        return ht[0];
      }), K = ft.filter(function(ht, Bt) {
        return at[Bt][1];
      }).map(function(ht) {
        return ht[1];
      });
    } else
      Z = G.filter(function(ht, Bt) {
        return k[Bt][0];
      }).map(function(ht) {
        return ht[0];
      }), K = G.filter(function(ht, Bt) {
        return k[Bt][1];
      }).map(function(ht) {
        return ht[1];
      });
    var ot = [0, 0], ut = Yo(rt, d.clipTargetBounds && { left: 0, top: 0, right: x, bottom: S }, Z, K, 5), xt = ut.horizontal, dt = ut.vertical, st = xt.offset, ct = dt.offset;
    if (xt.isBound && (ot[1] += st), dt.isBound && (ot[0] += ct), (U || q) && k[0][0] === 0 && k[0][1] === 0) {
      var W = Ht(j), Rt = W.bottom - W.top, At = U ? W.right - W.left : Rt, It = dt.isBound ? z(ct) : dt.snapIndex === 0 ? -ct : ct, St = xt.isBound ? z(st) : xt.snapIndex === 0 ? -st : st;
      At -= It, Rt -= St, q && (Rt = Hu(dt, xt) > 0 ? Rt : At, At = Rt);
      var Tt = G[0];
      G[1][1] = Tt[1] - Rt, G[2][0] = Tt[0] + At, G[3][1] = Tt[1] + Rt, G[4][0] = Tt[0] - At;
    } else if (I && h && l) {
      var pr = P(Pl(D), 2), dr = pr[0], Ga = pr[1], La = dr && Ga ? dr / Ga : 0, zl = D[v], Xe = zl.direction || "", Ln = G[1][1], V = G[5][1], J = G[7][0], nt = G[3][0];
      z(st) <= z(ct) ? st = Xt(st) * z(ct) / La : ct = Xt(ct) * z(st) * La, Xe.indexOf("w") > -1 ? J -= ct : Xe.indexOf("e") > -1 ? nt -= ct : (J += ct / 2, nt -= ct / 2), Xe.indexOf("n") > -1 ? Ln -= st : Xe.indexOf("s") > -1 ? V -= st : (Ln += st / 2, V -= st / 2);
      var Gl = En(Ln, nt, V, J);
      G.forEach(function($a, $l) {
        var $n;
        $n = P(Gl[$l].pos, 2), $a[0] = $n[0], $a[1] = $n[1];
      });
    } else
      G.forEach(function(ht, Bt) {
        var Na = k[Bt];
        Na[0] && (ht[0] -= ct), Na[1] && (ht[1] -= st);
      });
    var Fa = Ia(t, p, j), Fn = "".concat(T, "(").concat(Fa.join(O), ")");
    if (C.clipPathState = Fn, q || U)
      Z = [G[4][0], G[2][0]], K = [G[1][1], G[3][1]];
    else if (I) {
      var ft = [G[0], G[2], G[4], G[6]];
      Z = ft.map(function(Bt) {
        return Bt[0];
      }), K = ft.map(function(Bt) {
        return Bt[1];
      });
    } else
      Z = G.map(function(ht) {
        return ht[0];
      }), K = G.map(function(ht) {
        return ht[1];
      });
    if (C.snapBoundInfos = Yo(rt, d.clipTargetBounds && { left: 0, top: 0, right: x, bottom: S }, Z, K, 1), y) {
      var Ll = C.is3d, Fl = C.allMatrix, Nl = Ll ? 4 : 3, Nn = ot;
      s && (Nn = [
        E[0] + ot[0] - b[0],
        E[1] + ot[1] - b[1]
      ]), y.deltaOffset = pt(Fl, [Nn[0], Nn[1], 0, 0], Nl);
    }
    return H(t, "onClip", it(t, r, M({ clipEventType: "changed", clipType: T, poses: j, clipStyle: Fn, clipStyles: Fa, distX: g, distY: m }, Gt((i = {}, i[T === "rect" ? "clip" : "clipPath"] = Fn, i), r)))), !0;
  },
  dragControlEnd: function(t, r) {
    this.unset(t);
    var e = r.isDrag, n = r.datas, i = r.isDouble, a = n.isLine, o = n.isClipStart, s = n.isControl;
    return o ? (H(t, "onClipEnd", Wt(t, r, {})), i && (s ? Xm(t, r) : a && Wm(t, r)), i || e) : !1;
  },
  unset: function(t) {
    t.state.clipPathState = "", t.state.snapBoundInfos = null;
  }
}, Vm = {
  name: "originDraggable",
  props: [
    "originDraggable",
    "originRelative"
  ],
  events: [
    "dragOriginStart",
    "dragOrigin",
    "dragOriginEnd"
  ],
  css: [
    `:host[data-able-origindraggable] .control.origin {
pointer-events: auto;
}`
  ],
  dragControlCondition: function(t, r) {
    return r.isRequest ? r.requestAble === "originDraggable" : Dt(r.inputEvent.target, Q("origin"));
  },
  dragControlStart: function(t, r) {
    var e = r.datas;
    jr(t, r);
    var n = it(t, r, {
      dragStart: zt.dragStart(t, new ne().dragStart([0, 0], r))
    }), i = H(t, "onDragOriginStart", n);
    return e.startOrigin = t.state.transformOrigin, e.startTargetOrigin = t.state.targetOrigin, e.prevOrigin = [0, 0], e.isDragOrigin = !0, i === !1 ? (e.isDragOrigin = !1, !1) : n;
  },
  dragControl: function(t, r) {
    var e = r.datas, n = r.isPinch, i = r.isRequest;
    if (!e.isDragOrigin)
      return !1;
    var a = P(ar(r), 2), o = a[0], s = a[1], u = t.state, l = u.width, f = u.height, c = u.offsetMatrix, v = u.targetMatrix, p = u.is3d, d = t.props.originRelative, h = d === void 0 ? !0 : d, g = p ? 4 : 3, m = [o, s];
    if (i) {
      var y = r.distOrigin;
      (y[0] || y[1]) && (m = y);
    }
    var b = lt(e.startOrigin, m), E = lt(e.startTargetOrigin, m), C = tt(m, e.prevOrigin), x = We(c, v, b, g), S = t.getRect(), _ = Ht(Yr(x, l, f, g)), T = [
      S.left - _.left,
      S.top - _.top
    ];
    e.prevOrigin = m;
    var D = [
      Ut(E[0], l, h),
      Ut(E[1], f, h)
    ].join(" "), O = zt.drag(t, Ye(r, t.state, T, !!n, !1)), R = it(t, r, M(M({ width: l, height: f, origin: b, dist: m, delta: C, transformOrigin: D, drag: O }, Gt({
      transformOrigin: D,
      transform: O.transform
    }, r)), { afterTransform: O.transform }));
    return H(t, "onDragOrigin", R), R;
  },
  dragControlEnd: function(t, r) {
    var e = r.datas;
    return e.isDragOrigin ? (H(t, "onDragOriginEnd", Wt(t, r, {})), !0) : !1;
  },
  dragGroupControlCondition: function(t, r) {
    return this.dragControlCondition(t, r);
  },
  dragGroupControlStart: function(t, r) {
    var e = this.dragControlStart(t, r);
    return !!e;
  },
  dragGroupControl: function(t, r) {
    var e = this.dragControl(t, r);
    return e ? (t.transformOrigin = e.transformOrigin, !0) : !1;
  },
  /**
      * @method Moveable.OriginDraggable#request
      * @param {object} e - the OriginDraggable's request parameter
      * @param {number} [e.x] - x position
      * @param {number} [e.y] - y position
      * @param {number} [e.deltaX] - x number to move
      * @param {number} [e.deltaY] - y number to move
      * @param {array} [e.deltaOrigin] - left, top number to move transform-origin
      * @param {array} [e.origin] - transform-origin position
      * @param {number} [e.isInstant] - Whether to execute the request instantly
      * @return {Moveable.Requester} Moveable Requester
      * @example
  
      * // Instantly Request (requestStart - request - requestEnd)
      * // Use Relative Value
      * moveable.request("originDraggable", { deltaX: 10, deltaY: 10 }, true);
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 }, true);
      * // Use Transform Value
      * moveable.request("originDraggable", { deltaOrigin: [10, 0] }, true);
      * moveable.request("originDraggable", { origin: [100, 0] }, true);
      * // requestStart
      * const requester = moveable.request("originDraggable");
      *
      * // request
      * // Use Relative Value
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 });
      * moveable.request("originDraggable", { x: 220, y: 100 });
      * moveable.request("originDraggable", { x: 240, y: 100 });
      *
      * // requestEnd
      * requester.requestEnd();
      */
  request: function(t) {
    var r = {}, e = t.getRect(), n = 0, i = 0, a = e.transformOrigin, o = [0, 0];
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: r };
      },
      request: function(s) {
        return "deltaOrigin" in s ? (o[0] += s.deltaOrigin[0], o[1] += s.deltaOrigin[1]) : "origin" in s ? (o[0] = s.origin[0] - a[0], o[1] = s.origin[1] - a[1]) : ("x" in s ? n = s.x - e.left : "deltaX" in s && (n += s.deltaX), "y" in s ? i = s.y - e.top : "deltaY" in s && (i += s.deltaY)), { datas: r, distX: n, distY: i, distOrigin: o };
      },
      requestEnd: function() {
        return { datas: r, isDrag: !0 };
      }
    };
  }
};
function qm(t, r, e, n) {
  var i = t.filter(function(u) {
    var l = u.virtual, f = u.horizontal;
    return f && !l;
  }).length, a = t.filter(function(u) {
    var l = u.virtual, f = u.vertical;
    return f && !l;
  }).length, o = -1;
  if (r === 0 && (i === 0 ? o = 0 : i === 1 && (o = 1)), r === 2 && (i <= 2 ? o = 2 : i <= 3 && (o = 3)), r === 3 && (a === 0 ? o = 4 : a < 4 && (o = 7)), r === 1 && (a <= 1 ? o = 5 : a <= 2 && (o = 6)), !(o === -1 || !t[o].virtual)) {
    var s = t[o];
    Um(t, o), o < 4 ? s.pos[0] = e : s.pos[1] = n;
  }
}
function Um(t, r) {
  r < 4 ? t.slice(0, r + 1).forEach(function(e) {
    e.virtual = !1;
  }) : (t[0].virtual && (t[0].virtual = !1), t.slice(4, r + 1).forEach(function(e) {
    e.virtual = !1;
  }));
}
function Km(t, r) {
  r < 4 ? t.slice(r, 4).forEach(function(e) {
    e.virtual = !0;
  }) : t.slice(r).forEach(function(e) {
    e.virtual = !0;
  });
}
function as(t, r, e, n, i) {
  n === void 0 && (n = [0, 0]);
  var a = [];
  return !t || t === "0px" ? a = [] : a = br(t), Tl(a, r, e, 0, 0, n, i);
}
function os(t, r, e, n, i) {
  var a = t.state, o = a.width, s = a.height, u = Oa(i, t.props.roundRelative, o, s), l = u.raws, f = u.styles, c = u.radiusPoses, v = Nm(c, l), p = v.horizontals, d = v.verticals, h = f.join(" ");
  a.borderRadiusState = h;
  var g = it(t, r, M({ horizontals: p, verticals: d, borderRadius: h, width: o, height: s, delta: n, dist: e }, Gt({
    borderRadius: h
  }, r)));
  return H(t, "onRound", g), g;
}
function ss(t) {
  var r, e, n = t.getState().style, i = n.borderRadius || "";
  if (!i && t.props.groupable) {
    var a = t.moveables[0], o = t.getTargets()[0];
    o && ((a == null ? void 0 : a.props.target) === o ? (i = (e = (r = t.moveables[0]) === null || r === void 0 ? void 0 : r.state.style.borderRadius) !== null && e !== void 0 ? e : "", n.borderRadius = i) : (i = Ta(o).borderRadius, n.borderRadius = i));
  }
  return i;
}
var Zm = {
  name: "roundable",
  props: [
    "roundable",
    "roundRelative",
    "minRoundControls",
    "maxRoundControls",
    "roundClickable",
    "roundPadding",
    "isDisplayShadowRoundControls"
  ],
  events: [
    "roundStart",
    "round",
    "roundEnd",
    "roundGroupStart",
    "roundGroup",
    "roundGroupEnd"
  ],
  css: [
    `.control.border-radius {
background: #d66;
cursor: pointer;
z-index: 3;
}`,
    `.control.border-radius.vertical {
background: #d6d;
z-index: 2;
}`,
    `.control.border-radius.virtual {
opacity: 0.5;
z-index: 1;
}`,
    `:host.round-line-clickable .line.direction {
cursor: pointer;
}`
  ],
  className: function(t) {
    var r = t.props.roundClickable;
    return r === !0 || r === "line" ? Q("round-line-clickable") : "";
  },
  requestStyle: function() {
    return ["borderRadius"];
  },
  requestChildStyle: function() {
    return ["borderRadius"];
  },
  render: function(t, r) {
    var e = t.getState(), n = e.target, i = e.width, a = e.height, o = e.allMatrix, s = e.is3d, u = e.left, l = e.top, f = e.borderRadiusState, c = t.props, v = c.minRoundControls, p = v === void 0 ? [0, 0] : v, d = c.maxRoundControls, h = d === void 0 ? [4, 4] : d, g = c.zoom, m = c.roundPadding, y = m === void 0 ? 0 : m, b = c.isDisplayShadowRoundControls, E = c.groupable;
    if (!n)
      return null;
    var C = f || ss(t), x = s ? 4 : 3, S = as(C, i, a, p, !0);
    if (!S)
      return null;
    var _ = 0, T = 0, D = E ? [0, 0] : [u, l];
    return S.map(function(O, R) {
      var w = O.horizontal, I = O.vertical, k = O.direction || "", F = N([], P(O.pos), !1);
      T += Math.abs(w), _ += Math.abs(I), w && k.indexOf("n") > -1 && (F[1] -= y), I && k.indexOf("w") > -1 && (F[0] -= y), w && k.indexOf("s") > -1 && (F[1] += y), I && k.indexOf("e") > -1 && (F[0] += y);
      var L = tt(bt(o, F, x), D), A = b && b !== "horizontal", $ = O.vertical ? _ <= h[1] && (A || !O.virtual) : T <= h[0] && (b || !O.virtual);
      return r.createElement("div", { key: "borderRadiusControl".concat(R), className: Q("control", "border-radius", O.vertical ? "vertical" : "", O.virtual ? "virtual" : ""), "data-radius-index": R, style: {
        display: $ ? "block" : "none",
        transform: "translate(".concat(L[0], "px, ").concat(L[1], "px) scale(").concat(g, ")")
      } });
    });
  },
  dragControlCondition: function(t, r) {
    if (!r.inputEvent || r.isRequest)
      return !1;
    var e = r.inputEvent.target.getAttribute("class") || "";
    return e.indexOf("border-radius") > -1 || e.indexOf("moveable-line") > -1 && e.indexOf("moveable-direction") > -1;
  },
  dragGroupControlCondition: function(t, r) {
    return this.dragControlCondition(t, r);
  },
  dragControlStart: function(t, r) {
    var e = r.inputEvent, n = r.datas, i = e.target, a = i.getAttribute("class") || "", o = a.indexOf("border-radius") > -1, s = a.indexOf("moveable-line") > -1 && a.indexOf("moveable-direction") > -1, u = o ? parseInt(i.getAttribute("data-radius-index"), 10) : -1, l = -1;
    if (s) {
      var f = i.getAttribute("data-line-key") || "";
      f && (l = parseInt(f.replace(/render-line-/g, ""), 10), isNaN(l) && (l = -1));
    }
    if (!o && !s)
      return !1;
    var c = it(t, r, {}), v = H(t, "onRoundStart", c);
    if (v === !1)
      return !1;
    n.lineIndex = l, n.controlIndex = u, n.isControl = o, n.isLine = s, jr(t, r);
    var p = t.props, d = p.roundRelative, h = p.minRoundControls, g = h === void 0 ? [0, 0] : h, m = t.state, y = m.width, b = m.height;
    n.isRound = !0, n.prevDist = [0, 0];
    var E = ss(t), C = as(E || "", y, b, g, !0) || [];
    return n.controlPoses = C, m.borderRadiusState = Oa(C, d, y, b).styles.join(" "), c;
  },
  dragControl: function(t, r) {
    var e = r.datas, n = e.controlPoses;
    if (!e.isRound || !e.isControl || !n.length)
      return !1;
    var i = e.controlIndex, a = P(ar(r), 2), o = a[0], s = a[1], u = [o, s], l = tt(u, e.prevDist), f = t.props.maxRoundControls, c = f === void 0 ? [4, 4] : f, v = t.state, p = v.width, d = v.height, h = n[i], g = h.vertical, m = h.horizontal, y = n.map(function(E) {
      var C = E.horizontal, x = E.vertical, S = [
        C * m * u[0],
        x * g * u[1]
      ];
      if (C) {
        if (c[0] === 1)
          return S;
        if (c[0] < 4 && C !== m)
          return S;
      } else {
        if (c[1] === 0)
          return S[1] = x * m * u[0] / p * d, S;
        if (g) {
          if (c[1] === 1)
            return S;
          if (c[1] < 4 && x !== g)
            return S;
        }
      }
      return [0, 0];
    });
    y[i] = u;
    var b = n.map(function(E, C) {
      return M(M({}, E), { pos: lt(E.pos, y[C]) });
    });
    return i < 4 ? b.slice(0, i + 1).forEach(function(E) {
      E.virtual = !1;
    }) : b.slice(4, i + 1).forEach(function(E) {
      E.virtual = !1;
    }), e.prevDist = [o, s], os(t, r, u, l, b);
  },
  dragControlEnd: function(t, r) {
    var e = t.state;
    e.borderRadiusState = "";
    var n = r.datas, i = r.isDouble;
    if (!n.isRound)
      return !1;
    var a = n.isControl, o = n.controlIndex, s = n.isLine, u = n.lineIndex, l = n.controlPoses, f = l.filter(function(m) {
      var y = m.virtual;
      return y;
    }).length, c = t.props.roundClickable, v = c === void 0 ? !0 : c;
    if (i && v) {
      if (a && (v === !0 || v === "control"))
        Km(l, o);
      else if (s && (v === !0 || v === "line")) {
        var p = P(Iu(t, r), 2), d = p[0], h = p[1];
        qm(l, u, d, h);
      }
      f !== l.filter(function(m) {
        var y = m.virtual;
        return y;
      }).length && os(t, r, [0, 0], [0, 0], l);
    }
    var g = Wt(t, r, {});
    return H(t, "onRoundEnd", g), e.borderRadiusState = "", g;
  },
  dragGroupControlStart: function(t, r) {
    var e = this.dragControlStart(t, r);
    if (!e)
      return !1;
    var n = t.moveables, i = t.props.targets, a = Zt(t, "roundable", r), o = M({ targets: t.props.targets, events: a.map(function(s, u) {
      return M(M({}, s), { target: i[u], moveable: n[u], currentTarget: n[u] });
    }) }, e);
    return H(t, "onRoundGroupStart", o), e;
  },
  dragGroupControl: function(t, r) {
    var e = this.dragControl(t, r);
    if (!e)
      return !1;
    var n = t.moveables, i = t.props.targets, a = Zt(t, "roundable", r), o = M({ targets: t.props.targets, events: a.map(function(s, u) {
      return M(M(M({}, s), { target: i[u], moveable: n[u], currentTarget: n[u] }), Gt({
        borderRadius: e.borderRadius
      }, s));
    }) }, e);
    return H(t, "onRoundGroup", o), o;
  },
  dragGroupControlEnd: function(t, r) {
    var e = t.moveables, n = t.props.targets, i = Zt(t, "roundable", r);
    Gn(t, "onRound", function(s) {
      var u = M({ targets: t.props.targets, events: i.map(function(l, f) {
        return M(M(M({}, l), { target: n[f], moveable: e[f], currentTarget: e[f] }), Gt({
          borderRadius: s.borderRadius
        }, l));
      }) }, s);
      H(t, "onRoundGroup", u);
    });
    var a = this.dragControlEnd(t, r);
    if (!a)
      return !1;
    var o = M({ targets: t.props.targets, events: i.map(function(s, u) {
      var l;
      return M(M({}, s), { target: n[u], moveable: e[u], currentTarget: e[u], lastEvent: (l = s.datas) === null || l === void 0 ? void 0 : l.lastEvent });
    }) }, a);
    return H(t, "onRoundGroupEnd", o), o;
  },
  unset: function(t) {
    t.state.borderRadiusState = "";
  }
};
function Jm(t, r) {
  var e = r ? 4 : 3, n = yt(e), i = "matrix".concat(r ? "3d" : "", "(").concat(n.join(","), ")");
  return t === i || t === "matrix(1,0,0,1,0,0)";
}
var Dl = {
  isPinch: !0,
  name: "beforeRenderable",
  props: [],
  events: [
    "beforeRenderStart",
    "beforeRender",
    "beforeRenderEnd",
    "beforeRenderGroupStart",
    "beforeRenderGroup",
    "beforeRenderGroupEnd"
  ],
  dragRelation: "weak",
  setTransform: function(t, r) {
    var e = t.state, n = e.is3d, i = e.targetMatrix, a = e.inlineTransform, o = n ? "matrix3d(".concat(i.join(","), ")") : "matrix(".concat(xu(i, !0), ")"), s = !a || a === "none" ? o : a;
    r.datas.startTransforms = Jm(s, n) ? [] : br(s);
  },
  resetStyle: function(t) {
    var r = t.datas;
    r.nextStyle = {}, r.nextTransforms = t.datas.startTransforms, r.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(t, r) {
    return it(t, r, {
      setTransform: function(e) {
        r.datas.startTransforms = Mt(e) ? e : br(e);
      },
      isPinch: !!r.isPinch
    });
  },
  fillDragParams: function(t, r) {
    return it(t, r, {
      isPinch: !!r.isPinch
    });
  },
  dragStart: function(t, r) {
    this.setTransform(t, r), this.resetStyle(r), H(t, "onBeforeRenderStart", this.fillDragStartParams(t, r));
  },
  drag: function(t, r) {
    r.datas.startTransforms || this.setTransform(t, r), this.resetStyle(r), H(t, "onBeforeRender", it(t, r, {
      isPinch: !!r.isPinch
    }));
  },
  dragEnd: function(t, r) {
    r.datas.startTransforms || (this.setTransform(t, r), this.resetStyle(r)), H(t, "onBeforeRenderEnd", it(t, r, {
      isPinch: !!r.isPinch,
      isDrag: r.isDrag
    }));
  },
  dragGroupStart: function(t, r) {
    var e = this;
    this.dragStart(t, r);
    var n = Zt(t, "beforeRenderable", r), i = t.moveables, a = n.map(function(o, s) {
      var u = i[s];
      return e.setTransform(u, o), e.resetStyle(o), e.fillDragStartParams(u, o);
    });
    H(t, "onBeforeRenderGroupStart", it(t, r, {
      isPinch: !!r.isPinch,
      targets: t.props.targets,
      setTransform: function() {
      },
      events: a
    }));
  },
  dragGroup: function(t, r) {
    var e = this;
    this.drag(t, r);
    var n = Zt(t, "beforeRenderable", r), i = t.moveables, a = n.map(function(o, s) {
      var u = i[s];
      return e.resetStyle(o), e.fillDragParams(u, o);
    });
    H(t, "onBeforeRenderGroup", it(t, r, {
      isPinch: !!r.isPinch,
      targets: t.props.targets,
      events: a
    }));
  },
  dragGroupEnd: function(t, r) {
    this.dragEnd(t, r), H(t, "onBeforeRenderGroupEnd", it(t, r, {
      isPinch: !!r.isPinch,
      isDrag: r.isDrag,
      targets: t.props.targets
    }));
  },
  dragControlStart: function(t, r) {
    return this.dragStart(t, r);
  },
  dragControl: function(t, r) {
    return this.drag(t, r);
  },
  dragControlEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  dragGroupControlStart: function(t, r) {
    return this.dragGroupStart(t, r);
  },
  dragGroupControl: function(t, r) {
    return this.dragGroup(t, r);
  },
  dragGroupControlEnd: function(t, r) {
    return this.dragGroupEnd(t, r);
  }
}, wl = {
  name: "renderable",
  props: [],
  events: [
    "renderStart",
    "render",
    "renderEnd",
    "renderGroupStart",
    "renderGroup",
    "renderGroupEnd"
  ],
  dragRelation: "weak",
  dragStart: function(t, r) {
    H(t, "onRenderStart", it(t, r, {
      isPinch: !!r.isPinch
    }));
  },
  drag: function(t, r) {
    H(t, "onRender", this.fillDragParams(t, r));
  },
  dragAfter: function(t, r) {
    return this.drag(t, r);
  },
  dragEnd: function(t, r) {
    H(t, "onRenderEnd", this.fillDragEndParams(t, r));
  },
  dragGroupStart: function(t, r) {
    H(t, "onRenderGroupStart", it(t, r, {
      isPinch: !!r.isPinch,
      targets: t.props.targets
    }));
  },
  dragGroup: function(t, r) {
    var e = this, n = Zt(t, "beforeRenderable", r), i = t.moveables, a = n.map(function(o, s) {
      var u = i[s];
      return e.fillDragParams(u, o);
    });
    H(t, "onRenderGroup", it(t, r, M(M({ isPinch: !!r.isPinch, targets: t.props.targets, transform: Ze(r), transformObject: {} }, Gt(Je(r))), { events: a })));
  },
  dragGroupEnd: function(t, r) {
    var e = this, n = Zt(t, "beforeRenderable", r), i = t.moveables, a = n.map(function(o, s) {
      var u = i[s];
      return e.fillDragEndParams(u, o);
    });
    H(t, "onRenderGroupEnd", it(t, r, M({ isPinch: !!r.isPinch, isDrag: r.isDrag, targets: t.props.targets, events: a, transformObject: {}, transform: Ze(r) }, Gt(Je(r)))));
  },
  dragControlStart: function(t, r) {
    return this.dragStart(t, r);
  },
  dragControl: function(t, r) {
    return this.drag(t, r);
  },
  dragControlAfter: function(t, r) {
    return this.dragAfter(t, r);
  },
  dragControlEnd: function(t, r) {
    return this.dragEnd(t, r);
  },
  dragGroupControlStart: function(t, r) {
    return this.dragGroupStart(t, r);
  },
  dragGroupControl: function(t, r) {
    return this.dragGroup(t, r);
  },
  dragGroupControlEnd: function(t, r) {
    return this.dragGroupEnd(t, r);
  },
  fillDragParams: function(t, r) {
    var e = {};
    return ee(dn(r) || []).forEach(function(n) {
      e[n.name] = n.functionValue;
    }), it(t, r, M({ isPinch: !!r.isPinch, transformObject: e, transform: Ze(r) }, Gt(Je(r))));
  },
  fillDragEndParams: function(t, r) {
    var e = {};
    return ee(dn(r) || []).forEach(function(n) {
      e[n.name] = n.functionValue;
    }), it(t, r, M({ isPinch: !!r.isPinch, isDrag: r.isDrag, transformObject: e, transform: Ze(r) }, Gt(Je(r))));
  }
};
function Te(t, r, e, n, i, a, o) {
  a.clientDistX = a.distX, a.clientDistY = a.distY;
  var s = i === "Start", u = i === "End", l = i === "After", f = t.state.target, c = a.isRequest, v = n.indexOf("Control") > -1;
  if (!f || s && v && !c && t.areaElement === a.inputEvent.target)
    return !1;
  var p = N([], P(r), !1);
  if (c) {
    var d = a.requestAble;
    p.some(function(R) {
      return R.name === d;
    }) || p.push.apply(p, N([], P(t.props.ables.filter(function(R) {
      return R.name === d;
    })), !1));
  }
  if (!p.length || p.every(function(R) {
    return R.dragRelation;
  }))
    return !1;
  var h = a.inputEvent, g;
  u && h && (g = document.elementFromPoint(a.clientX, a.clientY) || h.target);
  var m = !1, y = function() {
    var R;
    m = !0, (R = a.stop) === null || R === void 0 || R.call(a);
  }, b = s && (!t.targetGesto || !t.controlGesto || !t.targetGesto.isFlag() || !t.controlGesto.isFlag());
  b && t.updateRect(i, !0, !1);
  var E = a.datas, C = v ? "controlGesto" : "targetGesto", x = t[C], S = function(R, w, I) {
    if (!(w in R) || x !== t[C])
      return !1;
    var k = R.name, F = E[k] || (E[k] = {});
    if (s && (F.isEventStart = !I || !R[I] || R[I](t, a)), !F.isEventStart)
      return !1;
    var L = R[w](t, M(M({}, a), { stop: y, datas: F, originalDatas: E, inputTarget: g }));
    return t._emitter.off(), s && L === !1 && (F.isEventStart = !1), L;
  };
  b && p.forEach(function(R) {
    R.unset && R.unset(t);
  }), S(Dl, "drag".concat(n).concat(i));
  var _ = 0, T = 0;
  e.forEach(function(R) {
    if (m)
      return !1;
    var w = "".concat(R).concat(n).concat(i), I = "".concat(R).concat(n, "Condition");
    i === "" && !c && ml(t.state, a);
    var k = p.filter(function(A) {
      return A[w];
    });
    k = k.filter(function(A, $) {
      return A.name && k.indexOf(A) === $;
    });
    var F = k.filter(function(A) {
      return S(A, w, I);
    }), L = F.length;
    m && ++_, L && ++T, !m && s && k.length && !L && (_ += k.filter(function(A) {
      var $ = A.name, j = E[$];
      return j.isEventStart ? A.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!l || T) && S(wl, "drag".concat(n).concat(i));
  var D = x !== t[C] || _ === e.length;
  if ((u || m || D) && (t.state.gestos = {}, t.moveables && t.moveables.forEach(function(R) {
    R.state.gestos = {};
  }), p.forEach(function(R) {
    R.unset && R.unset(t);
  })), s && !D && !c && T && t.props.preventDefault && (a == null || a.preventDefault()), t.isUnmounted || D)
    return !1;
  if (!s && T && !o || u) {
    var O = t.props.flushSync || al;
    O(function() {
      t.updateRect(u ? i : "", !0, !1), t.forceUpdate();
    });
  }
  return !s && !u && !l && T && !o && Te(t, r, e, n, i + "After", a), !0;
}
function Li(t) {
  return function(r) {
    var e, n = r.inputEvent.target, i = t.areaElement, a = t._dragTarget;
    return !a || !((e = t.controlGesto) === null || e === void 0) && e.isFlag() ? !1 : n === a || a.contains(n) || n === i || !t.isMoveableElement(n) && !t.controlBox.contains(n) || Dt(n, "moveable-area") || Dt(n, "moveable-padding") || Dt(n, "moveable-edgeDraggable");
  };
}
function Rl(t, r, e) {
  var n = t.controlBox, i = [], a = t.props, o = a.dragArea, s = t.state.target, u = a.dragTarget;
  return i.push(n), (!o || u) && i.push(r), !o && u && s && r !== s && a.dragTargetSelf && i.push(s), ka(t, i, "targetAbles", e, {
    dragStart: Li(t),
    pinchStart: Li(t)
  });
}
function ka(t, r, e, n, i) {
  i === void 0 && (i = {});
  var a = e === "targetAbles", o = t.props, s = o.pinchOutside, u = o.pinchThreshold, l = o.preventClickEventOnDrag, f = o.preventClickDefault, c = o.checkInput, v = o.dragFocusedInput, p = o.preventDefault, d = p === void 0 ? !0 : p, h = o.dragContainer, g = er(h, !0), m = {
    preventDefault: d,
    preventRightClick: !0,
    preventWheelClick: !0,
    container: g || xr(t.getControlBoxElement()),
    pinchThreshold: u,
    pinchOutside: s,
    preventClickEventOnDrag: a ? l : !1,
    preventClickEventOnDragStart: a ? f : !1,
    preventClickEventByCondition: a ? null : function(E) {
      return t.controlBox.contains(E.target);
    },
    checkInput: a ? c : !1,
    dragFocusedInput: v
  }, y = new Tg(r, m), b = n === "Control";
  return ["drag", "pinch"].forEach(function(E) {
    ["Start", "", "End"].forEach(function(C) {
      y.on("".concat(E).concat(C), function(x) {
        var S, _ = x.eventType, T = E === "drag" && x.isPinch;
        if (i[_] && !i[_](x)) {
          x.stop();
          return;
        }
        if (!T) {
          var D = E === "drag" ? [E] : ["drag", E], O = N([], P(t[e]), !1), R = Te(t, O, D, n, C, x);
          R ? (t.props.stopPropagation || C === "Start" && b) && ((S = x == null ? void 0 : x.inputEvent) === null || S === void 0 || S.stopPropagation()) : x.stop();
        }
      });
    });
  }), y;
}
var Qm = /* @__PURE__ */ function() {
  function t(r, e, n) {
    var i = this;
    this.target = r, this.moveable = e, this.eventName = n, this.ables = [], this._onEvent = function(a) {
      var o = i.eventName, s = i.moveable;
      s.state.disableNativeEvent || i.ables.forEach(function(u) {
        u[o](s, {
          inputEvent: a
        });
      });
    }, r.addEventListener(n.toLowerCase(), this._onEvent);
  }
  return t.prototype.setAbles = function(r) {
    this.ables = r;
  }, t.prototype.destroy = function() {
    this.target.removeEventListener(this.eventName.toLowerCase(), this._onEvent), this.target = null, this.moveable = null;
  }, t;
}();
function t1(t, r, e, n) {
  var i;
  e === void 0 && (e = r);
  var a = Lu(t, r), o = a.matrixes, s = a.is3d, u = a.targetMatrix, l = a.transformOrigin, f = a.targetOrigin, c = a.offsetContainer, v = a.hasFixed, p = a.zoom, d = h0(c, e), h = d.matrixes, g = d.is3d, m = d.offsetContainer, y = d.zoom, b = n || g || s, E = b ? 4 : 3, C = t.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in t, x = u, S = yt(E), _ = yt(E), T = yt(E), D = yt(E), O = o.length, R = h.map(function($) {
    return M(M({}, $), { matrix: $.matrix ? N([], P($.matrix), !1) : void 0 });
  }).reverse();
  o.reverse(), !s && b && (x = Qt(x, 3, 4), Ai(o)), !g && b && Ai(R), R.forEach(function($) {
    _ = pt(_, $.matrix, E);
  });
  var w = e || _r(t), I = ((i = R[0]) === null || i === void 0 ? void 0 : i.target) || ke(w, w, !0).offsetParent, k = R.slice(1).reduce(function($, j) {
    return pt($, j.matrix, E);
  }, yt(E));
  o.forEach(function($, j) {
    if (O - 2 === j && (T = S.slice()), O - 1 === j && (D = S.slice()), !$.matrix) {
      var G = o[j + 1], q = mm($, G, I, E, pt(k, S, E));
      $.matrix = Ar(q, E);
    }
    S = pt(S, $.matrix, E);
  });
  var F = !C && s;
  x || (x = yt(F ? 4 : 3));
  var L = zn(C && x.length === 16 ? Qt(x, 4, 3) : x, F), A = _;
  return _ = mu(_, E, E), {
    hasZoom: p !== 1 || y !== 1,
    hasFixed: v,
    matrixes: o,
    rootMatrix: _,
    originalRootMatrix: A,
    beforeMatrix: T,
    offsetMatrix: D,
    allMatrix: S,
    targetMatrix: x,
    targetTransform: L,
    inlineTransform: t.style.transform,
    transformOrigin: l,
    targetOrigin: f,
    is3d: b,
    offsetContainer: c,
    offsetRootContainer: m
  };
}
function r1(t, r, e, n) {
  e === void 0 && (e = r);
  var i = 0, a = 0, o = 0, s = {}, u = ll(t);
  if (t && (i = u.offsetWidth, a = u.offsetHeight), t) {
    var l = t1(t, r, e, n), f = Qr(l.allMatrix, l.transformOrigin, i, a);
    s = M(M({}, l), f);
    var c = Qr(l.allMatrix, [50, 50], 100, 100);
    o = fl([c.pos1, c.pos2], c.direction);
  }
  var v = n ? 4 : 3;
  return M(M(M({ hasZoom: !1, width: i, height: a, rotation: o }, u), { originalRootMatrix: yt(v), rootMatrix: yt(v), beforeMatrix: yt(v), offsetMatrix: yt(v), allMatrix: yt(v), targetMatrix: yt(v), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !!n, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), s);
}
function Fi(t, r, e, n, i, a) {
  a === void 0 && (a = []);
  var o = 1, s = [0, 0], u = tn(), l = tn(), f = tn(), c = tn(), v = [0, 0], p = {}, d = r1(r, e, i, !0);
  if (r) {
    var h = jt(r);
    a.forEach(function(R) {
      p[R] = h(R);
    });
    var g = d.is3d ? 4 : 3, m = Qr(d.offsetMatrix, lt(d.transformOrigin, yu(d.targetMatrix, g)), d.width, d.height);
    o = m.direction, s = lt(m.origin, [m.left - d.left, m.top - d.top]), c = Me(d.offsetRootContainer);
    var y = ke(n, n, !0).offsetParent || d.offsetRootContainer;
    if (d.hasZoom) {
      var b = Qr(pt(d.originalRootMatrix, d.allMatrix), d.transformOrigin, d.width, d.height), E = Qr(d.originalRootMatrix, yn(jt(y)("transformOrigin")).map(function(R) {
        return parseFloat(R);
      }), y.offsetWidth, y.offsetHeight);
      if (u = ii(b, c), f = ii(E, c, y, !0), t) {
        var C = b.left, x = b.top;
        l = ii({
          left: C,
          top: x,
          bottom: x,
          right: x
        }, c);
      }
    } else {
      u = Me(r), f = d0(y), t && (l = Me(t));
      var S = f.left, _ = f.top, T = f.clientLeft, D = f.clientTop, O = [
        u.left - S,
        u.top - _
      ];
      v = tt(oe(d.rootMatrix, O, 4), [T + d.left, D + d.top]);
    }
  }
  return M({ targetClientRect: u, containerClientRect: f, moveableClientRect: l, rootContainerClientRect: c, beforeDirection: o, beforeOrigin: s, originalBeforeOrigin: s, target: r, style: p, offsetDelta: v }, d);
}
function us(t) {
  var r = t.pos1, e = t.pos2, n = t.pos3, i = t.pos4;
  if (!r || !e || !n || !i)
    return null;
  var a = Br([r, e, n, i]), o = [a.minX, a.minY], s = tt(t.origin, o);
  return r = tt(r, o), e = tt(e, o), n = tt(n, o), i = tt(i, o), M(M({}, t), {
    left: t.left,
    top: t.top,
    posDelta: o,
    pos1: r,
    pos2: e,
    pos3: n,
    pos4: i,
    origin: s,
    beforeOrigin: s,
    // originalBeforeOrigin: origin,
    isPersisted: !0
  });
}
var se = /* @__PURE__ */ function(t) {
  je(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.state = M({ container: null, gestos: {}, renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]], disableNativeEvent: !1, posDelta: [0, 0] }, Fi(null)), e.renderState = {}, e.enabledAbles = [], e.targetAbles = [], e.controlAbles = [], e.rotation = 0, e.scale = [1, 1], e.isMoveableMounted = !1, e.isUnmounted = !1, e.events = {
      mouseEnter: null,
      mouseLeave: null
    }, e._emitter = new Dn(), e._prevOriginalDragTarget = null, e._originalDragTarget = null, e._prevDragTarget = null, e._dragTarget = null, e._prevPropTarget = null, e._propTarget = null, e._prevDragArea = !1, e._isPropTargetChanged = !1, e._hasFirstTarget = !1, e._reiszeObserver = null, e._observerId = 0, e._mutationObserver = null, e._rootContainer = null, e._viewContainer = null, e._viewClassNames = [], e._store = {}, e.checkUpdateRect = function() {
      if (!e.isDragging()) {
        var n = e.props.parentMoveable;
        if (n) {
          n.checkUpdateRect();
          return;
        }
        ph(e._observerId), e._observerId = Vs(function() {
          e.isDragging() || e.updateRect();
        });
      }
    }, e._onPreventClick = function(n) {
      n.stopPropagation(), n.preventDefault();
    }, e;
  }
  return r.prototype.render = function() {
    var e = this.props, n = this.getState(), i = e.parentPosition, a = e.className, o = e.target, s = e.zoom, u = e.cspNonce, l = e.translateZ, f = e.cssStyled, c = e.groupable, v = e.linePadding, p = e.controlPadding;
    this._checkUpdateRootContainer(), this.checkUpdate(), this.updateRenderPoses();
    var d = P(i || [0, 0], 2), h = d[0], g = d[1], m = n.left, y = n.top, b = n.target, E = n.direction, C = n.hasFixed, x = n.offsetDelta, S = e.targets, _ = this.isDragging(), T = {};
    this.getEnabledAbles().forEach(function(k) {
      T["data-able-".concat(k.name.toLowerCase())] = !0;
    });
    var D = this._getAbleClassName(), O = S && S.length && (b || c) || o || !this._hasFirstTarget && this.state.isPersisted, R = this.controlBox || this.props.firstRenderState || this.props.persistData, w = [m - h, y - g];
    !c && e.useAccuratePosition && (w[0] += x[0], w[1] += x[1]);
    var I = {
      position: C ? "fixed" : "absolute",
      display: O ? "block" : "none",
      visibility: R ? "visible" : "hidden",
      transform: "translate3d(".concat(w[0], "px, ").concat(w[1], "px, ").concat(l, ")"),
      "--zoom": s,
      "--zoompx": "".concat(s, "px")
    };
    return v && (I["--moveable-line-padding"] = v), p && (I["--moveable-control-padding"] = p), Kt(
      f,
      M({ cspNonce: u, ref: or(this, "controlBox"), className: "".concat(Q("control-box", E === -1 ? "reverse" : "", _ ? "dragging" : ""), " ").concat(D, " ").concat(a) }, T, { onClick: this._onPreventClick, style: I }),
      this.renderAbles(),
      this._renderLines()
    );
  }, r.prototype.componentDidMount = function() {
    this.isMoveableMounted = !0, this.isUnmounted = !1;
    var e = this.props, n = e.parentMoveable, i = e.container;
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateTargets(), this._updateNativeEvents(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(this.props), !i && !n && !this.state.isPersisted && (this.updateRect("", !1, !1), this.forceUpdate());
  }, r.prototype.componentDidUpdate = function(e) {
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateNativeEvents(), this._updateTargets(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(e);
  }, r.prototype.componentWillUnmount = function() {
    var e, n;
    this.isMoveableMounted = !1, this.isUnmounted = !0, this._emitter.off(), (e = this._reiszeObserver) === null || e === void 0 || e.disconnect(), (n = this._mutationObserver) === null || n === void 0 || n.disconnect();
    var i = this._viewContainer;
    i && this._changeAbleViewClassNames([]), Ur(this, !1), Ur(this, !0);
    var a = this.events;
    for (var o in a) {
      var s = a[o];
      s && s.destroy();
    }
  }, r.prototype.getTargets = function() {
    var e = this.props.target;
    return e ? [e] : [];
  }, r.prototype.getAble = function(e) {
    var n = this.props.ables || [];
    return $t(n, function(i) {
      return i.name === e;
    });
  }, r.prototype.getContainer = function() {
    var e = this.props, n = e.parentMoveable, i = e.wrapperMoveable, a = e.container;
    return a || i && i.getContainer() || n && n.getContainer() || this.controlBox.parentElement;
  }, r.prototype.getControlBoxElement = function() {
    return this.controlBox;
  }, r.prototype.getDragElement = function() {
    return this._dragTarget;
  }, r.prototype.isMoveableElement = function(e) {
    var n;
    return e && (((n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "class")) || "").indexOf(da) > -1;
  }, r.prototype.dragStart = function(e) {
    var n = this.targetGesto, i = this.controlGesto;
    return n && Li(this)({ inputEvent: e }) ? n.isFlag() || n.triggerDragStart(e) : i && this.isMoveableElement(e.target) && (i.isFlag() || i.triggerDragStart(e)), this;
  }, r.prototype.hitTest = function(e) {
    var n = this.state, i = n.target, a = n.pos1, o = n.pos2, s = n.pos3, u = n.pos4, l = n.targetClientRect;
    if (!i)
      return 0;
    var f;
    if (fe(e)) {
      var c = e.getBoundingClientRect();
      f = {
        left: c.left,
        top: c.top,
        width: c.width,
        height: c.height
      };
    } else
      f = M({ width: 0, height: 0 }, e);
    var v = f.left, p = f.top, d = f.width, h = f.height, g = Io([a, o, u, s], l), m = bg(g, [
      [v, p],
      [v + d, p],
      [v + d, p + h],
      [v, p + h]
    ]), y = Su(g);
    return !m || !y ? 0 : Math.min(100, m / y * 100);
  }, r.prototype.isInside = function(e, n) {
    var i = this.state, a = i.target, o = i.pos1, s = i.pos2, u = i.pos3, l = i.pos4, f = i.targetClientRect;
    return a ? Ei([e, n], Io([o, s, l, u], f)) : !1;
  }, r.prototype.updateRect = function(e, n, i) {
    i === void 0 && (i = !0);
    var a = this.props, o = !a.parentPosition && !a.wrapperMoveable;
    o && ie(!0);
    var s = a.parentMoveable, u = this.state, l = u.target || a.target, f = this.getContainer(), c = s ? s._rootContainer : this._rootContainer, v = Fi(this.controlBox, l, f, f, c || f, this._getRequestStyles());
    if (!l && this._hasFirstTarget && a.persistData) {
      var p = us(a.persistData);
      for (var d in p)
        v[d] = p[d];
    }
    o && ie(), this.updateState(v, s ? !1 : i);
  }, r.prototype.isDragging = function(e) {
    var n, i, a = this.targetGesto, o = this.controlGesto;
    if (a != null && a.isFlag()) {
      if (!e)
        return !0;
      var s = a.getEventData();
      return !!(!((n = s[e]) === null || n === void 0) && n.isEventStart);
    }
    if (o != null && o.isFlag()) {
      if (!e)
        return !0;
      var s = o.getEventData();
      return !!(!((i = s[e]) === null || i === void 0) && i.isEventStart);
    }
    return !1;
  }, r.prototype.updateTarget = function(e) {
    this.updateRect(e, !0);
  }, r.prototype.getRect = function() {
    var e = this.state, n = qt(this.state), i = P(n, 4), a = i[0], o = i[1], s = i[2], u = i[3], l = Ht(n), f = e.width, c = e.height, v = l.width, p = l.height, d = l.left, h = l.top, g = [e.left, e.top], m = lt(g, e.origin), y = lt(g, e.beforeOrigin), b = e.transformOrigin;
    return {
      width: v,
      height: p,
      left: d,
      top: h,
      pos1: a,
      pos2: o,
      pos3: s,
      pos4: u,
      offsetWidth: f,
      offsetHeight: c,
      beforeOrigin: y,
      origin: m,
      transformOrigin: b,
      rotation: this.getRotation()
    };
  }, r.prototype.getManager = function() {
    return this;
  }, r.prototype.stopDrag = function(e) {
    if (!e || e === "target") {
      var n = this.targetGesto;
      (n == null ? void 0 : n.isIdle()) === !1 && Bi(this, !1), n == null || n.stop();
    }
    if (!e || e === "control") {
      var n = this.controlGesto;
      (n == null ? void 0 : n.isIdle()) === !1 && Bi(this, !0), n == null || n.stop();
    }
  }, r.prototype.getRotation = function() {
    var e = this.state, n = e.pos1, i = e.pos2, a = e.direction;
    return _m(n, i, a);
  }, r.prototype.request = function(e, n, i) {
    n === void 0 && (n = {});
    var a = this, o = a.props, s = o.parentMoveable || o.wrapperMoveable || a, u = s.props.ables, l = o.groupable, f = $t(u, function(m) {
      return m.name === e;
    });
    if (this.isDragging() || !f || !f.request)
      return {
        request: function() {
          return this;
        },
        requestEnd: function() {
          return this;
        }
      };
    var c = f.request(a), v = i || n.isInstant, p = c.isControl ? "controlAbles" : "targetAbles", d = "".concat(l ? "Group" : "").concat(c.isControl ? "Control" : ""), h = N([], P(s[p]), !1), g = {
      request: function(m) {
        return Te(a, h, ["drag"], d, "", M(M({}, c.request(m)), { requestAble: e, isRequest: !0 }), v), g;
      },
      requestEnd: function() {
        return Te(a, h, ["drag"], d, "End", M(M({}, c.requestEnd()), { requestAble: e, isRequest: !0 }), v), g;
      }
    };
    return Te(a, h, ["drag"], d, "Start", M(M({}, c.requestStart(n)), { requestAble: e, isRequest: !0 }), v), v ? g.request(n).requestEnd() : g;
  }, r.prototype.getMoveables = function() {
    return [this];
  }, r.prototype.destroy = function() {
    this.componentWillUnmount();
  }, r.prototype.updateRenderPoses = function() {
    var e = this.getState(), n = this.props, i = n.padding, a = e.originalBeforeOrigin, o = e.transformOrigin, s = e.allMatrix, u = e.is3d, l = e.pos1, f = e.pos2, c = e.pos3, v = e.pos4, p = e.left, d = e.top, h = e.isPersisted;
    if (!i) {
      e.renderPoses = [
        l,
        f,
        c,
        v
      ];
      return;
    }
    var g = El(i), m = g.left, y = g.top, b = g.bottom, E = g.right, C = u ? 4 : 3, x = [];
    h ? x = o : this.controlBox && n.groupable ? x = a : x = lt(a, [p, d]);
    var S = vn(C, Ar(x.map(function(_) {
      return -_;
    }), C), s, Ar(o, C));
    e.renderPoses = [
      en(S, l, [-m, -y], C),
      en(S, f, [E, -y], C),
      en(S, c, [-m, b], C),
      en(S, v, [E, b], C)
    ];
  }, r.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1;
    var e = this.props, n = e.target, i = e.container, a = e.parentMoveable, o = this.state, s = o.target, u = o.container;
    if (!(!s && !n)) {
      this.updateAbles();
      var l = !zi(s, n), f = l || !zi(u, i);
      if (f) {
        var c = i || this.controlBox;
        c && this.unsetAbles(), this.updateState({ target: n, container: i }), !a && c && this.updateRect("End", !1, !1), this._isPropTargetChanged = l;
      }
    }
  }, r.prototype.waitToChangeTarget = function() {
    return new Promise(function() {
    });
  }, r.prototype.triggerEvent = function(e, n) {
    var i = this.props;
    if (this._emitter.trigger(e, n), i.parentMoveable && n.isRequest && !n.isRequestChild)
      return i.parentMoveable.triggerEvent(e, n, !0);
    var a = i[e];
    return a && a(n);
  }, r.prototype.useCSS = function(e, n) {
    var i = this.props.customStyledMap, a = e + n;
    return i[a] || (i[a] = Mu(e, n)), i[a];
  }, r.prototype.getState = function() {
    var e, n = this.props;
    (n.target || !((e = n.targets) === null || e === void 0) && e.length) && (this._hasFirstTarget = !0);
    var i = this.controlBox, a = n.persistData, o = n.firstRenderState;
    if (o && !i)
      return o;
    if (!this._hasFirstTarget && a) {
      var s = us(a);
      if (s)
        return this.updateState(s, !1), this.state;
    }
    return this.state.isPersisted = !1, this.state;
  }, r.prototype.updateSelectors = function() {
  }, r.prototype.unsetAbles = function() {
    var e = this;
    this.targetAbles.forEach(function(n) {
      n.unset && n.unset(e);
    });
  }, r.prototype.updateAbles = function(e, n) {
    e === void 0 && (e = this.props.ables), n === void 0 && (n = "");
    var i = this.props, a = i.triggerAblesSimultaneously, o = this.getEnabledAbles(e), s = "drag".concat(n, "Start"), u = "pinch".concat(n, "Start"), l = "drag".concat(n, "ControlStart"), f = rn(o, [s, u], a), c = rn(o, [l], a);
    this.enabledAbles = o, this.targetAbles = f, this.controlAbles = c;
  }, r.prototype.updateState = function(e, n) {
    if (n) {
      if (this.isUnmounted)
        return;
      this.setState(e);
    } else {
      var i = this.state;
      for (var a in e)
        i[a] = e[a];
    }
  }, r.prototype.getEnabledAbles = function(e) {
    e === void 0 && (e = this.props.ables);
    var n = this.props;
    return e.filter(function(i) {
      return i && (i.always && n[i.name] !== !1 || n[i.name]);
    });
  }, r.prototype.renderAbles = function() {
    var e = this, n = this.props, i = n.triggerAblesSimultaneously, a = {
      createElement: Kt
    };
    return this.renderState = {}, Em(gl(rn(this.getEnabledAbles(), ["render"], i).map(function(o) {
      var s = o.render;
      return s(e, a) || [];
    })).filter(function(o) {
      return o;
    }), function(o) {
      var s = o.key;
      return s;
    }).map(function(o) {
      return o[0];
    });
  }, r.prototype.updateCheckInput = function() {
    this.targetGesto && (this.targetGesto.options.checkInput = this.props.checkInput);
  }, r.prototype._getRequestStyles = function() {
    var e = this.getEnabledAbles().reduce(function(n, i) {
      var a, o, s = (o = (a = i.requestStyle) === null || a === void 0 ? void 0 : a.call(i)) !== null && o !== void 0 ? o : [];
      return N(N([], P(n), !1), P(s), !1);
    }, N([], P(this.props.requestStyles || []), !1));
    return e;
  }, r.prototype._updateObserver = function(e) {
    this._updateResizeObserver(e), this._updateMutationObserver(e);
  }, r.prototype._updateEvents = function() {
    var e = this.controlBox, n = this.targetAbles.length, i = this.controlAbles.length, a = this._dragTarget, o = !n && this.targetGesto || this._isTargetChanged(!0);
    o && (Ur(this, !1), this.updateState({ gestos: {} })), i || Ur(this, !0), a && n && !this.targetGesto && (this.targetGesto = Rl(this, a, "")), !this.controlGesto && i && (this.controlGesto = ka(this, e, "controlAbles", "Control"));
  }, r.prototype._updateTargets = function() {
    var e = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = e.dragArea, this._propTarget = e.target, this._originalDragTarget = e.dragTarget || e.target, this._dragTarget = er(this._originalDragTarget, !0);
  }, r.prototype._renderLines = function() {
    var e = this.props, n = e, i = n.zoom, a = n.hideDefaultLines, o = n.hideChildMoveableDefaultLines, s = n.parentMoveable;
    if (a || s && o)
      return [];
    var u = this.getState().renderPoses, l = {
      createElement: Kt
    };
    return [
      [0, 1],
      [1, 3],
      [3, 2],
      [2, 0]
    ].map(function(f, c) {
      var v = P(f, 2), p = v[0], d = v[1];
      return Ie(l, "", u[p], u[d], i, "render-line-".concat(c));
    });
  }, r.prototype._isTargetChanged = function(e) {
    var n = this.props, i = n.dragTarget || n.target, a = this._prevOriginalDragTarget, o = this._prevDragArea, s = n.dragArea, u = !s && a !== i, l = (e || s) && o !== s;
    return u || l || this._prevPropTarget != this._propTarget;
  }, r.prototype._updateNativeEvents = function() {
    var e = this, n = this.props, i = n.dragArea ? this.areaElement : this.state.target, a = this.events, o = cr(a);
    if (this._isTargetChanged())
      for (var s in a) {
        var u = a[s];
        u && u.destroy(), a[s] = null;
      }
    if (i) {
      var l = this.enabledAbles;
      o.forEach(function(f) {
        var c = rn(l, [f]), v = c.length > 0, p = a[f];
        if (!v) {
          p && (p.destroy(), a[f] = null);
          return;
        }
        p || (p = new Qm(i, e, f), a[f] = p), p.setAbles(c);
      });
    }
  }, r.prototype._checkUpdateRootContainer = function() {
    var e = this.props.rootContainer;
    !this._rootContainer && e && (this._rootContainer = er(e, !0));
  }, r.prototype._checkUpdateViewContainer = function() {
    var e = this.props.viewContainer;
    !this._viewContainer && e && (this._viewContainer = er(e, !0));
    var n = this._viewContainer;
    n && this._changeAbleViewClassNames(N(N([], P(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? Om : ""
    ], !1));
  }, r.prototype._changeAbleViewClassNames = function(e) {
    var n = this._viewContainer, i = hl(e.filter(Boolean), function(l) {
      return l;
    }).map(function(l) {
      var f = P(l, 1), c = f[0];
      return c;
    }), a = this._viewClassNames, o = Ge(a, i), s = o.removed, u = o.added;
    s.forEach(function(l) {
      Zs(n, a[l]);
    }), u.forEach(function(l) {
      Ks(n, i[l]);
    }), this._viewClassNames = i;
  }, r.prototype._getAbleViewClassNames = function() {
    var e = this;
    return (this.getEnabledAbles().map(function(n) {
      var i;
      return ((i = n.viewClassName) === null || i === void 0 ? void 0 : i.call(n, e)) || "";
    }).join(" ") + " ".concat(this._getAbleClassName("-view"))).split(/\s+/g);
  }, r.prototype._getAbleClassName = function(e) {
    var n = this;
    e === void 0 && (e = "");
    var i = this.getEnabledAbles(), a = this.targetGesto, o = this.controlGesto, s = a != null && a.isFlag() ? a.getEventData() : {}, u = o != null && o.isFlag() ? o.getEventData() : {};
    return i.map(function(l) {
      var f, c, v, p = l.name, d = ((f = l.className) === null || f === void 0 ? void 0 : f.call(l, n)) || "";
      return (!((c = s[p]) === null || c === void 0) && c.isEventStart || !((v = u[p]) === null || v === void 0) && v.isEventStart) && (d += " ".concat(Q("".concat(p).concat(e, "-dragging")))), d.trim();
    }).filter(Boolean).join(" ");
  }, r.prototype._updateResizeObserver = function(e) {
    var n, i = this.props, a = i.target, o = xr(this.getControlBoxElement());
    if (!o.ResizeObserver || !a || !i.useResizeObserver) {
      (n = this._reiszeObserver) === null || n === void 0 || n.disconnect();
      return;
    }
    if (!(e.target === a && this._reiszeObserver)) {
      var s = new o.ResizeObserver(this.checkUpdateRect);
      s.observe(a, {
        box: "border-box"
      }), this._reiszeObserver = s;
    }
  }, r.prototype._updateMutationObserver = function(e) {
    var n = this, i, a = this.props, o = a.target, s = xr(this.getControlBoxElement());
    if (!s.MutationObserver || !o || !a.useMutationObserver) {
      (i = this._mutationObserver) === null || i === void 0 || i.disconnect();
      return;
    }
    if (!(e.target === o && this._mutationObserver)) {
      var u = new s.MutationObserver(function(l) {
        var f, c;
        try {
          for (var v = Gg(l), p = v.next(); !p.done; p = v.next()) {
            var d = p.value;
            d.type === "attributes" && d.attributeName === "style" && n.checkUpdateRect();
          }
        } catch (h) {
          f = { error: h };
        } finally {
          try {
            p && !p.done && (c = v.return) && c.call(v);
          } finally {
            if (f)
              throw f.error;
          }
        }
      });
      u.observe(o, {
        attributes: !0
      }), this._mutationObserver = u;
    }
  }, r.defaultProps = {
    dragTargetSelf: !1,
    target: null,
    dragTarget: null,
    container: null,
    rootContainer: null,
    origin: !0,
    parentMoveable: null,
    wrapperMoveable: null,
    isWrapperMounted: !1,
    parentPosition: null,
    warpSelf: !1,
    svgOrigin: "",
    dragContainer: null,
    useResizeObserver: !1,
    useMutationObserver: !1,
    preventDefault: !0,
    linePadding: 0,
    controlPadding: 0,
    ables: [],
    pinchThreshold: 20,
    dragArea: !1,
    passDragArea: !1,
    transformOrigin: "",
    className: "",
    zoom: 1,
    triggerAblesSimultaneously: !1,
    padding: {},
    pinchOutside: !0,
    checkInput: !1,
    dragFocusedInput: !1,
    groupable: !1,
    hideDefaultLines: !1,
    cspNonce: "",
    translateZ: 0,
    cssStyled: null,
    customStyledMap: {},
    props: {},
    stopPropagation: !1,
    preventClickDefault: !1,
    preventClickEventOnDrag: !0,
    flushSync: al,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, r;
}(iu), Aa = {
  name: "groupable",
  props: [
    "defaultGroupRotate",
    "useDefaultGroupRotate",
    "defaultGroupOrigin",
    "groupable",
    "groupableProps",
    "targetGroups",
    "hideChildMoveableDefaultLines"
  ],
  events: [],
  render: function(t, r) {
    var e, n = t.props, i = n.targets || [], a = t.getState(), o = a.left, s = a.top, u = a.isPersisted, l = n.zoom || 1, f = t.renderGroupRects, c = ((e = n.persistData) === null || e === void 0 ? void 0 : e.children) || [];
    u ? i = c.map(function() {
      return null;
    }) : c = [];
    var v = Kr(t, "parentPosition", [o, s], function(d) {
      return d.join(",");
    }), p = Kr(t, "requestStyles", t.getRequestChildStyles(), function(d) {
      return d.join(",");
    });
    return t.moveables = t.moveables.slice(0, i.length), N(N([], P(i.map(function(d, h) {
      return r.createElement(se, { key: "moveable" + h, ref: Ys(t, "moveables", h), target: d, origin: !1, requestStyles: p, cssStyled: n.cssStyled, customStyledMap: n.customStyledMap, useResizeObserver: n.useResizeObserver, useMutationObserver: n.useMutationObserver, hideChildMoveableDefaultLines: n.hideChildMoveableDefaultLines, parentMoveable: t, parentPosition: [o, s], persistData: c[h], zoom: l });
    })), !1), P(gl(f.map(function(d, h) {
      var g = d.pos1, m = d.pos2, y = d.pos3, b = d.pos4, E = [g, m, y, b];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(C, x) {
        var S = P(C, 2), _ = S[0], T = S[1];
        return Ie(r, "", tt(E[_], v), tt(E[T], v), l, "group-rect-".concat(h, "-").concat(x));
      });
    }))), !1);
  }
}, e1 = ce("clickable", {
  props: [
    "clickable"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  always: !0,
  dragRelation: "weak",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dragStart: function() {
  },
  dragControlStart: function() {
  },
  dragGroupStart: function(t, r) {
    r.datas.inputTarget = r.inputEvent && r.inputEvent.target;
  },
  dragEnd: function(t, r) {
    var e = t.props.target, n = r.inputEvent, i = r.inputTarget, a = t.isMoveableElement(i), o = !a && t.controlBox.contains(i);
    if (!(!n || !i || r.isDrag || t.isMoveableElement(i) || o)) {
      var s = e.contains(i);
      H(t, "onClick", it(t, r, {
        isDouble: r.isDouble,
        inputTarget: i,
        isTarget: e === i,
        moveableTarget: t.props.target,
        containsTarget: s
      }));
    }
  },
  dragGroupEnd: function(t, r) {
    var e = r.inputEvent, n = r.inputTarget;
    if (!(!e || !n || r.isDrag || t.isMoveableElement(n) || r.datas.inputTarget === n)) {
      var i = t.props.targets, a = i.indexOf(n), o = a > -1, s = !1;
      a === -1 && (a = fr(i, function(u) {
        return u.contains(n);
      }), s = a > -1), H(t, "onClickGroup", it(t, r, {
        isDouble: r.isDouble,
        targets: i,
        inputTarget: n,
        targetIndex: a,
        isTarget: o,
        containsTarget: s,
        moveableTarget: i[a]
      }));
    }
  },
  dragControlEnd: function(t, r) {
    this.dragEnd(t, r);
  },
  dragGroupControlEnd: function(t, r) {
    this.dragEnd(t, r);
  }
});
function Wr(t) {
  var r = t.originalDatas.draggable;
  return r || (t.originalDatas.draggable = {}, r = t.originalDatas.draggable), M(M({}, t), { datas: r });
}
var n1 = ce("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(t, r) {
    var e = t.props, n = e.edgeDraggable;
    return n ? $u(r, "edgeDraggable", n, t.getState().renderPoses, e.zoom) : [];
  },
  dragCondition: function(t, r) {
    var e, n = t.props, i = (e = r.inputEvent) === null || e === void 0 ? void 0 : e.target;
    return !n.edgeDraggable || !i ? !1 : !n.draggable && Dt(i, Q("direction")) && Dt(i, Q("edge")) && Dt(i, Q("edgeDraggable"));
  },
  dragStart: function(t, r) {
    return zt.dragStart(t, Wr(r));
  },
  drag: function(t, r) {
    return zt.drag(t, Wr(r));
  },
  dragEnd: function(t, r) {
    return zt.dragEnd(t, Wr(r));
  },
  dragGroupCondition: function(t, r) {
    var e, n = t.props, i = (e = r.inputEvent) === null || e === void 0 ? void 0 : e.target;
    return !n.edgeDraggable || !i ? !1 : !n.draggable && Dt(i, Q("direction")) && Dt(i, Q("line"));
  },
  dragGroupStart: function(t, r) {
    return zt.dragGroupStart(t, Wr(r));
  },
  dragGroup: function(t, r) {
    return zt.dragGroup(t, Wr(r));
  },
  dragGroupEnd: function(t, r) {
    return zt.dragGroupEnd(t, Wr(r));
  },
  unset: function(t) {
    return zt.unset(t);
  }
}), Ol = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, Ba = [
  Dl,
  _l,
  sm,
  Tm,
  zt,
  n1,
  Oi,
  Pm,
  wm,
  W0,
  Am,
  Bm,
  Im,
  Vm,
  Hm,
  Zm,
  Aa,
  Ol,
  e1,
  Cl,
  wl
], i1 = /* @__PURE__ */ Ba.reduce(function(t, r) {
  return (r.events || []).forEach(function(e) {
    Us(t, e);
  }), t;
}, []), a1 = /* @__PURE__ */ Ba.reduce(function(t, r) {
  return (r.props || []).forEach(function(e) {
    Us(t, e);
  }), t;
}, []);
function ls(t, r) {
  var e = P(t, 3), n = e[0], i = e[1], a = e[2];
  return (n * r[0] + i * r[1] + a) / Math.sqrt(n * n + i * i);
}
function on(t, r) {
  var e = P(t, 2), n = e[0], i = e[1];
  return -n * r[0] - i * r[1];
}
function fs(t, r) {
  return Math.max.apply(Math, N([], P(t.map(function(e) {
    var n = P(e, 4), i = n[0], a = n[1], o = n[2], s = n[3];
    return Math.max(i[r], a[r], o[r], s[r]);
  })), !1));
}
function cs(t, r) {
  return Math.min.apply(Math, N([], P(t.map(function(e) {
    var n = P(e, 4), i = n[0], a = n[1], o = n[2], s = n[3];
    return Math.min(i[r], a[r], o[r], s[r]);
  })), !1));
}
function o1(t, r) {
  var e, n, i, a = [0, 0], o = [0, 0], s = [0, 0], u = [0, 0], l = 0, f = 0;
  if (!t.length)
    return {
      pos1: a,
      pos2: o,
      pos3: s,
      pos4: u,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: l,
      height: f,
      rotation: r
    };
  var c = et(r, Lt);
  if (c % 90) {
    var v = c / 180 * Math.PI, p = Math.tan(v), d = -1 / p, h = [Pi, Bo], g = [[0, 0], [0, 0]], m = [Pi, Bo], y = [[0, 0], [0, 0]];
    t.forEach(function(U) {
      U.forEach(function(W) {
        var X = ls([-p, 1, 0], W), Y = ls([-d, 1, 0], W);
        h[0] > X && (g[0] = W, h[0] = X), h[1] < X && (g[1] = W, h[1] = X), m[0] > Y && (y[0] = W, m[0] = Y), m[1] < Y && (y[1] = W, m[1] = Y);
      });
    });
    var b = P(g, 2), E = b[0], C = b[1], x = P(y, 2), S = x[0], _ = x[1], T = [-p, 1, on([-p, 1], E)], D = [-p, 1, on([-p, 1], C)], O = [-d, 1, on([-d, 1], S)], R = [-d, 1, on([-d, 1], _)];
    e = P([
      [T, O],
      [T, R],
      [D, O],
      [D, R]
    ].map(function(U) {
      var W = P(U, 2), X = W[0], Y = W[1];
      return va(X, Y)[0];
    }), 4), a = e[0], o = e[1], s = e[2], u = e[3], l = m[1] - m[0], f = h[1] - h[0];
  } else {
    var w = cs(t, 0), I = cs(t, 1), k = fs(t, 0), F = fs(t, 1);
    if (a = [w, I], o = [k, I], s = [w, F], u = [k, F], l = k - w, f = F - I, c % 180) {
      var L = [s, a, u, o];
      n = P(L, 4), a = n[0], o = n[1], s = n[2], u = n[3], l = F - I, f = k - w;
    }
  }
  if (c % 360 > 180) {
    var L = [u, s, o, a];
    i = P(L, 4), a = i[0], o = i[1], s = i[2], u = i[3];
  }
  var A = Br([a, o, s, u]), $ = A.minX, j = A.minY, G = A.maxX, q = A.maxY;
  return {
    pos1: a,
    pos2: o,
    pos3: s,
    pos4: u,
    width: l,
    height: f,
    minX: $,
    minY: j,
    maxX: G,
    maxY: q,
    rotation: r
  };
}
function Il(t, r) {
  var e = r.map(function(n) {
    if (Mt(n)) {
      var i = Il(t, n), a = i.length;
      return a > 1 ? i : a === 1 ? i[0] : null;
    } else {
      var o = $t(t, function(s) {
        var u = s.manager;
        return u.props.target === n;
      });
      return o ? (o.finded = !0, o.manager) : null;
    }
  }).filter(Boolean);
  return e.length === 1 && Mt(e[0]) ? e[0] : e;
}
var s1 = /* @__PURE__ */ function(t) {
  je(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.differ = new Eu(), e.moveables = [], e.transformOrigin = "50% 50%", e.renderGroupRects = [], e._targetGroups = [], e._hasFirstTargets = !1, e;
  }
  return r.prototype.componentDidMount = function() {
    t.prototype.componentDidMount.call(this);
  }, r.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1, this.updateAbles();
  }, r.prototype.getTargets = function() {
    return this.props.targets;
  }, r.prototype.updateRect = function(e, n, i) {
    var a;
    i === void 0 && (i = !0);
    var o = this.state;
    if (!this.controlBox || o.isPersisted)
      return;
    ie(!0), this.moveables.forEach(function(J) {
      J.updateRect(e, !1, !1);
    });
    var s = this.props, u = this.moveables, l = o.target || s.target, f = u.map(function(J) {
      return { finded: !1, manager: J };
    }), c = this.props.targetGroups || [], v = Il(f, c), p = s.useDefaultGroupRotate;
    v.push.apply(v, N([], P(f.filter(function(J) {
      var nt = J.finded;
      return !nt;
    }).map(function(J) {
      var nt = J.manager;
      return nt;
    })), !1));
    var d = [], h = !n || e !== "" && s.updateGroup, g = s.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var m = (a = s.persistData) === null || a === void 0 ? void 0 : a.rotation;
      m != null && (g = m);
    }
    function y(J, nt, rt) {
      var Z = J.map(function(dt) {
        if (Mt(dt)) {
          var st = y(dt, nt), ct = [st.pos1, st.pos2, st.pos3, st.pos4];
          return d.push(st), { poses: ct, rotation: st.rotation };
        } else
          return {
            poses: qt(dt.state),
            rotation: dt.getRotation()
          };
      }), K = Z.map(function(dt) {
        var st = dt.rotation;
        return st;
      }), ft = 0, at = K[0], ot = K.every(function(dt) {
        return Math.abs(at - dt) < 0.1;
      });
      h ? ft = !p && ot ? at : g : ft = !p && !rt && ot ? at : nt;
      var ut = Z.map(function(dt) {
        var st = dt.poses;
        return st;
      }), xt = o1(ut, ft);
      return xt;
    }
    var b = y(v, this.rotation, !0);
    h && (this.rotation = b.rotation, this.transformOrigin = s.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = c, this.renderGroupRects = d;
    var E = this.transformOrigin, C = this.rotation, x = this.scale, S = b.width, _ = b.height, T = b.minX, D = b.minY, O = Mm([
      [0, 0],
      [S, 0],
      [0, _],
      [S, _]
    ], Ra(E, S, _), this.rotation / 180 * Math.PI), R = Br(O.result), w = R.minX, I = R.minY, k = " rotate(".concat(C, "deg)") + " scale(".concat(Xt(x[0]), ", ").concat(Xt(x[1]), ")"), F = "translate(".concat(-w, "px, ").concat(-I, "px)").concat(k);
    this.controlBox.style.transform = "translate3d(".concat(T, "px, ").concat(D, "px, ").concat(this.props.translateZ || 0, ")"), l.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(E, ";") + "width:".concat(S, "px;height:").concat(_, "px;") + "transform: ".concat(F), o.width = S, o.height = _;
    var L = this.getContainer(), A = Fi(this.controlBox, l, this.controlBox, this.getContainer(), this._rootContainer || L, []), $ = [A.left, A.top], j = P(qt(A), 4), G = j[0], q = j[1], U = j[2], W = j[3], X = Br([G, q, U, W]), Y = [X.minX, X.minY], V = Xt(x[0] * x[1]);
    A.pos1 = tt(G, Y), A.pos2 = tt(q, Y), A.pos3 = tt(U, Y), A.pos4 = tt(W, Y), A.left = T - A.left + Y[0], A.top = D - A.top + Y[1], A.origin = tt(lt($, A.origin), Y), A.beforeOrigin = tt(lt($, A.beforeOrigin), Y), A.originalBeforeOrigin = lt($, A.originalBeforeOrigin), A.transformOrigin = tt(lt($, A.transformOrigin), Y), l.style.transform = "translate(".concat(-w - Y[0], "px, ").concat(-I - Y[1], "px)") + k, ie(), this.updateState(M(M({}, A), { posDelta: Y, direction: V, beforeDirection: V }), i);
  }, r.prototype.getRect = function() {
    return M(M({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(e) {
      return e.getRect();
    }) });
  }, r.prototype.triggerEvent = function(e, n, i) {
    if (i || e.indexOf("Group") > -1)
      return t.prototype.triggerEvent.call(this, e, n);
    this._emitter.trigger(e, n);
  }, r.prototype.getRequestChildStyles = function() {
    var e = this.getEnabledAbles().reduce(function(n, i) {
      var a, o, s = (o = (a = i.requestChildStyle) === null || a === void 0 ? void 0 : a.call(i)) !== null && o !== void 0 ? o : [];
      return N(N([], P(n), !1), P(s), !1);
    }, []);
    return e;
  }, r.prototype.getMoveables = function() {
    return N([], P(this.moveables), !1);
  }, r.prototype.updateAbles = function() {
    t.prototype.updateAbles.call(this, N(N([], P(this.props.ables), !1), [Aa], !1), "Group");
  }, r.prototype._updateTargets = function() {
    t.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = er(this._originalDragTarget, !0);
  }, r.prototype._updateEvents = function() {
    var e = this.state, n = this.props, i = this._prevDragTarget, a = n.dragTarget || this.areaElement, o = n.targets, s = this.differ.update(o), u = s.added, l = s.changed, f = s.removed, c = u.length || f.length;
    (c || this._prevOriginalDragTarget !== this._originalDragTarget) && (Ur(this, !1), Ur(this, !0), this.updateState({ gestos: {} })), i !== a && (e.target = null), e.target || (e.target = this.areaElement, this.controlBox.style.display = "block"), e.target && (this.targetGesto || (this.targetGesto = Rl(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = ka(this, this.controlBox, "controlAbles", "GroupControl")));
    var v = !zi(e.container, n.container);
    v && (e.container = n.container), (v || c || this.transformOrigin !== (n.defaultGroupOrigin || "50% 50%") || l.length || o.length && !bl(this._targetGroups, n.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!c;
  }, r.prototype._updateObserver = function() {
  }, r.defaultProps = M(M({}, se.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), r;
}(se), u1 = /* @__PURE__ */ function(t) {
  je(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.moveables = [], e;
  }
  return r.prototype.render = function() {
    var e = this, n, i = this.props, a = i.cspNonce, o = i.cssStyled, s = i.persistData, u = i.targets || [], l = u.length, f = this.isUnmounted || !l, c = (n = s == null ? void 0 : s.children) !== null && n !== void 0 ? n : [];
    return f && !l && c.length ? u = c.map(function() {
      return null;
    }) : f || (c = []), Kt(o, { cspNonce: a, ref: or(this, "controlBox"), className: Q("control-box") }, u.map(function(v, p) {
      var d, h, g = (h = (d = i.individualGroupableProps) === null || d === void 0 ? void 0 : d.call(i, v, p)) !== null && h !== void 0 ? h : {};
      return Kt(se, M({ key: "moveable" + p, ref: Ys(e, "moveables", p) }, i, g, { target: v, wrapperMoveable: e, isWrapperMounted: e.isMoveableMounted, persistData: c[p] }));
    }));
  }, r.prototype.componentDidMount = function() {
  }, r.prototype.componentDidUpdate = function() {
  }, r.prototype.getTargets = function() {
    return this.props.targets;
  }, r.prototype.updateRect = function(e, n, i) {
    i === void 0 && (i = !0), ie(!0), this.moveables.forEach(function(a) {
      a.updateRect(e, n, i);
    }), ie();
  }, r.prototype.getRect = function() {
    return M(M({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(e) {
      return e.getRect();
    }) });
  }, r.prototype.request = function(e, n, i) {
    n === void 0 && (n = {});
    var a = this.moveables.map(function(u) {
      return u.request(e, M(M({}, n), { isInstant: !1 }), !1);
    }), o = i || n.isInstant, s = {
      request: function(u) {
        return a.forEach(function(l) {
          return l.request(u);
        }), this;
      },
      requestEnd: function() {
        return a.forEach(function(u) {
          return u.requestEnd();
        }), this;
      }
    };
    return o ? s.request(n).requestEnd() : s;
  }, r.prototype.dragStart = function(e) {
    var n = e.target, i = $t(this.moveables, function(a) {
      var o = a.getTargets()[0], s = a.getControlBoxElement(), u = a.getDragElement();
      return !o || !u ? !1 : u === n || u.contains(n) || u !== o && o === n || o.contains(n) || s === n || s.contains(n);
    });
    return i && i.dragStart(e), this;
  }, r.prototype.hitTest = function() {
    return 0;
  }, r.prototype.isInside = function() {
    return !1;
  }, r.prototype.isDragging = function() {
    return !1;
  }, r.prototype.getDragElement = function() {
    return null;
  }, r.prototype.getMoveables = function() {
    return N([], P(this.moveables), !1);
  }, r.prototype.updateRenderPoses = function() {
  }, r.prototype.checkUpdate = function() {
  }, r.prototype.triggerEvent = function() {
  }, r.prototype.updateAbles = function() {
  }, r.prototype._updateEvents = function() {
  }, r.prototype._updateObserver = function() {
  }, r;
}(se);
function kl(t, r) {
  var e = [];
  return t.forEach(function(n) {
    if (n) {
      if (Nt(n)) {
        r[n] && e.push.apply(e, N([], P(r[n]), !1));
        return;
      }
      Mt(n) ? e.push.apply(e, N([], P(kl(n, r)), !1)) : e.push(n);
    }
  }), e;
}
function Al(t, r) {
  var e = [];
  return t.forEach(function(n) {
    if (n) {
      if (Nt(n)) {
        r[n] && e.push.apply(e, N([], P(r[n]), !1));
        return;
      }
      Mt(n) ? e.push(Al(n, r)) : e.push(n);
    }
  }), e;
}
function Bl(t, r) {
  return t.length !== r.length || t.some(function(e, n) {
    var i = r[n];
    return !e && !i ? !1 : e != i ? Mt(e) && Mt(i) ? Bl(e, i) : !0 : !1;
  });
}
var l1 = /* @__PURE__ */ function(t) {
  je(r, t);
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.refTargets = [], e.selectorMap = {}, e._differ = new Eu(), e._elementTargets = [], e._tmpRefTargets = [], e._tmpSelectorMap = {}, e._onChangeTargets = null, e;
  }
  return r.makeStyled = function() {
    var e = {}, n = this.getTotalAbles();
    n.forEach(function(a) {
      var o = a.css;
      o && o.forEach(function(s) {
        e[s] = !0;
      });
    });
    var i = cr(e).join(`
`);
    this.defaultStyled = Mu("div", rh(da, qg + i));
  }, r.getTotalAbles = function() {
    return N([_l, Aa, Ol, Cl], P(this.defaultAbles), !1);
  }, r.prototype.render = function() {
    var e, n = this.constructor;
    n.defaultStyled || n.makeStyled();
    var i = this.props, a = i.ables, o = i.props, s = Bg(i, ["ables", "props"]), u = P(this._updateRefs(!0), 2), l = u[0], f = u[1], c = kl(l, f), v = c.length > 1, p = n.getTotalAbles(), d = N(N([], P(p), !1), P(a || []), !1), h = M(M(M({}, s), o || {}), { ables: d, cssStyled: n.defaultStyled, customStyledMap: n.customStyledMap });
    this._elementTargets = c;
    var g = null, m = this.moveable, y = s.persistData;
    if (y != null && y.children && (v = !0), s.individualGroupable)
      return Kt(u1, M({ key: "individual-group", ref: or(this, "moveable") }, h, { target: null, targets: c }));
    if (v) {
      var b = Al(l, f);
      if (m && !m.props.groupable && !m.props.individualGroupable) {
        var E = m.props.target;
        E && c.indexOf(E) > -1 && (g = M({}, m.state));
      }
      return Kt(s1, M({ key: "group", ref: or(this, "moveable") }, h, (e = s.groupableProps) !== null && e !== void 0 ? e : {}, { target: null, targets: c, targetGroups: b, firstRenderState: g }));
    } else {
      var C = c[0];
      if (m && (m.props.groupable || m.props.individualGroupable)) {
        var x = m.moveables || [], S = $t(x, function(_) {
          return _.props.target === C;
        });
        S && (g = M({}, S.state));
      }
      return Kt(se, M({ key: "single", ref: or(this, "moveable") }, h, { target: C, firstRenderState: g }));
    }
  }, r.prototype.componentDidMount = function() {
    this._checkChangeTargets();
  }, r.prototype.componentDidUpdate = function() {
    this._checkChangeTargets();
  }, r.prototype.componentWillUnmount = function() {
    this.selectorMap = {}, this.refTargets = [];
  }, r.prototype.getTargets = function() {
    var e, n;
    return (n = (e = this.moveable) === null || e === void 0 ? void 0 : e.getTargets()) !== null && n !== void 0 ? n : [];
  }, r.prototype.updateSelectors = function() {
    this.selectorMap = {}, this._updateRefs();
  }, r.prototype.waitToChangeTarget = function() {
    var e = this, n;
    return this._onChangeTargets = function() {
      e._onChangeTargets = null, n();
    }, new Promise(function(i) {
      n = i;
    });
  }, r.prototype.waitToChangeTargets = function() {
    return this.waitToChangeTarget();
  }, r.prototype.getManager = function() {
    return this.moveable;
  }, r.prototype.getMoveables = function() {
    return this.moveable.getMoveables();
  }, r.prototype.getDragElement = function() {
    return this.moveable.getDragElement();
  }, r.prototype._updateRefs = function(e) {
    var n = this.refTargets, i = wa(this.props.target || this.props.targets), a = typeof document != "undefined", o = Bl(n, i), s = this.selectorMap, u = {};
    return this.refTargets.forEach(function l(f) {
      if (Nt(f)) {
        var c = s[f];
        c ? u[f] = s[f] : a && (o = !0, u[f] = [].slice.call(document.querySelectorAll(f)));
      } else
        Mt(f) && f.forEach(l);
    }), this._tmpRefTargets = i, this._tmpSelectorMap = u, [
      i,
      u,
      !e && o
    ];
  }, r.prototype._checkChangeTargets = function() {
    var e, n, i;
    this.refTargets = this._tmpRefTargets, this.selectorMap = this._tmpSelectorMap;
    var a = this._differ.update(this._elementTargets), o = a.added, s = a.removed, u = o.length || s.length;
    u && ((n = (e = this.props).onChangeTargets) === null || n === void 0 || n.call(e, {
      moveable: this.moveable,
      targets: this._elementTargets
    }), (i = this._onChangeTargets) === null || i === void 0 || i.call(this));
    var l = P(this._updateRefs(), 3), f = l[0], c = l[1], v = l[2];
    this.refTargets = f, this.selectorMap = c, v && this.forceUpdate();
  }, r.defaultAbles = [], r.customStyledMap = {}, r.defaultStyled = null, zg([
    eh(Ou)
  ], r.prototype, "moveable", void 0), r;
}(iu), f1 = /* @__PURE__ */ function(t) {
  je(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r.defaultAbles = Ba, r;
}(l1), Ni = function(t, r) {
  return Ni = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, n) {
    e.__proto__ = n;
  } || function(e, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }, Ni(t, r);
};
function za(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Ni(t, r);
  function e() {
    this.constructor = t;
  }
  t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Ae = function() {
  return Ae = Object.assign || function(r) {
    for (var e, n = 1, i = arguments.length; n < i; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Ae.apply(this, arguments);
};
function c1(t, r, e, n) {
  var i = arguments.length, a = i < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, e) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(t, r, e, n);
  else
    for (var s = t.length - 1; s >= 0; s--)
      (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(r, e, a) : o(r, e)) || a);
  return i > 3 && a && Object.defineProperty(r, e, a), a;
}
var v1 = /* @__PURE__ */ function(t) {
  za(r, t);
  function r(n) {
    var i = t.call(this, n) || this;
    return i.state = {}, i.state = i.props, i;
  }
  var e = r.prototype;
  return e.render = function() {
    return Kt(f1, Ae({
      ref: or(this, "moveable")
    }, this.state));
  }, r;
}(oa), p1 = a1, d1 = Ou, h1 = i1, g1 = /* @__PURE__ */ function(t) {
  za(r, t);
  function r(n, i) {
    i === void 0 && (i = {});
    var a = t.call(this) || this;
    a.containerProvider = null, a.selfElement = null, a._warp = !1;
    var o = Ae({}, i), s = {};
    h1.forEach(function(f) {
      s[vh("on ".concat(f))] = function(c) {
        return a.trigger(f, c);
      };
    });
    var u;
    i.warpSelf ? (delete i.warpSelf, a._warp = !0, u = n) : (u = le(n).createElement("div"), n.appendChild(u)), a.containerProvider = wo(Kt(v1, Ae({
      ref: or(a, "innerMoveable")
    }, o, s)), u), a.selfElement = u;
    var l = o.target;
    return Mt(l) && l.length > 1 && a.updateRect(), a;
  }
  var e = r.prototype;
  return e.setState = function(n, i) {
    this.innerMoveable.setState(n, i);
  }, e.forceUpdate = function(n) {
    this.innerMoveable.forceUpdate(n);
  }, e.dragStart = function(n) {
    var i = this.innerMoveable;
    i.$_timer && this.forceUpdate(), this.getMoveable().dragStart(n);
  }, e.destroy = function() {
    var n, i = this.selfElement;
    wo(null, i, this.containerProvider), this._warp || (n = i == null ? void 0 : i.parentElement) === null || n === void 0 || n.removeChild(i), this.containerProvider = null, this.off(), this.selfElement = null, this.innerMoveable = null;
  }, e.getMoveable = function() {
    return this.innerMoveable.moveable;
  }, r = c1([bo(d1, function(n, i) {
    n[i] || (n[i] = function() {
      for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o];
      var s = this.getMoveable();
      if (!(!s || !s[i]))
        return s[i].apply(s, a);
    });
  }), bo(p1, function(n, i) {
    Object.defineProperty(n, i, {
      get: function() {
        return this.getMoveable().props[i];
      },
      set: function(a) {
        var o;
        this.setState((o = {}, o[i] = a, o));
      },
      enumerable: !0,
      configurable: !0
    });
  })], r), r;
}(Dn), m1 = /* @__PURE__ */ function(t) {
  za(r, t);
  function r() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return r;
}(g1);
function y1(t, r) {
  return ce(t, r);
}
const x1 = (t, r) => Math.sqrt(Math.pow(Math.abs(t.x - r.x), 2) + Math.pow(Math.abs(t.y - r.y), 2));
class b1 extends Ji {
  constructor(e) {
    super();
    B(this, "likeRectangleIns");
    B(this, "moveableIns", null);
    B(this, "rotationPointIns", null);
    B(this, "midPoint");
    B(this, "initAngle");
    B(this, "offset");
    B(this, "rotationLine");
    B(this, "customRotationDOMId", `ID${Wn()}`);
    B(this, "moveableElementId", `ID${Wn()}`);
    B(this, "targetElementId", `ID${Wn()}`);
    B(this, "genMarkerContent", (e = 0) => {
      const i = `width:${0.1}px; height:${0.1}px;`;
      e = Number.isNaN(+e) ? 0 : +e;
      const a = `<div style="visibility: hidden; background: transparent; height: ${0.1}px; width: ${0.1}px"></div>`;
      return `
            <div
            style="${i}"
            data-rotatable-ref="${this.moveableElementId}"
            >
            <div
                data-rotatable-ref="${this.targetElementId}"
                style="${i} transform: translate(0,0) rotate(${e}deg);">
                ${a}
            </div>
            </div>
        `;
    });
    B(this, "setMarkerRotatable", () => {
      this.offset = this.calcInitOffset();
      const e = this, n = y1("customRotation", {
        render(o, s) {
          const u = o.getRect(), { pos1: l, pos2: f } = o.state;
          return s.createElement(
            "div",
            {
              key: "custom-rotation",
              id: e.customRotationDOMId,
              className: "moveable-custom-rotation",
              style: {
                display: "inline-block",
                position: "absolute",
                transform: `translate(-50%, -100%) translate(${(l[0] + f[0]) / 2}px, ${(l[1] + f[1]) / 2}px) rotate(${u.rotation}deg) translateY(-${e.offset}px)`,
                width: "10px",
                height: "10px",
                cursor: "move",
                background: "#fff",
                border: "2px solid #cc6666",
                borderRadius: "50%",
                transformOrigin: "50% 100%"
              }
            },
            [`
        `]
          );
        }
      }), i = document.querySelector(`[data-rotatable-ref="${this.moveableElementId}"]`), a = document.querySelector(`[data-rotatable-ref="${this.targetElementId}"]`);
      this.moveableIns = new m1(i, {
        target: a,
        ables: [n],
        props: { customRotation: !0 },
        rotatable: !0,
        throttleRotate: 0,
        origin: !1,
        hideDefaultLines: !0,
        rotationTarget: ".moveable-custom-rotation",
        rotationPosition: "none"
      }), this.registryEvent();
    });
    B(this, "onRotateStart", () => {
      this.emit("rotateStart", this.likeRectangleIns);
    });
    B(this, "onRotate", (e) => {
      e.target.style.transform = e.drag.transform;
      const n = +this.getDOMTransformRotate(e.target) - this.initAngle;
      this.rotate(n), this.emit("rotate", e);
    });
    B(this, "onRotateEnd", () => {
      this.emit("rotateEnd", this.likeRectangleIns);
    });
    B(this, "rotate", (e) => {
      const n = this.mapIns.lngLatToContainer(this.center), i = this.likeRectangleIns.leftTop, a = this.mapIns.lngLatToContainer(i), o = this.calcRotatePoint(a, n, e), s = new AMap.Pixel(o.x, o.y), u = this.mapIns.containerToLngLat(s), l = this.likeRectangleIns.rightTop, f = this.mapIns.lngLatToContainer(l), c = this.calcRotatePoint(f, n, e), v = new AMap.Pixel(c.x, c.y), p = this.mapIns.containerToLngLat(v), d = this.likeRectangleIns.rightBottom, h = this.mapIns.lngLatToContainer(d), g = this.calcRotatePoint(h, n, e), m = new AMap.Pixel(g.x, g.y), y = this.mapIns.containerToLngLat(m), b = this.likeRectangleIns.leftBottom, E = this.mapIns.lngLatToContainer(b), C = this.calcRotatePoint(E, n, e), x = new AMap.Pixel(C.x, C.y), S = this.mapIns.containerToLngLat(x), _ = [
        [u.lng, u.lat],
        [p.lng, p.lat],
        [y.lng, y.lat],
        [S.lng, S.lat]
      ];
      this.likeRectangleIns.setPath(_);
    });
    B(this, "calcRotatePoint", (e, n, i) => {
      const a = e.x, o = e.y, s = n.x, u = n.y, l = i * Math.PI / 180, f = a - s, c = o - u, v = f * Math.cos(l) - c * Math.sin(l) + s, p = f * Math.sin(l) + c * Math.cos(l) + u;
      return { x: v, y: p };
    });
    B(this, "getDOMTransformRotate", (e) => {
      var a;
      if (!e)
        return 0;
      let n = null;
      return (((a = e == null ? void 0 : e.style) == null ? void 0 : a.transform) || "").replace(/rotate\((.*)deg\)/g, (o, s) => n = s), +n || 0;
    });
    B(this, "updateRotationAbleOffset", () => {
      var o;
      const e = document.querySelector(`#${this.customRotationDOMId}`);
      let n = null, i = ((o = e == null ? void 0 : e.style) == null ? void 0 : o.transform) || "";
      if (i.replace(/translateY\((.*)px\)/g, (s, u) => n = u), !n)
        return;
      const a = `-${this.calcInitOffset()}`;
      i = i.replace(new RegExp(n, "g"), a), e.style.transform = i, this.offset = this.calcInitOffset();
    });
    B(this, "onDragStart", () => hr(this, null, function* () {
      this.reset();
    }));
    /**
     * 拖拽结束后，需要重新计算一下点位数据
     */
    B(this, "onDragEnd", () => hr(this, null, function* () {
      this.open();
    }));
    if (!e)
      throw new Error("likeRectangleIns is required");
    this.likeRectangleIns = e, this.open();
  }
  get mapIns() {
    return this.likeRectangleIns._map;
  }
  get center() {
    return this.likeRectangleIns.likeRectangle.center;
  }
  get draggable() {
    var n;
    return ((n = this.likeRectangleIns) == null ? void 0 : n.getOptions()).draggable;
  }
  open() {
    this.calcMidPoint(), this.calcInitAngle(), this.setRotationLine(), this.registryLikeRectangleEvents(), this.createRotationPoint();
  }
  reset() {
    var e, n, i, a;
    (n = (e = this.moveableIns) == null ? void 0 : e.destroy) == null || n.call(e), this.moveableIns = null, (a = (i = this.rotationPointIns) == null ? void 0 : i.destroy) == null || a.call(i), this.rotationPointIns = null;
  }
  close() {
    this.reset(), this.destroyLikeRectangleEvents(), this.destroyEvent();
  }
  registryLikeRectangleEvents() {
    const e = this.likeRectangleIns.hasEvents("dragstart", this.onDragStart);
    this.draggable && !e && (this.likeRectangleIns.on("dragstart", this.onDragStart), this.likeRectangleIns.on("dragend", this.onDragEnd));
  }
  destroyLikeRectangleEvents() {
    this.likeRectangleIns.off("dragstart", this.onDragStart), this.likeRectangleIns.off("dragend", this.onDragEnd);
  }
  /**
   * 旋转点（即中心点）
   */
  createRotationPoint() {
    return hr(this, null, function* () {
      var e, n;
      (n = (e = this.rotationPointIns) == null ? void 0 : e.destroy) == null || n.call(e), this.rotationPointIns = null, this.rotationPointIns = new AMap.Marker({
        map: this.mapIns,
        position: this.center,
        content: this.genMarkerContent(this.initAngle)
      }), yield Promise.resolve(), this.setMarkerRotatable();
    });
  }
  registryEvent() {
    var e, n;
    this.moveableIns && (this.moveableIns.on("rotateStart", this.onRotateStart), this.moveableIns.on("rotate", this.onRotate), this.moveableIns.on("rotateEnd", this.onRotateEnd), (n = (e = this.mapIns) == null ? void 0 : e.on) == null || n.call(e, "zoomchange", this.updateRotationAbleOffset));
  }
  destroyEvent() {
    var e, n;
    this.moveableIns && (this.moveableIns.off("rotateStart", this.onRotateStart), this.moveableIns.off("rotate", this.onRotate), this.moveableIns.off("rotateEnd", this.onRotateEnd), (n = (e = this.mapIns) == null ? void 0 : e.off) == null || n.call(e, "zoomchange", this.updateRotationAbleOffset));
  }
  calcMidPoint() {
    var h, g, m;
    const e = (m = (g = (h = this.likeRectangleIns) == null ? void 0 : h.getPath) == null ? void 0 : g.call(h)) == null ? void 0 : m.map((y) => [y.lng, y.lat]);
    if (!e.length || !this.mapIns)
      throw new Error("likeRectangle or map is undefined");
    const n = e[0], i = this.mapIns.lngLatToContainer(n), a = e[1], o = this.mapIns.lngLatToContainer(a), s = (i.y - o.y) / (i.x - o.x), u = i.y - s * i.x, l = this.mapIns.lngLatToContainer(this.center), f = -1 / s, c = l.y - f * l.x, v = s === 0 ? (i.x + o.x) / 2 : (c - u) / (s - f), p = s * v + u, d = new AMap.Pixel(v, p);
    return this.midPoint = this.mapIns.containerToLngLat(d), this.midPoint;
  }
  /**
   * 计算第一条连线的中点，位于中心点角度
   */
  calcInitAngle() {
    if (!this.mapIns)
      return;
    const e = this.mapIns.lngLatToContainer(this.midPoint), n = this.mapIns.lngLatToContainer(this.center), i = Math.atan2(e.y - n.y, e.x - n.x);
    return this.initAngle = 180 / Math.PI * i + 90, this.initAngle;
  }
  // TODO 需要处理小于中点的情况
  calcInitOffset() {
    if (!this.mapIns)
      return 0;
    const e = this.mapIns.lngLatToContainer(this.midPoint), n = this.mapIns.lngLatToContainer(this.center);
    return (x1(e, n) || 100) - 6;
  }
  // setRotationPoint() {
  // }
  setRotationLine() {
  }
}
class E1 extends Ji {
  constructor(e) {
    super();
    B(this, "opts");
    B(this, "map");
    B(this, "width");
    B(this, "height");
    B(this, "center");
    B(this, "leftTop");
    // 左上点
    B(this, "rightTop");
    // 右上点
    B(this, "leftBottom");
    // 左下点
    B(this, "rightBottom");
    // 右下点
    B(this, "likeRectangle");
    B(this, "rotatableIns");
    B(this, "likeRectangleDestroy");
    this.bindOptsToSelf(e), e.path || this.setPoints();
    const n = this.create();
    return this.registerRotatable(), this.enhanceMethods(), n;
  }
  bindOptsToSelf(e) {
    this.opts = e, Object.entries(e).forEach(([n, i]) => {
      this[n] = i;
    });
  }
  enhanceMethods() {
    this.likeRectangleDestroy = this.likeRectangle.destroy.bind(this.likeRectangle), this.likeRectangle.destroy = this.destroy.bind(this);
  }
  destroy() {
    var e, n;
    (n = (e = this.rotatableIns) == null ? void 0 : e.close) == null || n.call(e), this.likeRectangleDestroy();
  }
  registerRotatable() {
    if (!this.opts.rotatable)
      return;
    this.rotatableIns = new b1(this.likeRectangle);
    const e = this.likeRectangle;
    this.rotatableIns.on("rotateStart", (n) => e.emit("rotateStart", n)), this.rotatableIns.on("rotate", (n) => e.emit("rotate", n)), this.rotatableIns.on("rotateEnd", (n) => e.emit("rotateEnd", n));
  }
  calcPoints(e) {
    const [n, i] = e || this.center, a = new AMap.LngLat(n, i), o = Ya(this.width / 2), s = Ya(this.height / 2), u = a.offset(-o, s), l = a.offset(o, s), f = a.offset(-o, -s), c = a.offset(o, -s);
    return {
      leftTop: [u.lng, u.lat],
      rightTop: [l.lng, l.lat],
      leftBottom: [f.lng, f.lat],
      rightBottom: [c.lng, c.lat]
    };
  }
  setCenter(e) {
    this.likeRectangle.likeRectangleCenter = this.center = e;
  }
  setPoints() {
    const { leftTop: e, rightTop: n, leftBottom: i, rightBottom: a } = this.calcPoints();
    this.leftTop = e, this.rightTop = n, this.leftBottom = i, this.rightBottom = a;
  }
  create() {
    var n, i, a;
    const e = ((n = this.opts) == null ? void 0 : n.path) || [this.leftTop, this.rightTop, this.rightBottom, this.leftBottom];
    if (this.likeRectangle = new AMap.Polygon(), this.likeRectangle.setOptions(Yt({ path: e }, this.opts)), this.enhanceProperty(), this.registryEvent(), (i = this.opts) != null && i.path) {
      const [o, s, u, l] = (a = this.opts) == null ? void 0 : a.path;
      this.updatePoints(o, s, u, l);
    }
    return this.likeRectangle;
  }
  enhanceProperty() {
    this.likeRectangle.likeRectangle = this, this.likeRectangle.leftTop = this.leftTop, this.likeRectangle.rightTop = this.rightTop, this.likeRectangle.rightBottom = this.rightBottom, this.likeRectangle.leftBottom = this.leftBottom, this.likeRectangle.likeRectangleCenter = this.center, this.likeRectangle.rotatable = this.opts.rotatable;
  }
  registryEvent() {
    this.likeRectangle && (this.onDragEnd = this.onDragEnd.bind(this), this.likeRectangle.on("dragend", this.onDragEnd));
  }
  onDragEnd(e) {
    const i = e.target.getPath(), [a, o, s, u] = i;
    this.updatePoints(a, o, s, u);
  }
  updatePoints(e, n, i, a) {
    this.likeRectangle.leftTop = this.leftTop = e, this.likeRectangle.rightTop = this.rightTop = n, this.likeRectangle.rightBottom = this.rightBottom = i, this.likeRectangle.leftBottom = this.leftBottom = a, this.setCenter(this.getCenter());
  }
  getCenter() {
    var n;
    return (n = this.map.getFitZoomAndCenterByOverlays([this.likeRectangle])) == null ? void 0 : n.pop();
  }
}
class S1 {
  constructor(r, e, n) {
    B(this, "point");
    B(this, "points");
    B(this, "center");
    B(this, "context");
    B(this, "isEnabled", !1);
    this.context = r, this.point = e, this.points = n, this.init(), this.clearClientEvent();
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
  setCursorPointer(r) {
    var e;
    (e = this.point) == null || e.setOptions({ cursor: r });
  }
  init() {
    this.center = this.point.getCenter(), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onDragStart = this.onDragStart.bind(this), this.onDragging = Kd(this.onDragging.bind(this), 4), this.onDragEnd = this.onDragEnd.bind(this), this.defaultRegistryEvent();
  }
  clearClientEvent() {
    this.point.clearEvents("click");
  }
  defaultRegistryEvent() {
    this.point.on("mouseover", this.onMouseOver), this.point.on("mouseout", this.onMouseOut);
  }
  registryEvent() {
    this.point.on("dragstart", this.onDragStart), this.point.on("dragging", this.onDragging), this.point.on("dragend", this.onDragEnd);
  }
  destroyEvent() {
    this.point.off("dragstart", this.onDragStart), this.point.off("dragging", this.onDragging), this.point.off("dragend", this.onDragEnd);
  }
  onMouseOver() {
    this.enable();
  }
  onMouseOut() {
    this.disable();
  }
  onDragStart(r) {
    this.context.onDragStart(r);
  }
  onDragging(r) {
    const { pixel: e } = r;
    this.updateNextLeftPoint(e, r), this.updateNextRightPoint(e, r), this.context.onDragging(r);
  }
  onDragEnd(r) {
    const { target: e, pixel: n } = r;
    this.updateNextLeftPoint(n, r), this.updateNextRightPoint(n, r), this.center = e.getCenter(), this.context.onDragEnd(r);
  }
  /**
   * 更新下一个左节点位置
   */
  updateNextLeftPoint(r, e) {
    const n = this.idx - 1 >= 0 ? this.idx - 1 : this.len, i = this.points[n], a = this.map.lngLatToContainer(i.getCenter()), o = n - 1 >= 0 ? n - 1 : this.len, s = this.points[o], u = this.map.lngLatToContainer(s.getCenter()), l = (u.y - a.y) / (u.x - a.x), f = u.y - l * u.x, c = -1 / l, v = r.y - c * r.x;
    let p;
    l === 0 ? p = r.x : !Number.isFinite(l) || l > Number.MAX_SAFE_INTEGER || l < Number.MIN_SAFE_INTEGER ? p = a.x : p = (v - f) / (l - c);
    let d;
    l === 0 ? d = a.y : Number.isFinite(l) ? d = l * p + f : d = r.y;
    const h = new AMap.Pixel(p, d);
    this.dispatch(i, h, e.originEvent);
  }
  /**
   * 更新下一个右节点位置
   */
  updateNextRightPoint(r, e) {
    const n = this.idx + 1 <= this.len ? this.idx + 1 : 0, i = this.points[n], a = this.map.lngLatToContainer(i.getCenter()), o = n + 1 <= this.len ? n + 1 : 0, s = this.points[o], u = this.map.lngLatToContainer(s.getCenter()), l = (u.y - a.y) / (u.x - a.x), f = u.y - l * u.x, c = -1 / l, v = r.y - c * r.x;
    let p;
    l === 0 ? p = r.x : !Number.isFinite(l) || l > Number.MAX_SAFE_INTEGER || l < Number.MIN_SAFE_INTEGER ? p = a.x : p = (v - f) / (l - c);
    let d;
    l === 0 ? d = a.y : Number.isFinite(l) ? d = l * p + f : d = r.y;
    const h = new AMap.Pixel(p, d);
    this.dispatch(i, h, e.originEvent);
  }
  dispatch(r, e, n) {
    const a = {
      lnglat: this.map.containerToLngLat(e),
      originEvent: n
      // 这里的鼠标事件直接透传即可
    };
    r.emit("dragend", a);
  }
}
const C1 = {
  rotatingCloseEditor: !0,
  editingCloseRotator: !0
};
class _1 {
  constructor(r, e, n) {
    B(this, "opts");
    B(this, "map");
    B(this, "likeRectangle");
    B(this, "polygonEditor");
    B(this, "polygonEditorOpen");
    B(this, "polygonEditorClose");
    B(this, "controlPoints");
    B(this, "inEditing", !1);
    B(this, "isRestart", !1);
    B(this, "onDragStart", (r) => {
      var e, n;
      (n = (e = this.rotatableIns) == null ? void 0 : e.close) == null || n.call(e), this.onChange("dragstart", r);
    });
    B(this, "onDragging", (r) => {
      this.updateLikeRectanglePath(), this.onChange("dragging", r);
    });
    B(this, "onDragEnd", (r) => {
      var e, n;
      (n = (e = this.rotatableIns) == null ? void 0 : e.open) == null || n.call(e), this.onChange("dragend", r);
    });
    B(this, "onChange", (r, e) => {
      var n, i;
      (i = (n = this.opts) == null ? void 0 : n.onChange) == null || i.call(n, r, e);
    });
    B(this, "onRotateStart", () => hr(this, null, function* () {
      this.inEditing && this.polygonEditorClose();
    }));
    B(this, "onRotateEnd", () => hr(this, null, function* () {
      this.inEditing && this.open();
    }));
    return this.map = r, this.likeRectangle = e, this.opts = Yt(Yt({}, C1), n), this.onChange = this.onChange.bind(this), this.createEditor();
  }
  get options() {
    return Yn(Yt({}, this.opts), {
      midControlPoint: { radius: 0 }
    });
  }
  get rotatable() {
    var r;
    return (r = this.likeRectangle) == null ? void 0 : r.rotatable;
  }
  get rotatingCloseEditor() {
    return this.opts.rotatingCloseEditor;
  }
  get rotatableIns() {
    var r, e;
    return (e = (r = this.likeRectangle) == null ? void 0 : r.likeRectangle) == null ? void 0 : e.rotatableIns;
  }
  /**
   * 重新 polygonEditor.open 方法
   */
  open() {
    this.inEditing = !0, this.polygonEditorOpen(), this.registryLikeRectangleRotateEvents(), this.registryControlPoints();
  }
  close() {
    this.inEditing = !1, this.destroyLikeRectangleRotateEvents(), this.polygonEditorClose();
  }
  findControlPoint(r) {
    return this.controlPoints.find((e) => {
      const n = e.point.getCenter(), i = `${n.lng}_${n.lat}`, a = r.getCenter(), o = `${a.lng}_${a.lat}`;
      return i === o;
    });
  }
  createEditor() {
    const r = this.likeRectangle;
    return this.polygonEditor = new AMap.PolygonEditor(this.map, r, this.options), this.enhanceProperty(), this.polygonEditor;
  }
  enhanceProperty() {
    this.polygonEditor.likeRectangleEditor = this, this.polygonEditorOpen = this.polygonEditor.open.bind(this.polygonEditor), this.polygonEditor.open = this.open.bind(this), this.polygonEditorClose = this.polygonEditor.close.bind(this.polygonEditor), this.polygonEditor.close = this.close.bind(this);
  }
  registryLikeRectangleRotateEvents() {
    this.rotatable && this.rotatingCloseEditor && (this.likeRectangle.on("rotateStart", this.onRotateStart), this.likeRectangle.on("rotateEnd", this.onRotateEnd));
  }
  destroyLikeRectangleRotateEvents() {
    this.rotatable && this.rotatingCloseEditor && (this.likeRectangle.off("rotateStart", this.onRotateStart), this.likeRectangle.off("rotateEnd", this.onRotateEnd));
  }
  registryControlPoints() {
    var e, n, i, a;
    const r = (a = (i = (n = (e = this.polygonEditor) == null ? void 0 : e.singleRingListHandle) == null ? void 0 : n.list) == null ? void 0 : i.editingVertexMarkerList) != null ? a : [];
    this.controlPoints = r.map((o, s) => {
      const u = o.getExtData() || {};
      return o.setExtData(Yn(Yt({}, u), { idx: s })), new S1(this, o, r);
    });
  }
  updateLikeRectanglePath() {
    const [
      r,
      e,
      n,
      i
    ] = this.controlPoints, a = r.point.getCenter(), o = e.point.getCenter(), s = n.point.getCenter(), u = i.point.getCenter();
    this.likeRectangle.likeRectangle.updatePoints(
      [a.lng, a.lat],
      [o.lng, o.lat],
      [s.lng, s.lat],
      [u.lng, u.lat]
    );
  }
}
const P1 = {
  PolygonRangingInDrawing: ql,
  PolygonEditorRanging: Zd,
  PolygonEditorEvent: Qd,
  PolygonRanging: Jd,
  LikeRectangle: E1,
  LikeRectangleEditor: _1
};
export {
  E1 as LikeRectangle,
  _1 as LikeRectangleEditor,
  Qd as PolygonEditorEvent,
  Zd as PolygonEditorRanging,
  Jd as PolygonRanging,
  ql as PolygonRangingInDrawing,
  P1 as default
};
