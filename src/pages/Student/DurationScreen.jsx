const DurationScreen = () => {
  return (
    <section className="bg-blue-100 w-[60%] max-h-fit m-auto p-3 rounded-md mt-10">
      <img src="/src/assets/amico.png" alt="duration" className="mx-auto block border-0 border-red-500 w-52 h-52" />

      <div className="text-center mt-10 font-semibold">
        <p>Duration: 20min</p>
        <p>Duration: 20min</p>
        <p>Deadline: Tuesday, 20th June, 2024</p>
        <p>Time: 12:25pm</p>
      </div>

      <button className="block border border-blue-800 bg-blue-800 mx-auto mt-5 py-2 px-5 rounded-lg text-white">Start Exam</button>
    </section>
  );
};

export default DurationScreen;
