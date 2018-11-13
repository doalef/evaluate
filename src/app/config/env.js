/**
 *          .::ENVIRONMENT PARSING::.
 * Parsing .env files and defining Project mode(Development, Production)
 * 
 */
let dotenvPath = "../../../.dev.env"
let projectMode = "Development"
let port;
console.log(process.argv)
process
  .argv
  .forEach((val, index, array) => {
    switch (val) {
      case "--production":
        projectMode = "Production"
        return dotenvPath = '../../../.env';
        break;

      //Add more commands here
      default:
        if (val.indexOf("port=") >= 0)
          port = Number(val.replace("port=", ""))
    }
  });
var dotenv = require("dotenv");
var path = require("path")
dotenv.config({
  path: path.resolve(__dirname, dotenvPath),
});
if (port) {
  process.env.API_PORT = port;
}
process.env.projectMode = projectMode;