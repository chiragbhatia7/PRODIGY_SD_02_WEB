import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/leaderboard")
      .then((response) => {
        setLeaderboard(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard:", error);
      });
  }, []);

  // Function to format date in a more readable format
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  return (
    <div className="App bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 lg:p-16">
      <h1 className="text-3xl font-bold mb-8">DigitDuel - Leaderboard</h1>
      <div className="w-full overflow-x-auto">
        <table className="border-collapse border w-full table-auto">
          <thead className="bg-gray-800">
            <tr>
              <th className="border px-4 py-2 text-center">Rank</th>
              <th className="border px-4 py-2 text-center">Player Name</th>
              <th className="border px-4 py-2 text-center">Attempts</th>
              <th className="border px-4 py-2 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((player, index) => (
              <tr key={player._id} className="bg-gray-700">
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-center">
                  {player.playerName}
                </td>
                <td className="border px-4 py-2 text-center">
                  {player.attempts}
                </td>
                <td className="border px-4 py-2 text-center">
                  {formatDate(player.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
