import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs, getTemperament, cleanHome } from '../../Redux/actions';
import Cards from '../Cards';
import SearchBar from '../SearchBar';
import Loading from '../Loading';
import '../../scss/HomeView/Home.scss';
import Filters from './Filters';
import Pagination from './Pagination';

const Home = () => {

  const dispatch = useDispatch();
  const allDogs = useSelector(state => state.allDogs);
  const [pageNumber, setPageNumber] = useState(1);
  const [dogsPerPage] = useState(8);
  const totalSize = typeof allDogs === 'string' ? 1 : allDogs.length;
  const indexOfLastDog = pageNumber * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  console.log(currentDogs)
  
  useEffect(() => {

    dispatch(getAllDogs());
    dispatch(getTemperament());   
    setPageNumber(1);

    return dispatch(cleanHome());

  }, [dispatch, setPageNumber]);
  

  let display;

  if(allDogs.length) {
    display = 
      (
        <> 
        <SearchBar
          setPageNumber={setPageNumber}
        />
        <div className='b main-content'>
          <Cards 
            currentDogs={currentDogs}
          />
          <Filters
          setPageNumber={setPageNumber} />
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