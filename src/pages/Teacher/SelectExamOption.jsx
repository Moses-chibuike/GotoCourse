import { useState } from "react";

export const SelectExamOption = ({ optionOne = "Create Exam / Assessment", optionTwo = "View Created Exam / Assessment", selected, onClick = "" }) => {
  return (
    <div className="flex gap-4">
      <button
        value={"create"}
        onClick={onClick}
        className={`text-[#0c2191] font-bold border-b-2 border-[#f1f1f100] ${selected === "create" && "border-b-2 border-[#0c2191!important]"}`}
      >
        {optionOne}
      </button>
      <button
        value={"view"}
        onClick={onClick}
        className={`text-[#0c2191] border-b-2 border-[#f1f1f100] font-bold ${selected === "view" && "border-b-2 border-[#0c2191!important]"}`}
      >
        {optionTwo}
      </button>
    </div>
  );
};

export default SelectExamOption;
