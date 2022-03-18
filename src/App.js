import "./styles.css";
import { qgl, useMutation, useQuery } from "@apollo/client";
import LinkHeader from "../src/LinkHeader/LinkHeader";
import Links from "../src/Links/Links";
import Header from "../src/Header/Header";
import { useState } from "react";
export default function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  return (
    <div className="App">
      <Header />
      <LinkHeader
        longUrl={longUrl}
        setLongUrl={setLongUrl}
        shortUrl={shortUrl}
        setShortUrl={setShortUrl}
        originalUrl={originalUrl}
        setOriginalUrl={setOriginalUrl}
      />
      <Links shortUrl={shortUrl} longUrl={longUrl} />
    </div>
  );
}
