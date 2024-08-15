import {useEffect, useState} from "react";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from 'axios';
import  './CityInput.scss'

const CityInput = ({cbUpdateImage, cbSetPage, cbSetTotalPage, page}) => {

    const [city, setCity] = useState(DefaultCity)



    const cbInput = evt => {
        let newCity = evt.target.value.trim().toLowerCase();
        if (evt.key === 'Enter' && newCity !== city) {
            setCity(newCity);
            cbSetPage(1);
        }
    };


    useEffect(() => {
        fetchCity(city);
    }, [city, page]);


    const fetchCity = newCity => {
        axios.get(BasicUrl, {
            params: {
                query: newCity,
                orientation: 'landscape',
                page:page
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        }).then(res => {
            // console.log("raw data", res)
            let totalPage = res.data.total_pages
            cbSetTotalPage(totalPage)

            // console.log(totalPage)
            let {data:{results}} = res
            // console.log("results:", results)

            let imageList = results.map(item =>({
                des:item.alt_description,
                regular: item.urls.regular,
                thumb: item.urls.thumb
            }))


            cbUpdateImage(imageList) // Pass to App


        }).catch(error => {
            // console.error("Error fetching data", error);
        });
    };


    return <>
        <h2 className="cityName">New City: {city}</h2>
        <input type="text"
               className='inputCity'
               placeholder= "Search City Here..."
               onKeyDown={cbInput}

        />

    </>
}


export default CityInput