(function() {
	//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	//#endregion
	//#region node_modules/preact/dist/preact.module.js
	var n;
	var l$1;
	var u$2;
	var i$2;
	var r$1;
	var o$1;
	var e$1;
	var f$2;
	var c$1;
	var a$1;
	var s$1;
	var h$1;
	var p$1;
	var v$1;
	var y$1;
	var d$1 = {};
	var w$2 = [];
	var _$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
	var g$2 = Array.isArray;
	function m$1(n, l) {
		for (var u in l) n[u] = l[u];
		return n;
	}
	function b(n) {
		n && n.parentNode && n.parentNode.removeChild(n);
	}
	function k$2(l, u, t) {
		var i, r, o, e = {};
		for (o in u) "key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
		if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === e[o] && (e[o] = l.defaultProps[o]);
		return x$2(l, e, i, r, null);
	}
	function x$2(n, t, i, r, o) {
		var e = {
			type: n,
			props: t,
			key: i,
			ref: r,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: null == o ? ++u$2 : o,
			__i: -1,
			__u: 0
		};
		return null == o && null != l$1.vnode && l$1.vnode(e), e;
	}
	function M$1() {
		return { current: null };
	}
	function S(n) {
		return n.children;
	}
	function C$2(n, l) {
		this.props = n, this.context = l;
	}
	function $$1(n, l) {
		if (null == l) return n.__ ? $$1(n.__, n.__i + 1) : null;
		for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
		return "function" == typeof n.type ? $$1(n) : null;
	}
	function I$1(n) {
		if (n.__P && n.__d) {
			var u = n.__v, t = u.__e, i = [], r = [], o = m$1({}, u);
			o.__v = u.__v + 1, l$1.vnode && l$1.vnode(o), q$2(n.__P, o, u, n.__n, n.__P.namespaceURI, 32 & u.__u ? [t] : null, i, null == t ? $$1(u) : t, !!(32 & u.__u), r), o.__v = u.__v, o.__.__k[o.__i] = o, D$2(i, o, r), u.__e = u.__ = null, o.__e != t && P$2(o);
		}
	}
	function P$2(n) {
		if (null != (n = n.__) && null != n.__c) return n.__e = n.__c.base = null, n.__k.some(function(l) {
			if (null != l && null != l.__e) return n.__e = n.__c.base = l.__e;
		}), P$2(n);
	}
	function A$2(n) {
		(!n.__d && (n.__d = !0) && i$2.push(n) && !H$1.__r++ || r$1 != l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)(H$1);
	}
	function H$1() {
		try {
			for (var n, l = 1; i$2.length;) i$2.length > l && i$2.sort(e$1), n = i$2.shift(), l = i$2.length, I$1(n);
		} finally {
			i$2.length = H$1.__r = 0;
		}
	}
	function L$1(n, l, u, t, i, r, o, e, f, c, a) {
		var s, h, p, v, y, _, g = t && t.__k || w$2, m = l.length;
		for (f = T$2(u, l, g, f, m), s = 0; s < m; s++) null != (p = u.__k[s]) && (h = -1 != p.__i && g[p.__i] || d$1, p.__i = s, _ = q$2(n, p, h, i, r, o, e, f, c, a), v = p.__e, p.ref && h.ref != p.ref && (h.ref && J$1(h.ref, null, p), a.push(p.ref, p.__c || v, p)), null == y && null != v && (y = v), 4 & p.__u ? (f = j$2(p, f, n), h.__e && (h.__e = null)) : "function" == typeof p.type && void 0 !== _ ? f = _ : v && (f = v.nextSibling), p.__u &= -7);
		return u.__e = y, f;
	}
	function T$2(n, l, u, t, i) {
		var r, o, e, f, c, a = u.length, s = a, h = 0;
		for (n.__k = new Array(i), r = 0; r < i; r++) null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? ("string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? o = n.__k[r] = x$2(null, o, null, null, null) : g$2(o) ? o = n.__k[r] = x$2(S, { children: o }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? o = n.__k[r] = x$2(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : n.__k[r] = o, f = r + h, o.__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = O$1(o, u, f, s)) && (s--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > a ? h-- : i < a && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
		if (s) for (r = 0; r < a; r++) null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = $$1(e)), K$1(e, e));
		return t;
	}
	function j$2(n, l, u) {
		var t, i;
		if ("function" == typeof n.type) {
			for (t = n.__k, i = 0; t && i < t.length; i++) t[i] && (t[i].__ = n, l = j$2(t[i], l, u));
			return l;
		}
		n.__e != l && (l && n.type && !l.parentNode && (l = $$1(n)), l = u.insertBefore(n.__e, l || null));
		do
			l = l && l.nextSibling;
		while (null != l && 8 == l.nodeType);
		return l;
	}
	function F$2(n, l) {
		return l = l || [], null == n || "boolean" == typeof n || (g$2(n) ? n.some(function(n) {
			F$2(n, l);
		}) : l.push(n)), l;
	}
	function O$1(n, l, u, t) {
		var i, r, o, e = n.key, f = n.type, c = l[u], a = null != c && 0 == (2 & c.__u);
		if (null === c && null == e || a && e == c.key && f == c.type) return u;
		if (t > (a ? 1 : 0)) {
			for (i = u - 1, r = u + 1; i >= 0 || r < l.length;) if (null != (c = l[o = i >= 0 ? i-- : r++]) && 0 == (2 & c.__u) && e == c.key && f == c.type) return o;
		}
		return -1;
	}
	function z$2(n, l, u) {
		"-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || _$1.test(l) ? u : u + "px";
	}
	function N$1(n, l, u, t, i) {
		var r, o;
		n: if ("style" == l) if ("string" == typeof u) n.style.cssText = u;
		else {
			if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || z$2(n.style, l, "");
			if (u) for (l in u) t && u[l] == t[l] || z$2(n.style, l, u[l]);
		}
		else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace(s$1, "$1")), o = l.toLowerCase(), l = o in n || "onFocusOut" == l || "onFocusIn" == l ? o.slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u[a$1] = t[a$1] : (u[a$1] = h$1, n.addEventListener(l, r ? v$1 : p$1, r)) : n.removeEventListener(l, r ? v$1 : p$1, r);
		else {
			if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
				n[l] = null == u ? "" : u;
				break n;
			} catch (n) {}
			"function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
		}
	}
	function V$1(n) {
		return function(u) {
			if (this.l) {
				var t = this.l[u.type + n];
				if (null == u[c$1]) u[c$1] = h$1++;
				else if (u[c$1] < t[a$1]) return;
				return t(l$1.event ? l$1.event(u) : u);
			}
		};
	}
	function q$2(n, u, t, i, r, o, e, f, c, a) {
		var s, h, p, v, y, d, _, k, x, M, I, P, A, H, T, j, F = u.type;
		if (void 0 !== u.constructor) return null;
		128 & t.__u && (c = !!(32 & t.__u), o = [f = u.__e = t.__e]), (s = l$1.__b) && s(u);
		n: if ("function" == typeof F) {
			h = e.length;
			try {
				if (x = u.props, M = F.prototype && F.prototype.render, I = (s = F.contextType) && i[s.__c], P = s ? I ? I.props.value : s.__ : i, t.__c ? k = (p = u.__c = t.__c).__ = p.__E : (M ? u.__c = p = new F(x, P) : (u.__c = p = new C$2(x, P), p.constructor = F, p.render = Q$1), I && I.sub(p), p.state || (p.state = {}), p.__n = i, v = p.__d = !0, p.__h = [], p._sb = []), M && null == p.__s && (p.__s = p.state), M && null != F.getDerivedStateFromProps && (p.__s == p.state && (p.__s = m$1({}, p.__s)), m$1(p.__s, F.getDerivedStateFromProps(x, p.__s))), y = p.props, d = p.state, p.__v = u, v) M && null == F.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), M && null != p.componentDidMount && p.__h.push(p.componentDidMount);
				else {
					if (M && null == F.getDerivedStateFromProps && x !== y && null != p.componentWillReceiveProps && p.componentWillReceiveProps(x, P), u.__v == t.__v || !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(x, p.__s, P)) {
						u.__v != t.__v && (p.props = x, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
							n && (n.__ = u);
						}), w$2.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && e.push(p), f = $$1(t);
						break n;
					}
					null != p.componentWillUpdate && p.componentWillUpdate(x, p.__s, P), M && null != p.componentDidUpdate && p.__h.push(function() {
						p.componentDidUpdate(y, d, _);
					});
				}
				if (p.context = P, p.props = x, p.__P = n, p.__e = !1, A = l$1.__r, H = 0, M) p.state = p.__s, p.__d = !1, A && A(u), s = p.render(p.props, p.state, p.context), w$2.push.apply(p.__h, p._sb), p._sb = [];
				else do
					p.__d = !1, A && A(u), s = p.render(p.props, p.state, p.context), p.state = p.__s;
				while (p.__d && ++H < 25);
				p.state = p.__s, null != p.getChildContext && (i = m$1(m$1({}, i), p.getChildContext())), M && !v && null != p.getSnapshotBeforeUpdate && (_ = p.getSnapshotBeforeUpdate(y, d)), T = null != s && s.type === S && null == s.key ? E$1(s.props.children) : s, f = L$1(n, g$2(T) ? T : [T], u, t, i, r, o, e, f, c, a), p.base = u.__e, u.__u &= -161, p.__h.length && e.push(p), k && (p.__E = p.__ = null);
			} catch (n) {
				if (e.length = h, u.__v = null, c || null != o) {
					if (n.then) {
						for (u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;) f = f.nextSibling;
						null != o && (o[o.indexOf(f)] = null), u.__e = f;
					} else if (null != o) for (j = o.length; j--;) b(o[j]);
				} else u.__e = t.__e;
				u.__k ??= t.__k || [], n.then || B$2(u), l$1.__e(n, u, t);
			}
		} else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = G$1(t.__e, u, t, i, r, o, e, c, a);
		return (s = l$1.diffed) && s(u), 128 & u.__u ? void 0 : f;
	}
	function B$2(n) {
		n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(B$2));
	}
	function D$2(n, u, t) {
		for (var i = 0; i < t.length; i++) J$1(t[i], t[++i], t[++i]);
		l$1.__c && l$1.__c(u, n), n.some(function(u) {
			try {
				n = u.__h, u.__h = [], n.some(function(n) {
					n.call(u);
				});
			} catch (n) {
				l$1.__e(n, u.__v);
			}
		});
	}
	function E$1(n) {
		return "object" != typeof n || null == n || n.__b > 0 ? n : g$2(n) ? n.map(E$1) : void 0 !== n.constructor ? null : m$1({}, n);
	}
	function G$1(u, t, i, r, o, e, f, c, a) {
		var s, h, p, v, y, w, _, m = i.props || d$1, k = t.props, x = t.type;
		if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
			for (s = 0; s < e.length; s++) if ((y = e[s]) && "setAttribute" in y == !!x && (x ? y.localName == x : 3 == y.nodeType)) {
				u = y, e[s] = null;
				break;
			}
		}
		if (null == u) {
			if (null == x) return document.createTextNode(k);
			u = document.createElementNS(o, x, k.is && k), c && (l$1.__m && l$1.__m(t, e), c = !1), e = null;
		}
		if (null == x) m === k || c && u.data == k || (u.data = k);
		else {
			if (e = "textarea" == x && null != k.defaultValue ? null : e && n.call(u.childNodes), !c && null != e) for (m = {}, s = 0; s < u.attributes.length; s++) m[(y = u.attributes[s]).name] = y.value;
			for (s in m) y = m[s], "dangerouslySetInnerHTML" == s ? p = y : "children" == s || s in k || "value" == s && "defaultValue" in k || "checked" == s && "defaultChecked" in k || N$1(u, s, null, y, o);
			for (s in k) y = k[s], "children" == s ? v = y : "dangerouslySetInnerHTML" == s ? h = y : "value" == s ? w = y : "checked" == s ? _ = y : c && "function" != typeof y || m[s] === y || N$1(u, s, y, m[s], o);
			if (h) c || p && (h.__html == p.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
			else if (p && (u.innerHTML = ""), L$1("template" == t.type ? u.content : u, g$2(v) ? v : [v], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && $$1(i, 0), c, a), null != e) for (s = e.length; s--;) b(e[s]);
			c && "textarea" != x || (s = "value", "progress" == x && null == w ? u.removeAttribute("value") : null != w && (w !== u[s] || "progress" == x && !w || "option" == x && w != m[s]) && N$1(u, s, w, m[s], o), s = "checked", null != _ && _ != u[s] && N$1(u, s, _, m[s], o));
		}
		return u;
	}
	function J$1(n, u, t) {
		try {
			if ("function" == typeof n) {
				var i = "function" == typeof n.__u;
				i && n.__u(), i && null == u || (n.__u = n(u));
			} else n.current = u;
		} catch (n) {
			l$1.__e(n, t);
		}
	}
	function K$1(n, u, t) {
		var i, r;
		if (l$1.unmount && l$1.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || J$1(i, null, u)), null != (i = n.__c)) {
			if (i.componentWillUnmount) try {
				i.componentWillUnmount();
			} catch (n) {
				l$1.__e(n, u);
			}
			i.base = i.__P = i.__n = null;
		}
		if (i = n.__k) for (r = 0; r < i.length; r++) i[r] && K$1(i[r], u, t || "function" != typeof n.type);
		t || b(n.__e), n.__c = n.__ = n.__e = void 0;
	}
	function Q$1(n, l, u) {
		return this.constructor(n, u);
	}
	function R$1(u, t, i) {
		var r, o, e, f;
		t == document && (t = document.documentElement), l$1.__ && l$1.__(u, t), o = (r = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], q$2(t, u = (!r && i || t).__k = k$2(S, null, [u]), o || d$1, d$1, t.namespaceURI, !r && i ? [i] : o ? null : t.firstChild ? n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), D$2(e, u, f), u.props.children = null;
	}
	function U$1(n, l) {
		R$1(n, l, U$1);
	}
	function W$1(l, u, t) {
		var i, r, o, e, f = m$1({}, l.props);
		for (o in l.type && l.type.defaultProps && (e = l.type.defaultProps), u) "key" == o ? i = u[o] : "ref" == o ? r = u[o] : f[o] = void 0 === u[o] && null != e ? e[o] : u[o];
		return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), x$2(l.type, f, i || l.key, r || l.ref, null);
	}
	function X$1(n) {
		function l(n) {
			var u, t;
			return this.getChildContext || (u = /* @__PURE__ */ new Set(), (t = {})[l.__c] = this, this.getChildContext = function() {
				return t;
			}, this.componentWillUnmount = function() {
				u = null;
			}, this.shouldComponentUpdate = function(n) {
				this.props.value != n.value && u.forEach(function(n) {
					n.__e = !0, A$2(n);
				});
			}, this.sub = function(n) {
				u.add(n);
				var l = n.componentWillUnmount;
				n.componentWillUnmount = function() {
					u && u.delete(n), l && l.call(n);
				};
			}), n.children;
		}
		return l.__c = "__cC" + y$1++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
			return n.children(l);
		}).contextType = l, l;
	}
	n = w$2.slice, l$1 = { __e: function(n, l, u, t) {
		for (var i, r, o; l = l.__;) if ((i = l.__c) && !i.__) try {
			if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
		} catch (l) {
			n = l;
		}
		throw n;
	} }, u$2 = 0, C$2.prototype.setState = function(n, l) {
		var u = null != this.__s && this.__s != this.state ? this.__s : this.__s = m$1({}, this.state);
		"function" == typeof n && (n = n(m$1({}, u), this.props)), n && m$1(u, n), null != n && this.__v && (l && this._sb.push(l), A$2(this));
	}, C$2.prototype.forceUpdate = function(n) {
		this.__v && (this.__e = !0, n && this.__h.push(n), A$2(this));
	}, C$2.prototype.render = S, i$2 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$1 = function(n, l) {
		return n.__v.__b - l.__v.__b;
	}, H$1.__r = 0, f$2 = Math.random().toString(8), c$1 = "__d" + f$2, a$1 = "__a" + f$2, s$1 = /(PointerCapture)$|Capture$/i, h$1 = 0, p$1 = V$1(!1), v$1 = V$1(!0), y$1 = 0;
	//#endregion
	//#region node_modules/preact/hooks/dist/hooks.module.js
	var t;
	var r;
	var u$1;
	var i$1;
	var o = 0;
	var f$1 = [];
	var c = l$1;
	var e = c.__b;
	var a = c.__r;
	var v = c.diffed;
	var l = c.__c;
	var m = c.unmount;
	var p = c.__;
	function s(n, t) {
		c.__h && c.__h(r, n, o || t), o = 0;
		var u = r.__H || (r.__H = {
			__: [],
			__h: []
		});
		return n >= u.__.length && u.__.push({}), u.__[n];
	}
	function d(n) {
		return o = 1, y(D$1, n);
	}
	function y(n, u, i) {
		var o = s(t++, 2);
		if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D$1(void 0, u), function(n) {
			var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
			t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
		}], o.__c = r, !r.__f)) {
			var f = function(n, t, r) {
				if (!o.__c.__H) return !0;
				var u = !1, i = o.__c.props !== n;
				if (o.__c.__H.__.some(function(n) {
					if (n.__N) {
						u = !0;
						var t = n.__[0];
						n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
					}
				}), c) {
					var f = c.call(this, n, t, r);
					return u ? f || i : f;
				}
				return !u || i;
			};
			r.__f = !0;
			var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
			r.componentWillUpdate = function(n, t, r) {
				if (this.__e) {
					var u = c;
					c = void 0, f(n, t, r), c = u;
				}
				e && e.call(this, n, t, r);
			}, r.shouldComponentUpdate = f;
		}
		return o.__N || o.__;
	}
	function h(n, u) {
		var i = s(t++, 3);
		!c.__s && C$1(i.__H, u) && (i.__ = n, i.u = u, r.__H.__h.push(i));
	}
	function _(n, u) {
		var i = s(t++, 4);
		!c.__s && C$1(i.__H, u) && (i.__ = n, i.u = u, r.__h.push(i));
	}
	function A$1(n) {
		return o = 5, T$1(function() {
			return { current: n };
		}, []);
	}
	function F$1(n, t, r) {
		o = 6, _(function() {
			if ("function" == typeof n) {
				var r = n(t());
				return function() {
					n(null), r && "function" == typeof r && r();
				};
			}
			if (n) return n.current = t(), function() {
				return n.current = null;
			};
		}, null == r ? r : r.concat(n));
	}
	function T$1(n, r) {
		var u = s(t++, 7);
		return C$1(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
	}
	function q$1(n, t) {
		return o = 8, T$1(function() {
			return n;
		}, t);
	}
	function x$1(n) {
		var u = r.context[n.__c], i = s(t++, 9);
		return i.c = n, u ? (i.__ ?? (i.__ = !0, u.sub(r)), u.props.value) : n.__;
	}
	function P$1(n, t) {
		c.useDebugValue && c.useDebugValue(t ? t(n) : n);
	}
	function g$1() {
		var n = s(t++, 11);
		if (!n.__) {
			for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
			var i = u.__m || (u.__m = [0, 0]);
			n.__ = "P" + i[0] + "-" + i[1]++;
		}
		return n.__;
	}
	function j$1() {
		for (var n; n = f$1.shift();) {
			var t = n.__H;
			if (n.__P && t) try {
				t.__h.some(z$1), t.__h.some(B$1), t.__h = [];
			} catch (r) {
				t.__h = [], c.__e(r, n.__v);
			}
		}
	}
	c.__b = function(n) {
		r = null, e && e(n);
	}, c.__ = function(n, t) {
		n && t.__k && t.__k.__m && (n.__m = t.__k.__m), p && p(n, t);
	}, c.__r = function(n) {
		a && a(n), t = 0;
		var i = (r = n.__c).__H;
		i && (u$1 === r ? (i.__h = [], r.__h = [], i.__.some(function(n) {
			n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
		})) : (i.__h.some(z$1), i.__h.some(B$1), i.__h = [], t = 0)), u$1 = r;
	}, c.diffed = function(n) {
		v && v(n);
		var t = n.__c;
		t && t.__H && (t.__H.__h.length && (1 !== f$1.push(t) && i$1 === c.requestAnimationFrame || ((i$1 = c.requestAnimationFrame) || w$1)(j$1)), t.__H.__.some(function(n) {
			n.u && (n.__H = n.u, n.u = void 0);
		})), u$1 = r = null;
	}, c.__c = function(n, t) {
		t.some(function(n) {
			try {
				n.__h.some(z$1), n.__h = n.__h.filter(function(n) {
					return !n.__ || B$1(n);
				});
			} catch (r) {
				t.some(function(n) {
					n.__h && (n.__h = []);
				}), t = [], c.__e(r, n.__v);
			}
		}), l && l(n, t);
	}, c.unmount = function(n) {
		m && m(n);
		var t, r = n.__c;
		r && r.__H && (r.__H.__.some(function(n) {
			try {
				z$1(n);
			} catch (n) {
				t = n;
			}
		}), r.__H = void 0, t && c.__e(t, r.__v));
	};
	var k$1 = "function" == typeof requestAnimationFrame;
	function w$1(n) {
		var t, r = function() {
			clearTimeout(u), k$1 && cancelAnimationFrame(t), setTimeout(n);
		}, u = setTimeout(r, 35);
		k$1 && (t = requestAnimationFrame(r));
	}
	function z$1(n) {
		var t = r, u = n.__c;
		"function" == typeof u && (n.__c = void 0, u()), r = t;
	}
	function B$1(n) {
		var t = r;
		n.__c = n.__(), r = t;
	}
	function C$1(n, t) {
		return !n || n.length !== t.length || t.some(function(t, r) {
			return t !== n[r];
		});
	}
	function D$1(n, t) {
		return "function" == typeof t ? t(n) : t;
	}
	//#endregion
	//#region node_modules/preact/compat/dist/compat.module.js
	function g(n, t) {
		for (var e in t) n[e] = t[e];
		return n;
	}
	function E(n, t) {
		for (var e in n) if ("__source" !== e && !(e in t)) return !0;
		for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
		return !1;
	}
	function C(n, t) {
		var e = t(), r = d({ t: {
			__: e,
			u: t
		} }), u = r[0].t, o = r[1];
		return _(function() {
			u.__ = e, u.u = t, R(u) && o({ t: u });
		}, [
			n,
			e,
			t
		]), h(function() {
			return R(u) && o({ t: u }), n(function() {
				R(u) && o({ t: u });
			});
		}, [n]), e;
	}
	function R(n) {
		try {
			return !((t = n.__) === (e = n.u()) && (0 !== t || 1 / t == 1 / e) || t != t && e != e);
		} catch (n) {
			return !0;
		}
		var t, e;
	}
	function x(n) {
		n();
	}
	function w(n) {
		return n;
	}
	function k() {
		return [!1, x];
	}
	var I = _;
	function M(n, t) {
		this.props = n, this.context = t;
	}
	function N(n, e) {
		function r(n) {
			var t = this.props.ref;
			return t != n.ref && t && ("function" == typeof t ? t(null) : t.current = null), e ? !e(this.props, n) || t != n.ref : E(this.props, n);
		}
		function u(e) {
			return this.shouldComponentUpdate = r, k$2(n, e);
		}
		return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.__f = u.prototype.isReactComponent = !0, u.type = n, u;
	}
	(M.prototype = new C$2()).isPureReactComponent = !0, M.prototype.shouldComponentUpdate = function(n, t) {
		return E(this.props, n) || E(this.state, t);
	};
	var T = l$1.__b;
	l$1.__b = function(n) {
		n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T && T(n);
	};
	var A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
	function D(n) {
		function t(t) {
			var e = g({}, t);
			return delete e.ref, n(e, t.ref || null);
		}
		return t.$$typeof = A, t.render = n, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
	}
	var F = function(n, t) {
		return null == n ? null : F$2(F$2(n).map(t));
	};
	var L = {
		map: F,
		forEach: F,
		count: function(n) {
			return n ? F$2(n).length : 0;
		},
		only: function(n) {
			var t = F$2(n);
			if (1 !== t.length) throw "Children.only";
			return t[0];
		},
		toArray: F$2
	};
	var O = l$1.__e;
	l$1.__e = function(n, t, e, r) {
		if (n.then) {
			for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return t.__e ?? (t.__e = e.__e, t.__k = e.__k || []), u.__c(n, t);
		}
		O(n, t, e, r);
	};
	var U = l$1.unmount;
	function V(n, t, e) {
		return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n) {
			"function" == typeof n.__c && n.__c();
		}), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c.__e = !0, n.__c = null), n.__k = n.__k && n.__k.map(function(n) {
			return V(n, t, e);
		})), n;
	}
	function W(n, t, e) {
		return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function(n) {
			return W(n, t, e);
		}), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = e)), n;
	}
	function P() {
		this.__u = 0, this.o = null, this.__b = null;
	}
	function j(n) {
		var t = n.__ && n.__.__c;
		return t && t.__a && t.__a(n);
	}
	function z(n) {
		var e, r, u, o = null;
		function i(i) {
			if (e || (e = n()).then(function(n) {
				n && (o = n.default || n), u = !0;
			}, function(n) {
				r = n, u = !0;
			}), r) throw r;
			if (!u) throw e;
			return o ? k$2(o, i) : null;
		}
		return i.displayName = "Lazy", i.__f = !0, i;
	}
	function B() {
		this.i = null, this.l = null;
	}
	l$1.unmount = function(n) {
		var t = n.__c;
		t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), U && U(n);
	}, (P.prototype = new C$2()).__c = function(n, t) {
		var e = t.__c, r = this;
		r.o ??= [], r.o.push(e);
		var u = j(r.__v), o = !1, i = function() {
			o || r.__z || (o = !0, e.__R = null, u ? u(f) : f());
		};
		e.__R = i;
		var l = e.__P;
		e.__P = null;
		var f = function() {
			if (!--r.__u) {
				if (r.state.__a) {
					var n = r.state.__a;
					r.__v.__k[0] = W(n, n.__c.__P, n.__c.__O);
				}
				var t;
				for (r.setState({ __a: r.__b = null }); t = r.o.pop();) t.__P = l, t.forceUpdate();
			}
		};
		r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), n.then(i, i);
	}, P.prototype.componentWillUnmount = function() {
		this.o = [];
	}, P.prototype.render = function(n, e) {
		if (this.__b) {
			if (this.__v.__k) {
				var r = document.createElement("div"), o = this.__v.__k[0].__c;
				this.__v.__k[0] = V(this.__b, r, o.__O = o.__P);
			}
			this.__b = null;
		}
		var i = e.__a && k$2(S, null, n.fallback);
		return i && (i.__u &= -33), [k$2(S, null, e.__a ? null : n.children), i];
	};
	var H = function(n, t, e) {
		if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
			for (; e.length > 3;) e.pop()();
			if (e[1] < e[0]) break;
			n.i = e = e[2];
		}
	};
	function Z(n) {
		return this.getChildContext = function() {
			return n.context;
		}, n.children;
	}
	function Y(n) {
		var e = this, r = n.h;
		if (e.componentWillUnmount = function() {
			R$1(null, e.v), e.v = null, e.h = null;
		}, e.h && e.h !== r && e.componentWillUnmount(), !e.v) {
			for (var u = e.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
			e.h = r, e.v = {
				nodeType: 1,
				parentNode: r,
				childNodes: [],
				__k: { __m: u.__m },
				contains: function() {
					return !0;
				},
				namespaceURI: r.namespaceURI,
				insertBefore: function(n, t) {
					this.childNodes.push(n), e.h.insertBefore(n, t);
				},
				removeChild: function(n) {
					this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.h.removeChild(n);
				}
			};
		}
		R$1(k$2(Z, { context: e.context }, n.__v), e.v);
	}
	function $(n, e) {
		var r = k$2(Y, {
			__v: n,
			h: e
		});
		return r.containerInfo = e, r;
	}
	(B.prototype = new C$2()).__a = function(n) {
		var t = this, e = j(t.__v), r = t.l.get(n);
		return r[0]++, function(u) {
			var o = function() {
				t.props.revealOrder ? (r.push(u), H(t, n, r)) : u();
			};
			e ? e(o) : o();
		};
	}, B.prototype.render = function(n) {
		this.i = null, this.l = /* @__PURE__ */ new Map();
		var t = F$2(n.children);
		n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
		for (var e = t.length; e--;) this.l.set(t[e], this.i = [
			1,
			0,
			this.i
		]);
		return n.children;
	}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
		var n = this;
		this.l.forEach(function(t, e) {
			H(n, e, t);
		});
	};
	var q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
	var G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
	var J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
	var K = /[A-Z0-9]/g;
	var Q = "undefined" != typeof document;
	var X = function(n) {
		return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
	};
	function nn(n, t, e) {
		return t.__k ?? (t.textContent = ""), R$1(n, t), "function" == typeof e && e(), n ? n.__c : null;
	}
	function tn(n, t, e) {
		return U$1(n, t), "function" == typeof e && e(), n ? n.__c : null;
	}
	C$2.prototype.isReactComponent = !0, [
		"componentWillMount",
		"componentWillReceiveProps",
		"componentWillUpdate"
	].forEach(function(t) {
		Object.defineProperty(C$2.prototype, t, {
			configurable: !0,
			get: function() {
				return this["UNSAFE_" + t];
			},
			set: function(n) {
				Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: n
				});
			}
		});
	});
	var en = l$1.event;
	l$1.event = function(n) {
		return en && (n = en(n)), n.persist = function() {}, n.isPropagationStopped = function() {
			return this.cancelBubble;
		}, n.isDefaultPrevented = function() {
			return this.defaultPrevented;
		}, n.nativeEvent = n;
	};
	var rn;
	var un = {
		configurable: !0,
		get: function() {
			return this.class;
		}
	};
	var on = l$1.vnode;
	l$1.vnode = function(n) {
		"string" == typeof n.type && function(n) {
			var t = n.props, e = n.type, u = {}, o = -1 == e.indexOf("-");
			for (var i in t) {
				var l = t[i];
				if (!("value" === i && "defaultValue" in t && null == l || Q && "children" === i && "noscript" === e || "class" === i || "className" === i)) {
					var f = i.toLowerCase();
					"defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && !0 === l ? l = "" : "translate" === f && "no" === l ? l = !1 : "o" === f[0] && "n" === f[1] ? "ondoubleclick" === f ? i = "ondblclick" : "onchange" !== f || "input" !== e && "textarea" !== e || X(t.type) ? "onfocus" === f ? i = "onfocusin" : "onblur" === f ? i = "onfocusout" : J.test(i) && (i = f) : f = i = "oninput" : o && G.test(i) ? i = i.replace(K, "-$&").toLowerCase() : null === l && (l = void 0), "oninput" === f && u[i = f] && (i = "oninputCapture"), u[i] = l;
				}
			}
			"select" == e && (u.multiple && Array.isArray(u.value) && (u.value = F$2(t.children).forEach(function(n) {
				n.props.selected = -1 != u.value.indexOf(n.props.value);
			})), null != u.defaultValue && (u.value = F$2(t.children).forEach(function(n) {
				n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
			}))), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", un)) : t.className && (u.class = u.className = t.className), n.props = u;
		}(n), n.$$typeof = q, on && on(n);
	};
	var ln = l$1.__r;
	l$1.__r = function(n) {
		ln && ln(n), rn = n.__c;
	};
	var fn = l$1.diffed;
	l$1.diffed = function(n) {
		fn && fn(n);
		var t = n.props, e = n.__e;
		null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), rn = null;
	};
	var an = { ReactCurrentDispatcher: { current: {
		readContext: function(n) {
			return rn.__n[n.__c].props.value;
		},
		useCallback: q$1,
		useContext: x$1,
		useDebugValue: P$1,
		useDeferredValue: w,
		useEffect: h,
		useId: g$1,
		useImperativeHandle: F$1,
		useInsertionEffect: I,
		useLayoutEffect: _,
		useMemo: T$1,
		useReducer: y,
		useRef: A$1,
		useState: d,
		useSyncExternalStore: C,
		useTransition: k
	} } };
	function sn(n) {
		return k$2.bind(null, n);
	}
	function hn(n) {
		return !!n && n.$$typeof === q;
	}
	function vn(n) {
		return hn(n) && n.type === S;
	}
	function dn(n) {
		return !!n && "string" == typeof n.displayName && 0 == n.displayName.indexOf("Memo(");
	}
	function mn(n) {
		return hn(n) ? W$1.apply(null, arguments) : n;
	}
	function pn(n) {
		return !!n.__k && (R$1(null, n), !0);
	}
	function yn(n) {
		return n && (n.base || 1 === n.nodeType && n) || null;
	}
	var _n = function(n, t) {
		return n(t);
	};
	var bn = function(n, t) {
		var r, u = l$1.debounceRendering;
		l$1.debounceRendering = function(n) {
			r = n;
		};
		try {
			var o = n(t);
			return r && r(), o;
		} finally {
			l$1.debounceRendering = u;
		}
	};
	var gn = {
		useState: d,
		useId: g$1,
		useReducer: y,
		useEffect: h,
		useLayoutEffect: _,
		useInsertionEffect: I,
		useTransition: k,
		useDeferredValue: w,
		useSyncExternalStore: C,
		startTransition: x,
		useRef: A$1,
		useImperativeHandle: F$1,
		useMemo: T$1,
		useCallback: q$1,
		useContext: x$1,
		useDebugValue: P$1,
		version: "18.3.1",
		Children: L,
		render: nn,
		hydrate: tn,
		unmountComponentAtNode: pn,
		createPortal: $,
		createElement: k$2,
		createContext: X$1,
		createFactory: sn,
		cloneElement: mn,
		createRef: M$1,
		Fragment: S,
		isValidElement: hn,
		isElement: hn,
		isFragment: vn,
		isMemo: dn,
		findDOMNode: yn,
		Component: C$2,
		PureComponent: M,
		memo: N,
		forwardRef: D,
		flushSync: bn,
		unstable_batchedUpdates: _n,
		StrictMode: S,
		Suspense: P,
		SuspenseList: B,
		lazy: z,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: an
	};
	//#endregion
	//#region node_modules/preact/compat/client.mjs
	function createRoot(container) {
		return {
			render: function(children) {
				nn(children, container);
			},
			unmount: function() {
				pn(container);
			}
		};
	}
	var FFMessageType;
	(function(FFMessageType) {
		FFMessageType["LOAD"] = "LOAD";
		FFMessageType["EXEC"] = "EXEC";
		FFMessageType["FFPROBE"] = "FFPROBE";
		FFMessageType["WRITE_FILE"] = "WRITE_FILE";
		FFMessageType["READ_FILE"] = "READ_FILE";
		FFMessageType["DELETE_FILE"] = "DELETE_FILE";
		FFMessageType["RENAME"] = "RENAME";
		FFMessageType["CREATE_DIR"] = "CREATE_DIR";
		FFMessageType["LIST_DIR"] = "LIST_DIR";
		FFMessageType["DELETE_DIR"] = "DELETE_DIR";
		FFMessageType["ERROR"] = "ERROR";
		FFMessageType["DOWNLOAD"] = "DOWNLOAD";
		FFMessageType["PROGRESS"] = "PROGRESS";
		FFMessageType["LOG"] = "LOG";
		FFMessageType["MOUNT"] = "MOUNT";
		FFMessageType["UNMOUNT"] = "UNMOUNT";
	})(FFMessageType || (FFMessageType = {}));
	//#endregion
	//#region node_modules/@ffmpeg/ffmpeg/dist/esm/utils.js
	/**
	* Generate an unique message ID.
	*/
	const getMessageID = (() => {
		let messageID = 0;
		return () => messageID++;
	})();
	//#endregion
	//#region node_modules/@ffmpeg/ffmpeg/dist/esm/errors.js
	const ERROR_NOT_LOADED = /* @__PURE__ */ new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first");
	const ERROR_TERMINATED = /* @__PURE__ */ new Error("called FFmpeg.terminate()");
	//#endregion
	//#region node_modules/@ffmpeg/ffmpeg/dist/esm/classes.js
	/**
	* Provides APIs to interact with ffmpeg web worker.
	*
	* @example
	* ```ts
	* const ffmpeg = new FFmpeg();
	* ```
	*/
	var FFmpeg = class {
		#worker = null;
		/**
		* #resolves and #rejects tracks Promise resolves and rejects to
		* be called when we receive message from web worker.
		*/
		#resolves = {};
		#rejects = {};
		#logEventCallbacks = [];
		#progressEventCallbacks = [];
		loaded = false;
		/**
		* register worker message event handlers.
		*/
		#registerHandlers = () => {
			if (this.#worker) this.#worker.onmessage = ({ data: { id, type, data } }) => {
				switch (type) {
					case FFMessageType.LOAD:
						this.loaded = true;
						this.#resolves[id](data);
						break;
					case FFMessageType.MOUNT:
					case FFMessageType.UNMOUNT:
					case FFMessageType.EXEC:
					case FFMessageType.FFPROBE:
					case FFMessageType.WRITE_FILE:
					case FFMessageType.READ_FILE:
					case FFMessageType.DELETE_FILE:
					case FFMessageType.RENAME:
					case FFMessageType.CREATE_DIR:
					case FFMessageType.LIST_DIR:
					case FFMessageType.DELETE_DIR:
						this.#resolves[id](data);
						break;
					case FFMessageType.LOG:
						this.#logEventCallbacks.forEach((f) => f(data));
						break;
					case FFMessageType.PROGRESS:
						this.#progressEventCallbacks.forEach((f) => f(data));
						break;
					case FFMessageType.ERROR: this.#rejects[id](data);
				}
				delete this.#resolves[id];
				delete this.#rejects[id];
			};
		};
		/**
		* Generic function to send messages to web worker.
		*/
		#send = ({ type, data }, trans = [], signal) => {
			if (!this.#worker) return Promise.reject(ERROR_NOT_LOADED);
			return new Promise((resolve, reject) => {
				const id = getMessageID();
				this.#worker && this.#worker.postMessage({
					id,
					type,
					data
				}, trans);
				this.#resolves[id] = resolve;
				this.#rejects[id] = reject;
				signal?.addEventListener("abort", () => {
					reject(new DOMException(`Message # ${id} was aborted`, "AbortError"));
				}, { once: true });
			});
		};
		on(event, callback) {
			if (event === "log") this.#logEventCallbacks.push(callback);
			else if (event === "progress") this.#progressEventCallbacks.push(callback);
		}
		off(event, callback) {
			if (event === "log") this.#logEventCallbacks = this.#logEventCallbacks.filter((f) => f !== callback);
			else if (event === "progress") this.#progressEventCallbacks = this.#progressEventCallbacks.filter((f) => f !== callback);
		}
		/**
		* Loads ffmpeg-core inside web worker. It is required to call this method first
		* as it initializes WebAssembly and other essential variables.
		*
		* @category FFmpeg
		* @returns `true` if ffmpeg core is loaded for the first time.
		*/
		load = ({ classWorkerURL, ...config } = {}, { signal } = {}) => {
			if (!this.#worker) {
				this.#worker = classWorkerURL ? new Worker(new URL(classWorkerURL, {}.url), { type: "module" }) : new Worker(new URL("./worker.js", {}.url), { type: "module" });
				this.#registerHandlers();
			}
			return this.#send({
				type: FFMessageType.LOAD,
				data: config
			}, void 0, signal);
		};
		/**
		* Execute ffmpeg command.
		*
		* @remarks
		* To avoid common I/O issues, ["-nostdin", "-y"] are prepended to the args
		* by default.
		*
		* @example
		* ```ts
		* const ffmpeg = new FFmpeg();
		* await ffmpeg.load();
		* await ffmpeg.writeFile("video.avi", ...);
		* // ffmpeg -i video.avi video.mp4
		* await ffmpeg.exec(["-i", "video.avi", "video.mp4"]);
		* const data = ffmpeg.readFile("video.mp4");
		* ```
		*
		* @returns `0` if no error, `!= 0` if timeout (1) or error.
		* @category FFmpeg
		*/
		exec = (args, timeout = -1, { signal } = {}) => this.#send({
			type: FFMessageType.EXEC,
			data: {
				args,
				timeout
			}
		}, void 0, signal);
		/**
		* Execute ffprobe command.
		*
		* @example
		* ```ts
		* const ffmpeg = new FFmpeg();
		* await ffmpeg.load();
		* await ffmpeg.writeFile("video.avi", ...);
		* // Getting duration of a video in seconds: ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video.avi -o output.txt
		* await ffmpeg.ffprobe(["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", "video.avi", "-o", "output.txt"]);
		* const data = ffmpeg.readFile("output.txt");
		* ```
		*
		* @returns `0` if no error, `!= 0` if timeout (1) or error.
		* @category FFmpeg
		*/
		ffprobe = (args, timeout = -1, { signal } = {}) => this.#send({
			type: FFMessageType.FFPROBE,
			data: {
				args,
				timeout
			}
		}, void 0, signal);
		/**
		* Terminate all ongoing API calls and terminate web worker.
		* `FFmpeg.load()` must be called again before calling any other APIs.
		*
		* @category FFmpeg
		*/
		terminate = () => {
			const ids = Object.keys(this.#rejects);
			for (const id of ids) {
				this.#rejects[id](ERROR_TERMINATED);
				delete this.#rejects[id];
				delete this.#resolves[id];
			}
			if (this.#worker) {
				this.#worker.terminate();
				this.#worker = null;
				this.loaded = false;
			}
		};
		/**
		* Write data to ffmpeg.wasm.
		*
		* @example
		* ```ts
		* const ffmpeg = new FFmpeg();
		* await ffmpeg.load();
		* await ffmpeg.writeFile("video.avi", await fetchFile("../video.avi"));
		* await ffmpeg.writeFile("text.txt", "hello world");
		* ```
		*
		* @category File System
		*/
		writeFile = (path, data, { signal } = {}) => {
			const trans = [];
			if (data instanceof Uint8Array) trans.push(data.buffer);
			return this.#send({
				type: FFMessageType.WRITE_FILE,
				data: {
					path,
					data
				}
			}, trans, signal);
		};
		mount = (fsType, options, mountPoint) => {
			return this.#send({
				type: FFMessageType.MOUNT,
				data: {
					fsType,
					options,
					mountPoint
				}
			}, []);
		};
		unmount = (mountPoint) => {
			return this.#send({
				type: FFMessageType.UNMOUNT,
				data: { mountPoint }
			}, []);
		};
		/**
		* Read data from ffmpeg.wasm.
		*
		* @example
		* ```ts
		* const ffmpeg = new FFmpeg();
		* await ffmpeg.load();
		* const data = await ffmpeg.readFile("video.mp4");
		* ```
		*
		* @category File System
		*/
		readFile = (path, encoding = "binary", { signal } = {}) => this.#send({
			type: FFMessageType.READ_FILE,
			data: {
				path,
				encoding
			}
		}, void 0, signal);
		/**
		* Delete a file.
		*
		* @category File System
		*/
		deleteFile = (path, { signal } = {}) => this.#send({
			type: FFMessageType.DELETE_FILE,
			data: { path }
		}, void 0, signal);
		/**
		* Rename a file or directory.
		*
		* @category File System
		*/
		rename = (oldPath, newPath, { signal } = {}) => this.#send({
			type: FFMessageType.RENAME,
			data: {
				oldPath,
				newPath
			}
		}, void 0, signal);
		/**
		* Create a directory.
		*
		* @category File System
		*/
		createDir = (path, { signal } = {}) => this.#send({
			type: FFMessageType.CREATE_DIR,
			data: { path }
		}, void 0, signal);
		/**
		* List directory contents.
		*
		* @category File System
		*/
		listDir = (path, { signal } = {}) => this.#send({
			type: FFMessageType.LIST_DIR,
			data: { path }
		}, void 0, signal);
		/**
		* Delete an empty directory.
		*
		* @category File System
		*/
		deleteDir = (path, { signal } = {}) => this.#send({
			type: FFMessageType.DELETE_DIR,
			data: { path }
		}, void 0, signal);
	};
	//#endregion
	//#region node_modules/@ffmpeg/ffmpeg/dist/esm/types.js
	var FFFSType;
	(function(FFFSType) {
		FFFSType["MEMFS"] = "MEMFS";
		FFFSType["NODEFS"] = "NODEFS";
		FFFSType["NODERAWFS"] = "NODERAWFS";
		FFFSType["IDBFS"] = "IDBFS";
		FFFSType["WORKERFS"] = "WORKERFS";
		FFFSType["PROXYFS"] = "PROXYFS";
	})(FFFSType || (FFFSType = {}));
	//#endregion
	//#region node_modules/@ffmpeg/util/dist/esm/errors.js
	const ERROR_RESPONSE_BODY_READER = /* @__PURE__ */ new Error("failed to get response body reader");
	const ERROR_INCOMPLETED_DOWNLOAD = /* @__PURE__ */ new Error("failed to complete download");
	//#endregion
	//#region node_modules/@ffmpeg/util/dist/esm/index.js
	const readFromBlobOrFile = (blob) => new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.onload = () => {
			const { result } = fileReader;
			if (result instanceof ArrayBuffer) resolve(new Uint8Array(result));
			else resolve(/* @__PURE__ */ new Uint8Array());
		};
		fileReader.onerror = (event) => {
			reject(Error(`File could not be read! Code=${event?.target?.error?.code || -1}`));
		};
		fileReader.readAsArrayBuffer(blob);
	});
	/**
	* An util function to fetch data from url string, base64, URL, File or Blob format.
	*
	* Examples:
	* ```ts
	* // URL
	* await fetchFile("http://localhost:3000/video.mp4");
	* // base64
	* await fetchFile("data:<type>;base64,wL2dvYWwgbW9yZ...");
	* // URL
	* await fetchFile(new URL("video.mp4", import.meta.url));
	* // File
	* fileInput.addEventListener('change', (e) => {
	*   await fetchFile(e.target.files[0]);
	* });
	* // Blob
	* const blob = new Blob(...);
	* await fetchFile(blob);
	* ```
	*/
	const fetchFile = async (file) => {
		let data;
		if (typeof file === "string") {
			if (/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(file)) data = atob(file.split(",")[1]).split("").map((c) => c.charCodeAt(0));
			else data = await (await fetch(file)).arrayBuffer();
		} else if (file instanceof URL) data = await (await fetch(file)).arrayBuffer();
		else if (file instanceof File || file instanceof Blob) data = await readFromBlobOrFile(file);
		else return /* @__PURE__ */ new Uint8Array();
		return new Uint8Array(data);
	};
	/**
	* Download content of a URL with progress.
	*
	* Progress only works when Content-Length is provided by the server.
	*
	*/
	const downloadWithProgress = async (url, cb) => {
		const resp = await fetch(url);
		let buf;
		try {
			const total = parseInt(resp.headers.get("Content-Length") || "-1");
			const reader = resp.body?.getReader();
			if (!reader) throw ERROR_RESPONSE_BODY_READER;
			const chunks = [];
			let received = 0;
			for (;;) {
				const { done, value } = await reader.read();
				const delta = value ? value.length : 0;
				if (done) {
					if (total != -1 && total !== received) throw ERROR_INCOMPLETED_DOWNLOAD;
					cb && cb({
						url,
						total,
						received,
						delta,
						done
					});
					break;
				}
				chunks.push(value);
				received += delta;
				cb && cb({
					url,
					total,
					received,
					delta,
					done
				});
			}
			const data = new Uint8Array(received);
			let position = 0;
			for (const chunk of chunks) {
				data.set(chunk, position);
				position += chunk.length;
			}
			buf = data.buffer;
		} catch (e) {
			console.log(`failed to send download progress event: `, e);
			buf = await resp.arrayBuffer();
			cb && cb({
				url,
				total: buf.byteLength,
				received: buf.byteLength,
				delta: 0,
				done: true
			});
		}
		return buf;
	};
	/**
	* toBlobURL fetches data from an URL and return a blob URL.
	*
	* Example:
	*
	* ```ts
	* await toBlobURL("http://localhost:3000/ffmpeg.js", "text/javascript");
	* ```
	*/
	const toBlobURL = async (url, mimeType, progress = false, cb) => {
		const buf = progress ? await downloadWithProgress(url, cb) : await (await fetch(url)).arrayBuffer();
		const blob = new Blob([buf], { type: mimeType });
		return URL.createObjectURL(blob);
	};
	//#endregion
	//#region node_modules/classnames/index.js
	var require_classnames = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
		*/
		(function() {
			"use strict";
			var hasOwn = {}.hasOwnProperty;
			function classNames() {
				var classes = [];
				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;
					var argType = typeof arg;
					if (argType === "string" || argType === "number") classes.push(arg);
					else if (Array.isArray(arg)) {
						if (arg.length) {
							var inner = classNames.apply(null, arg);
							if (inner) classes.push(inner);
						}
					} else if (argType === "object") {
						if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
							classes.push(arg.toString());
							continue;
						}
						for (var key in arg) if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
					}
				}
				return classes.join(" ");
			}
			if (typeof module !== "undefined" && module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else if (typeof define === "function" && typeof define.amd === "object" && define.amd) define("classnames", [], function() {
				return classNames;
			});
			else window.classNames = classNames;
		})();
	}));
	//#endregion
	//#region node_modules/react-is/cjs/react-is.development.js
	/** @license React v16.13.1
	* react-is.development.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
		(function() {
			"use strict";
			var hasSymbol = typeof Symbol === "function" && Symbol.for;
			var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
			var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
			var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
			var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
			var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
			var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
			var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
			var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
			var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
			var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
			var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
			var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
			var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
			var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
			var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
			var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
			var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
			var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
			function isValidElementType(type) {
				return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
			}
			function typeOf(object) {
				if (typeof object === "object" && object !== null) {
					var $$typeof = object.$$typeof;
					switch ($$typeof) {
						case REACT_ELEMENT_TYPE:
							var type = object.type;
							switch (type) {
								case REACT_ASYNC_MODE_TYPE:
								case REACT_CONCURRENT_MODE_TYPE:
								case REACT_FRAGMENT_TYPE:
								case REACT_PROFILER_TYPE:
								case REACT_STRICT_MODE_TYPE:
								case REACT_SUSPENSE_TYPE: return type;
								default:
									var $$typeofType = type && type.$$typeof;
									switch ($$typeofType) {
										case REACT_CONTEXT_TYPE:
										case REACT_FORWARD_REF_TYPE:
										case REACT_LAZY_TYPE:
										case REACT_MEMO_TYPE:
										case REACT_PROVIDER_TYPE: return $$typeofType;
										default: return $$typeof;
									}
							}
						case REACT_PORTAL_TYPE: return $$typeof;
					}
				}
			}
			var AsyncMode = REACT_ASYNC_MODE_TYPE;
			var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
			var ContextConsumer = REACT_CONTEXT_TYPE;
			var ContextProvider = REACT_PROVIDER_TYPE;
			var Element = REACT_ELEMENT_TYPE;
			var ForwardRef = REACT_FORWARD_REF_TYPE;
			var Fragment = REACT_FRAGMENT_TYPE;
			var Lazy = REACT_LAZY_TYPE;
			var Memo = REACT_MEMO_TYPE;
			var Portal = REACT_PORTAL_TYPE;
			var Profiler = REACT_PROFILER_TYPE;
			var StrictMode = REACT_STRICT_MODE_TYPE;
			var Suspense = REACT_SUSPENSE_TYPE;
			var hasWarnedAboutDeprecatedIsAsyncMode = false;
			function isAsyncMode(object) {
				if (!hasWarnedAboutDeprecatedIsAsyncMode) {
					hasWarnedAboutDeprecatedIsAsyncMode = true;
					console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
				}
				return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
			}
			function isConcurrentMode(object) {
				return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
			}
			function isContextConsumer(object) {
				return typeOf(object) === REACT_CONTEXT_TYPE;
			}
			function isContextProvider(object) {
				return typeOf(object) === REACT_PROVIDER_TYPE;
			}
			function isElement(object) {
				return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			}
			function isForwardRef(object) {
				return typeOf(object) === REACT_FORWARD_REF_TYPE;
			}
			function isFragment(object) {
				return typeOf(object) === REACT_FRAGMENT_TYPE;
			}
			function isLazy(object) {
				return typeOf(object) === REACT_LAZY_TYPE;
			}
			function isMemo(object) {
				return typeOf(object) === REACT_MEMO_TYPE;
			}
			function isPortal(object) {
				return typeOf(object) === REACT_PORTAL_TYPE;
			}
			function isProfiler(object) {
				return typeOf(object) === REACT_PROFILER_TYPE;
			}
			function isStrictMode(object) {
				return typeOf(object) === REACT_STRICT_MODE_TYPE;
			}
			function isSuspense(object) {
				return typeOf(object) === REACT_SUSPENSE_TYPE;
			}
			exports.AsyncMode = AsyncMode;
			exports.ConcurrentMode = ConcurrentMode;
			exports.ContextConsumer = ContextConsumer;
			exports.ContextProvider = ContextProvider;
			exports.Element = Element;
			exports.ForwardRef = ForwardRef;
			exports.Fragment = Fragment;
			exports.Lazy = Lazy;
			exports.Memo = Memo;
			exports.Portal = Portal;
			exports.Profiler = Profiler;
			exports.StrictMode = StrictMode;
			exports.Suspense = Suspense;
			exports.isAsyncMode = isAsyncMode;
			exports.isConcurrentMode = isConcurrentMode;
			exports.isContextConsumer = isContextConsumer;
			exports.isContextProvider = isContextProvider;
			exports.isElement = isElement;
			exports.isForwardRef = isForwardRef;
			exports.isFragment = isFragment;
			exports.isLazy = isLazy;
			exports.isMemo = isMemo;
			exports.isPortal = isPortal;
			exports.isProfiler = isProfiler;
			exports.isStrictMode = isStrictMode;
			exports.isSuspense = isSuspense;
			exports.isValidElementType = isValidElementType;
			exports.typeOf = typeOf;
		})();
	}));
	//#endregion
	//#region node_modules/react-is/index.js
	var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_is_development();
	}));
	//#endregion
	//#region node_modules/object-assign/index.js
	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;
		function toObject(val) {
			if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(val);
		}
		function shouldUseNative() {
			try {
				if (!Object.assign) return false;
				var test1 = /* @__PURE__ */ new String("abc");
				test1[5] = "de";
				if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
				var test2 = {};
				for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
				if (Object.getOwnPropertyNames(test2).map(function(n) {
					return test2[n];
				}).join("") !== "0123456789") return false;
				var test3 = {};
				"abcdefghijklmnopqrst".split("").forEach(function(letter) {
					test3[letter] = letter;
				});
				if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
				return true;
			} catch (err) {
				return false;
			}
		}
		module.exports = shouldUseNative() ? Object.assign : function(target, source) {
			var from;
			var to = toObject(target);
			var symbols;
			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);
				for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
				if (getOwnPropertySymbols) {
					symbols = getOwnPropertySymbols(from);
					for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
				}
			}
			return to;
		};
	}));
	//#endregion
	//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	}));
	//#endregion
	//#region node_modules/prop-types/lib/has.js
	var require_has = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
	}));
	//#endregion
	//#region node_modules/prop-types/checkPropTypes.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_checkPropTypes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var printWarning = function() {};
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		var loggedTypeFailures = {};
		var has = require_has();
		printWarning = function(text) {
			var message = "Warning: " + text;
			if (typeof console !== "undefined") console.error(message);
			try {
				throw new Error(message);
			} catch (x) {}
		};
		/**
		* Assert that the values match with the type specs.
		* Error messages are memorized and will only be shown once.
		*
		* @param {object} typeSpecs Map of name to a ReactPropType
		* @param {object} values Runtime values that need to be type-checked
		* @param {string} location e.g. "prop", "context", "child context"
		* @param {string} componentName Name of the component for error messages.
		* @param {?Function} getStack Returns the component stack.
		* @private
		*/
		function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
			for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
				var error;
				try {
					if (typeof typeSpecs[typeSpecName] !== "function") {
						var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						err.name = "Invariant Violation";
						throw err;
					}
					error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
				} catch (ex) {
					error = ex;
				}
				if (error && !(error instanceof Error)) printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
				if (error instanceof Error && !(error.message in loggedTypeFailures)) {
					loggedTypeFailures[error.message] = true;
					var stack = getStack ? getStack() : "";
					printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
				}
			}
		}
		/**
		* Resets warning cache when testing.
		*
		* @private
		*/
		checkPropTypes.resetWarningCache = function() {
			loggedTypeFailures = {};
		};
		module.exports = checkPropTypes;
	}));
	//#endregion
	//#region node_modules/prop-types/factoryWithTypeCheckers.js
	/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_factoryWithTypeCheckers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactIs = require_react_is();
		var assign = require_object_assign();
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		var has = require_has();
		var checkPropTypes = require_checkPropTypes();
		var printWarning = function() {};
		printWarning = function(text) {
			var message = "Warning: " + text;
			if (typeof console !== "undefined") console.error(message);
			try {
				throw new Error(message);
			} catch (x) {}
		};
		function emptyFunctionThatReturnsNull() {
			return null;
		}
		module.exports = function(isValidElement, throwOnDirectAccess) {
			var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
			var FAUX_ITERATOR_SYMBOL = "@@iterator";
			/**
			* Returns the iterator method function contained on the iterable object.
			*
			* Be sure to invoke the function with the iterable as context:
			*
			*     var iteratorFn = getIteratorFn(myIterable);
			*     if (iteratorFn) {
			*       var iterator = iteratorFn.call(myIterable);
			*       ...
			*     }
			*
			* @param {?object} maybeIterable
			* @return {?function}
			*/
			function getIteratorFn(maybeIterable) {
				var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
				if (typeof iteratorFn === "function") return iteratorFn;
			}
			/**
			* Collection of methods that allow declaration and validation of props that are
			* supplied to React components. Example usage:
			*
			*   var Props = require('ReactPropTypes');
			*   var MyArticle = React.createClass({
			*     propTypes: {
			*       // An optional string prop named "description".
			*       description: Props.string,
			*
			*       // A required enum prop named "category".
			*       category: Props.oneOf(['News','Photos']).isRequired,
			*
			*       // A prop named "dialog" that requires an instance of Dialog.
			*       dialog: Props.instanceOf(Dialog).isRequired
			*     },
			*     render: function() { ... }
			*   });
			*
			* A more formal specification of how these methods are used:
			*
			*   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
			*   decl := ReactPropTypes.{type}(.isRequired)?
			*
			* Each and every declaration produces a function with the same signature. This
			* allows the creation of custom validation functions. For example:
			*
			*  var MyLink = React.createClass({
			*    propTypes: {
			*      // An optional string or URI prop named "href".
			*      href: function(props, propName, componentName) {
			*        var propValue = props[propName];
			*        if (propValue != null && typeof propValue !== 'string' &&
			*            !(propValue instanceof URI)) {
			*          return new Error(
			*            'Expected a string or an URI for ' + propName + ' in ' +
			*            componentName
			*          );
			*        }
			*      }
			*    },
			*    render: function() {...}
			*  });
			*
			* @internal
			*/
			var ANONYMOUS = "<<anonymous>>";
			var ReactPropTypes = {
				array: createPrimitiveTypeChecker("array"),
				bigint: createPrimitiveTypeChecker("bigint"),
				bool: createPrimitiveTypeChecker("boolean"),
				func: createPrimitiveTypeChecker("function"),
				number: createPrimitiveTypeChecker("number"),
				object: createPrimitiveTypeChecker("object"),
				string: createPrimitiveTypeChecker("string"),
				symbol: createPrimitiveTypeChecker("symbol"),
				any: createAnyTypeChecker(),
				arrayOf: createArrayOfTypeChecker,
				element: createElementTypeChecker(),
				elementType: createElementTypeTypeChecker(),
				instanceOf: createInstanceTypeChecker,
				node: createNodeChecker(),
				objectOf: createObjectOfTypeChecker,
				oneOf: createEnumTypeChecker,
				oneOfType: createUnionTypeChecker,
				shape: createShapeTypeChecker,
				exact: createStrictShapeTypeChecker
			};
			/**
			* inlined Object.is polyfill to avoid requiring consumers ship their own
			* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
			*/
			function is(x, y) {
				if (x === y) return x !== 0 || 1 / x === 1 / y;
				else return x !== x && y !== y;
			}
			/**
			* We use an Error-like object for backward compatibility as people may call
			* PropTypes directly and inspect their output. However, we don't use real
			* Errors anymore. We don't inspect their stack anyway, and creating them
			* is prohibitively expensive if they are created too often, such as what
			* happens in oneOfType() for any type before the one that matched.
			*/
			function PropTypeError(message, data) {
				this.message = message;
				this.data = data && typeof data === "object" ? data : {};
				this.stack = "";
			}
			PropTypeError.prototype = Error.prototype;
			function createChainableTypeChecker(validate) {
				var manualPropTypeCallCache = {};
				var manualPropTypeWarningCount = 0;
				function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
					componentName = componentName || ANONYMOUS;
					propFullName = propFullName || propName;
					if (secret !== ReactPropTypesSecret) {
						if (throwOnDirectAccess) {
							var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
							err.name = "Invariant Violation";
							throw err;
						} else if (typeof console !== "undefined") {
							var cacheKey = componentName + ":" + propName;
							if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
								printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
								manualPropTypeCallCache[cacheKey] = true;
								manualPropTypeWarningCount++;
							}
						}
					}
					if (props[propName] == null) {
						if (isRequired) {
							if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
							return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
						}
						return null;
					} else return validate(props, propName, componentName, location, propFullName);
				}
				var chainedCheckType = checkType.bind(null, false);
				chainedCheckType.isRequired = checkType.bind(null, true);
				return chainedCheckType;
			}
			function createPrimitiveTypeChecker(expectedType) {
				function validate(props, propName, componentName, location, propFullName, secret) {
					var propValue = props[propName];
					if (getPropType(propValue) !== expectedType) {
						var preciseType = getPreciseType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createAnyTypeChecker() {
				return createChainableTypeChecker(emptyFunctionThatReturnsNull);
			}
			function createArrayOfTypeChecker(typeChecker) {
				function validate(props, propName, componentName, location, propFullName) {
					if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
					var propValue = props[propName];
					if (!Array.isArray(propValue)) {
						var propType = getPropType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
					}
					for (var i = 0; i < propValue.length; i++) {
						var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
						if (error instanceof Error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createElementTypeChecker() {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					if (!isValidElement(propValue)) {
						var propType = getPropType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createElementTypeTypeChecker() {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					if (!ReactIs.isValidElementType(propValue)) {
						var propType = getPropType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createInstanceTypeChecker(expectedClass) {
				function validate(props, propName, componentName, location, propFullName) {
					if (!(props[propName] instanceof expectedClass)) {
						var expectedClassName = expectedClass.name || ANONYMOUS;
						var actualClassName = getClassName(props[propName]);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createEnumTypeChecker(expectedValues) {
				if (!Array.isArray(expectedValues)) {
					if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
					else printWarning("Invalid argument supplied to oneOf, expected an array.");
					return emptyFunctionThatReturnsNull;
				}
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					for (var i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
					var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
						if (getPreciseType(value) === "symbol") return String(value);
						return value;
					});
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
				}
				return createChainableTypeChecker(validate);
			}
			function createObjectOfTypeChecker(typeChecker) {
				function validate(props, propName, componentName, location, propFullName) {
					if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
					var propValue = props[propName];
					var propType = getPropType(propValue);
					if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
					for (var key in propValue) if (has(propValue, key)) {
						var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error instanceof Error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createUnionTypeChecker(arrayOfTypeCheckers) {
				if (!Array.isArray(arrayOfTypeCheckers)) {
					printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
					return emptyFunctionThatReturnsNull;
				}
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					if (typeof checker !== "function") {
						printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
						return emptyFunctionThatReturnsNull;
					}
				}
				function validate(props, propName, componentName, location, propFullName) {
					var expectedTypes = [];
					for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
						var checker = arrayOfTypeCheckers[i];
						var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
						if (checkerResult == null) return null;
						if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
					}
					var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
				}
				return createChainableTypeChecker(validate);
			}
			function createNodeChecker() {
				function validate(props, propName, componentName, location, propFullName) {
					if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function invalidValidatorError(componentName, location, propFullName, key, type) {
				return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
			}
			function createShapeTypeChecker(shapeTypes) {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					var propType = getPropType(propValue);
					if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
					for (var key in shapeTypes) {
						var checker = shapeTypes[key];
						if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
						var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createStrictShapeTypeChecker(shapeTypes) {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					var propType = getPropType(propValue);
					if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
					for (var key in assign({}, props[propName], shapeTypes)) {
						var checker = shapeTypes[key];
						if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
						if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
						var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function isNode(propValue) {
				switch (typeof propValue) {
					case "number":
					case "string":
					case "undefined": return true;
					case "boolean": return !propValue;
					case "object":
						if (Array.isArray(propValue)) return propValue.every(isNode);
						if (propValue === null || isValidElement(propValue)) return true;
						var iteratorFn = getIteratorFn(propValue);
						if (iteratorFn) {
							var iterator = iteratorFn.call(propValue);
							var step;
							if (iteratorFn !== propValue.entries) {
								while (!(step = iterator.next()).done) if (!isNode(step.value)) return false;
							} else while (!(step = iterator.next()).done) {
								var entry = step.value;
								if (entry) {
									if (!isNode(entry[1])) return false;
								}
							}
						} else return false;
						return true;
					default: return false;
				}
			}
			function isSymbol(propType, propValue) {
				if (propType === "symbol") return true;
				if (!propValue) return false;
				if (propValue["@@toStringTag"] === "Symbol") return true;
				if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
				return false;
			}
			function getPropType(propValue) {
				var propType = typeof propValue;
				if (Array.isArray(propValue)) return "array";
				if (propValue instanceof RegExp) return "object";
				if (isSymbol(propType, propValue)) return "symbol";
				return propType;
			}
			function getPreciseType(propValue) {
				if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
				var propType = getPropType(propValue);
				if (propType === "object") {
					if (propValue instanceof Date) return "date";
					else if (propValue instanceof RegExp) return "regexp";
				}
				return propType;
			}
			function getPostfixForTypeWarning(value) {
				var type = getPreciseType(value);
				switch (type) {
					case "array":
					case "object": return "an " + type;
					case "boolean":
					case "date":
					case "regexp": return "a " + type;
					default: return type;
				}
			}
			function getClassName(propValue) {
				if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
				return propValue.constructor.name;
			}
			ReactPropTypes.checkPropTypes = checkPropTypes;
			ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
			ReactPropTypes.PropTypes = ReactPropTypes;
			return ReactPropTypes;
		};
	}));
	//#endregion
	//#region node_modules/prop-types/index.js
	var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactIs = require_react_is();
		module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, true);
	}));
	//#endregion
	//#region node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
	var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
	var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
	var f = 0;
	Array.isArray;
	function u(e, t, n, o, i, u) {
		t || (t = {});
		var a, c, p = t;
		if ("ref" in p) for (c in p = {}, t) "ref" == c ? a = t[c] : p[c] = t[c];
		var l = {
			type: e,
			props: p,
			key: n,
			ref: a,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: --f,
			__i: -1,
			__u: 0,
			__source: i,
			__self: u
		};
		if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === p[c] && (p[c] = a[c]);
		return l$1.vnode && l$1.vnode(l), l;
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/Feedback.js
	const propTypes$1 = {
		/**
		* Specify whether the feedback is for valid or invalid fields
		*
		* @type {('valid'|'invalid')}
		*/
		type: import_prop_types.default.string,
		/** Display feedback as a tooltip. */
		tooltip: import_prop_types.default.bool,
		as: import_prop_types.default.elementType
	};
	const Feedback = /*#__PURE__*/ D(({ as: Component = "div", className, type = "valid", tooltip = false, ...props }, ref) => /*#__PURE__*/ u(Component, {
		...props,
		ref,
		className: (0, import_classnames.default)(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
	}));
	Feedback.displayName = "Feedback";
	Feedback.propTypes = propTypes$1;
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormContext.js
	const FormContext = /*#__PURE__*/ X$1({});
	const ThemeContext = /*#__PURE__*/ X$1({
		prefixes: {},
		breakpoints: [
			"xxl",
			"xl",
			"lg",
			"md",
			"sm",
			"xs"
		],
		minBreakpoint: "xs"
	});
	const { Consumer, Provider } = ThemeContext;
	function useBootstrapPrefix(prefix, defaultPrefix) {
		const { prefixes } = x$1(ThemeContext);
		return prefix || prefixes[defaultPrefix] || defaultPrefix;
	}
	function useBootstrapBreakpoints() {
		const { breakpoints } = x$1(ThemeContext);
		return breakpoints;
	}
	function useBootstrapMinBreakpoint() {
		const { minBreakpoint } = x$1(ThemeContext);
		return minBreakpoint;
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormCheckInput.js
	const FormCheckInput = /*#__PURE__*/ D(({ id, bsPrefix, className, type = "checkbox", isValid = false, isInvalid = false, as: Component = "input", ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
		return /*#__PURE__*/ u(Component, {
			...props,
			ref,
			type,
			id: id || controlId,
			className: (0, import_classnames.default)(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
		});
	});
	FormCheckInput.displayName = "FormCheckInput";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormCheckLabel.js
	const FormCheckLabel = /*#__PURE__*/ D(({ bsPrefix, className, htmlFor, ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-label");
		return /*#__PURE__*/ u("label", {
			...props,
			ref,
			htmlFor: htmlFor || controlId,
			className: (0, import_classnames.default)(className, bsPrefix)
		});
	});
	FormCheckLabel.displayName = "FormCheckLabel";
	//#endregion
	//#region node_modules/react-bootstrap/esm/ElementChildren.js
	/**
	* Iterates through children that are typically specified as `props.children`,
	* but only maps over children that are "valid elements".
	*
	* The mapFunction provided index will be normalised to the components mapped,
	* so an invalid component would not increase the index.
	*
	*/
	function map(children, func) {
		let index = 0;
		return L.map(children, (child) => /*#__PURE__*/ hn(child) ? func(child, index++) : child);
	}
	/**
	* Finds whether a component's `children` prop includes a React element of the
	* specified type.
	*/
	function hasChildOfType(children, type) {
		return L.toArray(children).some((child) => /*#__PURE__*/ hn(child) && child.type === type);
	}
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormCheck.js
	const FormCheck = /*#__PURE__*/ D(({ id, bsPrefix, bsSwitchPrefix, inline = false, reverse = false, disabled = false, isValid = false, isInvalid = false, feedbackTooltip = false, feedback, feedbackType, className, style, title = "", type = "checkbox", label, children, as = "input", ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-check");
		bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, "form-switch");
		const { controlId } = x$1(FormContext);
		const innerFormContext = T$1(() => ({ controlId: id || controlId }), [controlId, id]);
		const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel);
		const input = /*#__PURE__*/ u(FormCheckInput, {
			...props,
			type: type === "switch" ? "checkbox" : type,
			ref,
			isValid,
			isInvalid,
			disabled,
			as
		});
		return /*#__PURE__*/ u(FormContext.Provider, {
			value: innerFormContext,
			children: /*#__PURE__*/ u("div", {
				style,
				className: (0, import_classnames.default)(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
				children: children || /*#__PURE__*/ u(S, { children: [
					input,
					hasLabel && /*#__PURE__*/ u(FormCheckLabel, {
						title,
						children: label
					}),
					feedback && /*#__PURE__*/ u(Feedback, {
						type: feedbackType,
						tooltip: feedbackTooltip,
						children: feedback
					})
				] })
			})
		});
	});
	FormCheck.displayName = "FormCheck";
	var FormCheck_default = Object.assign(FormCheck, {
		Input: FormCheckInput,
		Label: FormCheckLabel
	});
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormControl.js
	var import_warning = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
		/**
		* Similar to invariant but only logs a warning if the condition is not met.
		* This can be used to log issues in development environments in critical
		* paths. Removing the logging code for production environments will keep the
		* same logic and follow the same code paths.
		*/
		var __DEV__ = true;
		var warning = function() {};
		if (__DEV__) {
			var printWarning = function printWarning(format, args) {
				var len = arguments.length;
				args = new Array(len > 1 ? len - 1 : 0);
				for (var key = 1; key < len; key++) args[key - 1] = arguments[key];
				var argIndex = 0;
				var message = "Warning: " + format.replace(/%s/g, function() {
					return args[argIndex++];
				});
				if (typeof console !== "undefined") console.error(message);
				try {
					throw new Error(message);
				} catch (x) {}
			};
			warning = function(condition, format, args) {
				var len = arguments.length;
				args = new Array(len > 2 ? len - 2 : 0);
				for (var key = 2; key < len; key++) args[key - 2] = arguments[key];
				if (format === void 0) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
				if (!condition) printWarning.apply(null, [format].concat(args));
			};
		}
		module.exports = warning;
	})))());
	const FormControl = /*#__PURE__*/ D(({ bsPrefix, type, size, htmlSize, id, className, isValid = false, isInvalid = false, plaintext, readOnly, as: Component = "input", ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
		(0, import_warning.default)(controlId == null || !id, "`controlId` is ignored on `<FormControl>` when `id` is specified.");
		return /*#__PURE__*/ u(Component, {
			...props,
			type,
			size: htmlSize,
			ref,
			readOnly,
			id: id || controlId,
			className: (0, import_classnames.default)(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
		});
	});
	FormControl.displayName = "FormControl";
	var FormControl_default = Object.assign(FormControl, { Feedback });
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormFloating.js
	const FormFloating = /*#__PURE__*/ D(({ className, bsPrefix, as: Component = "div", ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
		return /*#__PURE__*/ u(Component, {
			ref,
			className: (0, import_classnames.default)(className, bsPrefix),
			...props
		});
	});
	FormFloating.displayName = "FormFloating";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormGroup.js
	const FormGroup = /*#__PURE__*/ D(({ controlId, as: Component = "div", ...props }, ref) => {
		const context = T$1(() => ({ controlId }), [controlId]);
		return /*#__PURE__*/ u(FormContext.Provider, {
			value: context,
			children: /*#__PURE__*/ u(Component, {
				...props,
				ref
			})
		});
	});
	FormGroup.displayName = "FormGroup";
	//#endregion
	//#region node_modules/react-bootstrap/esm/Col.js
	function useCol({ as, bsPrefix, className, ...props }) {
		bsPrefix = useBootstrapPrefix(bsPrefix, "col");
		const breakpoints = useBootstrapBreakpoints();
		const minBreakpoint = useBootstrapMinBreakpoint();
		const spans = [];
		const classes = [];
		breakpoints.forEach((brkPoint) => {
			const propValue = props[brkPoint];
			delete props[brkPoint];
			let span;
			let offset;
			let order;
			if (typeof propValue === "object" && propValue != null) ({span, offset, order} = propValue);
			else span = propValue;
			const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
			if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
			if (order != null) classes.push(`order${infix}-${order}`);
			if (offset != null) classes.push(`offset${infix}-${offset}`);
		});
		return [{
			...props,
			className: (0, import_classnames.default)(className, ...spans, ...classes)
		}, {
			as,
			bsPrefix,
			spans
		}];
	}
	const Col = /*#__PURE__*/ D((props, ref) => {
		const [{ className, ...colProps }, { as: Component = "div", bsPrefix, spans }] = useCol(props);
		return /*#__PURE__*/ u(Component, {
			...colProps,
			ref,
			className: (0, import_classnames.default)(className, !spans.length && bsPrefix)
		});
	});
	Col.displayName = "Col";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormLabel.js
	const FormLabel = /*#__PURE__*/ D(({ as: Component = "label", bsPrefix, column = false, visuallyHidden = false, className, htmlFor, ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
		let columnClass = "col-form-label";
		if (typeof column === "string") columnClass = `${columnClass} ${columnClass}-${column}`;
		const classes = (0, import_classnames.default)(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
		(0, import_warning.default)(controlId == null || !htmlFor, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.");
		htmlFor = htmlFor || controlId;
		if (column) return /*#__PURE__*/ u(Col, {
			ref,
			as: "label",
			className: classes,
			htmlFor,
			...props
		});
		return /*#__PURE__*/ u(Component, {
			ref,
			className: classes,
			htmlFor,
			...props
		});
	});
	FormLabel.displayName = "FormLabel";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormRange.js
	const FormRange = /*#__PURE__*/ D(({ bsPrefix, className, id, ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-range");
		return /*#__PURE__*/ u("input", {
			...props,
			type: "range",
			ref,
			className: (0, import_classnames.default)(className, bsPrefix),
			id: id || controlId
		});
	});
	FormRange.displayName = "FormRange";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormSelect.js
	const FormSelect = /*#__PURE__*/ D(({ bsPrefix, size, htmlSize, className, isValid = false, isInvalid = false, id, ...props }, ref) => {
		const { controlId } = x$1(FormContext);
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-select");
		return /*#__PURE__*/ u("select", {
			...props,
			size: htmlSize,
			ref,
			className: (0, import_classnames.default)(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
			id: id || controlId
		});
	});
	FormSelect.displayName = "FormSelect";
	//#endregion
	//#region node_modules/react-bootstrap/esm/FormText.js
	const FormText = /*#__PURE__*/ D(({ bsPrefix, className, as: Component = "small", muted, ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-text");
		return /*#__PURE__*/ u(Component, {
			...props,
			ref,
			className: (0, import_classnames.default)(className, bsPrefix, muted && "text-muted")
		});
	});
	FormText.displayName = "FormText";
	//#endregion
	//#region node_modules/react-bootstrap/esm/Switch.js
	const Switch = /*#__PURE__*/ D((props, ref) => /*#__PURE__*/ u(FormCheck_default, {
		...props,
		ref,
		type: "switch"
	}));
	Switch.displayName = "Switch";
	var Switch_default = Object.assign(Switch, {
		Input: FormCheck_default.Input,
		Label: FormCheck_default.Label
	});
	//#endregion
	//#region node_modules/react-bootstrap/esm/FloatingLabel.js
	const FloatingLabel = /*#__PURE__*/ D(({ bsPrefix, className, children, controlId, label, ...props }, ref) => {
		bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
		return /*#__PURE__*/ u(FormGroup, {
			ref,
			className: (0, import_classnames.default)(className, bsPrefix),
			controlId,
			...props,
			children: [children, /*#__PURE__*/ u("label", {
				htmlFor: controlId,
				children: label
			})]
		});
	});
	FloatingLabel.displayName = "FloatingLabel";
	//#endregion
	//#region node_modules/react-bootstrap/esm/Form.js
	const propTypes = {
		/**
		* The Form `ref` will be forwarded to the underlying element,
		* which means, unless it's rendered `as` a composite component,
		* it will be a DOM node, when resolved.
		*
		* @type {ReactRef}
		* @alias ref
		*/
		_ref: import_prop_types.default.any,
		/**
		* Mark a form as having been validated. Setting it to `true` will
		* toggle any validation styles on the forms elements.
		*/
		validated: import_prop_types.default.bool,
		as: import_prop_types.default.elementType
	};
	const Form = /*#__PURE__*/ D(({ className, validated, as: Component = "form", ...props }, ref) => /*#__PURE__*/ u(Component, {
		...props,
		ref,
		className: (0, import_classnames.default)(className, validated && "was-validated")
	}));
	Form.displayName = "Form";
	Form.propTypes = propTypes;
	var Form_default = Object.assign(Form, {
		Group: FormGroup,
		Control: FormControl_default,
		Floating: FormFloating,
		Check: FormCheck_default,
		Switch: Switch_default,
		Label: FormLabel,
		Text: FormText,
		Range: FormRange,
		Select: FormSelect,
		FloatingLabel
	});
	//#endregion
	//#region node_modules/style-inject/dist/style-inject.es.js
	function styleInject(css, ref) {
		if (ref === void 0) ref = {};
		var insertAt = ref.insertAt;
		if (!css || typeof document === "undefined") return;
		var head = document.head || document.getElementsByTagName("head")[0];
		var style = document.createElement("style");
		style.type = "text/css";
		if (insertAt === "top") {
			if (head.firstChild) head.insertBefore(style, head.firstChild);
			else head.appendChild(style);
		} else head.appendChild(style);
		if (style.styleSheet) style.styleSheet.cssText = css;
		else style.appendChild(document.createTextNode(css));
	}
	//#endregion
	//#region src/styles/FileInput.module.css
	var css_248z$3 = ".FileInput-module_mainDiv__KkOAj {\n    gap: 0.5rem;\n}\n\n.FileInput-module_previewImageVideo__l3AXl {\n    width: 100%;\n    height: 100%;\n}";
	var FileInput_module_default = {
		"mainDiv": "FileInput-module_mainDiv__KkOAj",
		"previewImageVideo": "FileInput-module_previewImageVideo__l3AXl"
	};
	styleInject(css_248z$3);
	//#endregion
	//#region src/FileInput.tsx
	const defaultInputOptions = Object.freeze({});
	function parseTime(time) {
		const splitTime = time.split(":").map(parseFloat);
		if (splitTime.length == 1) return splitTime[0];
		else if (splitTime.length == 2) {
			const [minutes, seconds] = splitTime;
			return minutes * 60 + seconds;
		} else if (splitTime.length == 3) {
			const [hours, minutes, seconds] = splitTime;
			return hours * 3600 + minutes * 60 + seconds;
		} else throw new Error(`Invalid time format: ${time}`);
	}
	function FileInput({ inputOptions, setInputOptions, className = "" }) {
		const [videoDuration, setVideoDuration] = d(1);
		const videoPreviewRef = A$1(null);
		function videoLoadedMetadata(e) {
			const videoDuration = e.currentTarget.duration;
			setVideoDuration(videoDuration);
		}
		function onSsChecked(e) {
			const newInputOptions = { ...inputOptions };
			if (e.target.checked) newInputOptions.ss = newInputOptions.ss || "0";
			else delete newInputOptions.ss;
			setInputOptions(newInputOptions);
		}
		function onSSChange(e) {
			const ss = e.target.value;
			const newInputOptions = {
				...inputOptions,
				ss
			};
			if (typeof inputOptions.to === "string") {
				if (parseTime(newInputOptions.ss) >= parseTime(inputOptions.to)) newInputOptions.to = newInputOptions.ss;
			}
			if (videoPreviewRef.current) {
				const video = videoPreviewRef.current;
				video.currentTime = parseTime(ss);
			}
			setInputOptions(newInputOptions);
		}
		function onToChecked(e) {
			const newInputOptions = { ...inputOptions };
			if (e.target.checked) newInputOptions.to = newInputOptions.to || "100";
			else delete newInputOptions.to;
			setInputOptions(newInputOptions);
		}
		function onToChange(e) {
			const to = e.target.value;
			const newInputOptions = {
				...inputOptions,
				to
			};
			if (typeof inputOptions.ss === "string") {
				if (parseTime(inputOptions.ss) >= parseTime(newInputOptions.to)) newInputOptions.ss = newInputOptions.to;
			}
			if (videoPreviewRef.current) {
				const video = videoPreviewRef.current;
				video.currentTime = parseTime(to);
			}
			setInputOptions(newInputOptions);
		}
		const { file } = inputOptions;
		const fileIsVideo = file && file.type.startsWith("video/");
		const fileIsImage = file && file.type.startsWith("image/");
		const fileUrl = T$1(() => file && URL.createObjectURL(file), [file]) || "";
		const ssValue = typeof inputOptions.ss === "string" ? parseTime(inputOptions.ss) : 0;
		const ssSelector = /* @__PURE__ */ gn.createElement(Form_default, { className: "d-flex" }, /* @__PURE__ */ gn.createElement(Form_default.Switch, {
			label: "ss",
			checked: typeof inputOptions.ss === "string",
			onChange: onSsChecked
		}), /* @__PURE__ */ gn.createElement(Form_default.Range, {
			className: "mx-1",
			value: ssValue,
			max: videoDuration,
			step: 1e-4,
			onChange: onSSChange
		}), /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "text",
			className: "w-25",
			value: inputOptions.ss || 0,
			onChange: onSSChange
		}));
		const toValue = typeof inputOptions.to === "string" ? parseTime(inputOptions.to) : videoDuration;
		const toSelector = /* @__PURE__ */ gn.createElement(Form_default, { className: "d-flex" }, /* @__PURE__ */ gn.createElement(Form_default.Switch, {
			label: "to",
			checked: typeof inputOptions.to === "string",
			onChange: onToChecked
		}), /* @__PURE__ */ gn.createElement(Form_default.Range, {
			className: "mx-1",
			value: toValue,
			max: videoDuration,
			step: 1e-4,
			onChange: onToChange
		}), /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "text",
			className: "w-25",
			value: inputOptions.to || videoDuration,
			onChange: onToChange
		}));
		return /* @__PURE__ */ gn.createElement("div", { className: `${className} ${FileInput_module_default.mainDiv}` }, /* @__PURE__ */ gn.createElement("h2", null, "File Input"), /* @__PURE__ */ gn.createElement(Form_default.Control, {
			type: "file",
			accept: "video/*,image/*,audio/*",
			onChange: (e) => {
				const file = e.target.files?.item(0);
				if (file) setInputOptions({
					...inputOptions,
					file
				});
			}
		}), /* @__PURE__ */ gn.createElement("div", null, fileIsVideo && /* @__PURE__ */ gn.createElement("video", {
			src: fileUrl,
			ref: videoPreviewRef,
			controls: true,
			className: FileInput_module_default.previewImageVideo,
			onLoadedMetadata: videoLoadedMetadata
		}), fileIsImage && /* @__PURE__ */ gn.createElement("img", {
			src: fileUrl,
			className: FileInput_module_default.previewImageVideo
		})), /* @__PURE__ */ gn.createElement("div", null, ssSelector, toSelector));
	}
	//#endregion
	//#region node_modules/@restart/ui/esm/Button.js
	const _excluded = ["as", "disabled"];
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (e.indexOf(n) >= 0) continue;
			t[n] = r[n];
		}
		return t;
	}
	function isTrivialHref(href) {
		return !href || href.trim() === "#";
	}
	function useButtonProps({ tagName, disabled, href, target, rel, role, onClick, tabIndex = 0, type }) {
		if (!tagName) {
			if (href != null || target != null || rel != null) tagName = "a";
			else tagName = "button";
		}
		const meta = { tagName };
		if (tagName === "button") return [{
			type: type || "button",
			disabled
		}, meta];
		const handleClick = (event) => {
			if (disabled || tagName === "a" && isTrivialHref(href)) event.preventDefault();
			if (disabled) {
				event.stopPropagation();
				return;
			}
			onClick?.(event);
		};
		const handleKeyDown = (event) => {
			if (event.key === " ") {
				event.preventDefault();
				handleClick(event);
			}
		};
		if (tagName === "a") {
			href || (href = "#");
			if (disabled) href = void 0;
		}
		return [{
			role: role != null ? role : "button",
			disabled: void 0,
			tabIndex: disabled ? void 0 : tabIndex,
			href,
			target: tagName === "a" ? target : void 0,
			"aria-disabled": !disabled ? void 0 : disabled,
			rel: tagName === "a" ? rel : void 0,
			onClick: handleClick,
			onKeyDown: handleKeyDown
		}, meta];
	}
	const Button$1 = /*#__PURE__*/ D((_ref, ref) => {
		let { as: asProp, disabled } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
		const [buttonProps, { tagName: Component }] = useButtonProps(Object.assign({
			tagName: asProp,
			disabled
		}, props));
		return /*#__PURE__*/ u(Component, Object.assign({}, props, buttonProps, { ref }));
	});
	Button$1.displayName = "Button";
	//#endregion
	//#region node_modules/react-bootstrap/esm/Button.js
	const Button = /*#__PURE__*/ D(({ as, bsPrefix, variant = "primary", size, active = false, disabled = false, className, ...props }, ref) => {
		const prefix = useBootstrapPrefix(bsPrefix, "btn");
		const [buttonProps, { tagName }] = useButtonProps({
			tagName: as,
			disabled,
			...props
		});
		return /*#__PURE__*/ u(tagName, {
			...buttonProps,
			...props,
			ref,
			disabled,
			className: (0, import_classnames.default)(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && "disabled")
		});
	});
	Button.displayName = "Button";
	//#endregion
	//#region node_modules/react-bootstrap/esm/ProgressBar.js
	const ROUND_PRECISION = 1e3;
	function getPercentage(now, min, max) {
		const percentage = (now - min) / (max - min) * 100;
		return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
	}
	function renderProgressBar({ min, now, max, label, visuallyHidden, striped, animated, className, style, variant, bsPrefix, ...props }, ref) {
		return /*#__PURE__*/ u("div", {
			ref,
			...props,
			role: "progressbar",
			className: (0, import_classnames.default)(className, `${bsPrefix}-bar`, {
				[`bg-${variant}`]: variant,
				[`${bsPrefix}-bar-animated`]: animated,
				[`${bsPrefix}-bar-striped`]: animated || striped
			}),
			style: {
				width: `${getPercentage(now, min, max)}%`,
				...style
			},
			"aria-valuenow": now,
			"aria-valuemin": min,
			"aria-valuemax": max,
			children: visuallyHidden ? /*#__PURE__*/ u("span", {
				className: "visually-hidden",
				children: label
			}) : label
		});
	}
	const ProgressBar = /*#__PURE__*/ D(({ isChild = false, ...rest }, ref) => {
		const props = {
			min: 0,
			max: 100,
			animated: false,
			visuallyHidden: false,
			striped: false,
			...rest
		};
		props.bsPrefix = useBootstrapPrefix(props.bsPrefix, "progress");
		if (isChild) return renderProgressBar(props, ref);
		const { min, now, max, label, visuallyHidden, striped, animated, bsPrefix, variant, className, children, ...wrapperProps } = props;
		return /*#__PURE__*/ u("div", {
			ref,
			...wrapperProps,
			className: (0, import_classnames.default)(className, bsPrefix),
			children: children ? map(children, (child) => /*#__PURE__*/ mn(child, { isChild: true })) : renderProgressBar({
				min,
				now,
				max,
				label,
				visuallyHidden,
				striped,
				animated,
				bsPrefix,
				variant
			}, ref)
		});
	});
	ProgressBar.displayName = "ProgressBar";
	//#endregion
	//#region src/styles/RenderOutput.module.css
	var css_248z$2 = ".RenderOutput-module_mainDiv__3hTKU {\n    gap: 0.5rem;\n}\n\n.RenderOutput-module_dropdownSelect__acj7W {\n    margin: 0;\n}\n\n.RenderOutput-module_floatingLabel__C0XLf {\n    width: fit-content;\n    flex-grow: 1;\n}\n\n.RenderOutput-module_outputImageVideo__5nNs2 {\n    width: 100%;\n    max-height: 100%;\n}\n";
	var RenderOutput_module_default = {
		"mainDiv": "RenderOutput-module_mainDiv__3hTKU",
		"dropdownSelect": "RenderOutput-module_dropdownSelect__acj7W",
		"floatingLabel": "RenderOutput-module_floatingLabel__C0XLf",
		"outputImageVideo": "RenderOutput-module_outputImageVideo__5nNs2"
	};
	styleInject(css_248z$2);
	//#endregion
	//#region src/RenderOutput.tsx
	const defaultOutputOptions = Object.freeze({
		hqGif: true,
		webpLoop: true
	});
	const containerToMime = {
		"mp4": "video/mp4",
		"webm": "video/webm",
		"png": "image/png",
		"jpg": "image/jpeg",
		"webp": "image/webp",
		"gif": "image/gif"
	};
	const videoContainers = ["mp4", "webm"];
	const imageContainers = [
		"png",
		"jpg",
		"webp",
		"gif"
	];
	function isVideoContainer(container) {
		return videoContainers.includes(container);
	}
	function isImageContainer(container) {
		return imageContainers.includes(container);
	}
	function RenderOutput({ outputOptions, setOutputOptions, outputVideoSrc, onStartRenderClicked = void 0, progress = -1, className = "" }) {
		function onSelectContainer(e) {
			console.log(`Selected container: ${e.target.value}`);
			setOutputOptions({
				...outputOptions,
				container: e.target.value
			});
		}
		function onSelectPixelformat(e) {
			console.log(`Selected pixelformat: ${e.target.value}`);
			setOutputOptions({
				...outputOptions,
				pixelFormat: e.target.value
			});
		}
		function onSelectFrameRate(e) {
			console.log(`Selected framerate: ${e.target.value}`);
			setOutputOptions({
				...outputOptions,
				framerate: parseInt(e.target.value)
			});
		}
		function onSetHQGIF(e) {
			console.log(`Selected HQ GIF: ${e.target.checked}`);
			setOutputOptions({
				...outputOptions,
				hqGif: e.target.checked
			});
		}
		const hqGifSelection = outputOptions.container == "gif" ? /* @__PURE__ */ gn.createElement(Form_default.Switch, {
			label: "HQ GIF",
			checked: outputOptions.hqGif || false,
			onChange: onSetHQGIF
		}) : null;
		const webpLoopSelection = outputOptions.container == "webp" ? /* @__PURE__ */ gn.createElement(Form_default.Switch, {
			label: "Loop",
			checked: outputOptions.webpLoop || false,
			onChange: (e) => setOutputOptions({
				...outputOptions,
				webpLoop: e.target.checked
			})
		}) : null;
		return /* @__PURE__ */ gn.createElement("div", { className: `${className} ${RenderOutput_module_default.mainDiv}` }, /* @__PURE__ */ gn.createElement("h2", null, "Output"), /* @__PURE__ */ gn.createElement("div", { className: "d-flex flex-row" }, /* @__PURE__ */ gn.createElement(FloatingLabel, {
			controlId: "floatingSelect",
			label: "Container",
			className: RenderOutput_module_default.floatingLabel
		}, /* @__PURE__ */ gn.createElement(Form_default.Select, {
			className: RenderOutput_module_default.dropdownSelect,
			"aria-label": "Container",
			onChange: onSelectContainer
		}, /* @__PURE__ */ gn.createElement("option", {
			value: "",
			selected: true
		}, "Default"), videoContainers.map((x) => /* @__PURE__ */ gn.createElement("option", {
			key: x,
			value: x
		}, x)), imageContainers.map((x) => /* @__PURE__ */ gn.createElement("option", {
			key: x,
			value: x
		}, x)))), /* @__PURE__ */ gn.createElement(FloatingLabel, {
			controlId: "floatingSelect",
			label: "Pixel Format",
			className: RenderOutput_module_default.floatingLabel
		}, /* @__PURE__ */ gn.createElement(Form_default.Select, {
			className: RenderOutput_module_default.dropdownSelect,
			"aria-label": "PixelFormat",
			onChange: onSelectPixelformat
		}, /* @__PURE__ */ gn.createElement("option", {
			value: "",
			selected: true
		}, "Default"), /* @__PURE__ */ gn.createElement("option", { value: "yuv420p" }, "yuv420p"), /* @__PURE__ */ gn.createElement("option", { value: "rgb24" }, "rgb24"), /* @__PURE__ */ gn.createElement("option", { value: "rgba" }, "rgba"))), /* @__PURE__ */ gn.createElement(FloatingLabel, {
			controlId: "floatingSelect",
			label: "Frame Rate",
			className: RenderOutput_module_default.floatingLabel
		}, /* @__PURE__ */ gn.createElement(Form_default.Select, {
			className: RenderOutput_module_default.dropdownSelect,
			"aria-label": "FrameRate",
			onChange: onSelectFrameRate
		}, /* @__PURE__ */ gn.createElement("option", { value: "" }, "Default"), /* @__PURE__ */ gn.createElement("option", { value: "15" }, "15"), /* @__PURE__ */ gn.createElement("option", { value: "30" }, "30"), /* @__PURE__ */ gn.createElement("option", { value: "60" }, "60")))), /* @__PURE__ */ gn.createElement("div", null, hqGifSelection, webpLoopSelection), /* @__PURE__ */ gn.createElement(Button, {
			variant: "primary",
			onClick: onStartRenderClicked,
			hidden: onStartRenderClicked == null
		}, "Start Render"), /* @__PURE__ */ gn.createElement(ProgressBar, {
			animated: progress < 100,
			now: progress,
			hidden: progress < 0,
			label: `${progress.toFixed(1)}%`
		}), /* @__PURE__ */ gn.createElement("div", null, /* @__PURE__ */ gn.createElement("video", {
			src: outputVideoSrc,
			controls: true,
			className: RenderOutput_module_default.outputImageVideo,
			hidden: outputVideoSrc == "" || !isVideoContainer(outputOptions.container || "")
		}), /* @__PURE__ */ gn.createElement("img", {
			src: outputVideoSrc,
			className: RenderOutput_module_default.outputImageVideo,
			hidden: outputVideoSrc == "" || !isImageContainer(outputOptions.container || "")
		}), /* @__PURE__ */ gn.createElement("small", {
			className: "text-muted",
			hidden: outputVideoSrc == ""
		}, "Right click and save as to download the output.")));
	}
	//#endregion
	//#region src/styles/Log.module.css
	var css_248z$1 = ".Log-module_mainDiv__5ioU6 {\n    width: 0;\n}\n\n.Log-module_logContainer__50Uig {\n    flex: 1 1 0;\n    overflow: hidden;\n}\n\n.Log-module_logPre__hDEmt {\n    max-height: 100%;\n}";
	var Log_module_default = {
		"mainDiv": "Log-module_mainDiv__5ioU6",
		"logContainer": "Log-module_logContainer__50Uig",
		"logPre": "Log-module_logPre__hDEmt"
	};
	styleInject(css_248z$1);
	//#endregion
	//#region src/Log.tsx
	function Log({ log, className = "" }) {
		return /* @__PURE__ */ gn.createElement("div", { className: `${className} ${Log_module_default.mainDiv}` }, /* @__PURE__ */ gn.createElement("h2", null, "Log"), /* @__PURE__ */ gn.createElement("div", { className: `text-start ${Log_module_default.logContainer}` }, /* @__PURE__ */ gn.createElement("pre", { className: Log_module_default.logPre }, log)));
	}
	//#endregion
	//#region src/styles/MediaConverter.module.css
	var css_248z = ".MediaConverter-module_mainContainer__C9Sfl {\n    --gap: 1rem;\n    gap: var(--gap);\n    padding: var(--gap);\n}\n\n.MediaConverter-module_components__iQceY {\n    border-radius: 0.5rem;\n    background: #404040;\n    padding: 1rem;\n    text-align: center;\n    flex: 1 1 30%;\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n}";
	var MediaConverter_module_default = {
		"mainContainer": "MediaConverter-module_mainContainer__C9Sfl",
		"components": "MediaConverter-module_components__iQceY"
	};
	styleInject(css_248z);
	//#endregion
	//#region src/MediaConverter.tsx
	function buildFFmpegCall(inputOptions, outputOptions) {
		const file = inputOptions.file;
		const { ss, to } = inputOptions;
		const inputCall = [
			ss ? ["-ss", ss] : [],
			to ? ["-to", to] : [],
			"-i",
			file.name
		].flat();
		const container = outputOptions.container || file.name.split(".").pop();
		if (typeof container !== "string") throw new Error("No container selected");
		const outputFilename = `output.${container}`;
		const newOutputOptions = {
			...outputOptions,
			container
		};
		const filters = [];
		if (outputOptions.container == "gif" && outputOptions.hqGif) filters.push("split=2[v1][v2];[v1]palettegen=stats_mode=full[palette];[v2][palette]paletteuse=dither=sierra2_4a");
		return [
			[
				inputCall,
				outputOptions.framerate ? ["-r", outputOptions.framerate.toString()] : [],
				outputOptions.pixelFormat ? ["-pix_fmt", outputOptions.pixelFormat] : [],
				filters.length > 0 ? ["-filter_complex", "[0]" + filters.join(";")] : [],
				outputOptions.webpLoop ? ["-loop", "0"] : [],
				outputFilename
			].flat(),
			outputFilename,
			containerToMime[container],
			newOutputOptions
		];
	}
	function MediaConverter() {
		const [log, setLog] = d("");
		const [outputVideoSrc, setOutputVideoSrc] = d("");
		const [inputOptions, setInputOptions] = d(defaultInputOptions);
		const [outputOptions, setOutputOptions] = d(defaultOutputOptions);
		const [progress, setProgress] = d(-1);
		const ffmpegRef = A$1(new FFmpeg());
		async function beginRender() {
			const { file } = inputOptions;
			if (file) {
				const ffmpeg = ffmpegRef.current;
				ffmpeg.on("log", ({ message }) => {
					setLog((prev) => prev + "\n" + message);
				});
				ffmpeg.on("progress", ({ progress }) => {
					setProgress(100 * progress);
				});
				setLog("");
				setOutputVideoSrc("");
				const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.4/dist/umd";
				await ffmpeg.load({
					coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
					wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm")
				});
				await ffmpeg.writeFile(file.name, await fetchFile(file));
				const [ffmpegCall, outputFilename, outputMime, newOutputOptions] = buildFFmpegCall(inputOptions, outputOptions);
				await ffmpeg.exec(ffmpegCall);
				const data = await ffmpeg.readFile(outputFilename);
				if (data.length == 0) {
					console.warn("No data returned");
					return;
				}
				let blob;
				if (typeof data === "string") blob = new Blob([data], { type: outputMime });
				else blob = new Blob([new Uint8Array(data)], { type: outputMime });
				const url = URL.createObjectURL(blob);
				setOutputVideoSrc(url);
				setOutputOptions(newOutputOptions);
			} else console.warn("No file selected");
		}
		const componentClasses = `text-center ${MediaConverter_module_default.components}`;
		return /* @__PURE__ */ gn.createElement("div", { className: `text-center d-flex flex-wrap ${MediaConverter_module_default.mainContainer}` }, /* @__PURE__ */ gn.createElement(FileInput, {
			className: componentClasses,
			inputOptions,
			setInputOptions
		}), /* @__PURE__ */ gn.createElement(RenderOutput, {
			className: componentClasses,
			outputOptions,
			setOutputOptions,
			outputVideoSrc,
			progress,
			onStartRenderClicked: inputOptions.file ? beginRender : void 0
		}), /* @__PURE__ */ gn.createElement(Log, {
			className: componentClasses,
			log
		}));
	}
	createRoot(document.getElementById("root")).render(/* @__PURE__ */ gn.createElement(MediaConverter, null));
	//#endregion
})();
