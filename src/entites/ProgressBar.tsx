import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';


interface ProgressBarProps {
  percentage: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, color }) => {
  return (
    <div className="w-[3rem] h-[3rem]">
      <CircularProgressbar
        value={percentage}
        minValue={0}
        maxValue={100}
        strokeWidth={2}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: color,
          trailColor: '#2d2d2d',
          textColor: 'white',
          textSize: '1.5rem',
          strokeLinecap: 'round',
        })}
      />
    </div>
  );
};

export default ProgressBar;
