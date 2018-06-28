/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  const result = [[]];

  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = 0;
    }
  }
  
  let side = n;
  let offset = 0;
  let currentNumber = 1;

  while (offset < (n/2)) {
    for (let i = 0; i < side; i++) {
        result[offset][offset+i] = currentNumber;
        currentNumber++;
    }

    for (let i = 0; i < side-2; i++) {
        result[1+offset+i][n-1-offset] = currentNumber;
        currentNumber++;
    }

    if ((n/2 - offset > 0) && (side > 1))  {
        for (let i = 0; i < side; i++) {
            result[n-1-offset][n-1-i-offset] = currentNumber;
            currentNumber++;
        }
    }

    for (let i = 0; i < side-2; i++) {
        result[n-2-offset-i][offset] = currentNumber;
        currentNumber++;
    }

    offset++;
    side-=2;
  }

  return result;
}

export default fillSpiralMatrix;
