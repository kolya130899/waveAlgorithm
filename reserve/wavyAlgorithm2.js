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

// iterating through array
function goThroughArray(array, doSmthWithItem) {
  // TO REMOVE
  console.log("loop through the array");

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // check the item
      doSmthWithItem(array, i, j);
    }
  }
}

function ifOne(array, i, j) {
  if (array[i][j] === 1) {
    array[i][j] = 2;

    console.log("1 at ", i, j);

    replaceCellValue(i, j, array[i][j]);
  }
}

function startAlgorithm(array) {
  document.getElementById("start").addEventListener("click", function () {
    // TO REMOVE
    console.log("start");

    goThroughArray(array, ifOne);
  });
}

// update value on the page
function replaceCellValue(rowId, cellId, value) {
  const row = document.querySelector("[data-row='" + rowId + "']");

  const cell = row.querySelector("[data-cell='" + cellId + "']");

  cell.innerText = value;

  // TO REMOVE
  console.log("value replaced");
}
