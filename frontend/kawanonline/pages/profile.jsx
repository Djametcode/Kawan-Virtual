import Header from "@/components/Header";
import Navigation from "@/components/navigation";

export default function Profile() {
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
