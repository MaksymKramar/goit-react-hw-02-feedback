import React from 'react';
import{Text,} from './Notification.style'

function Notification({message}) {
    return (
        <div>
            <Text>{message}</Text>
        </div>
    )
}

export default Notification
