import { SquarePen } from 'lucide-react';
import './App.css';
import avatar from './assets/person2.jpg';
import Introduce from './components/Introduce';
import TypeEffect from './entites/TypeEffect';
import { Languages } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { FlaskConical } from 'lucide-react';
import { PersonStanding } from 'lucide-react';
import Experience from './components/Experience';
import React from 'react';
import Skills from './components/Skills';


enum Blocks {
  INTRODUCE = 'INTRODUCE',
  SKILLS = 'SKILLS',
  EXPERIENCE = 'EXPERIENCE',
  ABOUT = 'ABOUT',
}




function App() {

  const [block, setBlock] = React.useState<Blocks>(Blocks.EXPERIENCE);

  const handleClick = (block: Blocks) => {
   setBlock(block)
  }

  return (
  <div className="max-w-full mx-auto flex flex-row justify-center gap-22 lg:flex-row gap-10 md:flex-col sm:flex-col max-sm:flex-col items-center justify-center gap-3">
      <div className="w-[40%]  h-[100%] rounded-[10%] bg-zinc-900 mx-auto flex flex-col items-center justify-start max-sm:w-full mx-auto flex justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <img src={avatar} alt="avatar" className="w-42 h-42 rounded-full  mt-10" />
          <h1 className="w-[60%] text-white text-lg">Viacheslav Chistiakov</h1>
            <TypeEffect  sequence={["Frontend Developer", 2000, "React.js/Next.js", 2000, "", 500]} />
        </div>
        <div className="w-[55%] border-1 border-gray-800 mt-8"></div>
        <ul className="w-full flex flex-col justify-center items-center gap-4 mt-10 max-sm:w-[50%]">
        <li className="w-[65%] flex flex-row justify-between text-white">City: <span>Tbilisi</span></li>
        <li className="w-[65%] flex flex-row justify-between text-white">Age: <span>27</span></li>
      </ul>
      <div className="w-[80%] mb-5 grid grid-cols-3 gap-4 mt-10 max-sm:w-[60%]">
        <div className="flex flex-col relative items-center justify-center gap-2">
            <div className="w-full border-1 border-green-500 rounded-[50%] w-16 h-16 flex items-center justify-center">
              <h2 className="text-white">100%</h2>
            </div>
            <h1 className="text-white text-sm">React</h1>
        </div>
        <div className="flex flex-col relative items-center justify-center gap-2">
            <div className="w-full border-1 border-green-500 rounded-[50%] w-16 h-16 flex items-center justify-center">
              <h2 className="text-white">99%</h2>
            </div>
            <h1 className="text-white text-sm">TypeScript</h1>
        </div>
        <div className="flex flex-col relative items-center justify-center gap-2">
            <div className="w-full border-1 border-green-500 rounded-[50%] w-16 h-16 flex items-center justify-center">
              <h2 className="text-white">95%</h2>
            </div>
            <h1 className="text-white text-sm">Next.js</h1>
        </div>
        <div className="flex flex-col relative items-center justify-center gap-2">
            <div className="w-full border-1 border-green-500 rounded-[50%] w-16 h-16 flex items-center justify-center">
              <h2 className="text-white">97%</h2>
            </div>
            <h1 className="text-white text-sm">Tailwind</h1>
        </div>
        <div className="flex flex-col relative items-center justify-center gap-2">
            <div className="w-full border-1 border-green-500 rounded-[50%] w-16 h-16 flex items-center justify-center">
              <h2 className="text-white">92%</h2>
            </div>
            <h1 className="text-white text-sm">Node.js</h1>
        </div>
        <div className="flex flex-col relative items-center justify-center gap-2">
            <div className="w-full border-1 border-green-500 rounded-[50%] w-16 h-16 flex items-center justify-center">
                <h2 className="text-white">100%</h2>
            </div>
            <h1 className="text-white text-sm">JavaScript</h1>
        </div>
      </div>
      </div>
      <div className="w-full h-full  mx-auto flex flex-col  items-center relative  left-[-4px] top-[-25px] xl:right-5  justify-start lg:w-[10%]  right-1 bottom-10  md:w-[70%] flex-row top-14 left-8 max-sm:left-0">
        <ul className="w-full h-auto flex flex-col items-center justify-between gap-2 bg-zinc-900 rounded-full lg:flex-col  md:flex flex-row">
          <li className="group relative">
              <button className="w-8 h-8 flex items-center justify-center  rounded-full hover:bg-gray-700 transition">
                <a href="">
                  <Languages color='white' width={20} height={20}/>
                </a>
                <span className="absolute right-full z-10 top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    ENG/RU
                  </span>
              </button>
          </li>
          <li className="group relative">
              <button onClick={() => handleClick(Blocks.INTRODUCE)} className="w-8 h-8 flex items-center justify-center  rounded-full hover:bg-gray-700 transition">
                  <SquarePen color='white' width={20} height={20}/>
                <span className="absolute right-full z-10 top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    About
                  </span>
              </button>
          </li>
          <li className="group relative">
              <button onClick={() => handleClick(Blocks.EXPERIENCE)} className="w-8 h-8 flex items-center justify-center  rounded-full hover:bg-gray-700 transition">
                  <BriefcaseBusiness color='white' width={20} height={20}/>
                <span className="absolute right-full z-10 top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Experience
                  </span>
              </button>
          </li>
          <li className="group relative">
              <button onClick={() => handleClick(Blocks.SKILLS)}  className="w-8 h-8 flex items-center justify-center  rounded-full hover:bg-gray-700 transition">
                  <FlaskConical color='white' width={20} height={20}/>
                <span className="absolute right-full z-10 top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Skills
                  </span>
              </button>
          </li>
          <li className="group relative">
              <button className="w-8 h-8 flex items-center justify-center  rounded-full hover:bg-gray-700 transition">
                  <PersonStanding  color='white' width={20} height={20}/>
                <span className="absolute right-full z-10 top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Profile
                  </span>
              </button>
          </li>

        </ul>
      </div>
        {
          block === Blocks.INTRODUCE ? (<Introduce />) :
          block === Blocks.EXPERIENCE ? (<Experience />) :
          block === Blocks.SKILLS ? (<Skills />) :
          block === Blocks.ABOUT ? (<div>About</div>) : null
        }

    </div>
  );
}

export default App;
