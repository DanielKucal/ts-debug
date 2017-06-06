var Debugger = (function () {
    function Debugger(console, isEnabled, prefix) {
        if (isEnabled === void 0) { isEnabled = true; }
        if (prefix === void 0) { prefix = ''; }
        this.prefix = '';
        this.console = console;
        this.isEnabled = isEnabled;
        this.prefix = prefix;
    }
    Debugger.prototype.assert = function (value, message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.assert(value, message, optionalParams); });
    };
    Debugger.prototype.dir = function (obj) {
        var _this = this;
        var options = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            options[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.dir(obj, options); });
    };
    Debugger.prototype.error = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.error(_this.addPrefix(message), optionalParams); });
    };
    Debugger.prototype.info = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.info(_this.addPrefix(message), optionalParams); });
    };
    Debugger.prototype.log = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.log(_this.addPrefix(message), optionalParams); });
    };
    Debugger.prototype.time = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.time(label); });
    };
    Debugger.prototype.timeEnd = function (label) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.timeEnd(label); });
    };
    Debugger.prototype.trace = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.trace(_this.addPrefix(message), optionalParams); });
    };
    Debugger.prototype.warn = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.warn(_this.addPrefix(message), optionalParams); });
    };
    Debugger.prototype.clear = function () {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.clear(); });
    };
    Debugger.prototype.count = function (countTitle) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.count(); });
    };
    Debugger.prototype.debug = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.debug(_this.addPrefix(message), optionalParams); });
    };
    Debugger.prototype.dirxml = function (value) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.dirxml(value); });
    };
    Debugger.prototype.exception = function (message) {
        var _this = this;
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.exception(_this.addPrefix(message), optionalParams); });
    };
    Debugger.prototype.group = function (groupTitle) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.group(groupTitle); });
    };
    Debugger.prototype.groupCollapsed = function (groupTitle) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.groupCollapsed(groupTitle); });
    };
    Debugger.prototype.groupEnd = function () {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.groupEnd(); });
    };
    Debugger.prototype.msIsIndependentlyComposed = function (element) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.msIsIndependentlyComposed(element); });
    };
    Debugger.prototype.profile = function (reportName) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.profile(reportName); });
    };
    Debugger.prototype.profileEnd = function () {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.profileEnd(); });
    };
    Debugger.prototype.select = function (element) {
        var _this = this;
        return this.doIfEnabled(function () { return _this.console.select(element); });
    };
    Debugger.prototype.table = function () {
        var _this = this;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        return this.doIfEnabled(function () { return _this.console.table(data); });
    };
    Debugger.prototype.doIfEnabled = function (action) {
        if (this.isEnabled) {
            return action();
        }
    };
    Debugger.prototype.addPrefix = function (message) {
        if (this.prefix && (typeof message === 'string' || !message)) {
            return this.prefix + message;
        }
        return message;
    };
    return Debugger;
}());
export { Debugger };
