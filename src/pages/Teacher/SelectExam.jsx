import SelectExamOption from "./SelectExamOption";
import { Link } from 'react-router-dom';

const SelectExam = () => {
  return (
    <section className="h-[100vh] mt-10">
      <SelectExamOption />

      <section className="flex items-center gap-10 h-fit mt-10">
        <select className="border-2 border-blue-800 mt-10 p-3 px-5 focus:outline-none m-[0!important]">
          <option value="">Select Exam Assessment</option>
          <option value="">Assessment 1</option>
          <option value="">Assessment 2</option>
          <option value="">Assessment 3</option>
        </select>
        
       
           
        <Link to="/excel-basics">
        <button className="bg-blue-800 py-2 px-4 block text-white font-po">Continue</button>
      </Link>
      </section>
    </section>
  );
};

export default SelectExam;
