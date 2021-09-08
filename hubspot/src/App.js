import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ data: [] });
  const [sessionUser, setSessionUser] = useState({ sessionUser: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=d06ad6ffc0a84c0ece6ba30be671"
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  let { events } = data;

  let displayedInfo =
    events &&
    events.length > 0 &&
    events.map(info => {
      let { url, visitorId, timestamp } = info;

      return (
        <ul>
          <li>User Id: {visitorId}</li>
          <li>TimeStamp: {timestamp}</li>
          <li>Pages: {url}</li>
          <li>Start Time: {timestamp}</li>
        </ul>
      );
    });

  return (
    <>
      {displayedInfo}
    </>
  );
}

export default App;
