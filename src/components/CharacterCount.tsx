import { useRecoilValue } from "recoil";
import { charCountState } from "../recoil/state";

export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};
