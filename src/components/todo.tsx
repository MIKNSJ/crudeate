import React, {useState} from "react";
import Navbar from "./navbar.tsx"
import Footer from "./footer.tsx"

function ToDo() {
    return (
        <div>
            <Navbar />
            <h1 className="container mx-auto max-w-screen-xl text-center mt-56 text-3xl font-bold uppercase text-green-500">Routing Success!</h1>
            <Footer />
        </div>
    )
}

export default ToDo
