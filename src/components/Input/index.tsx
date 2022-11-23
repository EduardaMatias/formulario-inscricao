import * as S from "./styles";
import "font-awesome/css/font-awesome.min.css";

type props = {
  placeholder?: string;
  type?: string;
  handleOnChange: (e: any) => void;
};

function Input({ placeholder, type, handleOnChange }: props) {
  return (
    <>
      <S.Input
        placeholder={placeholder}
        type={type}
        onChange={handleOnChange}
      />
    </>
  );
}

export default Input;
