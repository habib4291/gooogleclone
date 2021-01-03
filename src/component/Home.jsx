
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import googleicon from '../img/googleicon.png';
import SearchIcon from '@material-ui/icons/Search';

const Home = (props) => {

    const [state,setState] = useState("")

      const searchgoogle = (e) =>{
        props.history.push({pathname:"/Search",state});
        
      }


    return (
        <>
            <div className='main_page'>
                <div className='div1'>
                    <img
                        alt="error"
                        src={googleicon} />
                </div>
                <div className='div2'onSubmit={searchgoogle}>
                    <form className='home_form'>
                        <input type='text' className="inp" value={state} onChange={(e)=>setState(e.target.value)} />
                        <SearchIcon className='search' />
                    </form>
                 </div>
                 <div className='div3'>
                        <Button variant='contained' className='gsearch' onClick={()=>searchgoogle(state)}>Google Search</Button>
                    </div>
                    
                   

            </div>
        </>
    )

}
export default Home;
