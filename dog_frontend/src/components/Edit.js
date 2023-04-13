
import React, { useState } from 'react'

const Edit = (props) => {
    const [dog, setDog] = useState({...props.dog})

  const handleChange = (event) => {
    setDog({ ...dog, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(dog)
  }

  return (
    <>
      <details>
        <summary>Edit Doggy Info</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={dog.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="breed">Breed: </label>
          <input
            type="text"
            name="breed"
            value={dog.breed}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="weight">Weight: </label>
          <input
            type="number"
            name="weight"
            value={dog.model}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="birthdate">Birthdate: </label>
          <input
            type="date"
            name="birthdate"
            value={dog.birthdate}
            onChange={handleChange}
          />
          <br />
          <br />
         
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit