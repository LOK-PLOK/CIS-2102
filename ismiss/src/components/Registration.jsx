/**
 * 
 * Registration form
 * create a form with 10 input fiealds. all fields are required
 * create a state object to store the form data
 * create a function to handle form submission
 * this will just console log the entore state object
 */

import { useState } from "react"
const Registration = () =>{
    const [userForm, setUserForm] = useState({})
    const handleChange = (e) =>{
        const {name, value} = e.target
        console.log(userForm)
        setUserForm({
                ...userForm,
                [name]: value,       
            }
        )
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(userForm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >First Name: <input requiredtype="text"name = "Firstname" onChange={handleChange}/> </label>
                <br />

                <label > Last Name: <input required type="text" name = "Lastname" onChange={handleChange}/> </label>
                <br />

                <label >Address Name: <input required type="text" name = "Address" onChange={handleChange} /> </label>
                <br />

                <label > Student ID:  <input required type="text" name = "ID" onChange={handleChange} /> </label>
                <br />

                <label > Student Gmail:  <input required type="text" name = "Email" onChange={handleChange} /> </label>
                <br />

                <label > Course: <input required type="text" name = "Course" onChange={handleChange} /> </label>
                <br />

                <label >Year level: <input required type="text" name = "YearLevel" onChange={handleChange} /> </label>
                <br />

                <label > Favorite subject:  <input required type="text" name = "FavSubject" onChange={handleChange} /> </label>
                <br />

                <label > Favorite Teacher:  <input required type="text" name = "FavTeacher" onChange={handleChange} /> </label>
                <br />

                <label > Favorite friend:  <input required type="text" name = "FavFriend" onChange={handleChange} />
                </label> <br />
                
                <input type="submit" />
            </form>
        </div>
    )
}

export default Registration