import { CloneUniswapContractDetails } from '../factories/pair/models/clone-uniswap-contract-details';
import { ChainId } from "../enums/chain-id";
export declare const uniswapContracts: {
    v2: {
        getRouterAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getFactoryAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getPairAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined, chainId: ChainId) => string;
    };
    v3: {
        getRouterAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getFactoryAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
        getQuoterAddress: (cloneUniswapContractDetails: CloneUniswapContractDetails | undefined) => string;
    };
};
