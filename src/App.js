import { Navbar } from "./components/index";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
}
