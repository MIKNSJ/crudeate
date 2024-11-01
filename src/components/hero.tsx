import { ReactTyped } from "react-typed"
import { Link } from "react-router-dom"

function Hero() {
    return (
        <div className="container mx-auto mt-16 md:mt-60">
            <div className="flex flex-col justify-center items-center text-center p-4 gap-5 text-white">
                <h1 className="font-bold text-green-500 text-3xl md:text-5xl uppercase"> Document your success. </h1>
                <p className="font-bold text-lg md:text-xl uppercase"> The To-Do list that will help achieve your daily goals. </p>
                <ReactTyped className="fold-bold text-neutral-300 text-base md:text-lg" strings={[
                        "I need to shop for groceries for this week.",
                        "I have to meet with a friend this afternoon.",
                        "I want to wake up early tomorrow.",
                        "I have to study for an exam this week.",
                        "I have to clean my room today.",
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                />
                <p className="font-bold text-lg md:text-xl uppercase">Never forget what you need to accomplish.</p>
                <button className="demo_button bg-white text-black flex justify-center items-center overflow-hidden relative rounded">
                    {/*<a className="p-4 font-bold uppercase z-10" href="#"> Try the Demo </a>*/}
                    <Link to="/todo" className="p-4 font-bold uppercase z-10"> Try the Demo </Link>
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default Hero
