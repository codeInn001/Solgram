import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { Link } from 'react-router-dom';
import  {push,getDatabase,  ref, set}  from 'firebase/database'; // Import your database instance
// import  {database}  from '../libs/firebaseConfig'; // Import your database instance



function Feeds() {
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[#121a21] dark group/design-root overflow-x-hidden" style={{fontFamily: `"Spline Sans", "Noto Sans", sans-serif`}}>
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
                    { /* Your app's components go here, nested within the context providers. */ }
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
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/3bd954c6-d79a-44a0-ba64-6810e780de17.png")`}}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex w-full overflow-hidden px-4 py-3">
              <div className="flex min-h-min flex-row items-start justify-start gap-5">
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/1012d36e-5209-44b8-af1a-d3c2022ac849.png")`}}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/8a091e93-09b8-4bec-bf4e-0aab0efd8948.png")`}}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style=  {{backgroundImage: `url("https://cdn.usegalileo.ai/stability/8f478f7a-b222-4faa-9d31-af0901adc095.png")`}}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/3f5dd5c0-01d7-4581-98d3-e16b885215ac.png")`}}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/8f478f7a-b222-4faa-9d31-af0901adc095.png")`}}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/e15445db-628a-443b-8111-d7361ad00c27.png")`}}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/3f5dd5c0-01d7-4581-98d3-e16b885215ac.png      ")`}}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/18a8ce3d-97a9-4294-a734-46eeacd5c3b7.png")`}}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/bf3fa41d-233b-48a6-b893-6af5d1678583.png")`}}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 w-16 text-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/0bb82ab1-2752-4e5c-bad7-15bf6cd84fa6.png")`}}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#121a21] px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/274334aa-487a-4c0f-956f-107c0b9b6a10.png")`}}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal line-clamp-1">abczhang</p>
                  <p className="text-[#94adc7] text-sm font-normal leading-normal line-clamp-2">@abczhang</p>
                </div>
              </div>
              <div className="shrink-0">
                <div className="text-white flex size-7 items-center justify-center" data-icon="DotsThree" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex w-full grow bg-[#121a21] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#121a21] @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/c2c8e76c-d5dc-4358-8e65-b6f75e61ccf9.png")`}}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 px-4 py-2 py-2 justify-between">
              <div className="flex items-center justify-center gap-2 px-3 py-2">
                <div className="text-[#94adc7]" data-icon="Heart" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
                    ></path>
                  </svg>
                </div>
                <p className="text-[#94adc7] text-[13px] font-bold leading-normal tracking-[0.015em]">7904</p>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 py-2">
                <div className="text-[#94adc7]" data-icon="ChatCircle" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
                    ></path>
                  </svg>
                </div>
                <p className="text-[#94adc7] text-[13px] font-bold leading-normal tracking-[0.015em]">834</p>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 py-2">
                <div className="text-[#94adc7]" data-icon="PaperPlaneTilt" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"
                    ></path>
                  </svg>
                </div>
                <p className="text-[#94adc7] text-[13px] font-bold leading-normal tracking-[0.015em]">347</p>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 py-2">
                <div className="text-[#94adc7]" data-icon="BookmarkSimple" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#121a21] px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/975f9323-2eab-4dee-9f0b-0ef24f5e89a1.png")`}}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-base font-medium leading-normal line-clamp-1">southern_circle</p>
                  <p className="text-[#94adc7] text-sm font-normal leading-normal line-clamp-2">@southern_circle</p>
                </div>
              </div>
              <div className="shrink-0">
                <div className="text-white flex size-7 items-center justify-center" data-icon="DotsThree" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex w-full grow bg-[#121a21] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#121a21] @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{backgroundImage: `url("https://cdn.usegalileo.ai/stability/c376aa02-b9be-4318-9269-09b248cf49ac.png")`}}
                ></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 px-4 py-2 py-2 justify-between">
              <div className="flex items-center justify-center gap-2 px-3 py-2">
                <div className="text-[#94adc7]" data-icon="Heart" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
                    ></path>
                  </svg>
                </div>
                <p className="text-[#94adc7] text-[13px] font-bold leading-normal tracking-[0.015em]">512</p>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 py-2">
                <div className="text-[#94adc7]" data-icon="ChatCircle" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
                    ></path>
                  </svg>
                </div>
                <p className="text-[#94adc7] text-[13px] font-bold leading-normal tracking-[0.015em]">874</p>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 py-2">
                <div className="text-[#94adc7]" data-icon="PaperPlaneTilt" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"
                    ></path>
                  </svg>
                </div>
                <p className="text-[#94adc7] text-[13px] font-bold leading-normal tracking-[0.015em]">342</p>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 py-2">
                <div className="text-[#94adc7]" data-icon="BookmarkSimple" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#94adc7] text-base font-normal leading-normal min-w-40" href="#">About</a>
                <a className="text-[#94adc7] text-base font-normal leading-normal min-w-40" href="#">Help</a>
                <a className="text-[#94adc7] text-base font-normal leading-normal min-w-40" href="#">Press</a>
                <a className="text-[#94adc7] text-base font-normal leading-normal min-w-40" href="#">API</a>
                <a className="text-[#94adc7] text-base font-normal leading-normal min-w-40" href="#">Jobs</a>
                <a className="text-[#94adc7] text-base font-normal leading-normal min-w-40" href="#">Privacy</a>
                <a className="text-[#94adc7] text-base font-normal leading-normal min-w-40" href="#">Terms</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#94adc7]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#94adc7]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#94adc7]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#94adc7]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#94adc7] text-base font-normal leading-normal">@2022 Metaverse</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
    )
}

export default Feeds