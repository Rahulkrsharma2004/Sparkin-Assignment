import { useState } from "react";

const CheckboxGroup = ({ title, options }) => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (option) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  return (
    <div className="border p-5 rounded-xl shadow-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 transition-all">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">{title}</h3>
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-all cursor-pointer"
        >
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
            checked={selected.includes(option)}
            onChange={() => toggleSelect(option)}
          />
          <span className="text-gray-700 dark:text-gray-300 text-base">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
