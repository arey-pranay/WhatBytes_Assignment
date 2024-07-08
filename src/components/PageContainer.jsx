import React from "react";
import Sidebar from "./Sidebar";
import HTMLLogo from "@/components/assets/htmlLogo.png";
import Image from "next/image";
import ComparisonChart from "./ComparisonChart";
const PageContainer = ({ setIsModalOpen }) => {
  return (
    <div className="max-w-screen h-full flex">
      <Sidebar />{" "}
      <div className="flex flex-col px-5">
        <div className=" my-6 text-gray-500 h-8 w-full">
          <h1>Skill Test</h1>{" "}
        </div>
        <div className="flex  h-full gap-8">
          <div className="flex flex-col gap-4 w-[60%]">
            <div className=" h-24 border-1 border-gray-200 rounded-lg flex gap-8 border-2 border-gray-100  p-2 justify-between">
              <div className="flex items-center justify-between  w-full">
                <div>
                  <Image src={HTMLLogo} height={40} width={40} />
                </div>
                <div>
                  {" "}
                  <h2 className="text-lg font-bold">
                    Hyper Text Markup Language
                  </h2>
                  <p className="text-sm text-gray-700 font-semibold">
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                  </p>
                </div>

                <button
                  className="bg-indigo-900 text-white text-bold text-sm px-4 py-2 rounded hover:bg-blue-500 transition-all duration-200"
                  onClick={() => setIsModalOpen(true)}
                >
                  Update
                </button>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">Quick Statistics</h2>
              <div className="flex justify-between">
                <div className="text-center flex">
                  <div className="">
                    <div className="bg-gray-100 rounded-full h-min p-4">
                      🏆
                      {/* <Image src={HTMLLogo} height={30} width={30} /> */}
                    </div>
                  </div>

                  <div className="m-0  p-0 flex flex-col items-start pl-2">
                    <div className="text-xl font-bold">1</div>
                    <div className="text-gray-500 font-semibold text-sm">
                      YOUR RANK
                    </div>
                  </div>
                </div>
                <div className="text-center flex border-x-2 px-2 border-gray-200">
                  <div className="">
                    <div className="bg-gray-100 rounded-full h-min p-4">
                      {/* <Image src={HTMLLogo} height={30} width={30} /> */}
                      📄
                    </div>
                  </div>

                  <div className="m-0  p-0 flex flex-col items-start pl-2">
                    <div className="text-xl font-bold">30%</div>
                    <div className="text-gray-500 font-semibold text-sm">
                      PERCENTILE
                    </div>
                  </div>
                </div>{" "}
                <div className="text-center flex">
                  <div className="">
                    <div className="bg-gray-100 rounded-full h-min p-4">
                      ✅{/* <Image src={HTMLLogo} height={30} width={30} /> */}
                    </div>
                  </div>

                  <div className="m-0  p-0 flex flex-col items-start pl-2">
                    <div className="text-xl font-bold">10/15</div>
                    <div className="text-gray-500 font-semibold text-sm">
                      CORRECT ANSWERS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-white border-2 border-gray-100 rounded-lg p-4"> */}
            <ComparisonChart />
            {/* </div> */}
          </div>
          <div className="flex flex-col gap-4 w-[40%]">
            <div className="bg-white flex flex-col gap-4 border-2 border-gray-100 rounded py-6 px-8">
              <h2 className=" font-bold mb-4">Syllabus Wise Analysis</h2>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span>HTML Tools, Forms, History</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-2 flex w-5/6 bg-blue-100 rounded">
                      <div
                        className="h-full bg-blue-500 rounded"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                    <p className="text-blue-500 font-bold">80%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span>Tags & References in HTML</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-2 flex w-5/6 bg-orange-100 rounded">
                      <div
                        className="h-full bg-orange-500 rounded"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <p className="text-orange-500 font-bold">60%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span>Tags & References in HTML</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-2 flex w-5/6 bg-red-100 rounded">
                      <div
                        className="h-full bg-red-500 rounded"
                        style={{ width: "24%" }}
                      ></div>
                    </div>
                    <p className="text-red-500 font-bold">24%</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between">
                    <span>Tables & CSS Basics</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-2 flex w-5/6 bg-gray-200 rounded">
                      <div
                        className="h-full bg-green-500 rounded"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                    <p className="text-green-500 font-bold">96%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded p-4">
              <h1>Question Analysis</h1> <p>You scored 10/12 ,marks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
