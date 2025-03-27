import { useState } from "react";

const CheckboxGroup = ({ title, options, selected, onChange }) => {
  const [checkedItems, setCheckedItems] = useState(selected || []);

  const toggleSelect = (option) => {
    const updatedSelection = checkedItems.includes(option)
      ? checkedItems.filter((item) => item !== option)
      : [...checkedItems, option];

    setCheckedItems(updatedSelection);
    onChange(updatedSelection);
  };

  return (
    <div className="border p-5 rounded-xl shadow-md bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">{title}</h3>
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={checkedItems.includes(option)}
            onChange={() => toggleSelect(option)}
            className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
          />
          <span className="text-gray-700 dark:text-gray-300">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
