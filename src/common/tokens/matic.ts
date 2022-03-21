import { ChainId } from '../../enums/chain-id';
import { NativeCurrencyInfo } from '../../factories/pair/models/custom-network';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';
import { deepClone } from '../utils/deep-clone';

const MATIC_PREFIX = '';
export const MATIC_SYMBOL = 'MATIC';
export const MATIC_NAME = 'Matic';

export const appendEthToContractAddress = (contractAddress: string): string => {
    return `${contractAddress}${MATIC_PREFIX}`;
};

export const removeEthFromContractAddress = (
    contractAddress: string
): string => {
    return contractAddress
        .replace(MATIC_PREFIX, '')
        .replace(MATIC_PREFIX.toLowerCase(), '');
};

export const isNativeEth = (contractAddress: string): boolean => {
    return contractAddress.includes(MATIC_PREFIX);
};

export const turnTokenIntoEthForResponse = (
    token: Token,
    nativeCurrencyInfo: NativeCurrencyInfo | undefined
): Token => {
    const clone = deepClone(token);
    // clear down contract address
    clone.contractAddress = 'NO_CONTRACT_ADDRESS';
    if (nativeCurrencyInfo) {
        clone.symbol = nativeCurrencyInfo.symbol;
        clone.name = nativeCurrencyInfo.name;
    } else {
        clone.symbol = MATIC_SYMBOL;
        clone.name = MATIC_NAME;
    }

    return clone;
};

/**
 * ETH token info
 */
export class MATIC {
    public static POLYGON(): Token {
        return {
            chainId: ChainId.POLYGON,
            contractAddress: appendEthToContractAddress(
                ''
            ),
            decimals: 18,
            symbol: 'MATIC',
            name: 'Matic',
        };
    }

    /**
     * Get ETH token info by chain id
     * @param chainId The chain id
     */
    public static info(
        chainId: ChainId | number,
        customNetworkNativeWrappedTokenInfo: Token | undefined = undefined
    ): Token {
        if (customNetworkNativeWrappedTokenInfo) {
            return {
                ...customNetworkNativeWrappedTokenInfo,
                contractAddress: appendEthToContractAddress(
                    customNetworkNativeWrappedTokenInfo.contractAddress
                ),
            };
        }
        switch (chainId) {
            case ChainId.POLYGON:
                return this.POLYGON();
            default:
                throw new UniswapError(
                    `${chainId} is not allowed`,
                    ErrorCodes.tokenChainIdContractDoesNotExist
                );
        }
    }
}
