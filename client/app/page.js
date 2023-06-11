import Image from "next/image";

export default function Home() {
  return (
    <div>
        <div className="flex flex-col h-screen">
          <div className="m-auto">
            <div className="text-center bg-green-500 rounded-[1rem] px-3 py-3 shadow-green-600 shadow-lg">
              <h1 className="text-black font-mono text-5xl md:text-9xl mx-[0.10rem]">
                Welcome
              </h1>
            </div>
            <div className="bg-green-500 my-5 rounded-[1rem] shadow-green-600 shadow-lg px-5 py-3 flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3">
              <button className="text-[#CCCCCC] border-black border-2 bg-black hover:border-[#CCCCCC] hover:text-black font-mono px-8 py-3 transition-all hover:bg-[#CCCCCC] hover:rounded-lg text-xl md:text-2xl font-thin cursor-pointer">
                Initiate
              </button>
              <button className="text-[#CCCCCC] border-black  bg-black border-2 hover:border-[#CCCCCC] hover:text-black px-8 py-3 font-mono transition-all hover:bg-[#CCCCCC] hover:rounded-lg text-xl md:text-2xl font-thin cursor-pointer">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="bg-green-500 text-black font-mono text-center text-2xl sm:text-3xl">
          Credits to{" "}
          <a href="https://heropatterns.com/" className="underline">
            HeroPatterns
          </a>{" "}
          for background!
        </div>
    </div>
  );
}
