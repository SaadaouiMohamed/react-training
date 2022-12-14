import React,{useRef, useState} from 'react'
import { Alert, Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ArticleContext } from '../../context/ArticleContext'
import ArticleItem from './ArticleItem'
import axios from 'axios'
export default function FormWithHook() {

     const [data,setData] = useState([])

    const {handleSubmit,register,formState:{errors}}=useForm()


    

   
const location =useParams()

    
    const ref = useRef()

    // const onSubmit= (newData)=>{
    //     ref.current.reset()
    //     setData([...data,{...newData,id : ++data.length}])
    // }


   const addComments = async(data) =>{
    ref.current.reset()
    await axios.post(`http://localhost:5051/comments`,{...data,postId:location.id}).then(res=>{
        console.log(res.data)
    })
    window.location.href = `/comments/${location.id}`
   }

    return(

         <ArticleContext.Provider value={[data,setData]}>
            <div>
    <form className='w-[50%] mx-auto text-center py-4' onSubmit={handleSubmit(addComments)} ref={ref}>
    <Stack direction='column' spacing={2}>
    <TextField label='title' error={Boolean(errors.name)} {...register('name', {required:true})} helperText={Boolean(errors.name) && 'fill this field'}/>
    <TextField label='description'
    {...register('body', {required:true})}
    error={Boolean(errors.body)}
    helperText={Boolean(errors.body) && 'fill this field'}
    multiline
    rows={2}
    maxRows={6}
    />
    <div><Button type='submit'>submit</Button></div>
    </Stack>
    </form>
    </div>
    <ArticleItem/>
    
    </ArticleContext.Provider>

  )
}
