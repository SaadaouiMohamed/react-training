import { ReactElement, useEffect, useState } from "react"

type Props = {

  children: ReactElement | Array<ReactElement>,
  background?: string 

}


export default function Card({children, background}: Props) {


 
    return (

        <div className={`${background} card`}>

            {children}
           

        </div>
    )

}


