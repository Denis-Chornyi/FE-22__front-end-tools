"use strict";

require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.unscopables.flat.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.finally.js");
var data = [1, 2[(3, 4[(5, 6)])]];
var result = data.flat(2);
console.log(result);
Promise.resolve().finally();