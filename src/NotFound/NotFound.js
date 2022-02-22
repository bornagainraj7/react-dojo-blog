import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <h3>Sorry we can't find this page.</h3>
      <Link to='/'>
        <button type="button" style={
          {
            padding: '10px 15px',
            borderRadius: '10px',
            color: '#fff',
            backgroundColor: '#f1356d',
            border: '0',
            marginTop: '20px',
            cursor: 'pointer',
          }
        }>Back To Home</button>
      </Link>
    </div>
  );
}
 
export default NotFound;