const nlp = require("compromise");
const process = require("process");
console.log(nlp(process.argv[2])
            .contractions());