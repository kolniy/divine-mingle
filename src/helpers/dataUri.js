import DataUri from "datauri/parser"
import path from "path"

const dUri = new DataUri()

const dataUri = ( fileExt, buffer ) => {
    return dUri.format(fileExt, buffer)
}

export default dataUri