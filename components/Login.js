import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <Image
        src="https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-New-Logo-300x113.png"
        height={200}
        width={400}
      />
      <a onClick={signIn} className="px-20 py-4 z-10 text-2xl cursor-pointer mt-16 bg-blue-500 rounded-md text-whote">
        Login
      </a>
    </div>
  );
};

export default Login;



