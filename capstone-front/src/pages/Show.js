import { Link, useLoaderData, Form } from "react-router-dom";
import '../index.css';

function Show(props) {
  const post = useLoaderData();

  return (
    <div className="show-container">
      <div className="show-content">
        <h1>{post.name}</h1>
        <h2>{post.address}</h2>
        <h2>{post.food}</h2>
        <h2>{post.notes}</h2>
        <img src={post.picture} alt={post.brands} className="show-image" />
      </div>
      <div className="show-update">
        <h2>Update Restaurant</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <div className="update-input">
            <label>Name:</label>
            <input 
              className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm"
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={post.name}
            />
          </div>
          <div className="update-input">
            <label>Address:</label>
            <input
              className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-blue-900 shadow-sm"
              type="text"
              name="address"
              placeholder="Address"
              defaultValue={post.address}
            />
          </div>
          <div className="update-input">
            <label>Food:</label>
            <input
              className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-red-900 shadow-sm"
              type="text"
              name="food"
              placeholder="Food"
              defaultValue={post.food}
            />
          </div>
          <div className="update-input">
            <label>Notes:</label>
            <input
              className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-yellow-900 shadow-sm"
              type="text"
              name="notes"
              placeholder="Notes"
              defaultValue={post.notes}
            />
          </div>
          <div className="update-input">
            <label>Picture:</label>
            <input
              className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-pink-900 shadow-sm"
              type="text"
              name="picture"
              placeholder="Picture"
              defaultValue={post.picture}
            />
          </div>
          <button className='w-full py-1 rounded-md mx-1.5  mb-5 bg-blue-900 hover:bg-blue-600 transform scale-105 transition-transform duration-300'>Update Restaurant</button>
        </Form>
      </div>
      <div className="show-delete">
        <h2>Delete Restaurant</h2>
        <Form method="post" action={`/delete/${post.id}`}>
          <button className='w-full py-1 rounded-md mx-1.5  mb-5 bg-blue-900 hover:bg-blue-600 transform scale-105 transition-transform duration-300'>Delete Restaurant</button>
        </Form>
      </div>
      <Link to="/">Back to Index</Link>
    </div>
  );
}

export default Show;
