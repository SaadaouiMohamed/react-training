import { Alert, Button, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function Form() {


    const [data,setData] = useState([])
    
    const [errors,setErrors] = useState([])
  
     


    const findError=(field)=> errors.some(e=> e === field)
    

    function addArticles(e){
        console.log(e)
        e.preventDefault()
        const form=e.target
        
        let obj = new FormData(form)
        console.log(obj)
       let errors=[];

        for (const [k, v] of obj.entries()) {
            
            const isEmpty=!Boolean(v);

            if(isEmpty){
                errors.push(k)
            }
        }


        setErrors(errors)


        const post = Object.fromEntries(obj.entries());


        if(errors.length===0){

            setData([...data,{...post, id : ++data.length}])

            form.reset()
        }
      
        
    }

    


    function removeArticle(x){
      const newItems=  data.filter((item,index)=>{
            return(
            index!==x
            )
        })
        setData(newItems)
    }

  return (
    <div>
    <form className='w-[50%] mx-auto text-center py-4' onSubmit={addArticles}>
    <Stack direction='column' spacing={2}>
    <TextField name='titel' label='title' error={findError('titel')}/>
    <TextField name='description' label='description'
    error={findError('description')}
    multiline
    rows={2}
    maxRows={6}
    />
    <div><Button type='submit'>submit</Button></div>
    </Stack>
    </form>


    <div className='grid grid-cols-3 gap-5 w-[90%] mx-auto'>


    {data.length==0 && <Alert className='col-start-2' severity='info'>No Posts</Alert>}
    
    {
        data.map((elem,i)=>{
            return(
                <div className='bg-green-200 text-center py-4' key={i}>
                <h3>{elem.title}</h3>
                <h3>{elem.id}</h3>
                <p>{elem.description}</p>
                <button onClick={()=>removeArticle(i)} className='bg-red-600 py-3 px-4 my-5'>Remove</button>
                </div>
            )
        })
    }
    
    </div>
    {/*required === false &&<p className='text-red-500 w-[50%] mx-auto text-center font-bold'>{error}</p>*/}
    </div>
  )
}
