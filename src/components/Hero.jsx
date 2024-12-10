import {Link, Navigate, } from "react-router"
import { useNavigate } from "react-router";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

// require('@solana/wallet-adapter-react-ui/styles.css');


function Hero() {
  const { connection } = useConnection();
  const { connected } = useWallet();
  console.log(connected)

  
    if(connected) {
      return <Navigate to="/feeds" />
    }
  

    return (
  
        <div className="px-40 flex flex-1 justify-center py-5">
          
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/475a058b-c9fc-461f-9d6f-bdc2d60e9d5b.png")`}}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1
                    className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                  >
                    Create, share, and monetize your content
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Join the decentralized revolution. Be in control of your data and earn from your creativity
                  </h2>
                </div>
                
                  
                
                  <WalletModalProvider>
                    <WalletMultiButton className="flex  max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#378fe6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]" />
                    {/* <WalletDisconnectButton /> */}
                    { /* Your app's components go here, nested within the context providers. */ }
                </WalletModalProvider>
                  {/* <Link to="/feeds"> <span className="truncate">Sign in</span> </Link> */}
                
              </div>
            </div>
          </div>
          <div className="flex w-full grow bg-[#121a21] @container p-4">
            <div className="w-full gap-1 overflow-hidden bg-[#121a21] @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/9932d8e2-1bc6-42b9-8292-ad6db873a9b4.png")`}}
              ></div>
            </div>
          </div>
          <h1 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">Be part of the revolution</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#354d64] bg-[#1a2632] p-4 flex-col">
              <div className="text-white" data-icon="Lock" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">Decentralized</h2>
                <p className="text-[#94adc7] text-sm font-normal leading-normal">No centralized control or single point of failure</p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#354d64] bg-[#1a2632] p-4 flex-col">
              <div className="text-white" data-icon="Users" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">Community-owned</h2>
                <p className="text-[#94adc7] text-sm font-normal leading-normal">Platform is governed by its users and creators</p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#354d64] bg-[#1a2632] p-4 flex-col">
              <div className="text-white" data-icon="ShieldCheck" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">Verified users</h2>
                <p className="text-[#94adc7] text-sm font-normal leading-normal">Easily identify authentic profiles</p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#354d64] bg-[#1a2632] p-4 flex-col">
              <div className="text-white" data-icon="GlobeStand" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,176A80,80,0,1,0,48,96,80.09,80.09,0,0,0,128,176Zm0-144A64,64,0,1,1,64,96,64.07,64.07,0,0,1,128,32Zm77.77,133.5a8,8,0,0,1-.23,11.32A111.24,111.24,0,0,1,136,207.72V224h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V207.71A112,112,0,0,1,47.18,18.46,8,8,0,1,1,58.72,29.54,96,96,0,0,0,194.46,165.28,8,8,0,0,1,205.77,165.5Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">Censorship-resistant</h2>
                <p className="text-[#94adc7] text-sm font-normal leading-normal">Accessible anywhere in the world</p>
              </div>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#354d64] bg-[#1a2632] p-4 flex-col">
              <div className="text-white" data-icon="Money" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-base font-bold leading-tight">Earn crypto</h2>
                <p className="text-[#94adc7] text-sm font-normal leading-normal">Get rewarded for your work with cryptocurrency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    

  
    )
  }
  
  export default Hero;
  