import React from 'react'
import Button from '../components/Button'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='btns'>
      <h1>Buttons</h1>

      <h4>Different button types</h4>
      <div className='line'>        
        <Button/>
        <Button variant='outline' />
        <Button variant='text' />
      </div>

      <h4>Disable box-shadow</h4>
      <div className='line'>
        <Button disableShadow></Button>
        <Button variant='outline' disableShadow></Button>
        <Button variant='text' disableShadow></Button>
      </div>

      <h4>Disable buttons</h4>
      <div className='line'>
        <Button disabled></Button>
        <Button variant='outline' disabled></Button>
        <Button variant='text' disabled></Button>        
      </div>

      <h4>An icon on the left or right</h4>
      <div className='line'>
        <Button icon='home' startIcon='material-symbols-outlined'></Button>        
        <Button variant='outline' icon='shopping_cart' startIcon='material-symbols-outlined'></Button>
        <Button variant='text' icon='search' startIcon='material-symbols-outlined'></Button>
      </div>
      <div className='line'>
        <Button variant='outline' icon='location_on' endIcon='material-symbols-outlined'></Button>
        <Button variant='text' icon='local_shipping' endIcon='material-symbols-outlined'></Button>        
      </div>

      <h4>Different button sizes</h4>
      <div className='line'>
        <Button size='sm'></Button>
        <Button variant='outline' size='md'></Button>
        <Button variant='text' size='lg'></Button>
      </div>

      <h4>Different colors</h4>
      <div className='line'>
        <Button color='default' />
        <Button color='primary' />
        <Button color='secondary' />
        <Button color='danger' />
      </div>

    </div>
  )
}