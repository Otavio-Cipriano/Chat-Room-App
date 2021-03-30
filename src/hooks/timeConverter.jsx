import { useState } from "react";

export default function TimeConverter(UTCDateString) {
    const [date, setDate] = useState('');
    const language = navigator.language;
    const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };

    let newDate = new Date(UTCDateString).toLocaleString(language, options)
    setDate(newDate)

    return date;
}
