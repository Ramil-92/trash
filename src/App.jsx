import './App.css'
import Button from './components/Button';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

const actors = [
  'https://i.pinimg.com/736x/5f/b6/de/5fb6de09bbc9384a3df88ec1cac7cc95.jpg',
  'https://i.pinimg.com/736x/09/59/81/095981d201a3eb8b18cc497420587417.jpg',
  'https://i.pinimg.com/736x/cc/fb/b8/ccfbb871672f328ec05d546b3a100312.jpg',
  'https://i.pinimg.com/736x/a4/6d/9d/a46d9d615d0f232b9981667a0e0eb777.jpg',
  'https://i.pinimg.com/736x/4d/e5/85/4de585918b81b67e100f1b63c7eaf6d0.jpg'
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState(actors);

  const onClickLeft = () => {
    if(index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setState(prev => [prev.at(-1), ...prev.slice(0, -1)]);
      setIndex(index);
    }
  }
  const onClickRight = () => {
    if(!(index + 3 >= actors.length)) {
      setIndex(index + 1);
    } else {
      setState(prev => [...prev.slice(1), prev[0]]);
      setIndex(index);
    }
  }

  return (
    <div className='slider'>
      <div className='slider__content'>
        {
          state.slice(index, index + 3).map((url, index) => (<img key={ url }
                                 className={ `slider__image${ index % 2 != 0 ? ' slider__image_active' : '' }`} 
                                 src={ url } 
                                 alt="" />))
        }
      </div>
      <Button onClick={ onClickLeft } className="button button_left">
        <FaChevronLeft className='button__image'/>
      </Button>
      <Button onClick={ onClickRight } className="button button_right">
        <FaChevronRight className='button__image'/>
      </Button>
    </div>
  )
}

export default App
