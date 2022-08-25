import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../../assets/image/logo.jpg'


import Form from '../Form/Form'
import FormWithHook from '../Form/FormWithHook'
import Article from './Article.jsx'

export default function Home() {
  return (
    <div>
<nav className='flex justify-evenly space-x-4 bg-orange-300 p-4 items-center'>
    <img src={logo} alt='logo' className='w-10'/>
    <a href='/'>Home</a>
    <a href='#'>Service</a>
    <a href='#'>Contact</a>
    <a href='#'>About</a>
</nav>

<Outlet></Outlet>
<div className='grid grid-cols-4 gap-4 bg-orange-300 px-4 mt-10 py-6'>
    <p className='bg-slate-200 p-3 rounded-xl shadow-xl shadow-slate-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima consectetur, excepturi dolores illum quibusdam maxime quia atque. Explicabo minima odit, hic unde magni adipisci quibusdam culpa maiores, esse eum tenetur.</p>
    <nav className='footerNav'>Solution
        <a href='#'>Marketing</a>
        <a href='#'>Analytics</a>
        <a href='#'>Commerce</a>
        <a href='#'>Insights</a>
    </nav>
    <nav className='footerNav'>Support
        <a href='#'>Pricing</a>
        <a href='#'>Documentation</a>
        <a href='#'>Guides</a>
        <a href='#'>Api Status</a>
    </nav>
    <nav className='footerNav'>Company
        <a href='#'>About</a>
        <a href='#'>Blog</a>
        <a href='#'>Jobs</a>
        <a href='#'>Press</a>
        <a href='#'>Partner</a>
    </nav>
</div>
    </div>
  )
}
