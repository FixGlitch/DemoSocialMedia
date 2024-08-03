"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/actions/userActions";
import { AppDispatch } from "@/store/store";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<HTMLAnchorElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        dropdownOpen &&
        dropdown.current &&
        !dropdown.current.contains(event.target as Node) &&
        trigger.current &&
        !trigger.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    const keyHandler = (event: KeyboardEvent) => {
      if (dropdownOpen && event.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", clickHandler);
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [dropdownOpen]);

  const handleLogout = async () => {
    try {
      const resultAction = await dispatch(logoutUser() as any);
      if (logoutUser.fulfilled.match(resultAction)) {
        window.location.reload();
      } else {
        console.error("Logout failed:", resultAction.payload);
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <div className="flex items-center h-12 w-12 rounded-full">
          <div className="flex flex-row text-left mr-2 mt-4">
            <span className="block text-md font-medium text-white">Hello,&nbsp;</span>
            <span className="block text-md font-medium text-white">
              Barbara
            </span>
            <span className="block text-md font-medium text-white">
              <svg
                width="20"
                height="38"
                viewBox="0 0 20 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.94073 16.0479C2.01499 15.7677 2.14486 15.5548 2.30186 15.4558C2.45885 15.3568 2.63016 15.3798 2.77823 15.5197L9.99948 22.3573L17.2195 15.5173C17.2929 15.4462 17.3731 15.4034 17.4553 15.3913C17.5376 15.3791 17.6202 15.398 17.6986 15.4467C17.777 15.4954 17.8495 15.573 17.912 15.6751C17.9744 15.7772 18.0256 15.9016 18.0626 16.0414C18.0995 16.1811 18.1215 16.3333 18.1273 16.4892C18.133 16.6451 18.1225 16.8016 18.0961 16.9497C18.0698 17.0978 18.0283 17.2346 17.9739 17.3522C17.9196 17.4698 17.8535 17.5658 17.7795 17.6347L10.2795 24.74C10.1926 24.8225 10.0967 24.8654 9.99948 24.8654C9.90226 24.8654 9.80639 24.8225 9.71948 24.74L2.21948 17.6347C2.07162 17.494 1.95924 17.2479 1.90699 16.9505C1.85473 16.653 1.86686 16.3284 1.94073 16.0479V16.0479Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <Image
            width={112}
            height={112}
            src={"/assets/AvatarDefault.png"}
            alt="User"
            className="rounded-full"
          />
        </div>
      </Link>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute max-xsm:right-0 sm:right-0 left-0 mt-4 flex w-55 flex-col rounded-sm bg-black border border-stroke md:bg-transparent shadow-default ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                  fill=""
                />
                <path
                  d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                  fill=""
                />
              </svg>
              My Profile
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
              fill=""
            />
            <path
              d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
              fill=""
            />
          </svg>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DropdownUser;
