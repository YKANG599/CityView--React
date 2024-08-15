import './App.scss';
import CityInput from "./CityInput";
import ImageList from "./ImageList";
import {useEffect, useState} from "react";


function App() {
    const [images, setImages] = useState([]);
    const [bgImage, setBgImage] = useState('');
    const [totalPage, setTotalPage] = useState(1);
    const [page, setPage] = useState(1);

    useEffect(() =>{
        // If bgImage and its description exist, capitalize the first letter and set it as the document title
        document.title = !!bgImage && bgImage?.des && bgImage.des ? bgImage.des.charAt(0).toUpperCase()+ bgImage.des.slice(1): 'Loading...'
    }, [bgImage]) //the effect will only run when bgImage changes.

    useEffect(() => {
        images.length >0 && setBgImage(images[0])
    }, [images]);

    const updateImages = (newImages) => {
        // console.log('get updated images from City Input', newImages);
        setImages(newImages);
    };

    const updateMainBG = (img) => {
        // console.log('get updated images from ImageList', img);
        setBgImage(img);
    };




    return (
        <div className="App" style={{ background: bgImage && bgImage.regular && `url('${bgImage.regular}') no-repeat center center/cover fixed`}}>
            <div className="searchBar">
                <CityInput cbUpdateImage={updateImages} cbSetPage={setPage} cbSetTotalPage={setTotalPage} page={page} />
            </div>

            <ImageList images={images} updateMainBG={updateMainBG} page={page} setPage={setPage} totalPage={totalPage}/>

        </div>
    );
}

export default App;

