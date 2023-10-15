import { useState } from "react";
import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Sidebar from "@sidebar/Sidebar";
import SelectExam from "./pages/Teacher/SelectExam";
import ExcelBasics from "./pages/Teacher/ExcelBasics";
import ExamMain from "./pages/Teacher/ExamMain";
import DurationScreen from "./pages/Student/DurationScreen";
import ExamQuestions from "./pages/Student/ExamQuestions";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex gap-20">
        <Sidebar />
        <div className="w-[calc(100%-20rem)] ml-auto px-10">
          <Routes>
            <Route path="/duration" element={<DurationScreen />} />
            <Route path="/select-exam" element={<SelectExam />} />
            <Route path="/main-exam" element={<ExamMain />} />
            <Route path="/excel-basics" element={<ExcelBasics />} />
          </Routes>
          {/* <DurationScreen /> */}
          {/* <ExamMain /> */}
          {/* <SelectExam /> */}
          {/* <ExcelBasics /> */}
          <ExamQuestions />
        </div>
      </main>
    </div>
  );
}

export default App;
