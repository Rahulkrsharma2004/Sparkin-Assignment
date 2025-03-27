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
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br 
                    from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-6"
    >
      <Navbar />
      <div
        className="w-full max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl 
                      transition-all duration-300 transform"
      >
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Select Cost Saving Actions
            </h2>
            <CheckboxGroup
              title="Cost Saving Actions"
              options={[
                "Start-Stop Resources",
                "Pause-Resume Resources",
                "Resource Cleanup",
              ]}
              selected={selectedOptions.costActions}
              onChange={(options) => handleSelection("costActions", options)}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Select Resources & Cleanup Options
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <CheckboxGroup
                title="Resources"
                options={[
                  "RDS",
                  "Light Sail",
                  "Amazon Neptune",
                  "Redshift Clusters",
                ]}
                selected={selectedOptions.resources}
                onChange={(options) => handleSelection("resources", options)}
              />
              <CheckboxGroup
                title="Cleanup Options"
                options={[
                  "Terminate EC2",
                  "Delete EBS Volumes",
                  "Delete RDS Snapshot",
                ]}
                selected={selectedOptions.cleanupOptions}
                onChange={(options) =>
                  handleSelection("cleanupOptions", options)
                }
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Review Your Selections
            </h2>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Cost Saving Actions:</strong>{" "}
                {selectedOptions.costActions.join(", ") || "None Selected"}
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Resources:</strong>{" "}
                {selectedOptions.resources.join(", ") || "None Selected"}
              </p>
              <p className="text-gray-700 dark:text-gray-200">
                <strong>Cleanup Options:</strong>{" "}
                {selectedOptions.cleanupOptions.join(", ") || "None Selected"}
              </p>
            </div>
          </>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={() => setStep((prev) => prev - 1)}
              className="flex items-center gap-2 px-5 py-3 bg-gray-300 dark:bg-gray-700 text-gray-800 
                         dark:text-gray-200 font-medium rounded-full shadow-lg transition-transform 
                         hover:bg-gray-400 dark:hover:bg-gray-600 hover:scale-110"
            >
              <FaArrowLeft />
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep((prev) => prev + 1)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                         dark:from-purple-600 dark:to-indigo-700 text-white font-semibold 
                         rounded-full shadow-lg transition-transform hover:scale-110"
            >
              Next
              <FaArrowRight />
            </button>
          ) : (
            <button
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold 
                         rounded-full shadow-lg transition-transform hover:scale-110"
            >
              <FaCheckCircle />
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
