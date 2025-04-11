import React, { useState } from "react";

const AcademicManagementCard: React.FC = () => {
  const [showRoutine, setShowRoutine] = useState(false);

  return (
    <div className="border rounded-xl p-6 shadow-md bg-white relative max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Academic Management</h2>

      <div className="flex flex-col items-center">
        {!showRoutine ? (
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-medium rounded-full shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={() => setShowRoutine(true)}
          >
            More Info
          </button>
        ) : (
          <div className="w-full mt-4 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
            <img
              src="https://res.cloudinary.com/drsafpurz/image/upload/v1744392533/personal%20website/Routine.png"
              alt="Academic Management Routine"
              className="w-full h-auto object-contain transition-opacity duration-700 ease-in-out opacity-100"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicManagementCard;
