import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] relative">
      {/* Background tendrils */}
      <div className="absolute w-96 h-96 bg-fuchsia-900/10 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" />

      {/* Spinner with eerie vibe */}
      <div className="z-10 animate-spin rounded-full h-14 w-14 border-4 border-t-primary border-gray-800 shadow-[0_0_30px_#F84565]"></div>
    </div>
  );
};

export default Loading;
