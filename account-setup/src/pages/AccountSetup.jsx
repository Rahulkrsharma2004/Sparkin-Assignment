import { useState } from "react";
import CheckboxGroup from "../components/CheckboxGroup";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

const AccountSetup = () => {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({
    costActions: [],
    resources: [],
    cleanupOptions: [],
  });

  const handleSelection = (category, options) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: options,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 md:p-8 lg:p-10">
      <Navbar />
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transition-all duration-300 transform mt-20">
        {step === 1 && (
          <>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Select Cost Saving Actions
            </h2>
            <CheckboxGroup
              title="Cost Saving Actions"
              options={["Start-Stop Resources", "Pause-Resume Resources", "Resource Cleanup"]}
              selected={selectedOptions.costActions}
              onChange={(options) => handleSelection("costActions", options)}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Select Resources & Cleanup Options
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CheckboxGroup
                title="Resources"
                options={["RDS", "Light Sail", "Amazon Neptune", "Redshift Clusters"]}
                selected={selectedOptions.resources}
                onChange={(options) => handleSelection("resources", options)}
              />
              <CheckboxGroup
                title="Cleanup Options"
                options={["Terminate EC2", "Delete EBS Volumes", "Delete RDS Snapshot"]}
                selected={selectedOptions.cleanupOptions}
                onChange={(options) => handleSelection("cleanupOptions", options)}
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Review Your Selections
            </h2>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm sm:text-base">
              <p className="text-gray-700 dark:text-gray-200"><strong>Cost Saving Actions:</strong> {selectedOptions.costActions.join(", ") || "None Selected"}</p>
              <p className="text-gray-700 dark:text-gray-200"><strong>Resources:</strong> {selectedOptions.resources.join(", ") || "None Selected"}</p>
              <p className="text-gray-700 dark:text-gray-200"><strong>Cleanup Options:</strong> {selectedOptions.cleanupOptions.join(", ") || "None Selected"}</p>
            </div>
          </>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          {step > 1 && (
            <button
              onClick={() => setStep((prev) => prev - 1)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg shadow-md hover:bg-gray-400 dark:hover:bg-gray-600"
            >
              <FaArrowLeft /> Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep((prev) => prev + 1)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:scale-105"
            >
              Next <FaArrowRight />
            </button>
          ) : (
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:scale-105">
              <FaCheckCircle /> Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
