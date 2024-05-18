import { ethers } from "ethers";
import axios from "axios";
import { Squid } from "@0xsquid/sdk";

//@ts-ignore
export const exchange = async () => {
  const squid = new Squid({
    baseUrl: "https://testnet.api.squidrouter.com",
    integratorId: "akash-pay-922ea47b-06b2-4c2a-9707-ddb0a44b8424",
  });
  await squid.init();

  const getChains = async () => {
    const result = await axios.get(
      "https://testnet.api.squidrouter.com/v1/chains"
    );
    const res = await result.data;
    return res;
  };

  const getTokens = async () => {
    const result = await axios.get(
      "https://testnet.api.squidrouter.com/v1/tokens?chainId=43113"
    );
    const res = await result.data;
    console.log(res);
  };

  const getRoute = async () => {
    const fromChain = "43113";
    const toChain = "osmo-test-5";
    const fromToken = "0x57f1c63497aee0be305b8852b354cec793da43bb";
    const toToken =
      "ibc/1587E7B54FC9EFDA2350DC690EC2F9B9ECEB6FC31CF11884F9C0C5207ABE3921";
    const fromAmount = "1000000";
    const fromAddress = import.meta.env.VITE_FROM_ADDRESS as string;
    const toAddress = import.meta.env.VITE_TO_ADDRESS as string;
    const slippage = "10";

    const url = `https://testnet.api.squidrouter.com/v1/route?fromChain=${fromChain}&toChain=${toChain}&fromToken=${fromToken}&toToken=${toToken}&fromAmount=${fromAmount}&fromAddress=${fromAddress}&toAddress=${toAddress}&slippage=${slippage}`;
    //?fromChain=${fromChain}&toChain=${toChain}&fromToken=${fromToken}&toToken=${toToken}&fromAmount=${fromAmount}&fromAddress=${fromAddress}&toAddress=${toAddress}&slippage=${slippage}
    try {
      const result = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "x-integrator-id": "akpay-8c4bbe54-022d-431c-9a28-524e527debc7",
        },
      });

      const res = await result.data;

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const route = await getRoute();
  const provider = new ethers.providers.JsonRpcProvider(
    "https://api.avax-test.network/ext/bc/C/rpc"
  );
  const signer = new ethers.Wallet(
    import.meta.env.VITE_WALLET_PRIVATE_KEY as string,
    provider
  );
  const tx = await squid.executeRoute({
    route: route.route,
    signer: signer,
  });

  /// @ts-ignore
  const txReceipt = await tx.wait();
  const url2 = `https://testnet.axelarscan.io/gmp/${txReceipt.transactionHash}`;
  return url2;
};
