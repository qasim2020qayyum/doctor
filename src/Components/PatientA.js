import React, { useState } from 'react'
import Navbar from './Navbar';
import Tabledata from './Tabledata'


const allCatValues = [...new Set(Tabledata.map((curElem)=> curElem.category))];

const PatientA = () => {
    const [items, setItems]= useState(Tabledata);
    const [catItems, setCatItems] = useState(allCatValues);
    const filterData = (category) => {
        const updatedItems = Tabledata.filter((curElem) => {
          return curElem.category === category;
        });
    
        setItems(updatedItems);
      };
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
          {
              items.map((elem) => {
                  const { id, DOB, Sex, Address, Phone, FamilyDoc, BloodType, Ethnicity, Allergies, Prescriptions } = elem;
            return(

        <div className="currentPatient" key={id}>
    <h5>Birthdate: {DOB} </h5>
    <h5>Sex: {Sex} </h5>
    <h5>Address:{Address}</h5>
    <h5>Phone#: {Phone} </h5>
    <h5>Family Doctor:{FamilyDoc }</h5>
    <h5>Blood Type:{BloodType}</h5>
    <h5>Ethnicity:{Ethnicity}</h5>
    <h5>Allergies:{Allergies}</h5>
    <h5>Prescriptions:{Prescriptions}</h5>
    <h5>Coverage: OHIP</h5>
    </div>
            );
          }
    )};
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
            <Navbar/>

            <table class="table">
      <thead>
      <th scope="col">Prefix</th>
      <th scope="col">Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Sex</th>
      <th scope="col">Address</th>
      <th scope="col">Phone #</th>
      <th scope="col">Family Doctor</th>
      <th scope="col">Blood Type</th>
      <th scope="col">Ethnicity</th>
      <th scope="col">Allergies</th>
      <th scope="col">Prescriptions</th>
      <th scope="col">Notes</th>
  </thead>
  </table>
            {
              items.map((elem) => {
                  const { id,Prefix, Name, DOB, Sex, code, Address, Phone, FamilyDoc, BloodType, Ethnicity, Allergies, Prescriptions, Notes } = elem;
            return(

                <table class="table">
  <tbody>
    <tr>
      <td scope="row">{Prefix}</td>
      {
            catItems.map((curClem, index )=>{
              return <>
      <td>
            <button
              className="button-class"
            //   key={index}
              onClick={() => filterData(curClem)}
                >
                {Name}
                </button>
      </td>
              </>
            
            })
          }
      <td>{DOB}</td>
      <td>{Sex}</td>
      <td>{Address}</td>
      <td>{Phone}</td>
      <td>{FamilyDoc}</td>
      <td>{BloodType}</td>
      <td>{Ethnicity}</td>
      <td>{Allergies}</td>
      <td>{Prescriptions}</td>
      <td>{Notes}</td>
    </tr>
  </tbody>

      </table>
      );
          }
    )};
</>
  )
}

export default PatientA