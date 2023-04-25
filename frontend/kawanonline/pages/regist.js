export default function Regist() {
  return (
    <div className=" bg-cyan-500 h-screen flex flex-col gap-2 justify-center">
      <div className=" text-white absolute top-7">
        <h1 className=" w-screen text-center font-quick font-extrabold text-4xl">
          Kawan Online
          <p className=" text-sm underline underline-offset-4">
            Cari temen virtual
          </p>
        </h1>
      </div>
      <div className=" flex flex-col justify-center p-5 rounded-xl gap-1 bg-slate-200 ml-11 mr-11">
        <input
          className=" focus:outline-none rounded-xl p-2"
          type="text"
          placeholder="Username"
        />
        <input
          className=" focus:outline-none rounded-xl p-2"
          type="text"
          placeholder="Email"
        />
        <input
          className=" focus:outline-none rounded-xl p-2"
          type="Password"
          placeholder="Password"
        />
      </div>
      <div className=" flex justify-center">
        <button className=" bg-slate-200 text-black p-2 rounded-xl">
          Registrasi
        </button>
      </div>
    </div>
  );
}
