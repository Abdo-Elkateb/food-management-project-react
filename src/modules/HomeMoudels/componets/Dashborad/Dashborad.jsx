import React from 'react'
import Header from '../../../sharedModule/Components/Header/Header'
import Vector from "/src/assets/images/eating vegan food-rafiki.png";

export default function Dashborad() {
  return (
    <div>
  <Header title="welcome" description="This is a welcoming screen for the entry of the application , you can now see the options" urlImg={Vector}/>
    </div>
  )
}
