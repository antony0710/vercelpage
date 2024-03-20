import React, { useEffect, useState } from 'react';

const DateTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, []);

    return <div>{date.toLocaleString()}</div>;
};

export default DateTime;