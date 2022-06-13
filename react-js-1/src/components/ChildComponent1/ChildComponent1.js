import React from 'react'
import GrandChild1 from './GrandChild1'
import './ChildComponent1.css'

const ChildComponent1 = () => {
    return (
        <div className='ChildComponent1'>
        <h1>Child Component 1</h1>
        <GrandChild1 heading='Heading 1' color='lightblue' description='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
        <GrandChild1 heading='Heading 2' color='lightgrey' description='Quibusdam officiis nobis obcaecati vitae repudiandae, voluptate totam! Incidunt est tenetur molestiae.'/>
        <GrandChild1 heading='Heading 3'/>
        <GrandChild1 heading='Heading 3'/>
        </div>
    )
}

export default ChildComponent1