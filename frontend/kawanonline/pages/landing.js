import Header from "@/components/Header";
import Navigation from "@/components/navigation";
import axios from "axios";

export default function Landing() {
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
