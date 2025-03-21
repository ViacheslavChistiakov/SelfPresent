import React from 'react'
import { BriefcaseBusiness, GraduationCap} from 'lucide-react'

const Experience: React.FC = () => {
  return (
    <div className="w-full lg:w-full h-[10%] mx-auto flex flex-col relative right-35 lg:w-[30%] left-3 max-sm:w-full flex justify-center">
    <div className="w-full  flex flex-col bg-zinc-900 rounded-[10%] p-5 gap-4">
        <div className="w-full md:w-full  flex flex-row gap-5 justify-center items-center">
        <BriefcaseBusiness color='white' width={20} height={20}/>
          <h1 className="text-white text-lg">Experience</h1>
        </div>
        <div className="w-full h-auto flex flex-row  gap-9 md:flex-row justify-between max-sm:flex-col xs:flex-col">
            <div className="w-full h-auto flex flex-col items-start justify-center gap-4  lg:w-full flex md:w-full  gap-1 max-sm:w-full gap-3">
                <h1 className="text-white text-3xl">OnePix</h1>
                <p className="text-white text-xl flex flex-col gap-2 items-start">
                    Saint-Petersburg
                    <a className="text-blue-300" href="https://onepix.ru/">Web-studio</a>
                </p>
                <div className="w-full flex flex-col items-start justify-start gap-9   lg:w-full flex md:w-full gap-1 max-sm:w-full gap-3">
                    <p className="text-white text-sm items-start text-start">
                    I worked with a team of developers on the create and support high-load applications such as larges Digital-marketplace, aggregators of vacancies and landings of commercial organizations. My goals as frontend developer was incresing speed loding of applications, creating user-friendly interfaces and providing reliable and safety convesation between user and server.
                    </p>
                    <div className="w-full flex flex-row items-start justify-between text-start">
                        <h2 className="text-white text-xs">Frontend developer</h2>
                        <p className="text-white text-xs">10.08.2022-15.02.2025</p>
                    </div>
                </div>
                </div>
                <div className="hidden md:block w-[2px]   bg-gray-500 h-auto"></div>
                <div className="w-full h-auto flex flex-col items-end justify-center gap-4   lg:w-full flex md:w-full items-end text-end gap-1 sm:items-end text-end max-sm:w-full items-start text-start gap-3">
                <h1 className="text-white text-3xl">GigaPc</h1>
                <p className="text-white text-xl flex flex-col gap-2 items-end md:items-end text-end max-sm:items-start text-start">
                    Nizhniy Novgorod
                    <a className="text-blue-300" href="">Gaming Equipment Store</a>
                </p>
                <div className="w-full flex flex-col items-end justify-start gap-9   lg:w-full flex md:w-full gap-1 max-sm:w-full items-start text-start gap-3">
                    <p className="text-white text-sm items-end text-end max-sm:text-start items-start">
                   I took part in migration old application to modern stack and took project from scratch to production handling all phases. I did responsive interfaces for all types of device, made implementation authefications/regestrations of users and worked with data base. Also i've been met with DevOps approaches, learned how to work with multi-container applications in Docker and how to configure piplines for CI/CD procces.
                    </p>
                    <div className="w-full flex flex-row items-start justify-between text-start">
                        <h2 className="text-white text-xs">Frontend developer</h2>
                        <p className="text-white text-xs">02.02.2021-22.04.2022</p>
                    </div>
                </div>
                </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="w-full flex flex-row mx-auto p-10 items-center justify-center gap-2">
                <GraduationCap color='white' />
                <h1 className="text-white text-lg">Education</h1>
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-2">
                    <div className="w-full flex flex-col text-start items-center">
                        <h2 className="text-white text-sm max-sm:text-xs">
                        Lobachevsky State University of Nizhny Novgorod (National Research University)
                        </h2>
                    </div>
                    <div className="w-full flex flex-col text-end items-end">
                        <h2 className="text-white text-sm max-sm:text-xs">Nizhny Novgorod - 2017</h2>
                        <p className="text-white text-sm max-sm:text-xs">Field of Study: Law</p>
                    </div>
            </div>

        </div>
     </div>
    </div>
  )
}

export default Experience;