import gdal from 'gdal-async'
import path from 'node:path'

const data_path = '.\\data\\shp'

const sample_shp_path = path.resolve(data_path, 'sample.shp')
const sample_shp_path2 = "/vsicurl/http://127.0.0.1:8080/sample.shp"

const ds = gdal.open(sample_shp_path)
const driver = ds.driver
const driver_metadata = driver.getMetadata()

console.log(driver_metadata)
