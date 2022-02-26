import { useDispatch } from "react-redux";
import { actions } from "../../store/main";

export default function UseDemoButton({ index }) {
  const dispatch = useDispatch();

  const handleSelectDemo = () => {
    dispatch(actions.input.selectDemo({ index: index }));
  };

  return <button onClick={handleSelectDemo}>Example chord {index}</button>;
}
