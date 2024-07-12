import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import peerDepsExternal from "rollup-plugin-peer-deps-external";


const extensions = [".js", ".jsx", ".ts", ".tsx"];
const globals = {
  react: "React",
  "react-dom": "ReactDOM",
};
export default [
  {
    external: ["react", "react-dom"],
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        globals,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        globals,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({ extensions, browser: true }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/types/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss$/],
  },
];


// {
//         plugins: [postcssPresetEnv(), autoprefixer()],
//         autoModules: false,
//         onlyModules: false,
//         inject:true,
//         modules: {
//           generateScopedName: (name, filename, css) => {
//             if (filename.includes("global")) {
//               return name;
//             }
//             const hash = stringHash(css).toString(36).substring(0, 5);
//             return `test_${name}_${hash}`;
//           },
//         },
//         extract: "css/styles.min.css",
//         extensions: [".scss"],
//         use: ["sass"],
//         minimize: true,
//         sourceMap: false,
//       }