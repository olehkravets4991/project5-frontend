import Post from '../components/Post';
import { useLoaderData, Form } from 'react-router-dom';
import './Styles.css';
import '../index.css';

function Index(props) {
  const capsfood = useLoaderData();

  return (
    <div className="index-container">
      <div className="restForm">
        <h1>RestaurantDepo</h1>
        <ul classNmae="flex">
            <li className='ind1'>Login</li>
            <li className='ind1'>Best Restaurants</li>
            <li className='ind1'>I have visited</li>
            <li className='ind1'>Want to go</li>

        </ul>
        <Form method="post" action="/create">
          <fieldset className="rest-info">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
            <label>Address</label>
            <input type="text" name="address" placeholder="Address" />
            <label>Food</label>
            <input type="text" name="food" placeholder="Food" />
            <label>Notes</label>
            <input type="text" name="notes" placeholder="Notes" />
            <label>Picture</label>
            <input type="text" name="picture" placeholder="Picture" />
          </fieldset>
          <button className='w-full py-1 rounded-md mx-1.5  mb-5 bg-blue-900 hover:bg-blue-600 transform scale-105 transition-transform duration-300'>Create a new Restaurant</button>
        </Form>
      </div>

      <div className="restList">
        {capsfood.map((capsfood) => (
          <Post key={capsfood.id} post={capsfood} />
        ))}
      </div>
    </div>
  );
}

export default Index;
