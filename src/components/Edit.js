import React, { useState } from 'react'


const Edit = (props) => {
    const [note, setNote] = useState({ ...props.note })


    const handleChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(note)
    }


    return (
        <div className="w-1/2 mx-auto rounded-md shadow-md p-4">
          <details className="text-xl font-bold py-2 black">
            <summary>Edit</summary>
            <form onSubmit={handleSubmit} className="mt-4">
              <label htmlFor="notes" className="block font-bold mb-2">
                Note:
              </label>
              <input
                type="text"
                name="notes"
                value={note.notes}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-gray-700"
              />
              <button
                type="submit"
                className="w-full mt-4 p-2 bg-teal-500 hover:bg-teal-700 text-white font-bold rounded-lg"
              >
                Save
              </button>
            </form>
          </details>
        </div>
      );
      
}  

export default Edit

// import React, { useState } from 'react'
// const Edit = (props) => {
//   const [note, setPet] = useState({...props.pet})
//   const handleChange = (event) => {
//     setPet({ ...pet, [event.target.name]: event.target.value})
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     props.handleUpdate(pet)
//   }
//   return (
//     <>
//       <details>
//         <summary>Edit pet</summary>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name: </label>
//           <input
//             type="text"
//             name="name"
//             value={pet.name}
//             onChange={handleChange}
//           />
//           <br />
//           <br />
//           <label htmlFor="age">Age: </label>
//           <input
//             type="number"
//             name="age"
//             value={pet.age}
//             onChange={handleChange}
//           />
//           <input type="submit" />
//         </form>
//       </details>
//     </>
//   )
// }
// export default Edit