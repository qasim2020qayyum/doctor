import React from 'react'
import Tabledata from './Tabledata';
import PatientInfo from './PatientInfo';


function Info(values){
    return (
        <PatientInfo
            prefixS={values.Prefix}
            nameS={values.Name}
            DOBS={values.DOB}
            SexS={values.Sex}
            AddressS={values.Address}
            PhoneS={values.Phone}
            FamilyDocS={values.FamilyDoc}
            BloodTypeS={values.BloodType}
            EthnicityS={values.Ethnicity}
            AllergiesS={values.Allergies}
            PrescriptionsS={values.Prescriptions}
            NotesS={values.Notes}
        />
    )
}
const PatientInfo_one = () => {
  return (
      <>
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

      <table class="table">
  <tbody>
    
<td>
      {Tabledata.map(Info)}
</td>
      </tbody>
      </table>
    </>
  )
}

export default PatientInfo_one