decodeMorse = function(morseCode){
return morseCode.trim()
      .split('   ')
      .map((e) => e.split(' ')
      .map((e) => MORSE_CODE[e])
      .join("") + " ")
      .join("").trim();
  }

