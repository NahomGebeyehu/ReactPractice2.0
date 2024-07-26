export default function Footer(props) {
  const { handleToggleModal } = props;
  const { data } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>APODER PROJECT</h2>
        <h1>{data?.title}</h1>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
      </div>
    </footer>
  );
}
