import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { SlideProp } from '../types/Types';

const getColor = (percentage: number) => {
  if (percentage < 50) return 'red';
  if (percentage < 80) return 'yellow';
  return 'blue';
};

interface ProgressBarProps extends SlideProp {
  isActive: boolean; // ✅ Add an isActive prop to detect active slides
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skills, isActive }) => {
  const [progress, setProgress] = React.useState(skills.map(() => 0));
  const [colors, setColors] = React.useState(skills.map(() => 'red'));

  React.useEffect(() => {
    if (isActive) {
      setProgress(skills.map(() => 0));
      setTimeout(() => {
        setProgress(skills.map((skill) => skill.percentage)); 
      }, 600);
    }
  }, [isActive, skills]);

  React.useEffect(() => {
    setColors(progress.map((p) => getColor(p)));
  }, [progress]);

  return (
    <ul className="w-full p-10 grid grid-cols-3 justify-between  max-sm:grid-cols-2 gap-10">
      {skills.map((skill, index) => (
        <li key={skill.name} className="flex flex-col h-auto items-center gap-3">
          <div className="relative w-[7rem] h-[7rem]">
            <CircularProgressbar
              value={progress[index]}
              minValue={0}
              maxValue={100}
              strokeWidth={2}
              styles={buildStyles({
                pathColor: colors[index],
                trailColor: '#2d2d2d',
                textSize: '14px',
                strokeLinecap: 'round',
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
  );
};

export default ProgressBar;
