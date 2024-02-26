import Cardimg from "./assets/photos/cardimg.jpg";
import CardProps from "./assets/Card";
import CardTwo from "./assets/CardTwo";
import CardThree from "./assets/cardTo";
import StudentsTable from "./assets/StudentTable";
const Card = () => {
  return (
    <>
      <div className="h-full py-32 w-full gap-24 mt-24 flex justify-center items-center flex-col font-Montsserat ">
        {" "}
        <CardProps
          title="card no  one"
          description="card one description one herre"
          imageUrl="https://picsum.photos/536/354"
        />
        <CardTwo />
        <StudentsTable/>
        <CardThree>
          <h1>Title: Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </CardThree>
        {/* first card  start  here*/}
        <div className=" w-96 shadow-xl shadow-blue-50 rounded-3xl p-12">
          <div className="flex justify-between  items-center ">
            <div className="text-sm font-semibold">ABOUT THE COMMUNITY </div>
            <div className="text-2xl font-bold mb-3"> ...</div>
          </div>
          <p className="text-2xl font-bold mt-4">Blender Renders</p>
          <p className=" mt-3 font-medium text-sm">
            A place where beginner Blender <br /> artist can post their creation
            and <br />
            get feedback.
          </p>
          <div className="flex gap-14 my-5">
            <div>
              <p className="text-2xl font-semibold">13.5K</p>{" "}
              <p className="text-sm">Members</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">47</p>{" "}
              <p className="text-sm">Online</p>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="">
              <button className="border-2 rounded-xl p-3 text-xs font-medium w-[140px]">
                joined
              </button>
            </a>{" "}
            <a href="">
              <button className="border bg-black text-white rounded-xl p-3 text-xs w-[140px] font-medium">
                Create Post
              </button>
            </a>
          </div>
          <p className="text-xs mt-5 font-medium">Created Feb.7.2023</p>
        </div>
        {/* first card  ends  here*/}
        {/* secound card starts here  */}
        <div className=" w-96 shadow-xl shadow-blue-50 rounded-3xl p-12">
          {/* Header */}
          <div className="text-lg font-bold mb-4">
            Give feedback{" "}
            <p className="text-xs font-semibold mt-2">
              What do you think of the edeting tool?
            </p>
          </div>

          {/* Emoji Row */}
          <div className="flex justify-around mb-4">
            <span
              role="img"
              aria-label="face emoji 1"
              className="bg-white p-3 rounded-full"
            >
              😀
            </span>
            <span
              role="img"
              aria-label="face emoji 2"
              className="bg-white p-3 rounded-full"
            >
              😊
            </span>
            <span
              role="img"
              aria-label="face emoji 3"
              className="bg-white p-3 rounded-full"
            >
              😎
            </span>
            <span
              role="img"
              aria-label="face emoji 4"
              className="bg-slate-100 p-3 rounded-full"
            >
              🥳
            </span>
            <span
              role="img"
              aria-label="face emoji 5"
              className="bg-white p-3 rounded-full"
            >
              🤩
            </span>
          </div>

          {/* Text Field */}
          <div className="mb-4">
            <input
              type="text"
              className="border-blue-100 focus:border-blue-500 border h-28 rounded-md w-full p-2"
              placeholder="Enter text here"
            />
          </div>

          {/* Radio Buttons */}
          <p className="text-xs font-semibold">
            May we follow you up on your feedback?
          </p>
          <div className="flex items-center my-6 ">
            <label className="mr-4 text-xs font-semibold">
              <input type="radio" name="option" value="yes" /> Yes
            </label>
            <label className="text-xs font-semibold">
              <input type="radio" name="option" value="no" /> No
            </label>
          </div>

          {/* Buttons Row */}
          <div className="flex gap-6">
            <a href="">
              <button className="border-2 rounded-lg p-3 text-xs bg-[#0652DD] text-white font-medium w-[140px]">
                send
              </button>
            </a>{" "}
            <a href="">
              <button className="border  rounded-xl p-3 text-xs w-[140px] font-medium">
                Create Post
              </button>
            </a>
          </div>
        </div>
        {/* Secound card ends here  */}
        <div className=" w-96 shadow-xl shadow-blue-50 rounded-xl  ">
          <img src={Cardimg} alt="" className="h-52 w-full object-cover" />
          <div>
            <p className="text-center mt-6 text-gray-400 font-medium">
              25 Feb,2021 - 0 comments
            </p>
            <p className="text-center text-lg font-bold">
              Aliquam hendreit mi metus
            </p>
          </div>
          <div className="mb-6 flex justify-center">
            <p className="text-center mt-6 border-b border-black border-solid border-b-0.5 w-24">
              Read more
            </p>
          </div>
        </div>
        {/* here is my fourth card start */}
        <div className="px-24 py-12 will-change-contents shadow-2xl border shadow-blue-50 rounded-xl">
          <div className="mb-14 flex gap-3">
            <div className="bg-[#EA2027] w-2 "> </div>
            <div className="bg-[#1B1464] w-2 "> </div>
            <div>
              <p className="text-4xl  font-extrabold">Afarmer</p>
              <p className="text-xs text-gray-400">
                Finding the right apartment
              </p>
            </div>
          </div>
          <div className="py-8">
            {" "}
            <p className="text-3xl mb-3 font-semibold">
              Christmas special
            </p>{" "}
            <p className="text-6xl font-bold">25% off</p>
          </div>
          <div>
            <div className="mb-7 border rounded-md bg-[#EA2027] h-12 w-80">
              {" "}
              <p className="text-center mt-3 text-white font-medium">
                UPGRADE YOUR ROOM
              </p>
            </div>
          </div>
        </div>
        {/* fifth card starts from here  */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0"></div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                <span className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 9c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 10.5C19.85 14.57 16.42 18 12 18s-7.85-3.43-9-7.5L3 10l3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3z"
                    ></path>
                  </svg>
                  Get in Touch
                </span>
              </h2>
              <p className="text-gray-600 mb-4">
                <span className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 9c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 10.5C19.85 14.57 16.42 18 12 18s-7.85-3.43-9-7.5L3 10l3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3z"
                    ></path>
                  </svg>
                  Feel free to reach out to us for any inquiries or questions.
                </span>
              </p>
              <div className="mt-4">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  <span className="text-gray-600">
                    123 Street, City, Country
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    className="h-5 w-5 text-gray-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  <span className="text-gray-600">contact@example.com</span>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    className="h-5 w-5 text-gray-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  <span className="text-gray-600">+1234567890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fifth card starts from here  */}
      </div>
    </>
  );
};
export default Card;
