import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button style={{ padding: 16 }} onClick={() => navigate("/book-list")}>
        Go to Book list
      </button>
    </div>
  );
}

export default Home;
