import Header from "@/components/Header";
import CreateProfile from "@/components/createprofile";

export default function MakeProfile() {
  return (
    <div className=" bg-cyan-500 h-screen flex flex-col gap-5 justify-start">
      <div className=" font-quick flex justify-center text-2xl p-3 underline underline-offset-4 text-white">
        <h2 className=" ">Make your profile</h2>
      </div>
      <div>
        <CreateProfile />
      </div>
    </div>
  );
}
