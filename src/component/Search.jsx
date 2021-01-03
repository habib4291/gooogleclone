import React, { useEffect, useState } from 'react';
import logosearch from '../img/small.png';
import SearchIcon from '@material-ui/icons/Search';
import { key, cx } from './Api'
import axios from 'axios';
import Show from './Show';
import { Link } from 'react-router-dom';

const Search = (props) => {

    const [state, setState] = useState(props.location.state ? props.location.state : "");

    const [info, setInfo] = useState({});
    const [result, setResult] = useState({});



    const searchgoogle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
            if (response) {
                setInfo(response.data.searchInformation)
                setResult(response.data.items)
                console.log(info);
                console.log(result);
            }
        }
        catch (error) {
            console.log(error);
        }

    };
  useEffect((state) => {
        const getpost = async ()=> {
           
            
                try {
                    const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`);
                    if (response) {
                        setInfo(response.data.searchInformation)
                        setResult(response.data.items)
                       // console.log(info);
                       // console.log(result);
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
        
        getpost();
    }, []);
    
    return (
        <>
            <form className='search_form' onSubmit={searchgoogle}>
                <Link to="/">
                    <div className='searchlogo'>
                        <img src={logosearch} alt="log" />
                    </div>
                </Link>
                <div className='inputform'>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} className="inp2" />
                </div>
                <SearchIcon className="searchicon2" />
            </form>
            <Show
                info={info}
                result={result}
            />
        </>
    )
}

export default Search;