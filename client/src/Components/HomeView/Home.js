import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs, searchByName, getTemperament } from '../../Redux/actions';
import Cards from '../Cards';
import NavBar from '../NavBar';
import '../../scss/HomeView/Home.scss';
import Filters from './Filters/Filters';

const Home = () => {

  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [temperaments, setTemperaments] = useState([]);
  const [apiBreed, setAPIBreed] = useState('');
  const [dbBreed, setDBBreed] = useState('');
  const [search, setSearch] = useState('');
  const [transition, setTransition] = useState('transition transition-1 is-active');
  const [filter, setFilter] = useState([])
  const dogs = useSelector(state => state.allDogs);
  const dogName = useSelector(state => state.searchDogs);
  const dogTemp = useSelector(state => state.temperaments)
  console.log(filter);
  
  useEffect(() => {
    dispatch(getAllDogs())
    dispatch(searchByName(search))
    dispatch(getTemperament())
  }, [dispatch, search, transition, filter, temperaments]);
  
  console.log(dogTemp)

/*   let circles = 140
  let background = [];
  let i = 1;
  while (i < circles) {
    background.push(
      (
        <div key={`${i}CIRCLE`} className='snow'></div>
      )
    )
    i++;
  } */
  
  useEffect(() => {
    setTransition(transition.split(' ').slice(0, 2).join(' '))
/*     setTimeout(() => {
    }, 500); */
  }, [transition])

  return (
    <div className='home'>
      <div className={transition}></div>
      <NavBar 
        setSearch={setSearch}
      />
      <Cards 
        dogs={dogs}
        dogName={dogName}
        search={search}
        filter={filter}
        /* ref={ref} */
      />
      <Filters
        dogs={dogs}
        setFilter={setFilter}
        temperaments={temperaments}
      />
      {/* <>
        {background}
      </> */}
    </div>
  )
};

export default Home;