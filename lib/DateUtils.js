"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateUtils = function () {
    function DateUtils() {
        _classCallCheck(this, DateUtils);
    }

    _createClass(DateUtils, null, [{
        key: "getCurrentYear",
        value: function getCurrentYear() {
            return new Date().getYear() + 1900;
        }
    }, {
        key: "getDaysRemaining",
        value: function getDaysRemaining(dateString) {
            // here date string is in format mm/dd/yyyy
            return Math.ceil((DateUtils.parse(dateString) - new Date()) / (1000 * 60 * 60 * 24));
        }

        // parse a date in mm/dd/yyyy format

    }, {
        key: "parse",
        value: function parse(input) {
            var parts = input.split('/');
            // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
            return new Date(parts[2], parts[0] - 1, parts[1]); // Note: months are 0-based
        }
    }, {
        key: "formatDate",
        value: function formatDate(date, format) {
            return (0, _moment2.default)(date).format(format);
        }
    }, {
        key: "getCurrentDateTimeString",
        value: function getCurrentDateTimeString() {
            return DateUtils.formatDate(new Date(), "DD_MM_YYYY_HH_mm_ss");
        }
    }]);

    return DateUtils;
}();

exports.default = DateUtils;
;