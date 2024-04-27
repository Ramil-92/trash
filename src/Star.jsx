import { IoStarOutline } from "react-icons/io5";

const Star = ({ id, activeId, setActiveId }) => {


    const handleEnter = () => {
        setActiveId(id)
    }

    const handleLeave = () => {
        setActiveId(-1)
    }

    const handleClick = () => {
        setActiveId(id)
    }

    return(
        <button 
            className={id <= activeId ? 'button__active' : 'button'}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={handleClick}
        >           
            <IoStarOutline className='star'/>
        </button>
    );
};

export default Star;