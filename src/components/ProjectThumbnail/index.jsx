import { useState } from 'react';
import Chasis from '../../assets/images/services/chassis.png';

const ProjectThumbnail = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-8 h-full bg-[#fff] font-rubik-regular space-y-4 text-black">
      <div className="flex justify-center items-center ">
        <img className="h-[60px] w-[60px]" src={Chasis} alt="hey hey" />
      </div>
      <h3 className="font-rubik-bold text-center">{project.name}</h3>
      <p className={`text-sm ${isExpanded ? 'block' : 'overflow-hidden max-h-10'}`}>{project.description}</p>
      {!isExpanded && (
        <button
          onClick={toggleExpanded}
          className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer"
        >
          Read more
        </button>
      )}
      {isExpanded && (
        <button
          onClick={toggleExpanded}
          className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer"
        >
          Read less
        </button>
      )}
    </div>
  );
};

export default ProjectThumbnail;
