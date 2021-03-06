import React, { useState } from 'react';

const Search = (props) => {

    const [text,setText] = useState('');

    const submitText = (e) => {
        e.preventDefault();
        props.searchText(text);
    }

    return (  
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form className='w-full max-w-sm' onSubmit={submitText}>
                <div className='flex items-center border-b border-b-2 border-blue-500 py-2'>
                <input onChange={e => setText(e.target.value)} className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type="text" placeholder="Search Image" />
                <button className='flex-shrink-0 bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-sm border-4 text-white py-1 px-2 rounded' type="submit">
                    Search
                </button>
                </div>
            </form>
        </div>
    );
}
 
export default Search;