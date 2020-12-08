import React from "react";
import Link from "next/link";

const Success = () => {
  return (
    <>
      <h1>Congrats, message submitted!</h1>
      <Link href={"/"}>
        <a href="/">Go home</a>
      </Link>
    </>
  );
};

export default Success;
