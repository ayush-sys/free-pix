import React from 'react';

const Tag = (props) => {
    return (
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2'>
            #{props.tagName}
        </span>
    );
}
 
export default Tag;