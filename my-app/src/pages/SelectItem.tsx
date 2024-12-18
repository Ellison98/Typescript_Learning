import React from 'react';
import SelectChatRoom from './SelectChatRoom';

const SelectItem = () => {
    const [value, setValue] = React.useState('study');

    return (
        <div>
            <select onChange={(e) => setValue(e.target.value)} value={value}>
                <option value="study">Study</option>
                <option value="running">Running</option>
                <option value="swimming">Swimming</option>
            </select>
            <SelectChatRoom value={value}/>
        </div>
    )
};

export default SelectItem;