import * as Ee from "react";
import Xe, { useCallback as Ge, createContext as $n, useMemo as ct, createElement as Ie, useContext as Gr, useLayoutEffect as Ro, useRef as Ue, useEffect as ke, useState as $e, forwardRef as He, Children as Ft, isValidElement as er, cloneElement as qr, Fragment as Qi, useReducer as Po } from "react";
import Fi, { flushSync as Wi } from "react-dom";
import { JsonRpcProvider as Yi, Connection as Zi, getSuiObjectData as zo, getMoveObject as ii, Coin as xr, toSingleSignaturePubkeyPair as _o, messageWithIntent as Uo, IntentScope as ko, fromB64 as Qo, SUI_TYPE_ARG as Bi } from "@mysten/sui.js";
var Gi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        if (!!s) {
          var h = typeof s;
          if (h === "string" || h === "number")
            r.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var f = n.apply(null, s);
              f && r.push(f);
            }
          } else if (h === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              r.push(s.toString());
              continue;
            }
            for (var g in s)
              t.call(s, g) && s[g] && r.push(g);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Gi);
const tr = Gi.exports;
function ae() {
  return ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ae.apply(this, arguments);
}
function Tt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Fo(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function qi(...e) {
  return (t) => e.forEach(
    (n) => Fo(n, t)
  );
}
function un(...e) {
  return Ge(qi(...e), e);
}
function Wo(e, t = []) {
  let n = [];
  function r(s, h) {
    const f = /* @__PURE__ */ $n(h), g = n.length;
    n = [
      ...n,
      h
    ];
    function p(m) {
      const { scope: j, children: C, ...O } = m, w = j?.[e][g] || f, P = ct(
        () => O,
        Object.values(O)
      );
      return /* @__PURE__ */ Ie(w.Provider, {
        value: P
      }, C);
    }
    function M(m, j) {
      const C = j?.[e][g] || f, O = Gr(C);
      if (O)
        return O;
      if (h !== void 0)
        return h;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return p.displayName = s + "Provider", [
      p,
      M
    ];
  }
  const o = () => {
    const s = n.map((h) => /* @__PURE__ */ $n(h));
    return function(f) {
      const g = f?.[e] || s;
      return ct(
        () => ({
          [`__scope${e}`]: {
            ...f,
            [e]: g
          }
        }),
        [
          f,
          g
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    Yo(o, ...t)
  ];
}
function Yo(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(s) {
      const h = r.reduce((f, { useScope: g, scopeName: p }) => {
        const m = g(s)[`__scope${p}`];
        return {
          ...f,
          ...m
        };
      }, {});
      return ct(
        () => ({
          [`__scope${t.scopeName}`]: h
        }),
        [
          h
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const Rr = Boolean(globalThis?.document) ? Ro : () => {
}, Zo = Ee["useId".toString()] || (() => {
});
let Bo = 0;
function Ar(e) {
  const [t, n] = Ee.useState(Zo());
  return Rr(() => {
    e || n(
      (r) => r ?? String(Bo++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Wt(e) {
  const t = Ue(e);
  return ke(() => {
    t.current = e;
  }), ct(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Go({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = qo({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, h = s ? e : r, f = Wt(n), g = Ge((p) => {
    if (s) {
      const m = typeof p == "function" ? p(e) : p;
      m !== e && f(m);
    } else
      o(p);
  }, [
    s,
    e,
    o,
    f
  ]);
  return [
    h,
    g
  ];
}
function qo({ defaultProp: e, onChange: t }) {
  const n = $e(e), [r] = n, o = Ue(r), s = Wt(t);
  return ke(() => {
    o.current !== r && (s(r), o.current = r);
  }, [
    r,
    o,
    s
  ]), n;
}
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, jt.apply(this, arguments);
}
const Kr = /* @__PURE__ */ He((e, t) => {
  const { children: n, ...r } = e, o = Ft.toArray(n), s = o.find(Vo);
  if (s) {
    const h = s.props.children, f = o.map((g) => g === s ? Ft.count(h) > 1 ? Ft.only(null) : /* @__PURE__ */ er(h) ? h.props.children : null : g);
    return /* @__PURE__ */ Ie(Pr, jt({}, r, {
      ref: t
    }), /* @__PURE__ */ er(h) ? /* @__PURE__ */ qr(h, void 0, f) : null);
  }
  return /* @__PURE__ */ Ie(Pr, jt({}, r, {
    ref: t
  }), n);
});
Kr.displayName = "Slot";
const Pr = /* @__PURE__ */ He((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ er(n) ? /* @__PURE__ */ qr(n, {
    ...Xo(r, n.props),
    ref: qi(t, n.ref)
  }) : Ft.count(n) > 1 ? Ft.only(null) : null;
});
Pr.displayName = "SlotClone";
const Ko = ({ children: e }) => /* @__PURE__ */ Ie(Qi, null, e);
function Vo(e) {
  return /* @__PURE__ */ er(e) && e.type === Ko;
}
function Xo(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...f) => {
      s(...f), o(...f);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...s
    } : r === "className" && (n[r] = [
      o,
      s
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const Ho = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Zt = Ho.reduce((e, t) => {
  const n = /* @__PURE__ */ He((r, o) => {
    const { asChild: s, ...h } = r, f = s ? Kr : t;
    return ke(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ Ie(f, jt({}, h, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Jo(e, t) {
  e && Wi(
    () => e.dispatchEvent(t)
  );
}
function $o(e, t = globalThis?.document) {
  const n = Wt(e);
  ke(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const zr = "dismissableLayer.update", ea = "dismissableLayer.pointerDownOutside", ta = "dismissableLayer.focusOutside";
let oi;
const na = /* @__PURE__ */ $n({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ra = /* @__PURE__ */ He((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: s, onFocusOutside: h, onInteractOutside: f, onDismiss: g, ...p } = e, M = Gr(na), [m, j] = $e(null), C = (n = m?.ownerDocument) !== null && n !== void 0 ? n : globalThis?.document, [, O] = $e({}), w = un(
    t,
    (de) => j(de)
  ), P = Array.from(M.layers), [Z] = [
    ...M.layersWithOutsidePointerEventsDisabled
  ].slice(-1), q = P.indexOf(Z), V = m ? P.indexOf(m) : -1, he = M.layersWithOutsidePointerEventsDisabled.size > 0, fe = V >= q, ce = ia((de) => {
    const Re = de.target, te = [
      ...M.branches
    ].some(
      (Me) => Me.contains(Re)
    );
    !fe || te || (s?.(de), f?.(de), de.defaultPrevented || g?.());
  }, C), Le = oa((de) => {
    const Re = de.target;
    [
      ...M.branches
    ].some(
      (Me) => Me.contains(Re)
    ) || (h?.(de), f?.(de), de.defaultPrevented || g?.());
  }, C);
  return $o((de) => {
    V === M.layers.size - 1 && (o?.(de), !de.defaultPrevented && g && (de.preventDefault(), g()));
  }, C), ke(() => {
    if (!!m)
      return r && (M.layersWithOutsidePointerEventsDisabled.size === 0 && (oi = C.body.style.pointerEvents, C.body.style.pointerEvents = "none"), M.layersWithOutsidePointerEventsDisabled.add(m)), M.layers.add(m), ai(), () => {
        r && M.layersWithOutsidePointerEventsDisabled.size === 1 && (C.body.style.pointerEvents = oi);
      };
  }, [
    m,
    C,
    r,
    M
  ]), ke(() => () => {
    !m || (M.layers.delete(m), M.layersWithOutsidePointerEventsDisabled.delete(m), ai());
  }, [
    m,
    M
  ]), ke(() => {
    const de = () => O({});
    return document.addEventListener(zr, de), () => document.removeEventListener(zr, de);
  }, []), /* @__PURE__ */ Ie(Zt.div, jt({}, p, {
    ref: w,
    style: {
      pointerEvents: he ? fe ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Tt(e.onFocusCapture, Le.onFocusCapture),
    onBlurCapture: Tt(e.onBlurCapture, Le.onBlurCapture),
    onPointerDownCapture: Tt(e.onPointerDownCapture, ce.onPointerDownCapture)
  }));
});
function ia(e, t = globalThis?.document) {
  const n = Wt(e), r = Ue(!1), o = Ue(() => {
  });
  return ke(() => {
    const s = (f) => {
      if (f.target && !r.current) {
        let p = function() {
          Ki(ea, n, g, {
            discrete: !0
          });
        };
        const g = {
          originalEvent: f
        };
        f.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = p, t.addEventListener("click", o.current, {
          once: !0
        })) : p();
      }
      r.current = !1;
    }, h = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(h), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    onPointerDownCapture: () => r.current = !0
  };
}
function oa(e, t = globalThis?.document) {
  const n = Wt(e), r = Ue(!1);
  return ke(() => {
    const o = (s) => {
      s.target && !r.current && Ki(ta, n, {
        originalEvent: s
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ai() {
  const e = new CustomEvent(zr);
  document.dispatchEvent(e);
}
function Ki(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Jo(o, s) : o.dispatchEvent(s);
}
const Nr = "focusScope.autoFocusOnMount", Ir = "focusScope.autoFocusOnUnmount", si = {
  bubbles: !1,
  cancelable: !0
}, aa = /* @__PURE__ */ He((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...h } = e, [f, g] = $e(null), p = Wt(o), M = Wt(s), m = Ue(null), j = un(
    t,
    (w) => g(w)
  ), C = Ue({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  ke(() => {
    if (r) {
      let w = function(Z) {
        if (C.paused || !f)
          return;
        const q = Z.target;
        f.contains(q) ? m.current = q : Ut(m.current, {
          select: !0
        });
      }, P = function(Z) {
        C.paused || !f || f.contains(Z.relatedTarget) || Ut(m.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", w), document.addEventListener("focusout", P), () => {
        document.removeEventListener("focusin", w), document.removeEventListener("focusout", P);
      };
    }
  }, [
    r,
    f,
    C.paused
  ]), ke(() => {
    if (f) {
      ui.add(C);
      const w = document.activeElement;
      if (!f.contains(w)) {
        const Z = new CustomEvent(Nr, si);
        f.addEventListener(Nr, p), f.dispatchEvent(Z), Z.defaultPrevented || (sa(ha(Vi(f)), {
          select: !0
        }), document.activeElement === w && Ut(f));
      }
      return () => {
        f.removeEventListener(Nr, p), setTimeout(() => {
          const Z = new CustomEvent(Ir, si);
          f.addEventListener(Ir, M), f.dispatchEvent(Z), Z.defaultPrevented || Ut(w ?? document.body, {
            select: !0
          }), f.removeEventListener(Ir, M), ui.remove(C);
        }, 0);
      };
    }
  }, [
    f,
    p,
    M,
    C
  ]);
  const O = Ge((w) => {
    if (!n && !r || C.paused)
      return;
    const P = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, Z = document.activeElement;
    if (P && Z) {
      const q = w.currentTarget, [V, he] = ca(q);
      V && he ? !w.shiftKey && Z === he ? (w.preventDefault(), n && Ut(V, {
        select: !0
      })) : w.shiftKey && Z === V && (w.preventDefault(), n && Ut(he, {
        select: !0
      })) : Z === q && w.preventDefault();
    }
  }, [
    n,
    r,
    C.paused
  ]);
  return /* @__PURE__ */ Ie(Zt.div, jt({
    tabIndex: -1
  }, h, {
    ref: j,
    onKeyDown: O
  }));
});
function sa(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ut(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function ca(e) {
  const t = Vi(e), n = ci(t, e), r = ci(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Vi(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function ci(e, t) {
  for (const n of e)
    if (!ua(n, {
      upTo: t
    }))
      return n;
}
function ua(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function la(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && la(e) && t && e.select();
  }
}
const ui = fa();
function fa() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = li(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = li(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function li(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ha(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const da = /* @__PURE__ */ He((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Fi.createPortal(/* @__PURE__ */ Ie(Zt.div, jt({}, o, {
    ref: t
  })), r) : null;
});
function ya(e, t) {
  return Po((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const hr = (e) => {
  const { present: t, children: n } = e, r = va(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ft.only(n), s = un(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ qr(o, {
    ref: s
  }) : null;
};
hr.displayName = "Presence";
function va(e) {
  const [t, n] = $e(), r = Ue({}), o = Ue(e), s = Ue("none"), h = e ? "mounted" : "unmounted", [f, g] = ya(h, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return ke(() => {
    const p = kn(r.current);
    s.current = f === "mounted" ? p : "none";
  }, [
    f
  ]), Rr(() => {
    const p = r.current, M = o.current;
    if (M !== e) {
      const j = s.current, C = kn(p);
      e ? g("MOUNT") : C === "none" || p?.display === "none" ? g("UNMOUNT") : g(M && j !== C ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    g
  ]), Rr(() => {
    if (t) {
      const p = (m) => {
        const C = kn(r.current).includes(m.animationName);
        m.target === t && C && Wi(
          () => g("ANIMATION_END")
        );
      }, M = (m) => {
        m.target === t && (s.current = kn(r.current));
      };
      return t.addEventListener("animationstart", M), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        t.removeEventListener("animationstart", M), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      g("ANIMATION_END");
  }, [
    t,
    g
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(f),
    ref: Ge((p) => {
      p && (r.current = getComputedStyle(p)), n(p);
    }, [])
  };
}
function kn(e) {
  return e?.animationName || "none";
}
let wr = 0;
function ga() {
  ke(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : fi()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : fi()), wr++, () => {
      wr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), wr--;
    };
  }, []);
}
function fi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Ct = function() {
  return Ct = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ct.apply(this, arguments);
};
function pa(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ma(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Bn = "right-scroll-bar-position", Gn = "width-before-scroll-bar", ba = "with-scroll-bars-hidden", ma = "--removed-body-scroll-bar-size";
function Aa(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Na(e, t) {
  var n = $e(function() {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function Ia(e, t) {
  return Na(t || null, function(n) {
    return e.forEach(function(r) {
      return Aa(r, n);
    });
  });
}
var nr = function() {
  return nr = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, nr.apply(this, arguments);
};
function wa(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
var dr = { exports: {} }, Nn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hi;
function Ea() {
  if (hi)
    return Nn;
  hi = 1;
  var e = Xe, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(f, g, p) {
    var M, m = {}, j = null, C = null;
    p !== void 0 && (j = "" + p), g.key !== void 0 && (j = "" + g.key), g.ref !== void 0 && (C = g.ref);
    for (M in g)
      r.call(g, M) && !s.hasOwnProperty(M) && (m[M] = g[M]);
    if (f && f.defaultProps)
      for (M in g = f.defaultProps, g)
        m[M] === void 0 && (m[M] = g[M]);
    return { $$typeof: t, type: f, key: j, ref: C, props: m, _owner: o.current };
  }
  return Nn.Fragment = n, Nn.jsx = h, Nn.jsxs = h, Nn;
}
var In = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var di;
function Da() {
  return di || (di = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xe, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), f = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), O = Symbol.iterator, w = "@@iterator";
    function P(a) {
      if (a === null || typeof a != "object")
        return null;
      var d = O && a[O] || a[w];
      return typeof d == "function" ? d : null;
    }
    var Z = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(a) {
      {
        for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), b = 1; b < d; b++)
          y[b - 1] = arguments[b];
        V("error", a, y);
      }
    }
    function V(a, d, y) {
      {
        var b = Z.ReactDebugCurrentFrame, I = b.getStackAddendum();
        I !== "" && (d += "%s", y = y.concat([I]));
        var x = y.map(function(T) {
          return String(T);
        });
        x.unshift("Warning: " + d), Function.prototype.apply.call(console[a], console, x);
      }
    }
    var he = !1, fe = !1, ce = !1, Le = !1, de = !1, Re;
    Re = Symbol.for("react.module.reference");
    function te(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === r || a === s || de || a === o || a === p || a === M || Le || a === C || he || fe || ce || typeof a == "object" && a !== null && (a.$$typeof === j || a.$$typeof === m || a.$$typeof === h || a.$$typeof === f || a.$$typeof === g || a.$$typeof === Re || a.getModuleId !== void 0));
    }
    function Me(a, d, y) {
      var b = a.displayName;
      if (b)
        return b;
      var I = d.displayName || d.name || "";
      return I !== "" ? y + "(" + I + ")" : y;
    }
    function me(a) {
      return a.displayName || "Context";
    }
    function Ae(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case f:
            var d = a;
            return me(d) + ".Consumer";
          case h:
            var y = a;
            return me(y._context) + ".Provider";
          case g:
            return Me(a, a.render, "ForwardRef");
          case m:
            var b = a.displayName || null;
            return b !== null ? b : Ae(a.type) || "Memo";
          case j: {
            var I = a, x = I._payload, T = I._init;
            try {
              return Ae(T(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ne = Object.assign, Se = 0, we, tt, _e, Qe, st, ft, bt;
    function Je() {
    }
    Je.__reactDisabledLog = !0;
    function et() {
      {
        if (Se === 0) {
          we = console.log, tt = console.info, _e = console.warn, Qe = console.error, st = console.group, ft = console.groupCollapsed, bt = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        Se++;
      }
    }
    function le() {
      {
        if (Se--, Se === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ne({}, a, {
              value: we
            }),
            info: Ne({}, a, {
              value: tt
            }),
            warn: Ne({}, a, {
              value: _e
            }),
            error: Ne({}, a, {
              value: Qe
            }),
            group: Ne({}, a, {
              value: st
            }),
            groupCollapsed: Ne({}, a, {
              value: ft
            }),
            groupEnd: Ne({}, a, {
              value: bt
            })
          });
        }
        Se < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fe = Z.ReactCurrentDispatcher, Gt;
    function Lt(a, d, y) {
      {
        if (Gt === void 0)
          try {
            throw Error();
          } catch (I) {
            var b = I.stack.trim().match(/\n( *(at )?)/);
            Gt = b && b[1] || "";
          }
        return `
` + Gt + a;
      }
    }
    var mt = !1, ht;
    {
      var Pn = typeof WeakMap == "function" ? WeakMap : Map;
      ht = new Pn();
    }
    function St(a, d) {
      if (!a || mt)
        return "";
      {
        var y = ht.get(a);
        if (y !== void 0)
          return y;
      }
      var b;
      mt = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = Fe.current, Fe.current = null, et();
      try {
        if (d) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (H) {
              b = H;
            }
            Reflect.construct(a, [], T);
          } else {
            try {
              T.call();
            } catch (H) {
              b = H;
            }
            a.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            b = H;
          }
          a();
        }
      } catch (H) {
        if (H && b && typeof H.stack == "string") {
          for (var U = H.stack.split(`
`), R = b.stack.split(`
`), Q = U.length - 1, W = R.length - 1; Q >= 1 && W >= 0 && U[Q] !== R[W]; )
            W--;
          for (; Q >= 1 && W >= 0; Q--, W--)
            if (U[Q] !== R[W]) {
              if (Q !== 1 || W !== 1)
                do
                  if (Q--, W--, W < 0 || U[Q] !== R[W]) {
                    var X = `
` + U[Q].replace(" at new ", " at ");
                    return a.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", a.displayName)), typeof a == "function" && ht.set(a, X), X;
                  }
                while (Q >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        mt = !1, Fe.current = x, le(), Error.prepareStackTrace = I;
      }
      var $ = a ? a.displayName || a.name : "", ee = $ ? Lt($) : "";
      return typeof a == "function" && ht.set(a, ee), ee;
    }
    function zn(a, d, y) {
      return St(a, !1);
    }
    function br(a) {
      var d = a.prototype;
      return !!(d && d.isReactComponent);
    }
    function qt(a, d, y) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return St(a, br(a));
      if (typeof a == "string")
        return Lt(a);
      switch (a) {
        case p:
          return Lt("Suspense");
        case M:
          return Lt("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case g:
            return zn(a.render);
          case m:
            return qt(a.type, d, y);
          case j: {
            var b = a, I = b._payload, x = b._init;
            try {
              return qt(x(I), d, y);
            } catch {
            }
          }
        }
      return "";
    }
    var Kt = Object.prototype.hasOwnProperty, fn = {}, hn = Z.ReactDebugCurrentFrame;
    function nt(a) {
      if (a) {
        var d = a._owner, y = qt(a.type, a._source, d ? d.type : null);
        hn.setExtraStackFrame(y);
      } else
        hn.setExtraStackFrame(null);
    }
    function Vt(a, d, y, b, I) {
      {
        var x = Function.call.bind(Kt);
        for (var T in a)
          if (x(a, T)) {
            var U = void 0;
            try {
              if (typeof a[T] != "function") {
                var R = Error((b || "React class") + ": " + y + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              U = a[T](d, T, b, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              U = Q;
            }
            U && !(U instanceof Error) && (nt(I), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", y, T, typeof U), nt(null)), U instanceof Error && !(U.message in fn) && (fn[U.message] = !0, nt(I), q("Failed %s type: %s", y, U.message), nt(null));
          }
      }
    }
    var _n = Array.isArray;
    function Ot(a) {
      return _n(a);
    }
    function dn(a) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, y = d && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return y;
      }
    }
    function Xt(a) {
      try {
        return Ht(a), !1;
      } catch {
        return !0;
      }
    }
    function Ht(a) {
      return "" + a;
    }
    function xt(a) {
      if (Xt(a))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dn(a)), Ht(a);
    }
    var dt = Z.ReactCurrentOwner, yn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vn, Un, Rt;
    Rt = {};
    function gn(a) {
      if (Kt.call(a, "ref")) {
        var d = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Jt(a) {
      if (Kt.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Pt(a, d) {
      if (typeof a.ref == "string" && dt.current && d && dt.current.stateNode !== d) {
        var y = Ae(dt.current.type);
        Rt[y] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ae(dt.current.type), a.ref), Rt[y] = !0);
      }
    }
    function At(a, d) {
      {
        var y = function() {
          vn || (vn = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        y.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function zt(a, d) {
      {
        var y = function() {
          Un || (Un = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        y.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var $t = function(a, d, y, b, I, x, T) {
      var U = {
        $$typeof: t,
        type: a,
        key: d,
        ref: y,
        props: T,
        _owner: x
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function _t(a, d, y, b, I) {
      {
        var x, T = {}, U = null, R = null;
        y !== void 0 && (xt(y), U = "" + y), Jt(d) && (xt(d.key), U = "" + d.key), gn(d) && (R = d.ref, Pt(d, I));
        for (x in d)
          Kt.call(d, x) && !yn.hasOwnProperty(x) && (T[x] = d[x]);
        if (a && a.defaultProps) {
          var Q = a.defaultProps;
          for (x in Q)
            T[x] === void 0 && (T[x] = Q[x]);
        }
        if (U || R) {
          var W = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          U && At(T, W), R && zt(T, W);
        }
        return $t(a, U, R, I, b, dt.current, T);
      }
    }
    var yt = Z.ReactCurrentOwner, en = Z.ReactDebugCurrentFrame;
    function vt(a) {
      if (a) {
        var d = a._owner, y = qt(a.type, a._source, d ? d.type : null);
        en.setExtraStackFrame(y);
      } else
        en.setExtraStackFrame(null);
    }
    var pn;
    pn = !1;
    function Mn(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function rt() {
      {
        if (yt.current) {
          var a = Ae(yt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function gt(a) {
      {
        if (a !== void 0) {
          var d = a.fileName.replace(/^.*[\\\/]/, ""), y = a.lineNumber;
          return `

Check your code at ` + d + ":" + y + ".";
        }
        return "";
      }
    }
    var pt = {};
    function bn(a) {
      {
        var d = rt();
        if (!d) {
          var y = typeof a == "string" ? a : a.displayName || a.name;
          y && (d = `

Check the top-level render call using <` + y + ">.");
        }
        return d;
      }
    }
    function tn(a, d) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var y = bn(d);
        if (pt[y])
          return;
        pt[y] = !0;
        var b = "";
        a && a._owner && a._owner !== yt.current && (b = " It was passed a child from " + Ae(a._owner.type) + "."), vt(a), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, b), vt(null);
      }
    }
    function mn(a, d) {
      {
        if (typeof a != "object")
          return;
        if (Ot(a))
          for (var y = 0; y < a.length; y++) {
            var b = a[y];
            Mn(b) && tn(b, d);
          }
        else if (Mn(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var I = P(a);
          if (typeof I == "function" && I !== a.entries)
            for (var x = I.call(a), T; !(T = x.next()).done; )
              Mn(T.value) && tn(T.value, d);
        }
      }
    }
    function mr(a) {
      {
        var d = a.type;
        if (d == null || typeof d == "string")
          return;
        var y;
        if (typeof d == "function")
          y = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === g || d.$$typeof === m))
          y = d.propTypes;
        else
          return;
        if (y) {
          var b = Ae(d);
          Vt(y, a.props, "prop", b, a);
        } else if (d.PropTypes !== void 0 && !pn) {
          pn = !0;
          var I = Ae(d);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qe(a) {
      {
        for (var d = Object.keys(a.props), y = 0; y < d.length; y++) {
          var b = d[y];
          if (b !== "children" && b !== "key") {
            vt(a), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), vt(null);
            break;
          }
        }
        a.ref !== null && (vt(a), q("Invalid attribute `ref` supplied to `React.Fragment`."), vt(null));
      }
    }
    function An(a, d, y, b, I, x) {
      {
        var T = te(a);
        if (!T) {
          var U = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = gt(I);
          R ? U += R : U += rt();
          var Q;
          a === null ? Q = "null" : Ot(a) ? Q = "array" : a !== void 0 && a.$$typeof === t ? (Q = "<" + (Ae(a.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof a, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, U);
        }
        var W = _t(a, d, y, I, x);
        if (W == null)
          return W;
        if (T) {
          var X = d.children;
          if (X !== void 0)
            if (b)
              if (Ot(X)) {
                for (var $ = 0; $ < X.length; $++)
                  mn(X[$], a);
                Object.freeze && Object.freeze(X);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mn(X, a);
        }
        return a === r ? qe(W) : mr(W), W;
      }
    }
    function c(a, d, y) {
      return An(a, d, y, !0);
    }
    function l(a, d, y) {
      return An(a, d, y, !1);
    }
    var u = l, i = c;
    In.Fragment = r, In.jsx = u, In.jsxs = i;
  }()), In;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ea() : e.exports = Da();
})(dr);
const rr = dr.exports.Fragment, F = dr.exports.jsx, xe = dr.exports.jsxs;
function Ca(e) {
  return e;
}
function Ta(e, t) {
  t === void 0 && (t = Ca);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var h = t(s, r);
      return n.push(h), function() {
        n = n.filter(function(f) {
          return f !== h;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var h = n;
        n = [], h.forEach(s);
      }
      n = {
        push: function(f) {
          return s(f);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var h = [];
      if (n.length) {
        var f = n;
        n = [], f.forEach(s), h = n;
      }
      var g = function() {
        var M = h;
        h = [], M.forEach(s);
      }, p = function() {
        return Promise.resolve().then(g);
      };
      p(), n = {
        push: function(M) {
          h.push(M), p();
        },
        filter: function(M) {
          return h = h.filter(M), n;
        }
      };
    }
  };
  return o;
}
function ja(e) {
  e === void 0 && (e = {});
  var t = Ta(null);
  return t.options = nr({ async: !0, ssr: !1 }, e), t;
}
var Xi = function(e) {
  var t = e.sideCar, n = wa(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ F(r, {
    ...nr({}, n)
  });
};
Xi.isSideCarExport = !0;
function La(e, t) {
  return e.useMedium(t), Xi;
}
var Hi = ja(), Er = function() {
}, yr = Ee.forwardRef(function(e, t) {
  var n = Ee.useRef(null), r = Ee.useState({
    onScrollCapture: Er,
    onWheelCapture: Er,
    onTouchMoveCapture: Er
  }), o = r[0], s = r[1], h = e.forwardProps, f = e.children, g = e.className, p = e.removeScrollBar, M = e.enabled, m = e.shards, j = e.sideCar, C = e.noIsolation, O = e.inert, w = e.allowPinchZoom, P = e.as, Z = P === void 0 ? "div" : P, q = pa(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), V = j, he = Ia([n, t]), fe = Ct(Ct({}, q), o);
  return /* @__PURE__ */ xe(rr, {
    children: [M && /* @__PURE__ */ F(V, {
      sideCar: Hi,
      removeScrollBar: p,
      shards: m,
      noIsolation: C,
      inert: O,
      setCallbacks: s,
      allowPinchZoom: !!w,
      lockRef: n
    }), h ? Ee.cloneElement(Ee.Children.only(f), Ct(Ct({}, fe), {
      ref: he
    })) : /* @__PURE__ */ F(Z, {
      ...Ct({}, fe, {
        className: g,
        ref: he
      }),
      children: f
    })]
  });
});
yr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
yr.classNames = {
  fullWidth: Gn,
  zeroRight: Bn
};
var Sa = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Oa() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Sa();
  return t && e.setAttribute("nonce", t), e;
}
function xa(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ra(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Pa = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Oa()) && (xa(t, n), Ra(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, za = function() {
  var e = Pa();
  return function(t, n) {
    Ee.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ji = function() {
  var e = za(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, _a = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Dr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ua = function(e) {
  var t = window.getComputedStyle(document.body);
  process.env.NODE_ENV !== "production" && t.overflowY === "hidden" && console.error("react-remove-scroll-bar: cannot calculate scrollbar size because it is removed (overflow:hidden on body");
  var n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Dr(n), Dr(r), Dr(o)];
}, ka = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return _a;
  var t = Ua(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Qa = Ji(), Fa = function(e, t, n, r) {
  var o = e.left, s = e.top, h = e.right, f = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ba, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(f, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(h, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(f, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(f, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Bn, ` {
    right: `).concat(f, "px ").concat(r, `;
  }
  
  .`).concat(Gn, ` {
    margin-right: `).concat(f, "px ").concat(r, `;
  }
  
  .`).concat(Bn, " .").concat(Bn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Gn, " .").concat(Gn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(ma, ": ").concat(f, `px;
  }
`);
}, Wa = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, s = Ee.useMemo(function() {
    return ka(o);
  }, [o]);
  return /* @__PURE__ */ F(Qa, {
    styles: Fa(s, !t, o, n ? "" : "!important")
  });
}, _r = !1;
if (typeof window < "u")
  try {
    var Qn = Object.defineProperty({}, "passive", {
      get: function() {
        return _r = !0, !0;
      }
    });
    window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
  } catch {
    _r = !1;
  }
var nn = _r ? { passive: !1 } : !1, Ya = function(e) {
  return e.tagName === "TEXTAREA";
}, $i = function(e, t) {
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ya(e) && n[t] === "visible");
}, Za = function(e) {
  return $i(e, "overflowY");
}, Ba = function(e) {
  return $i(e, "overflowX");
}, yi = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = eo(e, n);
    if (r) {
      var o = to(e, n), s = o[1], h = o[2];
      if (s > h)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Ga = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, qa = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, eo = function(e, t) {
  return e === "v" ? Za(t) : Ba(t);
}, to = function(e, t) {
  return e === "v" ? Ga(t) : qa(t);
}, Ka = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Va = function(e, t, n, r, o) {
  var s = Ka(e, window.getComputedStyle(t).direction), h = s * r, f = n.target, g = t.contains(f), p = !1, M = h > 0, m = 0, j = 0;
  do {
    var C = to(e, f), O = C[0], w = C[1], P = C[2], Z = w - P - s * O;
    (O || Z) && eo(e, f) && (m += Z, j += O), f = f.parentNode;
  } while (!g && f !== document.body || g && (t.contains(f) || t === f));
  return (M && (o && m === 0 || !o && h > m) || !M && (o && j === 0 || !o && -h > j)) && (p = !0), p;
}, Fn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, vi = function(e) {
  return [e.deltaX, e.deltaY];
}, gi = function(e) {
  return e && "current" in e ? e.current : e;
}, Xa = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ha = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Ja = 0, rn = [];
function $a(e) {
  var t = Ee.useRef([]), n = Ee.useRef([0, 0]), r = Ee.useRef(), o = Ee.useState(Ja++)[0], s = Ee.useState(function() {
    return Ji();
  })[0], h = Ee.useRef(e);
  Ee.useEffect(function() {
    h.current = e;
  }, [e]), Ee.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var w = Ma([e.lockRef.current], (e.shards || []).map(gi), !0).filter(Boolean);
      return w.forEach(function(P) {
        return P.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), w.forEach(function(P) {
          return P.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var f = Ee.useCallback(function(w, P) {
    if ("touches" in w && w.touches.length === 2)
      return !h.current.allowPinchZoom;
    var Z = Fn(w), q = n.current, V = "deltaX" in w ? w.deltaX : q[0] - Z[0], he = "deltaY" in w ? w.deltaY : q[1] - Z[1], fe, ce = w.target, Le = Math.abs(V) > Math.abs(he) ? "h" : "v";
    if ("touches" in w && Le === "h" && ce.type === "range")
      return !1;
    var de = yi(Le, ce);
    if (!de)
      return !0;
    if (de ? fe = Le : (fe = Le === "v" ? "h" : "v", de = yi(Le, ce)), !de)
      return !1;
    if (!r.current && "changedTouches" in w && (V || he) && (r.current = fe), !fe)
      return !0;
    var Re = r.current || fe;
    return Va(Re, P, w, Re === "h" ? V : he, !0);
  }, []), g = Ee.useCallback(function(w) {
    var P = w;
    if (!(!rn.length || rn[rn.length - 1] !== s)) {
      var Z = "deltaY" in P ? vi(P) : Fn(P), q = t.current.filter(function(fe) {
        return fe.name === P.type && fe.target === P.target && Xa(fe.delta, Z);
      })[0];
      if (q && q.should) {
        P.cancelable && P.preventDefault();
        return;
      }
      if (!q) {
        var V = (h.current.shards || []).map(gi).filter(Boolean).filter(function(fe) {
          return fe.contains(P.target);
        }), he = V.length > 0 ? f(P, V[0]) : !h.current.noIsolation;
        he && P.cancelable && P.preventDefault();
      }
    }
  }, []), p = Ee.useCallback(function(w, P, Z, q) {
    var V = {
      name: w,
      delta: P,
      target: Z,
      should: q
    };
    t.current.push(V), setTimeout(function() {
      t.current = t.current.filter(function(he) {
        return he !== V;
      });
    }, 1);
  }, []), M = Ee.useCallback(function(w) {
    n.current = Fn(w), r.current = void 0;
  }, []), m = Ee.useCallback(function(w) {
    p(w.type, vi(w), w.target, f(w, e.lockRef.current));
  }, []), j = Ee.useCallback(function(w) {
    p(w.type, Fn(w), w.target, f(w, e.lockRef.current));
  }, []);
  Ee.useEffect(function() {
    return rn.push(s), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: j
    }), document.addEventListener("wheel", g, nn), document.addEventListener("touchmove", g, nn), document.addEventListener("touchstart", M, nn), function() {
      rn = rn.filter(function(w) {
        return w !== s;
      }), document.removeEventListener("wheel", g, nn), document.removeEventListener("touchmove", g, nn), document.removeEventListener("touchstart", M, nn);
    };
  }, []);
  var C = e.removeScrollBar, O = e.inert;
  return /* @__PURE__ */ xe(rr, {
    children: [O ? /* @__PURE__ */ F(s, {
      styles: Ha(o)
    }) : null, C ? /* @__PURE__ */ F(Wa, {
      gapMode: "margin"
    }) : null]
  });
}
const es = La(Hi, $a);
var no = Ee.forwardRef(function(e, t) {
  return /* @__PURE__ */ F(yr, {
    ...Ct({}, e, {
      ref: t,
      sideCar: es
    })
  });
});
no.classNames = yr.classNames;
const ts = no;
var ns = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, on = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Yn = {}, Cr = 0, rs = function(e, t, n, r) {
  var o = Array.isArray(e) ? e : [e];
  Yn[n] || (Yn[n] = /* @__PURE__ */ new WeakMap());
  var s = Yn[n], h = [], f = /* @__PURE__ */ new Set(), g = new Set(o), p = function(m) {
    !m || f.has(m) || (f.add(m), p(m.parentNode));
  };
  o.forEach(p);
  var M = function(m) {
    !m || g.has(m) || Array.prototype.forEach.call(m.children, function(j) {
      if (f.has(j))
        M(j);
      else {
        var C = j.getAttribute(r), O = C !== null && C !== "false", w = (on.get(j) || 0) + 1, P = (s.get(j) || 0) + 1;
        on.set(j, w), s.set(j, P), h.push(j), w === 1 && O && Wn.set(j, !0), P === 1 && j.setAttribute(n, "true"), O || j.setAttribute(r, "true");
      }
    });
  };
  return M(t), f.clear(), Cr++, function() {
    h.forEach(function(m) {
      var j = on.get(m) - 1, C = s.get(m) - 1;
      on.set(m, j), s.set(m, C), j || (Wn.has(m) || m.removeAttribute(r), Wn.delete(m)), C || m.removeAttribute(n);
    }), Cr--, Cr || (on = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Yn = {});
  };
}, is = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || ns(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), rs(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
const ro = "Dialog", [io, _f] = Wo(ro), [os, lt] = io(ro), as = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: h = !0 } = e, f = Ue(null), g = Ue(null), [p = !1, M] = Go({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ Ie(os, {
    scope: t,
    triggerRef: f,
    contentRef: g,
    contentId: Ar(),
    titleId: Ar(),
    descriptionId: Ar(),
    open: p,
    onOpenChange: M,
    onOpenToggle: Ge(
      () => M(
        (m) => !m
      ),
      [
        M
      ]
    ),
    modal: h
  }, n);
}, ss = "DialogTrigger", cs = /* @__PURE__ */ He((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(ss, n), s = un(t, o.triggerRef);
  return /* @__PURE__ */ Ie(Zt.button, ae({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Vr(o.open)
  }, r, {
    ref: s,
    onClick: Tt(e.onClick, o.onOpenToggle)
  }));
}), oo = "DialogPortal", [us, ao] = io(oo, {
  forceMount: void 0
}), ls = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = lt(oo, t);
  return /* @__PURE__ */ Ie(us, {
    scope: t,
    forceMount: n
  }, Ft.map(
    r,
    (h) => /* @__PURE__ */ Ie(hr, {
      present: n || s.open
    }, /* @__PURE__ */ Ie(da, {
      asChild: !0,
      container: o
    }, h))
  ));
}, Ur = "DialogOverlay", fs = /* @__PURE__ */ He((e, t) => {
  const n = ao(Ur, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = lt(Ur, e.__scopeDialog);
  return s.modal ? /* @__PURE__ */ Ie(hr, {
    present: r || s.open
  }, /* @__PURE__ */ Ie(hs, ae({}, o, {
    ref: t
  }))) : null;
}), hs = /* @__PURE__ */ He((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(Ur, n);
  return /* @__PURE__ */ Ie(ts, {
    as: Kr,
    allowPinchZoom: !0,
    shards: [
      o.contentRef
    ]
  }, /* @__PURE__ */ Ie(Zt.div, ae({
    "data-state": Vr(o.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), Tn = "DialogContent", ds = /* @__PURE__ */ He((e, t) => {
  const n = ao(Tn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = lt(Tn, e.__scopeDialog);
  return /* @__PURE__ */ Ie(hr, {
    present: r || s.open
  }, s.modal ? /* @__PURE__ */ Ie(ys, ae({}, o, {
    ref: t
  })) : /* @__PURE__ */ Ie(vs, ae({}, o, {
    ref: t
  })));
}), ys = /* @__PURE__ */ He((e, t) => {
  const n = lt(Tn, e.__scopeDialog), r = Ue(null), o = un(t, n.contentRef, r);
  return ke(() => {
    const s = r.current;
    if (s)
      return is(s);
  }, []), /* @__PURE__ */ Ie(so, ae({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Tt(e.onCloseAutoFocus, (s) => {
      var h;
      s.preventDefault(), (h = n.triggerRef.current) === null || h === void 0 || h.focus();
    }),
    onPointerDownOutside: Tt(e.onPointerDownOutside, (s) => {
      const h = s.detail.originalEvent, f = h.button === 0 && h.ctrlKey === !0;
      (h.button === 2 || f) && s.preventDefault();
    }),
    onFocusOutside: Tt(
      e.onFocusOutside,
      (s) => s.preventDefault()
    )
  }));
}), vs = /* @__PURE__ */ He((e, t) => {
  const n = lt(Tn, e.__scopeDialog), r = Ue(!1);
  return /* @__PURE__ */ Ie(so, ae({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, o), !o.defaultPrevented) {
        var h;
        r.current || (h = n.triggerRef.current) === null || h === void 0 || h.focus(), o.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (o) => {
      var s, h;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, o), o.defaultPrevented || (r.current = !0);
      const f = o.target;
      ((h = n.triggerRef.current) === null || h === void 0 ? void 0 : h.contains(f)) && o.preventDefault();
    }
  }));
}), so = /* @__PURE__ */ He((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...h } = e, f = lt(Tn, n), g = Ue(null), p = un(t, g);
  return ga(), /* @__PURE__ */ Ie(Qi, null, /* @__PURE__ */ Ie(aa, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ Ie(ra, ae({
    role: "dialog",
    id: f.contentId,
    "aria-describedby": f.descriptionId,
    "aria-labelledby": f.titleId,
    "data-state": Vr(f.open)
  }, h, {
    ref: p,
    onDismiss: () => f.onOpenChange(!1)
  }))), !1);
}), gs = "DialogTitle", ps = /* @__PURE__ */ He((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(gs, n);
  return /* @__PURE__ */ Ie(Zt.h2, ae({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), Ms = "DialogClose", bs = /* @__PURE__ */ He((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = lt(Ms, n);
  return /* @__PURE__ */ Ie(Zt.button, ae({
    type: "button"
  }, r, {
    ref: t,
    onClick: Tt(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Vr(e) {
  return e ? "open" : "closed";
}
const ms = as, As = cs, Ns = ls, Is = fs, ws = ds, jn = ps, Es = bs, Ds = (e) => /* @__PURE__ */ xe(ms, {
  open: e.open,
  onOpenChange: e.onOpenChange,
  children: [/* @__PURE__ */ F(As, {
    asChild: !0,
    children: e.trigger
  }), /* @__PURE__ */ F(Ns, {
    children: /* @__PURE__ */ F(Is, {
      className: "wkit-dialog__overlay",
      children: /* @__PURE__ */ F(ws, {
        ...e.contentProps,
        className: tr("wkit-dialog__content", e.className),
        style: e.style,
        children: e.children
      })
    })
  })]
});
function co() {
  return /* @__PURE__ */ F("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ F("path", {
      d: "M15.8332 10.0003H4.1665M4.1665 10.0003L9.99984 15.8337M4.1665 10.0003L9.99984 4.16699",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function Cs() {
  return /* @__PURE__ */ F("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ F("path", {
      d: "M15 5L5 15M5 5L15 15",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function Ts() {
  return /* @__PURE__ */ xe("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ F("g", {
      clipPath: "url(#clip0_1790_28273)",
      children: /* @__PURE__ */ F("path", {
        d: "M9.99989 10.9766L14.1249 6.85156L15.3032 8.0299L9.99989 13.3332L4.69656 8.0299L5.87489 6.85156L9.99989 10.9766Z",
        fill: "currentColor"
      })
    }), /* @__PURE__ */ F("defs", {
      children: /* @__PURE__ */ F("clipPath", {
        id: "clip0_1790_28273",
        children: /* @__PURE__ */ F("rect", {
          width: "20",
          height: "20",
          fill: "white",
          transform: "translate(20) rotate(90)"
        })
      })
    })]
  });
}
var ot = /* @__PURE__ */ ((e) => (e.DISCONNECTED = "disconnected", e.CONNECTED = "connected", e.CONNECTING = "connecting", e))(ot || {}), js = Object.defineProperty, Ls = (e, t, n) => t in e ? js(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pi = (e, t, n) => (Ls(e, typeof t != "symbol" ? t + "" : t, n), n), at = /* @__PURE__ */ ((e) => (e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.KIT__UNKNOWN_ERROR = "KIT.UNKNOWN_ERROR", e.WALLET__UNKNOWN_ERROR = "WALLET.UNKNOWN_ERROR", e.WALLET__CONNECT_ERROR = "WALLET.CONNECT_ERROR", e.WALLET__CONNECT_ERROR__USER_REJECTED = "WALLET.CONNECT_ERROR.USER_REJECTED", e.WALLET__DISCONNECT_ERROR = "WALLET.DISCONNECT_ERROR", e.WALLET__SIGN_TX_ERROR = "WALLET.SIGN_TX_ERROR", e.WALLET__SIGN_MSG_ERROR = "WALLET.SIGN_MSG_ERROR", e.WALLET__LISTEN_TO_EVENT_ERROR = "WALLET.LISTEN_TO_EVENT_ERROR", e.WALLET__METHOD_NOT_IMPLEMENTED_ERROR = "WALLET.METHOD_NOT_IMPLEMENTED_ERROR", e))(at || {});
class uo extends Error {
  constructor(t, n = "UNKNOWN_ERROR", r) {
    super(t), pi(this, "code"), pi(this, "details"), this.details = r, this.code = n, this.message = this.formatErrorStr(n, t, r);
  }
  formatErrorStr(t, n, r) {
    let o = `[${this.code}] ${n}`;
    return r && (o += " | details: " + JSON.stringify(r)), o;
  }
}
class Ke extends uo {
  constructor(t = "kit unknown error", n = "KIT.UNKNOWN_ERROR", r) {
    super(t, n, r);
  }
}
class kt extends uo {
  constructor(t = "wallet unknown error", n = "WALLET.UNKNOWN_ERROR", r) {
    super(t, n, r);
  }
}
class Ss extends kt {
  constructor(t) {
    super(`wallet does not implement function: ${t}`, "WALLET.METHOD_NOT_IMPLEMENTED_ERROR");
  }
}
function Nt(e) {
  return `Failed to call ${e}, missing context provider to run within`;
}
const Os = {
  configuredWallets: [],
  detectedWallets: [],
  allAvailableWallets: [],
  chains: [],
  chain: void 0,
  name: void 0,
  adapter: void 0,
  connecting: !1,
  connected: !1,
  account: void 0,
  status: ot.DISCONNECTED,
  address: void 0,
  async select() {
    throw new Ke(Nt("select"));
  },
  on() {
    throw new Ke(Nt("on"));
  },
  async disconnect() {
    throw new Ke(Nt("disconnect"));
  },
  getAccounts() {
    throw new Ke(Nt("getAccounts"));
  },
  async signAndExecuteTransactionBlock() {
    throw new Ke(Nt("signAndExecuteTransactionBlock"));
  },
  async signTransactionBlock() {
    throw new Ke(Nt("signTransactionBlock"));
  },
  async signMessage() {
    throw new Ke(Nt("signMessage"));
  },
  verifySignedMessage() {
    throw new Ke(Nt("verifySignedMessage"));
  }
}, lo = $n(Os);
function On() {
  return Gr(lo);
}
function kr(e, t) {
  return kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, kr(e, t);
}
function xn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, kr(e, t);
}
var Rn = /* @__PURE__ */ function() {
  function e() {
    this.listeners = [];
  }
  var t = e.prototype;
  return t.subscribe = function(r) {
    var o = this, s = r || function() {
    };
    return this.listeners.push(s), this.onSubscribe(), function() {
      o.listeners = o.listeners.filter(function(h) {
        return h !== s;
      }), o.onUnsubscribe();
    };
  }, t.hasListeners = function() {
    return this.listeners.length > 0;
  }, t.onSubscribe = function() {
  }, t.onUnsubscribe = function() {
  }, e;
}(), ir = typeof window > "u";
function Be() {
}
function xs(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qr(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function or(e) {
  return Array.isArray(e) ? e : [e];
}
function fo(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function qn(e, t, n) {
  return vr(e) ? typeof t == "function" ? ae({}, n, {
    queryKey: e,
    queryFn: t
  }) : ae({}, t, {
    queryKey: e
  }) : e;
}
function Dt(e, t, n) {
  return vr(e) ? [ae({}, t, {
    queryKey: e
  }), n] : [e || {}, t];
}
function Rs(e, t) {
  if (e === !0 && t === !0 || e == null && t == null)
    return "all";
  if (e === !1 && t === !1)
    return "none";
  var n = e ?? !t;
  return n ? "active" : "inactive";
}
function Mi(e, t) {
  var n = e.active, r = e.exact, o = e.fetching, s = e.inactive, h = e.predicate, f = e.queryKey, g = e.stale;
  if (vr(f)) {
    if (r) {
      if (t.queryHash !== Xr(f, t.options))
        return !1;
    } else if (!ar(t.queryKey, f))
      return !1;
  }
  var p = Rs(n, s);
  if (p === "none")
    return !1;
  if (p !== "all") {
    var M = t.isActive();
    if (p === "active" && !M || p === "inactive" && M)
      return !1;
  }
  return !(typeof g == "boolean" && t.isStale() !== g || typeof o == "boolean" && t.isFetching() !== o || h && !h(t));
}
function bi(e, t) {
  var n = e.exact, r = e.fetching, o = e.predicate, s = e.mutationKey;
  if (vr(s)) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (Qt(t.options.mutationKey) !== Qt(s))
        return !1;
    } else if (!ar(t.options.mutationKey, s))
      return !1;
  }
  return !(typeof r == "boolean" && t.state.status === "loading" !== r || o && !o(t));
}
function Xr(e, t) {
  var n = t?.queryKeyHashFn || Qt;
  return n(e);
}
function Qt(e) {
  var t = or(e);
  return Ps(t);
}
function Ps(e) {
  return JSON.stringify(e, function(t, n) {
    return Fr(n) ? Object.keys(n).sort().reduce(function(r, o) {
      return r[o] = n[o], r;
    }, {}) : n;
  });
}
function ar(e, t) {
  return ho(or(e), or(t));
}
function ho(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(function(n) {
    return !ho(e[n], t[n]);
  }) : !1;
}
function sr(e, t) {
  if (e === t)
    return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || Fr(e) && Fr(t)) {
    for (var r = n ? e.length : Object.keys(e).length, o = n ? t : Object.keys(t), s = o.length, h = n ? [] : {}, f = 0, g = 0; g < s; g++) {
      var p = n ? g : o[g];
      h[p] = sr(e[p], t[p]), h[p] === e[p] && f++;
    }
    return r === s && f === r ? e : h;
  }
  return t;
}
function zs(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Fr(e) {
  if (!mi(e))
    return !1;
  var t = e.constructor;
  if (typeof t > "u")
    return !0;
  var n = t.prototype;
  return !(!mi(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function mi(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function vr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function _s(e) {
  return new Promise(function(t) {
    setTimeout(t, e);
  });
}
function Ai(e) {
  Promise.resolve().then(e).catch(function(t) {
    return setTimeout(function() {
      throw t;
    });
  });
}
function yo() {
  if (typeof AbortController == "function")
    return new AbortController();
}
var Us = /* @__PURE__ */ function(e) {
  xn(t, e);
  function t() {
    var r;
    return r = e.call(this) || this, r.setup = function(o) {
      var s;
      if (!ir && ((s = window) == null ? void 0 : s.addEventListener)) {
        var h = function() {
          return o();
        };
        return window.addEventListener("visibilitychange", h, !1), window.addEventListener("focus", h, !1), function() {
          window.removeEventListener("visibilitychange", h), window.removeEventListener("focus", h);
        };
      }
    }, r;
  }
  var n = t.prototype;
  return n.onSubscribe = function() {
    this.cleanup || this.setEventListener(this.setup);
  }, n.onUnsubscribe = function() {
    if (!this.hasListeners()) {
      var o;
      (o = this.cleanup) == null || o.call(this), this.cleanup = void 0;
    }
  }, n.setEventListener = function(o) {
    var s, h = this;
    this.setup = o, (s = this.cleanup) == null || s.call(this), this.cleanup = o(function(f) {
      typeof f == "boolean" ? h.setFocused(f) : h.onFocus();
    });
  }, n.setFocused = function(o) {
    this.focused = o, o && this.onFocus();
  }, n.onFocus = function() {
    this.listeners.forEach(function(o) {
      o();
    });
  }, n.isFocused = function() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }, t;
}(Rn), Dn = new Us(), ks = /* @__PURE__ */ function(e) {
  xn(t, e);
  function t() {
    var r;
    return r = e.call(this) || this, r.setup = function(o) {
      var s;
      if (!ir && ((s = window) == null ? void 0 : s.addEventListener)) {
        var h = function() {
          return o();
        };
        return window.addEventListener("online", h, !1), window.addEventListener("offline", h, !1), function() {
          window.removeEventListener("online", h), window.removeEventListener("offline", h);
        };
      }
    }, r;
  }
  var n = t.prototype;
  return n.onSubscribe = function() {
    this.cleanup || this.setEventListener(this.setup);
  }, n.onUnsubscribe = function() {
    if (!this.hasListeners()) {
      var o;
      (o = this.cleanup) == null || o.call(this), this.cleanup = void 0;
    }
  }, n.setEventListener = function(o) {
    var s, h = this;
    this.setup = o, (s = this.cleanup) == null || s.call(this), this.cleanup = o(function(f) {
      typeof f == "boolean" ? h.setOnline(f) : h.onOnline();
    });
  }, n.setOnline = function(o) {
    this.online = o, o && this.onOnline();
  }, n.onOnline = function() {
    this.listeners.forEach(function(o) {
      o();
    });
  }, n.isOnline = function() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }, t;
}(Rn), Kn = new ks();
function Qs(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function cr(e) {
  return typeof e?.cancel == "function";
}
var vo = function(t) {
  this.revert = t?.revert, this.silent = t?.silent;
};
function Vn(e) {
  return e instanceof vo;
}
var go = function(t) {
  var n = this, r = !1, o, s, h, f;
  this.abort = t.abort, this.cancel = function(j) {
    return o?.(j);
  }, this.cancelRetry = function() {
    r = !0;
  }, this.continueRetry = function() {
    r = !1;
  }, this.continue = function() {
    return s?.();
  }, this.failureCount = 0, this.isPaused = !1, this.isResolved = !1, this.isTransportCancelable = !1, this.promise = new Promise(function(j, C) {
    h = j, f = C;
  });
  var g = function(C) {
    n.isResolved || (n.isResolved = !0, t.onSuccess == null || t.onSuccess(C), s?.(), h(C));
  }, p = function(C) {
    n.isResolved || (n.isResolved = !0, t.onError == null || t.onError(C), s?.(), f(C));
  }, M = function() {
    return new Promise(function(C) {
      s = C, n.isPaused = !0, t.onPause == null || t.onPause();
    }).then(function() {
      s = void 0, n.isPaused = !1, t.onContinue == null || t.onContinue();
    });
  }, m = function j() {
    if (!n.isResolved) {
      var C;
      try {
        C = t.fn();
      } catch (O) {
        C = Promise.reject(O);
      }
      o = function(w) {
        if (!n.isResolved && (p(new vo(w)), n.abort == null || n.abort(), cr(C)))
          try {
            C.cancel();
          } catch {
          }
      }, n.isTransportCancelable = cr(C), Promise.resolve(C).then(g).catch(function(O) {
        var w, P;
        if (!n.isResolved) {
          var Z = (w = t.retry) != null ? w : 3, q = (P = t.retryDelay) != null ? P : Qs, V = typeof q == "function" ? q(n.failureCount, O) : q, he = Z === !0 || typeof Z == "number" && n.failureCount < Z || typeof Z == "function" && Z(n.failureCount, O);
          if (r || !he) {
            p(O);
            return;
          }
          n.failureCount++, t.onFail == null || t.onFail(n.failureCount, O), _s(V).then(function() {
            if (!Dn.isFocused() || !Kn.isOnline())
              return M();
          }).then(function() {
            r ? p(O) : j();
          });
        }
      });
    }
  };
  m();
}, Fs = /* @__PURE__ */ function() {
  function e() {
    this.queue = [], this.transactions = 0, this.notifyFn = function(n) {
      n();
    }, this.batchNotifyFn = function(n) {
      n();
    };
  }
  var t = e.prototype;
  return t.batch = function(r) {
    var o;
    this.transactions++;
    try {
      o = r();
    } finally {
      this.transactions--, this.transactions || this.flush();
    }
    return o;
  }, t.schedule = function(r) {
    var o = this;
    this.transactions ? this.queue.push(r) : Ai(function() {
      o.notifyFn(r);
    });
  }, t.batchCalls = function(r) {
    var o = this;
    return function() {
      for (var s = arguments.length, h = new Array(s), f = 0; f < s; f++)
        h[f] = arguments[f];
      o.schedule(function() {
        r.apply(void 0, h);
      });
    };
  }, t.flush = function() {
    var r = this, o = this.queue;
    this.queue = [], o.length && Ai(function() {
      r.batchNotifyFn(function() {
        o.forEach(function(s) {
          r.notifyFn(s);
        });
      });
    });
  }, t.setNotifyFunction = function(r) {
    this.notifyFn = r;
  }, t.setBatchNotifyFunction = function(r) {
    this.batchNotifyFn = r;
  }, e;
}(), je = new Fs(), po = console;
function ur() {
  return po;
}
function Ws(e) {
  po = e;
}
var Ys = /* @__PURE__ */ function() {
  function e(n) {
    this.abortSignalConsumed = !1, this.hadObservers = !1, this.defaultOptions = n.defaultOptions, this.setOptions(n.options), this.observers = [], this.cache = n.cache, this.queryKey = n.queryKey, this.queryHash = n.queryHash, this.initialState = n.state || this.getDefaultState(this.options), this.state = this.initialState, this.meta = n.meta, this.scheduleGc();
  }
  var t = e.prototype;
  return t.setOptions = function(r) {
    var o;
    this.options = ae({}, this.defaultOptions, r), this.meta = r?.meta, this.cacheTime = Math.max(this.cacheTime || 0, (o = this.options.cacheTime) != null ? o : 5 * 60 * 1e3);
  }, t.setDefaultOptions = function(r) {
    this.defaultOptions = r;
  }, t.scheduleGc = function() {
    var r = this;
    this.clearGcTimeout(), Qr(this.cacheTime) && (this.gcTimeout = setTimeout(function() {
      r.optionalRemove();
    }, this.cacheTime));
  }, t.clearGcTimeout = function() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }, t.optionalRemove = function() {
    this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this));
  }, t.setData = function(r, o) {
    var s, h, f = this.state.data, g = xs(r, f);
    return (s = (h = this.options).isDataEqual) != null && s.call(h, f, g) ? g = f : this.options.structuralSharing !== !1 && (g = sr(f, g)), this.dispatch({
      data: g,
      type: "success",
      dataUpdatedAt: o?.updatedAt
    }), g;
  }, t.setState = function(r, o) {
    this.dispatch({
      type: "setState",
      state: r,
      setStateOptions: o
    });
  }, t.cancel = function(r) {
    var o, s = this.promise;
    return (o = this.retryer) == null || o.cancel(r), s ? s.then(Be).catch(Be) : Promise.resolve();
  }, t.destroy = function() {
    this.clearGcTimeout(), this.cancel({
      silent: !0
    });
  }, t.reset = function() {
    this.destroy(), this.setState(this.initialState);
  }, t.isActive = function() {
    return this.observers.some(function(r) {
      return r.options.enabled !== !1;
    });
  }, t.isFetching = function() {
    return this.state.isFetching;
  }, t.isStale = function() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(r) {
      return r.getCurrentResult().isStale;
    });
  }, t.isStaleByTime = function(r) {
    return r === void 0 && (r = 0), this.state.isInvalidated || !this.state.dataUpdatedAt || !fo(this.state.dataUpdatedAt, r);
  }, t.onFocus = function() {
    var r, o = this.observers.find(function(s) {
      return s.shouldFetchOnWindowFocus();
    });
    o && o.refetch(), (r = this.retryer) == null || r.continue();
  }, t.onOnline = function() {
    var r, o = this.observers.find(function(s) {
      return s.shouldFetchOnReconnect();
    });
    o && o.refetch(), (r = this.retryer) == null || r.continue();
  }, t.addObserver = function(r) {
    this.observers.indexOf(r) === -1 && (this.observers.push(r), this.hadObservers = !0, this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: r
    }));
  }, t.removeObserver = function(r) {
    this.observers.indexOf(r) !== -1 && (this.observers = this.observers.filter(function(o) {
      return o !== r;
    }), this.observers.length || (this.retryer && (this.retryer.isTransportCancelable || this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.cacheTime ? this.scheduleGc() : this.cache.remove(this)), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: r
    }));
  }, t.getObserversCount = function() {
    return this.observers.length;
  }, t.invalidate = function() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }, t.fetch = function(r, o) {
    var s = this, h, f, g;
    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && o?.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var p;
        return (p = this.retryer) == null || p.continueRetry(), this.promise;
      }
    }
    if (r && this.setOptions(r), !this.options.queryFn) {
      var M = this.observers.find(function(q) {
        return q.options.queryFn;
      });
      M && this.setOptions(M.options);
    }
    var m = or(this.queryKey), j = yo(), C = {
      queryKey: m,
      pageParam: void 0,
      meta: this.meta
    };
    Object.defineProperty(C, "signal", {
      enumerable: !0,
      get: function() {
        if (j)
          return s.abortSignalConsumed = !0, j.signal;
      }
    });
    var O = function() {
      return s.options.queryFn ? (s.abortSignalConsumed = !1, s.options.queryFn(C)) : Promise.reject("Missing queryFn");
    }, w = {
      fetchOptions: o,
      options: this.options,
      queryKey: m,
      state: this.state,
      fetchFn: O,
      meta: this.meta
    };
    if ((h = this.options.behavior) != null && h.onFetch) {
      var P;
      (P = this.options.behavior) == null || P.onFetch(w);
    }
    if (this.revertState = this.state, !this.state.isFetching || this.state.fetchMeta !== ((f = w.fetchOptions) == null ? void 0 : f.meta)) {
      var Z;
      this.dispatch({
        type: "fetch",
        meta: (Z = w.fetchOptions) == null ? void 0 : Z.meta
      });
    }
    return this.retryer = new go({
      fn: w.fetchFn,
      abort: j == null || (g = j.abort) == null ? void 0 : g.bind(j),
      onSuccess: function(V) {
        s.setData(V), s.cache.config.onSuccess == null || s.cache.config.onSuccess(V, s), s.cacheTime === 0 && s.optionalRemove();
      },
      onError: function(V) {
        Vn(V) && V.silent || s.dispatch({
          type: "error",
          error: V
        }), Vn(V) || (s.cache.config.onError == null || s.cache.config.onError(V, s), ur().error(V)), s.cacheTime === 0 && s.optionalRemove();
      },
      onFail: function() {
        s.dispatch({
          type: "failed"
        });
      },
      onPause: function() {
        s.dispatch({
          type: "pause"
        });
      },
      onContinue: function() {
        s.dispatch({
          type: "continue"
        });
      },
      retry: w.options.retry,
      retryDelay: w.options.retryDelay
    }), this.promise = this.retryer.promise, this.promise;
  }, t.dispatch = function(r) {
    var o = this;
    this.state = this.reducer(this.state, r), je.batch(function() {
      o.observers.forEach(function(s) {
        s.onQueryUpdate(r);
      }), o.cache.notify({
        query: o,
        type: "queryUpdated",
        action: r
      });
    });
  }, t.getDefaultState = function(r) {
    var o = typeof r.initialData == "function" ? r.initialData() : r.initialData, s = typeof r.initialData < "u", h = s ? typeof r.initialDataUpdatedAt == "function" ? r.initialDataUpdatedAt() : r.initialDataUpdatedAt : 0, f = typeof o < "u";
    return {
      data: o,
      dataUpdateCount: 0,
      dataUpdatedAt: f ? h ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: !1,
      isInvalidated: !1,
      isPaused: !1,
      status: f ? "success" : "idle"
    };
  }, t.reducer = function(r, o) {
    var s, h;
    switch (o.type) {
      case "failed":
        return ae({}, r, {
          fetchFailureCount: r.fetchFailureCount + 1
        });
      case "pause":
        return ae({}, r, {
          isPaused: !0
        });
      case "continue":
        return ae({}, r, {
          isPaused: !1
        });
      case "fetch":
        return ae({}, r, {
          fetchFailureCount: 0,
          fetchMeta: (s = o.meta) != null ? s : null,
          isFetching: !0,
          isPaused: !1
        }, !r.dataUpdatedAt && {
          error: null,
          status: "loading"
        });
      case "success":
        return ae({}, r, {
          data: o.data,
          dataUpdateCount: r.dataUpdateCount + 1,
          dataUpdatedAt: (h = o.dataUpdatedAt) != null ? h : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: "success"
        });
      case "error":
        var f = o.error;
        return Vn(f) && f.revert && this.revertState ? ae({}, this.revertState) : ae({}, r, {
          error: f,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          isFetching: !1,
          isPaused: !1,
          status: "error"
        });
      case "invalidate":
        return ae({}, r, {
          isInvalidated: !0
        });
      case "setState":
        return ae({}, r, o.state);
      default:
        return r;
    }
  }, e;
}(), Zs = /* @__PURE__ */ function(e) {
  xn(t, e);
  function t(r) {
    var o;
    return o = e.call(this) || this, o.config = r || {}, o.queries = [], o.queriesMap = {}, o;
  }
  var n = t.prototype;
  return n.build = function(o, s, h) {
    var f, g = s.queryKey, p = (f = s.queryHash) != null ? f : Xr(g, s), M = this.get(p);
    return M || (M = new Ys({
      cache: this,
      queryKey: g,
      queryHash: p,
      options: o.defaultQueryOptions(s),
      state: h,
      defaultOptions: o.getQueryDefaults(g),
      meta: s.meta
    }), this.add(M)), M;
  }, n.add = function(o) {
    this.queriesMap[o.queryHash] || (this.queriesMap[o.queryHash] = o, this.queries.push(o), this.notify({
      type: "queryAdded",
      query: o
    }));
  }, n.remove = function(o) {
    var s = this.queriesMap[o.queryHash];
    s && (o.destroy(), this.queries = this.queries.filter(function(h) {
      return h !== o;
    }), s === o && delete this.queriesMap[o.queryHash], this.notify({
      type: "queryRemoved",
      query: o
    }));
  }, n.clear = function() {
    var o = this;
    je.batch(function() {
      o.queries.forEach(function(s) {
        o.remove(s);
      });
    });
  }, n.get = function(o) {
    return this.queriesMap[o];
  }, n.getAll = function() {
    return this.queries;
  }, n.find = function(o, s) {
    var h = Dt(o, s), f = h[0];
    return typeof f.exact > "u" && (f.exact = !0), this.queries.find(function(g) {
      return Mi(f, g);
    });
  }, n.findAll = function(o, s) {
    var h = Dt(o, s), f = h[0];
    return Object.keys(f).length > 0 ? this.queries.filter(function(g) {
      return Mi(f, g);
    }) : this.queries;
  }, n.notify = function(o) {
    var s = this;
    je.batch(function() {
      s.listeners.forEach(function(h) {
        h(o);
      });
    });
  }, n.onFocus = function() {
    var o = this;
    je.batch(function() {
      o.queries.forEach(function(s) {
        s.onFocus();
      });
    });
  }, n.onOnline = function() {
    var o = this;
    je.batch(function() {
      o.queries.forEach(function(s) {
        s.onOnline();
      });
    });
  }, t;
}(Rn), Bs = /* @__PURE__ */ function() {
  function e(n) {
    this.options = ae({}, n.defaultOptions, n.options), this.mutationId = n.mutationId, this.mutationCache = n.mutationCache, this.observers = [], this.state = n.state || Gs(), this.meta = n.meta;
  }
  var t = e.prototype;
  return t.setState = function(r) {
    this.dispatch({
      type: "setState",
      state: r
    });
  }, t.addObserver = function(r) {
    this.observers.indexOf(r) === -1 && this.observers.push(r);
  }, t.removeObserver = function(r) {
    this.observers = this.observers.filter(function(o) {
      return o !== r;
    });
  }, t.cancel = function() {
    return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(Be).catch(Be)) : Promise.resolve();
  }, t.continue = function() {
    return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute();
  }, t.execute = function() {
    var r = this, o, s = this.state.status === "loading", h = Promise.resolve();
    return s || (this.dispatch({
      type: "loading",
      variables: this.options.variables
    }), h = h.then(function() {
      r.mutationCache.config.onMutate == null || r.mutationCache.config.onMutate(r.state.variables, r);
    }).then(function() {
      return r.options.onMutate == null ? void 0 : r.options.onMutate(r.state.variables);
    }).then(function(f) {
      f !== r.state.context && r.dispatch({
        type: "loading",
        context: f,
        variables: r.state.variables
      });
    })), h.then(function() {
      return r.executeMutation();
    }).then(function(f) {
      o = f, r.mutationCache.config.onSuccess == null || r.mutationCache.config.onSuccess(o, r.state.variables, r.state.context, r);
    }).then(function() {
      return r.options.onSuccess == null ? void 0 : r.options.onSuccess(o, r.state.variables, r.state.context);
    }).then(function() {
      return r.options.onSettled == null ? void 0 : r.options.onSettled(o, null, r.state.variables, r.state.context);
    }).then(function() {
      return r.dispatch({
        type: "success",
        data: o
      }), o;
    }).catch(function(f) {
      return r.mutationCache.config.onError == null || r.mutationCache.config.onError(f, r.state.variables, r.state.context, r), ur().error(f), Promise.resolve().then(function() {
        return r.options.onError == null ? void 0 : r.options.onError(f, r.state.variables, r.state.context);
      }).then(function() {
        return r.options.onSettled == null ? void 0 : r.options.onSettled(void 0, f, r.state.variables, r.state.context);
      }).then(function() {
        throw r.dispatch({
          type: "error",
          error: f
        }), f;
      });
    });
  }, t.executeMutation = function() {
    var r = this, o;
    return this.retryer = new go({
      fn: function() {
        return r.options.mutationFn ? r.options.mutationFn(r.state.variables) : Promise.reject("No mutationFn found");
      },
      onFail: function() {
        r.dispatch({
          type: "failed"
        });
      },
      onPause: function() {
        r.dispatch({
          type: "pause"
        });
      },
      onContinue: function() {
        r.dispatch({
          type: "continue"
        });
      },
      retry: (o = this.options.retry) != null ? o : 0,
      retryDelay: this.options.retryDelay
    }), this.retryer.promise;
  }, t.dispatch = function(r) {
    var o = this;
    this.state = qs(this.state, r), je.batch(function() {
      o.observers.forEach(function(s) {
        s.onMutationUpdate(r);
      }), o.mutationCache.notify(o);
    });
  }, e;
}();
function Gs() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
function qs(e, t) {
  switch (t.type) {
    case "failed":
      return ae({}, e, {
        failureCount: e.failureCount + 1
      });
    case "pause":
      return ae({}, e, {
        isPaused: !0
      });
    case "continue":
      return ae({}, e, {
        isPaused: !1
      });
    case "loading":
      return ae({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables
      });
    case "success":
      return ae({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1
      });
    case "error":
      return ae({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error"
      });
    case "setState":
      return ae({}, e, t.state);
    default:
      return e;
  }
}
var Ks = /* @__PURE__ */ function(e) {
  xn(t, e);
  function t(r) {
    var o;
    return o = e.call(this) || this, o.config = r || {}, o.mutations = [], o.mutationId = 0, o;
  }
  var n = t.prototype;
  return n.build = function(o, s, h) {
    var f = new Bs({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: o.defaultMutationOptions(s),
      state: h,
      defaultOptions: s.mutationKey ? o.getMutationDefaults(s.mutationKey) : void 0,
      meta: s.meta
    });
    return this.add(f), f;
  }, n.add = function(o) {
    this.mutations.push(o), this.notify(o);
  }, n.remove = function(o) {
    this.mutations = this.mutations.filter(function(s) {
      return s !== o;
    }), o.cancel(), this.notify(o);
  }, n.clear = function() {
    var o = this;
    je.batch(function() {
      o.mutations.forEach(function(s) {
        o.remove(s);
      });
    });
  }, n.getAll = function() {
    return this.mutations;
  }, n.find = function(o) {
    return typeof o.exact > "u" && (o.exact = !0), this.mutations.find(function(s) {
      return bi(o, s);
    });
  }, n.findAll = function(o) {
    return this.mutations.filter(function(s) {
      return bi(o, s);
    });
  }, n.notify = function(o) {
    var s = this;
    je.batch(function() {
      s.listeners.forEach(function(h) {
        h(o);
      });
    });
  }, n.onFocus = function() {
    this.resumePausedMutations();
  }, n.onOnline = function() {
    this.resumePausedMutations();
  }, n.resumePausedMutations = function() {
    var o = this.mutations.filter(function(s) {
      return s.state.isPaused;
    });
    return je.batch(function() {
      return o.reduce(function(s, h) {
        return s.then(function() {
          return h.continue().catch(Be);
        });
      }, Promise.resolve());
    });
  }, t;
}(Rn);
function Vs() {
  return {
    onFetch: function(t) {
      t.fetchFn = function() {
        var n, r, o, s, h, f, g = (n = t.fetchOptions) == null || (r = n.meta) == null ? void 0 : r.refetchPage, p = (o = t.fetchOptions) == null || (s = o.meta) == null ? void 0 : s.fetchMore, M = p?.pageParam, m = p?.direction === "forward", j = p?.direction === "backward", C = ((h = t.state.data) == null ? void 0 : h.pages) || [], O = ((f = t.state.data) == null ? void 0 : f.pageParams) || [], w = yo(), P = w?.signal, Z = O, q = !1, V = t.options.queryFn || function() {
          return Promise.reject("Missing queryFn");
        }, he = function(Ne, Se, we, tt) {
          return Z = tt ? [Se].concat(Z) : [].concat(Z, [Se]), tt ? [we].concat(Ne) : [].concat(Ne, [we]);
        }, fe = function(Ne, Se, we, tt) {
          if (q)
            return Promise.reject("Cancelled");
          if (typeof we > "u" && !Se && Ne.length)
            return Promise.resolve(Ne);
          var _e = {
            queryKey: t.queryKey,
            signal: P,
            pageParam: we,
            meta: t.meta
          }, Qe = V(_e), st = Promise.resolve(Qe).then(function(bt) {
            return he(Ne, we, bt, tt);
          });
          if (cr(Qe)) {
            var ft = st;
            ft.cancel = Qe.cancel;
          }
          return st;
        }, ce;
        if (!C.length)
          ce = fe([]);
        else if (m) {
          var Le = typeof M < "u", de = Le ? M : Ni(t.options, C);
          ce = fe(C, Le, de);
        } else if (j) {
          var Re = typeof M < "u", te = Re ? M : Xs(t.options, C);
          ce = fe(C, Re, te, !0);
        } else
          (function() {
            Z = [];
            var Ae = typeof t.options.getNextPageParam > "u", Ne = g && C[0] ? g(C[0], 0, C) : !0;
            ce = Ne ? fe([], Ae, O[0]) : Promise.resolve(he([], O[0], C[0]));
            for (var Se = function(_e) {
              ce = ce.then(function(Qe) {
                var st = g && C[_e] ? g(C[_e], _e, C) : !0;
                if (st) {
                  var ft = Ae ? O[_e] : Ni(t.options, Qe);
                  return fe(Qe, Ae, ft);
                }
                return Promise.resolve(he(Qe, O[_e], C[_e]));
              });
            }, we = 1; we < C.length; we++)
              Se(we);
          })();
        var Me = ce.then(function(Ae) {
          return {
            pages: Ae,
            pageParams: Z
          };
        }), me = Me;
        return me.cancel = function() {
          q = !0, w?.abort(), cr(ce) && ce.cancel();
        }, Me;
      };
    }
  };
}
function Ni(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function Xs(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
var Hs = /* @__PURE__ */ function() {
  function e(n) {
    n === void 0 && (n = {}), this.queryCache = n.queryCache || new Zs(), this.mutationCache = n.mutationCache || new Ks(), this.defaultOptions = n.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [];
  }
  var t = e.prototype;
  return t.mount = function() {
    var r = this;
    this.unsubscribeFocus = Dn.subscribe(function() {
      Dn.isFocused() && Kn.isOnline() && (r.mutationCache.onFocus(), r.queryCache.onFocus());
    }), this.unsubscribeOnline = Kn.subscribe(function() {
      Dn.isFocused() && Kn.isOnline() && (r.mutationCache.onOnline(), r.queryCache.onOnline());
    });
  }, t.unmount = function() {
    var r, o;
    (r = this.unsubscribeFocus) == null || r.call(this), (o = this.unsubscribeOnline) == null || o.call(this);
  }, t.isFetching = function(r, o) {
    var s = Dt(r, o), h = s[0];
    return h.fetching = !0, this.queryCache.findAll(h).length;
  }, t.isMutating = function(r) {
    return this.mutationCache.findAll(ae({}, r, {
      fetching: !0
    })).length;
  }, t.getQueryData = function(r, o) {
    var s;
    return (s = this.queryCache.find(r, o)) == null ? void 0 : s.state.data;
  }, t.getQueriesData = function(r) {
    return this.getQueryCache().findAll(r).map(function(o) {
      var s = o.queryKey, h = o.state, f = h.data;
      return [s, f];
    });
  }, t.setQueryData = function(r, o, s) {
    var h = qn(r), f = this.defaultQueryOptions(h);
    return this.queryCache.build(this, f).setData(o, s);
  }, t.setQueriesData = function(r, o, s) {
    var h = this;
    return je.batch(function() {
      return h.getQueryCache().findAll(r).map(function(f) {
        var g = f.queryKey;
        return [g, h.setQueryData(g, o, s)];
      });
    });
  }, t.getQueryState = function(r, o) {
    var s;
    return (s = this.queryCache.find(r, o)) == null ? void 0 : s.state;
  }, t.removeQueries = function(r, o) {
    var s = Dt(r, o), h = s[0], f = this.queryCache;
    je.batch(function() {
      f.findAll(h).forEach(function(g) {
        f.remove(g);
      });
    });
  }, t.resetQueries = function(r, o, s) {
    var h = this, f = Dt(r, o, s), g = f[0], p = f[1], M = this.queryCache, m = ae({}, g, {
      active: !0
    });
    return je.batch(function() {
      return M.findAll(g).forEach(function(j) {
        j.reset();
      }), h.refetchQueries(m, p);
    });
  }, t.cancelQueries = function(r, o, s) {
    var h = this, f = Dt(r, o, s), g = f[0], p = f[1], M = p === void 0 ? {} : p;
    typeof M.revert > "u" && (M.revert = !0);
    var m = je.batch(function() {
      return h.queryCache.findAll(g).map(function(j) {
        return j.cancel(M);
      });
    });
    return Promise.all(m).then(Be).catch(Be);
  }, t.invalidateQueries = function(r, o, s) {
    var h, f, g, p = this, M = Dt(r, o, s), m = M[0], j = M[1], C = ae({}, m, {
      active: (h = (f = m.refetchActive) != null ? f : m.active) != null ? h : !0,
      inactive: (g = m.refetchInactive) != null ? g : !1
    });
    return je.batch(function() {
      return p.queryCache.findAll(m).forEach(function(O) {
        O.invalidate();
      }), p.refetchQueries(C, j);
    });
  }, t.refetchQueries = function(r, o, s) {
    var h = this, f = Dt(r, o, s), g = f[0], p = f[1], M = je.batch(function() {
      return h.queryCache.findAll(g).map(function(j) {
        return j.fetch(void 0, ae({}, p, {
          meta: {
            refetchPage: g?.refetchPage
          }
        }));
      });
    }), m = Promise.all(M).then(Be);
    return p?.throwOnError || (m = m.catch(Be)), m;
  }, t.fetchQuery = function(r, o, s) {
    var h = qn(r, o, s), f = this.defaultQueryOptions(h);
    typeof f.retry > "u" && (f.retry = !1);
    var g = this.queryCache.build(this, f);
    return g.isStaleByTime(f.staleTime) ? g.fetch(f) : Promise.resolve(g.state.data);
  }, t.prefetchQuery = function(r, o, s) {
    return this.fetchQuery(r, o, s).then(Be).catch(Be);
  }, t.fetchInfiniteQuery = function(r, o, s) {
    var h = qn(r, o, s);
    return h.behavior = Vs(), this.fetchQuery(h);
  }, t.prefetchInfiniteQuery = function(r, o, s) {
    return this.fetchInfiniteQuery(r, o, s).then(Be).catch(Be);
  }, t.cancelMutations = function() {
    var r = this, o = je.batch(function() {
      return r.mutationCache.getAll().map(function(s) {
        return s.cancel();
      });
    });
    return Promise.all(o).then(Be).catch(Be);
  }, t.resumePausedMutations = function() {
    return this.getMutationCache().resumePausedMutations();
  }, t.executeMutation = function(r) {
    return this.mutationCache.build(this, r).execute();
  }, t.getQueryCache = function() {
    return this.queryCache;
  }, t.getMutationCache = function() {
    return this.mutationCache;
  }, t.getDefaultOptions = function() {
    return this.defaultOptions;
  }, t.setDefaultOptions = function(r) {
    this.defaultOptions = r;
  }, t.setQueryDefaults = function(r, o) {
    var s = this.queryDefaults.find(function(h) {
      return Qt(r) === Qt(h.queryKey);
    });
    s ? s.defaultOptions = o : this.queryDefaults.push({
      queryKey: r,
      defaultOptions: o
    });
  }, t.getQueryDefaults = function(r) {
    var o;
    return r ? (o = this.queryDefaults.find(function(s) {
      return ar(r, s.queryKey);
    })) == null ? void 0 : o.defaultOptions : void 0;
  }, t.setMutationDefaults = function(r, o) {
    var s = this.mutationDefaults.find(function(h) {
      return Qt(r) === Qt(h.mutationKey);
    });
    s ? s.defaultOptions = o : this.mutationDefaults.push({
      mutationKey: r,
      defaultOptions: o
    });
  }, t.getMutationDefaults = function(r) {
    var o;
    return r ? (o = this.mutationDefaults.find(function(s) {
      return ar(r, s.mutationKey);
    })) == null ? void 0 : o.defaultOptions : void 0;
  }, t.defaultQueryOptions = function(r) {
    if (r?._defaulted)
      return r;
    var o = ae({}, this.defaultOptions.queries, this.getQueryDefaults(r?.queryKey), r, {
      _defaulted: !0
    });
    return !o.queryHash && o.queryKey && (o.queryHash = Xr(o.queryKey, o)), o;
  }, t.defaultQueryObserverOptions = function(r) {
    return this.defaultQueryOptions(r);
  }, t.defaultMutationOptions = function(r) {
    return r?._defaulted ? r : ae({}, this.defaultOptions.mutations, this.getMutationDefaults(r?.mutationKey), r, {
      _defaulted: !0
    });
  }, t.clear = function() {
    this.queryCache.clear(), this.mutationCache.clear();
  }, e;
}(), Js = /* @__PURE__ */ function(e) {
  xn(t, e);
  function t(r, o) {
    var s;
    return s = e.call(this) || this, s.client = r, s.options = o, s.trackedProps = [], s.selectError = null, s.bindMethods(), s.setOptions(o), s;
  }
  var n = t.prototype;
  return n.bindMethods = function() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }, n.onSubscribe = function() {
    this.listeners.length === 1 && (this.currentQuery.addObserver(this), Ii(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }, n.onUnsubscribe = function() {
    this.listeners.length || this.destroy();
  }, n.shouldFetchOnReconnect = function() {
    return Wr(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }, n.shouldFetchOnWindowFocus = function() {
    return Wr(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }, n.destroy = function() {
    this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this);
  }, n.setOptions = function(o, s) {
    var h = this.options, f = this.currentQuery;
    if (this.options = this.client.defaultQueryObserverOptions(o), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = h.queryKey), this.updateQuery();
    var g = this.hasListeners();
    g && wi(this.currentQuery, f, this.options, h) && this.executeFetch(), this.updateResult(s), g && (this.currentQuery !== f || this.options.enabled !== h.enabled || this.options.staleTime !== h.staleTime) && this.updateStaleTimeout();
    var p = this.computeRefetchInterval();
    g && (this.currentQuery !== f || this.options.enabled !== h.enabled || p !== this.currentRefetchInterval) && this.updateRefetchInterval(p);
  }, n.getOptimisticResult = function(o) {
    var s = this.client.defaultQueryObserverOptions(o), h = this.client.getQueryCache().build(this.client, s);
    return this.createResult(h, s);
  }, n.getCurrentResult = function() {
    return this.currentResult;
  }, n.trackResult = function(o, s) {
    var h = this, f = {}, g = function(M) {
      h.trackedProps.includes(M) || h.trackedProps.push(M);
    };
    return Object.keys(o).forEach(function(p) {
      Object.defineProperty(f, p, {
        configurable: !1,
        enumerable: !0,
        get: function() {
          return g(p), o[p];
        }
      });
    }), (s.useErrorBoundary || s.suspense) && g("error"), f;
  }, n.getNextResult = function(o) {
    var s = this;
    return new Promise(function(h, f) {
      var g = s.subscribe(function(p) {
        p.isFetching || (g(), p.isError && o?.throwOnError ? f(p.error) : h(p));
      });
    });
  }, n.getCurrentQuery = function() {
    return this.currentQuery;
  }, n.remove = function() {
    this.client.getQueryCache().remove(this.currentQuery);
  }, n.refetch = function(o) {
    return this.fetch(ae({}, o, {
      meta: {
        refetchPage: o?.refetchPage
      }
    }));
  }, n.fetchOptimistic = function(o) {
    var s = this, h = this.client.defaultQueryObserverOptions(o), f = this.client.getQueryCache().build(this.client, h);
    return f.fetch().then(function() {
      return s.createResult(f, h);
    });
  }, n.fetch = function(o) {
    var s = this;
    return this.executeFetch(o).then(function() {
      return s.updateResult(), s.currentResult;
    });
  }, n.executeFetch = function(o) {
    this.updateQuery();
    var s = this.currentQuery.fetch(this.options, o);
    return o?.throwOnError || (s = s.catch(Be)), s;
  }, n.updateStaleTimeout = function() {
    var o = this;
    if (this.clearStaleTimeout(), !(ir || this.currentResult.isStale || !Qr(this.options.staleTime))) {
      var s = fo(this.currentResult.dataUpdatedAt, this.options.staleTime), h = s + 1;
      this.staleTimeoutId = setTimeout(function() {
        o.currentResult.isStale || o.updateResult();
      }, h);
    }
  }, n.computeRefetchInterval = function() {
    var o;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (o = this.options.refetchInterval) != null ? o : !1;
  }, n.updateRefetchInterval = function(o) {
    var s = this;
    this.clearRefetchInterval(), this.currentRefetchInterval = o, !(ir || this.options.enabled === !1 || !Qr(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(function() {
      (s.options.refetchIntervalInBackground || Dn.isFocused()) && s.executeFetch();
    }, this.currentRefetchInterval));
  }, n.updateTimers = function() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }, n.clearTimers = function() {
    this.clearStaleTimeout(), this.clearRefetchInterval();
  }, n.clearStaleTimeout = function() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }, n.clearRefetchInterval = function() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }, n.createResult = function(o, s) {
    var h = this.currentQuery, f = this.options, g = this.currentResult, p = this.currentResultState, M = this.currentResultOptions, m = o !== h, j = m ? o.state : this.currentQueryInitialState, C = m ? this.currentResult : this.previousQueryResult, O = o.state, w = O.dataUpdatedAt, P = O.error, Z = O.errorUpdatedAt, q = O.isFetching, V = O.status, he = !1, fe = !1, ce;
    if (s.optimisticResults) {
      var Le = this.hasListeners(), de = !Le && Ii(o, s), Re = Le && wi(o, h, s, f);
      (de || Re) && (q = !0, w || (V = "loading"));
    }
    if (s.keepPreviousData && !O.dataUpdateCount && C?.isSuccess && V !== "error")
      ce = C.data, w = C.dataUpdatedAt, V = C.status, he = !0;
    else if (s.select && typeof O.data < "u")
      if (g && O.data === p?.data && s.select === this.selectFn)
        ce = this.selectResult;
      else
        try {
          this.selectFn = s.select, ce = s.select(O.data), s.structuralSharing !== !1 && (ce = sr(g?.data, ce)), this.selectResult = ce, this.selectError = null;
        } catch (me) {
          ur().error(me), this.selectError = me;
        }
    else
      ce = O.data;
    if (typeof s.placeholderData < "u" && typeof ce > "u" && (V === "loading" || V === "idle")) {
      var te;
      if (g?.isPlaceholderData && s.placeholderData === M?.placeholderData)
        te = g.data;
      else if (te = typeof s.placeholderData == "function" ? s.placeholderData() : s.placeholderData, s.select && typeof te < "u")
        try {
          te = s.select(te), s.structuralSharing !== !1 && (te = sr(g?.data, te)), this.selectError = null;
        } catch (me) {
          ur().error(me), this.selectError = me;
        }
      typeof te < "u" && (V = "success", ce = te, fe = !0);
    }
    this.selectError && (P = this.selectError, ce = this.selectResult, Z = Date.now(), V = "error");
    var Me = {
      status: V,
      isLoading: V === "loading",
      isSuccess: V === "success",
      isError: V === "error",
      isIdle: V === "idle",
      data: ce,
      dataUpdatedAt: w,
      error: P,
      errorUpdatedAt: Z,
      failureCount: O.fetchFailureCount,
      errorUpdateCount: O.errorUpdateCount,
      isFetched: O.dataUpdateCount > 0 || O.errorUpdateCount > 0,
      isFetchedAfterMount: O.dataUpdateCount > j.dataUpdateCount || O.errorUpdateCount > j.errorUpdateCount,
      isFetching: q,
      isRefetching: q && V !== "loading",
      isLoadingError: V === "error" && O.dataUpdatedAt === 0,
      isPlaceholderData: fe,
      isPreviousData: he,
      isRefetchError: V === "error" && O.dataUpdatedAt !== 0,
      isStale: Hr(o, s),
      refetch: this.refetch,
      remove: this.remove
    };
    return Me;
  }, n.shouldNotifyListeners = function(o, s) {
    if (!s)
      return !0;
    var h = this.options, f = h.notifyOnChangeProps, g = h.notifyOnChangePropsExclusions;
    if (!f && !g || f === "tracked" && !this.trackedProps.length)
      return !0;
    var p = f === "tracked" ? this.trackedProps : f;
    return Object.keys(o).some(function(M) {
      var m = M, j = o[m] !== s[m], C = p?.some(function(w) {
        return w === M;
      }), O = g?.some(function(w) {
        return w === M;
      });
      return j && !O && (!p || C);
    });
  }, n.updateResult = function(o) {
    var s = this.currentResult;
    if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, !zs(this.currentResult, s)) {
      var h = {
        cache: !0
      };
      o?.listeners !== !1 && this.shouldNotifyListeners(this.currentResult, s) && (h.listeners = !0), this.notify(ae({}, h, o));
    }
  }, n.updateQuery = function() {
    var o = this.client.getQueryCache().build(this.client, this.options);
    if (o !== this.currentQuery) {
      var s = this.currentQuery;
      this.currentQuery = o, this.currentQueryInitialState = o.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (s?.removeObserver(this), o.addObserver(this));
    }
  }, n.onQueryUpdate = function(o) {
    var s = {};
    o.type === "success" ? s.onSuccess = !0 : o.type === "error" && !Vn(o.error) && (s.onError = !0), this.updateResult(s), this.hasListeners() && this.updateTimers();
  }, n.notify = function(o) {
    var s = this;
    je.batch(function() {
      o.onSuccess ? (s.options.onSuccess == null || s.options.onSuccess(s.currentResult.data), s.options.onSettled == null || s.options.onSettled(s.currentResult.data, null)) : o.onError && (s.options.onError == null || s.options.onError(s.currentResult.error), s.options.onSettled == null || s.options.onSettled(void 0, s.currentResult.error)), o.listeners && s.listeners.forEach(function(h) {
        h(s.currentResult);
      }), o.cache && s.client.getQueryCache().notify({
        query: s.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }, t;
}(Rn);
function $s(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Ii(e, t) {
  return $s(e, t) || e.state.dataUpdatedAt > 0 && Wr(e, t, t.refetchOnMount);
}
function Wr(e, t, n) {
  if (t.enabled !== !1) {
    var r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Hr(e, t);
  }
  return !1;
}
function wi(e, t, n, r) {
  return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && Hr(e, n);
}
function Hr(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var ec = Fi.unstable_batchedUpdates;
je.setBatchNotifyFunction(ec);
var tc = console;
Ws(tc);
var Ei = /* @__PURE__ */ Xe.createContext(void 0), Mo = /* @__PURE__ */ Xe.createContext(!1);
function bo(e) {
  return e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Ei), window.ReactQueryClientContext) : Ei;
}
var nc = function() {
  var t = Xe.useContext(bo(Xe.useContext(Mo)));
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, rc = function(t) {
  var n = t.client, r = t.contextSharing, o = r === void 0 ? !1 : r, s = t.children;
  Xe.useEffect(function() {
    return n.mount(), function() {
      n.unmount();
    };
  }, [n]);
  var h = bo(o);
  return /* @__PURE__ */ F(Mo.Provider, {
    value: o,
    children: /* @__PURE__ */ F(h.Provider, {
      value: n,
      children: s
    })
  });
};
function ic() {
  var e = !1;
  return {
    clearReset: function() {
      e = !1;
    },
    reset: function() {
      e = !0;
    },
    isReset: function() {
      return e;
    }
  };
}
var oc = /* @__PURE__ */ Xe.createContext(ic()), ac = function() {
  return Xe.useContext(oc);
};
function sc(e, t, n) {
  return typeof t == "function" ? t.apply(void 0, n) : typeof t == "boolean" ? t : !!e;
}
function cc(e, t) {
  var n = Xe.useRef(!1), r = Xe.useState(0), o = r[1], s = nc(), h = ac(), f = s.defaultQueryObserverOptions(e);
  f.optimisticResults = !0, f.onError && (f.onError = je.batchCalls(f.onError)), f.onSuccess && (f.onSuccess = je.batchCalls(f.onSuccess)), f.onSettled && (f.onSettled = je.batchCalls(f.onSettled)), f.suspense && (typeof f.staleTime != "number" && (f.staleTime = 1e3), f.cacheTime === 0 && (f.cacheTime = 1)), (f.suspense || f.useErrorBoundary) && (h.isReset() || (f.retryOnMount = !1));
  var g = Xe.useState(function() {
    return new t(s, f);
  }), p = g[0], M = p.getOptimisticResult(f);
  if (Xe.useEffect(function() {
    n.current = !0, h.clearReset();
    var m = p.subscribe(je.batchCalls(function() {
      n.current && o(function(j) {
        return j + 1;
      });
    }));
    return p.updateResult(), function() {
      n.current = !1, m();
    };
  }, [h, p]), Xe.useEffect(function() {
    p.setOptions(f, {
      listeners: !1
    });
  }, [f, p]), f.suspense && M.isLoading)
    throw p.fetchOptimistic(f).then(function(m) {
      var j = m.data;
      f.onSuccess == null || f.onSuccess(j), f.onSettled == null || f.onSettled(j, null);
    }).catch(function(m) {
      h.clearReset(), f.onError == null || f.onError(m), f.onSettled == null || f.onSettled(void 0, m);
    });
  if (M.isError && !h.isReset() && !M.isFetching && sc(f.suspense, f.useErrorBoundary, [M.error, p.getCurrentQuery()]))
    throw M.error;
  return f.notifyOnChangeProps === "tracked" && (M = p.trackResult(M, f)), M;
}
function uc(e, t, n) {
  var r = qn(e, t, n);
  return cc(r, Js);
}
var lc = /* @__PURE__ */ ((e) => (e.DEV_NET = "sui:devnet", e.TEST_NET = "sui:testnet", e.MAIN_NET = "sui:mainnet", e.DEVNET = "sui:devnet", e.TestNET = "sui:testnet", e))(lc || {});
const fc = {
  id: "sui:devnet",
  name: "Sui Devnet",
  rpcUrl: "https://fullnode.devnet.sui.io/"
}, hc = {
  id: "sui:testnet",
  name: "Sui Testnet",
  rpcUrl: "https://fullnode.testnet.sui.io/"
}, dc = {
  id: "sui:mainnet",
  name: "Sui Mainnet",
  rpcUrl: "https://rpc.mainnet.sui.io/"
}, Xn = {
  id: "unknown:unknown",
  name: "Unknown Network",
  rpcUrl: ""
}, yc = [
  fc,
  hc,
  dc
];
var mo = /* @__PURE__ */ ((e) => (e.COIN_BALANCE = "SUIET_COIN_BALANCE", e))(mo || {});
function vc(e, t) {
  const n = new URLSearchParams(t);
  return e + "?" + n.toString();
}
var gc = Object.defineProperty, pc = (e, t, n) => t in e ? gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Mt = (e, t, n) => (pc(e, typeof t != "symbol" ? t + "" : t, n), n);
class Mc {
  constructor(t, n) {
    Mt(this, "provider"), Mt(this, "address"), this.provider = t, this.address = n;
  }
  async get(t = Bi) {
    return (await this.getAllCoins()).find((n) => n.typeArg === t)?.balance || BigInt(0);
  }
  async getAllCoins() {
    const t = await this.provider.query.getOwnedCoins(this.address), n = /* @__PURE__ */ new Map();
    for (const r of t)
      n.has(r.typeArg) ? n.set(r.typeArg, n.get(r.typeArg) + r.balance) : n.set(r.typeArg, r.balance);
    return Array.from(n.entries()).map((r) => ({
      typeArg: r[0],
      balance: r[1]
    }));
  }
}
class bc {
  constructor(t, n) {
    Mt(this, "balance"), this.balance = new Mc(t, n);
  }
}
const Di = "0x2::coin::Coin";
class Jr {
  constructor(t, n, r) {
    Mt(this, "_objectId"), Mt(this, "_typeArg"), Mt(this, "_balance"), Mt(this, "_symbol"), this._objectId = t, this._balance = r, this._typeArg = n, this._symbol = Ln.getCoinSymbol(n);
  }
  get objectId() {
    return this._objectId;
  }
  get typeArg() {
    return this._typeArg;
  }
  get balance() {
    return this._balance;
  }
  get symbol() {
    return this._symbol;
  }
  static fromDto(t) {
    return new Jr(t.objectId, t.typeArg, t.balance);
  }
  toDto() {
    return {
      objectId: this._objectId,
      balance: this._balance,
      typeArg: this._typeArg,
      symbol: this._symbol
    };
  }
  toString() {
    return JSON.stringify(this.toDto());
  }
}
class Ln {
  static isCoin(t) {
    return t.type.startsWith(Di);
  }
  static isSUI(t) {
    const n = Ln.getCoinTypeArg(t);
    return n ? Ln.getCoinSymbol(n) === "SUI" : !1;
  }
  static getCoinObject(t) {
    const n = xr.getCoinTypeArg(t);
    if (!n)
      throw new Error("coin typeArg cannot be null");
    return new Jr(
      t.fields.id.id,
      n,
      BigInt(t.fields.balance)
    );
  }
  static getBalance(t) {
    return BigInt(t.fields.balance);
  }
  static getCoinTypeArg(t) {
    return xr.getCoinTypeArg(t);
  }
  static getCoinSymbol(t) {
    return t.substring(t.lastIndexOf(":") + 1);
  }
  static getCoinTypeFromArg(t) {
    return `${Di}<${t}>`;
  }
}
class Ci {
  static isNft(t) {
    return !!(t.fields.name && t.fields.description && t.fields.url);
  }
  static getNftObject(t, n) {
    return {
      objectId: t.fields.id.id,
      name: t.fields.name,
      description: t.fields.description,
      url: t.fields.url,
      previousTransaction: n,
      objectType: t.type
    };
  }
}
const Uf = "0x0000000000000000000000000000000000000005";
class mc {
  constructor(t) {
    Mt(this, "query"), this.query = new Ac(t);
  }
}
class Ac {
  constructor(t) {
    Mt(this, "provider"), this.provider = new Yi(new Zi({ fullnode: t }));
  }
  async getOwnedObjects(t) {
    let n = !0, r = null, o = [];
    for (; n; ) {
      const s = await this.provider.getOwnedObjects({
        owner: t,
        cursor: r,
        options: {
          showType: !0,
          showDisplay: !0,
          showContent: !0,
          showOwner: !0
        }
      });
      s.data?.forEach((h) => {
        const f = zo(h);
        f && o.push(f);
      }), n = s.hasNextPage, r = s.nextCursor;
    }
    return o;
  }
  async getOwnedCoins(t) {
    return (await this.getOwnedObjects(t)).map((n) => ({
      id: n.objectId,
      object: ii(n)
    })).filter((n) => n.object && xr.isCoin(n.object)).map((n) => Ln.getCoinObject(n.object));
  }
  async getOwnedNfts(t) {
    return (await this.getOwnedObjects(t)).map((n) => ({
      id: n.objectId,
      object: ii(n),
      previousTransaction: n.previousTransaction
    })).filter((n) => n.object && Ci.isNft(n.object)).map((n) => {
      const r = n.object;
      return Ci.getNftObject(r, n.previousTransaction);
    });
  }
}
const Ti = 1e6, Tr = 1e9, jr = 1e12;
function Nc(e, t) {
  return Ao(
    e,
    Object.assign(
      {
        decimals: 9
      },
      t
    )
  );
}
function Ao(e, t) {
  const { decimals: n = 0, withAbbr: r = !0 } = t ?? {};
  if (typeof e == "bigint" && !wc(e))
    return Io(BigInt(e), {
      decimals: n,
      withAbbr: r
    });
  if (Number(e) === 0)
    return "0";
  if (Number(e) < 0)
    return "-" + Ao(-Number(e), t);
  const o = Number(e) / 10 ** n;
  return o > 0 && o < 1 ? Ic(o) : No(o, r);
}
function No(e, t) {
  if (t) {
    if (e >= Ti && e < Tr)
      return Lr(e, Ti, "M");
    if (e >= Tr && e < jr)
      return Lr(e, Tr, "B");
    if (e >= jr)
      return Lr(e, jr, "T");
  }
  return Intl.NumberFormat("en-US").format(e);
}
function Lr(e, t, n) {
  let r;
  typeof e == "bigint" ? r = String(e / (BigInt(t) / 1000n)) : r = String(Math.floor(e / (t / 1e3)));
  const o = r.padEnd(4, "0");
  return Intl.NumberFormat("en-US").format(Number(o)).replace(",", ".") + n;
}
function Ic(e) {
  if (e <= 0)
    return "0";
  const t = Math.ceil(-Math.log10(e));
  return Number(e) % Math.pow(10, 10 - (t + 2)) === 0 && Number(e) % Math.pow(10, 10 - (t + 1)) === 0 ? Sr(e, t) : Number(e) % Math.pow(10, 10 - (t + 2)) === 0 && Number(e) % Math.pow(10, 10 - (t + 1)) !== 0 ? Sr(e, t + 1) : Sr(e, t + 2);
}
function Sr(e, t) {
  function n(r) {
    if (isNaN(r))
      return r.toString();
    const o = "" + r;
    return /e/i.test(o) ? r.toFixed(18).replace(/\.?0+$/, "") : r.toString();
  }
  return t = t || 0, t = Math.pow(10, t), n(Math.floor(e * t) / t);
}
function Io(e, t) {
  if (e === 0n)
    return "0";
  if (e < 0n)
    return "-" + Io(-e, t);
  const { decimals: n = 9, withAbbr: r = !0 } = t ?? {}, o = e / 10n ** BigInt(n);
  return No(o, r);
}
function wc(e) {
  const t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER;
  return e >= BigInt(t) && e <= BigInt(n);
}
function Ec(e) {
  if (typeof e != "string")
    throw new Error("address is not a string");
  return !e || !e.startsWith("0x") ? e : e.slice(0, 7) + "...." + e.slice(-4, e.length);
}
function Dc(e) {
  var t = e.default;
  if (typeof t == "function") {
    var n = function() {
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
function Cc(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var wo = { exports: {} };
const Tc = {}, jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tc
}, Symbol.toStringTag, { value: "Module" })), Lc = /* @__PURE__ */ Dc(jc);
(function(e) {
  (function(t) {
    var n = function(c) {
      var l, u = new Float64Array(16);
      if (c)
        for (l = 0; l < c.length; l++)
          u[l] = c[l];
      return u;
    }, r = function() {
      throw new Error("no PRNG");
    }, o = new Uint8Array(16), s = new Uint8Array(32);
    s[0] = 9;
    var h = n(), f = n([1]), g = n([56129, 1]), p = n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), M = n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), m = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), j = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), C = n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function O(c, l, u, i) {
      c[l] = u >> 24 & 255, c[l + 1] = u >> 16 & 255, c[l + 2] = u >> 8 & 255, c[l + 3] = u & 255, c[l + 4] = i >> 24 & 255, c[l + 5] = i >> 16 & 255, c[l + 6] = i >> 8 & 255, c[l + 7] = i & 255;
    }
    function w(c, l, u, i, a) {
      var d, y = 0;
      for (d = 0; d < a; d++)
        y |= c[l + d] ^ u[i + d];
      return (1 & y - 1 >>> 8) - 1;
    }
    function P(c, l, u, i) {
      return w(c, l, u, i, 16);
    }
    function Z(c, l, u, i) {
      return w(c, l, u, i, 32);
    }
    function q(c, l, u, i) {
      for (var a = i[0] & 255 | (i[1] & 255) << 8 | (i[2] & 255) << 16 | (i[3] & 255) << 24, d = u[0] & 255 | (u[1] & 255) << 8 | (u[2] & 255) << 16 | (u[3] & 255) << 24, y = u[4] & 255 | (u[5] & 255) << 8 | (u[6] & 255) << 16 | (u[7] & 255) << 24, b = u[8] & 255 | (u[9] & 255) << 8 | (u[10] & 255) << 16 | (u[11] & 255) << 24, I = u[12] & 255 | (u[13] & 255) << 8 | (u[14] & 255) << 16 | (u[15] & 255) << 24, x = i[4] & 255 | (i[5] & 255) << 8 | (i[6] & 255) << 16 | (i[7] & 255) << 24, T = l[0] & 255 | (l[1] & 255) << 8 | (l[2] & 255) << 16 | (l[3] & 255) << 24, U = l[4] & 255 | (l[5] & 255) << 8 | (l[6] & 255) << 16 | (l[7] & 255) << 24, R = l[8] & 255 | (l[9] & 255) << 8 | (l[10] & 255) << 16 | (l[11] & 255) << 24, Q = l[12] & 255 | (l[13] & 255) << 8 | (l[14] & 255) << 16 | (l[15] & 255) << 24, W = i[8] & 255 | (i[9] & 255) << 8 | (i[10] & 255) << 16 | (i[11] & 255) << 24, X = u[16] & 255 | (u[17] & 255) << 8 | (u[18] & 255) << 16 | (u[19] & 255) << 24, $ = u[20] & 255 | (u[21] & 255) << 8 | (u[22] & 255) << 16 | (u[23] & 255) << 24, ee = u[24] & 255 | (u[25] & 255) << 8 | (u[26] & 255) << 16 | (u[27] & 255) << 24, H = u[28] & 255 | (u[29] & 255) << 8 | (u[30] & 255) << 16 | (u[31] & 255) << 24, ne = i[12] & 255 | (i[13] & 255) << 8 | (i[14] & 255) << 16 | (i[15] & 255) << 24, Y = a, K = d, k = y, B = b, G = I, z = x, A = T, N = U, L = R, E = Q, D = W, S = X, J = $, re = ee, oe = H, ie = ne, v, ue = 0; ue < 20; ue += 2)
        v = Y + J | 0, G ^= v << 7 | v >>> 32 - 7, v = G + Y | 0, L ^= v << 9 | v >>> 32 - 9, v = L + G | 0, J ^= v << 13 | v >>> 32 - 13, v = J + L | 0, Y ^= v << 18 | v >>> 32 - 18, v = z + K | 0, E ^= v << 7 | v >>> 32 - 7, v = E + z | 0, re ^= v << 9 | v >>> 32 - 9, v = re + E | 0, K ^= v << 13 | v >>> 32 - 13, v = K + re | 0, z ^= v << 18 | v >>> 32 - 18, v = D + A | 0, oe ^= v << 7 | v >>> 32 - 7, v = oe + D | 0, k ^= v << 9 | v >>> 32 - 9, v = k + oe | 0, A ^= v << 13 | v >>> 32 - 13, v = A + k | 0, D ^= v << 18 | v >>> 32 - 18, v = ie + S | 0, B ^= v << 7 | v >>> 32 - 7, v = B + ie | 0, N ^= v << 9 | v >>> 32 - 9, v = N + B | 0, S ^= v << 13 | v >>> 32 - 13, v = S + N | 0, ie ^= v << 18 | v >>> 32 - 18, v = Y + B | 0, K ^= v << 7 | v >>> 32 - 7, v = K + Y | 0, k ^= v << 9 | v >>> 32 - 9, v = k + K | 0, B ^= v << 13 | v >>> 32 - 13, v = B + k | 0, Y ^= v << 18 | v >>> 32 - 18, v = z + G | 0, A ^= v << 7 | v >>> 32 - 7, v = A + z | 0, N ^= v << 9 | v >>> 32 - 9, v = N + A | 0, G ^= v << 13 | v >>> 32 - 13, v = G + N | 0, z ^= v << 18 | v >>> 32 - 18, v = D + E | 0, S ^= v << 7 | v >>> 32 - 7, v = S + D | 0, L ^= v << 9 | v >>> 32 - 9, v = L + S | 0, E ^= v << 13 | v >>> 32 - 13, v = E + L | 0, D ^= v << 18 | v >>> 32 - 18, v = ie + oe | 0, J ^= v << 7 | v >>> 32 - 7, v = J + ie | 0, re ^= v << 9 | v >>> 32 - 9, v = re + J | 0, oe ^= v << 13 | v >>> 32 - 13, v = oe + re | 0, ie ^= v << 18 | v >>> 32 - 18;
      Y = Y + a | 0, K = K + d | 0, k = k + y | 0, B = B + b | 0, G = G + I | 0, z = z + x | 0, A = A + T | 0, N = N + U | 0, L = L + R | 0, E = E + Q | 0, D = D + W | 0, S = S + X | 0, J = J + $ | 0, re = re + ee | 0, oe = oe + H | 0, ie = ie + ne | 0, c[0] = Y >>> 0 & 255, c[1] = Y >>> 8 & 255, c[2] = Y >>> 16 & 255, c[3] = Y >>> 24 & 255, c[4] = K >>> 0 & 255, c[5] = K >>> 8 & 255, c[6] = K >>> 16 & 255, c[7] = K >>> 24 & 255, c[8] = k >>> 0 & 255, c[9] = k >>> 8 & 255, c[10] = k >>> 16 & 255, c[11] = k >>> 24 & 255, c[12] = B >>> 0 & 255, c[13] = B >>> 8 & 255, c[14] = B >>> 16 & 255, c[15] = B >>> 24 & 255, c[16] = G >>> 0 & 255, c[17] = G >>> 8 & 255, c[18] = G >>> 16 & 255, c[19] = G >>> 24 & 255, c[20] = z >>> 0 & 255, c[21] = z >>> 8 & 255, c[22] = z >>> 16 & 255, c[23] = z >>> 24 & 255, c[24] = A >>> 0 & 255, c[25] = A >>> 8 & 255, c[26] = A >>> 16 & 255, c[27] = A >>> 24 & 255, c[28] = N >>> 0 & 255, c[29] = N >>> 8 & 255, c[30] = N >>> 16 & 255, c[31] = N >>> 24 & 255, c[32] = L >>> 0 & 255, c[33] = L >>> 8 & 255, c[34] = L >>> 16 & 255, c[35] = L >>> 24 & 255, c[36] = E >>> 0 & 255, c[37] = E >>> 8 & 255, c[38] = E >>> 16 & 255, c[39] = E >>> 24 & 255, c[40] = D >>> 0 & 255, c[41] = D >>> 8 & 255, c[42] = D >>> 16 & 255, c[43] = D >>> 24 & 255, c[44] = S >>> 0 & 255, c[45] = S >>> 8 & 255, c[46] = S >>> 16 & 255, c[47] = S >>> 24 & 255, c[48] = J >>> 0 & 255, c[49] = J >>> 8 & 255, c[50] = J >>> 16 & 255, c[51] = J >>> 24 & 255, c[52] = re >>> 0 & 255, c[53] = re >>> 8 & 255, c[54] = re >>> 16 & 255, c[55] = re >>> 24 & 255, c[56] = oe >>> 0 & 255, c[57] = oe >>> 8 & 255, c[58] = oe >>> 16 & 255, c[59] = oe >>> 24 & 255, c[60] = ie >>> 0 & 255, c[61] = ie >>> 8 & 255, c[62] = ie >>> 16 & 255, c[63] = ie >>> 24 & 255;
    }
    function V(c, l, u, i) {
      for (var a = i[0] & 255 | (i[1] & 255) << 8 | (i[2] & 255) << 16 | (i[3] & 255) << 24, d = u[0] & 255 | (u[1] & 255) << 8 | (u[2] & 255) << 16 | (u[3] & 255) << 24, y = u[4] & 255 | (u[5] & 255) << 8 | (u[6] & 255) << 16 | (u[7] & 255) << 24, b = u[8] & 255 | (u[9] & 255) << 8 | (u[10] & 255) << 16 | (u[11] & 255) << 24, I = u[12] & 255 | (u[13] & 255) << 8 | (u[14] & 255) << 16 | (u[15] & 255) << 24, x = i[4] & 255 | (i[5] & 255) << 8 | (i[6] & 255) << 16 | (i[7] & 255) << 24, T = l[0] & 255 | (l[1] & 255) << 8 | (l[2] & 255) << 16 | (l[3] & 255) << 24, U = l[4] & 255 | (l[5] & 255) << 8 | (l[6] & 255) << 16 | (l[7] & 255) << 24, R = l[8] & 255 | (l[9] & 255) << 8 | (l[10] & 255) << 16 | (l[11] & 255) << 24, Q = l[12] & 255 | (l[13] & 255) << 8 | (l[14] & 255) << 16 | (l[15] & 255) << 24, W = i[8] & 255 | (i[9] & 255) << 8 | (i[10] & 255) << 16 | (i[11] & 255) << 24, X = u[16] & 255 | (u[17] & 255) << 8 | (u[18] & 255) << 16 | (u[19] & 255) << 24, $ = u[20] & 255 | (u[21] & 255) << 8 | (u[22] & 255) << 16 | (u[23] & 255) << 24, ee = u[24] & 255 | (u[25] & 255) << 8 | (u[26] & 255) << 16 | (u[27] & 255) << 24, H = u[28] & 255 | (u[29] & 255) << 8 | (u[30] & 255) << 16 | (u[31] & 255) << 24, ne = i[12] & 255 | (i[13] & 255) << 8 | (i[14] & 255) << 16 | (i[15] & 255) << 24, Y = a, K = d, k = y, B = b, G = I, z = x, A = T, N = U, L = R, E = Q, D = W, S = X, J = $, re = ee, oe = H, ie = ne, v, ue = 0; ue < 20; ue += 2)
        v = Y + J | 0, G ^= v << 7 | v >>> 32 - 7, v = G + Y | 0, L ^= v << 9 | v >>> 32 - 9, v = L + G | 0, J ^= v << 13 | v >>> 32 - 13, v = J + L | 0, Y ^= v << 18 | v >>> 32 - 18, v = z + K | 0, E ^= v << 7 | v >>> 32 - 7, v = E + z | 0, re ^= v << 9 | v >>> 32 - 9, v = re + E | 0, K ^= v << 13 | v >>> 32 - 13, v = K + re | 0, z ^= v << 18 | v >>> 32 - 18, v = D + A | 0, oe ^= v << 7 | v >>> 32 - 7, v = oe + D | 0, k ^= v << 9 | v >>> 32 - 9, v = k + oe | 0, A ^= v << 13 | v >>> 32 - 13, v = A + k | 0, D ^= v << 18 | v >>> 32 - 18, v = ie + S | 0, B ^= v << 7 | v >>> 32 - 7, v = B + ie | 0, N ^= v << 9 | v >>> 32 - 9, v = N + B | 0, S ^= v << 13 | v >>> 32 - 13, v = S + N | 0, ie ^= v << 18 | v >>> 32 - 18, v = Y + B | 0, K ^= v << 7 | v >>> 32 - 7, v = K + Y | 0, k ^= v << 9 | v >>> 32 - 9, v = k + K | 0, B ^= v << 13 | v >>> 32 - 13, v = B + k | 0, Y ^= v << 18 | v >>> 32 - 18, v = z + G | 0, A ^= v << 7 | v >>> 32 - 7, v = A + z | 0, N ^= v << 9 | v >>> 32 - 9, v = N + A | 0, G ^= v << 13 | v >>> 32 - 13, v = G + N | 0, z ^= v << 18 | v >>> 32 - 18, v = D + E | 0, S ^= v << 7 | v >>> 32 - 7, v = S + D | 0, L ^= v << 9 | v >>> 32 - 9, v = L + S | 0, E ^= v << 13 | v >>> 32 - 13, v = E + L | 0, D ^= v << 18 | v >>> 32 - 18, v = ie + oe | 0, J ^= v << 7 | v >>> 32 - 7, v = J + ie | 0, re ^= v << 9 | v >>> 32 - 9, v = re + J | 0, oe ^= v << 13 | v >>> 32 - 13, v = oe + re | 0, ie ^= v << 18 | v >>> 32 - 18;
      c[0] = Y >>> 0 & 255, c[1] = Y >>> 8 & 255, c[2] = Y >>> 16 & 255, c[3] = Y >>> 24 & 255, c[4] = z >>> 0 & 255, c[5] = z >>> 8 & 255, c[6] = z >>> 16 & 255, c[7] = z >>> 24 & 255, c[8] = D >>> 0 & 255, c[9] = D >>> 8 & 255, c[10] = D >>> 16 & 255, c[11] = D >>> 24 & 255, c[12] = ie >>> 0 & 255, c[13] = ie >>> 8 & 255, c[14] = ie >>> 16 & 255, c[15] = ie >>> 24 & 255, c[16] = A >>> 0 & 255, c[17] = A >>> 8 & 255, c[18] = A >>> 16 & 255, c[19] = A >>> 24 & 255, c[20] = N >>> 0 & 255, c[21] = N >>> 8 & 255, c[22] = N >>> 16 & 255, c[23] = N >>> 24 & 255, c[24] = L >>> 0 & 255, c[25] = L >>> 8 & 255, c[26] = L >>> 16 & 255, c[27] = L >>> 24 & 255, c[28] = E >>> 0 & 255, c[29] = E >>> 8 & 255, c[30] = E >>> 16 & 255, c[31] = E >>> 24 & 255;
    }
    function he(c, l, u, i) {
      q(c, l, u, i);
    }
    function fe(c, l, u, i) {
      V(c, l, u, i);
    }
    var ce = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
    function Le(c, l, u, i, a, d, y) {
      var b = new Uint8Array(16), I = new Uint8Array(64), x, T;
      for (T = 0; T < 16; T++)
        b[T] = 0;
      for (T = 0; T < 8; T++)
        b[T] = d[T];
      for (; a >= 64; ) {
        for (he(I, b, y, ce), T = 0; T < 64; T++)
          c[l + T] = u[i + T] ^ I[T];
        for (x = 1, T = 8; T < 16; T++)
          x = x + (b[T] & 255) | 0, b[T] = x & 255, x >>>= 8;
        a -= 64, l += 64, i += 64;
      }
      if (a > 0)
        for (he(I, b, y, ce), T = 0; T < a; T++)
          c[l + T] = u[i + T] ^ I[T];
      return 0;
    }
    function de(c, l, u, i, a) {
      var d = new Uint8Array(16), y = new Uint8Array(64), b, I;
      for (I = 0; I < 16; I++)
        d[I] = 0;
      for (I = 0; I < 8; I++)
        d[I] = i[I];
      for (; u >= 64; ) {
        for (he(y, d, a, ce), I = 0; I < 64; I++)
          c[l + I] = y[I];
        for (b = 1, I = 8; I < 16; I++)
          b = b + (d[I] & 255) | 0, d[I] = b & 255, b >>>= 8;
        u -= 64, l += 64;
      }
      if (u > 0)
        for (he(y, d, a, ce), I = 0; I < u; I++)
          c[l + I] = y[I];
      return 0;
    }
    function Re(c, l, u, i, a) {
      var d = new Uint8Array(32);
      fe(d, i, a, ce);
      for (var y = new Uint8Array(8), b = 0; b < 8; b++)
        y[b] = i[b + 16];
      return de(c, l, u, y, d);
    }
    function te(c, l, u, i, a, d, y) {
      var b = new Uint8Array(32);
      fe(b, d, y, ce);
      for (var I = new Uint8Array(8), x = 0; x < 8; x++)
        I[x] = d[x + 16];
      return Le(c, l, u, i, a, I, b);
    }
    var Me = function(c) {
      this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0;
      var l, u, i, a, d, y, b, I;
      l = c[0] & 255 | (c[1] & 255) << 8, this.r[0] = l & 8191, u = c[2] & 255 | (c[3] & 255) << 8, this.r[1] = (l >>> 13 | u << 3) & 8191, i = c[4] & 255 | (c[5] & 255) << 8, this.r[2] = (u >>> 10 | i << 6) & 7939, a = c[6] & 255 | (c[7] & 255) << 8, this.r[3] = (i >>> 7 | a << 9) & 8191, d = c[8] & 255 | (c[9] & 255) << 8, this.r[4] = (a >>> 4 | d << 12) & 255, this.r[5] = d >>> 1 & 8190, y = c[10] & 255 | (c[11] & 255) << 8, this.r[6] = (d >>> 14 | y << 2) & 8191, b = c[12] & 255 | (c[13] & 255) << 8, this.r[7] = (y >>> 11 | b << 5) & 8065, I = c[14] & 255 | (c[15] & 255) << 8, this.r[8] = (b >>> 8 | I << 8) & 8191, this.r[9] = I >>> 5 & 127, this.pad[0] = c[16] & 255 | (c[17] & 255) << 8, this.pad[1] = c[18] & 255 | (c[19] & 255) << 8, this.pad[2] = c[20] & 255 | (c[21] & 255) << 8, this.pad[3] = c[22] & 255 | (c[23] & 255) << 8, this.pad[4] = c[24] & 255 | (c[25] & 255) << 8, this.pad[5] = c[26] & 255 | (c[27] & 255) << 8, this.pad[6] = c[28] & 255 | (c[29] & 255) << 8, this.pad[7] = c[30] & 255 | (c[31] & 255) << 8;
    };
    Me.prototype.blocks = function(c, l, u) {
      for (var i = this.fin ? 0 : 2048, a, d, y, b, I, x, T, U, R, Q, W, X, $, ee, H, ne, Y, K, k, B = this.h[0], G = this.h[1], z = this.h[2], A = this.h[3], N = this.h[4], L = this.h[5], E = this.h[6], D = this.h[7], S = this.h[8], J = this.h[9], re = this.r[0], oe = this.r[1], ie = this.r[2], v = this.r[3], ue = this.r[4], ge = this.r[5], pe = this.r[6], se = this.r[7], ye = this.r[8], ve = this.r[9]; u >= 16; )
        a = c[l + 0] & 255 | (c[l + 1] & 255) << 8, B += a & 8191, d = c[l + 2] & 255 | (c[l + 3] & 255) << 8, G += (a >>> 13 | d << 3) & 8191, y = c[l + 4] & 255 | (c[l + 5] & 255) << 8, z += (d >>> 10 | y << 6) & 8191, b = c[l + 6] & 255 | (c[l + 7] & 255) << 8, A += (y >>> 7 | b << 9) & 8191, I = c[l + 8] & 255 | (c[l + 9] & 255) << 8, N += (b >>> 4 | I << 12) & 8191, L += I >>> 1 & 8191, x = c[l + 10] & 255 | (c[l + 11] & 255) << 8, E += (I >>> 14 | x << 2) & 8191, T = c[l + 12] & 255 | (c[l + 13] & 255) << 8, D += (x >>> 11 | T << 5) & 8191, U = c[l + 14] & 255 | (c[l + 15] & 255) << 8, S += (T >>> 8 | U << 8) & 8191, J += U >>> 5 | i, R = 0, Q = R, Q += B * re, Q += G * (5 * ve), Q += z * (5 * ye), Q += A * (5 * se), Q += N * (5 * pe), R = Q >>> 13, Q &= 8191, Q += L * (5 * ge), Q += E * (5 * ue), Q += D * (5 * v), Q += S * (5 * ie), Q += J * (5 * oe), R += Q >>> 13, Q &= 8191, W = R, W += B * oe, W += G * re, W += z * (5 * ve), W += A * (5 * ye), W += N * (5 * se), R = W >>> 13, W &= 8191, W += L * (5 * pe), W += E * (5 * ge), W += D * (5 * ue), W += S * (5 * v), W += J * (5 * ie), R += W >>> 13, W &= 8191, X = R, X += B * ie, X += G * oe, X += z * re, X += A * (5 * ve), X += N * (5 * ye), R = X >>> 13, X &= 8191, X += L * (5 * se), X += E * (5 * pe), X += D * (5 * ge), X += S * (5 * ue), X += J * (5 * v), R += X >>> 13, X &= 8191, $ = R, $ += B * v, $ += G * ie, $ += z * oe, $ += A * re, $ += N * (5 * ve), R = $ >>> 13, $ &= 8191, $ += L * (5 * ye), $ += E * (5 * se), $ += D * (5 * pe), $ += S * (5 * ge), $ += J * (5 * ue), R += $ >>> 13, $ &= 8191, ee = R, ee += B * ue, ee += G * v, ee += z * ie, ee += A * oe, ee += N * re, R = ee >>> 13, ee &= 8191, ee += L * (5 * ve), ee += E * (5 * ye), ee += D * (5 * se), ee += S * (5 * pe), ee += J * (5 * ge), R += ee >>> 13, ee &= 8191, H = R, H += B * ge, H += G * ue, H += z * v, H += A * ie, H += N * oe, R = H >>> 13, H &= 8191, H += L * re, H += E * (5 * ve), H += D * (5 * ye), H += S * (5 * se), H += J * (5 * pe), R += H >>> 13, H &= 8191, ne = R, ne += B * pe, ne += G * ge, ne += z * ue, ne += A * v, ne += N * ie, R = ne >>> 13, ne &= 8191, ne += L * oe, ne += E * re, ne += D * (5 * ve), ne += S * (5 * ye), ne += J * (5 * se), R += ne >>> 13, ne &= 8191, Y = R, Y += B * se, Y += G * pe, Y += z * ge, Y += A * ue, Y += N * v, R = Y >>> 13, Y &= 8191, Y += L * ie, Y += E * oe, Y += D * re, Y += S * (5 * ve), Y += J * (5 * ye), R += Y >>> 13, Y &= 8191, K = R, K += B * ye, K += G * se, K += z * pe, K += A * ge, K += N * ue, R = K >>> 13, K &= 8191, K += L * v, K += E * ie, K += D * oe, K += S * re, K += J * (5 * ve), R += K >>> 13, K &= 8191, k = R, k += B * ve, k += G * ye, k += z * se, k += A * pe, k += N * ge, R = k >>> 13, k &= 8191, k += L * ue, k += E * v, k += D * ie, k += S * oe, k += J * re, R += k >>> 13, k &= 8191, R = (R << 2) + R | 0, R = R + Q | 0, Q = R & 8191, R = R >>> 13, W += R, B = Q, G = W, z = X, A = $, N = ee, L = H, E = ne, D = Y, S = K, J = k, l += 16, u -= 16;
      this.h[0] = B, this.h[1] = G, this.h[2] = z, this.h[3] = A, this.h[4] = N, this.h[5] = L, this.h[6] = E, this.h[7] = D, this.h[8] = S, this.h[9] = J;
    }, Me.prototype.finish = function(c, l) {
      var u = new Uint16Array(10), i, a, d, y;
      if (this.leftover) {
        for (y = this.leftover, this.buffer[y++] = 1; y < 16; y++)
          this.buffer[y] = 0;
        this.fin = 1, this.blocks(this.buffer, 0, 16);
      }
      for (i = this.h[1] >>> 13, this.h[1] &= 8191, y = 2; y < 10; y++)
        this.h[y] += i, i = this.h[y] >>> 13, this.h[y] &= 8191;
      for (this.h[0] += i * 5, i = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += i, i = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += i, u[0] = this.h[0] + 5, i = u[0] >>> 13, u[0] &= 8191, y = 1; y < 10; y++)
        u[y] = this.h[y] + i, i = u[y] >>> 13, u[y] &= 8191;
      for (u[9] -= 1 << 13, a = (i ^ 1) - 1, y = 0; y < 10; y++)
        u[y] &= a;
      for (a = ~a, y = 0; y < 10; y++)
        this.h[y] = this.h[y] & a | u[y];
      for (this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, d = this.h[0] + this.pad[0], this.h[0] = d & 65535, y = 1; y < 8; y++)
        d = (this.h[y] + this.pad[y] | 0) + (d >>> 16) | 0, this.h[y] = d & 65535;
      c[l + 0] = this.h[0] >>> 0 & 255, c[l + 1] = this.h[0] >>> 8 & 255, c[l + 2] = this.h[1] >>> 0 & 255, c[l + 3] = this.h[1] >>> 8 & 255, c[l + 4] = this.h[2] >>> 0 & 255, c[l + 5] = this.h[2] >>> 8 & 255, c[l + 6] = this.h[3] >>> 0 & 255, c[l + 7] = this.h[3] >>> 8 & 255, c[l + 8] = this.h[4] >>> 0 & 255, c[l + 9] = this.h[4] >>> 8 & 255, c[l + 10] = this.h[5] >>> 0 & 255, c[l + 11] = this.h[5] >>> 8 & 255, c[l + 12] = this.h[6] >>> 0 & 255, c[l + 13] = this.h[6] >>> 8 & 255, c[l + 14] = this.h[7] >>> 0 & 255, c[l + 15] = this.h[7] >>> 8 & 255;
    }, Me.prototype.update = function(c, l, u) {
      var i, a;
      if (this.leftover) {
        for (a = 16 - this.leftover, a > u && (a = u), i = 0; i < a; i++)
          this.buffer[this.leftover + i] = c[l + i];
        if (u -= a, l += a, this.leftover += a, this.leftover < 16)
          return;
        this.blocks(this.buffer, 0, 16), this.leftover = 0;
      }
      if (u >= 16 && (a = u - u % 16, this.blocks(c, l, a), l += a, u -= a), u) {
        for (i = 0; i < u; i++)
          this.buffer[this.leftover + i] = c[l + i];
        this.leftover += u;
      }
    };
    function me(c, l, u, i, a, d) {
      var y = new Me(d);
      return y.update(u, i, a), y.finish(c, l), 0;
    }
    function Ae(c, l, u, i, a, d) {
      var y = new Uint8Array(16);
      return me(y, 0, u, i, a, d), P(c, l, y, 0);
    }
    function Ne(c, l, u, i, a) {
      var d;
      if (u < 32)
        return -1;
      for (te(c, 0, l, 0, u, i, a), me(c, 16, c, 32, u - 32, c), d = 0; d < 16; d++)
        c[d] = 0;
      return 0;
    }
    function Se(c, l, u, i, a) {
      var d, y = new Uint8Array(32);
      if (u < 32 || (Re(y, 0, 32, i, a), Ae(l, 16, l, 32, u - 32, y) !== 0))
        return -1;
      for (te(c, 0, l, 0, u, i, a), d = 0; d < 32; d++)
        c[d] = 0;
      return 0;
    }
    function we(c, l) {
      var u;
      for (u = 0; u < 16; u++)
        c[u] = l[u] | 0;
    }
    function tt(c) {
      var l, u, i = 1;
      for (l = 0; l < 16; l++)
        u = c[l] + i + 65535, i = Math.floor(u / 65536), c[l] = u - i * 65536;
      c[0] += i - 1 + 37 * (i - 1);
    }
    function _e(c, l, u) {
      for (var i, a = ~(u - 1), d = 0; d < 16; d++)
        i = a & (c[d] ^ l[d]), c[d] ^= i, l[d] ^= i;
    }
    function Qe(c, l) {
      var u, i, a, d = n(), y = n();
      for (u = 0; u < 16; u++)
        y[u] = l[u];
      for (tt(y), tt(y), tt(y), i = 0; i < 2; i++) {
        for (d[0] = y[0] - 65517, u = 1; u < 15; u++)
          d[u] = y[u] - 65535 - (d[u - 1] >> 16 & 1), d[u - 1] &= 65535;
        d[15] = y[15] - 32767 - (d[14] >> 16 & 1), a = d[15] >> 16 & 1, d[14] &= 65535, _e(y, d, 1 - a);
      }
      for (u = 0; u < 16; u++)
        c[2 * u] = y[u] & 255, c[2 * u + 1] = y[u] >> 8;
    }
    function st(c, l) {
      var u = new Uint8Array(32), i = new Uint8Array(32);
      return Qe(u, c), Qe(i, l), Z(u, 0, i, 0);
    }
    function ft(c) {
      var l = new Uint8Array(32);
      return Qe(l, c), l[0] & 1;
    }
    function bt(c, l) {
      var u;
      for (u = 0; u < 16; u++)
        c[u] = l[2 * u] + (l[2 * u + 1] << 8);
      c[15] &= 32767;
    }
    function Je(c, l, u) {
      for (var i = 0; i < 16; i++)
        c[i] = l[i] + u[i];
    }
    function et(c, l, u) {
      for (var i = 0; i < 16; i++)
        c[i] = l[i] - u[i];
    }
    function le(c, l, u) {
      var i, a, d = 0, y = 0, b = 0, I = 0, x = 0, T = 0, U = 0, R = 0, Q = 0, W = 0, X = 0, $ = 0, ee = 0, H = 0, ne = 0, Y = 0, K = 0, k = 0, B = 0, G = 0, z = 0, A = 0, N = 0, L = 0, E = 0, D = 0, S = 0, J = 0, re = 0, oe = 0, ie = 0, v = u[0], ue = u[1], ge = u[2], pe = u[3], se = u[4], ye = u[5], ve = u[6], Oe = u[7], be = u[8], De = u[9], Ce = u[10], Te = u[11], Pe = u[12], We = u[13], Ye = u[14], Ze = u[15];
      i = l[0], d += i * v, y += i * ue, b += i * ge, I += i * pe, x += i * se, T += i * ye, U += i * ve, R += i * Oe, Q += i * be, W += i * De, X += i * Ce, $ += i * Te, ee += i * Pe, H += i * We, ne += i * Ye, Y += i * Ze, i = l[1], y += i * v, b += i * ue, I += i * ge, x += i * pe, T += i * se, U += i * ye, R += i * ve, Q += i * Oe, W += i * be, X += i * De, $ += i * Ce, ee += i * Te, H += i * Pe, ne += i * We, Y += i * Ye, K += i * Ze, i = l[2], b += i * v, I += i * ue, x += i * ge, T += i * pe, U += i * se, R += i * ye, Q += i * ve, W += i * Oe, X += i * be, $ += i * De, ee += i * Ce, H += i * Te, ne += i * Pe, Y += i * We, K += i * Ye, k += i * Ze, i = l[3], I += i * v, x += i * ue, T += i * ge, U += i * pe, R += i * se, Q += i * ye, W += i * ve, X += i * Oe, $ += i * be, ee += i * De, H += i * Ce, ne += i * Te, Y += i * Pe, K += i * We, k += i * Ye, B += i * Ze, i = l[4], x += i * v, T += i * ue, U += i * ge, R += i * pe, Q += i * se, W += i * ye, X += i * ve, $ += i * Oe, ee += i * be, H += i * De, ne += i * Ce, Y += i * Te, K += i * Pe, k += i * We, B += i * Ye, G += i * Ze, i = l[5], T += i * v, U += i * ue, R += i * ge, Q += i * pe, W += i * se, X += i * ye, $ += i * ve, ee += i * Oe, H += i * be, ne += i * De, Y += i * Ce, K += i * Te, k += i * Pe, B += i * We, G += i * Ye, z += i * Ze, i = l[6], U += i * v, R += i * ue, Q += i * ge, W += i * pe, X += i * se, $ += i * ye, ee += i * ve, H += i * Oe, ne += i * be, Y += i * De, K += i * Ce, k += i * Te, B += i * Pe, G += i * We, z += i * Ye, A += i * Ze, i = l[7], R += i * v, Q += i * ue, W += i * ge, X += i * pe, $ += i * se, ee += i * ye, H += i * ve, ne += i * Oe, Y += i * be, K += i * De, k += i * Ce, B += i * Te, G += i * Pe, z += i * We, A += i * Ye, N += i * Ze, i = l[8], Q += i * v, W += i * ue, X += i * ge, $ += i * pe, ee += i * se, H += i * ye, ne += i * ve, Y += i * Oe, K += i * be, k += i * De, B += i * Ce, G += i * Te, z += i * Pe, A += i * We, N += i * Ye, L += i * Ze, i = l[9], W += i * v, X += i * ue, $ += i * ge, ee += i * pe, H += i * se, ne += i * ye, Y += i * ve, K += i * Oe, k += i * be, B += i * De, G += i * Ce, z += i * Te, A += i * Pe, N += i * We, L += i * Ye, E += i * Ze, i = l[10], X += i * v, $ += i * ue, ee += i * ge, H += i * pe, ne += i * se, Y += i * ye, K += i * ve, k += i * Oe, B += i * be, G += i * De, z += i * Ce, A += i * Te, N += i * Pe, L += i * We, E += i * Ye, D += i * Ze, i = l[11], $ += i * v, ee += i * ue, H += i * ge, ne += i * pe, Y += i * se, K += i * ye, k += i * ve, B += i * Oe, G += i * be, z += i * De, A += i * Ce, N += i * Te, L += i * Pe, E += i * We, D += i * Ye, S += i * Ze, i = l[12], ee += i * v, H += i * ue, ne += i * ge, Y += i * pe, K += i * se, k += i * ye, B += i * ve, G += i * Oe, z += i * be, A += i * De, N += i * Ce, L += i * Te, E += i * Pe, D += i * We, S += i * Ye, J += i * Ze, i = l[13], H += i * v, ne += i * ue, Y += i * ge, K += i * pe, k += i * se, B += i * ye, G += i * ve, z += i * Oe, A += i * be, N += i * De, L += i * Ce, E += i * Te, D += i * Pe, S += i * We, J += i * Ye, re += i * Ze, i = l[14], ne += i * v, Y += i * ue, K += i * ge, k += i * pe, B += i * se, G += i * ye, z += i * ve, A += i * Oe, N += i * be, L += i * De, E += i * Ce, D += i * Te, S += i * Pe, J += i * We, re += i * Ye, oe += i * Ze, i = l[15], Y += i * v, K += i * ue, k += i * ge, B += i * pe, G += i * se, z += i * ye, A += i * ve, N += i * Oe, L += i * be, E += i * De, D += i * Ce, S += i * Te, J += i * Pe, re += i * We, oe += i * Ye, ie += i * Ze, d += 38 * K, y += 38 * k, b += 38 * B, I += 38 * G, x += 38 * z, T += 38 * A, U += 38 * N, R += 38 * L, Q += 38 * E, W += 38 * D, X += 38 * S, $ += 38 * J, ee += 38 * re, H += 38 * oe, ne += 38 * ie, a = 1, i = d + a + 65535, a = Math.floor(i / 65536), d = i - a * 65536, i = y + a + 65535, a = Math.floor(i / 65536), y = i - a * 65536, i = b + a + 65535, a = Math.floor(i / 65536), b = i - a * 65536, i = I + a + 65535, a = Math.floor(i / 65536), I = i - a * 65536, i = x + a + 65535, a = Math.floor(i / 65536), x = i - a * 65536, i = T + a + 65535, a = Math.floor(i / 65536), T = i - a * 65536, i = U + a + 65535, a = Math.floor(i / 65536), U = i - a * 65536, i = R + a + 65535, a = Math.floor(i / 65536), R = i - a * 65536, i = Q + a + 65535, a = Math.floor(i / 65536), Q = i - a * 65536, i = W + a + 65535, a = Math.floor(i / 65536), W = i - a * 65536, i = X + a + 65535, a = Math.floor(i / 65536), X = i - a * 65536, i = $ + a + 65535, a = Math.floor(i / 65536), $ = i - a * 65536, i = ee + a + 65535, a = Math.floor(i / 65536), ee = i - a * 65536, i = H + a + 65535, a = Math.floor(i / 65536), H = i - a * 65536, i = ne + a + 65535, a = Math.floor(i / 65536), ne = i - a * 65536, i = Y + a + 65535, a = Math.floor(i / 65536), Y = i - a * 65536, d += a - 1 + 37 * (a - 1), a = 1, i = d + a + 65535, a = Math.floor(i / 65536), d = i - a * 65536, i = y + a + 65535, a = Math.floor(i / 65536), y = i - a * 65536, i = b + a + 65535, a = Math.floor(i / 65536), b = i - a * 65536, i = I + a + 65535, a = Math.floor(i / 65536), I = i - a * 65536, i = x + a + 65535, a = Math.floor(i / 65536), x = i - a * 65536, i = T + a + 65535, a = Math.floor(i / 65536), T = i - a * 65536, i = U + a + 65535, a = Math.floor(i / 65536), U = i - a * 65536, i = R + a + 65535, a = Math.floor(i / 65536), R = i - a * 65536, i = Q + a + 65535, a = Math.floor(i / 65536), Q = i - a * 65536, i = W + a + 65535, a = Math.floor(i / 65536), W = i - a * 65536, i = X + a + 65535, a = Math.floor(i / 65536), X = i - a * 65536, i = $ + a + 65535, a = Math.floor(i / 65536), $ = i - a * 65536, i = ee + a + 65535, a = Math.floor(i / 65536), ee = i - a * 65536, i = H + a + 65535, a = Math.floor(i / 65536), H = i - a * 65536, i = ne + a + 65535, a = Math.floor(i / 65536), ne = i - a * 65536, i = Y + a + 65535, a = Math.floor(i / 65536), Y = i - a * 65536, d += a - 1 + 37 * (a - 1), c[0] = d, c[1] = y, c[2] = b, c[3] = I, c[4] = x, c[5] = T, c[6] = U, c[7] = R, c[8] = Q, c[9] = W, c[10] = X, c[11] = $, c[12] = ee, c[13] = H, c[14] = ne, c[15] = Y;
    }
    function Fe(c, l) {
      le(c, l, l);
    }
    function Gt(c, l) {
      var u = n(), i;
      for (i = 0; i < 16; i++)
        u[i] = l[i];
      for (i = 253; i >= 0; i--)
        Fe(u, u), i !== 2 && i !== 4 && le(u, u, l);
      for (i = 0; i < 16; i++)
        c[i] = u[i];
    }
    function Lt(c, l) {
      var u = n(), i;
      for (i = 0; i < 16; i++)
        u[i] = l[i];
      for (i = 250; i >= 0; i--)
        Fe(u, u), i !== 1 && le(u, u, l);
      for (i = 0; i < 16; i++)
        c[i] = u[i];
    }
    function mt(c, l, u) {
      var i = new Uint8Array(32), a = new Float64Array(80), d, y, b = n(), I = n(), x = n(), T = n(), U = n(), R = n();
      for (y = 0; y < 31; y++)
        i[y] = l[y];
      for (i[31] = l[31] & 127 | 64, i[0] &= 248, bt(a, u), y = 0; y < 16; y++)
        I[y] = a[y], T[y] = b[y] = x[y] = 0;
      for (b[0] = T[0] = 1, y = 254; y >= 0; --y)
        d = i[y >>> 3] >>> (y & 7) & 1, _e(b, I, d), _e(x, T, d), Je(U, b, x), et(b, b, x), Je(x, I, T), et(I, I, T), Fe(T, U), Fe(R, b), le(b, x, b), le(x, I, U), Je(U, b, x), et(b, b, x), Fe(I, b), et(x, T, R), le(b, x, g), Je(b, b, T), le(x, x, b), le(b, T, R), le(T, I, a), Fe(I, U), _e(b, I, d), _e(x, T, d);
      for (y = 0; y < 16; y++)
        a[y + 16] = b[y], a[y + 32] = x[y], a[y + 48] = I[y], a[y + 64] = T[y];
      var Q = a.subarray(32), W = a.subarray(16);
      return Gt(Q, Q), le(W, W, Q), Qe(c, W), 0;
    }
    function ht(c, l) {
      return mt(c, l, s);
    }
    function Pn(c, l) {
      return r(l, 32), ht(c, l);
    }
    function St(c, l, u) {
      var i = new Uint8Array(32);
      return mt(i, u, l), fe(c, o, i, ce);
    }
    var zn = Ne, br = Se;
    function qt(c, l, u, i, a, d) {
      var y = new Uint8Array(32);
      return St(y, a, d), zn(c, l, u, i, y);
    }
    function Kt(c, l, u, i, a, d) {
      var y = new Uint8Array(32);
      return St(y, a, d), br(c, l, u, i, y);
    }
    var fn = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ];
    function hn(c, l, u, i) {
      for (var a = new Int32Array(16), d = new Int32Array(16), y, b, I, x, T, U, R, Q, W, X, $, ee, H, ne, Y, K, k, B, G, z, A, N, L, E, D, S, J = c[0], re = c[1], oe = c[2], ie = c[3], v = c[4], ue = c[5], ge = c[6], pe = c[7], se = l[0], ye = l[1], ve = l[2], Oe = l[3], be = l[4], De = l[5], Ce = l[6], Te = l[7], Pe = 0; i >= 128; ) {
        for (G = 0; G < 16; G++)
          z = 8 * G + Pe, a[G] = u[z + 0] << 24 | u[z + 1] << 16 | u[z + 2] << 8 | u[z + 3], d[G] = u[z + 4] << 24 | u[z + 5] << 16 | u[z + 6] << 8 | u[z + 7];
        for (G = 0; G < 80; G++)
          if (y = J, b = re, I = oe, x = ie, T = v, U = ue, R = ge, Q = pe, W = se, X = ye, $ = ve, ee = Oe, H = be, ne = De, Y = Ce, K = Te, A = pe, N = Te, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = (v >>> 14 | be << 32 - 14) ^ (v >>> 18 | be << 32 - 18) ^ (be >>> 41 - 32 | v << 32 - (41 - 32)), N = (be >>> 14 | v << 32 - 14) ^ (be >>> 18 | v << 32 - 18) ^ (v >>> 41 - 32 | be << 32 - (41 - 32)), L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, A = v & ue ^ ~v & ge, N = be & De ^ ~be & Ce, L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, A = fn[G * 2], N = fn[G * 2 + 1], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, A = a[G % 16], N = d[G % 16], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, k = D & 65535 | S << 16, B = L & 65535 | E << 16, A = k, N = B, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = (J >>> 28 | se << 32 - 28) ^ (se >>> 34 - 32 | J << 32 - (34 - 32)) ^ (se >>> 39 - 32 | J << 32 - (39 - 32)), N = (se >>> 28 | J << 32 - 28) ^ (J >>> 34 - 32 | se << 32 - (34 - 32)) ^ (J >>> 39 - 32 | se << 32 - (39 - 32)), L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, A = J & re ^ J & oe ^ re & oe, N = se & ye ^ se & ve ^ ye & ve, L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, Q = D & 65535 | S << 16, K = L & 65535 | E << 16, A = x, N = ee, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = k, N = B, L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, x = D & 65535 | S << 16, ee = L & 65535 | E << 16, re = y, oe = b, ie = I, v = x, ue = T, ge = U, pe = R, J = Q, ye = W, ve = X, Oe = $, be = ee, De = H, Ce = ne, Te = Y, se = K, G % 16 === 15)
            for (z = 0; z < 16; z++)
              A = a[z], N = d[z], L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = a[(z + 9) % 16], N = d[(z + 9) % 16], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, k = a[(z + 1) % 16], B = d[(z + 1) % 16], A = (k >>> 1 | B << 32 - 1) ^ (k >>> 8 | B << 32 - 8) ^ k >>> 7, N = (B >>> 1 | k << 32 - 1) ^ (B >>> 8 | k << 32 - 8) ^ (B >>> 7 | k << 32 - 7), L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, k = a[(z + 14) % 16], B = d[(z + 14) % 16], A = (k >>> 19 | B << 32 - 19) ^ (B >>> 61 - 32 | k << 32 - (61 - 32)) ^ k >>> 6, N = (B >>> 19 | k << 32 - 19) ^ (k >>> 61 - 32 | B << 32 - (61 - 32)) ^ (B >>> 6 | k << 32 - 6), L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, a[z] = D & 65535 | S << 16, d[z] = L & 65535 | E << 16;
        A = J, N = se, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = c[0], N = l[0], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, c[0] = J = D & 65535 | S << 16, l[0] = se = L & 65535 | E << 16, A = re, N = ye, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = c[1], N = l[1], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, c[1] = re = D & 65535 | S << 16, l[1] = ye = L & 65535 | E << 16, A = oe, N = ve, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = c[2], N = l[2], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, c[2] = oe = D & 65535 | S << 16, l[2] = ve = L & 65535 | E << 16, A = ie, N = Oe, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = c[3], N = l[3], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, c[3] = ie = D & 65535 | S << 16, l[3] = Oe = L & 65535 | E << 16, A = v, N = be, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = c[4], N = l[4], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, c[4] = v = D & 65535 | S << 16, l[4] = be = L & 65535 | E << 16, A = ue, N = De, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = c[5], N = l[5], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, c[5] = ue = D & 65535 | S << 16, l[5] = De = L & 65535 | E << 16, A = ge, N = Ce, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = c[6], N = l[6], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, c[6] = ge = D & 65535 | S << 16, l[6] = Ce = L & 65535 | E << 16, A = pe, N = Te, L = N & 65535, E = N >>> 16, D = A & 65535, S = A >>> 16, A = c[7], N = l[7], L += N & 65535, E += N >>> 16, D += A & 65535, S += A >>> 16, E += L >>> 16, D += E >>> 16, S += D >>> 16, c[7] = pe = D & 65535 | S << 16, l[7] = Te = L & 65535 | E << 16, Pe += 128, i -= 128;
      }
      return i;
    }
    function nt(c, l, u) {
      var i = new Int32Array(8), a = new Int32Array(8), d = new Uint8Array(256), y, b = u;
      for (i[0] = 1779033703, i[1] = 3144134277, i[2] = 1013904242, i[3] = 2773480762, i[4] = 1359893119, i[5] = 2600822924, i[6] = 528734635, i[7] = 1541459225, a[0] = 4089235720, a[1] = 2227873595, a[2] = 4271175723, a[3] = 1595750129, a[4] = 2917565137, a[5] = 725511199, a[6] = 4215389547, a[7] = 327033209, hn(i, a, l, u), u %= 128, y = 0; y < u; y++)
        d[y] = l[b - u + y];
      for (d[u] = 128, u = 256 - 128 * (u < 112 ? 1 : 0), d[u - 9] = 0, O(d, u - 8, b / 536870912 | 0, b << 3), hn(i, a, d, u), y = 0; y < 8; y++)
        O(c, 8 * y, i[y], a[y]);
      return 0;
    }
    function Vt(c, l) {
      var u = n(), i = n(), a = n(), d = n(), y = n(), b = n(), I = n(), x = n(), T = n();
      et(u, c[1], c[0]), et(T, l[1], l[0]), le(u, u, T), Je(i, c[0], c[1]), Je(T, l[0], l[1]), le(i, i, T), le(a, c[3], l[3]), le(a, a, M), le(d, c[2], l[2]), Je(d, d, d), et(y, i, u), et(b, d, a), Je(I, d, a), Je(x, i, u), le(c[0], y, b), le(c[1], x, I), le(c[2], I, b), le(c[3], y, x);
    }
    function _n(c, l, u) {
      var i;
      for (i = 0; i < 4; i++)
        _e(c[i], l[i], u);
    }
    function Ot(c, l) {
      var u = n(), i = n(), a = n();
      Gt(a, l[2]), le(u, l[0], a), le(i, l[1], a), Qe(c, i), c[31] ^= ft(u) << 7;
    }
    function dn(c, l, u) {
      var i, a;
      for (we(c[0], h), we(c[1], f), we(c[2], f), we(c[3], h), a = 255; a >= 0; --a)
        i = u[a / 8 | 0] >> (a & 7) & 1, _n(c, l, i), Vt(l, c), Vt(c, c), _n(c, l, i);
    }
    function Xt(c, l) {
      var u = [n(), n(), n(), n()];
      we(u[0], m), we(u[1], j), we(u[2], f), le(u[3], m, j), dn(c, u, l);
    }
    function Ht(c, l, u) {
      var i = new Uint8Array(64), a = [n(), n(), n(), n()], d;
      for (u || r(l, 32), nt(i, l, 32), i[0] &= 248, i[31] &= 127, i[31] |= 64, Xt(a, i), Ot(c, a), d = 0; d < 32; d++)
        l[d + 32] = c[d];
      return 0;
    }
    var xt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function dt(c, l) {
      var u, i, a, d;
      for (i = 63; i >= 32; --i) {
        for (u = 0, a = i - 32, d = i - 12; a < d; ++a)
          l[a] += u - 16 * l[i] * xt[a - (i - 32)], u = Math.floor((l[a] + 128) / 256), l[a] -= u * 256;
        l[a] += u, l[i] = 0;
      }
      for (u = 0, a = 0; a < 32; a++)
        l[a] += u - (l[31] >> 4) * xt[a], u = l[a] >> 8, l[a] &= 255;
      for (a = 0; a < 32; a++)
        l[a] -= u * xt[a];
      for (i = 0; i < 32; i++)
        l[i + 1] += l[i] >> 8, c[i] = l[i] & 255;
    }
    function yn(c) {
      var l = new Float64Array(64), u;
      for (u = 0; u < 64; u++)
        l[u] = c[u];
      for (u = 0; u < 64; u++)
        c[u] = 0;
      dt(c, l);
    }
    function vn(c, l, u, i) {
      var a = new Uint8Array(64), d = new Uint8Array(64), y = new Uint8Array(64), b, I, x = new Float64Array(64), T = [n(), n(), n(), n()];
      nt(a, i, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64;
      var U = u + 64;
      for (b = 0; b < u; b++)
        c[64 + b] = l[b];
      for (b = 0; b < 32; b++)
        c[32 + b] = a[32 + b];
      for (nt(y, c.subarray(32), u + 32), yn(y), Xt(T, y), Ot(c, T), b = 32; b < 64; b++)
        c[b] = i[b];
      for (nt(d, c, u + 64), yn(d), b = 0; b < 64; b++)
        x[b] = 0;
      for (b = 0; b < 32; b++)
        x[b] = y[b];
      for (b = 0; b < 32; b++)
        for (I = 0; I < 32; I++)
          x[b + I] += d[b] * a[I];
      return dt(c.subarray(32), x), U;
    }
    function Un(c, l) {
      var u = n(), i = n(), a = n(), d = n(), y = n(), b = n(), I = n();
      return we(c[2], f), bt(c[1], l), Fe(a, c[1]), le(d, a, p), et(a, a, c[2]), Je(d, c[2], d), Fe(y, d), Fe(b, y), le(I, b, y), le(u, I, a), le(u, u, d), Lt(u, u), le(u, u, a), le(u, u, d), le(u, u, d), le(c[0], u, d), Fe(i, c[0]), le(i, i, d), st(i, a) && le(c[0], c[0], C), Fe(i, c[0]), le(i, i, d), st(i, a) ? -1 : (ft(c[0]) === l[31] >> 7 && et(c[0], h, c[0]), le(c[3], c[0], c[1]), 0);
    }
    function Rt(c, l, u, i) {
      var a, d = new Uint8Array(32), y = new Uint8Array(64), b = [n(), n(), n(), n()], I = [n(), n(), n(), n()];
      if (u < 64 || Un(I, i))
        return -1;
      for (a = 0; a < u; a++)
        c[a] = l[a];
      for (a = 0; a < 32; a++)
        c[a + 32] = i[a];
      if (nt(y, c, u), yn(y), dn(b, I, y), Xt(I, l.subarray(32)), Vt(b, I), Ot(d, b), u -= 64, Z(l, 0, d, 0)) {
        for (a = 0; a < u; a++)
          c[a] = 0;
        return -1;
      }
      for (a = 0; a < u; a++)
        c[a] = l[a + 64];
      return u;
    }
    var gn = 32, Jt = 24, Pt = 32, At = 16, zt = 32, $t = 32, _t = 32, yt = 32, en = 32, vt = Jt, pn = Pt, Mn = At, rt = 64, gt = 32, pt = 64, bn = 32, tn = 64;
    t.lowlevel = {
      crypto_core_hsalsa20: fe,
      crypto_stream_xor: te,
      crypto_stream: Re,
      crypto_stream_salsa20_xor: Le,
      crypto_stream_salsa20: de,
      crypto_onetimeauth: me,
      crypto_onetimeauth_verify: Ae,
      crypto_verify_16: P,
      crypto_verify_32: Z,
      crypto_secretbox: Ne,
      crypto_secretbox_open: Se,
      crypto_scalarmult: mt,
      crypto_scalarmult_base: ht,
      crypto_box_beforenm: St,
      crypto_box_afternm: zn,
      crypto_box: qt,
      crypto_box_open: Kt,
      crypto_box_keypair: Pn,
      crypto_hash: nt,
      crypto_sign: vn,
      crypto_sign_keypair: Ht,
      crypto_sign_open: Rt,
      crypto_secretbox_KEYBYTES: gn,
      crypto_secretbox_NONCEBYTES: Jt,
      crypto_secretbox_ZEROBYTES: Pt,
      crypto_secretbox_BOXZEROBYTES: At,
      crypto_scalarmult_BYTES: zt,
      crypto_scalarmult_SCALARBYTES: $t,
      crypto_box_PUBLICKEYBYTES: _t,
      crypto_box_SECRETKEYBYTES: yt,
      crypto_box_BEFORENMBYTES: en,
      crypto_box_NONCEBYTES: vt,
      crypto_box_ZEROBYTES: pn,
      crypto_box_BOXZEROBYTES: Mn,
      crypto_sign_BYTES: rt,
      crypto_sign_PUBLICKEYBYTES: gt,
      crypto_sign_SECRETKEYBYTES: pt,
      crypto_sign_SEEDBYTES: bn,
      crypto_hash_BYTES: tn,
      gf: n,
      D: p,
      L: xt,
      pack25519: Qe,
      unpack25519: bt,
      M: le,
      A: Je,
      S: Fe,
      Z: et,
      pow2523: Lt,
      add: Vt,
      set25519: we,
      modL: dt,
      scalarmult: dn,
      scalarbase: Xt
    };
    function mn(c, l) {
      if (c.length !== gn)
        throw new Error("bad key size");
      if (l.length !== Jt)
        throw new Error("bad nonce size");
    }
    function mr(c, l) {
      if (c.length !== _t)
        throw new Error("bad public key size");
      if (l.length !== yt)
        throw new Error("bad secret key size");
    }
    function qe() {
      for (var c = 0; c < arguments.length; c++)
        if (!(arguments[c] instanceof Uint8Array))
          throw new TypeError("unexpected type, use Uint8Array");
    }
    function An(c) {
      for (var l = 0; l < c.length; l++)
        c[l] = 0;
    }
    t.randomBytes = function(c) {
      var l = new Uint8Array(c);
      return r(l, c), l;
    }, t.secretbox = function(c, l, u) {
      qe(c, l, u), mn(u, l);
      for (var i = new Uint8Array(Pt + c.length), a = new Uint8Array(i.length), d = 0; d < c.length; d++)
        i[d + Pt] = c[d];
      return Ne(a, i, i.length, l, u), a.subarray(At);
    }, t.secretbox.open = function(c, l, u) {
      qe(c, l, u), mn(u, l);
      for (var i = new Uint8Array(At + c.length), a = new Uint8Array(i.length), d = 0; d < c.length; d++)
        i[d + At] = c[d];
      return i.length < 32 || Se(a, i, i.length, l, u) !== 0 ? null : a.subarray(Pt);
    }, t.secretbox.keyLength = gn, t.secretbox.nonceLength = Jt, t.secretbox.overheadLength = At, t.scalarMult = function(c, l) {
      if (qe(c, l), c.length !== $t)
        throw new Error("bad n size");
      if (l.length !== zt)
        throw new Error("bad p size");
      var u = new Uint8Array(zt);
      return mt(u, c, l), u;
    }, t.scalarMult.base = function(c) {
      if (qe(c), c.length !== $t)
        throw new Error("bad n size");
      var l = new Uint8Array(zt);
      return ht(l, c), l;
    }, t.scalarMult.scalarLength = $t, t.scalarMult.groupElementLength = zt, t.box = function(c, l, u, i) {
      var a = t.box.before(u, i);
      return t.secretbox(c, l, a);
    }, t.box.before = function(c, l) {
      qe(c, l), mr(c, l);
      var u = new Uint8Array(en);
      return St(u, c, l), u;
    }, t.box.after = t.secretbox, t.box.open = function(c, l, u, i) {
      var a = t.box.before(u, i);
      return t.secretbox.open(c, l, a);
    }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
      var c = new Uint8Array(_t), l = new Uint8Array(yt);
      return Pn(c, l), { publicKey: c, secretKey: l };
    }, t.box.keyPair.fromSecretKey = function(c) {
      if (qe(c), c.length !== yt)
        throw new Error("bad secret key size");
      var l = new Uint8Array(_t);
      return ht(l, c), { publicKey: l, secretKey: new Uint8Array(c) };
    }, t.box.publicKeyLength = _t, t.box.secretKeyLength = yt, t.box.sharedKeyLength = en, t.box.nonceLength = vt, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(c, l) {
      if (qe(c, l), l.length !== pt)
        throw new Error("bad secret key size");
      var u = new Uint8Array(rt + c.length);
      return vn(u, c, c.length, l), u;
    }, t.sign.open = function(c, l) {
      if (qe(c, l), l.length !== gt)
        throw new Error("bad public key size");
      var u = new Uint8Array(c.length), i = Rt(u, c, c.length, l);
      if (i < 0)
        return null;
      for (var a = new Uint8Array(i), d = 0; d < a.length; d++)
        a[d] = u[d];
      return a;
    }, t.sign.detached = function(c, l) {
      for (var u = t.sign(c, l), i = new Uint8Array(rt), a = 0; a < i.length; a++)
        i[a] = u[a];
      return i;
    }, t.sign.detached.verify = function(c, l, u) {
      if (qe(c, l, u), l.length !== rt)
        throw new Error("bad signature size");
      if (u.length !== gt)
        throw new Error("bad public key size");
      var i = new Uint8Array(rt + c.length), a = new Uint8Array(rt + c.length), d;
      for (d = 0; d < rt; d++)
        i[d] = l[d];
      for (d = 0; d < c.length; d++)
        i[d + rt] = c[d];
      return Rt(a, i, i.length, u) >= 0;
    }, t.sign.keyPair = function() {
      var c = new Uint8Array(gt), l = new Uint8Array(pt);
      return Ht(c, l), { publicKey: c, secretKey: l };
    }, t.sign.keyPair.fromSecretKey = function(c) {
      if (qe(c), c.length !== pt)
        throw new Error("bad secret key size");
      for (var l = new Uint8Array(gt), u = 0; u < l.length; u++)
        l[u] = c[32 + u];
      return { publicKey: l, secretKey: new Uint8Array(c) };
    }, t.sign.keyPair.fromSeed = function(c) {
      if (qe(c), c.length !== bn)
        throw new Error("bad seed size");
      for (var l = new Uint8Array(gt), u = new Uint8Array(pt), i = 0; i < 32; i++)
        u[i] = c[i];
      return Ht(l, u, !0), { publicKey: l, secretKey: u };
    }, t.sign.publicKeyLength = gt, t.sign.secretKeyLength = pt, t.sign.seedLength = bn, t.sign.signatureLength = rt, t.hash = function(c) {
      qe(c);
      var l = new Uint8Array(tn);
      return nt(l, c, c.length), l;
    }, t.hash.hashLength = tn, t.verify = function(c, l) {
      return qe(c, l), c.length === 0 || l.length === 0 || c.length !== l.length ? !1 : w(c, 0, l, 0, c.length) === 0;
    }, t.setPRNG = function(c) {
      r = c;
    }, function() {
      var c = typeof self < "u" ? self.crypto || self.msCrypto : null;
      if (c && c.getRandomValues) {
        var l = 65536;
        t.setPRNG(function(u, i) {
          var a, d = new Uint8Array(i);
          for (a = 0; a < i; a += l)
            c.getRandomValues(d.subarray(a, a + Math.min(i - a, l)));
          for (a = 0; a < i; a++)
            u[a] = d[a];
          An(d);
        });
      } else
        typeof Cc < "u" && (c = Lc, c && c.randomBytes && t.setPRNG(function(u, i) {
          var a, d = c.randomBytes(i);
          for (a = 0; a < i; a++)
            u[a] = d[a];
          An(d);
        }));
    }();
  })(e.exports ? e.exports : self.nacl = self.nacl || {});
})(wo);
function Yr(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
function Sc(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
function Eo(e, ...t) {
  if (!(e instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function Oc(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Yr(e.outputLen), Yr(e.blockLen);
}
function xc(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Rc(e, t) {
  Eo(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const an = {
  number: Yr,
  bool: Sc,
  bytes: Eo,
  hash: Oc,
  exists: xc,
  output: Rc
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const lr = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), Pc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Pc)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function zc(e) {
  if (typeof e != "string")
    throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);
  return new TextEncoder().encode(e);
}
function Cn(e) {
  if (typeof e == "string" && (e = zc(e)), !(e instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);
  return e;
}
class _c {
  clone() {
    return this._cloneInto();
  }
}
function Uc(e) {
  const t = (r, o) => e(o).update(Cn(r)).digest(), n = e({});
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = (r) => e(r), t;
}
const kc = new Uint8Array([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3
]);
class Qc extends _c {
  constructor(t, n, r = {}, o, s, h) {
    if (super(), this.blockLen = t, this.outputLen = n, this.length = 0, this.pos = 0, this.finished = !1, this.destroyed = !1, an.number(t), an.number(n), an.number(o), n < 0 || n > o)
      throw new Error("outputLen bigger than keyLen");
    if (r.key !== void 0 && (r.key.length < 1 || r.key.length > o))
      throw new Error(`key must be up 1..${o} byte long or undefined`);
    if (r.salt !== void 0 && r.salt.length !== s)
      throw new Error(`salt must be ${s} byte long or undefined`);
    if (r.personalization !== void 0 && r.personalization.length !== h)
      throw new Error(`personalization must be ${h} byte long or undefined`);
    this.buffer32 = lr(this.buffer = new Uint8Array(t));
  }
  update(t) {
    an.exists(this);
    const { blockLen: n, buffer: r, buffer32: o } = this;
    t = Cn(t);
    const s = t.length;
    for (let h = 0; h < s; ) {
      this.pos === n && (this.compress(o, 0, !1), this.pos = 0);
      const f = Math.min(n - this.pos, s - h), g = t.byteOffset + h;
      if (f === n && !(g % 4) && h + f < s) {
        const p = new Uint32Array(t.buffer, g, Math.floor((s - h) / 4));
        for (let M = 0; h + n < s; M += o.length, h += n)
          this.length += n, this.compress(p, M, !1);
        continue;
      }
      r.set(t.subarray(h, h + f), this.pos), this.pos += f, this.length += f, h += f;
    }
    return this;
  }
  digestInto(t) {
    an.exists(this), an.output(t, this);
    const { pos: n, buffer32: r } = this;
    this.finished = !0, this.buffer.subarray(n).fill(0), this.compress(r, 0, !0);
    const o = lr(t);
    this.get().forEach((s, h) => o[h] = s);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    const { buffer: n, length: r, finished: o, destroyed: s, outputLen: h, pos: f } = this;
    return t || (t = new this.constructor({ dkLen: h })), t.set(...this.get()), t.length = r, t.finished = o, t.destroyed = s, t.outputLen = h, t.buffer.set(n), t.pos = f, t;
  }
}
const Zn = BigInt(2 ** 32 - 1), Zr = BigInt(32);
function Do(e, t = !1) {
  return t ? { h: Number(e & Zn), l: Number(e >> Zr & Zn) } : { h: Number(e >> Zr & Zn) | 0, l: Number(e & Zn) | 0 };
}
function Fc(e, t = !1) {
  let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    const { h: s, l: h } = Do(e[o], t);
    [n[o], r[o]] = [s, h];
  }
  return [n, r];
}
const Wc = (e, t) => BigInt(e >>> 0) << Zr | BigInt(t >>> 0), Yc = (e, t, n) => e >>> n, Zc = (e, t, n) => e << 32 - n | t >>> n, Bc = (e, t, n) => e >>> n | t << 32 - n, Gc = (e, t, n) => e << 32 - n | t >>> n, qc = (e, t, n) => e << 64 - n | t >>> n - 32, Kc = (e, t, n) => e >>> n - 32 | t << 64 - n, Vc = (e, t) => t, Xc = (e, t) => e, Hc = (e, t, n) => e << n | t >>> 32 - n, Jc = (e, t, n) => t << n | e >>> 32 - n, $c = (e, t, n) => t << n - 32 | e >>> 64 - n, eu = (e, t, n) => e << n - 32 | t >>> 64 - n;
function tu(e, t, n, r) {
  const o = (t >>> 0) + (r >>> 0);
  return { h: e + n + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const nu = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), ru = (e, t, n, r) => t + n + r + (e / 2 ** 32 | 0) | 0, iu = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0), ou = (e, t, n, r, o) => t + n + r + o + (e / 2 ** 32 | 0) | 0, au = (e, t, n, r, o) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0), su = (e, t, n, r, o, s) => t + n + r + o + s + (e / 2 ** 32 | 0) | 0, Ve = {
  fromBig: Do,
  split: Fc,
  toBig: Wc,
  shrSH: Yc,
  shrSL: Zc,
  rotrSH: Bc,
  rotrSL: Gc,
  rotrBH: qc,
  rotrBL: Kc,
  rotr32H: Vc,
  rotr32L: Xc,
  rotlSH: Hc,
  rotlSL: Jc,
  rotlBH: $c,
  rotlBL: eu,
  add: tu,
  add3L: nu,
  add3H: ru,
  add4L: iu,
  add4H: ou,
  add5H: su,
  add5L: au
}, ze = new Uint32Array([
  4089235720,
  1779033703,
  2227873595,
  3144134277,
  4271175723,
  1013904242,
  1595750129,
  2773480762,
  2917565137,
  1359893119,
  725511199,
  2600822924,
  4215389547,
  528734635,
  327033209,
  1541459225
]), _ = new Uint32Array(32);
function It(e, t, n, r, o, s) {
  const h = o[s], f = o[s + 1];
  let g = _[2 * e], p = _[2 * e + 1], M = _[2 * t], m = _[2 * t + 1], j = _[2 * n], C = _[2 * n + 1], O = _[2 * r], w = _[2 * r + 1], P = Ve.add3L(g, M, h);
  p = Ve.add3H(P, p, m, f), g = P | 0, { Dh: w, Dl: O } = { Dh: w ^ p, Dl: O ^ g }, { Dh: w, Dl: O } = { Dh: Ve.rotr32H(w, O), Dl: Ve.rotr32L(w, O) }, { h: C, l: j } = Ve.add(C, j, w, O), { Bh: m, Bl: M } = { Bh: m ^ C, Bl: M ^ j }, { Bh: m, Bl: M } = { Bh: Ve.rotrSH(m, M, 24), Bl: Ve.rotrSL(m, M, 24) }, _[2 * e] = g, _[2 * e + 1] = p, _[2 * t] = M, _[2 * t + 1] = m, _[2 * n] = j, _[2 * n + 1] = C, _[2 * r] = O, _[2 * r + 1] = w;
}
function wt(e, t, n, r, o, s) {
  const h = o[s], f = o[s + 1];
  let g = _[2 * e], p = _[2 * e + 1], M = _[2 * t], m = _[2 * t + 1], j = _[2 * n], C = _[2 * n + 1], O = _[2 * r], w = _[2 * r + 1], P = Ve.add3L(g, M, h);
  p = Ve.add3H(P, p, m, f), g = P | 0, { Dh: w, Dl: O } = { Dh: w ^ p, Dl: O ^ g }, { Dh: w, Dl: O } = { Dh: Ve.rotrSH(w, O, 16), Dl: Ve.rotrSL(w, O, 16) }, { h: C, l: j } = Ve.add(C, j, w, O), { Bh: m, Bl: M } = { Bh: m ^ C, Bl: M ^ j }, { Bh: m, Bl: M } = { Bh: Ve.rotrBH(m, M, 63), Bl: Ve.rotrBL(m, M, 63) }, _[2 * e] = g, _[2 * e + 1] = p, _[2 * t] = M, _[2 * t + 1] = m, _[2 * n] = j, _[2 * n + 1] = C, _[2 * r] = O, _[2 * r + 1] = w;
}
class cu extends Qc {
  constructor(t = {}) {
    super(128, t.dkLen === void 0 ? 64 : t.dkLen, t, 64, 16, 16), this.v0l = ze[0] | 0, this.v0h = ze[1] | 0, this.v1l = ze[2] | 0, this.v1h = ze[3] | 0, this.v2l = ze[4] | 0, this.v2h = ze[5] | 0, this.v3l = ze[6] | 0, this.v3h = ze[7] | 0, this.v4l = ze[8] | 0, this.v4h = ze[9] | 0, this.v5l = ze[10] | 0, this.v5h = ze[11] | 0, this.v6l = ze[12] | 0, this.v6h = ze[13] | 0, this.v7l = ze[14] | 0, this.v7h = ze[15] | 0;
    const n = t.key ? t.key.length : 0;
    if (this.v0l ^= this.outputLen | n << 8 | 1 << 16 | 1 << 24, t.salt) {
      const r = lr(Cn(t.salt));
      this.v4l ^= r[0], this.v4h ^= r[1], this.v5l ^= r[2], this.v5h ^= r[3];
    }
    if (t.personalization) {
      const r = lr(Cn(t.personalization));
      this.v6l ^= r[0], this.v6h ^= r[1], this.v7l ^= r[2], this.v7h ^= r[3];
    }
    if (t.key) {
      const r = new Uint8Array(this.blockLen);
      r.set(Cn(t.key)), this.update(r);
    }
  }
  get() {
    let { v0l: t, v0h: n, v1l: r, v1h: o, v2l: s, v2h: h, v3l: f, v3h: g, v4l: p, v4h: M, v5l: m, v5h: j, v6l: C, v6h: O, v7l: w, v7h: P } = this;
    return [t, n, r, o, s, h, f, g, p, M, m, j, C, O, w, P];
  }
  set(t, n, r, o, s, h, f, g, p, M, m, j, C, O, w, P) {
    this.v0l = t | 0, this.v0h = n | 0, this.v1l = r | 0, this.v1h = o | 0, this.v2l = s | 0, this.v2h = h | 0, this.v3l = f | 0, this.v3h = g | 0, this.v4l = p | 0, this.v4h = M | 0, this.v5l = m | 0, this.v5h = j | 0, this.v6l = C | 0, this.v6h = O | 0, this.v7l = w | 0, this.v7h = P | 0;
  }
  compress(t, n, r) {
    this.get().forEach((g, p) => _[p] = g), _.set(ze, 16);
    let { h: o, l: s } = Ve.fromBig(BigInt(this.length));
    _[24] = ze[8] ^ s, _[25] = ze[9] ^ o, r && (_[28] = ~_[28], _[29] = ~_[29]);
    let h = 0;
    const f = kc;
    for (let g = 0; g < 12; g++)
      It(0, 4, 8, 12, t, n + 2 * f[h++]), wt(0, 4, 8, 12, t, n + 2 * f[h++]), It(1, 5, 9, 13, t, n + 2 * f[h++]), wt(1, 5, 9, 13, t, n + 2 * f[h++]), It(2, 6, 10, 14, t, n + 2 * f[h++]), wt(2, 6, 10, 14, t, n + 2 * f[h++]), It(3, 7, 11, 15, t, n + 2 * f[h++]), wt(3, 7, 11, 15, t, n + 2 * f[h++]), It(0, 5, 10, 15, t, n + 2 * f[h++]), wt(0, 5, 10, 15, t, n + 2 * f[h++]), It(1, 6, 11, 12, t, n + 2 * f[h++]), wt(1, 6, 11, 12, t, n + 2 * f[h++]), It(2, 7, 8, 13, t, n + 2 * f[h++]), wt(2, 7, 8, 13, t, n + 2 * f[h++]), It(3, 4, 9, 14, t, n + 2 * f[h++]), wt(3, 4, 9, 14, t, n + 2 * f[h++]);
    this.v0l ^= _[0] ^ _[16], this.v0h ^= _[1] ^ _[17], this.v1l ^= _[2] ^ _[18], this.v1h ^= _[3] ^ _[19], this.v2l ^= _[4] ^ _[20], this.v2h ^= _[5] ^ _[21], this.v3l ^= _[6] ^ _[22], this.v3h ^= _[7] ^ _[23], this.v4l ^= _[8] ^ _[24], this.v4h ^= _[9] ^ _[25], this.v5l ^= _[10] ^ _[26], this.v5h ^= _[11] ^ _[27], this.v6l ^= _[12] ^ _[28], this.v6h ^= _[13] ^ _[29], this.v7l ^= _[14] ^ _[30], this.v7h ^= _[15] ^ _[31], _.fill(0);
  }
  destroy() {
    this.destroyed = !0, this.buffer32.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const uu = Uc((e) => new cu(e));
function lu(e) {
  const t = _o(e.signature), n = Uo(
    ko.PersonalMessage,
    Qo(e.messageBytes)
  );
  return wo.exports.sign.detached.verify(
    uu(n, { dkLen: 32 }),
    t.signature,
    t.pubKey.toBytes()
  );
}
function fu(e) {
  const t = On();
  return e ? ct(() => t.chains.find((n) => n.id === e), [e, t.chains]) : t.chain;
}
function hu(e) {
  const t = On(), {
    address: n = t.address,
    typeArg: r = Bi,
    chainId: o = t.chain?.id
  } = e || {}, s = fu(o), h = vc(mo.COIN_BALANCE, {
    address: n,
    typeArg: r,
    chainId: o
  }), f = Ge(() => {
    if (!n || !s)
      return BigInt(0);
    const g = new mc(s.rpcUrl);
    return new bc(g, n).balance.get(r);
  }, [s, n]);
  return uc(h, f, {
    initialData: BigInt(0)
  });
}
function du(e) {
  const {
    typeArg: t,
    chainId: n
  } = e || {}, r = hu({
    typeArg: t,
    chainId: n
  });
  return Object.assign(r, {
    balance: r.data,
    loading: r.isLoading
  });
}
function kf(e) {
  return ct(() => new Yi(new Zi({ fullnode: e })), [e]);
}
function ut(e) {
  return Array.isArray(e) && e.length > 0;
}
function ji(e) {
  return "standard:connect" in e.features && "standard:events" in e.features && "sui:signAndExecuteTransactionBlock" in e.features;
}
const yu = (e) => {
  const {
    icon: t,
    alt: n = "icon"
  } = e;
  return /* @__PURE__ */ F("div", {
    onClick: e.onClick,
    className: e.className,
    style: e.style,
    children: typeof t == "string" ? /* @__PURE__ */ F("img", {
      src: t,
      alt: n,
      className: e.elClassName,
      style: e.elStyle
    }) : Xe.cloneElement(t)
  });
};
const vu = () => /* @__PURE__ */ xe("div", {
  className: "wkit-dialog__header",
  children: [/* @__PURE__ */ F(jn, {
    className: "wkit-dialog__title",
    children: "Connect Wallet"
  }), /* @__PURE__ */ F(Es, {
    style: {
      position: "absolute",
      right: "16px",
      top: "16px"
    },
    className: "wkit-dialog__close",
    children: /* @__PURE__ */ F(Cs, {})
  })]
}), gu = () => /* @__PURE__ */ xe("div", {
  className: "wkit-new-to-sui",
  children: [/* @__PURE__ */ F("span", {
    className: "wkit-new-to-sui__text",
    children: "New to sui? "
  }), /* @__PURE__ */ F("a", {
    className: "wkit-new-to-sui__link",
    href: "https://suiet.app/docs/getting-started",
    target: "_blank",
    children: "Learn More Here"
  })]
}), pu = (e) => {
  const {
    wallet: t
  } = e, [n, r] = $e("");
  return ke(() => {
    !t.iconUrl || r(t.iconUrl);
  }, [t.iconUrl]), /* @__PURE__ */ xe("div", {
    className: "wkit-select-item",
    onClick: () => {
      e.onSelect?.(t);
    },
    children: [/* @__PURE__ */ F(yu, {
      icon: n,
      className: "wkit-select-item__icon",
      elClassName: "wkit-select-item__icon"
    }), t.label ?? t.name]
  }, t.name);
}, Li = (e) => ut(e.wallets) ? /* @__PURE__ */ xe("div", {
  className: "wkit-select__container",
  children: [/* @__PURE__ */ F("div", {
    className: "wkit-select__title",
    children: e.title
  }), ut(e.wallets) && e.wallets.map((t) => /* @__PURE__ */ F(pu, {
    wallet: t,
    onSelect: e.onSelect
  }, t.name))]
}) : null, Mu = (e) => {
  const {
    wallet: t
  } = e;
  return /* @__PURE__ */ xe("section", {
    children: [/* @__PURE__ */ xe("div", {
      className: "wkit-dialog__header",
      children: [/* @__PURE__ */ F(jn, {
        className: "wkit-dialog__title",
        style: {
          margin: "-8px 12px -6px -8px"
        },
        children: /* @__PURE__ */ F("span", {
          className: "wkit-dialog__close",
          onClick: e.onNavBack,
          children: /* @__PURE__ */ F(co, {})
        })
      }), /* @__PURE__ */ F(jn, {
        className: "wkit-dialog__title",
        children: "Install Wallet"
      })]
    }), /* @__PURE__ */ xe("div", {
      className: "wkit-install",
      children: [/* @__PURE__ */ F("img", {
        className: "wkit-install__logo",
        src: t.iconUrl,
        alt: `${t.name} logo`
      }), /* @__PURE__ */ F("h1", {
        className: "wkit-install__title",
        children: "You haven\u2019t install this wallet"
      }), /* @__PURE__ */ F("p", {
        className: "wkit-install__description",
        children: "Install wallet via Chrome Extension Store"
      }), /* @__PURE__ */ F("button", {
        className: "wkit-button wkit-install__button",
        onClick: () => {
          if (!t.downloadUrl?.browserExtension)
            throw new Ke(`no downloadUrl config on this wallet: ${t.name}`);
          window.open(t.downloadUrl.browserExtension, "_blank");
        },
        children: "Get Wallet"
      })]
    })]
  });
}, bu = (e) => {
  const {
    wallet: t
  } = e;
  return /* @__PURE__ */ xe("section", {
    children: [/* @__PURE__ */ xe("div", {
      className: "wkit-dialog__header",
      children: [/* @__PURE__ */ F(jn, {
        className: "wkit-dialog__title",
        style: {
          margin: "-6px 12px -6px -8px"
        },
        children: /* @__PURE__ */ F("span", {
          className: "wkit-dialog__close",
          onClick: e.onNavBack,
          children: /* @__PURE__ */ F(co, {})
        })
      }), /* @__PURE__ */ F(jn, {
        className: "wkit-dialog__title",
        children: "Connecting"
      })]
    }), /* @__PURE__ */ xe("div", {
      className: "wkit-connecting",
      children: [/* @__PURE__ */ F("img", {
        className: "wkit-connecting__logo",
        src: t.iconUrl,
        alt: `logo of ${t.name}`
      }), /* @__PURE__ */ xe("h1", {
        className: "wkit-connecting__title",
        children: ["Opening ", t.name]
      }), /* @__PURE__ */ F("p", {
        className: "wkit-connecting__description",
        children: "Confirm connection in the extension"
      })]
    })]
  });
}, mu = (e) => {
  const {
    configuredWallets: t,
    detectedWallets: n,
    select: r,
    connecting: o
  } = On(), {
    onConnectSuccess: s = () => {
    },
    onConnectError: h = (m) => {
      throw m;
    }
  } = e, [f, g] = $e(), p = Ge(async (m) => {
    if (g(m), m.installed) {
      try {
        await r(m.name);
      } catch (j) {
        h(j);
        return;
      }
      s(m.name);
    }
  }, [r]);
  function M() {
    if (f) {
      if (!f.installed)
        return /* @__PURE__ */ F(Mu, {
          wallet: f,
          onNavBack: () => {
            g(void 0);
          }
        });
      if (o)
        return /* @__PURE__ */ F(bu, {
          wallet: f,
          onNavBack: () => {
            g(void 0);
          }
        });
    }
    return /* @__PURE__ */ xe("div", {
      children: [/* @__PURE__ */ F(vu, {}), /* @__PURE__ */ xe("div", {
        className: "wkit-select__scroll",
        children: [/* @__PURE__ */ F(Li, {
          title: "Popular",
          wallets: t,
          onSelect: p
        }), /* @__PURE__ */ F(Li, {
          title: "Others",
          wallets: n,
          onSelect: p
        })]
      }), /* @__PURE__ */ F("div", {
        style: {
          height: "41px",
          flexShrink: "0"
        }
      }), /* @__PURE__ */ F(gu, {})]
    });
  }
  return /* @__PURE__ */ F(Ds, {
    open: e.open,
    onOpenChange: e.onOpenChange,
    trigger: e.children,
    contentProps: {
      onOpenAutoFocus: (m) => {
        m.preventDefault();
      }
    },
    children: M()
  });
};
function Au(e) {
  const {
    disconnect: t,
    account: n,
    chain: r,
    connected: o,
    name: s
  } = On(), {
    balance: h
  } = du(), [f, g] = $e(!1), p = Ge(() => !r || r.id === Xn.id ? /* @__PURE__ */ F(rr, {
    children: "Unknown Chain"
  }) : /* @__PURE__ */ xe(rr, {
    children: [Nc(h ?? 0), " SUI"]
  }), [h, r]);
  return o ? /* @__PURE__ */ xe("div", {
    className: tr("wkit-connected-container"),
    children: [/* @__PURE__ */ xe("button", {
      className: tr("wkit-connected-button"),
      onClick: () => {
        g(!f);
      },
      children: [/* @__PURE__ */ F("span", {
        className: "wkit-connected-button__balance",
        children: p()
      }), /* @__PURE__ */ F("div", {
        className: "wkit-connected-button__divider"
      }), /* @__PURE__ */ xe("div", {
        className: "wkit-address-select",
        children: [/* @__PURE__ */ F("span", {
          className: "wkit-address-select__address",
          children: Ec(n?.address)
        }), /* @__PURE__ */ F("span", {
          className: "wkit-address-select__right-arrow",
          children: /* @__PURE__ */ F(Ts, {})
        })]
      })]
    }), f && /* @__PURE__ */ F("div", {
      className: "wkit-disconnect-button__container",
      children: /* @__PURE__ */ F("button", {
        className: "wkit-disconnect-button",
        onClick: async () => {
          g(!1);
          try {
            await t();
          } catch (M) {
            e?.onDisconnectError?.(M);
            return;
          }
          e?.onDisconnectSuccess?.(s);
        },
        children: "Disconnect"
      })
    })]
  }) : null;
}
const Qf = (e) => {
  const {
    label: t = "Connect Button"
  } = e, [n, r] = $e(!1), {
    connected: o
  } = On();
  return ke(() => {
    o && r(!1);
  }, [o]), /* @__PURE__ */ F(mu, {
    open: n,
    onOpenChange: (s) => {
      o || r(s);
    },
    onConnectSuccess: e.onConnectSuccess,
    onConnectError: e.onConnectError,
    children: /* @__PURE__ */ F("div", {
      children: o ? /* @__PURE__ */ F(Au, {
        onDisconnectSuccess: (s) => {
          r(!1), e?.onDisconnectSuccess?.(s);
        },
        onDisconnectError: e.onDisconnectError
      }) : /* @__PURE__ */ F("button", {
        className: tr("wkit-button", e.className),
        style: e.style,
        children: e.children || t
      })
    })
  });
};
function it(e) {
  return Object.freeze(e);
}
var Et = /* @__PURE__ */ ((e) => (e.SUI_WALLET = "Sui Wallet", e.SUIET_WALLET = "Suiet", e.ETHOS_WALLET = "Ethos Wallet", e.SURF_WALLET = "Surf Wallet", e.GLASS_WALLET = "GlassWallet", e.MORPHIS_WALLET = "Morphis Wallet", e.MARTIAN_WALLET = "Martian Sui Wallet", e.ONEKEY_WALLET = "OneKey Wallet", e.SPACECY_WALLET = "Spacecy Sui Wallet", e.NIGHTLY_WALLET = "Nightly", e.ELLI_WALLET = "Elli", e.TOKENPOCKET_WALLET = "TokenPocket Wallet", e))(Et || {});
const Nu = it({
  name: "Suiet",
  label: "Suiet Wallet",
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xNzA4XzI4Mjk3KSIvPjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RfMTcwOF8yODI5NykiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yMi44IDIwYy0xLjQgMC0yLjctMS40LTMuMy0yLjMtLjcuOS0yIDIuMy0zLjQgMi4zcy0yLjctMS40LTMuNC0yLjNjLS42LjktMS45IDIuMy0zLjMgMi4zLS4zIDAtLjUtLjItLjUtLjVzLjItLjUuNS0uNWMxLjEgMCAyLjYtMS45IDIuOS0yLjVsLjUtLjJjLjIgMCAuMyAwIC40LjIuNC42IDEuOCAyLjUgMi45IDIuNSAxLjEgMCAyLjUtMS45IDIuOS0yLjVsLjQtLjJjLjIgMCAuNCAwIC41LjIuNC42IDEuOCAyLjUgMi45IDIuNS4yIDAgLjUuMi41LjVzLS4yLjUtLjUuNXoiLz48cGF0aCBkPSJNMjIuOCAyMy4zYy0xLjQgMC0yLjctMS4zLTMuMy0yLjMtLjcgMS0yIDIuMy0zLjQgMi4zUzEzLjQgMjIgMTIuNyAyMWMtLjYgMS0xLjkgMi4zLTMuMyAyLjMtLjMgMC0uNS0uMy0uNS0uNSAwLS4zLjItLjYuNS0uNiAxLjEgMCAyLjYtMS44IDIuOS0yLjRsLjUtLjIuNC4yYy40LjYgMS44IDIuNCAyLjkgMi40IDEuMSAwIDIuNS0xLjggMi45LTIuNGwuNC0uMi41LjJjLjQuNiAxLjggMi40IDIuOSAyLjQuMiAwIC41LjMuNS42IDAgLjItLjIuNS0uNS41ek05LjggMTYuN2MtLjMgMC0uNS0uMi0uNS0uNEw5LjEgMTVjMC0zLjkgMy4yLTcgNy03IDMuOSAwIDcgMy4xIDcgN2wtLjEgMS4yYzAgLjMtLjMuNS0uNi41LS40LS4xLS41LS4zLS40LS43di0xYzAtMy4zLTIuNi02LTUuOS02LTMuMiAwLTUuOSAyLjctNS45IDZsLjEgMWMuMS40LS4xLjctLjQuN2gtLjF6Ii8+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF8xNzA4XzI4Mjk3IiB4PSI0LjkiIHk9IjYiIHdpZHRoPSIyMi40MzciIGhlaWdodD0iMjMuMzE5IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+PGZlT2Zmc2V0IGR5PSIyIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjE3NTY5NCAwIDAgMCAwIDAuNTc0MTQyIDAgMCAwIDAgMC45MTY2NjcgMCAwIDAgMSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzE3MDhfMjgyOTciLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMTcwOF8yODI5NyIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNzA4XzI4Mjk3IiB5MT0iNCIgeDI9IjI4Ljg4OSIgeTI9IjMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNFQTJGOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzY3QzhGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/suiet/khpkpbbcccdmmclmpigdgddabeilkdpd"
  }
}), Iu = it({
  name: "Sui Wallet",
  label: "Sui Wallet",
  iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEUAAAD////////9/f39/f3+/v7x+Pz///95wfGj1PXI5fgEMJeQAAAAB3RSTlMAECNgmNr40ET05wAAAOBJREFUeNplUksOgjAQbYw38LdloQdw5VZJDGuNiWtXdGvUFjlAtT2AVC4AekrLvKKYvoTMm5fpfGGswWCdit2cfTFNZYO49YfSYwW/t2+FS0TCTH6x/Q/wISPZwcYJSVc4uxdg1wI2Yn0QbmCXbAKin7AHtiCbq6wicvI5syK/+azowlZSoxNGc4l7IWswhqKlagtD4Kl9CAWBAmspbGHwhJK+HDMlkiaIcJ9BWWqMu64yhcbGVMU5nKoc/XC2fGs/HMbPra78+MGCwhUGSw7OEB4qOKU7Nrki/p2/8zt8ABpiv63tyiOHAAAAAElFTkSuQmCC",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
  }
}), wu = it({
  name: "Ethos Wallet",
  label: "Ethos Wallet",
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iIzZEMjhEOSIvPgo8cGF0aCBvcGFjaXR5PSIwLjgiIGQ9Ik05LjEyMTg3IDYuODU3MDZIMTkuOTU4M0MyMC40NTcxIDYuODU3MDYgMjAuODYxNCA3LjI2MTQxIDIwLjg2MTQgNy43NjAyVjE5Ljk4ODZDMjAuODYxNCAyMC40ODc0IDIwLjQ1NzEgMjAuODkxOCAxOS45NTgzIDIwLjg5MThIOS4xMjE4N0M4LjYyMzA4IDIwLjg5MTggOC4yMTg3MiAyMC40ODc0IDguMjE4NzIgMTkuOTg4NlY3Ljc2MDJDOC4yMTg3MiA3LjI2MTQxIDguNjIzMDggNi44NTcwNiA5LjEyMTg3IDYuODU3MDZaIiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl82OTlfMjY5OCkiIHN0cm9rZS13aWR0aD0iMC40NTE1NzIiLz4KPHBhdGggZD0iTTguNzEyNzQgNy40NTQ1OUwxNi4wOTQ1IDEwLjg4OTRDMTYuNDEyOSAxMS4wMzc2IDE2LjYxNjYgMTEuMzU3IDE2LjYxNjYgMTEuNzA4M1YyMy44MUMxNi42MTY2IDI0LjQ2MzUgMTUuOTQ0IDI0LjkwMDcgMTUuMzQ2OCAyNC42MzUzTDcuOTY1MDIgMjEuMzU1NkM3LjYzODgyIDIxLjIxMDcgNy40Mjg1OCAyMC44ODcyIDcuNDI4NTggMjAuNTMwM1Y4LjI3MzQzQzcuNDI4NTggNy42MTMxMSA4LjExNDA2IDcuMTc2MDIgOC43MTI3NCA3LjQ1NDU5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIzLjM3ODIgMTUuMzc2N0MyMy40MzAzIDE1LjEzMjEgMjMuNTUzOCAxNC45MDg2IDIzLjczMzIgMTQuNzM0M0MyMy45MTI1IDE0LjU2IDI0LjEzOTYgMTQuNDQzIDI0LjM4NTYgMTQuMzk3OUwyNS4wNDA0IDE0LjI3ODRMMjQuMzg1NSAxNC4xNTg4SDI0LjM4NTZDMjQuMTM5NiAxNC4xMTM3IDIzLjkxMjUgMTMuOTk2NyAyMy43MzMyIDEzLjgyMjRDMjMuNTUzOCAxMy42NDgxIDIzLjQzMDMgMTMuNDI0NiAyMy4zNzgyIDEzLjE4TDIzLjIzNDEgMTIuNTAxM0wyMy4wOSAxMy4xOEMyMy4wMzc5IDEzLjQyNDYgMjIuOTE0NCAxMy42NDgxIDIyLjczNTEgMTMuODIyNEMyMi41NTU4IDEzLjk5NjcgMjIuMzI4NyAxNC4xMTM4IDIyLjA4MjcgMTQuMTU4OEwyMS40Mjc4IDE0LjI3ODRMMjIuMDgyNyAxNC4zOTc5SDIyLjA4MjdDMjIuMzI4NyAxNC40NDMgMjIuNTU1NyAxNC41NiAyMi43MzUgMTQuNzM0M0MyMi45MTQ0IDE0LjkwODYgMjMuMDM3OSAxNS4xMzIxIDIzLjA5IDE1LjM3NjdMMjMuMjM0MSAxNi4wNTU0TDIzLjM3ODIgMTUuMzc2N1oiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNjk5XzI2OTgiIHgxPSIyMC44NjE0IiB5MT0iMTAuNTkyNiIgeDI9IjE0LjUzOTgiIHkyPSIxMy43NTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli"
  }
}), Eu = it({
  name: "Martian Sui Wallet",
  label: "Martian Sui Wallet",
  iconUrl: "https://cdn.martianwallet.xyz/assets/icon.png",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/martian-wallet-aptos-sui/efbglgofoippbgcjepnhiblaibcnclgk"
  }
}), Du = it({
  name: "Surf Wallet",
  label: "Surf Wallet",
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDcwIDQwMGMtMTEgOC0yMyAxNC0zNSAxNS00NyA0LTEwNi00Mi0xNDQtNDdzLTYwIDIxLTY5IDM2Yy01IDktNiAyMi02IDMzIDAgNCAwIDkgMiAxNSAyIDExIDMwIDU1IDk0IDQ5IDY5LTYgMTA5LTQzIDE1MC05Mmw2LTYgMi0zeiIgZmlsbD0iIzU4QzVGMyIvPjxwYXRoIGQ9Ik0yNTQgMzI3YzExLTYgMjItMTEgMzMtMTEgNDIgMCA5MiA0NiAxMjUgNTMgMzQgNyA1Ni0xNSA2NC0yNyA3LTEyIDgtMjMgOC0zMWwtMS0xMmMtMi03LTIyLTUwLTc5LTUwLTYzIDAtMTAyIDMwLTE0MiA3MGwtNSA1LTMgM3oiIGZpbGw9IiM5REUyRkYiLz48cGF0aCBkPSJNMzMgMjk2djJjMCA1OCA0NyAxMDMgMTA0IDEwMyAyNCAwIDQ1LTcgNjMtMjFsMS0xIDEtMSAxLTF2LTFsMTEtMTAgNDAtMzkgMy0yIDUtNmM0MC00MCA3OS03MCAxNDEtNzAgNTggMCA3NyA0MyA4MCA1MS01LTk5LTc1LTE4MS0xNjgtMjA2bC0zLTFjLTEwLTItMzYtMTItMzYtMjdWMThzMi0xMy0xMi00Yy0zNiAyNC02NyA3Ni05NSA5MS02OSAzMC0xMjAgOTAtMTM0IDE2NmwtMiAxOXY2eiIgZmlsbD0iIzU4QzVGMyIvPjxwYXRoIGQ9Ik0yNTUgMjcxbC00MyAzNi00NCAzOGMtNiA2LTE1IDQtMTgtN3MzLTUyIDM0LTcyIDYyLTIwIDc0LTEzYzkgNyA2IDExIDQgMTNsLTcgNXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/surf-sui-wallet/emeeapjkbcbpbpgaagfchmcgglmebnen"
  }
}), Cu = it({
  name: "GlassWallet",
  label: "Glass Wallet",
  iconUrl: "data:image/png;base64,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",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/glass-wallet-sui-wallet/loinekcabhlmhjjbocijdoimmejangoa"
  }
}), Tu = it({
  name: "Morphis Wallet",
  label: "Morphis Wallet",
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xOS45NCA3LjRsLS4wMS0uMDhWNy4zYy0uMDEtLjAyLS4wMS0uMDQtLjAzLS4wNSAwLS4wMy0uMDItLjA1LS4wMy0uMDdsLS4wMS0uMDEtLjA2LS4wNS0uMDQtLjAyLTUuMDUtMy4wNWgtLjAxbC0uMDMtLjAxLS4wNC0uMDEtLjAzLS4wMi0uMDQtLjAxaC0uMDdsLS4wNC4wMS0uMDQuMDItLjAzLjAxLS4wNC4wMWgtLjAxTDkuMjkgNy4xIDQuMiAxMC4xM2wtLjA2LjAzLS4wMS4wMi0uMDUuMDUtLjAzLjA1LS4wMS4wMS0uMDMuMDYtLjAxLjA3djYuMTJjMCAuMTYuMDcuMjkuMi4zNmw1LjA1IDMuMDVjLjA1LjA0LjEzLjA1LjIuMDUuMDggMCAuMTQtLjAxLjIxLS4wNS4xMi0uMDguMi0uMjEuMi0uMzd2LTUuMzdsNC40NiAyLjY5Yy4wNi4wMy4xMy4wNC4yLjA0LjA4IDAgLjEzLS4wMS4yMS0uMDQuMTItLjA4LjItLjIyLjItLjM3di01LjM3bDQuNDYgMi42OGMuMDYuMDMuMTMuMDUuMjEuMDUuMDYgMCAuMTItLjAyLjItLjA1LjEyLS4wOC4yLS4yMi4yLS4zN1Y3LjM4Yy0uMDYuMDUtLjA2LjAyLS4wNi4wMnptLTEwLjUgNS42NEw1LjIgMTAuNDhsNC4yNC0yLjU3IDQuMjYgMi41Ny00LjI2IDIuNTZ6TTE0LjUgMTBsLTQuMjUtMi41NyA0LjI1LTIuNTYgNC4yNSAyLjU2TDE0LjUgMTB6bS01LjQ2IDguOUw0LjggMTYuMzNWMTEuMmw0LjI0IDIuNTZ2NS4xNHptMS4yMS01LjM3bDMuODUtMi4zM3Y0LjY1bC0zLjg1LTIuMzJ6bTUuMDUtMy4wM2wzLjg1LTIuMzR2NC42NGwtMy44NS0yLjN6IiBmaWxsPSIjMDAwIi8+PC9zdmc+",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/morphis-wallet/heefohaffomkkkphnlpohglngmbcclhi"
  }
}), ju = it({
  name: "OneKey Wallet",
  label: "OneKey Wallet",
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80NTkyMl84OCkiPgo8cGF0aCBkPSJNMTI3LjYxIDYzLjgwNDlDMTI3LjYxIDEwNy44NTMgMTA3Ljg1MyAxMjcuNjEgNjMuODA0OSAxMjcuNjFDMTkuNzU2OCAxMjcuNjEgMCAxMDcuODUzIDAgNjMuODA0OUMwIDE5Ljc1NjggMTkuNzU2OCAwIDYzLjgwNDkgMEMxMDcuODUzIDAgMTI3LjYxIDE5Ljc1NjggMTI3LjYxIDYzLjgwNDlaIiBmaWxsPSIjM0JEMjNEIi8+CjxwYXRoIGQ9Ik02OS41Njk5IDI3LjA1NTdMNTEuODE5NyAyNy4wNTU3TDQ4LjcwNTYgMzYuNDcxOUg1OC41NjQ1TDU4LjU2NDUgNTYuMzA2M0g2OS41Njk5VjI3LjA1NTdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTg0LjA0ODYgODAuMzExMUM4NC4wNDg2IDkxLjQ5MTIgNzQuOTg1NCAxMDAuNTU0IDYzLjgwNTMgMTAwLjU1NEM1Mi42MjUzIDEwMC41NTQgNDMuNTYyMSA5MS40OTEyIDQzLjU2MjEgODAuMzExMUM0My41NjIxIDY5LjEzMTEgNTIuNjI1MyA2MC4wNjc4IDYzLjgwNTMgNjAuMDY3OEM3NC45ODU0IDYwLjA2NzggODQuMDQ4NiA2OS4xMzExIDg0LjA0ODYgODAuMzExMVpNNzQuODU4NCA4MC4zMTExQzc0Ljg1ODQgODYuNDE1NSA2OS45MDk3IDkxLjM2NDEgNjMuODA1MyA5MS4zNjQxQzU3LjcwMDggOTEuMzY0MSA1Mi43NTIyIDg2LjQxNTUgNTIuNzUyMiA4MC4zMTExQzUyLjc1MjIgNzQuMjA2NiA1Ny43MDA4IDY5LjI1OCA2My44MDUzIDY5LjI1OEM2OS45MDk3IDY5LjI1OCA3NC44NTg0IDc0LjIwNjYgNzQuODU4NCA4MC4zMTExWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80NTkyMl84OCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/onekey/jnmbobjmhlngoefaiojfljckilhhlhcj"
  }
}), Lu = it({
  name: "Spacecy Sui Wallet",
  label: "Spacecy Sui Wallet",
  iconUrl: "https://spacecywallet.com/favicon.ico",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/spacecy-wallet/mkchoaaiifodcflmbaphdgeidocajadp?hl=en-US"
  }
}), Su = it({
  name: "Nightly",
  label: "Nightly",
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjM5MDYyNSAxMDBDMC4zOTA2MjUgNDQuNzcxNSA0NS4xNjIyIDAgMTAwLjM5MSAwQzE1NS42MTkgMCAyMDAuMzkxIDQ0Ljc3MTUgMjAwLjM5MSAxMDBDMjAwLjM5MSAxNTUuMjI4IDE1NS42MTkgMjAwIDEwMC4zOTEgMjAwQzQ1LjE2MjIgMjAwIDAuMzkwNjI1IDE1NS4yMjggMC4zOTA2MjUgMTAwWiIgZmlsbD0iIzYwNjdGOSIvPgo8cGF0aCBkPSJNMTQ2LjgzOCA0MEMxMzguMDU0IDUyLjI2MDcgMTI3LjA2MSA2MC43NjM0IDExNC4wNzIgNjYuNDQ3NEMxMDkuNTYzIDY1LjIwMjYgMTA0LjkzNiA2NC41Njg0IDEwMC4zNzkgNjQuNjE1NEM5NS44MjIzIDY0LjU2ODQgOTEuMTk1MSA2NS4yMjYxIDg2LjY4NTUgNjYuNDQ3NEM3My42OTY2IDYwLjczOTkgNjIuNzA0MiA1Mi4yODQyIDUzLjkxOTggNDBDNTEuMjY1NiA0Ni42NzA2IDQxLjA0ODMgNjkuNjg4OCA1My4zMDkxIDEwMS44NjdDNTMuMzA5MSAxMDEuODY3IDQ5LjM4NjYgMTE4LjY2MSA1Ni41OTc0IDEzMy4wODNDNTYuNTk3NCAxMzMuMDgzIDY3LjAyNiAxMjguMzYyIDc1LjMxNzMgMTM1LjAwOUM4My45ODQzIDE0Mi4wMzIgODEuMjEyOCAxNDguNzk2IDg3LjMxOTYgMTU0LjYyMUM5Mi41ODA5IDE2MCAxMDAuNDAyIDE2MCAxMDAuNDAyIDE2MEMxMDAuNDAyIDE2MCAxMDguMjI0IDE2MCAxMTMuNDg1IDE1NC42NDVDMTE5LjU5MiAxNDguODQzIDExNi44NDQgMTQyLjA3OSAxMjUuNDg4IDEzNS4wMzJDMTMzLjc1NSAxMjguMzg1IDE0NC4yMDcgMTMzLjEwNiAxNDQuMjA3IDEzMy4xMDZDMTUxLjM5NSAxMTguNjg1IDE0Ny40OTYgMTAxLjg5MSAxNDcuNDk2IDEwMS44OTFDMTU5LjcxIDY5LjY4ODggMTQ5LjUxNiA0Ni42NzA2IDE0Ni44MzggNDBaTTU5LjgzODcgOTcuNDI4MUM1My4xNjgxIDgzLjczNDYgNTEuMzM2MSA2NC45NDQyIDU1LjU0MDQgNTAuMDk5OEM2MS4xMDcxIDY0LjE5MjYgNjguNjcwMiA3MC41MTA5IDc3LjY2NjEgNzcuMTgxNEM3My44NjEgODUuMDk2OSA2Ni42OTcyIDkyLjU2NjEgNTkuODM4NyA5Ny40MjgxWk03OS4wMjg0IDEyMS41NUM3My43NjcxIDExOS4yMjUgNzIuNjYzMSAxMTQuNjQ1IDcyLjY2MzEgMTE0LjY0NUM3OS44MjcgMTEwLjEzNSA5MC4zNzMxIDExMy41ODggOTAuNzAxOSAxMjQuMjUxQzg1LjE1ODcgMTIwLjg5MyA4My4zMDMyIDEyMy40MDYgNzkuMDI4NCAxMjEuNTVaTTEwMC4zNzkgMTU5LjQxM0M5Ni42MjA5IDE1OS40MTMgOTMuNTY3NCAxNTYuNzEyIDkzLjU2NzQgMTUzLjRDOTMuNTY3NCAxNTAuMDg4IDk2LjYyMDkgMTQ3LjM4NyAxMDAuMzc5IDE0Ny4zODdDMTA0LjEzNyAxNDcuMzg3IDEwNy4xOSAxNTAuMDg4IDEwNy4xOSAxNTMuNEMxMDcuMTkgMTU2LjczNSAxMDQuMTM3IDE1OS40MTMgMTAwLjM3OSAxNTkuNDEzWk0xMjEuNzUzIDEyMS41NUMxMTcuNDc4IDEyMy40MjkgMTE1LjY0NiAxMjAuODkzIDExMC4wNzkgMTI0LjI1MUMxMTAuNDMyIDExMy41ODggMTIwLjkzMSAxMTAuMTM1IDEyOC4xMTggMTE0LjY0NUMxMjguMTE4IDExNC42MjEgMTI2Ljk5MSAxMTkuMjI1IDEyMS43NTMgMTIxLjU1Wk0xNDAuOTE5IDk3LjQyODFDMTM0LjA4NCA5Mi41NjYxIDEyNi44OTcgODUuMTIwNCAxMjMuMDY4IDc3LjE4MTRDMTMyLjA2NCA3MC41MTA5IDEzOS42NTEgNjQuMTY5MSAxNDUuMTk0IDUwLjA5OThDMTQ5LjQ0NSA2NC45NDQyIDE0Ny42MTMgODMuNzU4MSAxNDAuOTE5IDk3LjQyODFaIiBmaWxsPSIjRjdGN0Y3Ii8+Cjwvc3ZnPgo=",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/nightly/fiikommddbeccaoicoejoniammnalkfa?hl=en&authuser=0"
  }
}), Ou = it({
  name: "Elli",
  label: "Elli Wallet",
  iconUrl: "data:image/png;base64,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",
  downloadUrl: {
    browserExtension: "https://chrome.google.com/webstore/detail/elli-sui-wallet/ocjdpmoallmgmjbbogfiiaofphbjgchh?utm_source=wallet-kit"
  }
}), xu = it({
  name: "TokenPocket Wallet",
  label: "TokenPocket Wallet",
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzQwOF8yMjUpIj4KPHBhdGggZD0iTTEwNDEuNTIgMEgtMjdWMTAyNEgxMDQxLjUyVjBaIiBmaWxsPSIjMjk4MEZFIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80MDhfMjI1KSI+CjxwYXRoIGQ9Ik00MDYuNzk2IDQzOC42NDNINDA2LjkyN0M0MDYuNzk2IDQzNy44NTcgNDA2Ljc5NiA0MzYuOTQgNDA2Ljc5NiA0MzYuMTU0VjQzOC42NDNaIiBmaWxsPSIjMjlBRUZGIi8+CjxwYXRoIGQ9Ik02NjcuNjAyIDQ2My41MzNINTIzLjI0OVY3MjQuMDc2QzUyMy4yNDkgNzM2LjM4OSA1MzMuMjA0IDc0Ni4zNDUgNTQ1LjUxNyA3NDYuMzQ1SDY0NS4zMzNDNjU3LjY0NyA3NDYuMzQ1IDY2Ny42MDIgNzM2LjM4OSA2NjcuNjAyIDcyNC4wNzZWNDYzLjUzM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00NTMuNTYzIDI3N0g0NDguNzE2SDE5MC4yNjlDMTc3Ljk1NSAyNzcgMTY4IDI4Ni45NTUgMTY4IDI5OS4yNjlWMzg5LjY1M0MxNjggNDAxLjk2NyAxNzcuOTU1IDQxMS45MjIgMTkwLjI2OSA0MTEuOTIySDI1MC45MThIMjc1LjAyMVY0MzguNjQ0VjcyNC43MzFDMjc1LjAyMSA3MzcuMDQ1IDI4NC45NzYgNzQ3IDI5Ny4yODkgNzQ3SDM5Mi4xMjhDNDA0LjQ0MSA3NDcgNDE0LjM5NiA3MzcuMDQ1IDQxNC4zOTYgNzI0LjczMVY0MzguNjQ0VjQzNi4xNTZWNDExLjkyMkg0MzguNDk5SDQ0OC4zMjNINDUzLjE3QzQ5MC4zNzIgNDExLjkyMiA1MjAuNjMxIDM4MS42NjMgNTIwLjYzMSAzNDQuNDYxQzUyMS4wMjQgMzA3LjI1OSA0OTAuNzY1IDI3NyA0NTMuNTYzIDI3N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02NjcuNzM1IDQ2My41MzNWNjQ1LjM1QzY3Mi43MTMgNjQ2LjUyOSA2NzcuODIxIDY0Ny40NDYgNjgzLjA2MSA2NDguMjMyQzY5MC4zOTcgNjQ5LjI4IDY5Ny45OTQgNjQ5LjkzNSA3MDUuNTkyIDY1MC4wNjZDNzA1Ljk4NSA2NTAuMDY2IDcwNi4zNzggNjUwLjA2NiA3MDYuOTAyIDY1MC4wNjZWNTA1LjQ1QzY4NS4wMjYgNTA0LjAwOSA2NjcuNzM1IDQ4NS44MDEgNjY3LjczNSA0NjMuNTMzWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzQwOF8yMjUpIi8+CjxwYXRoIGQ9Ik03MDkuNzgxIDI3N0M2MDYuODIyIDI3NyA1MjMuMjQ5IDM2MC41NzMgNTIzLjI0OSA0NjMuNTMzQzUyMy4yNDkgNTUyLjA4NCA1ODQuOTQ2IDYyNi4yMjUgNjY3LjczMyA2NDUuMzVWNDYzLjUzM0M2NjcuNzMzIDQ0MC4zNDcgNjg2LjU5NiA0MjEuNDg0IDcwOS43ODEgNDIxLjQ4NEM3MzIuOTY3IDQyMS40ODQgNzUxLjgzIDQ0MC4zNDcgNzUxLjgzIDQ2My41MzNDNzUxLjgzIDQ4My4wNTEgNzM4LjYgNDk5LjQyNSA3MjAuNTIzIDUwNC4xNEM3MTcuMTE3IDUwNS4wNTcgNzEzLjQ0OSA1MDUuNTgxIDcwOS43ODEgNTA1LjU4MVY2NTAuMDY2QzcxMy40NDkgNjUwLjA2NiA3MTYuOTg2IDY0OS45MzUgNzIwLjUyMyA2NDkuODA0QzgxOC41MDUgNjQ0LjE3MSA4OTYuMzE0IDU2Mi45NTYgODk2LjMxNCA0NjMuNTMzQzg5Ni40NDUgMzYwLjU3MyA4MTIuODcyIDI3NyA3MDkuNzgxIDI3N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03MDkuNzggNjUwLjA2NlY1MDUuNTgxQzcwOC43MzMgNTA1LjU4MSA3MDcuODE2IDUwNS41ODEgNzA2Ljc2OCA1MDUuNDVWNjUwLjA2NkM3MDcuODE2IDY1MC4wNjYgNzA4Ljg2NCA2NTAuMDY2IDcwOS43OCA2NTAuMDY2WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNDA4XzIyNSIgeDE9IjcwOS44NDQiIHkxPSI1NTYuODI3IiB4Mj0iNjY3Ljc1MyIgeTI9IjU1Ni44MjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIwLjk2NjciIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuMzIzMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuMyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQwOF8yMjUiPgo8cmVjdCB3aWR0aD0iNzI4LjQ0OCIgaGVpZ2h0PSI0NzAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjggMjc3KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",
  downloadUrl: {
    browserExtension: "https://tokenpocket.pro/"
  }
}), Ru = [
  Nu,
  Iu,
  ...[
    wu,
    Eu,
    Du,
    Tu,
    Cu,
    ju,
    Lu,
    Su,
    Ou,
    xu
  ].sort((e, t) => e.name < t.name ? -1 : 1)
];
var Pu = typeof global == "object" && global && global.Object === Object && global;
const zu = Pu;
var _u = typeof self == "object" && self && self.Object === Object && self, Uu = zu || _u || Function("return this")();
const $r = Uu;
var ku = $r.Symbol;
const cn = ku;
var Co = Object.prototype, Qu = Co.hasOwnProperty, Fu = Co.toString, wn = cn ? cn.toStringTag : void 0;
function Wu(e) {
  var t = Qu.call(e, wn), n = e[wn];
  try {
    e[wn] = void 0;
    var r = !0;
  } catch {
  }
  var o = Fu.call(e);
  return r && (t ? e[wn] = n : delete e[wn]), o;
}
var Yu = Object.prototype, Zu = Yu.toString;
function Bu(e) {
  return Zu.call(e);
}
var Gu = "[object Null]", qu = "[object Undefined]", Si = cn ? cn.toStringTag : void 0;
function ei(e) {
  return e == null ? e === void 0 ? qu : Gu : Si && Si in Object(e) ? Wu(e) : Bu(e);
}
function ti(e) {
  return e != null && typeof e == "object";
}
var Ku = "[object Symbol]";
function ni(e) {
  return typeof e == "symbol" || ti(e) && ei(e) == Ku;
}
function Vu(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Xu = Array.isArray;
const gr = Xu;
var Hu = 1 / 0, Oi = cn ? cn.prototype : void 0, xi = Oi ? Oi.toString : void 0;
function To(e) {
  if (typeof e == "string")
    return e;
  if (gr(e))
    return Vu(e, To) + "";
  if (ni(e))
    return xi ? xi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Hu ? "-0" : t;
}
function jo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ju = "[object AsyncFunction]", $u = "[object Function]", el = "[object GeneratorFunction]", tl = "[object Proxy]";
function nl(e) {
  if (!jo(e))
    return !1;
  var t = ei(e);
  return t == $u || t == el || t == Ju || t == tl;
}
var rl = $r["__core-js_shared__"];
const Or = rl;
var Ri = function() {
  var e = /[^.]+$/.exec(Or && Or.keys && Or.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function il(e) {
  return !!Ri && Ri in e;
}
var ol = Function.prototype, al = ol.toString;
function sl(e) {
  if (e != null) {
    try {
      return al.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var cl = /[\\^$.*+?()[\]{}|]/g, ul = /^\[object .+?Constructor\]$/, ll = Function.prototype, fl = Object.prototype, hl = ll.toString, dl = fl.hasOwnProperty, yl = RegExp(
  "^" + hl.call(dl).replace(cl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vl(e) {
  if (!jo(e) || il(e))
    return !1;
  var t = nl(e) ? yl : ul;
  return t.test(sl(e));
}
function gl(e, t) {
  return e?.[t];
}
function Lo(e, t) {
  var n = gl(e, t);
  return vl(n) ? n : void 0;
}
var pl = 9007199254740991, Ml = /^(?:0|[1-9]\d*)$/;
function bl(e, t) {
  var n = typeof e;
  return t = t ?? pl, !!t && (n == "number" || n != "symbol" && Ml.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ml(e, t) {
  return e === t || e !== e && t !== t;
}
var Al = 9007199254740991;
function Nl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Al;
}
var Il = "[object Arguments]";
function Pi(e) {
  return ti(e) && ei(e) == Il;
}
var So = Object.prototype, wl = So.hasOwnProperty, El = So.propertyIsEnumerable, Dl = Pi(function() {
  return arguments;
}()) ? Pi : function(e) {
  return ti(e) && wl.call(e, "callee") && !El.call(e, "callee");
};
const Cl = Dl;
var Tl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jl = /^\w*$/;
function Ll(e, t) {
  if (gr(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ni(e) ? !0 : jl.test(e) || !Tl.test(e) || t != null && e in Object(t);
}
var Sl = Lo(Object, "create");
const Sn = Sl;
function Ol() {
  this.__data__ = Sn ? Sn(null) : {}, this.size = 0;
}
function xl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Rl = "__lodash_hash_undefined__", Pl = Object.prototype, zl = Pl.hasOwnProperty;
function _l(e) {
  var t = this.__data__;
  if (Sn) {
    var n = t[e];
    return n === Rl ? void 0 : n;
  }
  return zl.call(t, e) ? t[e] : void 0;
}
var Ul = Object.prototype, kl = Ul.hasOwnProperty;
function Ql(e) {
  var t = this.__data__;
  return Sn ? t[e] !== void 0 : kl.call(t, e);
}
var Fl = "__lodash_hash_undefined__";
function Wl(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Sn && t === void 0 ? Fl : t, this;
}
function Yt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Yt.prototype.clear = Ol;
Yt.prototype.delete = xl;
Yt.prototype.get = _l;
Yt.prototype.has = Ql;
Yt.prototype.set = Wl;
function Yl() {
  this.__data__ = [], this.size = 0;
}
function pr(e, t) {
  for (var n = e.length; n--; )
    if (ml(e[n][0], t))
      return n;
  return -1;
}
var Zl = Array.prototype, Bl = Zl.splice;
function Gl(e) {
  var t = this.__data__, n = pr(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Bl.call(t, n, 1), --this.size, !0;
}
function ql(e) {
  var t = this.__data__, n = pr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Kl(e) {
  return pr(this.__data__, e) > -1;
}
function Vl(e, t) {
  var n = this.__data__, r = pr(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ln(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ln.prototype.clear = Yl;
ln.prototype.delete = Gl;
ln.prototype.get = ql;
ln.prototype.has = Kl;
ln.prototype.set = Vl;
var Xl = Lo($r, "Map");
const Hl = Xl;
function Jl() {
  this.size = 0, this.__data__ = {
    hash: new Yt(),
    map: new (Hl || ln)(),
    string: new Yt()
  };
}
function $l(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Mr(e, t) {
  var n = e.__data__;
  return $l(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ef(e) {
  var t = Mr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function tf(e) {
  return Mr(this, e).get(e);
}
function nf(e) {
  return Mr(this, e).has(e);
}
function rf(e, t) {
  var n = Mr(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Bt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Bt.prototype.clear = Jl;
Bt.prototype.delete = ef;
Bt.prototype.get = tf;
Bt.prototype.has = nf;
Bt.prototype.set = rf;
var of = "Expected a function";
function ri(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(of);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var h = e.apply(this, r);
    return n.cache = s.set(o, h) || s, h;
  };
  return n.cache = new (ri.Cache || Bt)(), n;
}
ri.Cache = Bt;
var af = 500;
function sf(e) {
  var t = ri(e, function(r) {
    return n.size === af && n.clear(), r;
  }), n = t.cache;
  return t;
}
var cf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, uf = /\\(\\)?/g, lf = sf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(cf, function(n, r, o, s) {
    t.push(o ? s.replace(uf, "$1") : r || n);
  }), t;
});
const ff = lf;
function hf(e) {
  return e == null ? "" : To(e);
}
function df(e, t) {
  return gr(e) ? e : Ll(e, t) ? [e] : ff(hf(e));
}
var yf = 1 / 0;
function vf(e) {
  if (typeof e == "string" || ni(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -yf ? "-0" : t;
}
function gf(e, t, n) {
  t = df(t, e);
  for (var r = -1, o = t.length, s = !1; ++r < o; ) {
    var h = vf(t[r]);
    if (!(s = e != null && n(e, h)))
      break;
    e = e[h];
  }
  return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && Nl(o) && bl(h, o) && (gr(e) || Cl(e)));
}
var pf = Object.prototype, Mf = pf.hasOwnProperty;
function bf(e, t) {
  return e != null && Mf.call(e, t);
}
function zi(e, t) {
  return e != null && gf(e, t, bf);
}
function mf(e, t) {
  let n = at.WALLET__CONNECT_ERROR, r = e.message;
  switch (t) {
    case Et.SUI_WALLET:
    case Et.ETHOS_WALLET:
    case Et.GLASS_WALLET:
    case Et.MORPHIS_WALLET:
      r.includes("Permission rejected") && (n = at.WALLET__CONNECT_ERROR__USER_REJECTED);
      break;
    case Et.SUIET_WALLET:
      r.includes("User rejects approval") && (n = at.WALLET__CONNECT_ERROR__USER_REJECTED);
      break;
    case Et.SPACECY_WALLET:
      n = at.WALLET__CONNECT_ERROR__USER_REJECTED;
      break;
    case Et.SURF_WALLET:
      r.includes("The user rejected the request") && (n = at.WALLET__CONNECT_ERROR__USER_REJECTED);
      break;
  }
  return {
    code: n,
    message: r,
    details: {
      wallet: t
    }
  };
}
var Af = Object.defineProperty, Nf = (e, t, n) => t in e ? Af(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, If = (e, t, n) => (Nf(e, typeof t != "symbol" ? t + "" : t, n), n), Oo = /* @__PURE__ */ ((e) => (e.STANDARD__CONNECT = "standard:connect", e.STANDARD__DISCONNECT = "standard:disconnect", e.STANDARD__EVENTS = "standard:events", e.SUI__SIGN_AND_EXECUTE_TRANSACTION_BLOCK = "sui:signAndExecuteTransactionBlock", e.SUI__SIGN_TRANSACTION_BLOCK = "sui:signTransactionBlock", e.SUI__SIGN_MESSAGE = "sui:signMessage", e))(Oo || {});
class _i {
  constructor(t) {
    If(this, "standardWalletAdapter"), this.standardWalletAdapter = t;
  }
  get name() {
    return this.standardWalletAdapter.name;
  }
  get icon() {
    return this.standardWalletAdapter.icon;
  }
  get version() {
    return this.standardWalletAdapter.version;
  }
  get accounts() {
    return this.standardWalletAdapter.accounts;
  }
  get chains() {
    return this.standardWalletAdapter.chains;
  }
  get features() {
    return this.standardWalletAdapter.features;
  }
  async connect(t) {
    const n = this.getFeature(
      "standard:connect"
    );
    try {
      return await n.connect(t);
    } catch (r) {
      const { code: o, message: s, details: h } = mf(r, this.name);
      throw new kt(s, o, h);
    }
  }
  async disconnect() {
    const t = this.getFeature(
      "standard:disconnect"
    );
    try {
      return await t.disconnect();
    } catch (n) {
      throw new kt(n.message, at.WALLET__DISCONNECT_ERROR);
    }
  }
  on(t, n) {
    const r = this.getFeature(
      "standard:events"
    );
    try {
      return r.on(t, n);
    } catch (o) {
      throw new kt(o.message, at.WALLET__LISTEN_TO_EVENT_ERROR);
    }
  }
  async signAndExecuteTransactionBlock(t) {
    const n = this.getFeature("sui:signAndExecuteTransactionBlock");
    try {
      return await n.signAndExecuteTransactionBlock(t);
    } catch (r) {
      throw new kt(r.message, at.WALLET__SIGN_TX_ERROR);
    }
  }
  signTransactionBlock(t) {
    const n = this.getFeature("sui:signTransactionBlock");
    try {
      return n.signTransactionBlock(t);
    } catch (r) {
      throw new kt(r.message, at.WALLET__SIGN_TX_ERROR);
    }
  }
  async signMessage(t) {
    const n = this.getFeature(
      "sui:signMessage"
    );
    try {
      return await n.signMessage(t);
    } catch (r) {
      throw new kt(r.message, at.WALLET__SIGN_MSG_ERROR);
    }
  }
  hasFeature(t) {
    const { features: n } = this.standardWalletAdapter;
    return zi(n, t);
  }
  getFeature(t) {
    const { features: n } = this.standardWalletAdapter;
    if (!zi(n, t))
      throw new Ss(t);
    return n[t];
  }
}
var wf = globalThis && globalThis.__classPrivateFieldSet || function(e, t, n, r, o) {
  if (r === "m")
    throw new TypeError("Private method is not writable");
  if (r === "a" && !o)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? o.call(e, n) : o ? o.value = n : t.set(e, n), n;
}, Ef = globalThis && globalThis.__classPrivateFieldGet || function(e, t, n, r) {
  if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}, Hn;
let En;
const Jn = /* @__PURE__ */ new Set(), sn = {};
function Df() {
  if (En || (En = Object.freeze({ register: Ui, get: Cf, on: Tf }), typeof window > "u"))
    return En;
  const e = Object.freeze({ register: Ui });
  try {
    window.addEventListener("wallet-standard:register-wallet", ({ detail: t }) => t(e));
  } catch (t) {
    console.error(`wallet-standard:register-wallet event listener could not be added
`, t);
  }
  try {
    window.dispatchEvent(new jf(e));
  } catch (t) {
    console.error(`wallet-standard:app-ready event could not be dispatched
`, t);
  }
  return En;
}
function Ui(...e) {
  return e = e.filter((t) => !Jn.has(t)), e.length ? (e.forEach((t) => Jn.add(t)), sn.register?.forEach((t) => ki(() => t(...e))), function() {
    e.forEach((n) => Jn.delete(n)), sn.unregister?.forEach((n) => ki(() => n(...e)));
  }) : () => {
  };
}
function Cf() {
  return [...Jn];
}
function Tf(e, t) {
  return sn[e]?.push(t) || (sn[e] = [t]), function() {
    sn[e] = sn[e]?.filter((r) => t !== r);
  };
}
function ki(e) {
  try {
    e();
  } catch (t) {
    console.error(t);
  }
}
class jf extends Event {
  constructor(t) {
    super("wallet-standard:app-ready", {
      bubbles: !1,
      cancelable: !1,
      composed: !1
    }), Hn.set(this, void 0), wf(this, Hn, t, "f");
  }
  get detail() {
    return Ef(this, Hn, "f");
  }
  get type() {
    return "wallet-standard:app-ready";
  }
  preventDefault() {
    throw new Error("preventDefault cannot be called");
  }
  stopImmediatePropagation() {
    throw new Error("stopImmediatePropagation cannot be called");
  }
  stopPropagation() {
    throw new Error("stopPropagation cannot be called");
  }
}
Hn = /* @__PURE__ */ new WeakMap();
function Lf() {
  const e = Ue(), [t, n] = $e([]);
  function r() {
    return e.current ? e.current.get().filter(ji) : [];
  }
  return ke(() => {
    e.current = Df();
    const o = r();
    ut(o) && n(
      o.map((h) => new _i(h))
    );
    const s = e.current.on("register", (...h) => {
      if (!e.current)
        return;
      const g = [...r()];
      h.filter(ji).filter((p) => !g.find((M) => M.name === p.name)).forEach((p) => {
        g.push(p);
      }), n(g.map((p) => new _i(p)));
    });
    return () => {
      s();
    };
  }, []), {
    data: t
  };
}
const Sf = (e) => {
  const { data: t } = Lf(), n = ct(() => ut(e) ? ut(t) ? e.map((s) => {
    const h = t.find((f) => s.name === f.name);
    return h ? {
      ...s,
      adapter: h,
      installed: !0
    } : {
      ...s,
      adapter: void 0,
      installed: !1
    };
  }) : e.map((s) => ({
    ...s,
    adapter: void 0,
    installed: !1
  })) : [], [e, t]), r = ct(() => ut(t) ? t.filter((s) => !e.find((h) => h.name === s.name)).map((s) => ({
    name: s.name,
    label: s.name,
    adapter: s,
    installed: !0,
    iconUrl: s.icon,
    downloadUrl: {
      browserExtension: ""
    }
  })) : [], [e, t]);
  return {
    allAvailableWallets: ct(() => [
      ...n,
      ...r
    ].filter((s) => s.installed), [n, r]),
    configuredWallets: n,
    detectedWallets: r
  };
};
class Br {
  constructor() {
    if (!window)
      throw new Error("window not found: storage should be used in browser env");
  }
  get length() {
    return window.localStorage.length;
  }
  setItem(t, n) {
    try {
      let r = JSON.stringify(n);
      return window.localStorage.setItem(t, r);
    } catch (r) {
      throw new Error("stringify data failed when setItem: " + r.message);
    }
  }
  getItem(t) {
    const n = window.localStorage.getItem(t);
    if (!n)
      return n;
    try {
      return JSON.parse(n);
    } catch (r) {
      throw new Error("parse data failed when getItem: " + r.message);
    }
  }
  removeItem(t) {
    return window.localStorage.removeItem(t);
  }
  clear() {
    return window.localStorage.clear();
  }
}
var fr = /* @__PURE__ */ ((e) => (e.LAST_CONNECT_WALLET_NAME = "WK__LAST_CONNECT_WALLET_NAME", e))(fr || {});
function Of(e, t, n, r) {
  const o = Ue(!1);
  ke(() => {
    if (!r || o.current || !ut(n) || t !== ot.DISCONNECTED)
      return;
    const h = new Br().getItem(fr.LAST_CONNECT_WALLET_NAME);
    !h || n.find((f) => f.name == h) && e(h).then(() => {
      o.current = !0;
    }).catch((f) => {
    });
  }, [n]);
}
function xf(e) {
  return e?.accounts?.[0]?.chains?.[0] ? e.accounts[0].chains[0] : "sui:unknown";
}
const Ff = (e) => {
  const {
    defaultWallets: t = Ru,
    chains: n = yc,
    autoConnect: r = !0,
    children: o
  } = e, {
    allAvailableWallets: s,
    configuredWallets: h,
    detectedWallets: f
  } = Sf(t), [g, p] = $e(), [M, m] = $e(ot.DISCONNECTED), [j, C] = $e(() => ut(n) ? n[0] : Xn), O = Ue([]), w = (te, Me) => te && Me === ot.CONNECTED, P = ct(() => {
    if (!!w(g, M))
      return g.accounts[0];
  }, [g, M]), Z = (te, Me) => {
    if (!w(te, Me))
      throw new Ke("Failed to call function, wallet not connected");
  }, q = Ge(async (te, Me) => {
    if (!te)
      throw new Ke("param adapter is missing");
    m(ot.CONNECTING);
    try {
      const me = await te.connect(Me);
      if (ut(me?.accounts)) {
        const Ne = xf(me), Se = n.find((we) => we.id === Ne);
        C(Se ?? Xn);
      }
      return p(te), m(ot.CONNECTED), new Br().setItem(fr.LAST_CONNECT_WALLET_NAME, te.name), me;
    } catch (me) {
      throw p(void 0), m(ot.DISCONNECTED), me;
    }
  }, []), V = Ge(async () => {
    Z(g, M);
    const te = g;
    ut(O.current) && (O.current.forEach((me) => {
      try {
        me();
      } catch (Ae) {
        console.error("error when clearing wallet listener", Ae.message);
      }
    }), O.current = []), new Br().removeItem(fr.LAST_CONNECT_WALLET_NAME);
    try {
      te.hasFeature(Oo.STANDARD__DISCONNECT) && await te.disconnect();
    } finally {
      p(void 0), m(ot.DISCONNECTED), C(n?.[0] ?? Xn);
    }
  }, [g, M]), he = Ge(async (te) => {
    if (w(g, M)) {
      if (te === g.name)
        return;
      await V();
    }
    const Me = s.find((me) => me.name === te);
    if (!Me) {
      const me = s.map((Ae) => Ae.name);
      throw new Ke(`select failed: wallet ${te} is not available, all wallets are listed here: [${me.join(", ")}]`);
    }
    await q(Me.adapter);
  }, [g, M, s]), fe = Ge((te, Me) => {
    Z(g, M);
    const Ae = g.on("change", (Ne) => {
      if (te === "change") {
        Me(Ne);
        return;
      }
      if (Ne.accounts && te === "accountChange") {
        Me({
          account: Ne.accounts?.[0]
        });
        return;
      }
      if (Ne.features && te === "featureChange") {
        Me({
          features: Ne.features
        });
        return;
      }
    });
    return O.current.push(Ae), Ae;
  }, [g, M]), ce = Ge(() => (Z(g, M), g.accounts), [g, M]), Le = Ge(async (te) => {
    if (Z(g, M), !P)
      throw new Ke("no active account");
    return await g.signAndExecuteTransactionBlock({
      account: P,
      chain: j.id,
      ...te
    });
  }, [g, M, j, P]), de = Ge(async (te) => {
    if (Z(g, M), !P)
      throw new Ke("no active account");
    return await g.signTransactionBlock({
      account: P,
      chain: j.id,
      ...te
    });
  }, [g, M, j, P]), Re = Ge(async (te) => {
    if (Z(g, M), !P)
      throw new Ke("no active account");
    return await g.signMessage({
      account: P,
      message: te.message
    });
  }, [g, P, M]);
  return Of(he, M, s, r), /* @__PURE__ */ F(lo.Provider, {
    value: {
      name: g?.name,
      chains: n,
      chain: j,
      allAvailableWallets: s,
      configuredWallets: h,
      detectedWallets: f,
      adapter: g,
      status: M,
      connecting: M === ot.CONNECTING,
      connected: M === ot.CONNECTED,
      select: he,
      disconnect: V,
      on: fe,
      getAccounts: ce,
      account: P,
      signAndExecuteTransactionBlock: Le,
      signMessage: Re,
      signTransactionBlock: de,
      verifySignedMessage: lu,
      address: P?.address
    },
    children: /* @__PURE__ */ F(rc, {
      client: new Hs(),
      children: o
    })
  });
};
function xo(e) {
  if (typeof e == "string") {
    console.warn(`[DEPRECATED] ${e}`);
    return;
  }
  const { name: t, message: n, migrationDoc: r } = e;
  console.warn(`[DEPRECATED] ${t} is no longer supported. ` + n + (r ? ` | Check migration doc: ${r}` : ""));
}
function Wf() {
  return xo({
    name: "getDefaultWallets",
    message: "If you want to customize wallet list, use defaultWallets instead",
    migrationDoc: "https://kit.suiet.app/docs/migration/upgradeTo0.1.0"
  }), [];
}
function Yf() {
  return xo({
    name: "getAllWallets",
    message: "If you want to customize wallet list, use defaultWallets instead",
    migrationDoc: "https://kit.suiet.app/docs/migration/upgradeTo0.1.0"
  }), [];
}
export {
  bc as Account,
  Ru as AllDefaultWallets,
  uo as BaseError,
  Qf as ConnectButton,
  mu as ConnectModal,
  ot as ConnectionStatus,
  yc as DefaultChains,
  Ou as ElliWallet,
  at as ErrorCode,
  wu as EthosWallet,
  Cu as GlassWallet,
  Ke as KitError,
  Eu as MartianWallet,
  Tu as MorphisWallet,
  Su as NightlyWallet,
  ju as OneKeyWallet,
  Et as PresetWallet,
  mc as Provider,
  Uf as SUI_SYSTEM_STATE_OBJECT_ID,
  Lu as SpacecyWallet,
  lc as SuiChainId,
  fc as SuiDevnetChain,
  dc as SuiMainnetChain,
  hc as SuiTestnetChain,
  Iu as SuiWallet,
  Nu as SuietWallet,
  Du as SurfWallet,
  xu as TokenPocketWallet,
  Xn as UnknownChain,
  lo as WalletContext,
  kt as WalletError,
  Ss as WalletNotImplementError,
  Ff as WalletProvider,
  Ec as addressEllipsis,
  it as defineWallet,
  Ao as formatCurrency,
  Nc as formatSUI,
  Yf as getAllWallets,
  Wf as getDefaultWallets,
  du as useAccountBalance,
  fu as useChain,
  hu as useCoinBalance,
  kf as useSuiProvider,
  On as useWallet,
  lu as verifySignedMessage
};
