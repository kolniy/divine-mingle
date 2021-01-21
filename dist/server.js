"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.use(_express["default"].json({
  extended: false
}));
app.listen(PORT, function () {
  return console.log("App is listening on port ".concat(PORT));
});