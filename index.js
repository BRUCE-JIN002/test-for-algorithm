str = "系统管网C区独立柱.pdf  预拌混凝土施工现场交接表.pdf";
const prefix = `http://39.98.217.132/pf/`;
path = str.split("  ");
console.log("path.length: ", path.length);

for (let i = 0; i < path.length; i++) {
    path[i] = prefix + path[i];
}

for (const val of path) {
    console.log(val);
}