import { useSelector } from "react-redux";

import InputImage from "./InputBlock/InputImage";
import InputKey from "./InputBlock/InputKey";
import SubmitInputButton from "./InputBlock/SubmitInputButton";

import { Container } from "@mui/material";

import "./InputBlock.css";

export default function InputBlock() {
  const hasImg = useSelector((state) => state.input.hasImg);

  return (
    <Container sx={{ mt: "50px" }}>
      {hasImg && <InputImage />}
      <InputKey />
      <SubmitInputButton />
    </Container>
  );
}
