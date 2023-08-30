"use client"
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { NameContext } from "./context/nameContext";

export default function Home() {

  const {name, setName} = useContext(NameContext);
  const [str, setStr] = useState("");
  const router = useRouter();

  const gotoNext = () => {
    router.push("/next");

  }

  const handleStrChange = (e: any) => {
    setStr(e.target.value);
  }

  const handleSubmit = () => {
    setName(str);
  }


  return (
    <main >
      <div className='flex flex-col items-center gap-5 mt-5'>
        <h1 className='text-4xl'>Welcome Home</h1>  

        <button className='border-2 border-white rounded-full hover:bg-white hover:text-black' onClick={gotoNext}>
          <span className='p-5'>Go to Next Page</span>
        </button>


        <div className="flex flex-row gap-5">
          <input className="border-2 bg-black text-white rounded-full p-1" type="text" value={str} onChange={handleStrChange}/>
          <button className='border-2 border-white rounded-full hover:bg-white hover:text-black' onClick={handleSubmit}>
            <span className='p-5'>Submit</span>
          </button>
        </div>   

      </div>
    </main>
  )
}
