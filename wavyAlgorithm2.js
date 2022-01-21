function printMap(map) {
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

    rerenderCell(i, j, map[i][j]);

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
  let islandsQuantity = islandsQuantityElement.textContent;

  islandsQuantityElement.innerHTML = +islandsQuantity + 1;

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

async function paintCell(rowId, cellId, color) {
  let cell = document.querySelector(`.row-${rowId} .cell-${cellId}`);

  cell.style = `background-color: ${color};color:#fff`;
}

async function rerenderCell(rowId, cellId, newValue) {
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
  document.getElementById("start").addEventListener("click", () => {
    findOne(map);
  });
}

function delay() {
  return new Promise((res) => setTimeout(() => res(1), 1000));
}

window.onload = () => {
  // const map = [
  //   [0, 0, 1, 0],
  //   [0, 0, 1, 1],
  //   [0, 1, 0, 0],
  //   [1, 0, 0, 1],
  // ];

  // const map = [
  //   [0, 0, 1, 0],
  //   [0, 0, 1, 1],
  //   [0, 0, 0, 0],
  //   [1, 1, 0, 1],
  // ];

  // const map = [
  //   [1, 1, 1, 0],
  //   [1, 1, 1, 1],
  //   [0, 1, 1, 1],
  //   [1, 1, 1, 0],
  // ];

  const map = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
  ];

  printMap(map);
  startAlgorithm(map);
};
