import url from "./url"
import {redirect} from "react-router-dom"

// Create Action for Creating 
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newCapsfood = {
        name: formData.get("name"),
        address: formData.get("address"),
        food: formData.get("food"),
        notes: formData.get("notes"),
        picture: formData.get("picture")
    }

    // make a request to create 
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCapsfood)
    })

    // redirect to the index page
    return redirect("/")
}

// Update Action for Updating 
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated 
    const updatedCapsfood = {
        name: formData.get("name"),
        address: formData.get("address"),
        food: formData.get("food"),
        notes: formData.get("notes"),
        picture: formData.get("picture")
    }

    // make a request to update
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCapsfood)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}

// Delete Action for Deleting
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete 
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}