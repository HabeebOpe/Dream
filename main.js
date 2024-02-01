const slide = document.getElementById("display-slide");
const displayText = document.getElementById("display-h1");

let positionIndex = 0;
let increasing = true;

setInterval(() => {
  const positions = ["0%", "-100%", "-200%", "-300%", "-400%"];
  
  slide.style.top = positions[positionIndex];
  
  switch (slide.style.top) {
    case "0%":
      displayText.textContent = "FIFA 24";
      break;
    case "-100%":
      displayText.textContent = "SPIDERMAN 3";
      break;
    case "-200%":
      displayText.textContent = "THE WITCHER";
      break;
    case "-300%":
      displayText.textContent = "TOMB RAIDER";
      break;
    case "-400%":
      displayText.textContent = "SONIC HEDGEHOG 2";
      break;
  }

  if (increasing) {
    positionIndex++;
    if (positionIndex === positions.length) {
      increasing = false;
    }
  } else {
    positionIndex--;
    if (positionIndex === 0) {
      increasing = true;
    }
  }
}, 2000);