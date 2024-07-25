export default function Footer({ setShowModel }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>The Mars Image Fake</h2>
        <h1>LIES OF THE GOVERMENT</h1>
        <button
          onClick={() => {
            setShowModel(true);
          }}
        >
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </footer>
  );
}
