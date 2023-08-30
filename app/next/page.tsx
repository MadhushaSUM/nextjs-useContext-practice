"use client"
import { useRouter } from "next/navigation";

const Next = () => {

    const router = useRouter();

    const gotoHome = () => {
        router.push("/");
    }

    return (
        <main >
          <div className='flex flex-col items-center gap-5 mt-5'>
            <h1 className='text-4xl'>Next Page</h1> 

            <button className='border-2 border-white rounded-full hover:bg-white hover:text-black' onClick={gotoHome}>
                <span className='p-5'>Go to Next Page</span>
            </button>
    
          </div>
        </main>
      )
}

export default Next