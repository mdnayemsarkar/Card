import { useState } from "react";

const CardTo = () => {
  const [showVisitButton, setShowVisitButton] = useState(false);

  const handleClick = () => {
    // Toggle the visibility of the "visit me" button
    setShowVisitButton(!showVisitButton);
  };

  const handleVisitClick = () => {
    // Handle the visit button click action
    console.log("Visit button clicked!");
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-4">
      <p>This is card two has some special content.</p>

      <div className="flex justify-between mt-2">
        {/* Render the "Click me" button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleClick}
        >
          {showVisitButton ? "Back" : "Click me"}
        </button>

        {/* Render the "visit me" button if showVisitButton is true */}
        {showVisitButton && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleVisitClick}
          >
            Visit me
          </button>
        )}
      </div>
    </div>
  );
};

export default CardTo;
