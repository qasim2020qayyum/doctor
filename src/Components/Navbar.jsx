import React from 'react'

const Navbar = () => {
  return (
<>
<div className="navbar">
    <div className="patient-title"><h4>Patient Directory</h4></div>
    <div className="search">

        <input type="text" placeholder='Search' className='search' />
        </div>

        <div className="filter">Filter</div>
    
    </div>
</>
  )
}

export default Navbar