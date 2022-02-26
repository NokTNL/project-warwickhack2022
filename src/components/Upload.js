export default function Upload() {


  return (
    <div>
      <form onSubmit={{ handlesubmit }}>
        <input type='file' id='image' name='file' />
        <button type='submit'>Upload</button>
      </form>
      <span>Upload Score</span>
    </div>
  );
}
