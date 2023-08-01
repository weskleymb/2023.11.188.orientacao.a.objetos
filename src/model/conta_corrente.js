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
exports.ContaCorrente = void 0;
var conta_1 = require("./conta");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // definindo os atributos
        _this._taxa = 0.01;
        return _this;
    }
    // sobrescrevendo o comportamento de sacar
    ContaCorrente.prototype.sacar = function (valor) {
        var valorSacar = valor + valor * this._taxa;
        return _super.prototype.sacar.call(this, valorSacar);
    };
    return ContaCorrente;
}(conta_1.Conta));
exports.ContaCorrente = ContaCorrente;
