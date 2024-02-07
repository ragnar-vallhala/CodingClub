import React, {useState} from 'react'
import styles from '../style'
import {Navbar, Clients, Footer} from './'
import { contacts } from '../constants'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Event = () => {
  const [form, setForm] = useState({});
  const [isSubmitted, setSubmit] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const togglSuccess=(e)=>{
    setSuccess(e)
    if(e){
      toast('Response Submitted!');
    }
    else{
      setSubmit(false);
      toast('ID already exists!');
    }
  
  }

  const toggleSubmit=()=>{
    setSubmit(true)
  };

  const formHandle=(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleSubmit();
    if(!isSubmitted)
    {  const response = await fetch('https://api.codingclubiitjmu.in/api/submitID',{
        method:'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      console.log(data);
      togglSuccess(data);

    }
    
    // handle form submission here
  }
  



  return (
    <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <ToastContainer/>
        <div className="flex-1 font-poppins font-semibold ss:text-[102px] text-[64px] text-white ss:leading-[100.8px] leading-[75px] text-center">
          <p>Fill The</p>
          <p className="text-gradient">Void()</p>
        </div>
        {!isSubmitted&&(<div className='flex  flex-col text-white font-poppins mt-16'>
            <p className='text-[32px]  text-center'>Submit ID</p>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <p className='text-[16px]  text-center'>The following information is needed for the evaluation in the contest. Kindly, submit accurate information:</p>
              <p className='text-[12px] text-gray-400  text-center'>For any issue contact
                <a href={`tel:${contacts[0].phone}`} className='ml-8 text-blue-400'>Coordinator</a>
                <a href={`tel:${contacts[1].phone}`} className='ml-8 text-blue-400'>Head</a>
              </p>

              <div className='flex justify-center mt-4'>
                <div>
                  <p className='mt-4 mx-4'>Team  Name: </p>
                  <p className='mt-4 mx-4'>Unique ID:</p>
                  <p className='mt-4 mx-4'>Hackerrank Username:</p>
                  <p className='mt-4 mx-4'>Kaggle Username:</p>
                </div>
                <div className='flex flex-col text-black'>
                  <input name='team_name' className='ss:w-[400px] mt-4 mx-4 w-[200px] ' required type='text' onChange={formHandle} placeholder='Team Name..'></input>
                  <input name='unique_id' className='mt-4 mx-4 ss:w-[400px] w-[200px]' required type='text' onChange={formHandle} placeholder='Unique ID from registration platform..'></input>
                  <input name='hackerrank_id' className='mt-4 mx-4 ss:w-[400px] w-[200px]' required type='text' onChange={formHandle} placeholder='Hackerrank Username to be used..'></input>
                  <input name='kaggle_id' className='mt-4 mx-4 ss:w-[400px] w-[200px]' required type='text' onChange={formHandle} placeholder='Kaggle Username to be used..'></input>
                  <div  className='mt-4 mx-4'>
                        <input name='confirm' type='checkbox' required></input>
                        <label className='ml-4 text-white'>I confirm the above details are correct..</label>
                  </div>
                  
                  <button type='submit' className='button my-8'>Submit</button>
                </div>
              </div>
              
            </form>
        </div>)}



      {
        isSuccess&&(
          <div  className='flex  flex-col text-white font-poppins my-16'>
            <p className='text-[32px]  text-center'>Thank You</p>
            <p className='text-[16px]  text-center'>Your ID is recorded. Kindly use same id during the contest.</p>
          </div>
        )
      }

      <Clients/>
      <Footer/>
    </div>
  )
}

export default Event
