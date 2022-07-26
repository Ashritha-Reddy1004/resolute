type Currency = {
  coinDenom: string;
  coinMinimalDenom: string;
  coinDecimals: number;
  coinGeckoId?: string;
};

type Logos = { toolbar: string; menu: string };

type StakeCurrency = {
  coinDenom: string;
  coinMinimalDenom: string;
  coinDecimals: number;
  coinGeckoId?: string;
};

type BIP44 = { coinType: number };

type GasPrice = { low: number; average: number; high: number };

type Bech32Config = {
  bech32PrefixAccAddr: string;
  bech32PrefixAccPub: string;
  bech32PrefixValAddr: string;
  bech32PrefixValPub: string;
  bech32PrefixConsAddr: string;
  bech32PrefixConsPub: string;
};

interface NetworkConfig {
  chainId: string;
  chainName: string;
  rest: string;
  rpc: string;
  stakeCurrency?: StakeCurrency;
  bip44?: BIP44;
  bech32Config?: Bech32Config;
  currencies: Currency[];
  feeCurrencies?: Currency[];
  coinType?: number;
  gasPriceStep: GasPrice;
  walletUrlForStaking?: string;
}

interface AirdropAction {
  type: string;
  title: string;
  redirect?: string;
}

interface Network {
  showAirdrop: boolean;
  logos: Logos;
  experimental: boolean;
  isTestnet: boolean;
  explorerTxHashEndpoint: string;
  config: NetworkConfig;
  airdropMessage?: string;
  airdropActions?: AirdropAction[];
}

export function getMainNetworks(): Network[] {
  if (window.location.origin === "https://airdrop.passage3d.com") {
    return [
      {
        showAirdrop: false,
        logos: {
          menu: "https://raw.githubusercontent.com/vitwit/chain-registry/08711dbf4cbc12d37618cecd290ad756c07d538b/cosmoshub/images/cosmoshub.svg",
          toolbar:
            "https://raw.githubusercontent.com/vitwit/chain-registry/08711dbf4cbc12d37618cecd290ad756c07d538b/cosmoshub/images/cosmoshub-logo.png",
        },
        experimental: false,
        isTestnet: false,
        explorerTxHashEndpoint: "https://www.mintscan.io/cosmos/txs/",
        config: {
          chainId: "cosmoshub-4",
          chainName: "Cosmos Hub",
          rest: "https://api-cosmoshub-ia.notional.ventures/",
          rpc: "https://rpc-cosmoshub.blockapsis.com",
          gasPriceStep: {
            low: 0.01,
            average: 0.025,
            high: 0.03,
          },
          currencies: [
            {
              coinDenom: "ATOM",
              coinMinimalDenom: "uatom",
              coinDecimals: 6,
            },
          ],
        },
      },
    ];
  }
  return [
    {
      showAirdrop: false,
      logos: {
        menu: "https://raw.githubusercontent.com/vitwit/chain-registry/08711dbf4cbc12d37618cecd290ad756c07d538b/cosmoshub/images/cosmoshub.svg",
        toolbar:
          "https://raw.githubusercontent.com/vitwit/chain-registry/08711dbf4cbc12d37618cecd290ad756c07d538b/cosmoshub/images/cosmoshub-logo.png",
      },
      experimental: false,
      isTestnet: false,
      explorerTxHashEndpoint: "https://www.mintscan.io/cosmos/txs/",
      config: {
        chainId: "cosmoshub-4",
        chainName: "Cosmos Hub",
        rest: "https://api-cosmoshub-ia.notional.ventures/",
        rpc: "https://rpc-cosmoshub.blockapsis.com",
        gasPriceStep: { low: 0.01, average: 0.025, high: 0.03 },
        currencies: [
          { coinDenom: "ATOM", coinMinimalDenom: "uatom", coinDecimals: 6 },
        ],
      },
    },
    {
      showAirdrop: false,
      logos: {
        toolbar:
          "https://raw.githubusercontent.com/vitwit/chain-registry/08711dbf4cbc12d37618cecd290ad756c07d538b/regen/images/regen-logo.png",
        menu: "https://raw.githubusercontent.com/vitwit/chain-registry/ae0dd6a251d67945e87b168c7ae8521d0c370415/regen/images/regen.svg",
      },
      experimental: false,
      isTestnet: false,
      explorerTxHashEndpoint: "https://www.mintscan.io/regen/txs/",
      config: {
        chainId: "regen-1",
        chainName: "Regen",
        rest: "https://regen.api.ping.pub",
        rpc: "http://rpc.regen.forbole.com:80",
        gasPriceStep: { low: 0.015, average: 0.03, high: 0.04 },
        currencies: [
          { coinDenom: "REGEN", coinMinimalDenom: "uregen", coinDecimals: 6 },
        ],
      },
    },
    {
      showAirdrop: false,
      logos: {
        toolbar:
          "https://raw.githubusercontent.com/vitwit/chain-registry/08711dbf4cbc12d37618cecd290ad756c07d538b/akash/images/akash-logo.svg",
        menu: "https://raw.githubusercontent.com/vitwit/chain-registry/08711dbf4cbc12d37618cecd290ad756c07d538b/akash/images/akash.svg",
      },
      experimental: false,
      isTestnet: false,
      explorerTxHashEndpoint: "https://www.mintscan.io/akash/txs/",
      config: {
        chainId: "akashnet-2",
        chainName: "Akash",
        rest: "https://akash.c29r3.xyz/api",
        rpc: "https://rpc.akash.forbole.com:443",
        gasPriceStep: { low: 0.015, average: 0.03, high: 0.04 },
        currencies: [
          { coinDenom: "AKT", coinMinimalDenom: "uakt", coinDecimals: 6 },
        ],
      },
    },
    {
      logos: {
        toolbar:
          "https://raw.githubusercontent.com/vitwit/chain-registry/08711dbf4cbc12d37618cecd290ad756c07d538b/osmosis/images/osmosis-logo.svg",
        menu: "https://raw.githubusercontent.com/vitwit/chain-registry/08711dbf4cbc12d37618cecd290ad756c07d538b/osmosis/images/osmosis.svg",
      },
      showAirdrop: false,
      experimental: false,
      isTestnet: false,
      explorerTxHashEndpoint: "https://www.mintscan.io/osmosis/txs/",
      config: {
        chainId: "osmosis-1",
        chainName: "Osmosis",
        rest: "https://osmo.api.ping.pub",
        rpc: "https://rpc-osmosis.blockapsis.com",
        currencies: [
          { coinDenom: "OSMO", coinMinimalDenom: "uosmo", coinDecimals: 6 },
        ],
        gasPriceStep: { low: 0.01, average: 0.025, high: 0.03 },
      },
    },
  ];
}

export function getTestNetworks(): Network[] {
  return [
    {
      experimental: true,
      showAirdrop: true,
      airdropActions: [
        { title: "#1 Initial Claim", type: "action" },
        { title: "#2 Stake", type: "redirect", redirect: "/validators" },
        {
          title: "#3 Vote on Proposal",
          type: "redirect",
          redirect: "/proposals",
        },
      ],
      logos: {
        menu: "https://www.mintscan.io/_next/static/image/assets/header/token_cosmos.a0bcdc826e90453483f279070ca2fb36.svg",
        toolbar: "white-logo.png",
      },
      isTestnet: true,
      explorerTxHashEndpoint: "https://www.mintscan.io/simapp/txs/",
      config: {
        chainId: "testnet",
        chainName: "Simapp",
        rpc: "http://localhost:26657",
        rest: "http://localhost:1317",
        stakeCurrency: {
          coinDenom: "STAKE",
          coinMinimalDenom: "stake",
          coinDecimals: 6,
          coinGeckoId: "simapp",
        },
        bip44: { coinType: 118 },
        bech32Config: {
          bech32PrefixAccAddr: `cosmos`,
          bech32PrefixAccPub: `cosmospub`,
          bech32PrefixValAddr: `cosmosvaloper`,
          bech32PrefixValPub: `cosmosvaloperpub`,
          bech32PrefixConsAddr: `cosmosvalcons`,
          bech32PrefixConsPub: `cosmosvalconspub`,
        },
        currencies: [
          {
            coinDenom: "STAKE",
            coinMinimalDenom: "stake",
            coinDecimals: 6,
            coinGeckoId: "simapp",
          },
        ],
        feeCurrencies: [
          {
            coinDenom: "STAKE",
            coinMinimalDenom: "stake",
            coinDecimals: 6,
            coinGeckoId: "simapp",
          },
        ],
        coinType: 118,
        gasPriceStep: { low: 0.0, average: 0.0025, high: 0.004 },
        walletUrlForStaking: "http://localhost:1317/stake",
      },
    },
    {
      experimental: true,
      showAirdrop: true,
      airdropActions: [{ title: "#1 Initial Claim", type: "action" }],
      airdropMessage:
        "Additional bonus will be credited if staked 50% of airdrop for 14+ months.",
      logos: {
        toolbar:
          "https://raw.githubusercontent.com/vitwit/chain-registry/aleem/staking-assets/passage3d/images/passage3d-logo.png",
        menu: "https://raw.githubusercontent.com/vitwit/chain-registry/aleem/staking-assets/passage3d/images/passage.png",
      },
      isTestnet: true,
      explorerTxHashEndpoint: "https://passage3d.testaneka.com/txs/",
      config: {
        chainId: "passage-testnet-1",
        chainName: "Passage-Testnet",
        rest: "https://api.passage3d.vitwit.com/",
        rpc: "https://rpc.passage3d.vitwit.com",
        stakeCurrency: {
          coinDenom: "PASG",
          coinMinimalDenom: "upasg",
          coinDecimals: 6,
          coinGeckoId: "passage3d",
        },
        bip44: { coinType: 118 },
        bech32Config: {
          bech32PrefixAccAddr: `pasg`,
          bech32PrefixAccPub: `pasgpub`,
          bech32PrefixValAddr: `pasgvaloper`,
          bech32PrefixValPub: `pasgvaloperpub`,
          bech32PrefixConsAddr: `pasgvalcons`,
          bech32PrefixConsPub: `pasgvalconspub`,
        },
        currencies: [
          {
            coinDenom: "PASG",
            coinMinimalDenom: "upasg",
            coinDecimals: 6,
            coinGeckoId: "passage",
          },
        ],
        feeCurrencies: [
          {
            coinDenom: "PASG",
            coinMinimalDenom: "upasg",
            coinDecimals: 6,
            coinGeckoId: "passage",
          },
        ],
        coinType: 118,
        gasPriceStep: { low: 0.0, average: 0.0, high: 0.0 },
        walletUrlForStaking: "https://stake.vitwit.com/validators",
      },
    },
  ];
}

export function getSelectedNetwork(): Network | null {
  let name = localStorage.getItem("LAST_SELECTED");
  let mainNets = getMainNetworks();
  if (name != null) {
    for (let i = 0; i < mainNets?.length; i++) {
      if (mainNets[i].config.chainName === name) {
        saveSelectedNetwork(mainNets[i].config.chainName);
        return mainNets[i];
      }
    }
  }
  let testNets = getTestNetworks();
  if (name != null) {
    for (let i = 0; i < testNets?.length; i++) {
      if (testNets[i].config.chainName === name) {
        saveSelectedNetwork(testNets[i].config.chainName);
        return testNets[i];
      }
    }
  }

  // return passage network if provided network is not present
  if (testNets?.length > 0) {
    saveSelectedNetwork(testNets[0].config.chainName);
    return testNets[0];
  }
  if (mainNets?.length > 0) {
    saveSelectedNetwork(mainNets[0].config.chainName);
    return mainNets[0];
  }
  return null;
}

export function saveSelectedNetwork(name: string) {
  localStorage.setItem("LAST_SELECTED", name);
}
export function removeSelectedNetwork() {
  localStorage.removeItem("LAST_SELECTED");
}
