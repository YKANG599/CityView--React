import './ImageList.scss';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ImageList = ({ images, updateMainBG,page, setPage, totalPage}) => {
    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
            // console.log(page-1)
        }
    };

    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1);
            // console.log(page+1)
        }

    };



    return (
        <div className="carousel">
            <KeyboardArrowLeftIcon className="btnNav prev" onClick = {handlePrev}/>
            {
                images && images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => updateMainBG(img)}
                        style={{ background: `url('${img.thumb}') no-repeat center center/cover fixed` }}
                    />
                ))
            }

            <KeyboardArrowRightIcon className="btnNav prev"  onClick = {handleNext}/>
        </div>
    );
};

export default ImageList;

