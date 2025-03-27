import CheckboxGroup from "../components/CheckboxGroup";
import ThemeToggle from "../components/ThemeToggle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AccountSetup = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br 
                    from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-6">
      {/* Header Section */}
      <div className="flex justify-between w-full max-w-3xl mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
          Add Account
        </h1>
        <ThemeToggle />
      </div>

      {/* Form Card */}
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl 
                      transition-all duration-300 transform ">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Select Actions
        </h2>

        {/* Checkbox Groups */}
        <div className="grid grid-cols-2 gap-6">
          <CheckboxGroup 
            title="Cost Saving Actions" 
            options={["Start-Stop Resources", "Pause-Resume Resources", "Resource Cleanup"]} 
          />
          <CheckboxGroup 
            title="Resources" 
            options={["EC2", "RDS", "Light Sail", "Amazon Neptune", "Redshift Clusters"]} 
          />
          <CheckboxGroup 
            title="Cleanup Options" 
            options={["Terminate EC2", "Delete EBS Volumes", "Delete RDS Snapshot"]} 
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button className="flex items-center gap-2 px-5 py-3 bg-gray-300 dark:bg-gray-700 text-gray-800 
                            dark:text-gray-200 font-medium rounded-full shadow-lg transition-transform 
                            hover:bg-gray-400 dark:hover:bg-gray-600 hover:scale-110">
            <FaArrowLeft />
            Back
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                            dark:from-purple-600 dark:to-indigo-700 text-white font-semibold 
                            rounded-full shadow-lg transition-transform hover:scale-110">
            Next
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
