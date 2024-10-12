import ts from "rollup-plugin-typescript2";
import path from "path";
import { fileURLToPath } from "url";
const metaUrl = fileURLToPath(import.meta.url);

const __dirname = path.dirname(metaUrl);

export default {
  input: path.resolve(__dirname, "src/index.ts"),
  output: {
    file: path.resolve(__dirname, "dist/index.js")
  },
  plugins: [
    ts({
      tsconfig: path.resolve(__dirname, "tsconfig.json")
    })
  ]
};
