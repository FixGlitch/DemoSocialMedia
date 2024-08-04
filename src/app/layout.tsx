"use client";

import "./globals.css";

import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Provider from "@/store/Provider";
import SignIn from "@/components/SignIn/SignIn";
import Loader from "@/components/common/Loader/Loader";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import SignUp from "@/components/SignUp/SignUp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname(); // Obtener la ruta actual

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    router.push("/");
  };

  const renderContent = (): React.ReactNode => {
    if (loading) {
      return <Loader />;
    } else {
      if (pathname === "/signup") {
        return <SignUp />;
      }
      if (isLoggedIn) {
        return (
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <NavBar />
              {children}
            </div>
          </div>
        );
      } else {
        return <SignIn onSuccess={handleLoginSuccess} />;
      }
    }
  };

  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Provider>{renderContent()}</Provider>
      </body>
    </html>
  );
}
