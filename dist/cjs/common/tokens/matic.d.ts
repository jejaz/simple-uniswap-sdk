import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
export declare const MATIC_SYMBOL = "MATIC";
export declare const MATIC_NAME = "Matic";
export declare class MATIC {
    static POLYGON(): Token;
    static MUMBAI(): Token;
    /**
     * Get WETH token info by chain id
     * @param chainId The chain id
     */
    static token(chainId: ChainId | number): Token;
}
