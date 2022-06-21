import React from 'react';
import '../../scss/HomeView/Filters.scss';
import '../../scss/HomeView/DogHome.scss';
import { filterByTemp } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { alphabeticalOrder, comesFrom, orderByWeight, orderByHeight } from '../../Redux/actions/index';

const Filters = ({ setPageNumber }) => {
  const dispatch = useDispatch();
  const bringAllDogs = useSelector(state => state.allDogs);
  const temps = useSelector(state => state.temperaments)

  /*   const [changeTwo, setChangeTwo] = useState(false);
  const [axis, setAxis] = useState({
    x: 0,
    y: 0
  });
  const titleContainer = useRef()
  let regExp = /^[a-dA-D]/;
  let regExpB = /^[e-oE-O]/;
  let regExpC = /^[p-zP-Z]/;
  const one = dogTemp.filter(d => d.name.match(regExp));
  const two = dogTemp.filter(d => d.name.match(regExpB));
  const three = dogTemp.filter(d => d.name.match(regExpC));
  const handleMouseMove = (e) => {
    const width = titleContainer.current.clientWidth;
    const height = titleContainer.current.clientHeight;
    const oX = (e.nativeEvent.offsetX/width) * 100;
    const oY = (e.nativeEvent.offsetY/height) * 100;
    setAxis({
      x: oX,
      y: oY
    })
  }
  const { x, y } = axis;
  const maskStyle = {
    '--maskX' : x,
    '--maskY' : y
  } */
  const handleClickAlph = (e) => {
    if(typeof bringAllDogs === 'string') return alert('Invalid action')
    dispatch(alphabeticalOrder(e.target.value));
  }

  const handleClickFrom = (e) => {
    dispatch(comesFrom(e.target.value));
    setPageNumber(1);
  }

  const handleClickWeights = (e) => {
    if(typeof bringAllDogs === 'string') return alert('Invalid action')
    dispatch(orderByWeight(e.target.value));
    console.log(bringAllDogs)
  };

  const handleClickHeights = (e) => {
    if(typeof bringAllDogs === 'string') return alert('Invalid action')
    dispatch(orderByHeight(e.target.value));
  }

  const handleClick = (e) => {
    dispatch(filterByTemp(e.target.value));
    setPageNumber(1);
  };

  return (
    <div className='filter'>
      
      <section className='btn-container'>
        <button value='ASC' onClick={handleClickAlph}> A-Z </button>
        <button value='DESC' onClick={handleClickAlph}> Z-A </button>
        <button value='ASC' onClick={handleClickWeights}> Min Weight </button>
        <button value='DESC' onClick={handleClickWeights}> Max Weight </button>
        <button value='ASC' onClick={handleClickHeights}> Min height </button>
        <button value='DESC' onClick={handleClickHeights}> Max height </button>
        <button value='api' onClick={handleClickFrom}> Api </button>
        <button value='dataBase' onClick={handleClickFrom}> DataBase </button>
      </section>

      <div class='accordion'> 
        
        <span class='accordion-toggle'>Filter by temperament:</span>
        <div class='accordion-content'> 
          <div class='accordion-inner'> 
            <label
              key={`TEM_0`} 
              className='included'
              htmlFor={0}
            >
            <input 
              type='checkbox'
              value={'All'}
              id={0}
              onClick={handleClick}
            /> 
              {'All Temperaments'}
            </label>

            {
              temps.map(e => 
                <label
                  key={`TEM_${e.id}`} 
                  className='included'
                  htmlFor={e.id}
                >
                <input 
                  type='checkbox'
                  value={e.name}
                  id={e.id}
                  onClick={handleClick}
                /> 
                  {e.name}
                </label>
              )
            }
          </div> 
        </div> 
      </div>

      <div class='accordion sec'> 
        
        <span class='accordion-toggle'>Origin of breeds</span>
        <div class='accordion-content'>
          <div class='accordion-inner'> 
            <p>A dog breed is a particular strain of dog that was purposefully bred by humans to perform specific tasks, such as herding, hunting, and guarding. Dogs are the most variable mammal on earth, with artificial selection producing around 450 globally recognized breeds.</p>
            <p>Dogs are the most variable mammal on earth, with artificial selection producing around 450 globally recognized breeds.</p> 
            <p>These breeds possess distinct traits related to morphology, which include body size, skull shape, tail phenotype, fur type, body shape, and coat colour.</p>
            <p>Their behavioural traits include guarding, herding, and hunting, and personality traits such as hypersocial behavior, boldness, and aggression.</p>
            <p>Most breeds were derived from small numbers of founders within the last 200 years. As a result, today dogs are the most abundant carnivore species and are dispersed around the world</p>
          </div>
        </div>
      </div>

      <div class='melt-leave-active'>
      <div class='melt-enter-active'></div>

      </div> 

    </div>
  )
};

export default Filters;