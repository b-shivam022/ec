import React from 'react'
import Maindata from './Maindata';
import "./Main.css"

const Main = () => {

    return (
        <main>
            {Maindata.map((data) => {
                return (
                    <div className='main_data'>
                        <img className='main_img' 
                        src={data.url} alt={data.title} key={data.id} />
                        <div className='main_title'>{data.title}</div>
                    </div>
                )
            })}

        </main>
    )
}

export default Main