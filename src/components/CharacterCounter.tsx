import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { textState } from "../recoil/state";
import { CharacterCount } from "./CharacterCount";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

export const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};
