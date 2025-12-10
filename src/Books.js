import React from 'react';
import { useParams } from 'react-router-dom';

function Books(){
    const { bookname } = useParams();
    return React.createElement('h1', null, `Book: ${bookname}`);
}

export default Books;