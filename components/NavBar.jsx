"use client";

import { NameContext } from "@/app/context/nameContext"
import { useContext } from "react"

const NavBar = () => {

    const {name, setName} = useContext(NameContext);

    
    return (
        <nav className="border-b-2 border-white h-10">
            <div className="flex flex-row justify-end w-full">
                <div className="flex g-5 pr-5 pt-2">
                    <h1>Name: </h1>
                    <h1>{name}</h1>
                </div>

            </div>
        </nav>
    )
}

export default NavBar