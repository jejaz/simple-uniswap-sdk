import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

export const MATIC_SYMBOL = 'MATIC';
export const MATIC_NAME = 'Matic';

export class MATIC {
    public static POLYGON(): Token {
        return {
            chainId: ChainId.POLYGON,
            contractAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
            decimals: 18,
            symbol: MATIC_SYMBOL,
            name: MATIC_NAME,
        };
    }
    public static MUMBAI(): Token {
        return {
            chainId: ChainId.POLYGON,
            contractAddress: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
            decimals: 18,
            symbol: MATIC_SYMBOL,
            name: MATIC_NAME,
        };
    }

    /**
     * Get WETH token info by chain id
     * @param chainId The chain id
     */
    public static token(chainId: ChainId | number): Token {
        switch (chainId) {
            case ChainId.POLYGON:
                return this.POLYGON();
            case ChainId.MUMBAI:
                return this.MUMBAI();
            default:
                throw new UniswapError(
                    `${chainId} is not allowed`,
                    ErrorCodes.tokenChainIdContractDoesNotExist
                );
        }
    }
}
