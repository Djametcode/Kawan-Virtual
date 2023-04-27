import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";

export default function ProfileComponent() {
  // const id = localStorage.getItem("id");
  // const token = localStorage.getItem("token");

  // const config = {
  //   headers: {
  //     authorization: `Bearer ${token}`,
  //   },
  // };
  // const getUserDetail = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3000/api/v8/kawan-virtual/get-user/${id}`,
  //       config
  //     );
  //     const user = await response.data;
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserDetail();
  // }, []);
  return (
    <div className=" font-quick">
      <div className=" flex">
        <svg
          className=" w-11 h-11"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
          />
        </svg>
        <div className=" flex flex-col justify-center">
          <p>Djamet Coder</p>
        </div>
      </div>
      <div>
        <Link href="/">Pengaturan</Link>
      </div>
      <div>
        <p>Profil Saya</p>
      </div>
    </div>
  );
}
