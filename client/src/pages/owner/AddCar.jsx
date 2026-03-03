import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddCar = () => {
    
    const currency = import.meta.env.VITE_CURRENCY
    const [image, setImage] = useState(null)
    const [Car, setCar] = useState({
        brand:'',
        model:'',
        year:'',
        pricePerDay:0,
        category:'',
        transmission:'',
        fuel_type:'',
        seating_capacity:0,
        location:'',
        description:'',
       })

       const onSubmitHandler = async(e)=>{
        e.preventDefault()
       }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
        <Title title="Add New Car" subTitle="Fill in details to list a new car for
        booking, including pricing, availability, and car specifications"/>

        <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500
        text-sm mt-6 max-w-xl'>
            <div className='flex items-center gap-2 w-full'>
                <label htmlFor="car-image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" 
                    className='h-14 rounde cursor-pointer' />
                    <input type="file" id="car-image" accept='image/*' hidden onChange={e=>
                        setImage(e.target.files[0])
                    } />
                </label>
                <p className='text-sm text-gray-500'> Upload a picture of your car</p>
            </div>

            
                <div className='grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label >Brand</label>
                        <input type="text" placeholder='e.g BMW Mercedd, Audi...' required
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none
                    ' value={Car.brand} onChange={e=> setCar({...Car,brand: e.target.value})} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label >Model</label>
                        <input type="text" placeholder='e.g X5, E-class, M4' required
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none
                    ' value={Car.brand} onChange={e=> setCar({...Car, model: e.target.value})} />
                    </div>
                </div>
               
             {/* car year , price category */}
             <div className='grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label >Year</label>
                        <input type="number" placeholder='2025' required
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none
                    ' value={Car.year} onChange={e=> setCar({...Car,year: e.target.value})} />
                    </div>
                     <div className='flex flex-col w-full'>
                        <label >Daily Price({currency})</label>
                        <input type="number" placeholder='100' required
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none
                    ' value={Car.pricePerDay} onChange={e=> setCar({...Car, pricePerDay: e.target.value})} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label >Category</label>
                        <select onChange={e=> setCar({...Car, category: e.target.value})} value={Car.category}
                             className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Select a Category</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>
                 </div>    

                 {/* car transimission , fuel type seating capacity  */}

                 <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6'>
                     <div className='flex flex-col w-full'>
                        <label >transmission</label>
                        <select onChange={e=> setCar({...Car, transmission: e.target.value})} value={Car.transmission}
                             className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Select a Transmission</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                            <option value="Semi-Automatic">Semi-Automatic</option>
                        </select>
                    </div>
                     <div className='flex flex-col w-full'>
                        <label >fuel_type</label>
                        <select onChange={e=> setCar({...Car, fuel_type: e.target.value})} value={Car.fuel_type}
                             className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Select a fuel_type</option>
                            <option value="Gas">Gas</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label >Seating Capacity</label>
                        <input type="number" placeholder='4' required
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none
                    ' value={Car.seating_capacity} onChange={e=> setCar({...Car,seating_capacity: e.target.value})} />
                    </div>
                 </div>

                 {/** car location */}

                 <div className='flex flex-col w-full'>
                        <label >Location</label>
                        <select onChange={e=> setCar({...Car, location: e.target.value})} value={Car.location}
                             className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                            <option value="">Select a location</option>
                            <option value="New York">New York</option>
                            <option value="Los Angels">Los Angels</option>
                            <option value="Houston">Houston</option>
                            <option value="Chicago">Chicago</option>
                        </select>
                    </div>

                     <div className='flex flex-col w-full'>
                        <label >Description</label>
                        <textarea rows={5} placeholder='e.g. A luxurious SUV with a spacious interior and a 
                        powerful engine' required
                        className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none
                    ' value={Car.description} onChange={e=> setCar({...Car, description: e.target.value})} ></textarea>
                    </div>

                    <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary
                    text-white rounded-md font-medium w-max cursor-pointer'>
                        <img src={assets.tick_icon} alt="" /> List Your Car
                    </button>
        </form>
    </div>
  )
}

export default AddCar