var i = void 0,
    p = !0,
    A = null,
    V = !1;
(function () {
    function Ca() {
        L = t * (0.105 + 0.895 * ((x - C) / (M - C)));
        L < W && (L = W)
    }
    var Da, Ea;

    function Fa(a) {
        this.p(a)
    }

    function Ga(a, b) {
        this.V = [];
        this.height = 32;
        this.a;
        this.z;
        this.da;
        this.m;
        this.t;
        this.O;
        this.w = p;
        this.K = -1;
        this.ua = p;
        this.p(b || {});
        a.appendChild(this.a)
    }

    function X(a) {
        this.u = a;
        this.ca = 1;
        this.h = this.l = A;
        this.n = this.e = 0;
        this.c = [];
        this.b = [];
        this.L = this.M = this.I = this.H = 0;
        this.Da = 2
    }

    function G(a) {
        this.u = a;
        this.h = this.l = A;
        this.n = this.e = 0;
        this.c = [];
        this.b = [];
        this.B = this.C = 0
    }

    function sb() {
        var a = w,
            b = t;
        w = 0.0375;
        t = 22;
        setTimeout(function () {
            w = a;
            t = b
        }, 2500)
    }

    function Ha(a) {
        N = a;
        1300 > window.innerWidth && (o = 0.65 + 0.35 * ((window.innerWidth - 950) / 350));
        800 > window.innerWidth && (o = O);
        Y = !P;
        ca = da.match(/Firefox/i) ? oa : Y ? tb ? ub : oa : vb;
        u && wb();
        P && xb();
        Q && (document.body.style.overflow = "visible", q("out").style.display = "block", q("out").style.height = window.outerHeight + 100 + "px", q("stickyContainer").style.visibility = "visible", Y = p, ca = oa, Ia = 0.055, Ja = 0.94, x = w = 0.18, Ka = 10, v = s = 4);
        for (var a = La / (v - 1), b = yb / (s - 1), c = v * s; c--;) {
            var d = c % v,
                e = Math.floor(c /
                    v),
                f;
            f = new zb;
            u || (f.i = -25 - 15 * Math.random(), f.f = -5 - 5 * Math.random());
            f.x = a * d + Ma;
            f.y = b * e + Na;
            f.fa = d;
            f.ta = e;
            if (0 == d || d == v - 1 || 0 == e || e == s - 1) f.ja = p, Ab.push(f);
            j[c] = f;
            var h;
            e < s - 1 && (h = j[Math.floor((e + 1) * v + d)], y.push(H(f, h)), y.push(H(h, f)));
            e < s - 2 && (h = j[Math.floor((e + 2) * v + d)], y.push(H(f, h)), y.push(H(h, f)));
            d < s - 1 && (h = j[Math.floor(e * v + (d + 1))], y.push(H(f, h)), y.push(H(h, f)));
            d < s - 2 && (h = j[Math.floor(e * v + (d + 2))], y.push(H(f, h)), y.push(H(h, f)))
        }
        D = j.length;
        Oa = 0.5 * D;
        l.push(j[0]);
        l.push(j[v - 1]);
        l.push(j[D - 1]);
        l.push(j[D -
            v]);
        Bb();
        Cb();
        Pa = V
    }

    function wb() {
        Qa = Ra = pa;
        ea = -2;
        v = s = 5;
        x = 0.07;
        C = 0.0635;
        M = 0.2;
        t = 4.5;
        qa = 10;
        Na = Ma = 0;
        I = 0.5;
        ra ? (o = 0.77, Z *= 0.9, O *= 0.75) : (o = 0.35, O = 0.225, Z = 0.85);
        Ca = function () {
            L = t * (0.35 + 0.65 * ((x - C) / (M - C)));
            L < W && (L = W)
        };
        setTimeout(P ? function () {
            for (var a = D; a--;) {
                var b = j[a];
                b.x = 0.5 * $;
                b.y = 0.35 * fa;
                b.i = 0;
                b.f = 0
            }
        } : function () {
            for (var a = window.innerWidth < window.innerHeight, b = 0.9 * ((a ? window.innerWidth : window.innerHeight) / 3 / s), a = a ? 8 : 3, c = 0.5 * ($ - 3 * b), d = 0.5 * (fa - 3 * b), e = D; e--;) {
                var f = j[e];
                f.x = c + b * f.fa;
                f.y = d + b * f.ta;
                f.f = -a - Math.random() *
                    a
            }
            b = 0.5 < Math.random() ? 1 : -1;
            j[0].f = (40 + 20 * Math.random()) * b;
            j[3].f = 50 * -b
        }, 50)
    }

    function xb() {
        ca = function () {
            return p
        }
    }

    function ga() {
        ha = V;
        Sa()
    }

    function Bb() {
        R = q("bigCanvas");
        sa = R.getContext("2d");
        var a = q("stickyContainer");
        Y ? S = new X(a) : (S = new G(a), a.addEventListener("mouseover", function () {
            ta = p
        }, V), a.addEventListener("mouseout", function () {
            ta = V
        }, V));
        S.p(N, v - 1, s - 1, sa)
    }

    function Cb() {
        u ? Y ? (R.addEventListener("touchstart", Ta, V), R.addEventListener("touchend", Ua, V), R.addEventListener("touchmove", Va, V)) : (q("stickyContainer").addEventListener("touchstart",
            Ta, V), q("stickyContainer").addEventListener("touchend", Ua, V), q("stickyContainer").addEventListener("touchmove", Va, V), document.addEventListener("touchmove", function (a) {
            a.preventDefault()
        }, V)) : (document.addEventListener("mousedown", Wa, V), document.addEventListener("mouseup", ua, V), document.addEventListener("mousemove", Db, V));
        document.addEventListener("gesturestart", function (a) {
            a.preventDefault();
            Xa = o
        }, V);
        document.addEventListener("gesturechange", function (a) {
            if (!Ya || !g.w) a.preventDefault(), o = Xa + 0.415 *
                (a.scale - 1), o = Math.min(Z, Math.max(o, O))
        }, V);
        document.addEventListener("gestureend", function () {
            localStorage.removeItem("stickything.scale");
            localStorage.setItem("stickything.scale", o)
        }, V);
        window.addEventListener("devicemotion", Eb, V);
        document.getElementById("options").addEventListener("click", Za, V);
        if (!u)
            for (var a = document.getElementsByTagName("a"), b = 0; b < a.length; b++) a[b].addEventListener("mouseover", function () {
                aa = p
            }, V), a[b].addEventListener("mouseout", function () {
                aa = V
            }, V);
        document.onselectstart = function () {
            return V
        };
        document.body.addEventListener("orientationchange", T, V)
    }

    function Eb(a) {
        if (15 > $a) $a++;
        else {
            var a = a.accelerationIncludingGravity,
                b = 0.1 * a.x,
                a = 0.1 * a.y,
                c = 2.65 * ia,
                d = 0.85 * ia;
            switch (window.orientation) {
            case -90:
                d *= b;
                b = a * c;
                break;
            case 90:
                d *= -b;
                b = -a * c;
                break;
            case 180:
                b = -b * c;
                d *= a;
                break;
            default:
                b *= c, d *= -a
            }
            ab = b;
            u && (I = d)
        }
    }

    function ub() {
        return 0 < sa.getImageData(E - 1, F - 1, 1, 1).data[0]
    }

    function oa() {
        var a = bb(l);
        return E > a.x - 2 && E < a.x + a.width + 2 && F > a.y - 2 && F < a.y + a.height + 2
    }

    function vb() {
        return ta
    }

    function H(a, b) {
        var c = new Fb;
        c.pa = a;
        c.qa = b;
        var d = b.x - a.x,
            e = b.y - a.y;
        c.length = Math.sqrt(d * d + e * e);
        c.s = Math.atan2(e, d);
        c.color = 16777215 * Math.random();
        return c
    }

    function Sa() {
        if (!ha) {
            var a = (new Date).getTime(),
                b = a - cb;
            cb = a;
            if (33 > b && !va) va = p;
            else {
                va = V;
                Pa && (db = window.screenX - eb, fb = window.screenY - gb, eb = window.screenX, gb = window.screenY);
                ja = ca();
                wa || (a = ka > 0.8 * D, !hb(l) || a ? la++ : la = 0, 30 < la && (la = 0, ib()));
                a = C + 0.75 * (M - C);
                x = U && 0 == ba && w < a ? a : w;
                xa = U && 0 == ba ? 0.94 : 1;
                Ca();
                jb();
                kb();
                jb();
                kb();
                for (a = D; a--;) S.c[a][0] = j[a].x, S.c[a][1] = j[a].y;
                S.sa();
                u || (a =
                    "", a = U ? Qa : ja && !aa ? Ra : pa, a != ya && (ya = a, document.body.style.cursor = ya))
            }
            requestAnimFrame(Sa)
        }
    }

    function jb() {
        for (var a = y.length; a--;) {
            var b = y[a],
                c = b.pa,
                d = b.qa,
                e = d.x - c.x,
                f = d.y - c.y,
                h = lb(b.s + c.s),
                J = (d.x - (c.x + Math.cos(h) * b.length * o)) * x,
                h = (d.y - (c.y + Math.sin(h) * b.length * o)) * x,
                g = 0.5 * (Math.abs(J) + Math.abs(h)) > L;
            u && U && (g = p);
            if (!c.q || g) e = Math.atan2(f, e), c.q = V, c.j += J, c.k += h, c.x += J * ma, c.y += h * ma, c.G += lb(e - (b.s + c.s)) * Ia, c.s += c.G;
            if (!d.q || g) d.q = V, d.j -= J, d.k -= h, d.x -= J * ma, d.y -= h * ma
        }
    }

    function kb() {
        ba = ka = 0;
        for (var a = j.length; a--;) {
            var b =
                j[a];
            if (b.Z) {
                var c = E - b.x,
                    d = F - b.y,
                    e = Math.sqrt(c * c + d * d) || 1.0E-4,
                    f = b.$ ? 0.5 : 0.15;
                b.j += c / e * e * f;
                b.k += d / e * e * f;
                b.q = V
            }
            if (b.q)
                if (ka++, ba < Oa) {
                    ba++;
                    continue
                } else b.q = V;
            b.i *= xa;
            b.f *= xa;
            b.j += ab;
            b.k += I;
            b.j += -mb * b.i;
            b.k += -mb * b.f;
            b.G *= Ja;
            b.i += b.j;
            b.f += b.k;
            b.j = 0;
            b.k = 0;
            b.x -= 0.5 * db;
            b.y -= 0.5 * fb;
            b.i > K && (b.i = K);
            b.i < -K && (b.i = -K);
            b.f > K && (b.f = K);
            b.f < -K && (b.f = -K);
            var c = b.x + b.i,
                d = b.y + b.f,
                f = e = V,
                h = ea,
                J = $ - ea,
                g = ea,
                k = fa - ea;
            c > J && (e = p, c = J);
            c < h && (e = p, c = h);
            d > k && (f = p, d = k);
            d < g && (f = p, d = g);
            (e || f) && ka++;
            (h = (e || f) && ba < 0.25 * D) ? (b.i = 0, b.f = 0,
                b.G = 0, e && (b.x = c), f && (b.y = d)) : (b.x = c, b.y = d);
            b.q = h
        }
    }

    function ib() {
        setTimeout(function (a, b, c, d) {
            x = a;
            t = b;
            o = c;
            I = d;
            wa = V;
            hb(l) || ib()
        }, 450, x, t, o, I);
        x = 0.8 * M;
        t = 0;
        o *= 1.05;
        ua();
        T();
        wa = p;
        for (var a = bb(l), b = a.x + 0.5 * a.width, c = a.y + 0.5 * a.height, d = Number.MAX_VALUE, e, f = l.length; f--;) {
            var h = l[f],
                a = h.x - b,
                h = h.y - c,
                a = Math.sqrt(a * a + h * h);
            a < d && (d = a, e = f, l[e].y -= 170)
        }
        b = (400 + 100 * Math.random()) * o;
        a = l.length;
        c = 0 == e ? a - 1 : e - 1;
        d = (e + 1) % a;
        a = l[d].x - l[c].x;
        h = l[d].y - l[c].y;
        a = Gb(l[c].x + 0.5 * a, l[c].y + 0.5 * h, l[e].x, l[e].y, b);
        l[e].x = a.Qa;
        l[e].y =
            a.Ra
    }

    function Wa() {
        if (ja && !aa) {
            U = p;
            for (var a, b = [], c = j.length; c--;) {
                a = j[c];
                var d = E - a.x,
                    e = F - a.y;
                b[c] = {
                    oa: a,
                    ha: Math.sqrt(d * d + e * e)
                }
            }
            b.sort(Hb);
            a = b[0].oa;
            a.$ = p;
            d = a.ja ? 5 : 9;
            for (c = -1; ++c < d;) a = b[c].oa, a.Z = p, a.Ta = E - a.x, a.Ua = F - a.y
        }
    }

    function ua() {
        if (U) {
            for (var a = j.length; a--;) j[a].Z = V, j[a].$ = V;
            U = V
        }
    }

    function Db(a) {
        a = a ? a : window.event;
        E = a.clientX;
        F = a.clientY
    }

    function T() {
        u && 1 != document.body.scrollTop && window.scrollTo(0, 1);
        $ = window.innerWidth;
        fa = window.innerHeight;
        for (var a = j.length; a--;) j[a].q = V;
        R.width = $;
        R.height =
            fa
    }

    function Ta(a) {
        1 == a.touches.length && (E = a.touches[0].pageX, F = a.touches[0].pageY, 3 != a.target.nodeType && (a.preventDefault(), Y && (ja = ca()), Wa()))
    }

    function Ua(a) {
        3 != a.target.nodeType && (a.preventDefault(), ua())
    }

    function Va(a) {
        1 == a.touches.length && (a.preventDefault(), E = a.touches[0].pageX, F = a.touches[0].pageY)
    }

    function bb(a) {
        for (var b = 1E5, c = -1E5, d = 1E5, e = -1E5, f = a.length; f--;) {
            var h = a[f];
            h.x < b && (b = h.x);
            h.x > c && (c = h.x);
            h.y < d && (d = h.y);
            h.y > e && (e = h.y)
        }
        return {
            x: b,
            y: d,
            width: c - b,
            height: e - d
        }
    }

    function Hb(a, b) {
        return a.ha -
            b.ha
    }

    function lb(a) {
        for (; a > za;) a -= nb;
        for (; a < -za;) a += nb;
        return a
    }

    function hb(a) {
        for (var b, c = a.length, d = 0; d < c; ++d) {
            var e = 0 == d ? c - 1 : d - 1,
                f = d,
                h = d == c - 1 ? 0 : d + 1,
                e = 0 < (a[f].x - a[e].x) * (a[h].y - a[f].y) - (a[h].x - a[f].x) * (a[f].y - a[e].y) ? p : V;
            if (0 == d) b = e;
            else if (b != e) return V
        }
        return p
    }

    function Gb(a, b, c, d, e) {
        var f = c - a,
            h = d - b,
            g = Math.sqrt(f * f + h * h),
            f = f / g * e,
            h = h / g * e;
        return {
            Qa: a - f,
            Ra: b - h,
            Ya: c + f,
            Za: d + h
        }
    }

    function Aa(a, b, c) {
        a < b && (a = b);
        a > c && (a = c);
        return a
    }

    function zb() {
        this.s = this.G = this.k = this.j = this.f = this.i = this.ta = this.fa = 0;
        this.ja = this.$ = this.Z = this.q = V
    }

    function Fb() {
        this.qa = this.pa = A;
        this.length = 0.001;
        this.s = 0;
        this.color = "#000"
    }

    function Ib() {
        Q ? setTimeout(function () {
            Ha(N);
            ob();
            pb.p()
        }, 750) : (Ha(N), isNaN(parseFloat(localStorage.getItem("stickything.stickiness"))) || (t = parseFloat(localStorage.getItem("stickything.stickiness")), t = Aa(t, W, qa), qb = V), isNaN(parseFloat(localStorage.getItem("stickything.stiffness"))) || (w = parseFloat(localStorage.getItem("stickything.stiffness")), w = Aa(w, C, M)), isNaN(parseFloat(localStorage.getItem("stickything.scale"))) ||
            (o = parseFloat(localStorage.getItem("stickything.scale")), o = Aa(o, O, Z)), isNaN(parseFloat(localStorage.getItem("stickything.gravityY"))) || (I = parseFloat(localStorage.getItem("stickything.gravityY"))), isNaN(parseFloat(localStorage.getItem("stickything.accelerometerFactor"))) || (ia = parseFloat(localStorage.getItem("stickything.accelerometerFactor"))), ob(), u ? pb.p() : Jb())
    }

    function Jb() {
        g.U(242, -1);
        g.P();
        g.S = Za;
        q("navContainer").style.display = "block";
        T();
        window.onresize = T;
        setTimeout(function () {
            q("stickyContainer").style.visibility =
                "visible";
            qb && sb();
            ga()
        }, 150)
    }

    function ob() {
        g = new Ga(document.body, {
            draggable: !u
        });
        g.add("stickiness", t, W, qa, function (a) {
            t = a
        }, this, 0, u ? 9.9 : 10, function (a) {
            localStorage.removeItem("stickything.stickiness");
            localStorage.setItem("stickything.stickiness", a)
        });
        Q || g.add("stiffness", w, C, M, function (a) {
            w = a;
            q("out").innerHTML = "&nbsp;<br>"
        }, this, 1, u ? 9.9 : 10, function (a) {
            localStorage.removeItem("stickything.stiffness");
            localStorage.setItem("stickything.stiffness", a)
        });
        Da || g.add("size", o, O, Z, function (a) {
                o = a
            }, this,
            0.25, u ? 9.9 : 10,
            function (a) {
                localStorage.removeItem("stickything.scale");
                localStorage.setItem("stickything.scale", a)
            });
        Ea ? g.add("gravity", ia, 0, 1.75, function (a) {
            ia = a
        }, this, 0, 2, function (a) {
            localStorage.removeItem("stickything.accelerometerFactor");
            localStorage.setItem("stickything.accelerometerFactor", a)
        }) : g.add("gravity", I, 0, 1, function (a) {
            I = a
        }, this, 0, 1, function (a) {
            localStorage.removeItem("stickything.gravityY");
            localStorage.setItem("stickything.gravityY", a)
        });
        g.P()
    }

    function Za(a) {
        g.w ? (g.a.removeEventListener("mouseover",
            na, V), g.a.removeEventListener("mouseout", na, V), a && g.X(), aa = V) : (g.a.addEventListener("mouseover", na, V), g.a.addEventListener("mouseout", na, V), Kb())
    }

    function na(a) {
        aa = "mouseover" == a.type ? p : V
    }

    function Kb() {
        var a = window.innerWidth - 318,
            b = rb;
        r.o(g.a, a, Ka);
        g.show();
        g.a.style.opacity = 0;
        clearInterval(Ba);
        Ba = setInterval(function () {
            var c = r.v(g.a).y,
                d = 0.35 * (b - c);
            r.o(g.a, a, c + d);
            g.a.style.opacity = parseFloat(g.a.style.opacity) + 0.125;
            0.65 > Math.abs(d) && clearInterval(Ba)
        }, 25)
    }

    function q(a) {
        return document.getElementById(a)
    }

    function Lb() {
        q("out").style.display = "block";
        for (var a = arguments[arguments.length - 1], b = arguments.length - 1; b--;) a = arguments[b] + ", " + a;
        q("out").innerHTML = q("out").innerHTML + "<br>" + a
    }
    var r = function () {
            function a(a) {
                function c(a) {
                    var b = d(a),
                        f = h[0] + (b[0] - j[0]),
                        b = h[1] + (b[1] - j[1]);
                    if (e.d) {
                        var g = e.d;
                        f < g.left && (f = g.left);
                        f > g.right && (f = g.right);
                        b < g.top && (b = g.top);
                        b > g.bottom && (b = g.bottom)
                    }
                    e.Ea || B(e.element, f, b);
                    e.J !== i && e.J(a, f, b)
                }

                function d(a) {
                    var c;
                    a.touches && a.touches.length ? (c = a.touches[0].clientX, a = a.touches[0].clientY) :
                        (c = a.clientX, a = a.clientY);
                    c = b(e.element, c, a);
                    return [c.x, c.y]
                }
                var e = g[a.target.wa];
                "touchstart" === a.type ? (e.handle.onmousedown = A, e.handle.ontouchmove = c, e.handle.ontouchend = function () {
                    e.handle.ontouchmove = A;
                    e.handle.ontouchend = A;
                    e.r && e.r(a)
                }) : (document.onmousemove = c, document.onmouseup = function () {
                    document.onmousemove = A;
                    document.onmouseup = A;
                    e.r && e.r(a)
                });
                a.preventDefault();
                var f = k(e.element),
                    h = [f.x, f.y],
                    j = d(a);
                e.T && e.T(a);
                return V
            }

            function b(a, b, c) {
                for (a = a.parentElement; a;) b -= a.offsetLeft, c -= a.offsetTop,
                    a = a.parentElement;
                return {
                    x: b,
                    y: c
                }
            }

            function c(a, b, c) {
                a.style.left = b + "px";
                a.style.top = c + "px"
            }

            function d(a) {
                return {
                    x: a.offsetLeft,
                    y: a.offsetTop
                }
            }

            function e(a, b, c) {
                a.style.WebkitTransform = "translate3d(" + b + "px," + c + "px,0px)"
            }

            function f(a) {
                a = new WebKitCSSMatrix(window.getComputedStyle(a).webkitTransform);
                return {
                    x: a.m41,
                    y: a.m42
                }
            }
            var h = 0,
                g = {},
                B, k;
            navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i);
            /AppleWebKit/.test(navigator.userAgent) ? (B = e, k = f) : (B =
                c, k = d);
            return {
                ka: function (b) {
                    b.handle || (b.handle = b.element);
                    b.handle.onmousedown = b.handle.ontouchstart = a;
                    var c = h++;
                    b.handle.wa = c;
                    g[c] = b
                },
                Wa: b,
                o: B,
                v: k,
                ra: function (a) {
                    var b = k(a);
                    a.style.left = b.x + "px";
                    a.style.top = b.y + "px";
                    a.style.WebkitTransform = ""
                }
            }
        }(),
        n = Fa.prototype;
    n.U = function (a) {
        this.width = a -= this.A.offsetWidth;
        this.d.right = this.width - this.D;
        this.F.style.width = this.width + "px";
        this.A.style.left = a + 10 + "px";
        a = this.map(this.value, this.R, this.Q, this.d.left, this.d.right);
        r.o(this.g, a, 0)
    };
    n.p = function (a) {
        this.za();
        this.Ka = a.Ca !== i ? a.Ca : 1;
        this.id = a.id;
        this.index = a.index;
        this.u = a.u;
        this.R = a.min;
        this.Q = a.max;
        this.Ja = a.na !== i ? a.na : a.min;
        this.Ia = a.ma !== i ? a.ma : a.max;
        this.ba = a.ba || function () {};
        this.La = a.r !== i ? a.r : function () {};
        this.width = 175;
        this.D = 16;
        this.d = {
            top: 0,
            left: 0,
            right: this.width - this.D,
            bottom: 0
        };
        this.u.appendChild(this.a);
        this.Ma();
        var b = this;
        r.ka({
            element: this.g,
            handle: this.W,
            Sa: this.d,
            T: function () {
                b.T()
            },
            r: function () {
                b.r()
            },
            J: function (a, d, e) {
                b.J(a, d, e)
            },
            Ea: p
        });
        this.va(a.value !== i ? a.value : -1);
        setTimeout(function () {
            b.D =
                b.g.offsetWidth;
            b.D = b.g.offsetWidth;
            var a = b.width - b.D;
            r.v(b.g).x > a && r.o(b.g, a, 0)
        }, 0)
    };
    n.za = function () {
        this.a = document.createElement("div");
        this.a.className = "sliderContainer";
        this.g = document.createElement("div");
        this.g.className = "sliderThumb";
        this.W = document.createElement("div");
        this.W.className = "sliderThumbHit";
        this.g.appendChild(this.W);
        this.F = document.createElement("div");
        this.F.className = "sliderTrack";
        this.scale = document.createElement("div");
        this.scale.className = "sliderScale";
        this.A = document.createElement("div");
        this.A.className = "sliderOutput";
        this.A.innerHTML = "0.0";
        this.a.appendChild(this.F);
        this.a.appendChild(this.scale);
        this.a.appendChild(this.g);
        this.a.appendChild(this.A)
    };
    n.va = function (a) {
        if (a != this.value) {
            var b = this.map(a, this.R, this.Q, this.d.left, this.d.right);
            r.o(this.g, b, 0);
            this.value = a;
            this.Y = this.map(a, this.R, this.Q, this.Ja, this.Ia);
            this.A.innerHTML = this.Y.toFixed(this.Ka);
            this.ba(this.value, this.Y, this)
        }
    };
    n.Va = function () {
        return this.value
    };
    n.J = function (a, b) {
        this.va(this.map(b, this.d.left, this.d.right,
            this.R, this.Q))
    };
    n.T = function () {
        this.g.className = "sliderThumbActive";
        this.F.className = "sliderTrackActive";
        this.d.right = this.width - this.g.offsetWidth
    };
    n.r = function () {
        this.g.className = "sliderThumb";
        this.F.className = "sliderTrack";
        this.La.apply(A, [this.value, this.Y])
    };
    n.Xa = function () {};
    n.Oa = function (a) {
        var b = a ? a : window.event,
            c = r.v(this.a.parentElement ? this.a.parentElement.parentElement : this.a.parentNode.parentNode),
            c = ("mousedown" == a.type ? a.pageX : a.touches[0].pageX) - c.x - 20 - 0.5 * this.D;
        c < this.d.left && (c =
            this.d.left);
        c > this.d.right && (c = this.d.right);
        var d = r.v(this.g);
        r.o(this.g, c, d.y);
        this.J(b, c, 0);
        b.preventDefault();
        try {
            this.W.dispatchEvent(a)
        } catch (e) {}
    };
    n.Ma = function () {
        var a = this;
        this.F.addEventListener("mousedown", function (b) {
            a.Oa(b)
        }, V)
    };
    n.map = function (a, b, c, d, e) {
        a = d + (a - b) / (c - b) * (e - d);
        a > e ? a = e : a < d && (a = d);
        return a
    };
    n.toString = function () {
        return "[Slider]"
    };
    n = Ga.prototype;
    n.p = function (a) {
        this.ya();
        if (a.draggable) {
            this.O = {
                element: this.a,
                handle: this.z,
                d: {
                    left: 0,
                    top: 0,
                    right: window.innerWidth,
                    bottom: window.innerHeight
                }
            };
            r.ka(this.O);
            var b = this;
            setTimeout(function () {
                b.ga()
            }, 100);
            window.addEventListener("resize", function () {
                b.ga()
            }, V)
        }
    };
    n.add = function (a, b, c, d, e, f, h, g, B) {
        var k = document.createElement("div");
        k.className = "sliderItem";
        this.a.appendChild(k);
        var j = document.createElement("div");
        j.className = "sliderLabel";
        j.innerHTML = a;
        k.appendChild(j);
        var m = m || {};
        m.label = a;
        m.index = this.V.length;
        m.u = k;
        m.value = b;
        m.min = c;
        m.max = d;
        m.ba = e;
        m.r = B;
        m.na = h;
        m.ma = g;
        a = new Fa(m);
        this.V.push({
            scope: f,
            Na: a
        })
    };
    n.U = function (a, b) {
        for (var c = a - 40,
                d = this.V.length; d--;) this.V[d].Na.U(c, b);
        this.a.style.width = a + "px";
        this.m.style.left = a - this.t.offsetWidth - 12 + "px"
    };
    n.ya = function () {
        this.a = document.createElement("div");
        this.a.className = "sliderBoard";
        this.z = document.createElement("div");
        this.z.className = "sliderBoardBG";
        this.da = document.createElement("div");
        this.da.className = "sliderBoardTitleBar";
        var a = this;
        this.m = document.createElement("div");
        this.m.className = "sliderBoardCloseButton";
        this.m.onmouseup = function () {
            a.X()
        };
        this.m.ontouchstart = function (b) {
            a.xa();
            b.preventDefault()
        };
        this.m.ontouchend = function (b) {
            b.preventDefault();
            a.X()
        };
        var b = document.createElement("div");
        b.className = "sliderBoardCloseButtonHit";
        this.m.appendChild(b);
        b = document.createElement("div");
        b.className = "sliderBoardCloseButtonBG";
        this.m.appendChild(b);
        this.t = document.createElement("div");
        this.t.innerHTML = "\u2715";
        this.t.className = "sliderBoardCloseButtonIcon";
        this.m.appendChild(this.t);
        this.a.appendChild(this.z);
        this.a.appendChild(this.da);
        this.a.appendChild(this.m)
    };
    n.move = function (a,
        b) {
        r.o(this.a, a, b)
    };
    n.ga = function () {
        var a = window.innerWidth - this.z.offsetWidth,
            b = window.innerHeight - this.z.offsetHeight;
        0 > a && (a = 0);
        0 > b && (b = 0);
        var c = r.v(this.a);
        c.x > a && c.y > b ? r.o(this.a, a, b) : c.x > a ? r.o(this.a, a, c.y) : c.y > b && r.o(this.a, c.x, b);
        this.O.d.right = a;
        this.O.d.bottom = b
    };
    n.show = function () {
        this.a.style.visibility = "visible";
        this.w = p;
        clearInterval(this.K)
    };
    n.P = function () {
        this.a.style.visibility = "hidden";
        this.w = V;
        clearInterval(this.K)
    };
    n.X = function () {
        this.S && this.S.apply(A);
        if (this.ua) {
            var a = r.v(this.a);
            this.move(a.x, a.y - 4);
            this.w = V;
            this.a.style.opacity = 0.75;
            clearInterval(this.K);
            this.K = setInterval(function (a) {
                var c = r.v(a.a);
                a.move(c.x, c.y - 5);
                c = parseFloat(a.a.style.opacity);
                a.a.style.opacity = c - 0.175;
                0 >= c && a.P()
            }, 20, this)
        }
    };
    n.xa = function () {
        this.t.style.color = "#CCCCCC";
        var a = this.t.style;
        setTimeout(function () {
            a.color = "#444444";
            a.WebkitTransition = "color 0.3s ease-in-out"
        }, 100);
        setTimeout(function () {
            a.WebkitTransition = ""
        }, 450)
    };
    delete n;
    X.prototype.p = function (a, b, c, d) {
        this.h = d;
        this.l = document.createElement("canvas");
        this.l.width = a.width + 2;
        this.l.height = a.width + 2;
        this.l.getContext("2d").drawImage(a, 0, 0);
        d = a.width / b;
        a = a.height / c;
        this.e = b + 1;
        this.n = c + 1;
        this.c = [];
        this.b = [];
        for (b = 0; b < this.n; b++)
            for (c = 0; c < this.e; c++) {
                var e = c * d,
                    f = b * a;
                this.c.push([e, f]);
                if (c < this.e - 1 && b < this.n - 1) {
                    var h = e + d,
                        g = f + a;
                    this.b.push(e);
                    this.b.push(f);
                    this.b.push(h);
                    this.b.push(f);
                    this.b.push(e);
                    this.b.push(g);
                    this.b.push(h);
                    this.b.push(g);
                    this.b.push(e);
                    this.b.push(g);
                    this.b.push(h);
                    this.b.push(f)
                }
            }
    };
    X.prototype.sa = function () {
        var a = this.Da;
        this.h.clearRect(this.H -
            a, this.I - a, this.M - this.H + 2 * a, this.L - this.I + 2 * a);
        this.I = this.H = Number.MAX_VALUE;
        for (var a = this.L = this.M = 0, b = this.e, c = this.n, d = 0; d < c; d++)
            for (var e = 0; e < b; e++)
                if (e < b - 1 && d < c - 1) {
                    var f = this.c[d * b + e],
                        h = f[0],
                        f = f[1],
                        g = this.c[d * b + e + 1],
                        B = g[0],
                        g = g[1],
                        k = this.c[(d + 1) * b + e],
                        j = k[0],
                        k = k[1],
                        m = this.c[(d + 1) * b + e + 1],
                        n = m[0],
                        m = m[1],
                        l = this.b[a],
                        q = this.b[a + 1],
                        o = this.b[a + 2],
                        r = this.b[a + 3],
                        v = this.b[a + 4],
                        t = this.b[a + 5],
                        u = this.b[a + 6],
                        s = this.b[a + 7],
                        a = a + 12;
                    this.ia(h, f, B, g, j, k, l, q, o, r, v, t);
                    this.ia(n, m, j, k, B, g, u, s, v, t, o, r);
                    this.Pa([h,
f, B, g, j, k, n, m])
                }
    };
    X.prototype.ia = function (a, b, c, d, e, f, h, g, j, k, n, m) {
        if (!(a == c && a == e && c == e || b == d && b == f && d == f)) {
            var b = this.aa(a, b, c, d),
                a = b[0],
                b = b[1],
                l = this.aa(c, d, e, f),
                c = l[0],
                d = l[1],
                l = this.aa(e, f, a, b),
                e = l[0],
                f = l[1];
            this.h.beginPath();
            this.h.moveTo(a, b);
            this.h.lineTo(c, d);
            this.h.lineTo(e, f);
            this.h.closePath();
            var c = c - a,
                d = d - b,
                e = e - a,
                f = f - b,
                j = j - h,
                k = k - g,
                n = n - h,
                m = m - g,
                o = 1 / (j * m - n * k),
                l = (m * c - k * e) * o,
                k = (m * d - k * f) * o,
                c = (j * e - n * c) * o,
                j = (j * f - n * d) * o,
                a = a - l * h - c * g,
                h = b - k * h - j * g;
            this.h.save();
            this.h.transform(l, k, c, j, a, h);
            this.h.clip();
            this.h.drawImage(this.l, 0, 0);
            this.h.restore()
        }
    };
    X.prototype.aa = function (a, b, c, d) {
        var c = c - a,
            d = d - b,
            e = Math.sqrt(c * c + d * d);
        return [a - c / e * this.ca, b - d / e * this.ca]
    };
    X.prototype.Pa = function (a) {
        for (var b = a.length, c = 0; c < b; c += 2) {
            var d = a[c],
                e = a[c + 1];
            d < this.H && (this.H = d);
            d > this.M && (this.M = d);
            e < this.I && (this.I = e);
            e > this.L && (this.L = e)
        }
    };
    G.prototype.p = function (a, b, c, d) {
        this.h = d;
        this.l = document.createElement("canvas");
        this.l.width = a.width + 6;
        this.l.height = a.width + 6;
        this.l.getContext("2d").drawImage(a, 0, 0);
        this.C = a.width /
            b;
        this.B = a.height / c;
        this.e = b + 1;
        this.n = c + 1;
        this.Ba();
        this.Aa()
    };
    G.prototype.Ba = function () {
        this.c = [];
        this.b = [];
        for (var a = 0; a < this.n; a++)
            for (var b = 0; b < this.e; b++) {
                var c = b * this.C,
                    d = a * this.B;
                this.c.push([c, d]);
                if (b < this.e - 1 && a < this.n - 1) {
                    var e = c + this.C,
                        f = d + this.B;
                    this.b.push(c);
                    this.b.push(d);
                    this.b.push(e);
                    this.b.push(d);
                    this.b.push(c);
                    this.b.push(f);
                    this.b.push(e);
                    this.b.push(f);
                    this.b.push(c);
                    this.b.push(f);
                    this.b.push(e);
                    this.b.push(d)
                }
            }
    };
    G.prototype.Aa = function () {
        this.ea = this.Fa();
        this.Ga = "WebkitTransform" ==
            this.ea ? this.la : this.Ha;
        this.N = [];
        for (var a = this.c.length - this.n, b = 0; b < a; b++)
            if (b % this.e != this.e - 1) {
                var c = this.c[b][0],
                    d = this.c[b][1],
                    e = Math.ceil(this.C),
                    f = Math.ceil(this.B),
                    h = document.createElement("div"),
                    g = document.createElement("div");
                h.style.position = g.style.position = "absolute";
                h.style.left = "0px";
                h.style.top = "0px";
                g.style.left = "0px";
                g.style.top = "0px";
                var j = document.createElement("canvas"),
                    k = document.createElement("canvas");
                j.style.position = k.style.position = "absolute";
                j.style.left = k.style.left =
                    "-1px";
                j.style.top = k.style.top = "-1px";
                j.setAttribute("width", e + 2);
                j.setAttribute("height", f + 2);
                k.setAttribute("width", e + 2);
                k.setAttribute("height", f + 2);
                h.appendChild(j);
                g.appendChild(k);
                this.u.appendChild(h);
                this.u.appendChild(g);
                this.N.push(h);
                this.N.push(g);
                h = j.getContext("2d");
                h.beginPath();
                h.moveTo(0, 0);
                h.lineTo(e + 4, 0);
                h.lineTo(0, f + 4);
                h.clip();
                h.drawImage(this.l, c, d, e + 2, f + 2, 0, 0, e + 2, f + 2);
                k = k.getContext("2d");
                k.beginPath();
                k.moveTo(e + 1, f + 1);
                k.lineTo(0, f + 1);
                k.lineTo(e + 1, 0);
                k.clip();
                k.drawImage(this.l,
                    c, d, e + 1, f + 1, 0, 0, e + 1, f + 1)
            }
    };
    G.prototype.sa = function () {
        for (var a = 0, b = 0, c = 0, d = this.c.length - this.n, e = 0; e < d; e++)
            if (e % this.e == this.e - 1) a = 0, b++;
            else {
                var f = this.c[b * this.e + a],
                    h = f[0],
                    f = f[1],
                    g = this.c[b * this.e + a + 1],
                    j = g[0],
                    g = g[1],
                    k = this.c[(b + 1) * this.e + a],
                    l = k[0],
                    k = k[1],
                    m = this.c[(b + 1) * this.e + a + 1],
                    n = m[0],
                    m = m[1],
                    o = this.N[c++],
                    q = this.N[c++];
                o.style[this.ea] = this.Ga(0, 0, this.C, 0, 0, this.B, h, f, j, g, l, k);
                q.style[this.ea] = this.la(this.C, this.B, 0, 0, 0, 0, n, m, l, k, j, g);
                a++
            }
    };
    G.prototype.la = function (a, b, c, d, e, f, g, j, l, k, n, m) {
        d =
            (l - g) / (c - a);
        m = (m - j) / (f - b);
        c = (k - j) / (c - a);
        f = (n - g) / (f - b);
        return "matrix3d(" + d + "," + c + ",0,0," + f + "," + m + ",0,0,0,0,1,0," + (g - a * d - b * f) + "," + (j - b * m - a * c) + ",0,1)"
    };
    G.prototype.Ha = function (a, b, c, d, e, f, g, j, l, k, n, m) {
        d = (l - g) / (c - a);
        m = (m - j) / (f - b);
        c = (k - j) / (c - a);
        f = (n - g) / (f - b);
        return "matrix(" + d + "," + c + "," + f + "," + m + "," + (g - a * d - b * f) + "," + (j - b * m - a * c) + ")"
    };
    G.prototype.Fa = function () {
        for (var a = document.body, b = ["transform", "WebkitTransform", "MozTransform", "msTransform", "OTransform"], c; c = b.shift();)
            if ("undefined" != typeof a.style[c]) return c;
        return V
    };
    var pb = function () {
            function a(a) {
                a = a ? "addEventListener" : "removeEventListener";
                u[a]("touchend", d, V);
                s[a]("touchend", k, V)
            }

            function b() {
                q("iconBar").style.width = window.innerWidth + "px";
                z.style.width = window.innerWidth + "px";
                z.style.height = window.innerHeight + 1 + "px"
            }

            function c(a) {
                var b, c;
                b || (b = "#BBBBBB");
                c || (c = "#444444");
                a.style.backgroundColor = b;
                setTimeout(function () {
                    a.style.backgroundColor = c;
                    a.style.WebkitTransition = "background-color 0.4s ease-in-out"
                }, 100);
                setTimeout(function () {
                    a.style.WebkitTransition =
                        ""
                }, 750)
            }

            function d() {
                g.w ? e() : (window.addEventListener("resize", f, V), g.S = e, j())
            }

            function e() {
                g.S = A;
                l();
                window.removeEventListener("resize", f, V)
            }

            function f() {
                setTimeout(function () {
                    var a = h();
                    g.a.style.left = "0px";
                    g.a.style.top = "0px";
                    g.move(a.x, a.y);
                    r.ra(g.a)
                }, 10)
            }

            function h() {
                var a, b;
                switch (v) {
                case "":
                    b = window.innerHeight - g.a.offsetHeight;
                    a = Math.round(0.5 * (window.innerWidth - t));
                    b = Math.round(0.5 * b - (80 < b ? 22 : 5));
                    break;
                case "TR":
                    a = window.innerWidth - t - 32;
                    b = 60;
                    break;
                default:
                    console.log("Board align wrong.")
                }
                0 >
                    b && (b = 0);
                return {
                    x: Math.round(a),
                    y: Math.round(b)
                }
            }

            function j() {
                ha = p;
                clearInterval(y);
                var a = h(),
                    b = a.x,
                    c = a.y;
                g.a.style.left = "0px";
                g.a.style.top = "0px";
                g.move(b, 0);
                g.a.style.opacity = 0;
                g.show();
                setTimeout(function () {
                    g.a.style.opacity = 1;
                    g.a.style.WebkitTransform = "translate3d(" + b + "px," + c + "px,0px)";
                    g.a.style.WebkitTransition = "all 0.45s cubic-bezier(0.0,0.55,0.0,1.0)"
                }, 0);
                setTimeout(function () {
                    g.a.style.WebkitTransition = "";
                    r.ra(g.a);
                    Ya || ga()
                }, 500)
            }

            function l() {
                ha = p;
                clearInterval(y);
                var a = 0.3 * -h().y;
                setTimeout(function () {
                    g.a.style.opacity =
                        0;
                    g.a.style.WebkitTransform = "translate3d(0px," + a + "px,0px)";
                    g.a.style.WebkitTransition = "all 0.25s ease-in-out"
                }, 0);
                setTimeout(function () {
                    g.a.style.WebkitTransition = "";
                    g.P();
                    x || ga()
                }, 200)
            }

            function k() {
                if (w == s) {
                    w = {
                        id: "NULL"
                    };
                    c(s);
                    b();
                    g.w && e();
                    ha = p;
                    m(V);
                    a(V);
                    z.style.display = "block";
                    x = p;
                    var d = document.getElementById("aboutOverlayInner");
                    d.style.WebkitTransform = "translate3d(0px,35px,0px)";
                    var f = 0.5 * -d.offsetHeight,
                        f = 300 > window.innerHeight ? f - 4 : f - 8;
                    Q && (f -= 10);
                    setTimeout(function () {
                        z.style.opacity = 1;
                        z.style.WebkitTransition =
                            "opacity 0.25s ease-out";
                        d.style.WebkitTransform = "translate3d(0px," + f + "px,0px)";
                        d.style.WebkitTransition = "-webkit-transform 0.45s cubic-bezier(0.0,0.5,0.0,1.0)"
                    }, 0);
                    setTimeout(function () {
                        z.addEventListener("touchstart", n, V)
                    }, 650)
                }
            }

            function n(b) {
                b.target == z && (setTimeout(function () {
                    z.removeEventListener("touchstart", n, V);
                    z.style.opacity = 0;
                    z.style.WebkitTransition = "opacity 0.2s ease-out";
                    var a = document.getElementById("aboutOverlayInner");
                    a.style.WebkitTransform = "translate3d(0px,8px,0px)";
                    a.style.WebkitTransition =
                        "-webkit-transform 0.25s cubic-bezier(1.000, 0.000, 1.000, 0.750)"
                }, 0), setTimeout(function () {
                    z.style.display = "none";
                    m(p);
                    a(p);
                    ga();
                    x = V
                }, 300))
            }

            function m(a) {
                a ? document.addEventListener("touchstart", o, V) : document.removeEventListener("touchstart", o, V)
            }

            function o(a) {
                3 != a.target.nodeType && a.preventDefault()
            }
            var v = "",
                t = 280,
                u, s, z, x = V,
                w, y;
            return {
                p: function () {
                    if (Q) {
                        var d = navigator.userAgent.split("Android ")[1],
                            d = d.substring(0, d.indexOf(";"));
                        if (2.2 > parseFloat(d)) {
                            Lb('<br><br><div style="font-family:sans;font-size:20px;color:#666666;padding:0 10px">Hello,<br><br>Sorry but you need a newer Android version to run this, at least <strong>2.2</strong> (Froyo).<br><br>But you can still view this site on a desktop computer instead.</div>');
                            return
                        }
                        S.ca = 1.5
                    }
                    var e = q("iconBar");
                    e.style.display = "block";
                    w = s = q("infoBTN");
                    s.addEventListener("touchstart", function () {
                        w = s;
                        c(s)
                    }, V);
                    u = q("optionsBTN");
                    u.addEventListener("touchstart", function () {
                        c(u)
                    }, V);
                    m(p);
                    a(p);
                    z = q("aboutOverlay");
                    g.ua = V;
                    g.U(t, -1);
                    ra && (v = "TR");
                    Q || document.addEventListener("touchstart", function () {
                        0 == document.body.scrollTop && setTimeout(window.scrollTo, 10, 0, 1)
                    }, V);
                    setTimeout(function () {
                        T();
                        b()
                    }, 100);
                    setTimeout(function () {
                        Q && (q("out").style.height = "100%", T());
                        window.onresize = T;
                        window.addEventListener("resize",
                            b, V);
                        q("stickyContainer").style.visibility = "visible";
                        ga()
                    }, P ? 150 : 1250);
                    P ? (setTimeout(function () {
                        e.style.opacity = 1;
                        e.style.WebkitTransition = "opacity 0.55s ease-in-out"
                    }, 1500), setTimeout(function () {
                        e.style.WebkitTransition = ""
                    }, 3E3)) : e.style.opacity = 1
                }
            }
        }(),
        R, sa, S, E = 0,
        F = 0,
        Ba, N, za = Math.PI,
        nb = 2 * za,
        Ra = "url(user/sticky/img/cursor-hand.png),auto",
        Qa = "url(user/sticky/img/cursor-grab.png),auto",
        pa = "default",
        ya = pa,
        ma = 0.5,
        Ia = 0.02,
        mb = 0.01,
        Ja = 0.88,
        o = 0.9,
        O = 0.5,
        Z = 2,
        ab = 0,
        I = 0.5,
        t = 12,
        L, W = 0,
        qa = 24,
        x = 0.07,
        C = 0.045,
        M = 0.2,
        w = x,
        qb = p,
        ea = -4,
        K = 60,
        $ = window.innerWidth,
        fa = window.innerHeight,
        j = [],
        l = [],
        Ab = [],
        y = [],
        v = 7,
        s = 7,
        La = 50 * v,
        yb = 50 * s,
        D, ba, ka, la = 0,
        Oa, Ma = 0.5 * ($ - La),
        Na = 100,
        db = 0,
        fb = 0,
        eb = 0,
        gb = 0,
        aa = V,
        Pa = V,
        ja = V,
        U = V,
        wa = V,
        tb = -1 != document.location.href.indexOf("http"),
        da = navigator.userAgent,
        P = da.match(/iPhone/i) || da.match(/iPod/i) || da.match(/iPad/i),
        Q = /Android/.test(da),
        u = "ontouchend" in document,
        ra = u && 740 < window.innerWidth && 520 < window.innerHeight,
        Y = p,
        ca, ta = V,
        cb = 0,
        va = V,
        ha = V,
        Xa = 0,
        g, rb = 60,
        Ka = rb - 130,
        Ya = !ra,
        ia = 0.875;
    Da = P;
    Ea = P;
    var $a = 0,
        xa = 1;
    requestAnimFrame = function () {
        return function (a) {
            window.setTimeout(a, 15)
        }
    }();
    window.onload = function () {
        q("stickyContainer").style.visibility = "hidden";
        N = new Image;
        N.onload = Ib;
        N.src = "user/sticky/img/gooey-pink-02_small-02.png"
    }
})();