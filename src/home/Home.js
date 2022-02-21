import useFetchData from "../useFetchData";
import BlogList from "../BlogList/BlogList";
import './Home.css'

const Home = () => {

  // let name = 'John';
  // const [name, setName] = useState('John');
  // const [age, setAge] = useState(25);

  // const onClick1 = (e) => {
  //   console.log('Hello World', e);
  //   setAge(30);
  // };

  // const onClick2 = (name, e) => {
  //   console.log('Hello', name);
  //   console.log(e);
  //   setName(name);
  // };

  // const blogList = [
  //   { title: 'My new website', body: 'lorem ipsum dolor sit amet...', author: 'John', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum dolor sit amet...', author: 'James', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum dolor sit amet...', author: 'Peter', id: 3 },
  //   { title: 'John\'s second blog post', body: 'lorem ipsum dolor sit amet...', author: 'John', id: 4 },
  // ];

  // const [name, setName] = useState('John');

  // const onDelete = (id) => {
  //   const updatedBlogs = blogs.filter((blog) => blog.id !== id)
  //   setBlogs(updatedBlogs);
  // }

  // useEffect(() => {
  //   console.log('use effect');
  // }, [name]);

  const { loading, error, data: blogs } = useFetchData('http://localhost:8000/blogs');


  return (
    <div className="home">
      {/* <h1>Welcome</h1>
      <p style={ { margin: '20px' } }>{ name } is { age } years</p>
      <button onClick={onClick1}>Change Age</button>
      <button onClick={(e) => onClick2('James', e)} style={{ marginLeft: '5px' }}>Change Name</button> */}
      { error && <div><h3>{ error }</h3></div> }

      { loading && <div> <h3>Loading...</h3> </div> }

      { blogs && <BlogList blogs={ blogs } title = 'All Blogs!' ></BlogList> }
      {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'John') } title = "John's Blogs!" delete={ onDelete }></BlogList> */}
      {/* <button type="button" onClick={ () => setName('James') }>Change Name</button> */}
    </div>
  );
}

export default Home;