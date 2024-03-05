"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [8089, 2557],
  {
    91133: function (e, t, r) {
      var n = r(92972),
        a = r.n(n),
        i = r(14507),
        s = r.n(i),
        l = r(56552);
      function o(e) {
        var t = e.linkHref,
          r = e.linkText,
          n = e.displayHelpLink,
          a = e.isGlobalSkipLink,
          i = s()("accessibilityLinks", { globalSkipLink: a });
        return (0, l.jsxs)("div", {
          className: i,
          children: [
            (0, l.jsx)("a", {
              className: "accessibilitySkipLink",
              href: t,
              children: r,
            }),
            n &&
              (0, l.jsx)("a", {
                className: "accessibilityHelpLink",
                href: "/accessibility",
                children: "Accessibility Help",
              }),
          ],
        });
      }
      (o.propTypes = {
        linkText: a().string,
        linkHref: a().string,
        displayHelpLink: a().bool,
        isGlobalSkipLink: a().bool,
      }),
        (o.defaultProps = {
          linkText: "Skip to Main Content",
          linkHref: "#content",
          displayHelpLink: !1,
          isGlobalSkipLink: !1,
        }),
        (t.Z = o);
    },
    58001: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return Ue;
          },
        });
      var n = r(29439),
        a = r(32747),
        i = r(7636),
        s = r(92972),
        l = r.n(s),
        o = r(14507),
        c = r.n(o),
        u = r(91133),
        p = (r(58109), r(95566), r(68438), r(83464), r(19496), r(84506)),
        f = r(4942),
        d = r(79532),
        h = r(65393),
        v = r(56552);
      function b(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        var t = {
          path: e.path,
          items: e.items,
          viewport: e.viewport,
          gemDepartment: e.gemDepartment,
          className: "regionalNav",
        };
        return (0, v.jsx)(
          h.ZP,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? b(Object(r), !0).forEach(function (t) {
                    (0, f.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : b(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({}, t)
        );
      }
      (m.propTypes = {
        path: l().string.isRequired,
        gemDepartment: l().object,
        items: l().array,
        viewport: l().string,
      }),
        (m.defaultProps = {
          path: "",
          gemDepartment: null,
          items: null,
          viewport: "",
        });
      var j = m,
        g = (r(9867), r(7231), r(75564)),
        C = r(26574),
        y = r(77008);
      function O(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var w = function (e) {
        var t = { collapseOnMobile: e.collapseOnMobile, usingRightSideNav: !0 },
          r = (0, g.d)(e.items, e.path, t),
          n = r.assignRef,
          a = (0, r.getHiddenItemsCount)(),
          i = "",
          s = "viewportSmall" === e.viewport,
          l = s ? e.items : null,
          o = 0,
          u = !0;
        e.items &&
          !s &&
          ((o = e.items.length - a),
          (l = e.items.slice(o, e.items.length)),
          (i = e.items.map(function (t, r) {
            return (
              a && (u = r < o),
              (0, h.E4)(e, { value: t, index: r, isVisible: u })
            );
          })));
        var p = c()("subNavList", e.className, { allHidden: s || !o });
        return (0, v.jsx)(
          "div",
          x(
            x(
              { className: "olympicsResponsiveNav" },
              (0, y.Z)({ name: "navigation", instance: "secondary-navigation" })
            ),
            {},
            {
              children: (0, v.jsxs)("ul", {
                className: p,
                ref: function (e) {
                  return n(e);
                },
                id: e.id,
                children: [
                  i,
                  (0, h.Pb)(e, l, a, s),
                  (0, v.jsxs)("div", {
                    className: "rightAlignNav",
                    children: [
                      (0, v.jsx)(C.default, {
                        url: "/player/sports/olympics/winter/replays",
                        className: "watchReplaysLink",
                        "data-feature-name": "navigation",
                        "data-feature-instance": "secondary-navigation",
                        children: "Watch Replays",
                      }),
                      (0, v.jsx)(C.default, {
                        url: "/player/sports/olympics/winter/live",
                        className: "watchLiveLink",
                        "data-feature-name": "navigation",
                        "data-feature-instance": "secondary-navigation",
                        children: "Watch Live",
                      }),
                    ],
                  }),
                ],
              }),
            }
          )
        );
      };
      (w.propTypes = {
        items: l().array,
        baseNavSection: l().string.isRequired,
        subSection: l().string.isRequired,
        path: l().string,
        showLogo: l().bool,
        className: l().string,
        viewport: l().string,
        collapseOnMobile: l().bool,
        gemDepartment: l().object,
        id: l().string,
        moreButtonLabel: l().string,
        isExternalHeader: l().bool,
      }),
        (w.defaultProps = {
          items: null,
          baseNavSection: "",
          subSection: "",
          path: "",
          showLogo: !1,
          className: "",
          viewport: "",
          collapseOnMobile: !0,
          gemDepartment: null,
          id: "",
          moreButtonLabel: "",
          isExternalHeader: !1,
        });
      var N = w,
        L = r(41130),
        S = function (e) {
          var t = e.icon,
            r = void 0 === t ? (0, v.jsx)(L.Z, {}) : t;
          return (0, v.jsxs)(a.Fragment, {
            children: [
              (0, v.jsxs)("svg", {
                width: "443",
                height: "49",
                viewBox: "0 0 443 49",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "winterOlympicsBrandBannerLogo",
                role: "img",
                "aria-label": "Beijing 2022",
                children: [
                  (0, v.jsx)("path", {
                    d: "M100.386 0.151611V48.5263L92.3359 40.5302V0.151611H100.386Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M152.149 0.151611V48.5263L144.1 40.5302V0.151611H152.149Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M241.927 38.1805V23.742H250.015V41.8564C247.798 44.1298 245.146 45.9337 242.217 47.1609C239.289 48.3881 236.144 49.0135 232.969 48.9999C229.715 49.0276 226.491 48.3825 223.498 47.1051C220.63 45.8671 218.022 44.0993 215.808 41.8943C213.57 39.6522 211.772 37.0108 210.505 34.1066C209.218 31.1161 208.572 27.8884 208.611 24.6325C208.603 21.4224 209.247 18.2442 210.505 15.2911C211.736 12.4127 213.503 9.79532 215.714 7.57916C217.968 5.37992 220.606 3.61368 223.498 2.36841C226.488 1.08304 229.714 0.437613 232.969 0.473594H250.015L241.89 8.58342H232.969C230.816 8.56953 228.682 8.99506 226.699 9.834C224.75 10.625 222.974 11.7901 221.472 13.2636C219.99 14.753 218.801 16.5078 217.968 18.4365C217.108 20.4283 216.669 22.5766 216.68 24.7462C216.665 26.9101 217.104 29.053 217.968 31.037C218.8 32.946 219.975 34.6864 221.434 36.172C222.909 37.6611 224.667 38.84 226.605 39.6395C228.602 40.4749 230.747 40.9002 232.912 40.8901C236.122 40.9245 239.267 39.9793 241.927 38.1805Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M127.868 0.303223H123.834V8.37515H127.868V40.7197H116.409V32.5909H108.359V40.7765C108.357 41.8332 108.563 42.8799 108.965 43.8568C109.368 44.8338 109.959 45.7217 110.705 46.4697C111.451 47.2177 112.337 47.8112 113.313 48.2162C114.288 48.6211 115.334 48.8295 116.39 48.8295H128.417C130.427 48.8295 132.354 48.031 133.775 46.6096C135.195 45.1882 135.994 43.2604 135.994 41.2502V0.303223H127.868Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M42.9571 14.4575C42.9717 12.5699 42.5977 10.6994 41.8586 8.96254C40.3988 5.5572 37.6863 2.8436 34.2824 1.38327C32.5501 0.654892 30.6876 0.287396 28.8085 0.303225H4.03433V20.5588H0V28.6118H28.8085C29.6317 28.6074 30.446 28.782 31.195 29.1234C31.9072 29.4455 32.5504 29.9023 33.0891 30.4687C33.6159 31.0203 34.0393 31.6621 34.3392 32.3635C34.6403 33.0904 34.7948 33.8695 34.7938 34.6563C34.7897 35.4548 34.6355 36.2454 34.3392 36.9869C34.0537 37.7276 33.6164 38.4003 33.0553 38.9616C32.4942 39.5229 31.8218 39.9604 31.0814 40.246C30.3401 40.5399 29.5491 40.6879 28.7517 40.6818H12.1219V30.6772L4.03433 32.212V48.8106H28.8085C30.6908 48.8209 32.5548 48.4402 34.2824 47.6926C37.683 46.2274 40.3939 43.5154 41.8586 40.1134C42.5978 38.3832 42.9718 36.5189 42.9571 34.6373C42.9783 32.7619 42.6066 30.9027 41.8661 29.1796C41.1256 27.4565 40.0327 25.9077 38.6576 24.6327C40.0392 23.3267 41.1347 21.748 41.8748 19.9965C42.6149 18.245 42.9834 16.3589 42.9571 14.4575ZM34.396 16.8071C34.0997 17.5414 33.6586 18.2085 33.0988 18.7685C32.5391 19.3284 31.8723 19.7698 31.1382 20.0662C30.4031 20.3868 29.6105 20.5545 28.8085 20.5588H12.1219V8.41305H28.8085C29.6071 8.41343 30.3981 8.56783 31.1382 8.8678C31.8523 9.16086 32.4974 9.5997 33.0323 10.1563C33.5825 10.6965 34.0203 11.3406 34.3202 12.0511C34.6201 12.7915 34.7744 13.5828 34.7748 14.3817C34.8141 15.2075 34.6852 16.0327 34.396 16.8071Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M192.416 0.227295V22.8135L200.523 33.6519V0.227295H192.416Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M186.413 23.9315L160.086 0.227295V48.7915H168.136V19.725L200.524 48.8673V39.6585V36.6646L192.417 29.3507L186.413 23.9315Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M80.1755 20.5398H62.8828C62.9027 22.6591 63.757 24.6852 65.2604 26.1785C66.7638 27.6719 68.795 28.5121 70.9136 28.517H80.1755V20.5398Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M58.9056 40.7954V8.31821H84.2101V0.28418H58.5079C56.4985 0.28418 54.5715 1.08271 53.1507 2.5041C51.7298 3.92549 50.9316 5.8533 50.9316 7.86345V41.2123C50.9316 43.2224 51.7298 45.1502 53.1507 46.5716C54.5715 47.993 56.4985 48.7915 58.5079 48.7915H84.2101V40.7954H58.9056Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M348.505 0H330.436C328.426 0 326.499 0.798528 325.078 2.21992C323.658 3.64131 322.859 5.56912 322.859 7.57927V40.9281C322.859 42.9382 323.658 44.866 325.078 46.2874C326.499 47.7088 328.426 48.5073 330.436 48.5073H348.505C350.514 48.5073 352.441 47.7088 353.862 46.2874C355.283 44.866 356.081 42.9382 356.081 40.9281V7.57927C356.081 5.56912 355.283 3.64131 353.862 2.21992C352.441 0.798528 350.514 0 348.505 0V0ZM348.05 40.4733H330.89V8.09087H348.05V40.4733Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M314.11 0.0756836H278.445H278.369L286.419 8.10971H306.666V16.0869L306.609 16.1627L285.339 40.5869H285.358L278.369 48.6399H314.716V40.5869H296.855L314.716 19.5734V8.10971V0.0756836H314.11Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M397.997 0.0756836H362.332H362.256L370.306 8.10971H390.553V16.0869L390.496 16.1627L369.226 40.5869H369.245L362.256 48.6399H398.603V40.5869H380.742L398.603 19.5734V8.10971V0.0756836H397.997Z",
                    fill: "white",
                  }),
                  (0, v.jsx)("path", {
                    d: "M442.393 0.0756836H406.709H406.652L414.683 8.10971H414.702H434.95V16.0869L434.874 16.1627L413.622 40.5869L406.652 48.6399H442.999V40.5869H425.138L442.999 19.5734V8.10971V0.0756836H442.393Z",
                    fill: "white",
                  }),
                ],
              }),
              r,
            ],
          });
        },
        P = (0, v.jsx)(S, {}),
        k = (0, v.jsxs)("svg", {
          className: "summerOlympicsBrandBannerLogo",
          "aria-label": "Tokyo 2020 Olympics Home Page",
          width: "605px",
          height: "76px",
          viewBox: "0 0 605 76",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          children: [
            (0, v.jsx)("defs", {
              children: (0, v.jsx)("path", {
                d: "M131.419046,2 L131.419046,56.8901271 L172.442301,2 L180.351923,2 L144.53797,49.8277827 L181,72.6109493 L168.90874,72.6109493 L140.627907,55.1003335 L125,76 L125,2 L131.419046,2 Z M501.983937,0 C505.300122,0 508.425173,0.627916242 511.36546,1.87737394 C514.305748,3.13001904 516.854209,4.85121077 519.010845,7.04094913 C521.16748,9.23387489 522.871764,11.7965381 524.126881,14.738501 C525.375627,17.6804639 526,20.810483 526,24.1253708 C526,27.3796981 525.375627,30.4619062 524.126881,33.3719952 C522.950208,36.1002036 521.367562,38.5118517 519.371066,40.6069395 L518.966246,41.0217362 L494.38315,65.6156536 L519.622475,65.6156536 L526,71.9968126 L526,72 L479,72 L514.461841,36.5179512 C516.086485,34.8891939 517.335231,33.0118199 518.21445,30.8858294 C519.090484,28.7598389 519.530094,26.5031653 519.530094,24.1253708 C519.530094,21.6838284 519.07137,19.4016557 518.166667,17.2724778 C517.258777,15.1464872 516.006846,13.2850502 514.414057,11.6881668 C512.821269,10.0912834 510.957706,8.82270131 508.832927,7.88560804 C506.704961,6.94532737 504.420903,6.47678073 501.983937,6.47678073 C499.543785,6.47678073 497.275654,6.94532737 495.179545,7.88560804 C493.083435,8.82270131 491.242172,10.0912834 489.646198,11.6881668 C488.69194,12.6401346 487.906322,13.7280977 487.208799,14.8804209 L486.9512,15.315419 L479.71994,15.315419 C479.79958,15.1241755 479.850549,14.9265572 479.933374,14.738501 C481.18212,11.7965381 482.892775,9.23387489 485.046225,7.04094913 C487.206046,4.85121077 489.741765,3.13001904 492.647011,1.87737394 C495.555443,0.627916242 498.667751,0 501.983937,0 Z M436.003182,0 C440.957398,0 445.628425,0.948205763 450.003535,2.84779919 C454.381828,4.74739261 458.19056,7.31518473 461.442461,10.5607212 C464.681633,13.8062577 467.255789,17.6181722 469.155383,21.9964646 C471.048612,26.3747569 472,31.0394202 472,36 C472,40.9605798 471.048612,45.628425 469.155383,50.0035354 C467.255789,54.3818278 464.681633,58.1969242 461.442461,61.4392788 C458.19056,64.6848153 454.381828,67.2557893 450.003535,69.1522008 C445.628425,71.0517942 440.957398,72 436.003182,72 C431.03942,72 426.371575,71.0517942 421.996465,69.1522008 C417.618172,67.2557893 413.790348,64.6848153 410.516175,61.4392788 C407.238819,58.1969242 404.667845,54.3818278 402.800071,50.0035354 C400.932296,45.628425 400,40.9605798 400,36 C400,31.0394202 400.932296,26.3747569 402.800071,21.9964646 C404.667845,17.6181722 407.238819,13.8062577 410.516175,10.5607212 C413.790348,7.31518473 417.618172,4.74739261 421.996465,2.84779919 C426.371575,0.948205763 431.03942,0 436.003182,0 Z M369.983937,0 C373.300122,0 376.425173,0.627916242 379.36546,1.87737394 C382.305748,3.13001904 384.857395,4.85121077 387.010845,7.04094913 C389.16748,9.23387489 390.871764,11.7965381 392.126881,14.738501 C393.375627,17.6804639 394,20.810483 394,24.1253708 C394,27.3796981 393.375627,30.4619062 392.126881,33.3719952 C390.950208,36.1002036 389.367562,38.5118517 387.371066,40.6069395 L386.966246,41.0217362 L362.38315,65.6156536 L387.625661,65.6156536 L394,71.9968126 L394,72 L347,72 L382.461841,36.5179512 C384.086485,34.8891939 385.338417,33.0118199 386.21445,30.8858294 C387.090484,28.7598389 387.530094,26.5031653 387.530094,24.1253708 C387.530094,21.6838284 387.07137,19.4016557 386.166667,17.2724778 C385.258777,15.1464872 384.010031,13.2850502 382.414057,11.6881668 C380.821269,10.0912834 378.957706,8.82270131 376.832927,7.88560804 C374.704961,6.94532737 372.424088,6.47678073 369.983937,6.47678073 C367.543785,6.47678073 365.275654,6.94532737 363.179545,7.88560804 C361.086621,8.82270131 359.242172,10.0912834 357.646198,11.6881668 C356.69194,12.6401346 355.906322,13.7280977 355.208799,14.8804209 L354.9512,15.315419 L347.723126,15.315419 C347.79958,15.1241755 347.853735,14.9265572 347.933374,14.738501 C349.18212,11.7965381 350.892775,9.23387489 353.046225,7.04094913 C355.206046,4.85121077 357.741765,3.13001904 360.647011,1.87737394 C363.555443,0.627916242 366.667751,0 369.983937,0 Z M275.001591,0 C279.95877,0 284.62959,0.948205763 289.004507,2.84779919 C293.382606,4.74739261 297.191171,7.31518473 300.439745,10.5607212 C303.681957,13.8062577 306.252817,17.6181722 308.152327,21.9964646 C310.048654,26.3747569 311,31.0394202 311,36 C311,40.9605798 310.048654,45.628425 308.152327,50.0035354 C306.252817,54.3818278 303.681957,58.1969242 300.439745,61.4392788 C297.191171,64.6848153 293.382606,67.2557893 289.004507,69.1522008 C284.62959,71.0517942 279.95877,72 275.001591,72 C270.04123,72 265.37041,71.0517942 260.995493,69.1522008 C256.617394,67.2557893 252.789739,64.6848153 249.51571,61.4392788 C246.238499,58.1969242 243.670821,54.3818278 241.803129,50.0035354 C239.932255,45.628425 239,40.9605798 239,36 C239,31.0394202 239.932255,26.3747569 241.803129,21.9964646 C243.670821,17.6181722 246.238499,13.8062577 249.51571,10.5607212 C252.789739,7.31518473 256.617394,4.74739261 260.995493,2.84779919 C265.37041,0.948205763 270.04123,0 275.001591,0 Z M191.218536,0 L213.99689,45.3161108 L236.781464,0 L244,0 L217.18785,53.2817836 L217.18785,72 L210.81215,72 L210.81215,53.2817836 L184,0 L191.218536,0 Z M78.0015909,0 C82.9587697,0 87.6295903,0.948205763 92.0045075,2.84779919 C96.3826064,4.74739261 100.191171,7.31518473 103.439745,10.5607212 C106.681957,13.8062577 109.252817,17.6181722 111.152327,21.9964646 C113.048654,26.3747569 114,31.0394202 114,36 C114,40.9605798 113.048654,45.628425 111.152327,50.0035354 C109.252817,54.3818278 106.681957,58.1969242 103.439745,61.4392788 C100.191171,64.6848153 96.3826064,67.2557893 92.0045075,69.1522008 C87.6295903,71.0517942 82.9587697,72 78.0015909,72 C73.0412303,72 68.3704097,71.0517942 63.9954925,69.1522008 C59.6173936,67.2557893 55.7929206,64.6848153 52.5157099,61.4392788 C49.241681,58.1969242 46.6708206,54.3818278 44.8031287,50.0035354 C42.9354368,45.628425 42,40.9605798 42,36 C42,31.0394202 42.9354368,26.3747569 44.8031287,21.9964646 C46.6708206,17.6181722 49.241681,13.8062577 52.5157099,10.5607212 C55.7929206,7.31518473 59.6173936,4.74739261 63.9954925,2.84779919 C68.3704097,0.948205763 73.0412303,0 78.0015909,0 Z M49,0 L42.6017716,6.52605503 L24.5218583,6.52605503 L24.5218583,72 L18.026829,65.3783951 L18.026829,6.52605503 L0,6.52605503 L0,0 L49,0 Z M568.616751,0.907826087 C573.566155,0.907826087 578.22965,1.84069565 582.597706,3.70956522 C586.968938,5.57843478 590.771529,8.10469565 594.015009,11.2977391 C597.252135,14.4907826 599.818963,18.2410435 601.71867,22.5485217 C603.608847,26.856 604.558701,31.4452174 604.558701,36.3255652 C604.558701,41.205913 603.608847,45.7982609 601.71867,50.1026087 C599.818963,54.410087 597.252135,58.1634783 594.015009,61.3533913 C590.771529,64.5464348 586.968938,67.0758261 582.597706,68.9415652 C578.22965,70.8104348 573.566155,71.7433043 568.616751,71.7433043 C563.66417,71.7433043 559.000675,70.8104348 554.63262,68.9415652 C550.261387,67.0758261 546.439736,64.5464348 543.170842,61.3533913 C539.901948,58.1634783 537.33512,54.410087 535.470357,50.1026087 C533.602418,45.7982609 532.671625,41.205913 532.671625,36.3255652 C532.671625,31.4452174 533.602418,26.856 535.470357,22.5485217 C537.33512,18.2410435 539.901948,14.4907826 543.170842,11.2977391 C546.439736,8.10469565 550.261387,5.57843478 554.63262,3.70956522 C559.000675,1.84069565 563.66417,0.907826087 568.616751,0.907826087 Z M436.003182,6.33834188 C431.898533,6.33834188 428.042072,7.11790702 424.430617,8.6802192 C420.812798,10.2393495 417.662719,12.3521301 414.967651,15.0153792 C412.275765,17.6786282 410.147074,20.8191621 408.587944,24.427435 C407.025632,28.0420718 406.246067,31.8985328 406.246067,36 C406.246067,40.1046491 407.025632,43.9611101 408.587944,47.572565 C410.147074,51.1840198 412.275765,54.3245537 414.967651,56.9846208 C417.662719,59.6510518 420.812798,61.7606505 424.430617,63.3229627 C428.042072,64.882093 431.898533,65.6616581 436.003182,65.6616581 C440.104649,65.6616581 443.957928,64.882093 447.569383,63.3229627 C451.18402,61.7606505 454.324554,59.6510518 456.984621,56.9846208 C459.64787,54.3245537 461.757469,51.1840198 463.322963,47.572565 C464.885275,43.9611101 465.66484,40.1046491 465.66484,36 C465.66484,31.8985328 464.885275,28.0420718 463.322963,24.427435 C461.757469,20.8191621 459.64787,17.6786282 456.984621,15.0153792 C454.324554,12.3521301 451.18402,10.2393495 447.569383,8.6802192 C443.957928,7.11790702 440.104649,6.33834188 436.003182,6.33834188 Z M275.001591,6.33834188 C270.897123,6.33834188 267.040833,7.11790702 263.429537,8.6802192 C259.81506,10.2393495 256.66512,12.3521301 253.970171,15.0153792 C251.275222,17.6786282 249.146626,20.8191621 247.587565,24.427435 C246.028503,28.0420718 245.248973,31.8985328 245.248973,36 C245.248973,40.1046491 246.028503,43.9611101 247.587565,47.572565 C249.146626,51.1840198 251.275222,54.3245537 253.970171,56.9846208 C256.66512,59.6510518 259.81506,61.7606505 263.429537,63.3229627 C267.040833,64.882093 270.897123,65.6616581 275.001591,65.6616581 C279.102877,65.6616581 282.959167,64.882093 286.570463,63.3229627 C290.181758,61.7606505 293.322153,59.6510518 295.985284,56.9846208 C298.645234,54.3245537 300.757921,51.1840198 302.323346,47.572565 C303.882408,43.9611101 304.661938,40.1046491 304.661938,36 C304.661938,31.8985328 303.882408,28.0420718 302.323346,24.427435 C300.757921,20.8191621 298.645234,17.6786282 295.985284,15.0153792 C293.322153,12.3521301 290.181758,10.2393495 286.570463,8.6802192 C282.959167,7.11790702 279.102877,6.33834188 275.001591,6.33834188 Z M78.0015909,6.33834188 C73.8971232,6.33834188 70.0440143,7.11790702 66.4295373,8.6802192 C62.8150603,10.2393495 59.66512,12.3521301 56.970171,15.0153792 C54.2784038,17.6786282 52.1498078,20.8191621 50.5875646,24.427435 C49.0285032,28.0420718 48.2489726,31.8985328 48.2489726,36 C48.2489726,40.1046491 49.0285032,43.9611101 50.5875646,47.572565 C52.1498078,51.1840198 54.2784038,54.3245537 56.970171,56.9846208 C59.66512,59.6510518 62.8150603,61.7606505 66.4295373,63.3229627 C70.0440143,64.882093 73.8971232,65.6616581 78.0015909,65.6616581 C82.1028768,65.6616581 85.9591674,64.882093 89.5704627,63.3229627 C93.1817579,61.7606505 96.322153,59.6510518 98.9852844,56.9846208 C101.648416,54.3245537 103.757921,51.1840198 105.323346,47.572565 C106.882408,43.9611101 107.661938,40.1046491 107.661938,36 C107.661938,31.8985328 106.882408,28.0420718 105.323346,24.427435 C103.757921,20.8191621 101.648416,17.6786282 98.9852844,15.0153792 C96.322153,12.3521301 93.1817579,10.2393495 89.5704627,8.6802192 C85.9591674,7.11790702 82.1028768,6.33834188 78.0015909,6.33834188 Z M568.616751,7.14365217 C564.521897,7.14365217 560.671655,7.9106087 557.062847,9.44765217 C553.454039,10.9815652 550.309039,13.0601739 547.618317,15.6803478 C544.930771,18.3005217 542.805514,21.3902609 541.248897,24.9401739 C539.689105,28.4963478 538.910796,32.2904348 538.910796,36.3255652 C538.910796,40.3638261 539.689105,44.157913 541.248897,47.7109565 C542.805514,51.264 544.930771,54.3537391 547.618317,56.9707826 C550.309039,59.594087 553.454039,61.6695652 557.062847,63.2066087 C560.671655,64.7405217 564.521897,65.5074783 568.616751,65.5074783 C572.711605,65.5074783 576.561847,64.7405217 580.167478,63.2066087 C583.77311,61.6695652 586.911756,59.594087 589.567534,56.9707826 C592.223312,54.3537391 594.332685,51.264 595.895655,47.7109565 C597.452271,44.157913 598.230579,40.3638261 598.230579,36.3255652 C598.230579,32.2904348 597.452271,28.4963478 595.895655,24.9401739 C594.332685,21.3902609 592.223312,18.3005217 589.567534,15.6803478 C586.911756,13.0601739 583.77311,10.9815652 580.167478,9.44765217 C576.561847,7.9106087 572.711605,7.14365217 568.616751,7.14365217 Z",
                id: "path-1",
              }),
            }),
            (0, v.jsx)("g", {
              id: "Logos/Tokyo2020-wordmark-hrz",
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              fillRule: "evenodd",
              children: (0, v.jsxs)("g", {
                id: "Tokyo2020",
                children: [
                  (0, v.jsx)("mask", {
                    id: "mask-2",
                    fill: "white",
                    children: (0, v.jsx)("use", { xlinkHref: "#path-1" }),
                  }),
                  (0, v.jsx)("use", {
                    id: "Combined-Shape",
                    fill: "#000000",
                    xlinkHref: "#path-1",
                  }),
                ],
              }),
            }),
          ],
        });
      function H(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : H(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var E = function (e) {
          var t = e.season,
            r = void 0 === t ? null : t,
            n = e.url,
            a = e.logo,
            i = void 0 === a ? null : a;
          if ("summer" !== r && "winter" !== r) return null;
          var s = n || "/sports/olympics";
          return "summer" === r
            ? (0, v.jsx)(C.default, {
                url: s,
                children: (0, v.jsx)("div", {
                  className: "summerOlympicsBrandBanner",
                  "data-feature-name": "banner",
                  children: (0, v.jsx)("div", {
                    className: "summerOlympicsBrandBannerOrigami",
                    children: k,
                  }),
                }),
              })
            : (0, v.jsx)(C.default, {
                className: "bannerFocus",
                url: s,
                children: (0, v.jsx)(
                  "div",
                  D(
                    D(
                      { className: "winterOlympicsBrandBanner" },
                      (0, y.Z)({ name: "banner", instance: "Beijing" })
                    ),
                    {},
                    {
                      children: (0, v.jsx)("div", {
                        className: "winterOlympicsBrandBannerBricks",
                        children: i || P,
                      }),
                    }
                  )
                ),
              });
        },
        Z = r(52473),
        M = r(46924),
        B = r(88101);
      function V(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : V(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var T = function (e) {
        var t = (0, i.useSelector)(function (e) {
          return e.detail && e.detail.content && e.detail.content.sponsorBio
            ? e.detail.content.sponsorBio.label
            : null;
        });
        if ((0, M.ek)(t)) return null;
        var r = Z.O0[e.baseNavSection],
          n = r
            ? r.filter(function (e) {
                return !0 !== e.hidden;
              })
            : null;
        e.regionObject &&
          (n = e.regionObject.navigation ? e.regionObject.navigation : []);
        var a = {
            baseNavSection: e.baseNavSection,
            subSection: e.subSection,
            path: e.path,
            showLogo: !0,
            items: n,
            viewport: e.viewport,
            gemDepartment: e.gemDepartment,
            isExternalHeader: e.isExternalHeader,
          },
          s = (0, B.WM)({ baseNavSection: e.baseNavSection }),
          l = (0, v.jsx)(h.ZP, R({}, a)),
          o = null;
        return (
          e.regionObject
            ? (l = (0, v.jsx)(
                j,
                R(R({}, a), {}, { sectionTitle: e.regionObject.title })
              ))
            : s &&
              ((l = (0, v.jsx)(N, R({}, a))),
              (o = (0, v.jsx)(E, {
                season: (0, B.oQ)({ baseNavSection: e.baseNavSection }),
              }))),
          (0, v.jsxs)("nav", {
            className: "sclt-landingnav landingNav",
            "aria-label": "CBC ".concat(e.baseNavSection),
            children: [
              o,
              (0, v.jsx)("div", {
                className: "landingWrapper",
                "data-cy": "nav-landing-wrapper",
                children: l,
              }),
            ],
          })
        );
      };
      (T.propTypes = {
        baseNavSection: l().string.isRequired,
        subSection: l().string.isRequired,
        path: l().string.isRequired,
        viewport: l().string.isRequired,
        isDetail: l().bool,
        regionObject: l().object,
        gemDepartment: l().object,
        hasTertiaryNav: l().bool,
        isExternalHeader: l().bool,
      }),
        (T.defaultProps = {
          baseNavSection: "",
          subSection: "",
          path: "",
          viewport: "",
          isDetail: !1,
          regionObject: null,
          gemDepartment: null,
          hasTertiaryNav: !1,
          isExternalHeader: !1,
        });
      var A = T,
        I = { "sports/soccer/worldcup": !0 };
      function _(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : _(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function W(e) {
        if (
          I[e.path] ||
          ((0, B.F2)({ contentId: e.contentId }) && I[(0, B.j0)(e.path)])
        )
          return null;
        var t = c()("sclt-tertiarynav", { tertiaryNav: !0 }),
          r = e.items ? e.items : null;
        if (!Array.isArray(r)) return null;
        var n = r[0] || null,
          a = n ? n.title : "",
          i = {
            baseNavSection: e.baseNavSection,
            subSection: e.subSection,
            path: e.path,
            showLogo: !1,
            items: r,
            viewport: e.viewport,
            gemDepartment: null,
            isExternalHeader: e.isExternalHeader,
            moreButtonLabel: a
              ? "More ".concat(a.replace("Home", ""))
              : e.moreButtonLabel,
          };
        return (0, v.jsx)("nav", {
          className: t,
          children: (0, v.jsx)("div", {
            className: "tertiaryNavWrapper",
            children: (0, v.jsx)(h.ZP, F({}, i)),
          }),
        });
      }
      (W.propTypes = {
        items: l().array,
        baseNavSection: l().string.isRequired,
        subSection: l().string.isRequired,
        path: l().string.isRequired,
        viewport: l().string.isRequired,
        moreButtonLabel: l().string,
        isExternalHeader: l().bool,
        contentId: l().string,
      }),
        (W.defaultProps = {
          items: null,
          baseNavSection: "",
          subSection: "",
          path: "",
          viewport: "",
          moreButtonLabel: "More",
          isExternalHeader: !1,
          contentId: "",
        });
      var q = r(93433),
        G = r(1762),
        z = [
          { link: "//www.cbc.ca/news/", title: "News", type: "external" },
          { link: "//www.cbc.ca/sports/", title: "Sports", type: "external" },
          { link: "//www.cbc.ca/radio/", title: "Radio", type: "external" },
          { link: "//www.cbc.ca/television/", title: "TV", type: "external" },
          {
            link: "//www.cbc.ca/sitemap/",
            title: "Discover",
            type: "external",
          },
        ];
      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function U(e) {
        var t = {
            path: e.path,
            items: (0, q.Z)(z),
            className: "externalSubNav",
          },
          r = c()("externalNav", e.sectionName);
        return (0, v.jsx)("nav", {
          className: r,
          children: (0, v.jsx)(G.Z, Q({}, t)),
        });
      }
      (U.propTypes = { path: l().string, sectionName: l().string }),
        (U.defaultProps = { path: "", sectionName: "" });
      var J = U,
        X = r(56169),
        Y = r(2557),
        $ = function (e) {
          if (Z.R7 && Z.R7[e]) return (0, q.Z)(Z.R7[e]);
          for (var t in Z.R7)
            if (
              Object.prototype.hasOwnProperty.call(Z.R7, t) &&
              e.startsWith(t)
            )
              return (0, q.Z)(Z.R7[t]);
          return null;
        },
        ee = r(14567);
      function te(e) {
        return e.membership;
      }
      var re = r(41718),
        ne = r(84061),
        ae = function (e) {
          var t = (0, a.useState)(""),
            r = (0, n.Z)(t, 2),
            s = r[0],
            l = r[1],
            o = (0, a.useRef)(!1),
            u = (0, i.useDispatch)(),
            p = (0, i.useSelector)(te),
            f =
              void 0 === p
                ? null
                : null === p || void 0 === p
                ? void 0
                : p.isAuthenticated,
            d = null === p || void 0 === p ? void 0 : p.userProfile.FullName,
            h = "";
          d &&
            d.split(" ").forEach(function (e) {
              h += e[0];
            }),
            (0, a.useEffect)(function () {
              return (
                (o.current = !0),
                (0, ne.l$)()
                  .then(function (e) {
                    var t = e.checkLoggedInStatus,
                      r = e.logout;
                    f ? r()(u) : t()(u);
                  })
                  .catch(function (e) {
                    re.default.error(
                      "ExternalProfileButton - MEMBERSHIP ACTION ERROR",
                      e
                    );
                  }),
                window.location !== window.parent.location
                  ? l(document.referrer)
                  : l(document.location.href),
                function () {
                  o.current = !1;
                }
              );
            }, []);
          var b = function () {
              if (!f)
                return (0, v.jsx)(X.default, {
                  type: "profile",
                  className: "profilePic",
                });
              var e = c()("profilePic"),
                t =
                  (null === p || void 0 === p
                    ? void 0
                    : p.community.pic_large_pending) ||
                  (null === p || void 0 === p
                    ? void 0
                    : p.community.pic_large) ||
                  "";
              return "" === t
                ? ((e += " profileInitials"),
                  (0, v.jsx)("span", { className: e, children: h }))
                : ((e += " profileImage"),
                  (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsx)("img", {
                        alt: "profile",
                        src: t,
                        className: "profileImageErrorCheck",
                        onError: function () {
                          t = "";
                        },
                        loading: "lazy",
                      }),
                      (0, v.jsx)("span", {
                        className: e,
                        style: { backgroundImage: "url(".concat(t, ")") },
                      }),
                    ],
                  }));
            },
            m = "" !== d && "Guest" !== d && d ? d : "Sign In";
          return (0, v.jsx)("div", {
            className: c()(
              { hideProfileButton: !o.current },
              "externalProfileButtonWrapper",
              "profileButtonWrapper"
            ),
            children: (function () {
              var t = "";
              return (
                (t = f
                  ? "".concat(ee.DO)
                  : e.path
                  ? ""
                      .concat(ee.Jt, "?returnto=")
                      .concat(s, "&referrer=")
                      .concat(s)
                  : "".concat(ee.Jt)),
                (0, v.jsx)("a", {
                  target: "_top",
                  href: t,
                  children: (0, v.jsxs)("button", {
                    className: "profileButtonNav",
                    children: [
                      b(),
                      (0, v.jsx)("span", {
                        className: "profileText",
                        children: m,
                      }),
                    ],
                  }),
                })
              );
            })(),
          });
        },
        ie = r(99451);
      function se(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? se(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : se(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var oe = function (e) {
        var t = (0, a.useState)(d.ln),
          r = (0, n.Z)(t, 2),
          i = r[0],
          s = r[1],
          l = (0, a.useRef)(null),
          o = (0, ie.useFeatureFlag)("externalsignin.display");
        (0, a.useEffect)(function () {
          var e = { domNode: l, callback: u };
          d.ZP.registerMediaQueryObject(e);
        }, []);
        var u = function (e) {
            s(e);
          },
          f = null,
          h = null,
          b = (function () {
            var t = e.path.split("/");
            return (0, p.Z)(t).slice(3).join("/");
          })(),
          m = b ? (0, B.Dr)(b) : "";
        if (m) {
          var j = $(b);
          if (j) {
            var g = {
              items: j,
              baseNavSection: m,
              subSection: (0, B.Pm)(b, 1),
              path: b,
              isExternalHeader: !0,
              viewport: i,
            };
            h = (0, v.jsx)(W, le({}, g));
          }
          var y = {
              type: "logo",
              className: c()("subSectionLogo", m),
              section: m || null,
              title: m,
            },
            O = y.section
              ? (0, v.jsx)(Y.default, le({}, y))
              : (0, v.jsx)(X.default, le({}, y)),
            x = (0, v.jsx)("div", {
              className: "gemSectionLink",
              id: "section-link-title",
              children: (0, v.jsx)(C.default, {
                className: "navLink subNavLink",
                url: (0, B.ch)(m),
                external: !0,
                children: O,
              }),
            }),
            w = {
              baseNavSection: m,
              path: e.path,
              gemDepartment: x,
              isExternalHeader: !0,
              viewport: i,
              hasTertiaryNav: null !== h,
            };
          f = (0, v.jsx)(A, le({}, w));
        }
        var N = c()("appContainer", (0, B.C_)("", m, "Theme", !1), i);
        return (0, v.jsx)("div", {
          className: N,
          ref: l,
          children: (0, v.jsxs)("header", {
            className: "globalHeader externalHeader",
            children: [
              (0, v.jsxs)("div", {
                className: "menuNavWrapper",
                children: [
                  (0, v.jsx)("base", { target: "_blank" }),
                  (function () {
                    var e = {
                      className: "logo",
                      external: !0,
                      url: (0, B.ch)("/"),
                    };
                    return (0, v.jsx)(
                      C.default,
                      le(
                        le({}, e),
                        {},
                        {
                          "aria-label": "CBC Home Page",
                          children: (0, v.jsx)(
                            X.default,
                            le(
                              {},
                              {
                                type: "logo",
                                className: "headerLogo globalHeaderLogo",
                                svgAlternateValue: "",
                                section: "CBC",
                              }
                            )
                          ),
                        }
                      )
                    );
                  })(),
                  (0, v.jsx)(J, { path: e.path }),
                  (0, v.jsxs)("div", {
                    className: "sideMenu",
                    children: [
                      (function () {
                        var e = {
                          "aria-expanded": "false",
                          "aria-label": "Search",
                          className: "navLink search",
                          external: !0,
                          url: (0, B.ch)("/search"),
                          id: "searchButton",
                          role: "button",
                        };
                        return (0, v.jsx)(
                          C.default,
                          le(
                            le({}, e),
                            {},
                            {
                              children: (0, v.jsx)(X.default, {
                                role: "presentation",
                                type: "newSearch",
                                className: "headerSearch",
                              }),
                            }
                          )
                        );
                      })(),
                      o && (0, v.jsx)(ae, { path: e.path }),
                    ],
                  }),
                ],
              }),
              f,
              h,
            ],
          }),
        });
      };
      (oe.propTypes = { path: l().string }), (oe.defaultProps = { path: "" });
      var ce = oe,
        ue = r(96163),
        pe = r(68825),
        fe = r(78116),
        de = r(30663),
        he = r(30091),
        ve = r(33574),
        be = function () {
          var e = (0, de.useHistory)(),
            t = (0, a.useState)(""),
            r = (0, n.Z)(t, 2),
            s = r[0],
            l = r[1],
            o = (0, a.useState)(""),
            u = (0, n.Z)(o, 2),
            p = u[0],
            f = u[1],
            d = (0, a.useState)(""),
            h = (0, n.Z)(d, 2),
            b = h[0],
            m = h[1],
            j = (0, a.useState)(0),
            g = (0, n.Z)(j, 2),
            C = g[0],
            y = g[1],
            O = (0, a.useState)(!1),
            x = (0, n.Z)(O, 2),
            w = x[0],
            N = x[1],
            L = (0, a.useRef)(!1),
            S = (0, a.useRef)(null),
            P = (0, i.useDispatch)();
          (0, a.useEffect)(function () {
            return (
              (L.current = !0),
              (S.current = !1),
              he.default.addOnReadyCallback(function () {
                k();
              }),
              function () {
                (L.current = !1), he.default.unsubscribeNotifications();
              }
            );
          }, []);
          var k = function () {
              he.default.getUserContext().then(function (e) {
                D(e);
              }),
                he.default.subscribeUserInfo(function (e) {
                  D(e);
                }),
                he.default.getNotificationContext().then(function (e) {
                  H(e);
                }),
                he.default.subscribeNotifications(function (e) {
                  y(e);
                }),
                he.default.subscribeTrayOpen(function () {
                  N(!0);
                }),
                he.default.subscribeTrayClosed(function () {
                  N(!1);
                }),
                he.default.subscribeAuthenticationRequired(function () {
                  E();
                });
            },
            H = function (e) {
              L.current && y(e.counts.new);
            },
            D = function (e) {
              if (L.current) {
                var t = he.default.isUserAuthenticated(e);
                if (t !== S.current) {
                  S.current = t;
                  var r = "",
                    n = e.name ? e.name : e.username_pending;
                  n &&
                    n.split(" ").forEach(function (e) {
                      r += e[0];
                    });
                  var a = e.pic_small
                    ? e.pic_small
                    : e.pic_small_pending
                    ? e.pic_small_pending
                    : "";
                  a.includes("google") && (a = ""),
                    l(a),
                    m(r),
                    f(n),
                    window.LR_IS_READY &&
                      (0, ne.uB)("membership", "./actions")
                        .then(function (e) {
                          var r = e.checkLoggedInStatus,
                            n = e.logout;
                          t ? r()(P) : n()(P);
                        })
                        .catch(function (e) {
                          re.default.error(
                            "ProfileButtonNav - MEMBERSHIP ACTION ERROR",
                            e
                          );
                        });
                }
              }
            },
            E = function () {
              var t = window.location.href;
              if (S.current) {
                var r = (0, ve.profileViaAccountCentre)();
                e.push({ pathname: r.pathname, search: r.search });
              } else {
                var n = (0, ve.loginViaAccountCentreRedirect)(t, t);
                e.push({ pathname: n.pathname, search: n.search });
              }
            },
            Z = "" === p || "Guest" === p ? "Sign In" : p;
          return (0, v.jsx)("div", {
            className: "profileButtonWrapper",
            children: (0, v.jsxs)("button", {
              "aria-expanded": w,
              className: "profileButtonNav",
              "data-cy": "profile-button-nav",
              onClick: E,
              children: [
                (function () {
                  if (!S.current)
                    return (0, v.jsx)(X.default, {
                      type: "profile",
                      className: "profilePic",
                    });
                  var e = c()("profilePic", { hasNotifications: C > 0 });
                  return "" === s
                    ? ((e += " profileInitials"),
                      (0, v.jsx)("span", { className: e, children: b }))
                    : ((e += " profileImage"),
                      (0, v.jsxs)(v.Fragment, {
                        children: [
                          (0, v.jsx)("img", {
                            alt: "profile",
                            src: s,
                            className: "profileImageErrorCheck",
                            onError: function () {
                              l("");
                            },
                            loading: "lazy",
                          }),
                          (0, v.jsx)("span", {
                            className: e,
                            style: { backgroundImage: "url(".concat(s, ")") },
                          }),
                        ],
                      }));
                })(),
                (0, v.jsx)("span", { className: "profileText", children: Z }),
              ],
            }),
          });
        };
      function me(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? me(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : me(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ge = function (e) {
          var t = e.setMenuOpen,
            r = e.menuOpen,
            s = e.viewport,
            l = e.isFallback,
            o = (0, i.useSelector)(function (e) {
              return e.app.path;
            }),
            u = (0, i.useSelector)(function (e) {
              return e.app.subSection;
            }),
            p = (0, i.useSelector)(function (e) {
              return e.featureflags.globalEventLink;
            }),
            f = (0, a.useRef)(null),
            d = (0, a.useRef)(null),
            h = (0, a.useRef)(null),
            b = (0, a.useRef)(null),
            m = (0, a.useState)(!1),
            j = (0, n.Z)(m, 2),
            g = j[0],
            y = j[1];
          (0, a.useEffect)(
            function () {
              t(!1), y(!1);
            },
            [o]
          );
          var O = function (e, t) {
              (32 !== t.which && 32 !== t.keyCode) ||
                ("menu" === e && x(t), "search" === e && w(t)),
                ("Escape" !== t.key && "Esc" !== t.key && 27 !== t.keyCode) ||
                  ("menu" === e && r && x(t), "search" === e && g && w(t));
            },
            x = function (e) {
              e.preventDefault(), e.stopPropagation(), b.current();
            };
          b.current = function () {
            var e;
            (0, fe.EF)("global nav menu", r),
              t(!r),
              null !== h &&
                void 0 !== h &&
                null !== (e = h.current) &&
                void 0 !== e &&
                e.focus &&
                r &&
                h.current.focus();
          };
          var w = function (e) {
              e.preventDefault(),
                y(function (e) {
                  return !e;
                });
            },
            N = {
              subSection: u,
              path: o,
              menuCallback: x,
              searchCallback: w,
              menuOpen: r,
              viewport: s,
            },
            L = {
              className: "menuButton",
              external: !1,
              ref: h,
              onClick: x,
              onKeyDown: function (e) {
                return O("menu", e);
              },
              id: "menuButton",
              role: "button",
            },
            S = r ? "Close Menu" : "Menu",
            P = c()("searchClose", { active: g }),
            k = c()("headerSearchBar", { active: g });
          return (0, v.jsxs)("div", {
            className: "menuNavWrapper primaryNav",
            role: "dialog",
            "aria-modal": r,
            "aria-label": "CBC main navigation",
            "data-cy": "primaryNavbar",
            onKeyDown: function (e) {
              var t = f.current,
                n = d.current;
              (9 !== e.which && 9 !== e.keyCode) ||
                (document.activeElement === n && t.focus(),
                e.shiftKey && document.activeElement === t && n.focus()),
                ("Escape" !== e.key && "Esc" !== e.key && 27 !== e.keyCode) ||
                  !r ||
                  x(e);
            },
            children: [
              (0, v.jsx)("button", {
                className: "toggleMenu",
                onClick: x,
                tabIndex: "-1",
                "aria-label": "close menu",
                "aria-hidden": "true",
              }),
              (function () {
                var e = { className: "logo", external: l, url: "/" };
                return (0, v.jsx)(
                  C.default,
                  je(
                    je({}, e),
                    {},
                    {
                      ref: f,
                      "aria-label": "CBC Home Page",
                      children: (0, v.jsx)(
                        X.default,
                        je(
                          {},
                          {
                            type: "logo",
                            className: "headerLogo globalHeaderLogo",
                            svgAlternateValue: "",
                            section: "CBC",
                          }
                        )
                      ),
                    }
                  )
                );
              })(),
              (0, v.jsxs)(
                C.default,
                je(
                  je({ url: "//www.cbc.ca/sitemap" }, L),
                  {},
                  {
                    "data-cy": "menuButton",
                    children: [
                      S,
                      (0, v.jsx)(X.default, {
                        type: "chevron",
                        isDecorative: !0,
                      }),
                    ],
                  }
                )
              ),
              p ? (0, v.jsx)(Ce, je({}, ye(p, !r))) : null,
              (0, v.jsxs)("div", {
                className: "sideMenu",
                children: [
                  (0, v.jsxs)("div", {
                    className: k,
                    children: [
                      (0, v.jsx)(pe.Z, { type: "compact", active: g }),
                      (0, v.jsx)("button", {
                        className: P,
                        onClick: w,
                        children: (0, v.jsx)("svg", {
                          fill: "#ffffff",
                          width: "20px",
                          height: "19px",
                          viewBox: "0 0 20 19",
                          focusable: "false",
                          "aria-label": "close",
                          children: (0, v.jsx)("polygon", {
                            points:
                              "20 0.01 17.6 0 10 7.6 2.4 0 0 0.01 8.79 8.81 0 17.6 2.44 17.57 10 10.02 17.56 17.57 20 17.6 11.21 8.81 20 0.01",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (function () {
                    var e = {
                      "aria-expanded": g ? "true" : "false",
                      "aria-label": "Search",
                      className: "navLink search",
                      onClick: w,
                      external: !1,
                      url: "/search",
                      onKeyDown: function (e) {
                        return O("search", e);
                      },
                      id: "searchButton",
                      role: "button",
                    };
                    return (0, v.jsxs)(
                      C.default,
                      je(
                        je({}, e),
                        {},
                        {
                          children: [
                            (0, v.jsx)(X.default, {
                              role: "presentation",
                              type: "newSearch",
                              className: "headerSearch",
                            }),
                            (0, v.jsx)("span", {
                              className: "searchText",
                              "data-cy": "search-text",
                              children: "Search",
                            }),
                          ],
                        }
                      )
                    );
                  })(),
                  (0, v.jsx)(be, {}),
                ],
              }),
              (0, v.jsx)(ue.Z, je({}, N)),
              (0, v.jsx)("button", {
                className: "menuClose sclt-menuRoundIconClose",
                onClick: x,
                "aria-label": "Close Menu",
                ref: d,
                children: (0, v.jsx)(X.default, { type: "close" }),
              }),
            ],
          });
        },
        Ce = function (e) {
          var t = e.url,
            r = e.largeText,
            n = e.smallText,
            a = e.display;
          return t && r && n && a
            ? (0, v.jsxs)(C.default, {
                url: t,
                className: "menuButton globalEventLink",
                children: [
                  (0, v.jsx)("span", {
                    className: "globalEventLinkLarge",
                    children: r,
                  }),
                  (0, v.jsx)("span", {
                    className: "globalEventLinkSmall",
                    children: n,
                  }),
                ],
              })
            : null;
        },
        ye = function (e, t) {
          if (!e) return null;
          var r = e.split("||"),
            a = (0, n.Z)(r, 3),
            i = a[0],
            s = a[1];
          return { url: a[2], smallText: i, largeText: s, display: t };
        };
      (ge.propTypes = { viewport: l().string, isFallback: l().bool }),
        (ge.defaultProps = { viewport: "", isFallback: !1 });
      var Oe = ge,
        xe = r(33251),
        we = [
          { title: "News", path: "news" },
          { title: "Sports", path: "sports" },
          { title: "Arts", path: "arts" },
          { title: "Life", path: "life" },
          { title: "Archives", path: "archives" },
          { title: "Music", path: "music" },
          { title: "Docs", path: "docs" },
        ];
      var Ne = function () {
          var e = (0, a.useRef)(),
            t = (0, de.useLocation)().pathname,
            r = (0, de.useHistory)();
          function n(e) {
            e.preventDefault(),
              (!e.target && e.target.value) ||
                ("" !== e.target.value && r.push(e.target.value));
          }
          return (
            (0, a.useEffect)(
              function () {
                t !== e.current.value &&
                  "" !== e.current.value &&
                  (e.current.value = "");
              },
              [t]
            ),
            (0, v.jsx)("div", {
              className: "player-base-category-nav",
              role: "navigation",
              children: (0, v.jsxs)("div", {
                className: "inner",
                children: [
                  (0, v.jsx)("label", {
                    id: "select-label",
                    className: "base-category-title",
                    htmlFor: "base-categories",
                    "aria-label": "Select a channel",
                    children: "Video",
                  }),
                  (0, v.jsxs)("select", {
                    "aria-labelledby": "select-label",
                    onBlur: n,
                    onChange: n,
                    defaultValue: "",
                    name: "base-categories",
                    id: "base-categories",
                    ref: e,
                    children: [
                      (0, v.jsx)("option", { value: "", children: "Channels" }),
                      (0, v.jsx)("option", {
                        value: "/player",
                        children: "Home",
                      }),
                      we.map(function (e) {
                        var t = "/player/".concat(e.path);
                        return (0,
                        v.jsx)("option", { value: t, children: e.title }, e.title);
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        Le = r(48903),
        Se = function (e) {
          var t = "viewportSmall" === e.viewport,
            r = t ? "ccc MMM d, yyyy" : "cccc MMMM d, yyyy",
            n = ["linkLabel", "navLabel"];
          return (
            t && n.push("a11y"),
            (0, v.jsx)("div", {
              className: "plusNav",
              children: (0, v.jsx)("nav", {
                className: "plusNav-nav",
                children: (0, v.jsxs)("ul", {
                  className: "navWrapper",
                  children: [
                    (0, v.jsx)("li", {
                      className: "logo navItem",
                      children: (0, v.jsx)(C.default, {
                        url: "/mycbc",
                        children: (0, v.jsx)(X.default, { type: "mycbc" }),
                      }),
                    }),
                    (0, v.jsx)("li", {
                      className: "date navItem navLabel",
                      children: (0, Le.Z)(Date.now(), r),
                    }),
                    (0, v.jsx)("li", {
                      className: "settings navItem",
                      children: (0, v.jsxs)(C.default, {
                        url: "/mycbc/interests",
                        "aria-label": "Customize your interests",
                        children: [
                          (0, v.jsx)(X.default, {
                            type: "settings",
                            width: "1.25rem",
                            height: "1.25rem",
                          }),
                          (0, v.jsx)("div", {
                            className: c()(n),
                            children: "Customize",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
      Se.propTypes = { viewport: l().string.isRequired };
      var Pe = Se,
        ke = r(97767),
        He = r(21070),
        De = r(92269);
      function Ee(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ee(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ee(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Me = "globalEventNav globalEventResponsiveNav",
        Be = (0, He.n)("sclt", Me),
        Ve = function (e) {
          var t,
            r = e.links,
            n = e.globalMenuOpen,
            i = e.path,
            s = e.pathMatch,
            l = (0, a.useRef)(null),
            o = (0, De.Z)(l, e.viewport);
          if (n || !1 === Array.isArray(r) || r.length < 2 || !s) return null;
          var u = null === (t = r[0]) || void 0 === t ? void 0 : t.title,
            p = {
              path: i,
              showLogo: !1,
              items: r,
              viewport: o,
              isExternalHeader: !1,
              moreButtonLabel: "More",
            };
          return (0, v.jsx)("div", {
            className: Me,
            ref: l,
            children: (0, v.jsx)("nav", {
              className: c()((0, He.n)(Me, "nav"), Be),
              "aria-label": u,
              children: (0, v.jsx)(h.ZP, Ze({}, p)),
            }),
          });
        };
      (Ve.defaultProps = {
        links: [],
        viewport: "",
        path: "",
        globalMenuOpen: !1,
        pathMatch: !0,
      }),
        (Ve.propsTypes = {
          links: l().array,
          viewport: l().string,
          path: l().string,
          globalMenuOpen: l().bool,
          pathMatch: l().bool,
        });
      function Re(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Re(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Re(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Ae = (0, a.memo)(function (e) {
        var t = e.identify,
          r = e.children,
          n = (0, i.useSelector)(function (e) {
            return e.featureflags;
          }),
          a = n && n[t];
        if (!r || !a) return null;
        var s = null;
        try {
          s = JSON.parse(a);
        } catch (l) {
          return re.default.error("FeatureToggle", l), null;
        }
        return Array.isArray(r)
          ? r.map(function (e, t) {
              return (0, v.jsx)(e.type, Te(Te({}, e.props), s), t);
            })
          : (0, v.jsx)(r.type, Te(Te({}, r.props), s));
      });
      function Ie(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _e(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ie(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ie(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Fe = function (e) {
        var t = e.viewport,
          r = e.menuOpen,
          n = e.isDetail,
          s = (0, i.useSelector)(function (e) {
            return e.app.baseNavSection;
          }),
          l = (0, i.useSelector)(function (e) {
            return e.app.subSection;
          }),
          o = (0, i.useSelector)(function (e) {
            return e.app.path;
          }),
          u = (0, i.useSelector)(function (e) {
            return e.app.contentId;
          }),
          p = function () {
            var e = "gem-".concat(s),
              t = l ? (0, B.Q7)(o) : null,
              r = t ? t.title : "",
              a = ke.SA[s] ? s : null,
              i = s;
            r
              ? ((i = r),
                (a = (a = r)
                  .replace(" & ", "")
                  .replace(/ /g, "")
                  .replace("-", "")))
              : ke.SA[s] && ke.SA[s].title && (i = ke.SA[s].title);
            var u = Z.tp[s],
              p = "/".concat(u || s),
              f = r ? (0, B.eE)(o, p) : p,
              d = n ? "" : l,
              h = {
                className: c()("subSectionLogo", s, d),
                section: a,
                title: i,
              },
              b = r ? (0, B.C_)("region", r) : "",
              m = c()("navLink subNavLink", b, { regionName: r });
            return (0, v.jsx)(
              "div",
              {
                className: "gemSectionLink",
                id: "section-link-title",
                children: (0, v.jsxs)(
                  C.default,
                  {
                    className: m,
                    url: f,
                    external: !1,
                    children: [
                      (0, v.jsx)("span", { className: "a11y", children: i }),
                      (0, v.jsx)(Y.default, _e({}, h)),
                    ],
                  },
                  "".concat(e, "-link")
                ),
              },
              e
            );
          };
        return (0, v.jsxs)(a.Fragment, {
          children: [
            (0, v.jsx)(Ae, {
              identify: "globalEventNav",
              children: (0, v.jsx)(Ve, {
                viewport: t,
                pathMatch: "homepage" === o,
                path: o,
                globalMenuOpen: r,
              }),
            }),
            (function () {
              var e = s.indexOf("television") > -1 ? "tv" : s;
              return void 0 !== Z.O0[e]
                ? "mycbc" === e
                  ? null
                  : (0, v.jsx)(A, {
                      baseNavSection: e,
                      subSection: l,
                      path: o,
                      viewport: t,
                      isDetail: n,
                      gemDepartment: p(),
                      regionObject: (0, B.Q7)(o),
                      hasTertiaryNav: null !== $(o),
                    })
                : null;
            })(),
            $(o)
              ? (0, v.jsx)(W, {
                  baseNavSection: s,
                  subSection: l,
                  path: o,
                  items: $(o),
                  viewport: t,
                  contentId: u,
                })
              : null,
            (0, v.jsxs)(de.Switch, {
              children: [
                (0, v.jsx)(xe.default, { path: "/player", component: Ne }),
                (0, v.jsx)(xe.default, {
                  path: "/mycbc",
                  render: function (e) {
                    return (0, v.jsx)(Pe, _e({ viewport: t }, e));
                  },
                }),
              ],
            }),
          ],
        });
      };
      (Fe.propTypes = {
        menuOpen: l().bool,
        viewport: l().string,
        isDetail: l().bool,
      }),
        (Fe.defaultProps = { menuOpen: !1, viewport: "", isDetail: !1 });
      var We = Fe,
        qe = r(75854),
        Ge = r(44192),
        ze = r(3623),
        Ke = (0, a.lazy)(function () {
          return (0, ne.uB)("membership", "./RemoteAccountNav");
        }),
        Qe = function (e) {
          var t,
            r = (0, a.useState)(!1),
            s = (0, n.Z)(r, 2),
            l = s[0],
            o = s[1],
            p = (0, a.useState)(!1),
            f = (0, n.Z)(p, 2),
            h = f[0],
            b = f[1],
            m = (0, i.useSelector)(function (e) {
              return e.app.baseNavSection;
            }),
            j = (0, i.useSelector)(function (e) {
              return e.fixed;
            }),
            g = (0, a.useRef)(null),
            C = (0, i.useSelector)(function (e) {
              return (
                e.persistentPlayer.isVisible &&
                e.persistentPlayer.selector === qe.IL
              );
            });
          (0, a.useEffect)(
            function () {
              var e;
              null === (e = g.current) || void 0 === e || e.focus();
            },
            [null === (t = e.route) || void 0 === t ? void 0 : t.path]
          ),
            (0, a.useEffect)(function () {
              return b(!0);
            }, []);
          var y = function (e) {
              o(e), d.ZP.updateBodyScrollState(e);
            },
            O = (0, i.useSelector)(function (e) {
              var t, r;
              return (
                "search" === e.app.path &&
                void 0 !==
                  (null === (t = e.search) || void 0 === t
                    ? void 0
                    : t.searchTerm) &&
                "" !==
                  (null === (r = e.search) || void 0 === r
                    ? void 0
                    : r.searchTerm)
              );
            });
          if (j && j.isWebView) return null;
          if (e.route && e.route.path.startsWith(Z.s5))
            return (0, v.jsx)(ce, { path: e.route.path });
          var x = c()(
              "globalHeader",
              e.viewport,
              (0, B.C_)("", m, "Header", !1),
              {
                open: l,
                "introjs-fixParent":
                  "undefined" !== typeof document &&
                  document.body.classList.contains("onboarding"),
              }
            ),
            w = e.route && e.route.path.startsWith(Z.mQ);
          return (0, v.jsxs)("header", {
            className: x,
            children: [
              (0, v.jsx)("div", {
                className: "viafoura",
                style: { height: 0, minHeight: 0 },
                children: (0, v.jsx)("vf-tray", {}),
              }),
              (0, v.jsx)("a", {
                href: "#content",
                className: "a11y",
                ref: g,
                children: "Content",
              }),
              w
                ? (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsx)(u.Z, {
                        linkHref: "#content",
                        displayHelpLink: !0,
                        isGlobalSkipLink: !0,
                      }),
                      (0, v.jsx)(Ge.default, {
                        fallback: (0, v.jsx)(Oe, {
                          menuOpen: l,
                          setMenuOpen: y,
                          viewport: e.viewport,
                          isFallback: !0,
                        }),
                        children: (0, v.jsx)(ze.Z, {
                          value: h,
                          children: (0, v.jsx)(a.Suspense, {
                            children: (0, v.jsx)(Ke, {
                              path: e.route.path,
                              search: e.route.search,
                            }),
                          }),
                        }),
                      }),
                    ],
                  })
                : (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsx)(u.Z, {
                        linkHref: O ? "#searchMainContent" : "#content",
                        displayHelpLink: !0,
                        isGlobalSkipLink: !0,
                      }),
                      C
                        ? (0, v.jsx)(u.Z, {
                            linkText: "Skip to Persistent Player",
                            linkHref: "#persistent-player",
                            isGlobalSkipLink: !0,
                          })
                        : null,
                      (0, v.jsx)(Oe, {
                        menuOpen: l,
                        setMenuOpen: y,
                        viewport: e.viewport,
                      }),
                      (0, v.jsx)(We, {
                        menuOpen: l,
                        viewport: e.viewport,
                        isDetail: e.isDetail,
                      }),
                    ],
                  }),
            ],
          });
        };
      (Qe.propTypes = { isDetail: l().bool, viewport: l().string }),
        (Qe.defaultProps = { isDetail: !1, viewport: "viewportLarge" });
      var Ue = Qe;
    },
    2557: function (e, t, r) {
      r.r(t);
      var n = r(51341),
        a = (0, n.ZP)({
          resolved: {},
          chunkName: function () {
            return "Logos";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!r.m[t];
          },
          importAsync: function () {
            return Promise.all([r.e(7270), r.e(4736), r.e(7673)]).then(
              r.bind(r, 29408)
            );
          },
          requireAsync: function (e) {
            var t = this,
              r = this.resolve(e);
            return (
              (this.resolved[r] = !1),
              this.importAsync(e).then(function (e) {
                return (t.resolved[r] = !0), e;
              })
            );
          },
          requireSync: function e(t) {
            var n = this.resolve(t);
            return r(n);
          },
          resolve: function e() {
            return 29408;
          },
        });
      a.preload(), (t.default = a);
    },
  },
]);
//# sourceMappingURL=../../sourcemaps/oc-GlobalHeader-component.7612fad7eb2fe0bca909.js.map
