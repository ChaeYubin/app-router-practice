"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>에러가 발생하였습니다.</h2>
      <button onClick={() => reset()}>재시도</button>
    </div>
  );
};

export default Error;
