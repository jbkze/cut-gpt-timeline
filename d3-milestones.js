(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.milestones = factory());
}(this, (function () { 'use strict';

  function _OverloadYield(e, d) {
    this.v = e, this.k = d;
  }
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = !1,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = !0, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorAsync(n, e, r, t, o) {
    var a = _regeneratorAsyncGen(n, e, r, t, o);
    return a.next().then(function (n) {
      return n.done ? n.value : a.next();
    });
  }
  function _regeneratorAsyncGen(r, e, t, o, n) {
    return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise);
  }
  function _regeneratorAsyncIterator(t, e) {
    function n(r, o, i, f) {
      try {
        var c = t[r](o),
          u = c.value;
        return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) {
          n("next", t, i, f);
        }, function (t) {
          n("throw", t, i, f);
        }) : e.resolve(u).then(function (t) {
          c.value = t, i(c);
        }, function (t) {
          return n("throw", t, i, f);
        });
      } catch (t) {
        f(t);
      }
    }
    var r;
    this.next || (_regeneratorDefine(_regeneratorAsyncIterator.prototype), _regeneratorDefine(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
      return this;
    })), _regeneratorDefine(this, "_invoke", function (t, o, i) {
      function f() {
        return new e(function (e, r) {
          n(t, i, e, r);
        });
      }
      return r = r ? r.then(f, f) : f();
    }, !0);
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      if (r) i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n;else {
        function o(r, n) {
          _regeneratorDefine(e, r, function (e) {
            return this._invoke(r, n, e);
          });
        }
        o("next", 0), o("throw", 1), o("return", 2);
      }
    }, _regeneratorDefine(e, r, n, t);
  }
  function _regeneratorKeys(e) {
    var n = Object(e),
      r = [];
    for (var t in n) r.unshift(t);
    return function e() {
      for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
      return e.done = !0, e;
    };
  }
  function _regeneratorValues(e) {
    if (null != e) {
      var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
        r = 0;
      if (t) return t.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) return {
        next: function () {
          return e && r >= e.length && (e = void 0), {
            value: e && e[r++],
            done: !e
          };
        }
      };
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _regeneratorRuntime() {

    var r = _regenerator(),
      e = r.m(_regeneratorRuntime),
      t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
    function n(r) {
      var e = "function" == typeof r && r.constructor;
      return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
    }
    var o = {
      throw: 1,
      return: 2,
      break: 3,
      continue: 3
    };
    function a(r) {
      var e, t;
      return function (n) {
        e || (e = {
          stop: function () {
            return t(n.a, 2);
          },
          catch: function () {
            return n.v;
          },
          abrupt: function (r, e) {
            return t(n.a, o[r], e);
          },
          delegateYield: function (r, o, a) {
            return e.resultName = o, t(n.d, _regeneratorValues(r), a);
          },
          finish: function (r) {
            return t(n.f, r);
          }
        }, t = function (r, t, o) {
          n.p = e.prev, n.n = e.next;
          try {
            return r(t, o);
          } finally {
            e.next = n.n;
          }
        }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
        try {
          return r.call(this, e);
        } finally {
          n.p = e.prev, n.n = e.next;
        }
      };
    }
    return (_regeneratorRuntime = function () {
      return {
        wrap: function (e, t, n, o) {
          return r.w(a(e), t, n, o && o.reverse());
        },
        isGeneratorFunction: n,
        mark: r.m,
        awrap: function (r, e) {
          return new _OverloadYield(r, e);
        },
        AsyncIterator: _regeneratorAsyncIterator,
        async: function (r, e, t, o, u) {
          return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u);
        },
        keys: _regeneratorKeys,
        values: _regeneratorValues
      };
    })();
  }

  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace (name) {
    var prefix = name += "",
      i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {
      space: namespaces[prefix],
      local: name
    } : name; // eslint-disable-line no-prototype-builtins
  }

  function creatorInherit(name) {
    return function () {
      var document = this.ownerDocument,
        uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function () {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator (name) {
    var fullname = namespace(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  function none() {}
  function selector (selector) {
    return selector == null ? none : function () {
      return this.querySelector(selector);
    };
  }

  function selection_select (select) {
    if (typeof select !== "function") select = selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // Given something array like (or null), returns something that is strictly an
  // array. This is used to ensure that array-like objects passed to d3.selectAll
  // or selection.selectAll are converted into proper arrays when creating a
  // selection; we don’t ever want to create a selection backed by a live
  // HTMLCollection or NodeList. However, note that selection.selectAll will use a
  // static NodeList as a group, since it safely derived from querySelectorAll.
  function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
  }

  function empty() {
    return [];
  }
  function selectorAll (selector) {
    return selector == null ? empty : function () {
      return this.querySelectorAll(selector);
    };
  }

  function arrayAll(select) {
    return function () {
      return array(select.apply(this, arguments));
    };
  }
  function selection_selectAll (select) {
    if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  }

  function matcher (selector) {
    return function () {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function (node) {
      return node.matches(selector);
    };
  }

  var find = Array.prototype.find;
  function childFind(match) {
    return function () {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selection_selectChild (match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  var filter = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function () {
      return filter.call(this.children, match);
    };
  }
  function selection_selectChildren (match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  function selection_filter (match) {
    if (typeof match !== "function") match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  function sparse (update) {
    return new Array(update.length);
  }

  function selection_enter () {
    return new Selection(this._enter || this._groups.map(sparse), this._parents);
  }
  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function appendChild(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function insertBefore(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function querySelector(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function querySelectorAll(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  function constant (x) {
    return function () {
      return x;
    };
  }

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
      node,
      nodeByKeyValue = new Map(),
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }

    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue["delete"](keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit[i] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function selection_data (value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;
    if (typeof value !== "function") value = constant(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength) {
          }
          previous._next = next || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  // Given some data, this returns an array-like view of it: an object that
  // exposes a length property and allows numeric indexing. Note that unlike
  // selectAll, this isn’t worried about “live” collections because the resulting
  // array will only be used briefly while data is being bound. (It is possible to
  // cause the data to change while iterating by using a key function, but please
  // don’t; we’d rather avoid a gratuitous copy.)
  function arraylike(data) {
    return _typeof(data) === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
  }

  function selection_exit () {
    return new Selection(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_join (onenter, onupdate, onexit) {
    var enter = this.enter(),
      update = this,
      exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter) enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge (context) {
    var selection = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection(merges, this._parents);
  }

  function selection_order () {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }

  function selection_sort (compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call () {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes () {
    return Array.from(this);
  }

  function selection_node () {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  }

  function selection_size () {
    var size = 0;
    var _iterator = _createForOfIteratorHelper(this),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        ++size;
      } // eslint-disable-line no-unused-vars
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return size;
  }

  function selection_empty () {
    return !this.node();
  }

  function selection_each (callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }
    return this;
  }

  function attrRemove(name) {
    return function () {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function () {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function () {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  function selection_attr (name, value) {
    var fullname = namespace(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }

  function defaultView (node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
    || node.document && node // node is a Window
    || node.defaultView; // node is a Document
  }

  function styleRemove(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function () {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
    };
  }
  function selection_style (name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function () {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function () {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];else this[name] = v;
    };
  }
  function selection_property (name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function add(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function remove(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function contains(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node),
      i = -1,
      n = names.length;
    while (++i < n) {
      list.add(names[i]);
    }
  }
  function classedRemove(node, names) {
    var list = classList(node),
      i = -1,
      n = names.length;
    while (++i < n) {
      list.remove(names[i]);
    }
  }
  function classedTrue(names) {
    return function () {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function () {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function () {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function selection_classed (name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()),
        i = -1,
        n = names.length;
      while (++i < n) {
        if (!list.contains(names[i])) return false;
      }
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function () {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  function selection_text (value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function () {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  function selection_html (value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }
  function selection_raise () {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function selection_lower () {
    return this.each(lower);
  }

  function selection_append (name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function () {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }
  function selection_insert (name, before) {
    var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function () {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  function selection_remove () {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    var clone = this.cloneNode(false),
      parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true),
      parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_clone (deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum (value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  function contextListener(listener) {
    return function (event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "",
        i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {
        type: t,
        name: name
      };
    });
  }
  function onRemove(typename) {
    return function () {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;else delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function () {
      var on = this.__on,
        o,
        listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {
        type: typename.type,
        name: typename.name,
        value: value,
        listener: listener,
        options: options
      };
      if (!on) this.__on = [o];else on.push(o);
    };
  }
  function selection_on (typename, value, options) {
    var typenames = parseTypenames(typename + ""),
      i,
      n = typenames.length,
      t;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) {
      this.each(on(typenames[i], value, options));
    }
    return this;
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
      event = window.CustomEvent;
    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type, params) {
    return function () {
      return dispatchEvent(this, type, params);
    };
  }
  function dispatchFunction(type, params) {
    return function () {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }
  function selection_dispatch (type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
  }

  var _marked = /*#__PURE__*/_regeneratorRuntime().mark(_callee);
  function _callee() {
    var groups, j, m, group, i, n, node;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            groups = this._groups, j = 0, m = groups.length;
          case 1:
            if (!(j < m)) {
              _context.next = 13;
              break;
            }
            group = groups[j], i = 0, n = group.length;
          case 3:
            if (!(i < n)) {
              _context.next = 10;
              break;
            }
            if (!(node = group[i])) {
              _context.next = 7;
              break;
            }
            _context.next = 7;
            return node;
          case 7:
            ++i;
            _context.next = 3;
            break;
          case 10:
            ++j;
            _context.next = 1;
            break;
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection.prototype = selection.prototype = _defineProperty({
    constructor: Selection,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch
  }, Symbol.iterator, _callee);

  function select (selector) {
    return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
  }

  function selectAll (selector) {
    return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([array(selector)], root);
  }

  function ascending$1(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function descending(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  }

  function bisector(f) {
    var compare1, compare2, delta;

    // If an accessor is specified, promote it to a comparator. In this case we
    // can test whether the search value is (self-) comparable. We can’t do this
    // for a comparator (except for specific, known comparators) because we can’t
    // tell if the comparator is symmetric, and an asymmetric comparator can’t be
    // used to test whether a single value is comparable.
    if (f.length !== 2) {
      compare1 = ascending$1;
      compare2 = function compare2(d, x) {
        return ascending$1(f(d), x);
      };
      delta = function delta(d, x) {
        return f(d) - x;
      };
    } else {
      compare1 = f === ascending$1 || f === descending ? f : zero;
      compare2 = f;
      delta = f;
    }
    function left(a, x) {
      var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
      if (lo < hi) {
        if (compare1(x, x) !== 0) return hi;
        do {
          var mid = lo + hi >>> 1;
          if (compare2(a[mid], x) < 0) lo = mid + 1;else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function right(a, x) {
      var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
      if (lo < hi) {
        if (compare1(x, x) !== 0) return hi;
        do {
          var mid = lo + hi >>> 1;
          if (compare2(a[mid], x) <= 0) lo = mid + 1;else hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function center(a, x) {
      var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : a.length;
      var i = left(a, x, lo, hi - 1);
      return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return {
      left: left,
      center: center,
      right: right
    };
  }
  function zero() {
    return 0;
  }

  function number(x) {
    return x === null ? NaN : +x;
  }

  var ascendingBisect = bisector(ascending$1);
  var bisectRight = ascendingBisect.right;
  var bisectCenter = bisector(number).center;

  function extent(values, valueof) {
    var min;
    var max;
    if (valueof === undefined) {
      var _iterator = _createForOfIteratorHelper(values),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          if (value != null) {
            if (min === undefined) {
              if (value >= value) min = max = value;
            } else {
              if (min > value) min = value;
              if (max < value) max = value;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      var index = -1;
      var _iterator2 = _createForOfIteratorHelper(values),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _value = _step2.value;
          if ((_value = valueof(_value, ++index, values)) != null) {
            if (min === undefined) {
              if (_value >= _value) min = max = _value;
            } else {
              if (min > _value) min = _value;
              if (max < _value) max = _value;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return [min, max];
  }

  var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);
  function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
    if (error >= e10) step1 *= 10;else if (error >= e5) step1 *= 5;else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
  }

  function max(values, valueof) {
    var max;
    if (valueof === undefined) {
      var _iterator = _createForOfIteratorHelper(values),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          if (value != null && (max < value || max === undefined && value >= value)) {
            max = value;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      var index = -1;
      var _iterator2 = _createForOfIteratorHelper(values),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _value = _step2.value;
          if ((_value = valueof(_value, ++index, values)) != null && (max < _value || max === undefined && _value >= _value)) {
            max = _value;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return max;
  }

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range).domain(domain);
        break;
    }
    return this;
  }

  function define (constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) {
      prototype[key] = definition[key];
    }
    return prototype;
  }

  function Color() {}
  var _darker = 0.7;
  var _brighter = 1 / _darker;
  var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(".concat(reI, ",").concat(reI, ",").concat(reI, "\\)$")),
    reRgbPercent = new RegExp("^rgb\\(".concat(reP, ",").concat(reP, ",").concat(reP, "\\)$")),
    reRgbaInteger = new RegExp("^rgba\\(".concat(reI, ",").concat(reI, ",").concat(reI, ",").concat(reN, "\\)$")),
    reRgbaPercent = new RegExp("^rgba\\(".concat(reP, ",").concat(reP, ",").concat(reP, ",").concat(reN, "\\)$")),
    reHslPercent = new RegExp("^hsl\\(".concat(reN, ",").concat(reP, ",").concat(reP, "\\)$")),
    reHslaPercent = new RegExp("^hsla\\(".concat(reN, ",").concat(reP, ",").concat(reP, ",").concat(reN, "\\)$"));
  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };
  define(Color, color, {
    copy: function copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable: function displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
    : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
    : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
    : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
    : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
    : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
    : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
    : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
    : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
    : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
    : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
    : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }
  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define(Rgb, rgb, extend(Color, {
    brighter: function brighter(k) {
      k = k == null ? _brighter : Math.pow(_brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function darker(k) {
      k = k == null ? _darker : Math.pow(_darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function rgb() {
      return this;
    },
    clamp: function clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable: function displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return "#".concat(hex(this.r)).concat(hex(this.g)).concat(hex(this.b));
  }
  function rgb_formatHex8() {
    return "#".concat(hex(this.r)).concat(hex(this.g)).concat(hex(this.b)).concat(hex((isNaN(this.opacity) ? 1 : this.opacity) * 255));
  }
  function rgb_formatRgb() {
    var a = clampa(this.opacity);
    return "".concat(a === 1 ? "rgb(" : "rgba(").concat(clampi(this.r), ", ").concat(clampi(this.g), ", ").concat(clampi(this.b)).concat(a === 1 ? ")" : ", ".concat(a, ")"));
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }
  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl();
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }
  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  define(Hsl, hsl, extend(Color, {
    brighter: function brighter(k) {
      k = k == null ? _brighter : Math.pow(_brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function darker(k) {
      k = k == null ? _darker : Math.pow(_darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function rgb() {
      var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
      return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    clamp: function clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function formatHsl() {
      var a = clampa(this.opacity);
      return "".concat(a === 1 ? "hsl(" : "hsla(").concat(clamph(this.h), ", ").concat(clampt(this.s) * 100, "%, ").concat(clampt(this.l) * 100, "%").concat(a === 1 ? ")" : ", ".concat(a, ")"));
    }
  }));
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }

  var constant$1 = (function (x) {
    return function () {
      return x;
    };
  });

  function linear(a, d) {
    return function (t) {
      return a + t * d;
    };
  }
  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
      return Math.pow(a + t * b, y);
    };
  }
  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function (a, b) {
      return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
    };
  }
  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
  }

  var rgb$1 = (function rgbGamma(y) {
    var color = gamma(y);
    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
      return function (t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }
    rgb$1.gamma = rgbGamma;
    return rgb$1;
  })(1);

  function numberArray (a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
    return function (t) {
      for (i = 0; i < n; ++i) {
        c[i] = a[i] * (1 - t) + b[i] * t;
      }
      return c;
    };
  }
  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  function genericArray(a, b) {
    var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;
    for (i = 0; i < na; ++i) {
      x[i] = interpolate(a[i], b[i]);
    }
    for (; i < nb; ++i) {
      c[i] = b[i];
    }
    return function (t) {
      for (i = 0; i < na; ++i) {
        c[i] = x[i](t);
      }
      return c;
    };
  }

  function date (a, b) {
    var d = new Date();
    return a = +a, b = +b, function (t) {
      return d.setTime(a * (1 - t) + b * t), d;
    };
  }

  function interpolateNumber (a, b) {
    return a = +a, b = +b, function (t) {
      return a * (1 - t) + b * t;
    };
  }

  function object (a, b) {
    var i = {},
      c = {},
      k;
    if (a === null || _typeof(a) !== "object") a = {};
    if (b === null || _typeof(b) !== "object") b = {};
    for (k in b) {
      if (k in a) {
        i[k] = interpolate(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }
    return function (t) {
      for (k in i) {
        c[k] = i[k](t);
      }
      return c;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");
  function zero$1(b) {
    return function () {
      return b;
    };
  }
  function one(b) {
    return function (t) {
      return b(t) + "";
    };
  }
  function string (a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0,
      // scan index for next number in b
      am,
      // current match in a
      bm,
      // current match in b
      bs,
      // string preceding current number in b, if any
      i = -1,
      // index in s
      s = [],
      // string constants and placeholders
      q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else {
        // interpolate non-matching numbers
        s[++i] = null;
        q.push({
          i: i,
          x: interpolateNumber(am, bm)
        });
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero$1(b) : (b = q.length, function (t) {
      for (var i = 0, o; i < b; ++i) {
        s[(o = q[i]).i] = o.x(t);
      }
      return s.join("");
    });
  }

  function interpolate (a, b) {
    var t = _typeof(b),
      c;
    return b == null || t === "boolean" ? constant$1(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, rgb$1) : string : b instanceof color ? rgb$1 : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
  }

  function interpolateRound (a, b) {
    return a = +a, b = +b, function (t) {
      return Math.round(a * (1 - t) + b * t);
    };
  }

  function constants(x) {
    return function () {
      return x;
    };
  }

  function number$1(x) {
    return +x;
  }

  var unit = [0, 1];
  function identity(x) {
    return x;
  }
  function normalize(a, b) {
    return (b -= a = +a) ? function (x) {
      return (x - a) / b;
    } : constants(isNaN(b) ? NaN : 0.5);
  }
  function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function (x) {
      return Math.max(a, Math.min(b, x));
    };
  }

  // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
  // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
  function bimap(domain, range, interpolate) {
    var d0 = domain[0],
      d1 = domain[1],
      r0 = range[0],
      r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function (x) {
      return r0(d0(x));
    };
  }
  function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

    // Reverse descending domains.
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r[i] = interpolate(range[i], range[i + 1]);
    }
    return function (x) {
      var i = bisectRight(domain, x, 1, j) - 1;
      return r[i](d[i](x));
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
  }
  function transformer() {
    var domain = unit,
      range = unit,
      interpolate$1 = interpolate,
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;
    function rescale() {
      var n = Math.min(domain.length, range.length);
      if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }
    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate$1)))(transform(clamp(x)));
    }
    scale.invert = function (y) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
    };
    scale.domain = function (_) {
      return arguments.length ? (domain = Array.from(_, number$1), rescale()) : domain.slice();
    };
    scale.range = function (_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function (_) {
      return range = Array.from(_), interpolate$1 = interpolateRound, rescale();
    };
    scale.clamp = function (_) {
      return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };
    scale.interpolate = function (_) {
      return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
    };
    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function (t, u) {
      transform = t, untransform = u;
      return rescale();
    };
  }
  function continuous() {
    return transformer()(identity, identity);
  }

  function nice(domain, interval) {
    domain = domain.slice();
    var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;
    if (x1 < x0) {
      t = i0, i0 = i1, i1 = t;
      t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
  }

  var t0 = new Date(),
    t1 = new Date();
  function newInterval(floori, offseti, count, field) {
    function interval(date) {
      return floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date;
    }
    interval.floor = function (date) {
      return floori(date = new Date(+date)), date;
    };
    interval.ceil = function (date) {
      return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval.round = function (date) {
      var d0 = interval(date),
        d1 = interval.ceil(date);
      return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = function (date, step) {
      return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval.range = function (start, stop, step) {
      var range = [],
        previous;
      start = interval.ceil(start);
      step = step == null ? 1 : Math.floor(step);
      if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
      do {
        range.push(previous = new Date(+start)), offseti(start, step), floori(start);
      } while (previous < start && start < stop);
      return range;
    };
    interval.filter = function (test) {
      return newInterval(function (date) {
        if (date >= date) while (floori(date), !test(date)) {
          date.setTime(date - 1);
        }
      }, function (date, step) {
        if (date >= date) {
          if (step < 0) while (++step <= 0) {
            while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
          } else while (--step >= 0) {
            while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
          }
        }
      });
    };
    if (count) {
      interval.count = function (start, end) {
        t0.setTime(+start), t1.setTime(+end);
        floori(t0), floori(t1);
        return Math.floor(count(t0, t1));
      };
      interval.every = function (step) {
        step = Math.floor(step);
        return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function (d) {
          return field(d) % step === 0;
        } : function (d) {
          return interval.count(0, d) % step === 0;
        });
      };
    }
    return interval;
  }

  var millisecond = newInterval(function () {
    // noop
  }, function (date, step) {
    date.setTime(+date + step);
  }, function (start, end) {
    return end - start;
  });

  // An optimized implementation for this simple case.
  millisecond.every = function (k) {
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0)) return null;
    if (!(k > 1)) return millisecond;
    return newInterval(function (date) {
      date.setTime(Math.floor(date / k) * k);
    }, function (date, step) {
      date.setTime(+date + step * k);
    }, function (start, end) {
      return (end - start) / k;
    });
  };

  var durationSecond = 1000;
  var durationMinute = durationSecond * 60;
  var durationHour = durationMinute * 60;
  var durationDay = durationHour * 24;
  var durationWeek = durationDay * 7;
  var durationMonth = durationDay * 30;
  var durationYear = durationDay * 365;

  var second = newInterval(function (date) {
    date.setTime(date - date.getMilliseconds());
  }, function (date, step) {
    date.setTime(+date + step * durationSecond);
  }, function (start, end) {
    return (end - start) / durationSecond;
  }, function (date) {
    return date.getUTCSeconds();
  });

  var minute = newInterval(function (date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
  }, function (date, step) {
    date.setTime(+date + step * durationMinute);
  }, function (start, end) {
    return (end - start) / durationMinute;
  }, function (date) {
    return date.getMinutes();
  });

  var hour = newInterval(function (date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
  }, function (date, step) {
    date.setTime(+date + step * durationHour);
  }, function (start, end) {
    return (end - start) / durationHour;
  }, function (date) {
    return date.getHours();
  });

  var day = newInterval(function (date) {
    return date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    return date.setDate(date.getDate() + step);
  }, function (start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
  }, function (date) {
    return date.getDate() - 1;
  });

  function weekday(i) {
    return newInterval(function (date) {
      date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
      date.setHours(0, 0, 0, 0);
    }, function (date, step) {
      date.setDate(date.getDate() + step * 7);
    }, function (start, end) {
      return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
    });
  }
  var sunday = weekday(0);
  var monday = weekday(1);
  var tuesday = weekday(2);
  var wednesday = weekday(3);
  var thursday = weekday(4);
  var friday = weekday(5);
  var saturday = weekday(6);

  var month = newInterval(function (date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setMonth(date.getMonth() + step);
  }, function (start, end) {
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
  }, function (date) {
    return date.getMonth();
  });

  var year = newInterval(function (date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setFullYear(date.getFullYear() + step);
  }, function (start, end) {
    return end.getFullYear() - start.getFullYear();
  }, function (date) {
    return date.getFullYear();
  });

  // An optimized implementation for this simple case.
  year.every = function (k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
      date.setFullYear(Math.floor(date.getFullYear() / k) * k);
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
    }, function (date, step) {
      date.setFullYear(date.getFullYear() + step * k);
    });
  };

  var utcMinute = newInterval(function (date) {
    date.setUTCSeconds(0, 0);
  }, function (date, step) {
    date.setTime(+date + step * durationMinute);
  }, function (start, end) {
    return (end - start) / durationMinute;
  }, function (date) {
    return date.getUTCMinutes();
  });

  var utcHour = newInterval(function (date) {
    date.setUTCMinutes(0, 0, 0);
  }, function (date, step) {
    date.setTime(+date + step * durationHour);
  }, function (start, end) {
    return (end - start) / durationHour;
  }, function (date) {
    return date.getUTCHours();
  });

  var utcDay = newInterval(function (date) {
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCDate(date.getUTCDate() + step);
  }, function (start, end) {
    return (end - start) / durationDay;
  }, function (date) {
    return date.getUTCDate() - 1;
  });

  function utcWeekday(i) {
    return newInterval(function (date) {
      date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
      date.setUTCHours(0, 0, 0, 0);
    }, function (date, step) {
      date.setUTCDate(date.getUTCDate() + step * 7);
    }, function (start, end) {
      return (end - start) / durationWeek;
    });
  }
  var utcSunday = utcWeekday(0);
  var utcMonday = utcWeekday(1);
  var utcTuesday = utcWeekday(2);
  var utcWednesday = utcWeekday(3);
  var utcThursday = utcWeekday(4);
  var utcFriday = utcWeekday(5);
  var utcSaturday = utcWeekday(6);

  var utcMonth = newInterval(function (date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
  }, function (start, end) {
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
  }, function (date) {
    return date.getUTCMonth();
  });

  var utcYear = newInterval(function (date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
  }, function (start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
  }, function (date) {
    return date.getUTCFullYear();
  });

  // An optimized implementation for this simple case.
  utcYear.every = function (k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
      date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
    }, function (date, step) {
      date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
  };

  function ticker(year, month, week, day, hour, minute) {
    var tickIntervals = [[second, 1, durationSecond], [second, 5, 5 * durationSecond], [second, 15, 15 * durationSecond], [second, 30, 30 * durationSecond], [minute, 1, durationMinute], [minute, 5, 5 * durationMinute], [minute, 15, 15 * durationMinute], [minute, 30, 30 * durationMinute], [hour, 1, durationHour], [hour, 3, 3 * durationHour], [hour, 6, 6 * durationHour], [hour, 12, 12 * durationHour], [day, 1, durationDay], [day, 2, 2 * durationDay], [week, 1, durationWeek], [month, 1, durationMonth], [month, 3, 3 * durationMonth], [year, 1, durationYear]];
    function ticks(start, stop, count) {
      var reverse = stop < start;
      if (reverse) {
        var _ref = [stop, start];
        start = _ref[0];
        stop = _ref[1];
      }
      var interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
      var ticks = interval ? interval.range(start, +stop + 1) : []; // inclusive stop
      return reverse ? ticks.reverse() : ticks;
    }
    function tickInterval(start, stop, count) {
      var target = Math.abs(stop - start) / count;
      var i = bisector(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 3),
          step = _ref3[2];
        return step;
      }).right(tickIntervals, target);
      if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
      if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
      var _tickIntervals = _slicedToArray(tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i], 2),
        t = _tickIntervals[0],
        step = _tickIntervals[1];
      return t.every(step);
    }
    return [ticks, tickInterval];
  }
  var _ticker = ticker(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute),
    _ticker2 = _slicedToArray(_ticker, 2),
    utcTicks = _ticker2[0],
    utcTickInterval = _ticker2[1];
  var _ticker3 = ticker(year, month, sunday, day, hour, minute),
    _ticker4 = _slicedToArray(_ticker3, 2),
    timeTicks = _ticker4[0],
    timeTickInterval = _ticker4[1];

  function localDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
      date.setFullYear(d.y);
      return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
  }
  function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
      date.setUTCFullYear(d.y);
      return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
  }
  function newDate(y, m, d) {
    return {
      y: y,
      m: m,
      d: d,
      H: 0,
      M: 0,
      S: 0,
      L: 0
    };
  }
  function formatLocale(locale) {
    var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;
    var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
      "a": formatShortWeekday,
      "A": formatWeekday,
      "b": formatShortMonth,
      "B": formatMonth,
      "c": null,
      "d": formatDayOfMonth,
      "e": formatDayOfMonth,
      "f": formatMicroseconds,
      "g": formatYearISO,
      "G": formatFullYearISO,
      "H": formatHour24,
      "I": formatHour12,
      "j": formatDayOfYear,
      "L": formatMilliseconds,
      "m": formatMonthNumber,
      "M": formatMinutes,
      "p": formatPeriod,
      "q": formatQuarter,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatSeconds,
      "u": formatWeekdayNumberMonday,
      "U": formatWeekNumberSunday,
      "V": formatWeekNumberISO,
      "w": formatWeekdayNumberSunday,
      "W": formatWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatYear,
      "Y": formatFullYear,
      "Z": formatZone,
      "%": formatLiteralPercent
    };
    var utcFormats = {
      "a": formatUTCShortWeekday,
      "A": formatUTCWeekday,
      "b": formatUTCShortMonth,
      "B": formatUTCMonth,
      "c": null,
      "d": formatUTCDayOfMonth,
      "e": formatUTCDayOfMonth,
      "f": formatUTCMicroseconds,
      "g": formatUTCYearISO,
      "G": formatUTCFullYearISO,
      "H": formatUTCHour24,
      "I": formatUTCHour12,
      "j": formatUTCDayOfYear,
      "L": formatUTCMilliseconds,
      "m": formatUTCMonthNumber,
      "M": formatUTCMinutes,
      "p": formatUTCPeriod,
      "q": formatUTCQuarter,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatUTCSeconds,
      "u": formatUTCWeekdayNumberMonday,
      "U": formatUTCWeekNumberSunday,
      "V": formatUTCWeekNumberISO,
      "w": formatUTCWeekdayNumberSunday,
      "W": formatUTCWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatUTCYear,
      "Y": formatUTCFullYear,
      "Z": formatUTCZone,
      "%": formatLiteralPercent
    };
    var parses = {
      "a": parseShortWeekday,
      "A": parseWeekday,
      "b": parseShortMonth,
      "B": parseMonth,
      "c": parseLocaleDateTime,
      "d": parseDayOfMonth,
      "e": parseDayOfMonth,
      "f": parseMicroseconds,
      "g": parseYear,
      "G": parseFullYear,
      "H": parseHour24,
      "I": parseHour24,
      "j": parseDayOfYear,
      "L": parseMilliseconds,
      "m": parseMonthNumber,
      "M": parseMinutes,
      "p": parsePeriod,
      "q": parseQuarter,
      "Q": parseUnixTimestamp,
      "s": parseUnixTimestampSeconds,
      "S": parseSeconds,
      "u": parseWeekdayNumberMonday,
      "U": parseWeekNumberSunday,
      "V": parseWeekNumberISO,
      "w": parseWeekdayNumberSunday,
      "W": parseWeekNumberMonday,
      "x": parseLocaleDate,
      "X": parseLocaleTime,
      "y": parseYear,
      "Y": parseFullYear,
      "Z": parseZone,
      "%": parseLiteralPercent
    };

    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
      return function (date) {
        var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;
        if (!(date instanceof Date)) date = new Date(+date);
        while (++i < n) {
          if (specifier.charCodeAt(i) === 37) {
            string.push(specifier.slice(j, i));
            if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
            if (format = formats[c]) c = format(date, pad);
            string.push(c);
            j = i + 1;
          }
        }
        string.push(specifier.slice(j, i));
        return string.join("");
      };
    }
    function newParse(specifier, Z) {
      return function (string) {
        var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week,
          day$1;
        if (i != string.length) return null;

        // If a UNIX timestamp is specified, return it.
        if ("Q" in d) return new Date(d.Q);
        if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

        // If this is utcParse, never use the local timezone.
        if (Z && !("Z" in d)) d.Z = 0;

        // The am-pm flag is 0 for AM, and 1 for PM.
        if ("p" in d) d.H = d.H % 12 + d.p * 12;

        // If the month was not specified, inherit from the quarter.
        if (d.m === undefined) d.m = "q" in d ? d.q : 0;

        // Convert day-of-week and week-of-year to day-of-year.
        if ("V" in d) {
          if (d.V < 1 || d.V > 53) return null;
          if (!("w" in d)) d.w = 1;
          if ("Z" in d) {
            week = utcDate(newDate(d.y, 0, 1)), day$1 = week.getUTCDay();
            week = day$1 > 4 || day$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
            week = utcDay.offset(week, (d.V - 1) * 7);
            d.y = week.getUTCFullYear();
            d.m = week.getUTCMonth();
            d.d = week.getUTCDate() + (d.w + 6) % 7;
          } else {
            week = localDate(newDate(d.y, 0, 1)), day$1 = week.getDay();
            week = day$1 > 4 || day$1 === 0 ? monday.ceil(week) : monday(week);
            week = day.offset(week, (d.V - 1) * 7);
            d.y = week.getFullYear();
            d.m = week.getMonth();
            d.d = week.getDate() + (d.w + 6) % 7;
          }
        } else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
          day$1 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
          d.m = 0;
          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$1 + 5) % 7 : d.w + d.U * 7 - (day$1 + 6) % 7;
        }

        // If a time zone is specified, all fields are interpreted as UTC and then
        // offset according to the specified time zone.
        if ("Z" in d) {
          d.H += d.Z / 100 | 0;
          d.M += d.Z % 100;
          return utcDate(d);
        }

        // Otherwise, all fields are in local time.
        return localDate(d);
      };
    }
    function parseSpecifier(d, specifier, string, j) {
      var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;
      while (i < n) {
        if (j >= m) return -1;
        c = specifier.charCodeAt(i++);
        if (c === 37) {
          c = specifier.charAt(i++);
          parse = parses[c in pads ? specifier.charAt(i++) : c];
          if (!parse || (j = parse(d, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    function parsePeriod(d, string, i) {
      var n = periodRe.exec(string.slice(i));
      return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
      var n = shortWeekdayRe.exec(string.slice(i));
      return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
      var n = weekdayRe.exec(string.slice(i));
      return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
      var n = shortMonthRe.exec(string.slice(i));
      return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
      var n = monthRe.exec(string.slice(i));
      return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
      return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
      return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
      return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
      return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
      return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
      return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
      return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
      return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
      return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
      return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
      return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
      return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
      return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
      return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
      return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
      format: function format(specifier) {
        var f = newFormat(specifier += "", formats);
        f.toString = function () {
          return specifier;
        };
        return f;
      },
      parse: function parse(specifier) {
        var p = newParse(specifier += "", false);
        p.toString = function () {
          return specifier;
        };
        return p;
      },
      utcFormat: function utcFormat(specifier) {
        var f = newFormat(specifier += "", utcFormats);
        f.toString = function () {
          return specifier;
        };
        return f;
      },
      utcParse: function utcParse(specifier) {
        var p = newParse(specifier += "", true);
        p.toString = function () {
          return specifier;
        };
        return p;
      }
    };
  }
  var pads = {
      "-": "",
      "_": " ",
      "0": "0"
    },
    numberRe = /^\s*\d+/,
    // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;
  function pad(value, fill, width) {
    var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function requote(s) {
    return s.replace(requoteRe, "\\$&");
  }
  function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
  }
  function formatLookup(names) {
    return new Map(names.map(function (name, i) {
      return [name.toLowerCase(), i];
    }));
  }
  function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
  }
  function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
  }
  function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
  }
  function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
  }
  function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
  }
  function parseQuarter(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
  }
  function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
  }
  function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
  }
  function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
  }
  function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
  }
  function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
  }
  function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
  }
  function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
  }
  function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
  }
  function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
  }
  function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
  }
  function formatDayOfMonth(d, p) {
    return pad(d.getDate(), p, 2);
  }
  function formatHour24(d, p) {
    return pad(d.getHours(), p, 2);
  }
  function formatHour12(d, p) {
    return pad(d.getHours() % 12 || 12, p, 2);
  }
  function formatDayOfYear(d, p) {
    return pad(1 + day.count(year(d), d), p, 3);
  }
  function formatMilliseconds(d, p) {
    return pad(d.getMilliseconds(), p, 3);
  }
  function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
  }
  function formatMonthNumber(d, p) {
    return pad(d.getMonth() + 1, p, 2);
  }
  function formatMinutes(d, p) {
    return pad(d.getMinutes(), p, 2);
  }
  function formatSeconds(d, p) {
    return pad(d.getSeconds(), p, 2);
  }
  function formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
  }
  function formatWeekNumberSunday(d, p) {
    return pad(sunday.count(year(d) - 1, d), p, 2);
  }
  function dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? thursday(d) : thursday.ceil(d);
  }
  function formatWeekNumberISO(d, p) {
    d = dISO(d);
    return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
  }
  function formatWeekdayNumberSunday(d) {
    return d.getDay();
  }
  function formatWeekNumberMonday(d, p) {
    return pad(monday.count(year(d) - 1, d), p, 2);
  }
  function formatYear(d, p) {
    return pad(d.getFullYear() % 100, p, 2);
  }
  function formatYearISO(d, p) {
    d = dISO(d);
    return pad(d.getFullYear() % 100, p, 2);
  }
  function formatFullYear(d, p) {
    return pad(d.getFullYear() % 10000, p, 4);
  }
  function formatFullYearISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? thursday(d) : thursday.ceil(d);
    return pad(d.getFullYear() % 10000, p, 4);
  }
  function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
  }
  function formatUTCDayOfMonth(d, p) {
    return pad(d.getUTCDate(), p, 2);
  }
  function formatUTCHour24(d, p) {
    return pad(d.getUTCHours(), p, 2);
  }
  function formatUTCHour12(d, p) {
    return pad(d.getUTCHours() % 12 || 12, p, 2);
  }
  function formatUTCDayOfYear(d, p) {
    return pad(1 + utcDay.count(utcYear(d), d), p, 3);
  }
  function formatUTCMilliseconds(d, p) {
    return pad(d.getUTCMilliseconds(), p, 3);
  }
  function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
  }
  function formatUTCMonthNumber(d, p) {
    return pad(d.getUTCMonth() + 1, p, 2);
  }
  function formatUTCMinutes(d, p) {
    return pad(d.getUTCMinutes(), p, 2);
  }
  function formatUTCSeconds(d, p) {
    return pad(d.getUTCSeconds(), p, 2);
  }
  function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
  }
  function formatUTCWeekNumberSunday(d, p) {
    return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
  }
  function UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  }
  function formatUTCWeekNumberISO(d, p) {
    d = UTCdISO(d);
    return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
  }
  function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
  }
  function formatUTCWeekNumberMonday(d, p) {
    return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
  }
  function formatUTCYear(d, p) {
    return pad(d.getUTCFullYear() % 100, p, 2);
  }
  function formatUTCYearISO(d, p) {
    d = UTCdISO(d);
    return pad(d.getUTCFullYear() % 100, p, 2);
  }
  function formatUTCFullYear(d, p) {
    return pad(d.getUTCFullYear() % 10000, p, 4);
  }
  function formatUTCFullYearISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
    return pad(d.getUTCFullYear() % 10000, p, 4);
  }
  function formatUTCZone() {
    return "+0000";
  }
  function formatLiteralPercent() {
    return "%";
  }
  function formatUnixTimestamp(d) {
    return +d;
  }
  function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
  }

  var locale;
  var timeFormat;
  var timeParse;
  var utcFormat;
  var utcParse;
  defaultLocale({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  function defaultLocale(definition) {
    locale = formatLocale(definition);
    timeFormat = locale.format;
    timeParse = locale.parse;
    utcFormat = locale.utcFormat;
    utcParse = locale.utcParse;
    return locale;
  }

  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
  function formatIsoNative(date) {
    return date.toISOString();
  }
  var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

  function parseIsoNative(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  }
  var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

  function date$1(t) {
    return new Date(t);
  }
  function number$2(t) {
    return t instanceof Date ? +t : +new Date(+t);
  }
  function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
    var scale = continuous(),
      invert = scale.invert,
      domain = scale.domain;
    var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");
    function tickFormat(date) {
      return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    scale.invert = function (y) {
      return new Date(invert(y));
    };
    scale.domain = function (_) {
      return arguments.length ? domain(Array.from(_, number$2)) : domain().map(date$1);
    };
    scale.ticks = function (interval) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
    };
    scale.tickFormat = function (count, specifier) {
      return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function (interval) {
      var d = domain();
      if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
      return interval ? domain(nice(d, interval)) : scale;
    };
    scale.copy = function () {
      return copy(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
    };
    return scale;
  }
  function time() {
    return initRange.apply(calendar(timeTicks, timeTickInterval, year, month, sunday, day, hour, minute, second, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
  }

  // second, minute, hour, day, week, month, quarter, year
  var aggregateFormats = {
    second: '%Y-%m-%d %H:%M:%S',
    minute: '%Y-%m-%d %H:%M',
    hour: '%Y-%m-%d %H:00',
    day: '%Y-%m-%d',
    week: '%Y week %W',
    month: '%Y-%m',
    quarter: '%Y-Q%Q',
    year: '%Y'
  };

  function api (methods) {
    function methodChainer(wrapper, method) {
      return function (d) {
        method(d);
        return wrapper;
      };
    }
    return Object.keys(methods).reduce(function (API, methodName) {
      API[methodName] = methodChainer(API, methods[methodName]);
      return API;
    }, {});
  }

  var cssPrefix = 'milestones';
  var cssCategoryClass = cssPrefix + '__category_label';
  var cssHorizontalLineClass = cssPrefix + '__horizontal_line';
  var cssVerticalLineClass = cssPrefix + '__vertical_line';
  var cssGroupClass = cssPrefix + '__group';
  var cssBulletClass = cssGroupClass + '__bullet';
  var cssLabelClass = cssGroupClass + '__label';
  var cssLastClass = cssLabelClass + '-last';
  var cssAboveClass = cssLabelClass + '-above';
  var cssBelowClass = cssLabelClass + '-below';
  var cssTextClass = cssLabelClass + '__text';
  var cssTitleClass = cssTextClass + '__title';
  var cssEventClass = cssTextClass + '__event';
  var cssEventHoverClass = cssEventClass + '--hover';

  var DEFAULTS = {
    DISTRIBUTION: 'top-bottom',
    OPTIMIZE: false,
    ORIENTATION: 'horizontal',
    MAPPING: {
      category: undefined,
      entries: undefined,
      timestamp: 'timestamp',
      text: 'text',
      url: 'url',
      textStyle: 'textStyle',
      titleStyle: 'titleStyle'
    },
    LABEL_FORMAT: '%Y-%m-%d %H:%M',
    USE_LABELS: true,
    AGGREGATE_BY: 'minute',
    AUTO_RESIZE: true,
    URL_TARGET: '_self'
  };

  function isAbove(i, distribution) {
    var above = i % 2;
    if (distribution === 'top') {
      above = true;
    } else if (distribution === 'bottom') {
      above = false;
    }
    return above > 0;
  }

  var prefix = "$";
  function Map$1() {}
  Map$1.prototype = map.prototype = {
    constructor: Map$1,
    has: function has(key) {
      return prefix + key in this;
    },
    get: function get(key) {
      return this[prefix + key];
    },
    set: function set(key, value) {
      this[prefix + key] = value;
      return this;
    },
    remove: function remove(key) {
      var property = prefix + key;
      return property in this && delete this[property];
    },
    clear: function clear() {
      for (var property in this) {
        if (property[0] === prefix) delete this[property];
      }
    },
    keys: function keys() {
      var keys = [];
      for (var property in this) {
        if (property[0] === prefix) keys.push(property.slice(1));
      }
      return keys;
    },
    values: function values() {
      var values = [];
      for (var property in this) {
        if (property[0] === prefix) values.push(this[property]);
      }
      return values;
    },
    entries: function entries() {
      var entries = [];
      for (var property in this) {
        if (property[0] === prefix) entries.push({
          key: property.slice(1),
          value: this[property]
        });
      }
      return entries;
    },
    size: function size() {
      var size = 0;
      for (var property in this) {
        if (property[0] === prefix) ++size;
      }
      return size;
    },
    empty: function empty() {
      for (var property in this) {
        if (property[0] === prefix) return false;
      }
      return true;
    },
    each: function each(f) {
      for (var property in this) {
        if (property[0] === prefix) f(this[property], property.slice(1), this);
      }
    }
  };
  function map(object, f) {
    var map = new Map$1();

    // Copy constructor.
    if (object instanceof Map$1) object.each(function (value, key) {
      map.set(key, value);
    });

    // Index array by numeric index or specified key function.
    else if (Array.isArray(object)) {
      var i = -1,
        n = object.length,
        o;
      if (f == null) while (++i < n) {
        map.set(i, object[i]);
      } else while (++i < n) {
        map.set(f(o = object[i], i, object), o);
      }
    }

    // Convert object to map.
    else if (object) for (var key in object) {
      map.set(key, object[key]);
    }
    return map;
  }

  function nest () {
    var keys = [],
      _sortKeys = [],
      _sortValues,
      _rollup,
      nest;
    function apply(array, depth, createResult, setResult) {
      if (depth >= keys.length) {
        if (_sortValues != null) array.sort(_sortValues);
        return _rollup != null ? _rollup(array) : array;
      }
      var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = map(),
        values,
        result = createResult();
      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
          values.push(value);
        } else {
          valuesByKey.set(keyValue, [value]);
        }
      }
      valuesByKey.each(function (values, key) {
        setResult(result, key, apply(values, depth, createResult, setResult));
      });
      return result;
    }
    function _entries(map, depth) {
      if (++depth > keys.length) return map;
      var array,
        sortKey = _sortKeys[depth - 1];
      if (_rollup != null && depth >= keys.length) array = map.entries();else array = [], map.each(function (v, k) {
        array.push({
          key: k,
          values: _entries(v, depth)
        });
      });
      return sortKey != null ? array.sort(function (a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }
    return nest = {
      object: function object(array) {
        return apply(array, 0, createObject, setObject);
      },
      map: function map(array) {
        return apply(array, 0, createMap, setMap);
      },
      entries: function entries(array) {
        return _entries(apply(array, 0, createMap, setMap), 0);
      },
      key: function key(d) {
        keys.push(d);
        return nest;
      },
      sortKeys: function sortKeys(order) {
        _sortKeys[keys.length - 1] = order;
        return nest;
      },
      sortValues: function sortValues(order) {
        _sortValues = order;
        return nest;
      },
      rollup: function rollup(f) {
        _rollup = f;
        return nest;
      }
    };
  }
  function createObject() {
    return {};
  }
  function setObject(object, key, value) {
    object[key] = value;
  }
  function createMap() {
    return map();
  }
  function setMap(map, key, value) {
    map.set(key, value);
  }

  function Set() {}
  var proto = map.prototype;
  Set.prototype = set.prototype = {
    constructor: Set,
    has: proto.has,
    add: function add(value) {
      value += "";
      this[prefix + value] = value;
      return this;
    },
    remove: proto.remove,
    clear: proto.clear,
    values: proto.keys,
    size: proto.size,
    empty: proto.empty,
    each: proto.each
  };
  function set(object, f) {
    var set = new Set();

    // Copy constructor.
    if (object instanceof Set) object.each(function (value) {
      set.add(value);
    });

    // Otherwise, assume it’s an array.
    else if (object) {
      var i = -1,
        n = object.length;
      if (f == null) while (++i < n) {
        set.add(object[i]);
      } else while (++i < n) {
        set.add(f(object[i], i, object));
      }
    }
    return set;
  }

  var LABEL_MIN_WIDTH = {
    horizontal: 60,
    vertical: 30
  };
  var ADJUST_PIXEL_STEP = 10;
  var DEBUG_CHART = false;
  var getDebugCanvasContext = function getDebugCanvasContext(width, height, marginBottom) {
    return;
  };
  var getTextWidth = function getTextWidth(el, isHorizontal) {
    var range = document.createRange();
    var text = el.childNodes[0];
    range.setStartBefore(text);
    range.setEndAfter(text);
    var clientRect = range.getBoundingClientRect();
    return Math.max(LABEL_MIN_WIDTH[isHorizontal ? 'horizontal' : 'vertical'], Math.round(clientRect.width));
  };
  var getParentElement = function getParentElement(domElement) {
    return domElement.select(function () {
      return this.parentNode;
    });
  };
  var getBitmap = function getBitmap(width, height, rects, nodes, isHorizontal) {
    var bitmap = Array.from({
      length: height
    }, function () {
      return Array.from({
        length: width
      }, function () {
        return false;
      });
    });
    var _iterator = _createForOfIteratorHelper(rects),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var rect = _step.value;
        var bitmapIndex = rect.index + 1;
        var rectWidth = isHorizontal ? rect.width : rect.height;
        var rectHeight = isHorizontal ? rect.height : rect.width;
        var rX = Math.round(rect.offset - (rect.backwards ? rectWidth : 0));
        var rY = Math.round(bitmap.length - rectHeight - (rect.padding !== undefined ? rect.padding : 0));

        // const textWidth = getTextWidth(nodes[rect.index][0], isHorizontal);
        var rW = Math.round(rectWidth);
        var rH = Math.round(rectHeight);
        var _iterator2 = _createForOfIteratorHelper(Array(rH).fill(true).entries()),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 1),
              rowI = _step2$value[0];
            var _iterator4 = _createForOfIteratorHelper(Array(rW).fill(true).entries()),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _step4$value = _slicedToArray(_step4.value, 1),
                  colI = _step4$value[0];
                if (bitmap[rY + rowI - 1] && bitmap[rY + rowI - 1][rX + colI - 1] !== undefined) {
                  bitmap[rY + rowI - 1][rX + colI - 1] = bitmap[rY + rowI - 1][rX + colI - 1] === false ? bitmapIndex : true;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var columnHeight = Math.floor(rect.padding !== undefined ? rect.padding : 0);
        var _iterator3 = _createForOfIteratorHelper(Array(columnHeight).fill(true).entries()),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 1),
              _rowI = _step3$value[0];
            if (bitmap[rY + rH + _rowI - 1]) {
              if (!rect.backwards && bitmap[rY + rH + _rowI - 1][rX - 1] !== undefined) {
                bitmap[rY + rH + _rowI - 1][rX - 1] = bitmap[rY + rH + _rowI - 1][rX - 1] === false ? bitmapIndex : true;
              } else if (rect.backwards && bitmap[rY + rH + _rowI - 1][rX + rW - 2] !== undefined) {
                bitmap[rY + rH + _rowI - 1][rX + rW - 2] = bitmap[rY + rH + _rowI - 1][rX + rW - 2] === false ? bitmapIndex : true;
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return bitmap;
  };
  var optimize = function optimize(aggregateFormatParse, distribution, labelMaxWidth, mapping, nestedData, orientation, textMerge, width, x) {
    {
      console.time('optimize');
    }
    var isHorizontal = orientation === 'horizontal';
    var heightAttr = isHorizontal ? 'height' : 'width';
    var widthAttr = isHorizontal ? 'width' : 'height';
    var paddingAbove = isHorizontal ? 'padding-bottom' : 'padding-right';
    var paddingBelow = isHorizontal ? 'padding-top' : 'padding-left';
    var nestedNodes = nest().key(function (d) {
      return selectAll(d).data()[0].timelineIndex;
    }).entries(textMerge._groups);
    var _iterator5 = _createForOfIteratorHelper(nestedNodes),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var timeline = _step5.value;
        // get all upper nodes
        var aboveNodes = timeline.values.filter(function (tn) {
          return getParentElement(select(tn[0])).classed("".concat(cssAboveClass, "-").concat(orientation));
        });

        // get all lower nodes
        var belowNodes = timeline.values.filter(function (tn) {
          return getParentElement(select(tn[0])).classed("".concat(cssBelowClass, "-").concat(orientation));
        });
        var optimizeLayout = function optimizeLayout(nodes, isAbove) {
          var orangeCount = 1;
          var iterations = 0;
          var padding = isAbove ? paddingAbove : paddingBelow;

          // reset padding and "last" class before starting the optimization
          var _iterator6 = _createForOfIteratorHelper(nodes),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var node = _step6.value;
              var parentElement = getParentElement(selectAll(node));
              parentElement.attr('data-adjusted', false);
              parentElement.classed("".concat(cssLastClass, "-").concat(orientation), false);
              parentElement.style(padding, isHorizontal ? '0px' : '10px');
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          var _loop = function _loop() {
            console.log('iteration', iterations);
            // debugger;
            orangeCount = 0;
            iterations++;
            var totalHeight = 0;
            var maxHeight = 0;
            var boundingsRects = Array(nodes.length);
            var _iterator7 = _createForOfIteratorHelper(nodes.entries()),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _step7$value = _slicedToArray(_step7.value, 2),
                  i = _step7$value[0],
                  _node = _step7$value[1];
                var item = selectAll(_node).data()[0];
                var _parentElement = getParentElement(selectAll(_node));
                var _backwards = _parentElement.classed("".concat(cssLastClass, "-").concat(orientation));
                var paddingPx = _parentElement.style(padding);
                var adjusted = _parentElement.attr('data-adjusted');
                var offset = x(aggregateFormatParse(item.key));
                var boundingRect = select(_node[0]).node().getBoundingClientRect();
                boundingRect.padding = parseFloat(paddingPx.split('px')[0]);
                boundingRect.backwards = _backwards;
                boundingRect.text = item.key;
                boundingRect.index = i;
                boundingRect.offset = offset;
                boundingRect.adjusted = adjusted === 'true';
                boundingsRects[i] = boundingRect;
                totalHeight = Math.max(totalHeight, boundingRect[heightAttr] + boundingRect.padding);
                maxHeight = Math.max(maxHeight, boundingRect[heightAttr]);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
            totalHeight = totalHeight * 2;
            orangeCount = boundingsRects.reduce(function (p, c) {
              return p + (isHorizontal && c[widthAttr] < LABEL_MIN_WIDTH[orientation]) || !isHorizontal && !c.adjusted ? 1 : 0;
            }, 0);

            // create bitmap of all elements
            var bitmapWidth = width;
            var bitmapHeight = totalHeight;
            var bitmapMarginBottom = Math.round(isHorizontal ? maxHeight : 0);
            var bitmap = getBitmap(bitmapWidth, bitmapHeight, boundingsRects, nodes, isHorizontal);
            var ctx = getDebugCanvasContext(bitmapWidth, bitmapHeight, bitmapMarginBottom);
            var lowestOrange = void 0;
            var side = void 0;
            var lowestGreen = boundingsRects.reduce(function (p, c) {
              var pHeight = p ? p[heightAttr] + p.padding : Number.POSITIVE_INFINITY;
              if (c[widthAttr] < LABEL_MIN_WIDTH[orientation]) return p;
              if (pHeight < c[heightAttr] + c.padding) return p;
              var leftEl = boundingsRects.find(function (d) {
                return d.index === c.index - 1 && (isHorizontal && d[widthAttr] < LABEL_MIN_WIDTH[orientation] || !isHorizontal && d.adjusted === false);
              });
              var rightEl = boundingsRects.find(function (d) {
                return d.index === c.index + 1 && (isHorizontal && (d[widthAttr] < LABEL_MIN_WIDTH[orientation] || !d.backwards && d.offset + d[widthAttr] > width) || !isHorizontal && d.adjusted === false);
              });
              return leftEl !== undefined || rightEl !== undefined ? c : p;
            }, undefined);
            if (lowestGreen !== undefined) {
              lowestOrange = undefined;
              // get an eventual orange element left of the green one
              if (lowestGreen.index > 0) {
                lowestOrange = boundingsRects.find(function (d) {
                  return d.index === lowestGreen.index - 1 && (isHorizontal && d[widthAttr] < LABEL_MIN_WIDTH[orientation] || !isHorizontal && d.adjusted === false);
                });
                side = 'before';
              }

              // get an eventual orange element right of the green one
              if (lowestOrange === undefined && lowestGreen.index < boundingsRects.length) {
                var checkOrange = boundingsRects.find(function (d) {
                  return d.index === lowestGreen.index + 1 && (isHorizontal && (d[widthAttr] < LABEL_MIN_WIDTH[orientation] || !d.backwards && d.offset + d[widthAttr] > width) || !isHorizontal && d.adjusted === false);
                });
                if (lowestOrange === undefined || checkOrange !== undefined && lowestOrange[heightAttr] + lowestOrange.padding > checkOrange[heightAttr] + checkOrange.padding) {
                  lowestOrange = checkOrange;
                  side = 'after';
                }
              }
              if (lowestOrange !== undefined) {
                var overlap = true;
                var resizeIterations = 0;
                var newTestWidth = labelMaxWidth;
                var newYOffset = 0;
                while (overlap === true && resizeIterations < 1000) {
                  resizeIterations++;
                  var loVolume = lowestOrange[widthAttr] * lowestOrange[heightAttr];
                  var newHeight = Math.max(20, Math.round(loVolume / newTestWidth));
                  var newX = Math.round(side === 'before' ? lowestOrange.offset : lowestOrange.offset - newTestWidth - 2);
                  var newY = Math.round(bitmapHeight - newYOffset - newHeight);
                  var newWidth = Math.round(newTestWidth);
                  if (DEBUG_CHART && ctx) {
                    ctx.fillStyle = "rgba(192,0,128,0.1)";
                    ctx.fillRect(newX, newY, newWidth, newHeight);
                    ctx.fillStyle = "rgba(0,0,0,1)";
                    ctx.fillText(lowestOrange.text, newX + 5, newY + 5);
                  }
                  overlap = false;
                  if (newX + newWidth > width && side === 'after') {
                    overlap = true;
                  } else if (newX < 0) {
                    overlap = true;
                  } else {
                    var _iterator8 = _createForOfIteratorHelper(Array(newHeight).fill(true).entries()),
                      _step8;
                    try {
                      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                        var _step8$value = _slicedToArray(_step8.value, 1),
                          rowI = _step8$value[0];
                        var _iterator9 = _createForOfIteratorHelper(Array(newWidth).fill(true).entries()),
                          _step9;
                        try {
                          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                            var _step9$value = _slicedToArray(_step9.value, 1),
                              colI = _step9$value[0];
                            if (bitmap[newY + rowI - 1] !== undefined && bitmap[newY + rowI - 1][newX + colI] !== false && bitmap[newY + rowI - 1][newX + colI] !== lowestOrange.index + 1) {
                              overlap = true;
                              break;
                            }
                          }
                        } catch (err) {
                          _iterator9.e(err);
                        } finally {
                          _iterator9.f();
                        }
                        if (overlap) {
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator8.e(err);
                    } finally {
                      _iterator8.f();
                    }
                  }
                  if (overlap) {
                    if (newTestWidth - ADJUST_PIXEL_STEP > LABEL_MIN_WIDTH[orientation]) {
                      newTestWidth -= ADJUST_PIXEL_STEP;
                    } else {
                      newTestWidth = labelMaxWidth;
                      newYOffset += ADJUST_PIXEL_STEP;
                    }
                  }
                }
                var backwards = side === 'after';
                var domElement = getParentElement(select(nodes[lowestOrange.index][0]));
                domElement.attr('data-adjusted', true);
                domElement.classed("".concat(cssLastClass, "-").concat(orientation), backwards);
                newYOffset = isHorizontal ? newYOffset : newYOffset + 10;
                domElement.style(padding, "".concat(newYOffset, "px"));

                // apply the new width to parent and text element
                var widthOffset = isHorizontal ? 5 : 0;
                domElement.style(widthAttr, "".concat(newTestWidth + widthOffset, "px"));
                select(nodes[lowestOrange.index][0]).style(widthAttr, "".concat(newTestWidth, "px"));

                // shrink the width to fit the text
                var shrinkedWidth = isHorizontal ? getTextWidth(nodes[lowestOrange.index][0]) : parseFloat(domElement.select('.wrapper').style('height').split('px')[0]);
                if (shrinkedWidth + widthOffset < newTestWidth) {
                  domElement.style(widthAttr, "".concat(shrinkedWidth + (isHorizontal ? 10 : 0), "px"));
                  select(nodes[lowestOrange.index][0]).style(widthAttr, "".concat(shrinkedWidth + widthOffset, "px"));
                }
                boundingsRects[lowestOrange.index].padding = lowestGreen[heightAttr] + lowestGreen.padding;
              }
            }
            if (DEBUG_CHART && ctx && bitmap) {
              var alpha = 0.3;
              ctx.fillStyle = "rgba(0,192,128,".concat(alpha, ")");
              bitmap.forEach(function (row, yIndex) {
                row.forEach(function (pixel, xIndex) {
                  if (pixel) {
                    if (lowestOrange === undefined || pixel !== lowestOrange.index + 1) {
                      ctx.fillStyle = "rgba(0,".concat(50 + pixel * 10, ",128,").concat(alpha, ")");
                    } else if (typeof pixel !== 'boolean' && boundingsRects[pixel - 1][widthAttr] < LABEL_MIN_WIDTH[orientation]) {
                      ctx.fillStyle = "rgba(255,0,0,".concat(alpha, ")");
                    } else {
                      ctx.fillStyle = "rgba(255,128,0,".concat(alpha, ")");
                    }
                    ctx.fillRect(xIndex, yIndex, 1, 1);
                  }
                });
              });
              if (lowestGreen === undefined) {
                var _iterator0 = _createForOfIteratorHelper(boundingsRects),
                  _step0;
                try {
                  for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
                    var rect = _step0.value;
                    var _alpha = 0.3 + rect[heightAttr] / maxHeight * 0.9;
                    if (rect[widthAttr] >= LABEL_MIN_WIDTH[orientation]) {
                      ctx.fillStyle = "rgba(0,192,128,".concat(_alpha, ")");
                    } else {
                      ctx.fillStyle = "rgba(255,128,0,".concat(_alpha, ")");
                    }
                    var fillRectX = rect.offset - (rect.backwards ? rect[widthAttr] : 0);
                    var fillRectY = bitmapHeight - rect[heightAttr] - (rect.padding !== undefined ? rect.padding : 0);
                    ctx.fillRect(fillRectX, fillRectY, rect[widthAttr], rect[heightAttr]);
                    ctx.fillStyle = "rgba(0,0,0,1)";
                    ctx.fillText(rect.text, fillRectX + 5, fillRectY + 5);
                  }
                } catch (err) {
                  _iterator0.e(err);
                } finally {
                  _iterator0.f();
                }
              }
            }

            // if all orange elements are resolved, do another overlap test.
            if (orangeCount === 0) {
              var _iterator1 = _createForOfIteratorHelper(boundingsRects),
                _step1;
              try {
                for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                  var _rect = _step1.value;
                  if (DEBUG_CHART && ctx) {
                    ctx.clearRect(0, 0, bitmapWidth, bitmapHeight);
                  }
                  var _overlap = true;
                  var overlapRemovalIterations = 0;
                  var rX = Math.round(_rect.offset - (_rect.backwards ? _rect[widthAttr] : 0));
                  var rY = Math.round(bitmapHeight - _rect[heightAttr] - (_rect.padding !== undefined ? _rect.padding : 0));
                  var rW = Math.round(_rect[widthAttr]);
                  var rH = Math.round(_rect[heightAttr]);
                  if (DEBUG_CHART && ctx) {
                    (function () {
                      var alpha = 0.3;
                      bitmap.forEach(function (row, yIndex) {
                        row.forEach(function (pixel, xIndex) {
                          if (pixel) {
                            ctx.fillStyle = "rgba(0,".concat(50 + pixel * 10, ",128,").concat(alpha, ")");
                            ctx.fillRect(xIndex, yIndex, 1, 1);
                          }
                        });
                      });
                    })();
                  }
                  // debugger;

                  while (_overlap === true && overlapRemovalIterations < 1000) {
                    overlapRemovalIterations++;
                    _overlap = false;
                    var _iterator10 = _createForOfIteratorHelper(Array(rH).fill(true).entries()),
                      _step10;
                    try {
                      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                        var _step10$value = _slicedToArray(_step10.value, 1),
                          _rowI3 = _step10$value[0];
                        var _iterator12 = _createForOfIteratorHelper(Array(rW).fill(true).entries()),
                          _step12;
                        try {
                          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                            var _step12$value = _slicedToArray(_step12.value, 1),
                              _colI = _step12$value[0];
                            if (bitmap[rY + _rowI3 - 1] && bitmap[rY + _rowI3 - 1][rX + _colI] !== false && bitmap[rY + _rowI3 - 1][rX + _colI] !== _rect.index + 1) {
                              _overlap = true;
                              break;
                            }
                          }
                        } catch (err) {
                          _iterator12.e(err);
                        } finally {
                          _iterator12.f();
                        }
                        if (_overlap) {
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator10.e(err);
                    } finally {
                      _iterator10.f();
                    }
                    if (!_overlap) {
                      var columnHeight = Math.floor(_rect.padding !== undefined ? _rect.padding : 0);
                      var _iterator11 = _createForOfIteratorHelper(Array(columnHeight).fill(true).entries()),
                        _step11;
                      try {
                        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                          var _step11$value = _slicedToArray(_step11.value, 1),
                            _rowI2 = _step11$value[0];
                          if (bitmap[rY + rH + _rowI2 - 1]) {
                            if (!_rect.backwards && bitmap[rY + rH + _rowI2 - 1][rX] !== false && bitmap[rY + rH + _rowI2 - 1][rX] !== _rect.index + 1) {
                              _overlap = true;
                              break;
                            } else if (_rect.backwards && bitmap[rY + rH + _rowI2 - 1][rX + rW - 1] !== false && bitmap[rY + rH + _rowI2 - 1][rX + rW - 1] !== _rect.index + 1) {
                              _overlap = true;
                              break;
                            }
                          }
                        }
                      } catch (err) {
                        _iterator11.e(err);
                      } finally {
                        _iterator11.f();
                      }
                    }
                    if (_overlap) {
                      _overlap = false;
                      orangeCount++;
                      var _domElement = getParentElement(select(nodes[_rect.index][0]));
                      _domElement.attr('data-adjusted', false);
                      _domElement.classed("".concat(cssLastClass, "-").concat(orientation), false);
                      // domElement.style(padding, `0px`);

                      // apply the new width to parent and text element
                      var _widthOffset = isHorizontal ? 5 : 0;
                      _domElement.style(widthAttr, "".concat(LABEL_MIN_WIDTH[orientation] - 10 + _widthOffset, "px"));
                      select(nodes[_rect.index][0]).style(widthAttr, "".concat(LABEL_MIN_WIDTH[orientation] - 10, "px"));
                      boundingsRects[_rect.index].padding = 0;
                    }
                  }
                }
              } catch (err) {
                _iterator1.e(err);
              } finally {
                _iterator1.f();
              }
            }
          };
          while (orangeCount > 0 && iterations < nodes.length + 10) {
            _loop();
          }
        };
        optimizeLayout(aboveNodes, true);
        optimizeLayout(belowNodes, false);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    {
      console.timeEnd('optimize');
    }
  };

  function timeFormat$1(f) {
    if (f === '%Y-Q%Q') {
      var quarterFormatter = timeFormat(aggregateFormats.month);
      return function (d) {
        var formattedDate = quarterFormatter(d);
        var month = formattedDate.split('-')[1];
        var quarter = Math.ceil(parseInt(month) / 3);
        return formattedDate.split('-')[0] + '-Q' + quarter;
      };
    }
    return timeFormat(f);
  }

  function timeParse$1(f) {
    if (f === '%Y-Q%Q') {
      var quarterParser = timeParse(aggregateFormats.month);
      return function (d) {
        if (d.search('-Q') === -1) {
          var quarter = Math.ceil(parseInt(d.split('-')[1]) / 3);
          var quarterFirstMonthAsString = quarter * 3 - 2 + '';
          var quarterFirstMonthLeadingZero = quarterFirstMonthAsString.length < 2 ? '0' + quarterFirstMonthAsString : quarterFirstMonthAsString;
          return quarterParser(d.split('-')[0] + '-' + quarterFirstMonthLeadingZero);
        } else {
          var monthAsString = parseInt(d.split('-')[1][1]) * 3 + '';
          var monthLeadingZero = monthAsString.length < 2 ? '0' + monthAsString : monthAsString;
          return quarterParser(d.split('-')[0] + '-' + monthLeadingZero);
        }
      };
    }
    return timeParse(f);
  }

  function transform(aggregateFormat, data, mapping, parseTime) {
    var groupBy = function groupBy(d) {
      return aggregateFormat(parseTime(d[mapping.timestamp]));
    };

    // test for different data structures
    if (typeof mapping.category !== 'undefined' && typeof mapping.entries !== 'undefined') {
      data = data.map(function (timeline, timelineIndex) {
        return {
          category: timeline[mapping.category],
          entries: getNestedEntries(timeline[mapping.entries], timelineIndex)
        };
      });
      return data;
    } else if (typeof data !== 'undefined' && !Array.isArray(data[0])) {
      data = [data];
    }
    function getNestedEntries(t, tI) {
      var nested = nest().key(groupBy).sortKeys(ascending$1).entries(t);
      return nested.map(function (d, dI) {
        d.index = dI;
        d.timelineIndex = tI;
        return d;
      });
    }
    return data.map(function (t, tI) {
      return getNestedEntries(t, tI);
    });
  }

  function milestones(selector) {
    var distribution = DEFAULTS.DISTRIBUTION;
    function setDistribution(d) {
      distribution = d;
    }
    var optimizeLayout = DEFAULTS.OPTIMIZE;
    function setOptimizeLayout(d) {
      optimizeLayout = d;
    }
    var orientation = DEFAULTS.ORIENTATION;
    function setOrientation(d) {
      orientation = d;
      // purge the DOM to avoid layout issues when switching orientation
      select(selector).html('');
    }
    var parseTime = parseIso;
    function setParseTime(d) {
      parseTime = timeParse$1(d);
    }
    var mapping = Object.assign({}, DEFAULTS.MAPPING);
    function assignMapping(d) {
      mapping = Object.assign({}, mapping, d);
    }
    var labelFormat;
    function setLabelFormat(d) {
      labelFormat = timeFormat$1(d);
    }
    setLabelFormat(DEFAULTS.LABEL_FORMAT);
    var range;
    function setRange(d) {
      if (Array.isArray(d) && d.length == 2) {
        range = d;
      }
    }
    var useLabels;
    function setUseLabels(d) {
      useLabels = d;
    }
    setUseLabels(DEFAULTS.USE_LABELS);
    var urlTarget;
    function setUrlTarget(d) {
      if (typeof d === 'string' && ['_blank', '_self', '_parent', '_top'].includes(d.toLowerCase())) {
        urlTarget = d;
      }
    }
    setUrlTarget(DEFAULTS.URL_TARGET);

    // set callback for event mouseover
    var callBackMouseOver;
    function setEventMouseOverCallback(callback) {
      callBackMouseOver = callback;
    }
    function eventMouseOver(d) {
      if (typeof callBackMouseOver === 'function') {
        select(this).classed(cssEventHoverClass, true);
        callBackMouseOver(d);
      }
      return d;
    }

    // set callback for event mouseleave
    var callBackMouseLeave;
    function setEventMouseLeaveCallback(callback) {
      callBackMouseLeave = callback;
    }
    function eventMouseLeave(d) {
      if (typeof callBackMouseOver === 'function') {
        select(this).classed(cssEventHoverClass, false);
        callBackMouseLeave(d);
      }
      return d;
    }

    // set callback for event click
    var callbackClick;
    function setEventClickCallback(callback) {
      callbackClick = callback;
    }
    function eventClick(d) {
      if (typeof callbackClick === 'function') {
        callbackClick(d);
      }
      return d;
    }
    var aggregateFormat = timeFormat$1(aggregateFormats[DEFAULTS.AGGREGATE_BY]);
    var aggregateFormatParse = timeParse$1(aggregateFormats[DEFAULTS.AGGREGATE_BY]);
    function setAggregateBy(d) {
      aggregateFormat = timeFormat$1(aggregateFormats[d]);
      aggregateFormatParse = timeParse$1(aggregateFormats[d]);
      setLabelFormat(aggregateFormats[d]);
    }
    var autoResize = {
      current: DEFAULTS.AUTO_RESIZE
    };
    var resizeHandler = function resizeHandler() {
      if (select(selector).node() !== null) {
        window.requestAnimationFrame(function () {
          if (autoResize.current) {
            render();
          }
        });
      }
    };
    var resizeObserver = new ResizeObserver(resizeHandler);
    resizeObserver.observe(typeof selector === 'string' ? document.querySelector(selector) : selector);
    function setAutoResize(d) {
      autoResize.current = d;
    }
    function render(data) {
      var widthAttribute = orientation === 'horizontal' ? 'width' : 'height';
      var marginTimeAttribute = orientation === 'horizontal' ? 'margin-left' : 'margin-top';
      var cssLineClass = orientation === 'horizontal' ? cssHorizontalLineClass : cssVerticalLineClass;
      var labelMaxWidth = orientation === 'horizontal' ? 180 : 180;
      var timelineSelection = select(selector).selectAll('.' + cssPrefix);
      var nestedData = typeof data !== 'undefined' ? transform(aggregateFormat, data, mapping, parseTime) : timelineSelection.data();
      var timeline = timelineSelection.data(nestedData);
      var timelineEnter = timeline.enter().append('div').attr('class', cssPrefix);
      timeline.exit().remove();

      // rightMargin compensates for the right most bullet position
      var rightMargin = 11;
      var selectorWidth = parseFloat(select(selector).style(widthAttribute)) - rightMargin;
      if (typeof mapping.category !== 'undefined') {
        timelineEnter.append('div').attr('class', cssCategoryClass).text(function (d) {
          return d.category;
        });
        timelineEnter.append('div').attr('class', 'data-js-timeline').append('div').attr('class', cssLineClass);
      } else {
        timelineEnter.append('div').attr('class', cssLineClass);
      }
      var timelineMerge = timeline.merge(timelineEnter);
      var categoryLabelWidths = [];
      var categoryLabels = timelineMerge.selectAll('.' + cssCategoryClass);
      categoryLabels.each(function (d, i, node) {
        categoryLabelWidths.push(node[i].offsetWidth);
      });
      var maxCategoryLabelWidth = Math.round(max(categoryLabelWidths) || 0);
      var timelineLeftMargin = 10;
      var width = selectorWidth - maxCategoryLabelWidth - timelineLeftMargin;
      categoryLabels.style('width', maxCategoryLabelWidth + 'px');
      if (orientation === 'vertical') {
        categoryLabels.style('margin-left', '-50%');
        categoryLabels.style('text-align', 'center');
      }
      timelineMerge.selectAll('.data-js-timeline').style(marginTimeAttribute, maxCategoryLabelWidth + timelineLeftMargin + 'px');
      timelineMerge.selectAll('.' + cssLineClass).style(widthAttribute, width + 'px');
      var groupSelector = typeof mapping.category === 'undefined' ? timelineMerge : timelineMerge.selectAll('.data-js-timeline');
      var groupSelection = groupSelector.selectAll('.' + cssGroupClass);
      var group = groupSelection.data(function (d) {
        return typeof mapping.category === 'undefined' ? d : d.entries;
      });
      var allKeys = nestedData.reduce(function (keys, timeline) {
        var t = typeof mapping.category === 'undefined' ? timeline : timeline.entries;
        t.map(function (d) {
          return keys.push(d.key);
        });
        return keys;
      }, []);
      var domain = typeof range !== 'undefined' ? range.map(aggregateFormatParse) : extent(allKeys, function (d) {
        return aggregateFormatParse(d);
      });
      var x = time().rangeRound([0, width])
      // sets oldest and newest date as the scales domain
      .domain(domain);
      var groupEnter = group.enter().append('div').attr('class', cssGroupClass);
      group.exit().remove();
      groupEnter.append('div').attr('class', cssBulletClass);
      var groupMerge = groupEnter.merge(group).style(marginTimeAttribute, function (d) {
        return x(aggregateFormatParse(d.key)) + 'px';
      });
      if (useLabels) {
        var label = groupMerge.selectAll('.' + cssLabelClass + '-' + orientation).data(function (d) {
          return [d];
        });
        var labelMerge = label.enter().append('div').attr('class', cssLabelClass + '-' + orientation).merge(label).classed(cssAboveClass + '-' + orientation, function (d) {
          return isAbove(d.index, distribution);
        }).classed(cssBelowClass + '-' + orientation, function (d) {
          return !isAbove(d.index, distribution);
        });
        var text = labelMerge.selectAll('.' + cssTextClass + '-' + orientation).data(function (d) {
          return [d];
        });
        var textEnter = text.enter().append('div').attr('class', cssTextClass + '-' + orientation).merge(text).style(widthAttribute, function (d) {
          // calculate the available width
          var offset = x(aggregateFormatParse(d.key));
          // get the next and previous item on the same lane
          var nextItem;
          var previousItem;
          var itemNumTotal;
          var itemNum = d.index + 1;
          var nextCheck = distribution === 'top-bottom' ? 2 : 1;
          if (typeof mapping.category === 'undefined') {
            nextItem = nestedData[d.timelineIndex][d.index + nextCheck];
            previousItem = nestedData[d.timelineIndex][d.index - nextCheck];
            itemNumTotal = nestedData[d.timelineIndex].length;
          } else {
            nextItem = nestedData[d.timelineIndex].entries[d.index + nextCheck];
            previousItem = nestedData[d.timelineIndex].entries[d.index - nextCheck];
            itemNumTotal = nestedData[d.timelineIndex].entries.length;
          }
          var availableWidth;
          var compareItem1 = orientation === 'horizontal' ? nextItem : previousItem;
          var compareItem2 = orientation === 'horizontal' ? previousItem : nextItem;
          if (typeof compareItem1 !== 'undefined') {
            var offsetNextItem = x(aggregateFormatParse(compareItem1.key));
            availableWidth = orientation === 'horizontal' ? offsetNextItem - offset : offset - offsetNextItem;
          } else {
            if (itemNumTotal - itemNum === 1) {
              availableWidth = orientation === 'horizontal' ? width - offset : offset;
            } else if (itemNumTotal - itemNum === 0) {
              if (typeof compareItem2 !== 'undefined') {
                var offsetPreviousItem = x(aggregateFormatParse(compareItem2.key));
                availableWidth = orientation === 'horizontal' ? (width - offsetPreviousItem) / 2 : offsetPreviousItem / 2;
              } else {
                availableWidth = width;
              }
            }
          }
          var labelRightMargin = 6;
          var availableWidthWithMargin = Math.max(0, availableWidth - labelRightMargin);
          var finalWidth = Math.min(orientation === 'horizontal' ? labelMaxWidth : availableWidthWithMargin, availableWidthWithMargin);
          return finalWidth + 'px';
        }).each(function (d) {
          var above = isAbove(d.index, distribution);
          var wrapper = select(this);
          wrapper.html(null);
          var titleStyle = d.values.reduce(function (p, c) {
            if (c[mapping.titleStyle] !== undefined) {
              return Object.assign(p, c[mapping.titleStyle]);
            }
            return p;
          }, {});
          var element = wrapper.append('div').classed('wrapper', true);
          if (!above || orientation === 'vertical') {
            var titleSpan = element.append('span').classed(cssTitleClass, true).text(labelFormat(aggregateFormatParse(d.key)));
            Object.entries(titleStyle).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                prop = _ref2[0],
                val = _ref2[1];
              return titleSpan.style(prop, val);
            });
            element.append('br');
          }
          d.values.map(function (v, i) {
            if (i > 0) {
              element.append('br');
            }
            var textStyle = Object.assign({}, v[mapping.textStyle]);
            var t = v[mapping.text];
            var item;
            // test if text is an image filename,
            // if so return an image tag with the filename as the source
            if (['jpg', 'jpeg', 'gif', 'png'].indexOf(t.split('.').pop()) > -1) {
              item = element.append('img').classed('milestones-label', true).classed('milestones-image-label', true).attr('height', '100').attr('src', t);
            } else if (v[mapping.url]) {
              item = element.append('a').classed('milestones-label', true).classed('milestones-link-label', true).attr('href', v[mapping.url]).attr('target', urlTarget).text(t);
            } else {
              item = element.append('span').classed('milestones-label', true).classed('milestones-text-label', true).text(t);
            }
            item.datum({
              text: v[mapping.text],
              timestamp: v[mapping.timestamp],
              attributes: v // original value of an object passed to the milestone
            });
            if (typeof callbackClick === 'function' || typeof callBackMouseLeave === 'function' || typeof callBackMouseOver === 'function') {
              item.classed(cssEventClass, true);
            }
            if (typeof callbackClick === 'function') {
              item.on('click', eventClick);
            }
            if (typeof callBackMouseLeave === 'function') {
              item.on('mouseleave', eventMouseLeave);
            }
            if (typeof callBackMouseOver === 'function') {
              item.on('mouseover', eventMouseOver);
            }
            Object.entries(textStyle).forEach(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                prop = _ref4[0],
                val = _ref4[1];
              return item.style(prop, val);
            });
          });
          if (above && orientation === 'horizontal') {
            element.append('br');
            var _titleSpan = element.append('span').classed(cssTitleClass, true).text(labelFormat(aggregateFormatParse(d.key)));
            Object.entries(titleStyle).forEach(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                prop = _ref6[0],
                val = _ref6[1];
              return _titleSpan.style(prop, val);
            });
          }
        });
        var textMerge = text.merge(textEnter);
        textMerge.style('padding-top', '0px').style('padding-bottom', '0px');
        if (optimizeLayout) {
          optimize(aggregateFormatParse, distribution, labelMaxWidth, mapping, nestedData, orientation, textMerge, width, x);
        }
      } else {
        groupMerge.selectAll('.' + cssLabelClass + '-' + orientation).remove();
      }

      // finally, adjust offset, height and width of the whole timeline
      timelineMerge.each(function (d, i, node) {
        var margin = 10;
        var maxAboveHeight = max(select(node[i]).selectAll('* .' + cssAboveClass + '-' + orientation)._groups[0], function (d) {
          return d.offsetHeight;
        });
        var maxBelowHeight = max(select(node[i]).selectAll('* :not(.' + cssAboveClass + '-' + orientation + ')')._groups[0], function (d) {
          return d.offsetHeight;
        });
        if (orientation === 'horizontal') {
          select(node[i]).style('margin-top', margin + (maxAboveHeight || 0) + 'px').style('height', margin + (maxBelowHeight || 0) + 'px');
        } else {
          var percent = typeof mapping.category !== 'undefined' ? Math.round(100 / (nestedData.length + 1)) * (i + 1) : '50';
          select(node[i]).style('margin-left', percent + '%').style('position', 'absolute');
        }
      });
    }
    return api({
      aggregateBy: setAggregateBy,
      mapping: assignMapping,
      optimize: setOptimizeLayout,
      autoResize: setAutoResize,
      orientation: setOrientation,
      distribution: setDistribution,
      parseTime: setParseTime,
      labelFormat: setLabelFormat,
      urlTarget: setUrlTarget,
      useLabels: setUseLabels,
      range: setRange,
      render: render,
      onEventClick: setEventClickCallback,
      onEventMouseLeave: setEventMouseLeaveCallback,
      onEventMouseOver: setEventMouseOverCallback
    });
  }

  return milestones;

})));
//# sourceMappingURL=d3-milestones.js.map
