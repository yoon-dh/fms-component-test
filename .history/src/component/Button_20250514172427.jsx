const Button = ({ label, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{label}</button>
      <button onClick={onClick}>{label}</button>
    </>
  );
};

export default Button;
