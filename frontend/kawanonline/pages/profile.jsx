import Header from "@/components/Header";
import ProfileComponent from "@/components/ProfileComponent";
import Navigation from "@/components/navigation";
import { useRouter } from "next/router";

export default function Profile() {
  const route = useRouter();
  const handleLogOut = () => {
    localStorage.clear();
    route.push("/login");
  };
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
