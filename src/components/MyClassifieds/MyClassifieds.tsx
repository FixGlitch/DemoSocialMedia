import { useAppSelector } from "@/store/reduxHook";
import { RootState } from "@/store/store";
import Image from "next/image";

const MyClassifieds = () => {
  const userDetail = useAppSelector(
    (state: RootState) => state.user.userDetail
  );
  return (
    <div className="bg-gray200">
      <div className="max-w-screen mx-[5%] md:mx-[20%]">
        <div className="grid md:grid-cols-4 items-stretch py-10">
          <div className="md:order-4 bg-white flex flex-col justify-between">
            <div className="relative h-80">
              <Image
                src={"/assets/BabySitter.png"}
                alt="Baby Sitter"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:order-3 bg-white p-4 flex flex-col justify-between">
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
          <div className="md:col-span-4 md:order-4 flex justify-between">
            <div className="md:col-span-4 md:order-1 flex justify-start">
              <p className="font-medium text-md text-gray400">
                Comments <span className="font-bold text-md text-gray">1</span>
              </p>
            </div>
            <Image
              src={"/assets/SocialMediaShare.png"}
              alt="Social Media Share"
              width={400}
              height={50}
              className="md:col-span-4 md:order-2"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 items-center">
          <div className="bg-white p-4 flex items-center md:col-span-4">
            <div className="relative w-15 h-15 mx-5">
              <Image
                src={"/assets/AvatarDefault.png"}
                alt="Avatar Public"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <input
              className="w-full border-[0.10rem] border-gray300 p-4"
              placeholder="Your Comment"
            />
            <button className="flex flex-row border-2 border-orange ml-4 px-20 py-4 rounded-sm text-md font-bold text-gray700">
              Post
              <svg
                fill="#4F4F4F"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24.991px"
                height="24.99px"
                viewBox="0 0 31.991 31.99"
                className="ml-4"
              >
                <g>
                  <g id="Mail_x5F_2">
                    <g>
                      <path
                        d="M31.984,1.005c0-0.037,0-0.072-0.004-0.107s-0.003-0.07-0.012-0.104c-0.005-0.021-0.016-0.038-0.02-0.057
				                  c-0.012-0.037-0.023-0.073-0.038-0.108c-0.009-0.021-0.012-0.043-0.021-0.064c-0.019-0.03-0.037-0.058-0.059-0.088
				                  c-0.018-0.029-0.037-0.057-0.058-0.083c-0.03-0.038-0.062-0.076-0.096-0.11c-0.009-0.008-0.013-0.018-0.02-0.025
				                  c-0.016-0.014-0.035-0.017-0.051-0.029c-0.019-0.015-0.034-0.028-0.052-0.041c-0.015-0.01-0.021-0.023-0.033-0.032
				                  c-0.004-0.003-0.009-0.003-0.015-0.005c-0.007-0.005-0.011-0.011-0.018-0.014c-0.038-0.023-0.081-0.032-0.121-0.049
				                  c-0.032-0.014-0.062-0.028-0.096-0.038c-0.03-0.011-0.062-0.019-0.091-0.024c-0.036-0.008-0.07-0.008-0.107-0.012
				                  C31.039,0.009,30.995,0,30.95,0c-0.013,0.002-0.024,0.007-0.036,0.008c-0.021,0.001-0.047,0.009-0.072,0.013
				                  c-0.037,0.006-0.069,0.01-0.105,0.02c-0.041,0.012-0.08,0.024-0.119,0.042c-0.031,0.013-0.062,0.028-0.091,0.046
				                  c-0.026,0.014-0.057,0.023-0.081,0.04c-0.007,0.005-0.017,0.007-0.021,0.011h-0.001L0.429,21.172
				                  c-0.357,0.25-0.512,0.704-0.381,1.12c0.131,0.415,0.519,0.698,0.953,0.698h10v8c0,0.037,0.019,0.068,0.021,0.104
				                  c0.008,0.069,0.02,0.135,0.04,0.2c0.021,0.062,0.046,0.116,0.074,0.172c0.031,0.056,0.064,0.104,0.105,0.154
				                  c0.044,0.054,0.093,0.099,0.147,0.141c0.027,0.023,0.045,0.056,0.074,0.074c0.031,0.021,0.065,0.026,0.098,0.043
				                  c0.031,0.017,0.062,0.029,0.095,0.043c0.113,0.041,0.227,0.069,0.344,0.069h0.003c0.119-0.002,0.234-0.028,0.347-0.07
				                  c0.022-0.009,0.047-0.018,0.069-0.027c0.103-0.045,0.195-0.104,0.277-0.187c0.014-0.015,0.022-0.029,0.036-0.043
				                  c0.04-0.045,0.081-0.086,0.113-0.14l3.614-5.709c0.022,0.017,0.038,0.039,0.062,0.053l11,6.001
				                  c0.295,0.157,0.647,0.164,0.945,0.006c0.298-0.156,0.494-0.451,0.527-0.785l2.99-29.99C31.992,1.066,31.984,1.037,31.984,1.005z
				                   M11.56,20.99H4.175L24.306,6.899L11.56,20.99z M13.001,27.543v-5.166l10.902-12.051L13.001,27.543z M27.157,29.391l-9.632-5.252
				                  L29.58,5.102L27.157,29.391z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-4 items-center mt-4">
          <div className="bg-white p-4 flex items-center md:col-span-4">
            <div className="relative w-15 h-15 mx-5">
              <Image
                src={"/assets/JohnDoe.png"}
                alt="Avatar Public"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-black font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci odit delectus quas sed id officiis ipsa? Blanditiis eum
                expedita qui ipsum aperiam, exercitationem impedit eaque
                asperiores quo, natus aut ad?
              </p>
            <button className="flex flex-col pl-4 mb-8 ml-4 rounded-sm text-md font-bold text-gray700">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 8.25C8.44891 8.25 8.63968 8.32902 8.78033 8.46967C8.92098 8.61032 9 8.80109 9 9V18C9 18.1989 8.92098 18.3897 8.78033 18.5303C8.63968 18.671 8.44891 18.75 8.25 18.75C8.05109 18.75 7.86032 18.671 7.71967 18.5303C7.57902 18.3897 7.5 18.1989 7.5 18V9C7.5 8.80109 7.57902 8.61032 7.71967 8.46967C7.86032 8.32902 8.05109 8.25 8.25 8.25ZM12 8.25C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V9C11.25 8.80109 11.329 8.61032 11.4697 8.46967C11.6103 8.32902 11.8011 8.25 12 8.25ZM16.5 9C16.5 8.80109 16.421 8.61032 16.2803 8.46967C16.1397 8.32902 15.9489 8.25 15.75 8.25C15.5511 8.25 15.3603 8.32902 15.2197 8.46967C15.079 8.61032 15 8.80109 15 9V18C15 18.1989 15.079 18.3897 15.2197 18.5303C15.3603 18.671 15.5511 18.75 15.75 18.75C15.9489 18.75 16.1397 18.671 16.2803 18.5303C16.421 18.3897 16.5 18.1989 16.5 18V9Z"
                  fill="#4F4F4F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.75 4.5C21.75 4.89782 21.592 5.27936 21.3107 5.56066C21.0294 5.84196 20.6478 6 20.25 6H19.5V19.5C19.5 20.2956 19.1839 21.0587 18.6213 21.6213C18.0587 22.1839 17.2956 22.5 16.5 22.5H7.5C6.70435 22.5 5.94129 22.1839 5.37868 21.6213C4.81607 21.0587 4.5 20.2956 4.5 19.5V6H3.75C3.35218 6 2.97064 5.84196 2.68934 5.56066C2.40804 5.27936 2.25 4.89782 2.25 4.5V3C2.25 2.60218 2.40804 2.22064 2.68934 1.93934C2.97064 1.65804 3.35218 1.5 3.75 1.5H9C9 1.10218 9.15804 0.720644 9.43934 0.43934C9.72064 0.158035 10.1022 0 10.5 0L13.5 0C13.8978 0 14.2794 0.158035 14.5607 0.43934C14.842 0.720644 15 1.10218 15 1.5H20.25C20.6478 1.5 21.0294 1.65804 21.3107 1.93934C21.592 2.22064 21.75 2.60218 21.75 3V4.5ZM6.177 6L6 6.0885V19.5C6 19.8978 6.15804 20.2794 6.43934 20.5607C6.72064 20.842 7.10218 21 7.5 21H16.5C16.8978 21 17.2794 20.842 17.5607 20.5607C17.842 20.2794 18 19.8978 18 19.5V6.0885L17.823 6H6.177ZM3.75 4.5V3H20.25V4.5H3.75Z"
                  fill="#4F4F4F"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassifieds;
