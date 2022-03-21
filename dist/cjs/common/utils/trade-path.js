"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTradePath = void 0;
var trade_path_1 = require("../../enums/trade-path");
var eth_1 = require("../tokens/eth");
function getTradePath(chainId, fromToken, toToken, customNetworkNativeWrappedTokenInfo) {
    if (fromToken.contractAddress ===
        eth_1.ETH.info(chainId, customNetworkNativeWrappedTokenInfo).contractAddress) {
        console.log('eth to erc20');
        return trade_path_1.TradePath.ethToErc20;
    }
    if (toToken.contractAddress ===
        eth_1.ETH.info(chainId, customNetworkNativeWrappedTokenInfo).contractAddress) {
        console.log('erc20 to eth');
        return trade_path_1.TradePath.erc20ToEth;
    }
    return trade_path_1.TradePath.erc20ToErc20;
}
exports.getTradePath = getTradePath;
