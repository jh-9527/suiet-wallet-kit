import { IDefaultWallet } from "../../types";
export declare function defineWallet(params: IDefaultWallet): Readonly<IDefaultWallet>;
export declare enum PresetWallet {
    SUI_WALLET = "Sui Wallet",
    SUIET_WALLET = "Suiet",
    ETHOS_WALLET = "Ethos Wallet",
    SURF_WALLET = "Surf Wallet",
    GLASS_WALLET = "GlassWallet",
    MORPHIS_WALLET = "Morphis Wallet",
    MARTIAN_WALLET = "Martian Sui Wallet",
    ONEKEY_WALLET = "OneKey Wallet",
    SPACECY_WALLET = "Spacecy Sui Wallet",
    NIGHTLY_WALLET = "Nightly",
    ELLI_WALLET = "Elli",
    TOKENPOCKET_WALLET = "TokenPocket Wallet"
}
export declare const SuietWallet: Readonly<IDefaultWallet>;
export declare const SuiWallet: Readonly<IDefaultWallet>;
export declare const EthosWallet: Readonly<IDefaultWallet>;
export declare const MartianWallet: Readonly<IDefaultWallet>;
export declare const SurfWallet: Readonly<IDefaultWallet>;
export declare const GlassWallet: Readonly<IDefaultWallet>;
export declare const MorphisWallet: Readonly<IDefaultWallet>;
export declare const OneKeyWallet: Readonly<IDefaultWallet>;
export declare const SpacecyWallet: Readonly<IDefaultWallet>;
export declare const NightlyWallet: Readonly<IDefaultWallet>;
export declare const ElliWallet: Readonly<IDefaultWallet>;
export declare const TokenPocketWallet: Readonly<IDefaultWallet>;
