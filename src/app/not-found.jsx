"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [router]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>404 Not Found</h1>
      <p>You&apos;re being redirected to the main page...</p>

      <div className="mt-5">
        <div className="w-10 h-10 border-4 border-gray-900 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default NotFound;
