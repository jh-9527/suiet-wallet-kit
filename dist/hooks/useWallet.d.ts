/// <reference types="react" />
import { IWallet, IWalletAdapter } from "../types/wallet";
import { SuiSignAndExecuteTransactionBlockInput, SuiSignAndExecuteTransactionBlockOutput, SuiSignMessageInput, SuiSignMessageOutput, SuiSignTransactionBlockInput, SuiSignTransactionBlockOutput, WalletAccount } from "@mysten/wallet-standard";
import { WalletEvent, WalletEventListeners } from "../types/events";
import { Chain } from "../types/chain";
export interface WalletContextState {
    configuredWallets: IWallet[];
    detectedWallets: IWallet[];
    allAvailableWallets: IWallet[];
    chains: Chain[];
    chain: Chain | undefined;
    name: string | undefined;
    adapter: IWalletAdapter | undefined;
    account: WalletAccount | undefined;
    address: string | undefined;
    connecting: boolean;
    connected: boolean;
    status: "disconnected" | "connected" | "connecting";
    select: (walletName: string) => Promise<void>;
    disconnect: () => Promise<void>;
    getAccounts: () => readonly WalletAccount[];
    signAndExecuteTransactionBlock(input: Omit<SuiSignAndExecuteTransactionBlockInput, 'account' | 'chain'>): Promise<SuiSignAndExecuteTransactionBlockOutput>;
    signTransactionBlock(input: Omit<SuiSignTransactionBlockInput, 'account' | 'chain'>): Promise<SuiSignTransactionBlockOutput>;
    signMessage(input: Omit<SuiSignMessageInput, 'account'>): Promise<SuiSignMessageOutput>;
    verifySignedMessage(input: SuiSignMessageOutput): boolean;
    on: <E extends WalletEvent>(event: E, listener: WalletEventListeners[E]) => () => void;
}
export declare const WalletContext: import("react").Context<WalletContextState>;
export declare function useWallet(): WalletContextState;
