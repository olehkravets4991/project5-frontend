import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.address}</h2>
      <h2>{post.food}</h2>
      <h2>{post.notes}</h2>
      <h2>{post.picture}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update Restaurant</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            defaultValue={post.address}
          />
          <input
            type="text"
            name="food"
            placeholder="Food"
            defaultValue={post.food}
          />
          <input
            type="text"
            name="notes"
            placeholder="Notes"
            defaultValue={post.notes}
          />
          <input
            type="text"
            name="picture"
            placeholder="Picture"
            defaultValue={post.picture}
          />
          <button>Update Restaurant</button>
        </Form>
        <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Restaurant</button>
        </Form>
      </div>
      <Link to="/">Back to Index</Link>
    </div>
  );
}

export default Show;