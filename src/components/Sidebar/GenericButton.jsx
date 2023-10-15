import { FiMoreVertical } from "react-icons/fi";

const GenericButton = ({ SideIcon, optionable = false, text, className="" }) => {
  return (
    <i className=" not-italic block">
      <button className={`border flex items-center gap-3 relative w-full rounded-lg bg-[#004db6] text-sm px-5 py-3 border-[#004db6] text-white ${className}`}>
       {SideIcon && <SideIcon className=" w-5 h-5"/>} {text} {optionable && <FiMoreVertical className="absolute right-5"/>}
      </button>
    </i>
  );
};

export default GenericButton;
