import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px 10px",
        width: "30%", // Set the width to 30% for each post
        display: "inline-block", // Display posts in a line
        verticalAlign: "top", // Align posts at the top
    }


    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.name}</h1>
            <h2>{post.address}</h2>
            <h2>{post.food}</h2>
            <h2>{post.notes}</h2>
            <img src={post.picture} alt="Food"/>
        </Link>
    </div>
}

export default Post;