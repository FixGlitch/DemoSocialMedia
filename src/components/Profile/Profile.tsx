"use client";

import { RootState } from "@/store/store";
import Image from "next/image";
import { useSelector } from "react-redux";

const Profile = () => {
  const userDetail = useSelector((state: RootState) => state.user.userDetail);
  return (
    <>
      <div className="relative w-full h-auto bg-white">
        <div className="relative w-full h-[40vh] md:h-[40vh] xl:h-[40vh]">
          <Image
            src={"/assets/Banner.jpg"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width={970}
            height={260}
          />
          <div className="relative right-[30%] bottom-[35%] md:right-[25%] md:bottom-[50%] z-30 mx-auto h-30 w-full max-w-30 rounded-full bg-white/50 p-4 backdrop-blur md:h-auto md:max-w-70 md:p-6">
            <div className="flex relative drop-shadow-2">
              <Image
                src={"/assets/AvatarDefault.png"}
                width={300}
                height={300}
                alt="profile"
              />
            </div>{" "}
          </div>
          <div className="absolute top-[70%] left-[34%]">
            <div className="flex flex-col text-start">
              <h3 className="text-2xl font-semibold text-white ml-2">
                USER NAME
              </h3>
              <svg
                width="166"
                height="42"
                viewBox="0 0 166 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-6"
              >
                <g>
                  <path
                    d="M107.418 32.1643C106.839 32.4613 106.182 31.9408 106.299 31.2763L107.544 24.1813L102.259 19.1473C101.766 18.6763 102.022 17.8153 102.684 17.7223L110.031 16.6783L113.307 10.1878C113.602 9.60277 114.402 9.60277 114.697 10.1878L117.973 16.6783L125.32 17.7223C125.982 17.8153 126.238 18.6763 125.743 19.1473L120.46 24.1813L121.705 31.2763C121.822 31.9408 121.165 32.4613 120.586 32.1643L114 28.7803L107.416 32.1643H107.418Z"
                    fill="#FEC501"
                  />
                </g>
                <g>
                  <path
                    d="M138.418 32.1643C137.839 32.4613 137.182 31.9408 137.299 31.2763L138.544 24.1813L133.259 19.1473C132.766 18.6763 133.022 17.8153 133.684 17.7223L141.031 16.6783L144.307 10.1878C144.602 9.60277 145.402 9.60277 145.697 10.1878L148.973 16.6783L156.32 17.7223C156.982 17.8153 157.238 18.6763 156.743 19.1473L151.46 24.1813L152.705 31.2763C152.822 31.9408 152.165 32.4613 151.586 32.1643L145 28.7803L138.416 32.1643H138.418Z"
                    fill="white"
                  />
                </g>
                <g>
                  <path
                    d="M76.4179 32.1643C75.8389 32.4613 75.1819 31.9408 75.2989 31.2763L76.5439 24.1813L71.2594 19.1473C70.7659 18.6763 71.0224 17.8153 71.6839 17.7223L79.0309 16.6783L82.3069 10.1878C82.6024 9.60277 83.4019 9.60277 83.6974 10.1878L86.9734 16.6783L94.3204 17.7223C94.9819 17.8153 95.2384 18.6763 94.7434 19.1473L89.4604 24.1813L90.7054 31.2763C90.8224 31.9408 90.1654 32.4613 89.5864 32.1643L82.9999 28.7803L76.4164 32.1643H76.4179Z"
                    fill="#FEC501"
                  />
                </g>
                <g>
                  <path
                    d="M45.4179 32.1643C44.8389 32.4613 44.1819 31.9408 44.2989 31.2763L45.5439 24.1813L40.2594 19.1473C39.7659 18.6763 40.0224 17.8153 40.6839 17.7223L48.0309 16.6783L51.3069 10.1878C51.6024 9.60277 52.4019 9.60277 52.6974 10.1878L55.9734 16.6783L63.3204 17.7223C63.9819 17.8153 64.2384 18.6763 63.7434 19.1473L58.4604 24.1813L59.7054 31.2763C59.8224 31.9408 59.1654 32.4613 58.5864 32.1643L51.9999 28.7803L45.4164 32.1643H45.4179Z"
                    fill="#FEC501"
                  />
                </g>
                <g>
                  <path
                    d="M14.4179 32.1643C13.8389 32.4613 13.1819 31.9408 13.2989 31.2763L14.5439 24.1813L9.25943 19.1473C8.76593 18.6763 9.02243 17.8153 9.68393 17.7223L17.0309 16.6783L20.3069 10.1878C20.6024 9.60277 21.4019 9.60277 21.6974 10.1878L24.9734 16.6783L32.3204 17.7223C32.9819 17.8153 33.2384 18.6763 32.7434 19.1473L27.4604 24.1813L28.7054 31.2763C28.8224 31.9408 28.1654 32.4613 27.5864 32.1643L20.9999 28.7803L14.4164 32.1643H14.4179Z"
                    fill="#FEC501"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="mt-4">
            <div className="mx-auto mt-4.5 mb-5.5 max-w-[40rem] flex items-center justify-between rounded-md py-2.5">
              <button className="flex border-2 items-center justify-center border-gray300 w-full py-3 mx-5">
                <span className="font-semibold text-gray700">Edit Profile</span>
              </button>

              <div className="flex flex-col items-center gap-1 px-4">
                <span className="font-semibold text-black">243</span>
                <span className="text-sm text-black">FOLLOWERS</span>
              </div>
              <div className="flex flex-col items-center gap-1 px-4">
                <span className="font-semibold text-black">5</span>
                <span className="text-sm text-black">CLASIFIEDS</span>
              </div>
              <div className="flex flex-col items-center gap-1 px-4">
                <span className="font-semibold text-black">2K</span>
                <span className="text-sm text-black">HAUSINGS</span>
              </div>
              <div className="flex flex-col items-center gap-1 px-4">
                <span className="font-semibold text-black">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.78 5.46936C20.8498 5.53903 20.9053 5.6218 20.9431 5.71291C20.9809 5.80403 21.0003 5.90171 21.0003 6.00036C21.0003 6.09902 20.9809 6.1967 20.9431 6.28781C20.9053 6.37893 20.8498 6.4617 20.78 6.53136L10.28 17.0314C10.2103 17.1012 10.1276 17.1566 10.0364 17.1944C9.94533 17.2322 9.84764 17.2517 9.74899 17.2517C9.65034 17.2517 9.55266 17.2322 9.46154 17.1944C9.37043 17.1566 9.28766 17.1012 9.21799 17.0314L3.96799 11.7814C3.82716 11.6405 3.74805 11.4495 3.74805 11.2504C3.74805 11.0512 3.82716 10.8602 3.96799 10.7194C4.10882 10.5785 4.29983 10.4994 4.49899 10.4994C4.69816 10.4994 4.88916 10.5785 5.02999 10.7194L9.74899 15.4399L19.718 5.46936C19.7877 5.39952 19.8704 5.34411 19.9615 5.3063C20.0527 5.26849 20.1503 5.24902 20.249 5.24902C20.3476 5.24902 20.4453 5.26849 20.5364 5.3063C20.6276 5.34411 20.7103 5.39952 20.78 5.46936V5.46936Z"
                      fill="#34C759"
                    />
                  </svg>
                </span>
                <span className="text-sm text-black">VERIFICATED</span>
              </div>
            </div>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black">About Me</h4>
              <p className="mt-4.5 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
