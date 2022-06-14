import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs, searchByName, getTemperament } from '../../Redux/actions';
import Cards from '../Cards';
import NavBar from '../NavBar';
import '../../scss/HomeView/Home.scss';
import Filters from './Filters/Filters';

const Home = () => {

  const dispatch = useDispatch();
  // const [pageNumber, setPageNumber] = useState(1);
  // const [temperaments, setTemperaments] = useState([]);
  // const [apiBreed, setAPIBreed] = useState('');
  // const [dbBreed, setDBBreed] = useState('');
  // const [search, setSearch] = useState('');
const [transition, setTransition] = useState(false);
  // const [filter, setFilter] = useState([]);
  // const [change, setChange] = useState(false);
  const allDogs = useSelector(state => state.allDogs);
  const dogName = useSelector(state => state.searchDogs);
  const dogTemp = useSelector(state => state.temperaments)
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(currentDogs)
  
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllDogs())
      dispatch(getTemperament())  
    }, 1500);
  }, [dispatch, transition]);
  


  
  useEffect(() => {
    /* setTransition(transition.split(' ').slice(0, 2).join(' ')) */
    setTimeout(() => {
      setTransition(!transition)
    }, 1900);
  }, [])

  return (
    <div className='home'>
      <div className={transition ? 'y' : 'x'}></div>
      <div className={transition ? 'y' : 'p'}></div>
      <NavBar 
      />
      <Cards 
        currentDogs={currentDogs}
/*         dogs={dogs}
        dogName={dogName}
        search={search}
        filter={filter} */
        /* ref={ref} */
      />
      <Filters
/*         dogs={dogs}
        setFilter={setFilter}
        dogTemp={dogTemp}
        change={change}
        setChange={setChange} */
      />
    </div>
  )
};

export default Home;