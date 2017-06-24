! function(a)
{
  "use strict";
  a.fn.fitVids = function(b)
  {
    var c = {
      customSelector: null,
      ignore: null
    };
    if (!document.getElementById("fit-vids-style"))
    {
      var d = document.head || document.getElementsByTagName("head")[0],
        e = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
        f = document.createElement("div");
      f.innerHTML = '<p>x</p><style id="fit-vids-style">' + e + "</style>", d.appendChild(f.childNodes[1])
    }
    return b && a.extend(c, b), this.each(function()
    {
      var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
      c.customSelector && b.push(c.customSelector);
      var d = ".fitvidsignore";
      c.ignore && (d = d + ", " + c.ignore);
      var e = a(this).find(b.join(","));
      e = e.not("object object"), e = e.not(d), e.each(function()
      {
        var b = a(this);
        if (!(b.parents(d).length > 0 || "embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length))
        {
          b.css("height") || b.css("width") || !isNaN(b.attr("height")) && !isNaN(b.attr("width")) || (b.attr("height", 9), b.attr("width", 16));
          var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
            e = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
            f = c / e;
          if (!b.attr("id"))
          {
            var g = "fitvid" + Math.floor(999999 * Math.random());
            b.attr("id", g)
          }
          b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * f + "%"), b.removeAttr("height").removeAttr("width")
        }
      })
    })
  }
}(window.jQuery || window.Zepto), jQuery(document).ready(function(a)
  {
    function b()
    {
      var b = a("#menu-primarynbt").width(),
        d = a("#overflow-containernbt").height();
      a("#site-headernbt").hasClass("toggled") ? (a("#site-headernbt").removeClass("toggled"), a("#mainnbt").css("transform", "translateX(0px)"), a(".breadcrumbs").css("transform", "translateX(0px)"), a("#sidebar-primary-container").css("transform", "translateX(0px)"), a(window).unbind("scroll"), setTimeout(function()
      {
        a("#menu-primarynbt").removeAttr("style")
      }, 400)) : (a("#site-headernbt").addClass("toggled"), a("#menu-primarynbt").css("height", d), a("#mainnbt").css("transform", "translateX(" + b + "px)"), a(".breadcrumbs").css("transform", "translateX(" + b + "px)"), a("#sidebar-primary-container").css("transform", "translateX(" + b + "px)"), a(window).scroll(c))
    }

    function c()
    {
      var c = a("#menu-primary-items").offset().top + a("#menu-primary-items").height(),
        d = a(window).scrollTop();
      d > c && (a(window).unbind("scroll"), b())
    }
    a(".entry-content").fitVids(), a(".entry-content").fitVids(), a("#toggle-navigationnbt").bind("tap", b), a(".menu-item a, .page_item a").focus(function()
    {
      a(this).parent("li").addClass("focused"), a(this).parents("ul").addClass("focused")
    }), a(".menu-item a, .page_item a").focusout(function()
    {
      a(this).parent("li").removeClass("focused"), a(this).parents("ul").removeClass("focused")
    })
  }), window.addEventListener("hashchange", function()
  {
    var a = document.getElementById(location.hash.substring(1));
    a && (/^(?:a|select|input|button|textarea)$/i.test(a.tagName) || (a.tabIndex = -1), a.focus())
  }, !1),
  function(a)
  {
    "use strict";

    function b(a, b, c)
    {
      return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0
    }

    function c(a, b)
    {
      var c, d;
      for (c = 0, d = a.length; d > c; c++)
        if (a[c] === b) return !0;
      return !1
    }

    function d(a, b)
    {
      var c;
      a.createTextRange ? (c = a.createTextRange(), c.move("character", b), c.select()) : a.selectionStart && (a.focus(), a.setSelectionRange(b, b))
    }

    function e(a, b)
    {
      try
      {
        return a.type = b, !0
      }
      catch (c)
      {
        return !1
      }
    }
    a.Placeholders = {
      Utils:
      {
        addEventListener: b,
        inArray: c,
        moveCaret: d,
        changeType: e
      }
    }
  }(this),
  function(a)
  {
    "use strict";

    function b()
    {}

    function c()
    {
      try
      {
        return document.activeElement
      }
      catch (a)
      {}
    }

    function d(a, b)
    {
      var c, d, e = !!b && a.value !== b,
        f = a.value === a.getAttribute(H);
      return (e || f) && "true" === a.getAttribute(I) ? (a.removeAttribute(I), a.value = a.value.replace(a.getAttribute(H), ""), a.className = a.className.replace(G, ""), d = a.getAttribute(O), parseInt(d, 10) >= 0 && (a.setAttribute("maxLength", d), a.removeAttribute(O)), c = a.getAttribute(J), c && (a.type = c), !0) : !1
    }

    function e(a)
    {
      var b, c, d = a.getAttribute(H);
      return "" === a.value && d ? (a.setAttribute(I, "true"), a.value = d, a.className += " " + F, c = a.getAttribute(O), c || (a.setAttribute(O, a.maxLength), a.removeAttribute("maxLength")), b = a.getAttribute(J), b ? a.type = "text" : "password" === a.type && T.changeType(a, "text") && a.setAttribute(J, "password"), !0) : !1
    }

    function f(a, b)
    {
      var c, d, e, f, g, h, i;
      if (a && a.getAttribute(H)) b(a);
      else
        for (e = a ? a.getElementsByTagName("input") : p, f = a ? a.getElementsByTagName("textarea") : q, c = e ? e.length : 0, d = f ? f.length : 0, i = 0, h = c + d; h > i; i++) g = c > i ? e[i] : f[i - c], b(g)
    }

    function g(a)
    {
      f(a, d)
    }

    function h(a)
    {
      f(a, e)
    }

    function i(a)
    {
      return function()
      {
        r && a.value === a.getAttribute(H) && "true" === a.getAttribute(I) ? T.moveCaret(a, 0) : d(a)
      }
    }

    function j(a)
    {
      return function()
      {
        e(a)
      }
    }

    function k(a)
    {
      return function(b)
      {
        return t = a.value, "true" === a.getAttribute(I) && t === a.getAttribute(H) && T.inArray(D, b.keyCode) ? (b.preventDefault && b.preventDefault(), !1) : void 0
      }
    }

    function l(a)
    {
      return function()
      {
        d(a, t), "" === a.value && (a.blur(), T.moveCaret(a, 0))
      }
    }

    function m(a)
    {
      return function()
      {
        a === c() && a.value === a.getAttribute(H) && "true" === a.getAttribute(I) && T.moveCaret(a, 0)
      }
    }

    function n(a)
    {
      return function()
      {
        g(a)
      }
    }

    function o(a)
    {
      a.form && (y = a.form, "string" == typeof y && (y = document.getElementById(y)), y.getAttribute(K) || (T.addEventListener(y, "submit", n(y)), y.setAttribute(K, "true"))), T.addEventListener(a, "focus", i(a)), T.addEventListener(a, "blur", j(a)), r && (T.addEventListener(a, "keydown", k(a)), T.addEventListener(a, "keyup", l(a)), T.addEventListener(a, "click", m(a))), a.setAttribute(L, "true"), a.setAttribute(H, w), (r || a !== c()) && e(a)
    }
    var p, q, r, s, t, u, v, w, x, y, z, A, B, C = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
      D = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
      E = "#ccc",
      F = "placeholdersjs",
      G = new RegExp("(?:^|\\s)" + F + "(?!\\S)"),
      H = "data-placeholder-value",
      I = "data-placeholder-active",
      J = "data-placeholder-type",
      K = "data-placeholder-submit",
      L = "data-placeholder-bound",
      M = "data-placeholder-focus",
      N = "data-placeholder-live",
      O = "data-placeholder-maxlength",
      P = document.createElement("input"),
      Q = document.getElementsByTagName("head")[0],
      R = document.documentElement,
      S = a.Placeholders,
      T = S.Utils;
    if (S.nativeSupport = void 0 !== P.placeholder, !S.nativeSupport)
    {
      for (p = document.getElementsByTagName("input"), q = document.getElementsByTagName("textarea"), r = "false" === R.getAttribute(M), s = "false" !== R.getAttribute(N), u = document.createElement("style"), u.type = "text/css", v = document.createTextNode("." + F + " { color:" + E + "; }"), u.styleSheet ? u.styleSheet.cssText = v.nodeValue : u.appendChild(v), Q.insertBefore(u, Q.firstChild), B = 0, A = p.length + q.length; A > B; B++) z = B < p.length ? p[B] : q[B - p.length], w = z.attributes.placeholder, w && (w = w.nodeValue, w && T.inArray(C, z.type) && o(z));
      x = setInterval(function()
      {
        for (B = 0, A = p.length + q.length; A > B; B++) z = B < p.length ? p[B] : q[B - p.length], w = z.attributes.placeholder, w ? (w = w.nodeValue, w && T.inArray(C, z.type) && (z.getAttribute(L) || o(z), (w !== z.getAttribute(H) || "password" === z.type && !z.getAttribute(J)) && ("password" === z.type && !z.getAttribute(J) && T.changeType(z, "text") && z.setAttribute(J, "password"), z.value === z.getAttribute(H) && (z.value = w), z.setAttribute(H, w)))) : z.getAttribute(I) && (d(z), z.removeAttribute(H));
        s || clearInterval(x)
      }, 100)
    }
    T.addEventListener(a, "beforeunload", function()
    {
      S.disable()
    }), S.disable = S.nativeSupport ? b : g, S.enable = S.nativeSupport ? b : h
  }(this),
  function(a)
  {
    "use strict";

    function b()
    {
      v(!0)
    }
    var c = {};
    a.respond = c, c.update = function() {};
    var d = [],
      e = function()
      {
        var b = !1;
        try
        {
          b = new a.XMLHttpRequest
        }
        catch (c)
        {
          b = new a.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function()
        {
          return b
        }
      }(),
      f = function(a, b)
      {
        var c = e();
        c && (c.open("GET", a, !0), c.onreadystatechange = function()
        {
          4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
        }, 4 !== c.readyState && c.send(null))
      },
      g = function(a)
      {
        return a.replace(c.regex.minmaxwh, "").match(c.regex.other)
      };
    if (c.ajax = f, c.queue = d, c.unsupportedmq = g, c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
      }, c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches, !c.mediaQueriesSupported)
    {
      var h, i, j, k = a.document,
        l = k.documentElement,
        m = [],
        n = [],
        o = [],
        p = {},
        q = 30,
        r = k.getElementsByTagName("head")[0] || l,
        s = k.getElementsByTagName("base")[0],
        t = r.getElementsByTagName("link"),
        u = function()
        {
          var a, b = k.createElement("div"),
            c = k.body,
            d = l.style.fontSize,
            e = c && c.style.fontSize,
            f = !1;
          return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = f = k.createElement("body"), c.style.background = "none"), l.style.fontSize = "100%", c.style.fontSize = "100%", c.appendChild(b), f && l.insertBefore(c, l.firstChild), a = b.offsetWidth, f ? l.removeChild(c) : c.removeChild(b), l.style.fontSize = d, e && (c.style.fontSize = e), a = j = parseFloat(a)
        },
        v = function(b)
        {
          var c = "clientWidth",
            d = l[c],
            e = "CSS1Compat" === k.compatMode && d || k.body[c] || d,
            f = {},
            g = t[t.length - 1],
            p = (new Date).getTime();
          if (b && h && q > p - h) return a.clearTimeout(i), void(i = a.setTimeout(v, q));
          h = p;
          for (var s in m)
            if (m.hasOwnProperty(s))
            {
              var w = m[s],
                x = w.minw,
                y = w.maxw,
                z = null === x,
                A = null === y,
                B = "em";
              x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)), y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)), w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []), f[w.media].push(n[w.rules]))
            }
          for (var C in o) o.hasOwnProperty(C) && o[C] && o[C].parentNode === r && r.removeChild(o[C]);
          o.length = 0;
          for (var D in f)
            if (f.hasOwnProperty(D))
            {
              var E = k.createElement("style"),
                F = f[D].join("\n");
              E.type = "text/css", E.media = D, r.insertBefore(E, g.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(k.createTextNode(F)), o.push(E)
            }
        },
        w = function(a, b, d)
        {
          var e = a.replace(c.regex.comments, "").replace(c.regex.keyframes, "").match(c.regex.media),
            f = e && e.length || 0;
          b = b.substring(0, b.lastIndexOf("/"));
          var h = function(a)
            {
              return a.replace(c.regex.urls, "$1" + b + "$2$3")
            },
            i = !f && d;
          b.length && (b += "/"), i && (f = 1);
          for (var j = 0; f > j; j++)
          {
            var k, l, o, p;
            i ? (k = d, n.push(h(a))) : (k = e[j].match(c.regex.findStyles) && RegExp.$1, n.push(RegExp.$2 && h(RegExp.$2))), o = k.split(","), p = o.length;
            for (var q = 0; p > q; q++) l = o[q], g(l) || m.push(
            {
              media: l.split("(")[0].match(c.regex.only) && RegExp.$2 || "all",
              rules: n.length - 1,
              hasquery: l.indexOf("(") > -1,
              minw: l.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
              maxw: l.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
            })
          }
          v()
        },
        x = function()
        {
          if (d.length)
          {
            var b = d.shift();
            f(b.href, function(c)
            {
              w(c, b.href, b.media), p[b.href] = !0, a.setTimeout(function()
              {
                x()
              }, 0)
            })
          }
        },
        y = function()
        {
          for (var b = 0; b < t.length; b++)
          {
            var c = t[b],
              e = c.href,
              f = c.media,
              g = c.rel && "stylesheet" === c.rel.toLowerCase();
            e && g && !p[e] && (c.styleSheet && c.styleSheet.rawCssText ? (w(c.styleSheet.rawCssText, e, f), p[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !s || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e), d.push(
            {
              href: e,
              media: f
            })))
          }
          x()
        };
      y(), c.update = y, c.getEmValue = u, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
    }
  }(this),
  function(a, b)
  {
    a.tapHandling = !1;
    var c = function(c)
    {
      return c.each(function()
      {
        function c(a)
        {
          b(a.target).trigger("tap", [a, b(a.target).attr("href")]), a.stopImmediatePropagation()
        }

        function d(a)
        {
          var b = a.originalEvent || a,
            c = b.touches || b.targetTouches;
          return c ? [c[0].pageX, c[0].pageY] : null
        }

        function e(a)
        {
          if (a.touches && a.touches.length > 1 || a.targetTouches && a.targetTouches.length > 1) return !1;
          var b = d(a);
          j = b[0], i = b[1]
        }

        function f(a)
        {
          if (!k)
          {
            var b = d(a);
            b && (Math.abs(i - b[1]) > m || Math.abs(j - b[0]) > m) && (k = !0)
          }
        }

        function g(b)
        {
          if (clearTimeout(h), h = setTimeout(function()
            {
              a.tapHandling = !1, k = !1
            }, 1e3), !b.ctrlKey && !b.metaKey)
          {
            if (b.preventDefault(), k || a.tapHandling && a.tapHandling !== b.type) return void(k = !1);
            a.tapHandling = b.type, c(b)
          }
        }
        var h, i, j, k, l = b(this),
          m = 10;
        l.bind("touchstart MSPointerDown", e).bind("touchmove MSPointerMove", f).bind("touchend MSPointerUp", g).bind("click", g)
      })
    };
    if (b.event && b.event.special) b.event.special.tap = {
      add: function()
      {
        c(b(this), !0)
      },
      remove: function()
      {
        c(b(this), !1)
      }
    };
    else
    {
      var d = b.fn.bind;
      b.fn.bind = function(a)
      {
        return /(^| )tap( |$)/.test(a) && c(this), d.apply(this, arguments)
      }
    }
  }(this, jQuery);
