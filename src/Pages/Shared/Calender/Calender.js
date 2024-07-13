import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';

const isWeekend = (date) => {
    const day = date.day();

    return day === 5;
};

function Calender({ date, setDate }) {

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    shouldDisableDate={isWeekend}
                    onChange={newDate => {
                        setDate(newDate?.$d);
                    }}
                />
            </LocalizationProvider>
        </div>
    )
}

export default Calender