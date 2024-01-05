import reaction from "./images/icon-reaction.svg";
import memory from "./images/icon-memory.svg";
import verbal from "./images/icon-verbal.svg";
import visual from "./images/icon-visual.svg";

function App() {
  return (
    <div className="flex h-screen items-center">
      <div className="flex justify-center  mx-auto flex-row  w-2/5  shadow-lg">
        <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-indigo-700 to bg-indigo-500 basis-1/2 justify-evenly ">
          <div className="text-gray-300 text-center p-4">Your Result</div>
          <div className="w-40 h-40 bg-gradient-to-t from to bg-indigo-800 rounded-full text-white text-center flex flex-col items-center justify-center">
            <div className="text-6xl font-mono">76</div>
            <div className="text-gray-500">of 100</div>
          </div>
          <div className="text-white text-center text-2xl p-3 ">Great</div>
          <div className="text-gray-300 text-center pb-8">
            <div>You scored higher than 65% of</div>
            <div>the people who have taken </div>
            <div>these tests.</div>
          </div>
        </div>
        <div className="basis-3/5 flex flex-col justify-evenly rounded pl-12 ">
          <div className="text-blue-950 font-bold pb-2 text-2xl ">Summary</div>
          <div>
            <div className="bg-red-100 text-red-500 font-semibold flex justify-between items-center rounded mb-4 w-5/6 h-9">
              <img className="pl-2" src={reaction} alt="Reaction" />
              <div> Reaction</div>
              <div className="flex items-center">
                <div className="text-blue-950 font-bold pr-2"> 80 </div>
                <div className="text-gray-400 font-bold pr-2"> / 100</div>
              </div>
            </div>
            <div className="bg-yellow-100 text-yellow-500 font-semibold flex justify-between items-center rounded mb-4 w-5/6 h-9">
              <img className="pl-2" src={memory} alt="Memory" />
              Memory
              <div className="flex items-center">
                <div className="text-blue-950 font-bold pr-2"> 92 </div>
                <div className="text-gray-400 font-bold pr-2"> / 100</div>
              </div>
            </div>
            <div className="bg-emerald-100 text-emerald-500 font-semibold flex justify-between items-center rounded mb-4 w-5/6 h-9">
              <img className="pl-2" src={verbal} alt="Verbal" />
              Verbal
              <div className="flex items-center">
                <div className="text-blue-950 font-bold pr-2"> 61 </div>
                <div className="text-gray-400 font-bold pr-2"> / 100</div>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-700 font-semibold flex justify-between items-center rounded mb-4 w-5/6 h-9">
              <img className="pl-2" src={visual} alt="Visual" />
              Visual
              <div className="flex items-center">
                <div className="text-blue-950 font-bold pr-2"> 72 </div>
                <div className="text-gray-400 font-bold pr-2"> / 100</div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <button className="text-white bg-blue-950 hover:bg-indigo-600  to rounded-full font-semibold text-center w-5/6 h-8 ">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
