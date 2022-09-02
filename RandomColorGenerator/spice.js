const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const copyHexBtn = document.querySelectorAll(".copy__hex");
const deletePalBtn = document.querySelectorAll(".delete__palette");
const lockPalBtn = document.querySelectorAll(".lock__palette");
const confirmBox = document.querySelector(".confirm__container");

let colorGenerated = "#";

const color_palettes = [
  {
    palette: document.querySelector(".first-div"),
    colorName: document.querySelector(".color-name-1"),
  },

  {
    palette: document.querySelector(".second-div"),
    colorName: document.querySelector(".color-name-2"),
  },
  {
    palette: document.querySelector(".third-div"),
    colorName: document.querySelector(".color-name-3"),
  },
  {
    palette: document.querySelector(".fourth-div"),
    colorName: document.querySelector(".color-name-4"),
  },
  {
    palette: document.querySelector(".fifth-div"),
    colorName: document.querySelector(".color-name-5"),
  },
];

const onload_colors = ["#efd9ce", "#dec0f1", "#b79ced", "#957fef", "#7161ef"];
let color_counter = 0;

//onload colors

//eventListeners

const colorSetter = (colorPallette, hexColor, status) => {
  for (let i = 0; i < color_palettes.length; i++) {
    for (let i = 0; i < 6; i++) {
      colorGenerated += hex[randomGenerator()];
    }
    color_palettes[i].palette.style.background = colorGenerated;
    color_palettes[i].colorName.textContent = colorGenerated;
    colorGenerated = "#";
  }

  for (let i = 0; i < color_palettes.length; i++) {
    if (colorPallette == color_palettes[i].palette) {
      if (status) {
        color_palettes[i].colorName.innerHTML = hexColor;
        color_palettes[i].palette.style.background = hexColor;
        status = false;
      }
    }
  }
};

function randomGenerator() {
  let randomNumber = Math.floor(Math.random() * hex.length);
  return randomNumber;
}

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    colorSetter();
  }
});

colorSetter();

// Copy color to system clipboard

copyHexBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const palHexValue = btn.parentElement.nextElementSibling.innerHTML;

    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      confirmBox.style.transform = "translateY(0)";
      setTimeout(() => {
        confirmBox.style.transform = "translateY(200%)";
      }, 2000);
      return navigator.clipboard.writeText(palHexValue);
    }
    return Promise.reject("The clipboard API is not available");
  });
});

// Delete a color palette

deletePalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const victimPalette = btn.parentElement.parentElement;
    const victimParentNode = victimPalette.parentElement;
    const victimPaletteWidth = victimPalette.clientWidth;

    // victimPalette.remove();
    victimPalette.classList.add("invisible");
    console.log(victimPaletteWidth);
  });
});

// Lock a color pallette

lockPalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lockedPallette = btn.parentElement.parentElement;
    const lockedPalletteHex = btn.parentElement.nextElementSibling.innerHTML;

    lockedPallette.dataset.locked = true;

    colorSetter(
      lockedPallette,
      lockedPalletteHex,
      lockedPallette.dataset.locked
    );
    // console.log(lockedPallette);
  });
});
