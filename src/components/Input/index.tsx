import * as S from "./styles";
import "font-awesome/css/font-awesome.min.css";

type props = {
  placeholder?: string;
  type?: string;
  handleOnChange: (e: any) => void;
  value?: string
};

function Input({ placeholder, type, handleOnChange, value }: props) {
  return (
    <>
      <S.Input
        placeholder={placeholder}
        type={type}
        onChange={handleOnChange}
        value={value}
      />
    </>
  );
}

export default Input;
