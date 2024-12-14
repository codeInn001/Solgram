import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
// import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { publicKey } from "@metaplex-foundation/umi";

function Dashboard() {
    const [nfts, setNfts] = useState([]);
    const { publicKey, sendTransaction, wallet, connected, connection } = useWallet();

    const getNFTsWithImages = async () => {
        try {
            // 1. Connect to the Solana network
            const connection = new Connection("https://sparkling-cosmopolitan-dust.solana-devnet.quiknode.pro/1aa238522a676572cf6486a63663188fc7052662"); // Change to mainnet for production
            const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet.adapter));

            // 2. Fetch all NFTs owned by the wallet
            // const publicKey = new PublicKey(pub);
            // const publicKey = new PublicKey(publicKey);
            console.log(publicKey)
            const nfts = await metaplex.nfts().findAllByOwner({ owner: publicKey.toBase58() });

            // 3. Fetch metadata for each NFT
            const nftDetails = await Promise.all(
                nfts.map(async (nft) => {
                    try {
                        // Fetch the metadata JSON from the URI
                        const response = await fetch(nft.uri);
                        const metadata = await response.json();
                        return {
                            name: nft.name,
                            mintAddress: nft.mintAddress.toBase58(),
                            image: metadata.image,
                        };
                    } catch (error) {
                        console.error(`Failed to fetch metadata for NFT: ${nft.mintAddress.toBase58()}`, error);
                        return null;
                    }
                })
            );

            // 4. Filter out any NFTs with missing metadata
            const validNfts = nftDetails.filter((nft) => nft !== null);

            // Log the results
            console.log(`NFTs owned by ${publicKey.toBase58()}:`, validNfts);
            return validNfts;
        } catch (error) {
            console.error("Error fetching NFTs with images:", error);
            return [];
        }
    };

    

    useEffect(() => {
        const fetchNFTs = async () => {
            const fetchedNFTs = await getNFTsWithImages();
            setNfts(fetchedNFTs);
        };

        fetchNFTs();
    }, [publicKey]);

    



    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden" style={{ fontFamily: `"Spline Sans", "Noto Sans", sans-serif` }}>
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#253646] px-10 py-3">
                    <div className="flex items-center gap-4 text-white">

                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Blockgram</h2>

                        <WalletModalProvider>
                            <WalletMultiButton className="flex  max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#378fe6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]" />
                            {/* <WalletDisconnectButton /> */}
                            { /* Your app's components go here, nested within the context providers. */}
                        </WalletModalProvider>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <label className="flex flex-col min-w-40 !h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                <div
                                    className="text-[#94adc7] flex border-none bg-[#253646] items-center justify-center pl-4 rounded-l-xl border-r-0"
                                    data-icon="MagnifyingGlass"
                                    data-size="24px"
                                    data-weight="regular"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                        <path
                                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    placeholder="Search"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#253646] focus:border-none h-full placeholder:text-[#94adc7] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"

                                />
                            </div>
                        </label>
                        <div className="flex gap-2">
                            <button
                                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#253646] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                            >
                                <div className="text-white" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path
                                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                            <button
                                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#253646] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                            >
                                <div className="text-white" data-icon="Compass" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path
                                            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                            <button
                                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#253646] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                            >
                                <div className="text-white" data-icon="ChatCircle" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path
                                            d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                            <button
                                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#253646] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                            >
                                <div className="text-white" data-icon="BellSimple" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path
                                            d="M168,224a8,8,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8,8,0,0,1,168,224Zm53.85-32A15.8,15.8,0,0,1,208,200H48a16,16,0,0,1-13.8-24.06C39.75,166.38,48,139.34,48,104a80,80,0,1,1,160,0c0,35.33,8.26,62.38,13.81,71.94A15.89,15.89,0,0,1,221.84,192ZM208,184c-7.73-13.27-16-43.95-16-80a64,64,0,1,0-128,0c0,36.06-8.28,66.74-16,80Z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                            <button
                                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#253646] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                            >
                                <Link to='/createPost'>
                                    <div className="text-white" data-icon="Plus" data-size="20px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                                        </svg>
                                    </div>
                                </Link>

                            </button>
                        </div>
                        <Link to='/dashboard'>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                style={{ backgroundImage: `url("https://cdn.usegalileo.ai/stability/3bd954c6-d79a-44a0-ba64-6810e780de17.png")` }}
                            ></div>
                        </Link>
                    </div>
                </header>



                <h1 className="text-[#94adc7] ml-10">Dashboard</h1>
                {nfts.length > 0 ? (
                    <div className="nft-gallery flex flex-row justify-center gap-2">
                        {nfts.map((nft, index) => (
                                                            
                                
                                <div class=" key={index}  sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                    
                                    <img src={nft.image} alt={nft.name}  class="h-48 object-cover" />
                                <p className="max-w-[480px]  overflow-hidden rounded-xl h-10  text-[#94adc7] mt-3 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 ">{nft.name}</p>
                                <button className="max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#253646] text-white gap- text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-5">List NFT</button>
                                </div>

                            
                        ))}
                    </div>
                ) : (
                        <p className="text-[#94adc7]">No NFTs found for this wallet.</p>
                )}
            </div>
        </div>
    )
}

export default Dashboard


