import { TradePath } from '../../enums/trade-path';
import { ETH } from '../tokens/eth';
export function getTradePath(chainId, fromToken, toToken, customNetworkNativeWrappedTokenInfo) {
    if (fromToken.contractAddress ===
        ETH.info(chainId, customNetworkNativeWrappedTokenInfo).contractAddress) {
        console.log('eth to erc20');
        return TradePath.ethToErc20;
    }
    if (toToken.contractAddress ===
        ETH.info(chainId, customNetworkNativeWrappedTokenInfo).contractAddress) {
        console.log('erc20 to eth');
        return TradePath.erc20ToEth;
    }
    return TradePath.erc20ToErc20;
}
