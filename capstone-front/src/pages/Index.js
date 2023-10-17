import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const capsfood = useLoaderData()

     // map over the todos and create a Post component for each todo
     return <>
     <div style={{textAlign: "center"}}>
         <h2>Create a Restaurant</h2>
         <Form method="post" action="/create">
             <input type="text" name="name" placeholder="Name"/>
             <input type="text" name="address" placeholder="Address"/>
             <input type="text" name="food" placeholder="Food"/>
             <input type="text" name="notes" placeholder="Notes"/>
             <input type="text" name="picture" placeholder="Picture"/>
             <button>Create a new Restaurant</button>
         </Form>
     </div>
     {capsfood.map((capsfood) => <Post key={capsfood.id} post={capsfood}/>)}
     </>
}

export default Index;