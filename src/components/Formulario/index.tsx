import * as S from "./styles";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "@fortawesome/fontawesome-svg-core";
import Loading from "../Loading";

function Formulario() {
  const [fieldValues, setFieldValues] = useState({ nome: "", email: "" });
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      fieldValues.nome.length <= 3 ||
      fieldValues.email == "" ||
      !regex.test(fieldValues.email)
    ) {
      toast.error("Preencha todos os campos", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
        autoClose: 3000,
      });
    } else {
      setLoading(true);
      const templateParams = {
        to_name: fieldValues.nome,
        to_email: fieldValues.email,
      };
      emailjs
        .send(
          "service_foyg5bg",
          "template_m91pq7d",
          templateParams,
          "z46WEkNQeE6PGSv3W"
        )
        .then(() => {
          toast.success("Inscrição feita! Confira seu email", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark",
            autoClose: 3000,
          });
          setFieldValues({ nome: "", email: "" });
          setLoading(false);
        });
    }
  }
  return (
    <S.Wrapper>
      <S.Container>
        <svg
          width="50"
          height="24"
          viewBox="0 0 80 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11.5436" cy="11.5436" r="11.5436" fill="#E42D16" />
          <circle cx="40" cy="11.5436" r="11.5436" fill="#E7AE68" />
          <circle cx="68.4564" cy="11.5436" r="11.5436" fill="#84AF80" />
        </svg>
        <S.Title>Inscreva-se gratuitamente</S.Title>
        <S.WrapperInputs>
          <Input
            placeholder="Nome"
            handleOnChange={(e: any) =>
              setFieldValues({ ...fieldValues, nome: e.target.value })
            }
            value={fieldValues.nome}
          />
          <Input
            placeholder="Email"
            type="email"
            handleOnChange={(e: any) =>
              setFieldValues({ ...fieldValues, email: e.target.value })
            }
            value={fieldValues.email}
          />
        </S.WrapperInputs>
        <S.WrapperButtons>
          <Button
            handleOnClick={() => {
              handleSubmit();
            }}
            isLoading={loading}
          >
            <>{loading == true ? <Loading /> : "Enviar"}</>
          </Button>
        </S.WrapperButtons>
      </S.Container>
    </S.Wrapper>
  );
}

export default Formulario;
