import Header from "@/components/Header";
import Navigation from "@/components/navigation";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Landing() {
  const route = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      route.push("/");
    }
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className=" fixed bottom-0 w-screen">
        <Navigation />
      </div>
    </div>
  );
}
