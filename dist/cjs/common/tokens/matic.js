"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MATIC = exports.MATIC_NAME = exports.MATIC_SYMBOL = void 0;
var chain_id_1 = require("../../enums/chain-id");
var error_codes_1 = require("../errors/error-codes");
var uniswap_error_1 = require("../errors/uniswap-error");
exports.MATIC_SYMBOL = 'MATIC';
exports.MATIC_NAME = 'Matic';
var MATIC = /** @class */ (function () {
    function MATIC() {
    }
    MATIC.POLYGON = function () {
        return {
            chainId: chain_id_1.ChainId.POLYGON,
            contractAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
            decimals: 18,
            symbol: exports.MATIC_SYMBOL,
            name: exports.MATIC_NAME,
        };
    };
    MATIC.MUMBAI = function () {
        return {
            chainId: chain_id_1.ChainId.MUMBAI,
            contractAddress: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
            decimals: 18,
            symbol: exports.MATIC_SYMBOL,
            name: exports.MATIC_NAME,
        };
    };
    /**
     * Get WETH token info by chain id
     * @param chainId The chain id
     */
    MATIC.token = function (chainId) {
        switch (chainId) {
            case chain_id_1.ChainId.POLYGON:
                return this.POLYGON();
            case chain_id_1.ChainId.MUMBAI:
                return this.MUMBAI();
            default:
                throw new uniswap_error_1.UniswapError("".concat(chainId, " is not allowed"), error_codes_1.ErrorCodes.tokenChainIdContractDoesNotExist);
        }
    };
    MATIC.info = function (chainId) {
        switch (chainId) {
            case chain_id_1.ChainId.POLYGON:
                return this.POLYGON();
            case chain_id_1.ChainId.MUMBAI:
                return this.MUMBAI();
            default:
                throw new uniswap_error_1.UniswapError("".concat(chainId, " is not allowed"), error_codes_1.ErrorCodes.tokenChainIdContractDoesNotExist);
        }
    };
    return MATIC;
}());
exports.MATIC = MATIC;
