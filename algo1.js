let islands = 0;

function printArray(array) {
  const matrix = document.querySelector(".matrix");

  array.forEach((arrayJ, i) => {
    let row = document.createElement("p");
    row.setAttribute("data-row", i);

    arrayJ.forEach((item, j) => {
      let cell = document.createElement("span");
      cell.setAttribute("data-cell", j);

      cell.innerText = item;

      row.append(cell);
    });

    matrix.append(row);
  });
}

function findOne(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === 1) {
        array[i][j] = 2;

        setNewValueToMatrix(i, j, array);

        console.log("from 1");
        checkIfTwo(i, j, array);

        return;
      }
      if (array[i][j] === 2) {
        console.log("from 2");

        checkIfTwo(i, j, array);
      }
    }
  }
}

function setNewValueToMatrix(row, cell, array) {
  const rowElement = document.querySelector("p[data-row='" + row + "']");
  const cellElement = rowElement.querySelector(
    "span[data-cell='" + cell + "']"
  );

  cellElement.textContent = array[row][cell];
}

function sinkIsland(array) {
  console.log("increase islands");
  islands++;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === 2) {
        console.log("island sector coords", i, j);
        array[i][j] = 0;

        const rowElement = document.querySelector("p[data-row='" + i + "']");
        const cellElement = rowElement.querySelector(
          "span[data-cell='" + j + "']"
        );

        cellElement.classList.add("color-" + islands);

        setNewValueToMatrix(i, j, array);
      }
    }
  }

  findOne(array);

  document.querySelector(".islands-quantity").textContent = islands;
}

function checkIfTwo(i, j, array) {
  let jNext = j + 1;
  let jPrev = j - 1;
  let iNext = i + 1;

  let changes = false;

  console.log(i, j);

  // check the right element
  if (array[i][jNext] === 1) {
    console.log("changing the right element");
    array[i][jNext] = 2;

    setNewValueToMatrix(i, jNext, array);

    changes = true;
  }

  // check the left element
  if (array[i][jPrev] === 1) {
    console.log("changing the left element");

    array[i][jPrev] = 2;

    setNewValueToMatrix(i, jPrev, array);

    changes = true;
  }

  // check the bottom element
  if (iNext < array.length) {
    if (array[iNext][j] === 1) {
      console.log("changing the bottom element");
      array[iNext][j] = 2;

      setNewValueToMatrix(iNext, j, array);

      changes = true;
    }
  }

  console.log(changes);

  if (!changes) {
    sinkIsland(array);
  } else {
    findOne(array);
  }
}

window.onload = function () {
  // let array = [
  //   [0, 0, 1, 0],
  //   [0, 0, 1, 1],
  //   [0, 1, 0, 0],
  //   [1, 0, 0, 1],
  // ];

  // let array = [
  //   [1, 0, 1, 0],
  //   [0, 0, 1, 1],
  //   [1, 1, 0, 0],
  //   [1, 0, 0, 1],
  // ];

  // let array = [
  //   [1, 0, 0, 1],
  //   [0, 1, 0, 0],
  //   [0, 1, 1, 0],
  //   [1, 0, 0, 1],
  // ];

  let array = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 0],
  ];

  printArray(array);

  document.getElementById("start").addEventListener("click", () => {
    findOne(array);
  });
};

//
///
//
//
//
//

// function checkWhenOneNeighbour(i, j, array) {
//   if (array[i][j] === 1) {
//     array[i][j] = 2;
//     setNewValueToMatrix(i, j, array);

//     findOne(array);
//   } else if (array[i][j] === 2) {
//     checkNeighbours(i, j, array);
//   } else {
//     console.log("when single neighbour");
//     sinkIsland(array);

//     findOne(array);
//   }

//   document.querySelector(".islands-quantity").textContent = islands;
// }
function checkNeighbours(i, j, array) {
  let jNext = j + 1;
  let jPrev = j - 1;
  let iNext = i + 1;

  let initialArray = array.toString();

  console.log(i, j, array[i][j]);

  // check the right neighbour
  console.log("checking the right element");

  if (array[i][jNext] === 1) {
    array[i][jNext] = 2;

    setNewValueToMatrix(i, jNext, array);
  } else if (array[i][jNext] === 2) {
    checkIfTwo(i, jNext, array);
  } else {
    console.log("zero on the right");
  }

  // check the left neighbour
  console.log("checking the left element");

  if (array[i][jPrev] === 1) {
    array[i][jPrev] = 2;

    setNewValueToMatrix(i, jPrev, array);
  } else if (array[i][jPrev] === 2) {
    checkIfTwo(i, jPrev, array);
  } else {
    console.log("zero on the left");
  }

  // check the bottom neighbour
  if (iNext < array.length) {
    console.log("checking the bottom element");

    if (array[iNext][j] === 1) {
      array[iNext][j] = 2;

      setNewValueToMatrix(iNext, j, array);
    } else if (array[iNext][j] === 2) {
      checkIfTwo(iNext, j, array);
    } else {
      console.log("zero on the bottom");
    }
  }

  if (array.toString() === initialArray) {
    sinkIsland(array);
    document.querySelector(".islands-quantity").textContent = islands;

    findOne(array);
  } else {
    findOne(array);
  }

  // if (jNext < array.length && jPrev < array.length && iNext < array.length) {
  //   //check elements at the left and the bottom
  //   if (
  //     array[i][jNext] === 1 &&
  //     array[i][jPrev] === 1 &&
  //     array[iNext][j] === 1
  //   ) {
  //     array[i][jNext] = 2;
  //     setTimeout(() => {
  //       setNewValueToMatrix(i, jNext, array);
  //     }, 500);

  //     array[i][jPrev] = 2;

  //     setTimeout(() => {
  //       setNewValueToMatrix(i, jPrev, array);
  //     }, 1000);

  //     array[iNext][j] = 2;
  //     setTimeout(() => {
  //       setNewValueToMatrix(iNext, j, array);
  //     }, 1500);

  //     setTimeout(() => {
  //       findOne(array);
  //     }, 3000);

  //     //check element at the left
  //   } else if (array[i][jPrev] === 1) {
  //     array[i][jPrev] = 2;
  //     setTimeout(() => {
  //       setNewValueToMatrix(i, jPrev, array);
  //     }, 1000);

  //     setTimeout(() => {
  //       findOne(array);
  //     }, 3000);

  //     //check element at the right
  //   } else if (array[i][jNext] === 1) {
  //     array[i][jNext] = 2;
  //     setTimeout(() => {
  //       setNewValueToMatrix(i, jNext, array);
  //     }, 1000);

  //     setTimeout(() => {
  //       findOne(array);
  //     }, 3000);

  //     //check element at the bottom
  //   } else if (array[iNext][j] === 1) {
  //     array[iNext][j] = 2;
  //     setTimeout(() => {
  //       setNewValueToMatrix(iNext, j, array);
  //     }, 1000);

  //     setTimeout(() => {
  //       findOne(array);
  //     }, 3000);

  //     // both of neigbours are 2
  //   } else if (array[i][jNext] === 2 && array[iNext][j] === 2) {
  //     checkNeighbours(i, jNext, array);
  //     checkNeighbours(iNext, j, array);

  //     // neighbour on the right is 2
  //   } else if (array[i][jNext] === 2) {
  //     checkNeighbours(i, jNext, array);

  //     // neighbour on the bottom is 2
  //   } else if (array[iNext][j] === 2) {
  //     checkNeighbours(iNext, j, array);

  //     // all neighbours are 0
  //   } else {
  //     console.log("all neighbours 0");
  //     sinkIsland(array);
  //     setTimeout(() => {
  //       findOne(array);
  //     }, 3000);
  //   }

  //   document.querySelector(".islands-quantity").textContent = islands;
  // } else if (jNext >= array.length && iNext < array.length) {
  //   checkWhenOneNeighbour(iNext, j, array);

  //   document.querySelector(".islands-quantity").textContent = islands;
  // } else if (iNext >= array.length && jNext < array.length) {
  //   checkWhenOneNeighbour(i, jNext, array);
  // } else {
  //   if (array[i][j] > 0) {
  //     console.log("the last item");
  //     sinkIsland(array);
  //     document.querySelector(".islands-quantity").textContent = islands;
  //   }
  // }
}
