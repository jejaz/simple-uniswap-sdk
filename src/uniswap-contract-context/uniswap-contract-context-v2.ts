import { JsonFragment } from '@ethersproject/abi';

export class UniswapContractContextV2 {
  /**
   * The uniswap router address
   */
  public static routerAddress = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506';

  /**
   * The uniswap factory address
   */
  public static factoryAddress = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';

  /**
   * The uniswap pair address
   */
  public static pairAddress = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4';

  /**
   * Uniswap v2 router
   */
  public static routerAbi: JsonFragment[] = require('../ABI/uniswap-router-v2.json');

  /**
   * Uniswap v2 factory
   */
  public static factoryAbi: JsonFragment[] = require('../ABI/uniswap-factory-v2.json');

  /**
   * Uniswap v2 pair
   */
  public static pairAbi: JsonFragment[] = require('../ABI/uniswap-pair-v2.json');
}
