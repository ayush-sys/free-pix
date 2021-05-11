import React, { useEffect, useState } from 'react';
import './assets/main.css';
import Card from './components/Card';
import Search from './components/Search';


const App = () => {

    const [images,setImages] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [term,setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits);
            setLoading(false);
        })
        .catch(err => console.log(err))
    },[term]);


    return (
    <div className='container mx-auto px-4'>

        <Search searchText={text => setTerm(text)}/>

        {!isLoading && images.length === 0 && <h1 className='text-3xl text-center mx-auto mt-32'>No Images found !!</h1>}

        {isLoading ? <h1 className='text-5xl text-center mx-auto mt-32'>Loading !!</h1> :
        <div className='grid lg:grid-cols-3 lg:gap-5 md:grid-cols-2 md:gap-3 sm:grid-cols-1 sm:gap-1'>
            {images.map(image => (
                 <Card key={image.id} image={image}/>
            ))}
        </div>}

    </div>);
}
 

export default App;