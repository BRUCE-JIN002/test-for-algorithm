var largestTriangleArea = function(points) {
    const n = points.length;
    let ans = 0;
    for (let i = 0; i + 2 < n; i++) {
        for (let j = i + 1; j + 1 < n; j++) {
            for (let k = j + 1; k < n; k++) {
                ans = Math.max(ans, getArea(points[i], points[j], points[k]));
            }
        }
    }
    return ans;
};

const getArea = (a, b, c) => {
    return (
        0.5 *
        Math.abs(
            a[0] * b[1] +
            b[0] * c[1] +
            c[0] * a[1] -
            a[1] * b[0] +
            b[1] * c[0] +
            c[1] * a[0]
        )
    );
};