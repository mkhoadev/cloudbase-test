/* eslint-disable prefer-const */
import { Address, BigDecimal } from "@graphprotocol/graph-ts/index";
import { Bundle, Pair, Token } from "../generated/schema";
import { ADDRESS_ZERO, factoryContract, ONE_BD, ZERO_BD } from "./utils";

// let WETH_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
// let WETH_USDT_PAIR = "0x17c1ae82d99379240059940093762c5e4539aba5";
// let WETH_USDC_PAIR = "0x2e8135be71230c6b1b4045696d41c09db0414226";
let WETH_ADDRESS = "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6";
let WETH_USDT_PAIR = "0x51b3a415ef84e36ae12a6561d3d5cc8cecb2efe0";
let WETH_USDC_PAIR = "0x63248e01aca3afc858be58e018aa32d93a00068f";

export function getETHPriceInUSD(): BigDecimal {
  // fetch eth prices for each stablecoin
  let usdtPair = Pair.load(WETH_USDT_PAIR); // usdt is token1
  let usdcPair = Pair.load(WETH_USDC_PAIR); // usdc is token0

  // console.log(usdtPair)
  // console.log(usdcPair)

  if (usdcPair !== null && usdtPair !== null) {
    let totalLiquidityBNB = usdcPair.reserve1.plus(usdtPair.reserve0);
    if (totalLiquidityBNB.notEqual(ZERO_BD)) {
      let busdWeight = usdcPair.reserve1.div(totalLiquidityBNB);
      let usdtWeight = usdtPair.reserve0.div(totalLiquidityBNB);
      return usdcPair.token0Price.times(busdWeight).plus(usdtPair.token1Price.times(usdtWeight));
    } else {
      return ZERO_BD;
    }
  } else if (usdcPair !== null) {
    return usdcPair.token0Price;
  } else if (usdtPair !== null) {
    return usdtPair.token1Price;
  } else {
    return ZERO_BD;
  }
}

// token where amounts should contribute to tracked volume and liquidity
let WHITELIST: string[] = [
  // "0x418d75f65a02b3d53b2418fb8e1fe493759c7605", // WBNB
  // "0x4fabb145d64652a948d72533023f6e7a623c7c53", // BUSD
  // "0xdac17f958d2ee523a2206206994597c13d831ec7", // USDT
  // "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // USDC
  // "0x23396cf899ca06c4472205fc903bdb4de249d6fc", // UST
  // "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", // BTCB
  // "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", // WBTC (new)
  // "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // ETH
  "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  "0x74Bec6330C9a850697338c4C53068a8567ca8379",
  "0xfe54279Bd3faA2fAF8797C5973CA9FB5816Ef048"
];

// minimum liquidity for price to get tracked
let MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString("5");

/**
 * Search through graph to find derived BNB per token.
 * @todo update to be derived BNB (add stablecoin estimates)
 **/
export function findEthPerToken(token: Token): BigDecimal {
  if (token.id == WETH_ADDRESS) {
    return ONE_BD;
  }
  // loop through whitelist and check if paired with any
  for (let i = 0; i < WHITELIST.length; ++i) {
    let pairAddress = factoryContract.getPair(Address.fromString(token.id), Address.fromString(WHITELIST[i]));
    if (pairAddress.toHex() != ADDRESS_ZERO) {
      let pair = Pair.load(pairAddress.toHex());
      if (pair.token0 == token.id && pair.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
        let token1 = Token.load(pair.token1);
        return pair.token1Price.times(token1.derivedETH as BigDecimal); // return token1 per our token * BNB per token 1
      }
      if (pair.token1 == token.id && pair.reserveETH.gt(MINIMUM_LIQUIDITY_THRESHOLD_ETH)) {
        let token0 = Token.load(pair.token0);
        return pair.token0Price.times(token0.derivedETH as BigDecimal); // return token0 per our token * BNB per token 0
      }
    }
  }
  return ZERO_BD; // nothing was found return 0
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD.
 * If both are, return average of two amounts
 * If neither is, return 0
 */
export function getTrackedVolumeUSD(
  bundle: Bundle,
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let price0 = token0.derivedETH.times(bundle.ethPrice);
  let price1 = token1.derivedETH.times(bundle.ethPrice);

  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0).plus(tokenAmount1.times(price1)).div(BigDecimal.fromString("2"));
  }

  // take full value of the whitelisted token amount
  if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0);
  }

  // take full value of the whitelisted token amount
  if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount1.times(price1);
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD;
}

/**
 * Accepts tokens and amounts, return tracked amount based on token whitelist
 * If one token on whitelist, return amount in that token converted to USD * 2.
 * If both are, return sum of two amounts
 * If neither is, return 0
 */
export function getTrackedLiquidityUSD(
  bundle: Bundle,
  tokenAmount0: BigDecimal,
  token0: Token,
  tokenAmount1: BigDecimal,
  token1: Token
): BigDecimal {
  let price0 = token0.derivedETH.times(bundle.ethPrice);
  let price1 = token1.derivedETH.times(bundle.ethPrice);

  // both are whitelist tokens, take average of both amounts
  if (WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0).plus(tokenAmount1.times(price1));
  }

  // take double value of the whitelisted token amount
  if (WHITELIST.includes(token0.id) && !WHITELIST.includes(token1.id)) {
    return tokenAmount0.times(price0).times(BigDecimal.fromString("2"));
  }

  // take double value of the whitelisted token amount
  if (!WHITELIST.includes(token0.id) && WHITELIST.includes(token1.id)) {
    return tokenAmount1.times(price1).times(BigDecimal.fromString("2"));
  }

  // neither token is on white list, tracked volume is 0
  return ZERO_BD;
}
