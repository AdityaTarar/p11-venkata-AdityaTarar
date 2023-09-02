import React, { useState } from "react";
import { shortenUrl } from "./api";

function Home({ addShortenedUrl }: { addShortenedUrl: (url: string) => void }) {
  const [longUrl, setLongUrl] = useState<string>("");
  const [shortening, setShortening] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShortening(true);
    try {
      const shortenedUrl = await shortenUrl(longUrl);
      addShortenedUrl(shortenedUrl);
      setLongUrl("");
    } catch (error) {
      console.error("Error shortening URL:", error);
    } finally {
      setShortening(false);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL to shorten"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button type="submit" disabled={shortening}>
          {shortening ? "Shortening..." : "Shorten"}
        </button>
      </form>
    </div>
  );
}

export default Home;
