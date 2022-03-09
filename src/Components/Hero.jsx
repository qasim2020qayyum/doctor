import React from 'react'

const Hero = () => {
  return (
<>
<div className="hero">
    
<div className="hero1">
    <div className="title1">
        <h3 className='titleHead'>Diagnosis/Diseases</h3>
        </div>
        <div className="detail1">
            <div className="date">Date</div>
            <div className="diagnosis">Diagnosis</div>
            <div className="severity">Severity</div>
            <div className="source">Source</div>
            </div>
    </div>
    <div className="hero2">
        <div className="currentPatient">
    <h5>Birthdate:</h5>
    <h5>Sex:</h5>
    <h5>Address:</h5>
    <h5>Phone#:</h5>
    <h5>Family Doctor:</h5>
    <h5>Blood Type:</h5>
    <h5>Ethnicity:</h5>
    <h5>Allergies:</h5>
    <h5>Prescriptions:</h5>
    <h5>Coverage:</h5>
    </div>
    <div className="icons">
        <p className='reminder'>Send Reminders</p>
        <p className='record'>Edit Records</p>
        <p className='call'>Call</p>
        <p className='message'>Message</p>
        </div>
        </div>
        <div className="hero1">
        <div className="title1">
        <h3>Hospitilization/Treatments</h3>
        </div>
        <div className="detail1">
        <div className="date">Date</div>
            <div className="diagnosis">Diagnosis</div>
            <div className="severity">Severity</div>
            <div className="procedure">Procedure</div>
            <div className="provider">Provider</div>
            <div className="quantity">Quantity</div>
          
            </div>
            </div>
            </div>
</>
  )
}

export default Hero