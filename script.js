var inputs = document.getElementsByClassName('input');
var result = document.getElementById('result-input');
var resultBox = document.getElementById('result');
var reset = false;

function roundPeriod(number) {
  return Math.round(number * 1000000) / 1000000
}

// for (let i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener('click', function () {
//     if (this.textContent === '=') {
//       if (
//         result.textContent
//           .split('')
//           .every((symbol) => '1234567890,+-*/'.includes(symbol))
//       ) {
//         result.textContent = roundPeriod(Number(eval(result.textContent.replaceAll(',', '.'))));
//         result.textContent = result.textContent.replaceAll(".", ",");
//         if (result.textContent == "Infinity") {
//           result.textContent = "Error!"
//         }
//         reset = true;
//       }
//       return;
//     } else if (reset) {
//       result.textContent = '';
//       reset = false;
//     }
//     result.textContent += this.textContent;
//   })
// }

const clickCallback = function () {
  if (this.textContent === '=') {
    if (
      result.textContent
        .split('')
        .every((symbol) => '1234567890,+-*/'.includes(symbol))
    ) {
      result.textContent = roundPeriod(Number(eval(result.textContent.replaceAll(',', '.'))));
      result.textContent = result.textContent.replaceAll(".", ",");
      if (result.textContent == "Infinity") {
        result.textContent = "Error!"
      }
      reset = true;
    }
    return;
  } else if (reset) {
    result.textContent = '';
    reset = false;
  }
  result.textContent += this.textContent;
}

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', clickCallback)
}

window.addEventListener('keydown', function (event) {
  let keyCode = event.which;

  if (result.textContent == "Error!") {
    result.textContent = ""
  }

  if (keyCode === 8) {
    result.textContent = result.textContent.substring(
      0,
      result.textContent.length - 1
    );
  } else if (keyCode === 67) {
    result.textContent = result.textContent.substring(
      0,
      (result.textContent.length = 0)
    );
  } else if (keyCode === 13) {
    document.getElementById('equals').click();
  } else if (keyCode >= 96 && keyCode <= 111) {
    if (reset) {
      result.textContent = '';
      reset = false;
    }
    result.textContent += event.key;
    event.preventDefault();
  }
});

resultBox.addEventListener('click', function () {

  if (result.textContent == "Error!") {
    result.textContent = ""
  }

  result.textContent = result.textContent.substring(
    0,
    result.textContent.length - 1
  );
});
