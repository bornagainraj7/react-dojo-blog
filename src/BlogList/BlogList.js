import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

  // const { blogs } = props;
  // const { title } = props;


  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      { blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>written by { blog.author }</p>
          </Link>

          {/* <button type="button" onClick={() => onDelete(blog.id)}>Delete</button> */}
          <br />
          {/* <p>{ blog.body }</p> */}
        </div>
      )) }
    </div>
  );
}

 
export default BlogList;