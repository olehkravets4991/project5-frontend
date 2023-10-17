import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.name}</h1>
            <h2>{post.address}</h2>
            <h2>{post.food}</h2>
            <h2>{post.notes}</h2>
            <h2>{post.picture}</h2>
        </Link>
    </div>
}

export default Post;