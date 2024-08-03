"use client";
import Loader from "@/components/common/Loader/Loader";
import Landing from "@/components/Landing/Landing";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    <Loader />;
  }

  const renderContent = (): React.ReactNode => {
    return (
      <div className="w-full overflow-x-auto no-scrollbar">
        <Landing />
      </div>
    );
  };

  return (
    <>
      <div className="bg-white">{renderContent()}</div>
    </>
  );
};

export default Home;
