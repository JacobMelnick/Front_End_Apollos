import "./styles.css";
import { qgl, useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import Header from "../src/Header/Header";
export default function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
