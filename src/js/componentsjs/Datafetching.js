import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {FaMapMarkerAlt,FaEnvelope,FaPhone, FaUser,FaToolbox} from 'react-icons/fa';

function Datafetching() {
    const [loading, setLoading] = useState(true);
    const [worker, setWorker] = useState(null);
    const [title, setTitle] = useState('name');
    const [value, setValue] = useState('randome person');
    //const [workers, setWorkers] = useState([]);
    const defaultI = 'https://www.randomuser.me/api/portraits/men/75.jpg';
    const url = 'https://www.randomuser.me/api/';

    //const url ='http://localhost:8000/api/v1/tours/';
    
    //Using fetch
    /* const getWorker = async() =>{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.data.data[0]);
    }  */

     const getWorker = () =>{
         //axios.get('http://localhost:8000/api/v1/tours/').
         axios.get(url).then(res =>{
            const data = res.data;
            const worker = data.results[0];
            const {phone, email , gender} = worker;
            const {large: image} = worker.picture;
            //const {password} = worker.login;
            //or
            const {login:{password}} = worker;
            const {first, last} = worker.name;
            const {age} = worker.dob;//or const {dob:{age}} = worker;
            //const {street:{number, name}} = worker.location;
            const {city} = worker.location;
            const newWorker = {image, phone, email,gender, password, age, city,
            name:`${first} ${last}`, }
            setWorker(newWorker);
            setLoading(false);
            setTitle('name');
            setValue(newWorker.name);
           
        })
        .catch(err => {
            console.log(err)
        })
        
    } 

    useEffect(() => {
     getWorker();
     //using axios
    
    },[]);

    const handleValue = (e) =>{
        if(e.target.classList.contains('values-list__icon')){
              const newValue = e.target.dataset.label;
              setTitle(newValue)
              setValue(worker[newValue]);
        }
    }
    return ( 
        <>
            <main >
                <div className="block">
                   <div className="container">
                        <img src={(worker && worker.image) || defaultI} alt='rando worker' className='container__img' />
                        <p className='container__worker-title'>my {title} is </p>
                        <p className='container__worker-value'>{value}</p>
                        <div className='values-list'>
                            <button className='values-list__icon' data-label="name" onMouseOver={handleValue}><FaUser/></button>
                            <button className='values-list__icon' data-label="gender" onMouseOver={handleValue}><FaToolbox/></button>
                            <button className='values-list__icon' data-label="city" onMouseOver={handleValue}><FaMapMarkerAlt/></button>
                            <button className='values-list__icon' data-label="email" onMouseOver={handleValue}><FaEnvelope/></button>
                            <button className='values-list__icon' data-label="phone" onMouseOver={handleValue}><FaPhone/></button>
                        </div>
                        <button className='container__btn' type='button' onClick={getWorker}>
                            {loading ? 'loading...' : 'random worker'}
                        </button>
                   </div>
                </div>
                <div className="block">
                   <div className="container">
                        <img src={(worker && worker.image) || defaultI} alt='rando worker' className='container__img' />
                        <p className='container__worker-title'>my {title} is </p>
                        <p className='container__worker-value'>{value}</p>
                        <div className='values-list'>
                            <button className='values-list__icon' data-label="name" onMouseOver={handleValue}><FaUser/></button>
                            <button className='values-list__icon' data-label="gender" onMouseOver={handleValue}><FaToolbox/></button>
                            <button className='values-list__icon' data-label="city" onMouseOver={handleValue}><FaMapMarkerAlt/></button>
                            <button className='values-list__icon' data-label="email" onMouseOver={handleValue}><FaEnvelope/></button>
                            <button className='values-list__icon' data-label="phone" onMouseOver={handleValue}><FaPhone/></button>
                        </div>
                        <button className='container__btn' type='button' onClick={getWorker}>
                            {loading ? 'loading...' : 'random worker'}
                        </button>
                   </div>
                </div>
                <div className="block">
                   <div className="container">
                        <img src={(worker && worker.image) || defaultI} alt='rando worker' className='container__img' />
                        <p className='container__worker-title'>my {title} is </p>
                        <p className='container__worker-value'>{value}</p>
                        <div className='values-list'>
                            <button className='values-list__icon' data-label="name" onMouseOver={handleValue}><FaUser/></button>
                            <button className='values-list__icon' data-label="gender" onMouseOver={handleValue}><FaToolbox/></button>
                            <button className='values-list__icon' data-label="city" onMouseOver={handleValue}><FaMapMarkerAlt/></button>
                            <button className='values-list__icon' data-label="email" onMouseOver={handleValue}><FaEnvelope/></button>
                            <button className='values-list__icon' data-label="phone" onMouseOver={handleValue}><FaPhone/></button>
                        </div>
                        <button className='container__btn' type='button' onClick={getWorker}>
                            {loading ? 'loading...' : 'random worker'}
                        </button>
                   </div>
                </div>
            </main>
              
        </>
      
    )
}

export default Datafetching
