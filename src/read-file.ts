import { readFile } from "node:fs/promises";

const data_path = "./data/";

const textDecoder = new TextDecoder();

const res = await readFile(data_path + "park.geo.json", { encoding: "utf-8" });

const geojson = JSON.parse(res);

console.log(geojson);
