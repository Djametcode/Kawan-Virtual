import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const data = {
    email: email,
    password: Password,
  };
  const router = useRouter();

  const redirectLanding = () => {
    router.push("/landing");
  };

  const loginData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v8/kawan-virtual/login",
        data
      );
      const datas = response.data;
      const { msg, token } = datas;
      await localStorage.setItem("token", token);
      await redirectLanding();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-cyan-500 font-comic h-screen flex flex-col gap-2 justify-center">
      <div className=" text-white absolute top-7">
        <h1 className=" w-screen text-center font-quick font-extrabold text-4xl">
          Kawan Online
          <p className=" text-sm underline underline-offset-4">
            Cari temen virtual
          </p>
        </h1>
      </div>
      {/* <div className=" ml-11 -translate-y-2 text-white">
        <Link className=" bg-slate-600 p-2 rounded-xl" href="/">
          {`<- Kembali ke Login`}
        </Link>
      </div> */}
      <div className=" flex flex-col justify-center p-5 rounded-3xl gap-1 bg-slate-200 ml-11 mr-11">
        <input
          className=" focus:outline-none rounded-xl p-2"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=" focus:outline-none rounded-xl p-2"
          type="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className=" flex justify-center">
        <button
          onClick={loginData}
          className=" bg-cyan-700 text-white p-2 rounded-xl"
        >
          Login
        </button>
      </div>
      <div className=" fixed flex bottom-0 p-4 w-screen bg-slate-950 text-white">
        <p>&copy; Copyright 2023</p>
        <div className=" flex flex-col justify-center">
          <hr className=" h-1 w-4 rotate-90 text-white" />
        </div>
        <p>Djamet Coder</p>
      </div>
    </div>
  );
}
