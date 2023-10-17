import { ExamOption } from "../Teacher/ExamMain";

const ExamQuestions = () => {
  return (
    <section className="max-w-[70%] mr-10">
      <div className="mt-10">
        <h1 className="text-2xl mb-2">Question 2 of 50</h1>
        <p className="text-sm">
          Number of questions answered: <b>19</b>
        </p>
      </div>
      <p className="text-sm">
        Number of questions skipped: <b>19</b>
      </p>

      <div className="flex flex-col mt-10">
        <p className="self-end mb-2">05:22:11 minutes</p>

        <div className="bg-blue-100 w-full max-h-fit m-auto p-3 rounded-md">
          <div className="mb-5">
            <h3 className="font-semibold">1. ________ is the smallest planet</h3>

            <div className="flex flex-col gap-2 mt-5">
              <ExamOption button={false} optionText="A. Jupiter" />
              <ExamOption button={false} optionText="B. Pluto" />
              <ExamOption button={false} optionText="C. Uranus" />
              <ExamOption button={false} optionText="D. Saturn" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamQuestions;
