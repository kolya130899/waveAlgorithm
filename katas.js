function squareSum(numbers) {
  if (numbers.length) {
    console.log(numbers);
    return numbers.map(i => Math.pow(i, 2)).reduce((acc, i) => acc + i);
  } else {
    return 0;
  }
}

// squareSum([0, 2, 4, 6]);

document.querySelector(".result").innerHTML = squareSum([]);
