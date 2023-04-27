import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CreateProfile() {
  const route = useRouter();

  const [namaDepan, setNamaDepan] = useState();
  const [namaBelakang, setNamaBelakang] = useState();
  const [kota, setKota] = useState();
  const [gender, setGender] = useState();
  const [usia, setUsia] = useState();
  const [config, setConfig] = useState();
  console.log(config);

  const data = {
    NamaDepan: namaDepan,
    NamaBelakang: namaBelakang,
    kotaAsal: kota,
    jenisKelamin: gender,
    usia: usia,
  };
  console.log(data);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    setConfig(config);
  }, []);

  const createProfile = async () => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v8/kawan-virtual/buat-profil",
        data,
        config
      );

      const user = await response.data;
      console.log(user);
      route.push("/landing");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={createProfile}
      className=" font-quick bg-slate-200 p-6 rounded-xl flex flex-col gap-2 justify-center ml-11 mr-11"
    >
      <input
        className=" p-2 rounded-lg focus:outline-none"
        type="text"
        placeholder="Nama depan"
        onChange={(e) => setNamaDepan(e.target.value)}
      />
      <input
        className=" p-2 rounded-lg focus:outline-none"
        type="text"
        placeholder="Nama belakang"
        onChange={(e) => setNamaBelakang(e.target.value)}
      />
      <input
        className=" p-2 rounded-lg focus:outline-none"
        type="text"
        placeholder="kota asal"
        onChange={(e) => setKota(e.target.value)}
      />
      <div className=" flex gap-2">
        <select
          onChange={(e) => setGender(e.target.value)}
          className=" rounded-xl p-1"
          name="gender"
          id="gender"
        >
          <option value="male">Laki - Laki</option>
          <option value="female">Perempuan</option>
        </select>
      </div>
      <input
        className=" p-2 rounded-lg focus:outline-none"
        type="number"
        placeholder="Usia"
        onChange={(e) => setUsia(e.target.value)}
      />
      <div className=" flex justify-center">
        <input
          className=" p-1 rounded-xl bg-slate-50"
          type="submit"
          value="Buat Profil"
        />
      </div>
    </form>
  );
}
