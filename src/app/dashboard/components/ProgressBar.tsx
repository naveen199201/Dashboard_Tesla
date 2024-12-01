import React from "react";

type ProgressBarProps = {
    progress: number;
    color?:string;
    bgcolor?:string
  };

const ProgressBar:React.FC <ProgressBarProps>  = ({progress,color,bgcolor}) => {
    const clampedProgress = Math.min(Math.max(progress, 0), 100);
    console.log(color);
    return (
      <div className={`${bgcolor} w-full bg-gray-300 rounded-full h-4 relative`}>
      {/* Progress (filled part) */}
      <div
        className={`${color} absolute top-0 left-0 h-4 rounded-full `}
        style={{ width: `${clampedProgress}%` }}
      ></div>

      
      <div
        className="absolute top-0 right-0 h-4  rounded-full"
        style={{ width: `${100 - clampedProgress}%` }}
      ></div>
    </div>
    );
  }

  export default ProgressBar;
  