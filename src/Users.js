import React from 'react';
import { useParams } from 'react-router-dom';

function Users(){
    const { id } = useParams();
    return React.createElement('h1', null, `User ${id}`);
}

export default Users;