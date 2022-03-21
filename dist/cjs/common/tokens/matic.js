"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MATIC = exports.turnTokenIntoEthForResponse = exports.isNativeMatic = exports.removeEthFromContractAddress = exports.appendEthToContractAddress = exports.MATIC_NAME = exports.MATIC_SYMBOL = void 0;
var chain_id_1 = require("../../enums/chain-id");
var error_codes_1 = require("../errors/error-codes");
var uniswap_error_1 = require("../errors/uniswap-error");
var deep_clone_1 = require("../utils/deep-clone");
var MATIC_PREFIX = '_MATIC';
exports.MATIC_SYMBOL = 'MATIC';
exports.MATIC_NAME = 'Matic';
var appendEthToContractAddress = function (contractAddress) {
    return "".concat(contractAddress).concat(MATIC_PREFIX);
};
exports.appendEthToContractAddress = appendEthToContractAddress;
var removeEthFromContractAddress = function (contractAddress) {
    return contractAddress
        .replace(MATIC_PREFIX, '')
        .replace(MATIC_PREFIX.toLowerCase(), '');
};
exports.removeEthFromContractAddress = removeEthFromContractAddress;
var isNativeMatic = function (contractAddress) {
    return contractAddress.includes(MATIC_PREFIX);
};
exports.isNativeMatic = isNativeMatic;
var turnTokenIntoEthForResponse = function (token, nativeCurrencyInfo) {
    var clone = (0, deep_clone_1.deepClone)(token);
    // clear down contract address
    clone.contractAddress = 'NO_CONTRACT_ADDRESS';
    if (nativeCurrencyInfo) {
        clone.symbol = nativeCurrencyInfo.symbol;
        clone.name = nativeCurrencyInfo.name;
    }
    else {
        clone.symbol = exports.MATIC_SYMBOL;
        clone.name = exports.MATIC_NAME;
    }
    return clone;
};
exports.turnTokenIntoEthForResponse = turnTokenIntoEthForResponse;
/**
 * ETH token info
 */
var MATIC = /** @class */ (function () {
    function MATIC() {
    }
    MATIC.POLYGON = function () {
        return {
            chainId: chain_id_1.ChainId.POLYGON,
            contractAddress: (0, exports.appendEthToContractAddress)('0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'),
            decimals: 18,
            symbol: 'MATIC',
            name: 'Matic',
        };
    };
    /**
     * Get ETH token info by chain id
     * @param chainId The chain id
     */
    MATIC.info = function (chainId, customNetworkNativeWrappedTokenInfo) {
        if (customNetworkNativeWrappedTokenInfo === void 0) { customNetworkNativeWrappedTokenInfo = undefined; }
        if (customNetworkNativeWrappedTokenInfo) {
            return __assign(__assign({}, customNetworkNativeWrappedTokenInfo), { contractAddress: (0, exports.appendEthToContractAddress)(customNetworkNativeWrappedTokenInfo.contractAddress) });
        }
        switch (chainId) {
            case chain_id_1.ChainId.POLYGON:
                return this.POLYGON();
            default:
                throw new uniswap_error_1.UniswapError("".concat(chainId, " is not allowed"), error_codes_1.ErrorCodes.tokenChainIdContractDoesNotExist);
        }
    };
    return MATIC;
}());
exports.MATIC = MATIC;
