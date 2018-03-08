"use strict";

/**
 * Created by gvc on 2/27/2016.
 */
module.exports = function () {

    return {
        extend: function extend() {
            var parent = arguments[0];
            var constructor = null;
            if (_.isFunction(parent)) {
                // default constructor
                constructor = function constructor(params) {
                    parent.call(this, params);
                };

                // create new instance of animal prototype object
                constructor.prototype = Object.create(parent.prototype);
            } else {
                constructor = function constructor(params) {};

                constructor.prototype = _.extend(constructor.prototype, parent);
            }

            for (var ii = 1, ll = arguments.length; ii < ll; ii++) {
                if (_.isFunction(arguments[ii])) {
                    constructor.prototype = _.extend(constructor.prototype, arguments[ii].prototype);
                } else {
                    constructor.prototype = _.extend(constructor.prototype, arguments[ii]);
                }
            }

            return constructor;
        }
    };
}();