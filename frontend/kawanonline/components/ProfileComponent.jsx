import Link from "next/link";

export default function ProfileComponent() {
  return (
    <div>
      <div className=" flex">
        <div className=" w-20 h-20 bg-avatar bg-cover"></div>
        <p>Djamet Coder</p>
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
