import React from 'react';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';
import Navigation from '../../Shared/Navigation/Navigation';

function Appoinment() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Navigation />
      <AppoinmentHeader date={date} setDate={setDate} />
      <AvailableAppoinments date={date} />
    </div>
  )
}

export default Appoinment
