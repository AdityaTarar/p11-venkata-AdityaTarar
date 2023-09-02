import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ShortenedUrlsList from "./Pages/ShortenedUrlsList";

function App() {
  const [shortenedUrls, setShortenedUrls] = useState<string[]>([]);

  const addShortenedUrl = (url: string) => {
    setShortenedUrls([...shortenedUrls, url]);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" element={<Home addShortenedUrl={addShortenedUrl} />} />
      <Route path="/contact" element={<div>Contact Us Page</div>} />

      <ShortenedUrlsList shortenedUrls={shortenedUrls} />
    </Router>
  );
}

export default App;
