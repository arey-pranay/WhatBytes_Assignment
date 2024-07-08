import React, { useState } from "react";

export default function Modal({
  setIsModalOpen,
  isOpen,
  onClose,
  rank,
  percentile,
  correctAns,
  setRank,
  setPercentile,
  setCorrectAns,
}) {
  if (!isOpen) return null;

  const [tempRank, setTempRank] = useState(rank);
  const [tempPercentile, setTempPercentile] = useState(percentile);
  const [tempCorrectAns, setTempCorrectAns] = useState(correctAns);

  const handleRankChange = (e) => {
    setTempRank(e.target.value);
  };

  const handlePercentileChange = (e) => {
    setTempPercentile(e.target.value);
  };

  const handleScoreChange = (e) => {
    setTempCorrectAns(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Update scores</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setRank(tempRank);
            setPercentile(tempPercentile);
            setCorrectAns(tempCorrectAns);
            setIsModalOpen(false);
          }}
        >
          <div className="mb-4">
            <label htmlFor="rank" className="block mb-2">
              Update your Rank
            </label>
            <input
              type="number"
              id="rank"
              name="rank"
              className="border p-2 w-full rounded"
              defaultValue={rank}
              onChange={handleRankChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="percentile" className="block mb-2">
              Update your Percentile
            </label>
            <input
              type="number"
              id="percentile"
              name="percentile"
              className="border p-2 w-full rounded"
              defaultValue={percentile}
              onChange={handlePercentileChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="score" className="block mb-2">
              Update your Current Score (out of 15)
            </label>
            <input
              type="number"
              id="score"
              name="score"
              className="border p-2 w-full rounded"
              defaultValue={correctAns}
              onChange={handleScoreChange}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
