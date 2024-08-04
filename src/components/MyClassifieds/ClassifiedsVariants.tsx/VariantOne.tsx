import { useAppSelector } from "@/store/reduxHook";
import { RootState } from "@/store/store";
import Image from "next/image";

const VarianOne = () => {
  const userDetail = useAppSelector(
    (state: RootState) => state.user.userDetail
  );
  return (
    <div className="bg-gray200">
      <div className="max-w-screen mx-[5%] md:mx-[20%]">
        <div className="grid md:grid-cols-4 items-stretch py-10">
          <div className=" md:col-span-2 md:order-3 bg-white p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-md font-bold text-gray700 ">Babysitter</h3>
              <div className="flex flex-row">
                <svg
                  width="32"
                  height="18"
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-2"
                >
                  <g clipPath="url(#clip0_58_4303)">
                    <path
                      d="M14.5237 30.3947C7.33445 18.0526 6 16.7859 6 12.25C6 6.03678 10.2533 1 15.5 1C20.7467 1 25 6.03678 25 12.25C25 16.7859 23.6655 18.0526 16.4763 30.3947C16.0045 31.2018 14.9954 31.2017 14.5237 30.3947ZM15.5 16.9375C17.6861 16.9375 19.4583 14.8388 19.4583 12.25C19.4583 9.66115 17.6861 7.5625 15.5 7.5625C13.3139 7.5625 11.5417 9.66115 11.5417 12.25C11.5417 14.8388 13.3139 16.9375 15.5 16.9375Z"
                      fill="#848484"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_58_4303">
                      <rect
                        width="19"
                        height="30"
                        fill="white"
                        transform="translate(6 1)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="text-sm font-semibold text-gray700">
                  USA, Philadelphia
                </h2>
              </div>
              <p className="text-black font-extralight mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci odit delectus quas sed id officiis ipsa? Blanditiis eum
                expedita qui ipsum aperiam, exercitationem impedit eaque
                asperiores quo, natus aut ad?
              </p>
              <p className="text-black font-extralight mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci odit delectus quas sed id officiis ipsa? Blanditiis eum
                expedita qui ipsum aperiam.
              </p>
            </div>
          </div>
          <div className="md:order-2 bg-white py-4 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray700 ml-2 px-4">
                {userDetail?.full_name}Barbara Doe
              </h3>
              <svg
                width="166"
                height="42"
                viewBox="0 0 166 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 mb-10"
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
              <div>
                <h3 className="text-title-xl text-gray700 font-semibold bg-gray100 p-4 ">
                  $150
                </h3>
              </div>
              <div className="flex justify-center mt-10">
                <button className="flex border-2 items-center justify-center rounded-sm border-green w-full mx-8 py-3 px-3">
                  <span className="font-bold text-md text-gray700">
                    Edit Clasifieds
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="md:order-1 bg-white flex flex-col justify-between">
            <div className="relative h-80">
              <Image
                src={"/assets/AvatarPublic.png"}
                alt="Avatar Public"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:col-span-4 md:order-4 flex justify-end">
            <Image
              src={"/assets/SocialMediaShare.png"}
              alt="Social Media Share"
              width={400}
              height={50}
              className="md:col-span-4 md:order-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VarianOne;
