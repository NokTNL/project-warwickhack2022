import { useDispatch } from "react-redux";
import { actions } from "../../store/main";

import Button from "@mui/material/Button";

export default function UseDemoButton({ index }) {
  const dispatch = useDispatch();

  const handleSelectDemo = () => {
    dispatch(actions.input.selectDemo({ index: index }));
  };

  return <Button onClick={handleSelectDemo}>Example chord {index}</Button>;
}
