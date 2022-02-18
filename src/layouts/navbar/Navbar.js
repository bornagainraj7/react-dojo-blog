import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={
          {
            color: '#fff',
            backgroundColor: '#f1356d',
            borderRadius: '15px',
            padding: '10px 20px',
          }
        }>New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;