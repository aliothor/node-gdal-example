import gdal from "gdal-async";
import path from "node:path";

const data_path = ".\\data";

const sample_tif_path = path.resolve(data_path, "sample.tif");

const res = gdal.wrapVRT({
  bands: [
    {
      sources: [gdal.open(sample_tif_path).bands.get(1)],
    },
  ],
});

console.log(res);
