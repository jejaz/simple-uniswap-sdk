import { JsonFragment } from '@ethersproject/abi';

export class UniswapContractContextV2 {
  /**
   * The uniswap router address
   */
  public static routerAddress = '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506';

  /**
   * The uniswap factory address
   */
  public static factoryAddress = '0xc35dadb65012ec5796536bd9864ed8773abc74c4';

  /**
   * The uniswap pair address
   */
  //address for polygon mainnet
  //public static pairAddress = '0x9b967c6db1a8cc1e73eca79ca3e5b32ba9ac6465';

  //address for mumbai
  public static pairAddress = '0xc35dadb65012ec5796536bd9864ed8773abc74c4';

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
