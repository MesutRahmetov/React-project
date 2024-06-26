import "../../style/navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>Wallet</h3>
      <div className="sign">
        <button>Sign up</button>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
