import "./styles.css";
import { qgl, useMutation, useQuery } from "@apollo/client";
import Header from "../src/Header/Header";
import Links from "../src/Links/Links";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Links />
    </div>
  );
}
