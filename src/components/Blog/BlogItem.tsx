import Link from "next/link";

export default function BlogItem() {
  return (
    <div className="mx-auto overflow-hidden bg-white shadow-md transition-all sm:rounded-xl hover:shadow-lg">
      <div className="relative flex flex-row items-center p-4">
        <div className="pr-2">
          <Link href="/">
            <a className="flex flex-row items-center">
              <div>
                <img
                  alt="Blind Island"
                  src="https://storage.googleapis.com/nft-public-profile-pics/61920_1616723438.jpg"
                  className="rounded-full h-[24px] w-[24px] min-w-[24px]"
                />
              </div>
              <div className="ml-2 truncate hover:text-stpink">
                Blind Island
              </div>
            </a>
          </Link>
        </div>
        <div className="text-xs cursor-pointer text-stlink opacity-80 hover:opacity-100 mt-[2px]">
          Follow
        </div>
        <div className="flex-grow">&nbsp;</div>
        <div />
      </div>
      <div className="relative h-[290px]">
        <div className="cursor-pointer">
          <div>
            <div className="flex-1 overflow-hidden bg-black cursor-pointer transition-all hover:opacity-90 h-[290px]">
              <img
                alt="test"
                src="https://lh3.googleusercontent.com/QNHkVfh-oVL7exIdkTBZ1zro23bmjaNB-ZLA_WaWXScq0chNcs9tUZk37qx9DUEQyoiepVHmVjQydNGo2H2eUO2e4lqwvCe4Cf4oGg=w660"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-4 cursor-pointer playbutton">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="play"
            className="text-white svg-inline--fa fa-play fa-w-14 h-[20px] w-[20px]"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style={{ filter: "drop-shadow(grey 0px 0px 10px)" }}
            // style="height: 20px; width: 20px; color: white; filter: drop-shadow(grey 0px 0px 10px);"
          >
            <path
              fill="currentColor"
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <div>
          <div className="">
            <div
              className=""
              //   style="overflow-wrap: break-word; cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
            >
              Astigmaprism
            </div>
            <div
              className="py-4 text-sm text-gray-500"
              //   style="overflow-wrap: break-word; display: block; min-height: 4.7rem;"
            >
              <div>
                <div>
                  What's your vision? Seamless Loop 4:5 | 1080x1350 | 30fps
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <div className="tooltip">
                <button type="button">
                  <div className="flex flex-row items-center py-1 rounded-md hover:text-stpink">
                    <div className="mr-2 whitespace-nowrap">23</div>
                    <div className="flex pr-2">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="heart"
                        className="w-5 h-5 svg-inline--fa fa-heart fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        color="inherit"
                      >
                        <path
                          fill="currentColor"
                          d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                {/* <span
                  className="p-3 -mt-6 -ml-16 text-white bg-black rounded tooltip-text"
                  //   style="font-size: 12px; opacity: 0.9; width: 90px;"
                >
                  Sign in to like
                </span> */}
              </div>
            </div>
            <div className="mr-4">
              <div className="tooltip">
                <button type="button">
                  <div className="flex flex-row items-center py-1 rounded-lg hover:text-stpink">
                    <div className="mr-2 whitespace-nowrap">1</div>
                    <div className="flex pr-2">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="comment"
                        className="w-5 h-5 svg-inline--fa fa-comment fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        color="inherit"
                        // style="height: 22px; width: 22px;"
                      >
                        <path
                          fill="currentColor"
                          d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                {/* <span
                  className="p-3 -mt-6 -ml-16 text-white bg-black rounded tooltip-text"
                  //   style="font-size: 12px; opacity: 0.9; width: 125px;"
                >
                  Sign in to comment
                </span> */}
              </div>
            </div>
            {/* <div>
              <div className="tooltip">
                <button
                  className="inline-flex px-2 py-1 rounded-md"
                  //   style="padding-left: 2px; padding-right: 2px;"
                >
                  <img
                    src="/icons/share-black.svg"
                    alt="share-button"
                    className="flex items-center w-4 h-4"
                  />
                </button>
                <span
                  className="p-3 -mt-6 -ml-12 text-white bg-black rounded tooltip-text"
                  //   style="font-size: 12px; opacity: 0.9; width: 70px;"
                >
                  Copy link
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div
        className="flex items-end border-t border-gray-200 md:h-20"
        // style="border-top-width: 1px; border-color: rgb(219, 219, 219);"
      >
        <div className="flex flex-col py-4 mx-4">
          <div className="flex-shrink pr-2 mb-1 text-xs text-gray-500">
            Owned by{" "}
          </div>
          <div>
            <div className="flex flex-row items-center pt-1">
              <Link>
                <a className="flex flex-row items-center pr-2">
                  <div>
                    <img
                      alt="Foundation"
                      src="https://lh3.googleusercontent.com/uUdrzISpIJJVRbm_g6mmu-TUaOERBbPJcNA8KeuwI1HNgXy8Kje3c2XhoMIndnPmyono9NUJE8A2_bTd95iqAcjo9pyy-e47flJy=s120"
                      className="mr-2 rounded-full w-9 h-9"
                      // style="height: 24px; width: 24px;"
                    />
                  </div>
                  <div className="showtime-card-profile-link">Foundation</div>
                </a>
              </Link>
              <div
                className="mt-2 text-xs cursor-pointer text-stlink opacity-80 hover:opacity-100"
                // style="margin-top: 2px;"
              >
                Follow
              </div>
              <div className="flex-grow">&nbsp;</div>
            </div>
          </div>
        </div>
        <div className="flex-grow" />
      </div>
    </div>
  );
}
