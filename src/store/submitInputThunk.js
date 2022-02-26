export default function submitInputThunk({ file }) {
  return async (dispatch) => {
    try {
      if (!file) {
        alert("No image uploaded!");
        throw new Error("No image uploaded");
      }

      const formData = new FormData();
      formData.append("image", file);
      console.log(formData);

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
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
}
