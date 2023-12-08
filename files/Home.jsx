import React, { Suspense, lazy } from "react";
const DefiForge = lazy(() => import("@/components/DefiForge"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <DefiForge />
      </Suspense>
    </>
  );
};

export default Home;
