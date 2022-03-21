import { ChainId } from '../../enums/chain-id';
import { TradePath } from '../../enums/trade-path';
import { Token } from '../../factories/token/models/token';
import { ETH } from '../tokens/eth';
import {MATIC} from "../tokens";

export function getTradePath(
  chainId: ChainId,
  fromToken: Token,
  toToken: Token,
  customNetworkNativeWrappedTokenInfo: Token | undefined
): TradePath {
  if (
    fromToken.contractAddress ===
      (chainId === 80001 ? MATIC.info(chainId, customNetworkNativeWrappedTokenInfo).contractAddress : ETH.info(chainId, customNetworkNativeWrappedTokenInfo).contractAddress)
  ) {
    console.log('eth to erc20')
    return TradePath.ethToErc20;
  }

  if (
    toToken.contractAddress ===
      (chainId === 80001 ? MATIC.info(chainId, customNetworkNativeWrappedTokenInfo).contractAddress : ETH.info(chainId, customNetworkNativeWrappedTokenInfo).contractAddress)
  ) {
    console.log('erc20 to eth')
    return TradePath.erc20ToEth;
  }

  return TradePath.erc20ToErc20;
}
