"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapContractContextV2 = void 0;
var UniswapContractContextV2 = /** @class */ (function () {
    function UniswapContractContextV2() {
    }
    /**
     * The uniswap router address
     */
    UniswapContractContextV2.routerAddress = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506';
    /**
     * The uniswap factory address
     */
    UniswapContractContextV2.factoryAddress = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';
    /**
     * The uniswap pair address
     */
    UniswapContractContextV2.pairAddress = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';
    /**
     * Uniswap v2 router
     */
    UniswapContractContextV2.routerAbi = require('../ABI/uniswap-router-v2.json');
    /**
     * Uniswap v2 factory
     */
    UniswapContractContextV2.factoryAbi = require('../ABI/uniswap-factory-v2.json');
    /**
     * Uniswap v2 pair
     */
    UniswapContractContextV2.pairAbi = require('../ABI/uniswap-pair-v2.json');
    return UniswapContractContextV2;
}());
exports.UniswapContractContextV2 = UniswapContractContextV2;
