import React from "react";

function ShortenedUrlsList({ shortenedUrls }: { shortenedUrls: string[] }) {
  return (
    <div>
      <h2>Shortened URLs</h2>
      <ul>
        {shortenedUrls.map((url, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShortenedUrlsList;
