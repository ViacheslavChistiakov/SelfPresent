import React from 'react'
import avatar from '../assets/person2.jpg';
import TypeEffect from '../entites/TypeEffect'
import { useTranslation } from 'react-i18next';
import ProgressBar from '../entites/ProgressBar';

const skills = [
    { name: 'React', percentage: 100 },
    { name: 'Next.js', percentage: 95 },
    { name: 'TypeScript', percentage: 99 },
    { name: 'JavaScript', percentage: 100 },
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 85 },
  ];


const Card: React.FC = () => {
const { t } = useTranslation();
  return (
    <div className="w-[40%] h-full rounded-[10%] bg-zinc-900 mx-auto flex flex-col items-center justify-start lg:h-[10%] max-sm:w-full mx-auto flex justify-center">
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <img src={avatar} alt="avatar" className="w-42 h-42 rounded-full  mt-10" />
      <h1 className="w-full text-white text-lg">{t('name')}</h1>
      <TypeEffect sequence={['Frontend Developer', 2000, 'React.js/Next.js', 2000, '', 500]} />
    </div>
    <div className="w-[55%] border-1 border-gray-800 mt-8"></div>
    <ul className="w-full flex flex-col justify-center items-center gap-4 mt-10 max-sm:w-[50%]">
      <li className="w-[65%] flex flex-row justify-between gap-2 text-white whitespace-nowrap max-sm:justify-center">
        {t('Time-zone')} <span>GMT+4</span>
      </li>
      <li className="w-[65%] flex flex-row justify-between text-white">
        {t('Age')} <span>27</span>
      </li>
    </ul>
    <div className="w-[80%] mb-5 grid grid-cols-3 gap-4 mt-10 max-sm:w-[60%]">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col relative items-center justify-center gap-2">
          <ProgressBar percentage={skill.percentage} color="blue" />
          <h2 className="text-white text-sm">{skill.name}</h2>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Card