import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
            <h3>category list</h3>
        </div>
    <Link to="/dash/addcategory" className='btn btn-success'> add category</Link>



    </div>
  )
}

export default Category