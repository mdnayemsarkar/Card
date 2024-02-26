// import { useState } from "react";
import PropTypes from "prop-types";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { HiArrowRightCircle } from "react-icons/hi2";
const CardThree = ({ children }) => {
  // const [button, setButton] = useState(true);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 border">
        {children}
        <div>
          {children ? (
            <div className="bg-green-500 h-10 w-fit text-white text-4xl">
              You can visit here
            </div>
          ) : (
            <div className="bg-red-500 h-10 w-fit text-white text-4xl">
              You can not visit here
            </div>
          )}
        </div>
        <div className="flex gap-4 justify-between items-center">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
            />
          </svg>
          <HiArrowRightCircle className="text-4xl text-yellow-400" />
          <BeakerIcon className="h-9 w-9 mt-3 text-pink-300" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

CardThree.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardThree;
