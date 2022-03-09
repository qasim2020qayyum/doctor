import React from 'react'

const PatientInfo = (props) => {
  return (
 <>
 <table class="table">
  <tbody>
    <tr>
      <td scope="row">{props.prefixS}</td>
      <td>{props.nameS}</td>
      <td>{props.DOBS}</td>
      <td>{props.SexS}</td>
      <td>{props.AddressS}</td>
      <td>{props.PhoneS}</td>
      <td>{props.FamilyDocS}</td>
      <td>{props.BloodTypeS}</td>
      <td>{props.EthnicityS}</td>
      <td>{props.AllergiesS}</td>
      <td>{props.PrescriptionsS}</td>
      <td>{props.NotesS}</td>
    </tr>
  </tbody>
</table>
 
 </>
  )
}

export default PatientInfo;