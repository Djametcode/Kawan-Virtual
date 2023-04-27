import Header from "@/components/Header";
import ProfileComponent from "@/components/ProfileComponent";
import Navigation from "@/components/navigation";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

export default function Profile({ item }) {
  const route = useRouter();
  const handleLogOut = () => {
    localStorage.clear();
    route.push("/login");
  };

  const getUserDetail = async ({ token, id }) => {
    console.log(id);
    try {
      const response = await axios.get(
        `https://localhost:3000/api/v8/kawan-virtual/get-user/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const item = await response.data;
      console.log(item);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    getUserDetail({ token, id });
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ProfileComponent />
      </div>
      <div>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
      <div className=" fixed bottom-0 w-screen">
        <Navigation />
      </div>
    </div>
  );
}
