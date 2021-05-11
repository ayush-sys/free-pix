import React from 'react';
import Tag from './Tag';

const Card = (props) => {

    const tags = props.image.tags.split(',');

    return (         
    <div className='max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl'>
        <img src={props.image.webformatURL} alt='' className='w-full' />
    
        <div className='px-6 py-4'>
            <div className='font-semibold text-xl mb-2 text-blue-500'>
            Photo by {props.image.user}
            </div>
            <ul>
                <li><span className='font-medium '>Views: </span>{props.image.views}</li>
                <li><span className='font-medium '>Downloads: </span>{props.image.downloads}</li>
                <li><span className='font-medium '>Likes: </span>{props.image.likes}</li>
            </ul>
        </div>

        <div className='px-6 py-4'>
            {tags.map(tag => (
                <Tag tagName={tag} />
            ))}
        </div>
    </div> 
);
}
 
export default Card;