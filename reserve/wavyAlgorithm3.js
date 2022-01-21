window.onload = () => {
  let array = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [1, 0, 1, 1],
  ];

  printArray(array);

  startAlgorithm(array);
};

// printing array to the screen
function printArray(array) {
  const matrixBlock = document.querySelector(".matrix");

  for (let i = 0; i < array.length; i++) {
    const row = document.createElement("p");
    row.setAttribute("data-row", i);

    for (let j = 0; j < array.length; j++) {
      const cell = document.createElement("span");
      cell.setAttribute("data-cell", j);
      cell.innerText = array[i][j];

      row.append(cell);
    }

    matrixBlock.append(row);
  }
}

function doSmthWithValue() {
  let;
}

function findOne(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === 1) {
        array[i][j] = 2;

        // then need to check neighbours

        return;
      }
    }
  }
}

function checkNeighbours(array, i, j) {
  const left = j - 1;
  const right = j + 1;
  const bottom = i + 1;
}
