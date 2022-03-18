import "./styles.css";
import { qgl, useMutation, useQuery } from "@apollo/client";
import LinkHeader from "../src/LinkHeader/LinkHeader";
import Links from "../src/Links/Links";
import Header from "../src/Header/Header";
import { useState } from "react";
export default function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  return (
    <div className="App">
      <Header />
      <LinkHeader originalUrl={originalUrl} setOriginalUrl={setOriginalUrl} />
      <Links />
    </div>
  );
}
