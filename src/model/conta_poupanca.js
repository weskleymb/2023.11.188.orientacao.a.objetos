"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
var conta_1 = require("./conta");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rendimento = 0.01;
        return _this;
    }
    ContaPoupanca.prototype.render = function () {
        var valorRendimento = this.saldo * this._rendimento;
        this.depositar(valorRendimento);
    };
    return ContaPoupanca;
}(conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
