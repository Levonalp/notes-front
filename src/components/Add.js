import { useState } from 'react'

const Add = (props) => {

  let createNote = {
  notes:''
  }

  const [notes, setNote] = useState(createNote)

  const handleChange = (e) => {
    setNote({ ...notes, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreate(notes)
  }



  return (
    <>
        <div className='form'>
        <form onSubmit={handleSubmit} className='bg-white rounded-lg shadow-md p-6'>
          <label htmlFor="notes" className='block font-bold text-lg mb-2'>Note: </label>
          <input type="text" name="notes" placeholder='Add note' onChange={handleChange} className='appearance-none rounded-lg w-full py-2 px-5 leading-tight focus:outline-none focus:shadow-outline-blue-500' />
          <input type="submit" className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full' />
        </form>
      </div>
    </>
  )

}

export default Add