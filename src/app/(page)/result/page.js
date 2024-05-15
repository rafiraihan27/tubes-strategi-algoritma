import Dnc from "./dnc";
import Greedy from "./greedy";

export default function Result() {
  return (
    <div className="w-full justify-between mt-10">
      <p className="text-xl font-semibold border-b border-gray-400 dark:border-gray-700 mb-5">
        RESULT
      </p>
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-between">
        <Dnc />
        <Greedy />
      </div>
    </div>
  );
}
