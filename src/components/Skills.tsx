import React from 'react';
import { FlaskConical } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VisibilitySensor from 'react-visibility-sensor';
import 'react-circular-progressbar/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import logoReact from '../assets/react-logo.svg';
import nextJsLog from '../assets/nextJsLogo.svg';
import tsLogo from '../assets/tsLogo.png';
import jsLogo from '../assets/jsLogo.svg';
import htmlLogo from '../assets/htmlLogo.svg';
import cssLogo from '../assets/cssLogo.svg';
import tlLogo from '../assets/tlLogo.svg';

const skills = [
  { name: 'React', logo: logoReact, percentage: 100 },
  { name: 'Next.js', logo: nextJsLog, percentage: 95 },
  { name: 'TypeScript', logo: tsLogo, percentage: 99 },
  { name: 'JavaScript', logo: jsLogo, percentage: 100 },
  { name: 'HTML', logo: htmlLogo, percentage: 95 },
  { name: 'CSS', logo: cssLogo, percentage: 85 },
];

const getColor = (percentage: number) => {
  if (percentage < 50) return 'red';
  if (percentage < 80) return 'yellow';
  return 'blue';
};

const Skills: React.FC = () => {
  const [progress, setProgress] = React.useState(skills.map(() => 0));
  const [colors, setColors] = React.useState(skills.map(() => 'red'));

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(skills.map((skill) => skill.percentage));
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    // Update colors whenever progress changes
    setColors(progress.map((p) => getColor(p)));
  }, [progress]); // Runs when progress updates

  return (
    <div className="w-full lg:w-full h-[10%] mx-auto flex flex-col relative right-35 lg:w-[30%] left-3 max-sm:w-full flex justify-center">
      <div className="w-full  flex flex-col bg-zinc-900 rounded-[10%] p-5 gap-10">
        <div className="w-full flex flex-row gap-5 justify-center items-center">
          <FlaskConical color="white" />
          <h1 className="text-white text-lg">Skills</h1>
        </div>
        <div className="w-full h-auto mx-auto p-10 flex flex-row gap-15">
          <ul className="w-full p-10 grid grid-cols-3 justify-between gap-10">
            {skills.map((skill, index) => (
              <li key={skill.name} className="flex flex-col h-auto items-center gap-2">
                <div className="relative w-[7rem] h-[7rem]">
                        <CircularProgressbar
                        value={progress[index]}
                        minValue={0}
                        maxValue={100}
                        strokeWidth={2}
                        styles={buildStyles({
                            pathColor: colors[index],
                            trailColor: "#2d2d2d", 
                            textSize: "14px",
                            strokeLinecap: "round",
                          })}
                      />
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="absolute top-[25%] left-[25%] w-[50%] h-[50%]"
                  />
                </div>
                <h1 className="text-lg text-white">{skill.name}</h1>
                <p className="text-white">{progress[index]}%</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



export default Skills;
