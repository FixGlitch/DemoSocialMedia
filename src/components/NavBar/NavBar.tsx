"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownUser from "./NavBarComponents/UserDropDown";
import Image from "next/image";

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent border-b-2 border-white z-50">
      <button className="absolute top-0 left-0 hover:bg-white hover:bg-opacity-50 py-5 px-4 hidden md:block">
        <svg
          width="45"
          height="32"
          viewBox="0 0 45 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.03125 24C7.03125 23.7348 7.17941 23.4804 7.44313 23.2929C7.70685 23.1054 8.06454 23 8.4375 23H36.5625C36.9355 23 37.2931 23.1054 37.5569 23.2929C37.8206 23.4804 37.9688 23.7348 37.9688 24C37.9688 24.2652 37.8206 24.5196 37.5569 24.7071C37.2931 24.8946 36.9355 25 36.5625 25H8.4375C8.06454 25 7.70685 24.8946 7.44313 24.7071C7.17941 24.5196 7.03125 24.2652 7.03125 24ZM7.03125 16C7.03125 15.7348 7.17941 15.4804 7.44313 15.2929C7.70685 15.1054 8.06454 15 8.4375 15H36.5625C36.9355 15 37.2931 15.1054 37.5569 15.2929C37.8206 15.4804 37.9688 15.7348 37.9688 16C37.9688 16.2652 37.8206 16.5196 37.5569 16.7071C37.2931 16.8946 36.9355 17 36.5625 17H8.4375C8.06454 17 7.70685 16.8946 7.44313 16.7071C7.17941 16.5196 7.03125 16.2652 7.03125 16ZM7.03125 8C7.03125 7.73478 7.17941 7.48043 7.44313 7.29289C7.70685 7.10536 8.06454 7 8.4375 7H36.5625C36.9355 7 37.2931 7.10536 37.5569 7.29289C37.8206 7.48043 37.9688 7.73478 37.9688 8C37.9688 8.26522 37.8206 8.51957 37.5569 8.70711C37.2931 8.89464 36.9355 9 36.5625 9H8.4375C8.06454 9 7.70685 8.89464 7.44313 8.70711C7.17941 8.51957 7.03125 8.26522 7.03125 8V8Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="container ml-5 px-4 md:px-6 2xl:px-11">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-start">
            <Image
              width={200}
              height={112}
              src={"/assets/Logo.png"}
              alt="Logo"
              className={`relative flex items-center px-6 font-medium text-white duration-300 ease-in-out ${
                pathname === "/" && "text-white"
              }`}
            />
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            className="block md:hidden text-white p-4 md:mr-20 "
            aria-label="Toggle navigation"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 24C5 23.7348 5.10536 23.4804 5.29289 23.2929C5.48043 23.1054 5.73478 23 6 23H26C26.2652 23 26.5196 23.1054 26.7071 23.2929C26.8946 23.4804 27 23.7348 27 24C27 24.2652 26.8946 24.5196 26.7071 24.7071C26.5196 24.8946 26.2652 25 26 25H6C5.73478 25 5.48043 24.8946 5.29289 24.7071C5.10536 24.5196 5 24.2652 5 24ZM5 16C5 15.7348 5.10536 15.4804 5.29289 15.2929C5.48043 15.1054 5.73478 15 6 15H26C26.2652 15 26.5196 15.1054 26.7071 15.2929C26.8946 15.4804 27 15.7348 27 16C27 16.2652 26.8946 16.5196 26.7071 16.7071C26.5196 16.8946 26.2652 17 26 17H6C5.73478 17 5.48043 16.8946 5.29289 16.7071C5.10536 16.5196 5 16.2652 5 16ZM5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7H26C26.2652 7 26.5196 7.10536 26.7071 7.29289C26.8946 7.48043 27 7.73478 27 8C27 8.26522 26.8946 8.51957 26.7071 8.70711C26.5196 8.89464 26.2652 9 26 9H6C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8Z"
                fill="white"
              />
            </svg>
          </button>

          <nav className="hidden md:flex items-center space-x-3">
            <Link
              href="/invite"
              className={`font-medium text-white hover:bg-white hover:bg-opacity-50 py-6 px-4 ${
                pathname === "/invite" && "text-white"
              }`}
            >
              Invite
            </Link>
            <Link
              href="/classifieds"
              className={`font-medium text-white hover:bg-white hover:bg-opacity-50 py-6 px-4 ${
                pathname === "/classifieds" && "text-white"
              }`}
            >
              Classifieds
            </Link>
            <Link
              href="/hausing"
              className={`font-medium text-white hover:bg-white hover:bg-opacity-50 py-6 px-4 ${
                pathname === "/hausing" && "text-white"
              }`}
            >
              Hausing
            </Link>
            <button className="hover:bg-white hover:bg-opacity-50 py-2 px-2">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4"
              >
                <g clip-path="url(#clip0_47_4313)">
                  <path
                    d="M17.6134 33.5152C19.0658 31.5332 19.7163 29.0759 19.4348 26.6349C19.1533 24.1939 17.9605 21.9492 16.095 20.3499C14.2295 18.7506 11.829 17.9146 9.37362 18.0092C6.91825 18.1038 4.58915 19.122 2.85227 20.8601C1.1154 22.5983 0.098846 24.9281 0.00599324 27.3835C-0.0868595 29.839 0.750834 32.2389 2.35148 34.1032C3.95213 35.9676 6.19769 37.1588 8.6389 37.4386C11.0801 37.7183 13.5369 37.066 15.5179 35.6122H15.5164C15.5614 35.6722 15.6094 35.7292 15.6634 35.7847L21.4384 41.5597C21.7196 41.8411 22.1012 41.9993 22.4991 41.9995C22.897 41.9996 23.2787 41.8417 23.5601 41.5604C23.8416 41.2792 23.9998 40.8976 23.9999 40.4997C24.0001 40.1018 23.8421 39.7201 23.5609 39.4387L17.7859 33.6637C17.7322 33.6094 17.6746 33.5592 17.6134 33.5137V33.5152ZM18.0004 27.7492C18.0004 28.8326 17.787 29.9054 17.3724 30.9063C16.9578 31.9072 16.3501 32.8167 15.584 33.5828C14.8179 34.3489 13.9084 34.9566 12.9075 35.3712C11.9066 35.7858 10.8338 35.9992 9.75037 35.9992C8.66696 35.9992 7.59417 35.7858 6.59323 35.3712C5.5923 34.9566 4.68282 34.3489 3.91674 33.5828C3.15066 32.8167 2.54297 31.9072 2.12836 30.9063C1.71376 29.9054 1.50037 28.8326 1.50037 27.7492C1.50037 25.5611 2.36956 23.4627 3.91674 21.9155C5.46391 20.3684 7.56233 19.4992 9.75037 19.4992C11.9384 19.4992 14.0368 20.3684 15.584 21.9155C17.1312 23.4627 18.0004 25.5611 18.0004 27.7492Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_47_4313">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 18)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="hover:bg-white hover:bg-opacity-50 py-2 px-2">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4"
              >
                <g clip-path="url(#clip0_47_4300)">
                  <path
                    d="M3 19.5C2.60218 19.5 2.22064 19.658 1.93934 19.9393C1.65804 20.2206 1.5 20.6022 1.5 21V33C1.5 33.3978 1.65804 33.7794 1.93934 34.0607C2.22064 34.342 2.60218 34.5 3 34.5H17.379C18.1746 34.5002 18.9375 34.8164 19.5 35.379L22.5 38.379V21C22.5 20.6022 22.342 20.2206 22.0607 19.9393C21.7794 19.658 21.3978 19.5 21 19.5H3ZM21 18C21.7956 18 22.5587 18.3161 23.1213 18.8787C23.6839 19.4413 24 20.2044 24 21V40.1895C24 40.3379 23.9559 40.483 23.8734 40.6063C23.7909 40.7297 23.6736 40.8258 23.5365 40.8825C23.3994 40.9392 23.2485 40.9539 23.1029 40.9248C22.9574 40.8957 22.8238 40.8241 22.719 40.719L18.4395 36.4395C18.1583 36.1582 17.7768 36.0001 17.379 36H3C2.20435 36 1.44129 35.6839 0.87868 35.1213C0.316071 34.5587 0 33.7957 0 33V21C0 20.2044 0.316071 19.4413 0.87868 18.8787C1.44129 18.3161 2.20435 18 3 18H21Z"
                    fill="white"
                  />
                  <path
                    d="M7.5 27C7.5 27.3978 7.34196 27.7794 7.06066 28.0607C6.77936 28.342 6.39782 28.5 6 28.5C5.60218 28.5 5.22064 28.342 4.93934 28.0607C4.65804 27.7794 4.5 27.3978 4.5 27C4.5 26.6022 4.65804 26.2206 4.93934 25.9393C5.22064 25.658 5.60218 25.5 6 25.5C6.39782 25.5 6.77936 25.658 7.06066 25.9393C7.34196 26.2206 7.5 26.6022 7.5 27V27ZM13.5 27C13.5 27.3978 13.342 27.7794 13.0607 28.0607C12.7794 28.342 12.3978 28.5 12 28.5C11.6022 28.5 11.2206 28.342 10.9393 28.0607C10.658 27.7794 10.5 27.3978 10.5 27C10.5 26.6022 10.658 26.2206 10.9393 25.9393C11.2206 25.658 11.6022 25.5 12 25.5C12.3978 25.5 12.7794 25.658 13.0607 25.9393C13.342 26.2206 13.5 26.6022 13.5 27ZM19.5 27C19.5 27.3978 19.342 27.7794 19.0607 28.0607C18.7794 28.342 18.3978 28.5 18 28.5C17.6022 28.5 17.2206 28.342 16.9393 28.0607C16.658 27.7794 16.5 27.3978 16.5 27C16.5 26.6022 16.658 26.2206 16.9393 25.9393C17.2206 25.658 17.6022 25.5 18 25.5C18.3978 25.5 18.7794 25.658 19.0607 25.9393C19.342 26.2206 19.5 26.6022 19.5 27Z"
                    fill="white"
                  />
                  <ellipse cx="33" cy="7.5" rx="9" ry="7.5" fill="#FB6F18" />
                  <path
                    d="M30.3097 3.72727V11H29.429V4.65057H29.3864L27.6108 5.82955V4.93466L29.429 3.72727H30.3097ZM32.6013 11V10.3608L35.0018 7.73295C35.2836 7.42519 35.5156 7.15767 35.6979 6.9304C35.8802 6.70076 36.0151 6.48532 36.1027 6.28409C36.1927 6.08049 36.2376 5.86742 36.2376 5.64489C36.2376 5.3892 36.1761 5.16785 36.053 4.98082C35.9322 4.7938 35.7665 4.64938 35.5558 4.54759C35.3451 4.44579 35.1084 4.39489 34.8456 4.39489C34.5662 4.39489 34.3224 4.45289 34.1141 4.56889C33.9081 4.68253 33.7483 4.84233 33.6347 5.0483C33.5234 5.25426 33.4678 5.49574 33.4678 5.77273H32.6297C32.6297 5.34659 32.7279 4.97254 32.9244 4.65057C33.1209 4.3286 33.3884 4.07765 33.727 3.89773C34.0679 3.7178 34.4502 3.62784 34.874 3.62784C35.3001 3.62784 35.6777 3.7178 36.0068 3.89773C36.3359 4.07765 36.5939 4.32031 36.781 4.62571C36.968 4.93111 37.0615 5.27083 37.0615 5.64489C37.0615 5.91241 37.013 6.17401 36.9159 6.42969C36.8212 6.683 36.6555 6.96591 36.4187 7.27841C36.1844 7.58854 35.8589 7.96733 35.4422 8.41477L33.8087 10.1619V10.2188H37.1893V11H32.6013Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_47_4300">
                    <rect width="42" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="hover:bg-white hover:bg-opacity-50 py-2 px-2">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4"
              >
                <g clip-path="url(#clip0_47_4301)">
                  <ellipse cx="33" cy="7.5" rx="9" ry="7.5" fill="#FB6F18" />
                  <path
                    d="M34.3097 3.72727V11H33.429V4.65057H33.3864L31.6108 5.82955V4.93466L33.429 3.72727H34.3097Z"
                    fill="white"
                  />
                  <path
                    d="M13 30.1875C14.2929 30.1875 16.0858 28.4494 17 27.5C17.9142 26.5506 17.875 24.7802 17.875 23.4375C17.875 22.0948 17.3614 20.8072 16.4471 19.8578C15.5329 18.9084 14.2929 18.375 13 18.375C11.7071 18.375 10.4671 18.9084 9.55285 19.8578C8.63861 20.8072 8.125 22.0948 8.125 23.4375C8.125 24.7802 8.43671 26.7438 9.35095 27.6932C10.2652 28.6426 11.7071 30.1875 13 30.1875ZM16.25 23.4375C16.25 24.3326 16.4604 25.6738 15.851 26.3068C15.2415 26.9397 13.862 28.5 13 28.5C12.138 28.5 11.1095 27.1329 10.5 26.5C9.89051 25.8671 9.75 24.3326 9.75 23.4375C9.75 22.5424 10.0924 21.6839 10.7019 21.051C11.3114 20.4181 12.138 20.0625 13 20.0625C13.862 20.0625 14.6886 20.4181 15.2981 21.051C15.9076 21.6839 16.25 22.5424 16.25 23.4375ZM22.75 36.9375C22.75 38.625 21.125 38.625 21.125 38.625H4.875C4.875 38.625 3.25 38.625 3.25 36.9375C3.25 35.25 4.875 30.1875 13 30.1875C21.125 30.1875 22.75 35.25 22.75 36.9375ZM21.125 36.9307C21.1234 36.5156 20.8748 35.2669 19.773 34.1227C18.7135 33.0225 16.7196 31.875 13 31.875C9.27875 31.875 7.2865 33.0225 6.227 34.1227C5.12525 35.2669 4.87825 36.5156 4.875 36.9307H21.125Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_47_4301">
                    <rect width="42" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <DropdownUser />
          </nav>
        </div>
        <nav
          className={`fixed top-0 right-0 h-full bg-gray shadow-md transform ${
            menuOpen ? "translate-x-0" : "translate-x-[60vw]"
          } transition-transform duration-300 ease-in-out md:hidden w-[60vw]`}
        >
          <div className="flex flex-col items-start justify-center py-4 space-y-2 px-4">
            <button
              type="button"
              onClick={toggleMenu}
              className="self-start px-4 py-2 text-white"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 6L18 18M6 18L18 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="px-4 py-2">
              <DropdownUser />
            </div>
            <Link
              href="/invite"
              className={`block w-full px-4 py-2 text-white ${
                pathname === "/invite" && "text-white"
              }`}
            >
              Invite
            </Link>
            <Link
              href="/classifieds"
              className={`block w-full px-4 py-2 text-white ${
                pathname === "/classifieds" && "text-white"
              }`}
            >
              Classifieds
            </Link>
            <Link
              href="/hausing"
              className={`block w-full px-4 py-2 text-white ${
                pathname === "/hausing" && "text-white"
              }`}
            >
              Hausing
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
