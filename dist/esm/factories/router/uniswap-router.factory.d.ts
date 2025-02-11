import BigNumber from 'bignumber.js';
import { CoinGecko } from '../../coin-gecko';
import { EthersProvider } from '../../ethers-provider';
import { TradeDirection } from '../pair/models/trade-direction';
import { UniswapPairSettings } from '../pair/models/uniswap-pair-settings';
import { Token } from '../token/models/token';
import { AllPossibleRoutes } from './models/all-possible-routes';
import { BestRouteQuotes } from './models/best-route-quotes';
import { RouteQuote } from './models/route-quote';
export declare class UniswapRouterFactory {
    private _coinGecko;
    private _ethereumAddress;
    private _fromToken;
    private _toToken;
    private _settings;
    private _ethersProvider;
    private _multicall;
    private _uniswapRouterContractFactoryV2;
    private _uniswapRouterContractFactoryV3;
    private _tokensFactory;
    private readonly LIQUIDITY_PROVIDER_FEE_V2;
    constructor(_coinGecko: CoinGecko, _ethereumAddress: string, _fromToken: Token, _toToken: Token, _settings: UniswapPairSettings, _ethersProvider: EthersProvider);
    /**
     * Get all possible routes will only go up to 4 due to gas increase the more routes
     * you go.
     */
    getAllPossibleRoutes(): Promise<AllPossibleRoutes>;
    /**
     * Get all possible routes with the quotes
     * @param amountToTrade The amount to trade
     * @param direction The direction you want to get the quote from
     */
    getAllPossibleRoutesWithQuotes(amountToTrade: BigNumber, direction: TradeDirection): Promise<RouteQuote[]>;
    /**
     * Finds the best route
     * @param amountToTrade The amount they want to trade
     * @param direction The direction you want to get the quote from
     */
    findBestRoute(amountToTrade: BigNumber, direction: TradeDirection): Promise<BestRouteQuotes>;
    /**
     * Generates the trade datetime unix time
     */
    generateTradeDeadlineUnixTime(): number;
    /**
     * Get eth balance
     */
    getEthBalance(): Promise<BigNumber>;
    /**
     * Generate trade data eth > erc20
     * @param ethAmountIn The eth amount in
     * @param tokenAmount The token amount
     * @param routeQuoteTradeContext The route quote trade context
     * @param deadline The deadline it expiries unix time
     */
    private generateTradeDataEthToErc20Input;
    /**
     * Generate trade data eth > erc20
     * @param tokenAmountInMax The amount in max
     * @param ethAmountOut The amount to receive
     * @param routeQuote The route quote
     * @param deadline The deadline it expiries unix time
     */
    private generateTradeDataEthToErc20Output;
    /**
     * Generate trade amount erc20 > eth for input direction
     * @param tokenAmount The amount in
     * @param ethAmountOutMin The min amount to receive
     * @param routeQuoteTradeContext The route quote trade context
     * @param deadline The deadline it expiries unix time
     */
    private generateTradeDataErc20ToEthInput;
    /**
     * Generate trade amount erc20 > eth for input direction
     * @param tokenAmountInMax The amount in max
     * @param ethAmountOut The amount to receive
     * @param routeQuoteTradeContext The route quote trade context
     * @param deadline The deadline it expiries unix time
     */
    private generateTradeDataErc20ToEthOutput;
    /**
     * Generate trade amount erc20 > erc20 for input
     * @param tokenAmount The token amount
     * @param tokenAmountOut The min token amount out
     * @param routeQuoteTradeContext The route quote trade context
     * @param deadline The deadline it expiries unix time
     */
    private generateTradeDataErc20ToErc20Input;
    /**
     * Generate trade amount erc20 > erc20 for output
     * @param tokenAmount The token amount
     * @param tokenAmountOut The min token amount out
     * @param routeQuoteTradeContext The route quote trade context
     * @param deadline The deadline it expiries unix time
     */
    private generateTradeDataErc20ToErc20Output;
    /**
     * Generate trade data for v3
     * @param tokenAmount The token amount
     * @param tokenAmountOut The min token amount out
     * @param liquidityProviderFee The liquidity provider fee
     * @param deadline The deadline it expiries unix time
     */
    private generateTradeDataForV3Input;
    /**
     * Generate trade data for v3
     * @param tokenAmountInMax The amount in max
     * @param ethAmountOut The amount to receive
     * @param liquidityProviderFee The liquidity provider fee
     * @param deadline The deadline it expiries unix time
     */
    private generateTradeDataForV3Output;
    /**
     * Build up a transaction for erc20 from
     * @param data The data
     */
    private buildUpTransactionErc20;
    /**
     * Build up a transaction for eth from
     * @param ethValue The eth value
     * @param data The data
     */
    private buildUpTransactionEth;
    /**
     * Get the allowance and balance for the from and to token (will get balance for eth as well)
     */
    private getAllowanceAndBalanceForTokens;
    /**
     * Has got enough allowance to do the trade
     * @param amount The amount you want to swap
     */
    private hasGotEnoughAllowance;
    private hasEnoughAllowanceAndBalance;
    /**
     * Has got enough balance to do the trade (eth check only)
     * @param amount The amount you want to swap
     */
    private hasGotEnoughBalanceEth;
    /**
     * Has got enough balance to do the trade (erc20 check only)
     * @param amount The amount you want to swap
     */
    private hasGotEnoughBalanceErc20;
    /**
     * Work out trade fiat cost
     * @param allRoutes All the routes
     * @param enoughAllowanceV2 Has got enough allowance for v2
     * @param enoughAllowanceV3 Has got enough allowance for v3
     */
    private filterWithTransactionFees;
    /**
     * Work out the best route quote hops aka the best direct, the best 3 hop and the best 4 hop
     * @param allRoutes All the routes
     * @param enoughAllowanceV2 Has got enough allowance for v2
     * @param enoughAllowanceV3 Has got enough allowance for v3
     */
    private getBestRouteQuotesHops;
    /**
     * Works out every possible route it can take - v2 only
     * @param fromTokenRoutes The from token routes
     * @param toTokenRoutes The to token routes
     * @param allMainRoutes All the main routes
     */
    private workOutAllPossibleRoutes;
    private getTokenAvailablePairs;
    private getFromRouterDirectionAvailablePairs;
    private getToRouterDirectionAvailablePairs;
    /**
     * Build up route quotes from results
     * @param contractCallResults The contract call results
     * @param direction The direction you want to get the quote from
     */
    private buildRouteQuotesFromResults;
    /**
     * Build up the route quote for erc20 > eth (not shared with other method for safety reasons)
     * @param callReturnContext The call return context
     * @param routeContext The route context
     * @param direction The direction you want to get the quote from
     * @param uniswapVersion The uniswap version
     */
    private buildRouteQuoteForErc20ToErc20;
    /**
     * Build up the route quote for eth > erc20 (not shared with other method for safety reasons)
     * @param callReturnContext The call return context
     * @param routeContext The route context
     * @param direction The direction you want to get the quote from
     * @param uniswapVersion The uniswap version
     */
    private buildRouteQuoteForEthToErc20;
    /**
     * Build up the route quote for erc20 > eth (not shared with other method for safety reasons)
     * @param callReturnContext The call return context
     * @param routeContext The route context
     * @param direction The direction you want to get the quote from
     * @param uniswapVersion The uniswap version
     */
    private buildRouteQuoteForErc20ToEth;
    /**
     * Get the convert quote unformatted from the call return context
     * @param callReturnContext The call return context
     * @param direction The direction you want to get the quote from
     * @param uniswapVersion The uniswap version
     */
    private getConvertQuoteUnformatted;
    /**
     * Work out the expected convert quote taking off slippage
     * @param expectedConvertQuote The expected convert quote
     */
    private getExpectedConvertQuoteOrTokenAmountInMaxWithSlippage;
    /**
     * Format amount to trade into callable formats
     * @param amountToTrade The amount to trade
     * @param direction The direction you want to get the quote from
     */
    private formatAmountToTrade;
    /**
     * Get the trade path
     */
    private tradePath;
    private get allTokens();
    private get allMainTokens();
    private get mainCurrenciesPairsForFromToken();
    private get mainCurrenciesPairsForToToken();
    private get mainCurrenciesPairsForUSDT();
    private get mainCurrenciesPairsForCOMP();
    private get mainCurrenciesPairsForDAI();
    private get mainCurrenciesPairsForUSDC();
    private get mainCurrenciesPairsForWBTC();
    private get mainCurrenciesPairsForWETH();
    private filterUndefinedTokens;
    private get USDTTokenForConnectedNetwork();
    private get COMPTokenForConnectedNetwork();
    private get DAITokenForConnectedNetwork();
    private get USDCTokenForConnectedNetwork();
    private get WETHTokenForConnectedNetwork();
    private get WBTCTokenForConnectedNetwork();
    private get MaticTokenForConnectedNetwork();
    private getNativeTokenSymbol;
}
