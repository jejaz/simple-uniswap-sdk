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
import { ChainId } from '../../enums/chain-id';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';
import { deepClone } from '../utils/deep-clone';
var MATIC_PREFIX = '';
export var MATIC_SYMBOL = 'MATIC';
export var MATIC_NAME = 'Matic';
export var appendEthToContractAddress = function (contractAddress) {
    return "".concat(contractAddress).concat(MATIC_PREFIX);
};
export var removeEthFromContractAddress = function (contractAddress) {
    return contractAddress
        .replace(MATIC_PREFIX, '')
        .replace(MATIC_PREFIX.toLowerCase(), '');
};
export var isNativeEth = function (contractAddress) {
    return contractAddress.includes(MATIC_PREFIX);
};
export var turnTokenIntoEthForResponse = function (token, nativeCurrencyInfo) {
    var clone = deepClone(token);
    // clear down contract address
    clone.contractAddress = 'NO_CONTRACT_ADDRESS';
    if (nativeCurrencyInfo) {
        clone.symbol = nativeCurrencyInfo.symbol;
        clone.name = nativeCurrencyInfo.name;
    }
    else {
        clone.symbol = MATIC_SYMBOL;
        clone.name = MATIC_NAME;
    }
    return clone;
};
/**
 * ETH token info
 */
var MATIC = /** @class */ (function () {
    function MATIC() {
    }
    MATIC.POLYGON = function () {
        return {
            chainId: ChainId.POLYGON,
            contractAddress: appendEthToContractAddress('0x0000000000000000000000000000000000001010'),
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
            return __assign(__assign({}, customNetworkNativeWrappedTokenInfo), { contractAddress: appendEthToContractAddress(customNetworkNativeWrappedTokenInfo.contractAddress) });
        }
        switch (chainId) {
            case ChainId.POLYGON:
                return this.POLYGON();
            default:
                throw new UniswapError("".concat(chainId, " is not allowed"), ErrorCodes.tokenChainIdContractDoesNotExist);
        }
    };
    return MATIC;
}());
export { MATIC };
