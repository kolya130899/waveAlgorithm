function printMap(map) {
  console.log("print map");
  const matrix = document.querySelector(".matrix");

  for (let i = 0; i < map.length; i++) {
    const row = createHTMLElement("p", "row", i);

    for (let j = 0; j < map.length; j++) {
      const cell = createHTMLElement("span", "cell", j);

      cell.innerHTML = map[i][j];

      row.append(cell);
    }

    matrix.append(row);
  }
}

function createHTMLElement(tag, identificatorName, identificatorVal) {
  const element = document.createElement(tag);
  element.setAttribute("class", `${identificatorName}-${identificatorVal}`);

  return element;
}

async function findOne(map) {
  await delay();

  const progressElement = document.getElementById("progress");
  progressElement.textContent = "In progress";

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j] === 1) {
        map[i][j] = 2;

        rerenderCell(i, j, map[i][j]);
        checkNeighbours(i, j, map);
        findTwo(map);

        return;
      }
    }
  }

  progressElement.textContent = "Done";
}

async function findTwo(map) {
  await delay();
  let changes = false;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j] === 2) {
        changes = checkNeighbours(i, j, map);
      }
    }
  }

  if (changes) {
    findTwo(map);
  } else {
    sinkIsland(map);
    findOne(map);
  }
}

function checkNeighbours(row, cell, map) {
  let top = map[row - 1] && map[row - 1][cell];
  let right = map[row][cell + 1] && map[row][cell + 1];
  let bottom = map[row + 1] && map[row + 1][cell];
  let left = map[row][cell - 1] && map[row][cell - 1];

  let isChanges = false;

  if (top === 1) {
    map[row - 1][cell] = 2;

    rerenderCell(row, cell, map[row][cell]);

    isChanges = true;
  }
  if (right === 1) {
    map[row][cell + 1] = 2;

    rerenderCell(row, cell, map[row][cell]);

    isChanges = true;
  }
  if (bottom === 1) {
    map[row + 1][cell] = 2;

    rerenderCell(row, cell, map[row][cell]);

    isChanges = true;
  }
  if (left === 1) {
    map[row][cell - 1] = 2;

    rerenderCell(row, cell, map[row][cell]);

    isChanges = true;
  }

  return isChanges;
}

function sinkIsland(map) {
  console.log("sink the island");

  const islandsQuantityElement = document.getElementById("islands-quantity");
  let islandsQuantity = +islandsQuantityElement.textContent.charAt(0) + 1;

  console.log(islandsQuantity);

  islandsQuantityElement.innerHTML =
    islandsQuantity !== 1
      ? `${islandsQuantity} islands`
      : `${islandsQuantity} island`;

  let color = generateColor();

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j] === 2) {
        map[i][j] = 0;

        rerenderCell(i, j, map[i][j]);
        paintCell(i, j, color);
      }
    }
  }
}

function paintCell(rowId, cellId, color, font = "#fff") {
  let cell = document.querySelector(`.row-${rowId} .cell-${cellId}`);

  cell.style = `background-color: ${color};color:${font}`;
}

function rerenderCell(rowId, cellId, newValue) {
  let cell = document.querySelector(`.row-${rowId} .cell-${cellId}`);

  cell.innerHTML = newValue;
}

function generateColor() {
  const colorArray = "123456789ABCDEF".split("");
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  return color;
}

function startAlgorithm(map) {
  const progressElement = document.getElementById("progress");

  document.getElementById("start").addEventListener("click", () => {
    progressElement.textContent = "In progress";

    findOne(map);
  });
}

function delay() {
  return new Promise((res) => setTimeout(() => res(1), 1000));
}

function handleInputChange() {
  const mapInputElement = document.getElementById("map-input");

  mapInputElement.addEventListener("keydown", (e) => {
    console.log(e);
    if (
      e.target.value.length >= 16 ||
      (e.key !== "0" && e.key !== "1" && e.key !== "Backspace")
    ) {
      e.preventDefault();
    }
  });
}

function handleInputValue(map) {
  const charachtersElement = document.getElementById("charachters");
  const charachtersLength = document.getElementById("charachters").textContent;
  const mapInputElement = document.getElementById("map-input");

  mapInputElement.addEventListener("input", (e) => {
    let inputedValue = e.target.value;

    if (charachtersElement.textContent > 0) {
      charachtersElement.innerHTML = charachtersLength - inputedValue.length;
    }
    if (inputedValue.length === 0) {
      charachtersElement.innerHTML = charachtersLength;
    }

    let inputValueArray = inputedValue.split("");
    let row = Math.floor((inputValueArray.length - 1) / 4);
    let cell = (inputValueArray.length - 1) % 4;

    map[row][cell] = +inputValueArray[inputValueArray.length - 1];

    rerenderCell(row, cell, map[row][cell]);
  });
}

function resetAlgorithm(map) {
  document.getElementById("restart").addEventListener("click", () => {
    const progressElement = document.getElementById("progress");
    progressElement.textContent = "Wating";

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map.length; j++) {
        map[i][j] = 0;
        rerenderCell(i, j, map[i][j]);
        paintCell(i, j, "transparent", "#000");
      }
    }
  });
}

window.onload = () => {
  let map = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [1, 0, 0, 1],
  ];

  printMap(map);
  startAlgorithm(map);

  handleInputChange();
  handleInputValue(map);

  resetAlgorithm(map);
};
