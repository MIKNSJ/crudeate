import React, {useState, useEffect} from "react";
import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";



function ToDo() {
    const test_data = [
        {id: 1, note: "I need to go shopping for groceries."},
        {id: 2, note: "I need to meet my friend"},
        {id: 3, note: "I have a test tomorrow."}
    ];
    const [data, setData] = useState(["I need to be more productive."]);
    const [note, setNote] = useState("");

    function handleInputChange(event: any) {
        event.preventDefault();
        setNote(event.target.value);
        console.log(event.target.value);
    }

    function appendNote() {
        if (note.trim() != "") {
            setData(old_data => [...old_data, note]);
        }
    }

    function deleteNote(index: any) {
        setData(data.filter((curr_note, i) => i != index));
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto max-w-screen-xl py-4 px-8">
                <div className="flex mt-12">
                    <div onChange={handleInputChange} className="flex justify-between items-center w-[100%] gap-4">
                        <input type="text" placeholder="Enter a note here..." autoComplete="off" className="grow border-2 rounded border-green-500 outline-none p-1" required></input>
                        <input type="submit" onClick={appendNote} value="SUBMIT" className="bg-green-500 border-2 rounded text-white p-1"></input>
                    </div>
                </div>

                {data.map((note, index) => (
                    <div key={index} className="mt-10 flex justify-between items-center w-[100%] p-4 gap-4 border border-white rounded border-slate-500">
                        <h1 className="grow text-white text-3xl">{note}</h1>
                        <div className="flex justify-between items-center gap-10">
                            {/*<FaPencilAlt color={"white"} size={25}/>*/}
                            <button onClick={() => deleteNote(index)}>
                                <FaRegTrashAlt color={"white"} size={25}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default ToDo
