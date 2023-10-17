import { useState } from "react";
import SelectExamOption from "./SelectExamOption";

export const ExamOption = ({ label = "", optionText = "", button = true }) => {
  return (
    <div className="flex gap-3">
      {button && <input className=" scale-[1.2]" type="radio" name={label} />}
      <p className="bg-white py-3 rounded-md p-2 w-full">{optionText}</p>
    </div>
  );
};

const CreateExam = () => {
  return (
    <section>
      <div className="my-20 bg-blue-100 w-full p-3 rounded-md mt-10 ">
        <p>Write your question</p>

        <div className="flex items-center gap-5">
          <p className="bg-white w-full rounded-md p-2 flex items-center justify-between">_________ is the smallest planet</p>
          <button className="border border-blue-800 font-[500] w-32 py-2 text-sm px-4 block text-blue-800">Add Image</button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <ExamOption optionText={"A. Jupiter"} label="one" />
          <ExamOption optionText={"B. Pluto"} label="one" />
          <ExamOption optionText={"C. Uranus"} label="one" />
          <ExamOption optionText={"D. Saturn"} label="one" />
        </div>
        <button className=" ml-6 border mt-5 border-blue-800 font-[500] w-32 py-2 text-sm px-4 block text-blue-800">Add +</button>
      </div>

      <div className="flex gap-3 mt-4 self-end flex justify-end">
        <button className="border border-blue-800 font-[500] w-40 py-3 text-sm px-4 block text-blue-800">Save</button>
        <button className="border bg-blue-800 font-[500] w-40 py-3 text-sm px-4 block text-white">Add new question</button>
      </div>
    </section>
  );
};

const ViewCreatedExam = () => {
  return (
    <section className="my-5 w-[100%] flex flex-col h-[64%] overflow-scroll  max-h-[500px]">
      <p>Number of Questions: (50)</p>
      <div className="bg-blue-100 w-full p-3 rounded-md mt-5">
        <div className="mb-5">
          <h3 className="font-semibold">1. ________ is the smallest planet</h3>
          <img className="mt-5 border-0 border-blue-800 w-[120%] h-32" src="/src/assets/Rectangle.png" alt="planets" />

          <div className="flex flex-col gap-2 mt-5">
            <ExamOption button={false} optionText="A. Jupiter" />
            <ExamOption button={false} optionText="B. Pluto" />
            <ExamOption button={false} optionText="C. Uranus" />
            <ExamOption button={false} optionText="D. Saturn" />
          </div>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">2. ________ is the smallest planet</h3>
          <img className="mt-5 border border-blue-800 h-32" src="" alt="planets" />

          <div className="flex flex-col gap-2 mt-5">
            <ExamOption button={false} optionText="A. Jupiter" />
            <ExamOption button={false} optionText="B. Pluto" />
            <ExamOption button={false} optionText="C. Uranus" />
            <ExamOption button={false} optionText="D. Saturn" />
          </div>
        </div>
      </div>
    </section>
  );
};
const ExamMain = () => {
  const [selected, setSelected] = useState("view");
  function handleClick(e) {
    setSelected(e.target.value);
  }
  return (
    <section className="my-10 w-[60%] flex flex-col">
      <SelectExamOption optionTwo="View created Exam" onClick={handleClick} selected={selected} />

      {selected === "create" ? <CreateExam /> : <ViewCreatedExam />}
    </section>
  );
};

export default ExamMain;
