import SelectExamOption from "./SelectExamOption";
import { Link } from 'react-router-dom';

const SelectInput = ({ title, options = [] }) => {
  return (
    <div className="flex items-center gap-5 justify-between">
      <p>{title}</p>
      <select className="outline-none border border-blue-700 p-2 w-[40%]">
        {options.length !== 0 &&
          options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

const GenericInput = ({ title = "", placeholder = "" }) => {
  return (
    <div className="flex items-center gap-5 justify-between ">
      <p>{title}</p>
      <input className="outline-none border w-[40%] border-blue-700 p-2" type="text" placeholder={placeholder} />
    </div>
  );
};

const ExcelBasics = () => {
  return (
    <section className="flex flex-col gap-5 my-10 overflow-auto h-[60%]">
      <SelectExamOption />
      <form className="flex flex-col gap-4">
        <GenericInput title="Max number of questions. (Max is 60)" placeholder="s" />
        <SelectInput title="Duration in minutes" options={[10, 15, 20]} />
        <SelectInput title="Enrolment" options={["Term", "Session", "Program"]} />
        <SelectInput title="Allow multiple attempts" options={["Yes", "No"]} />
        <SelectInput title="Show score" options={["Yes", "No"]} />
        <SelectInput title="Grade Allocation" options={["Assessment 1", "Assessment 2"]} />

        <div className="flex gap-5 justify-between ">
          <p>Instructions</p>
          <textarea className="outline-none border w-[40%] h-22 border-blue-700 p-2" name="" value={'a'}>a</textarea>
        </div>
         
        <div className="flex justify-end"> {/* Use flex and justify-end to move the button to the right */}
      {/* Your other content here */}
      <Link to="/main-exam">
        <button className="bg-blue-800 py-2 px-4 block text-white font-po">Submit</button>
      </Link>
    </div>
       
        
      </form>
    </section>
  );
};

export default ExcelBasics;
