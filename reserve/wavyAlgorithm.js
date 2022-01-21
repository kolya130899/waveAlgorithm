let islands = 0;

window.onload = () => {
  let array = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [1, 0, 0, 1],
  ];

  // let array = [
  //   [0, 1, 1, 1],
  //   [1, 1, 1, 1],
  //   [1, 1, 1, 1],
  //   [1, 1, 1, 0],
  // ];

  printArray(array);

  startAlgorithm(array);
};

function startAlgorithm(array) {
  document.getElementById("start").addEventListener("click", function () {
    // TO REMOVE
    console.log("start");

    goThroughArray(array, checkIfOne);
  });
}

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
      doSmthWithItem(array, i, j);
    }
  }
}

// looking for 1 and change for 2 if found. then checking neighbours and iterating through the array to find 2
function checkIfOne(array, i, j) {
  if (array[i][j] === 1) {
    // TO REMOVE
    console.log("1 found", i, j);

    array[i][j] = 2;
    replaceCellValue(i, j, array[i][j]);

    checkNeighbours(array, i, j);
    goThroughArray(array, checkIfTwo);
  }
}

// checking an array item neighbours to be the 1. if no changes, sink the island
function checkNeighbours(array, i, j) {
  // TO REMOVE
  console.log("checking neighbours");

  let left = j - 1;
  let right = j + 1;
  let bottom = i + 1;

  let changes = false;

  if (array[i][left] === 1) {
    // TO REMOVE
    console.log("1 at the left", i, left);

    array[i][left] = 2;
    replaceCellValue(i, left, array[i][left]);

    changes = true;
  } else if (array[i][left] === 2) {
    changes = true;
  } else {
    changes = changes ? true : false;
  }

  if (array[i][right] === 1) {
    // TO REMOVE
    console.log("1 at the right", i, right);
    array[i][right] = 2;
    replaceCellValue(i, right, array[i][right]);

    changes = true;
  } else if (array[i][right] === 2) {
    changes = true;
  } else {
    changes = changes ? true : false;
  }

  if (bottom < array.length) {
    if (array[bottom][j] === 1) {
      // TO REMOVE
      console.log("1 at the bottom", bottom, j);
      array[bottom][j] = 2;
      replaceCellValue(bottom, j, array[bottom][j]);

      changes = true;
    } else if (array[bottom][j] === 2) {
      changes = true;
    } else {
      changes = changes ? true : false;
    }
  } else {
    changes = changes ? true : false;
  }

  if (!changes) {
    islands++;
    setNewIslandsQuantity();

    goThroughArray(array, sinkIsland);

    // TO REMOVE
    console.log("island sank");

    goThroughArray(array, checkIfOne);

    return;
  }

  if (!array[i][left] && !array[i][left] && !array[i][left]) {
    islands++;
    setNewIslandsQuantity();

    goThroughArray(array, sinkIsland);

    // TO REMOVE
    console.log("island sank");

    goThroughArray(array, checkIfOne);
  }
}

// looking for 2 then checking the neighbours
function checkIfTwo(array, i, j) {
  if (array[i][j] === 2) {
    // TO REMOVE
    console.log("2 found", i, j);

    checkNeighbours(array, i, j);
  }
}

// sinking island
function sinkIsland(array, i, j) {
  if (array[i][j] === 2) {
    array[i][j] = 0;
    replaceCellValue(i, j, array[i][j]);
  }
}

function setNewIslandsQuantity() {
  document.querySelector(".islands-quantity").innerText = islands;
}

function replaceCellValue(rowId, cellId, value) {
  const row = document.querySelector("[data-row='" + rowId + "']");

  const cell = row.querySelector("[data-cell='" + cellId + "']");

  cell.innerText = value;

  // TO REMOVE
  console.log("value replaced");
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
