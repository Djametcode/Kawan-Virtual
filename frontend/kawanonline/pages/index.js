import Login from "@/components/login";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-cyan-500 h-screen w-screen flex flex-col justify-end">
      <div className=" flex justify-center p-3">
        <h1 className=" w-screen text-center font-quick font-extrabold text-black text-4xl -translate-y-96">
          Kawan Online
          <p className=" text-sm underline underline-offset-4">
            Cari temen virtual
          </p>
        </h1>
      </div>
      <div className=" font-comic flex flex-col gap-2 -translate-y-28">
        <div className=" flex justify-center">
          <Link
            className=" w-44 text-center text-white border border-white p-2 rounded-lg"
            href="/login"
          >
            Login dengan Email
          </Link>
        </div>
        <div className=" flex justify-center">
          <Link
            className=" w-44 border text-center text-white border-white p-2 rounded-lg"
            href="/regist"
          >
            Registrasi Akun
          </Link>
        </div>
      </div>
    </div>
  );
}
