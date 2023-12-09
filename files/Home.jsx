import React, { Suspense, lazy } from "react";
const DefiForge = lazy(() => import("@/components/DefiForge"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <DefiForge />
        <div className="w-screen h-screen "></div>
        <div className="w-screen h-screen "></div>
      </Suspense>
    </>
  );
};

export default Home;
