import React from 'react'
import ContentProps from './interface/content.props'
import './content.style.css'
export const Content = ({ children }: ContentProps) => {
    return (
        <div className='content pt-10 pb-24 flex justify-center'>{children}</div>
    )
}
