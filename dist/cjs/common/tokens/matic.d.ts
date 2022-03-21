import { ChainId } from '../../enums/chain-id';
import { NativeCurrencyInfo } from '../../factories/pair/models/custom-network';
import { Token } from '../../factories/token/models/token';
export declare const MATIC_SYMBOL = "MATIC";
export declare const MATIC_NAME = "Matic";
export declare const appendEthToContractAddress: (contractAddress: string) => string;
export declare const removeEthFromContractAddress: (contractAddress: string) => string;
export declare const isNativeMatic: (contractAddress: string) => boolean;
export declare const turnTokenIntoEthForResponse: (token: Token, nativeCurrencyInfo: NativeCurrencyInfo | undefined) => Token;
/**
 * ETH token info
 */
export declare class MATIC {
    static POLYGON(): Token;
    /**
     * Get ETH token info by chain id
     * @param chainId The chain id
     */
    static info(chainId: ChainId | number, customNetworkNativeWrappedTokenInfo?: Token | undefined): Token;
}
