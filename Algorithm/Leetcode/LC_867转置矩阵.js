var transpose = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const newMatrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            newMatrix[j][i] = matrix[i][j];
        }
    }
    console.log(newMatrix);
    return newMatrix;
};
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
transpose(matrix);