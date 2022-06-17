var imageSmoother = function(img) {
    const n = img.length,
        m = img[0].length;
    let arr = new Array(n).fill(0).map(() => new Array(m).fill(0));
    const dir = [
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
    ];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let ans = img[i][j],
                cnt = 1;

            for (let k = 0; k < 8; k++) {
                let x = i + dir[k][0];
                let y = j + dir[k][1];
                if (x >= 0 && x < n && y >= 0 && y < m) {
                    ans += img[x][y];
                    cnt++;
                }
            }
            console.log(ans, cnt);
            arr[i][j] = Math.floor(ans / cnt);
        }
    }
    return arr;
};