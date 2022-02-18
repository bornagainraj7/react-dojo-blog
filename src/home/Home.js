const Home = () => {

  const onClick1 = (e) => {
    console.log('Hello World', e);
  };

  const onClick2 = (name, e) => {
    console.log('Hello', name);
    console.log(e);
  };
  return (
    <div className="home">
      <h1>Welcome</h1>
      <button onClick={onClick1}>Click One</button>
      <button onClick={(e) => onClick2('Maria', e)} style={{ marginLeft: '5px' }}>Click Two</button>
    </div>
  );
}

export default Home;