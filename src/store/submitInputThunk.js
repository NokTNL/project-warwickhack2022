import { actions } from "./main";

export default function submitInputThunk({ file }) {
  return async (dispatch, getState) => {
    try {
      const isUsingDemo = getState().input.isUsingDemo;

      if (!file && !isUsingDemo) {
        alert("No image uploaded!");
        throw new Error("No image uploaded");
      }

      const inputKey = getState().input.key;
      if (!inputKey) {
        alert("No key input!");
        throw new Error("No key input");
      }

      dispatch(actions.output.hideOutput);

      const formData = new FormData();
      formData.append("image", isUsingDemo ? "" : file);

      const response = await fetch(
        // fake API
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PUT",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Bad response from server");
      }
      const outputData = await response.json();
      dispatch(actions.output.showOutput({ outputData }));
    } catch (err) {
      console.error(err);
    }
  };
}
