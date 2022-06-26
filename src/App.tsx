import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { CharacterCounter } from "./components/CharacterCounter";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
