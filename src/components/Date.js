
    import React from "react";
    import { DateRangePicker } from "materialui-daterange-picker";

    const MaterialUIDateRange = () => {

    const [open, setOpen] = React.useState(true)

    const toggle = () => {
        setOpen(open)
    }

    const getDateRange = (date) => {
        console.log( date.startDate, date.endDate)
    }

    return (
        <div>
        <h2>MaterialUIDateRange</h2>
        <DateRangePicker toggle={toggle} open={open} onChange={(date) => getDateRange(date)}/>
        </div>
    );
    };

    export default MaterialUIDateRange;