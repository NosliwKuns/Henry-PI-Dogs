import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs, searchByName, getTemperament } from '../../Redux/actions';
import Cards from '../Cards';
import SearchBar from '../SearchBar';
import Loading from '../Loading';
import '../../scss/HomeView/Home.scss';
import Filters from './Filters';
import Pagination from './Pagination';

const Home = () => {

  const dispatch = useDispatch();
  const [transition, setTransition] = useState(false);
  const allDogs = useSelector(state => state.allDogs);
  const [pageNumber, setPageNumber] = useState(1);
  const [dogsPerPage] = useState(8);
  const totalSize = allDogs.length;
  const indexOfLastDog = pageNumber * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  console.log('asa',allDogs);

  console.log(currentDogs)
  
  useEffect(() => {
    /* setTimeout(() => { */
      dispatch(getAllDogs())
      dispatch(getTemperament())  
   /*  }, 1500); */
  }, [dispatch, transition]);
  


  
  useEffect(() => {
    /* setTransition(transition.split(' ').slice(0, 2).join(' ')) */
    setTimeout(() => {
      setTransition(!transition)
    }, 1900);
  }, [])
  let display;

  if(allDogs.length) {
    display = 
      (
        <> 
        {/* <div className={transition ? 'y' : 'x'}></div>
        <div className={transition ? 'y' : 'p'}></div> */}
        <SearchBar />
        <div className='main-content'>
          <Cards 
            currentDogs={currentDogs}
          />
          <Filters />
        </div>
        <Pagination 
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalSize={totalSize}
          dogsPerPage={dogsPerPage}
        />
      </>
    )
  } else {
    display = (<Loading />)
  }

  return (
    <>
      {display}
    </>
  )
};

export default Home;