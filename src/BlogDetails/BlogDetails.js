import { useParams, useHistory } from 'react-router-dom';
import useFetchData from '../useFetchData';
import './BlogDetails.css';
const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, loading, error } = useFetchData(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  const onDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    })
    .then((res) => {
      console.log(res.status + ' ' + res.statusText);
      history.push('/');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="blog-details">
      { error && <div><h3>{ error }</h3></div> }

      { loading && <div> <h3>Loading...</h3> </div> }

      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>written by { blog.author }</p>
          <div>{ blog.body }</div>
          <br />
          <button type='button' onClick={ onDelete }>Delete</button>
        </article>
      ) }
    </div>
  );
}
 
export default BlogDetails;