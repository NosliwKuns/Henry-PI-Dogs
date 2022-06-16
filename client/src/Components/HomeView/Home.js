import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDogs, searchByName, getTemperament } from '../../Redux/actions';
import Cards from '../Cards';
import NavBar from '../NavBar';
import '../../scss/HomeView/Home.scss';
import Filters from './Filters';
import Pagination from './Pagination';

const Home = () => {

  const dispatch = useDispatch();
  const [transition, setTransition] = useState(false);
  const allDogs = useSelector(state => state.allDogs);
  const dogName = useSelector(state => state.searchDogs);
  const dogTemp = useSelector(state => state.temperaments)
  const [pageNumber, setPageNumber] = useState(1);
  const [dogsPerPage] = useState(8);
  const totalSize = allDogs.length;
  const indexOfLastDog = pageNumber * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
/*   const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }; */
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
    <> 
        
{/*       <div className='back-blob'>
      <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="2000%" id="blobSvg">
        <g transform="translate 334.26414489746094, 38.976097106933594)">
          <path fill="#fdcb6e">
            <animate attributeName='d'
            dur='10000ms'
            repeatCount='indefinite'

            values='M455.5,283.5Q435,317,419,347.5Q403,378,370.5,390Q338,402,310.5,419Q283,436,247.5,452Q212,468,196,419.5Q180,371,176,343Q172,315,126.5,313Q81,311,104.5,280.5Q128,250,90.5,214Q53,178,87.5,160Q122,142,157.5,146.5Q193,151,211.5,144Q230,137,250,136.5Q270,136,293.5,134.5Q317,133,364.5,123.5Q412,114,380.5,164Q349,214,412.5,232Q476,250,455.5,283.5Z;

            M386,276.5Q396,303,410.5,350Q425,397,399.5,430.5Q374,464,321.5,411.5Q269,359,245.5,385Q222,411,200,392.5Q178,374,137.5,376.5Q97,379,112.5,336.5Q128,294,95.5,272Q63,250,54,212.5Q45,175,55,134.5Q65,94,110,89.5Q155,85,192,108.5Q229,132,255.5,100Q282,68,308.5,85Q335,102,344,133Q353,164,374,180.5Q395,197,385.5,223.5Q376,250,386,276.5Z;
            
            M394.5,270.5Q364,291,388,338.5Q412,386,370,385Q328,384,305,408Q282,432,251,427Q220,422,190,414Q160,406,147,377Q134,348,124.5,323.5Q115,299,126,274.5Q137,250,140.5,230.5Q144,211,153,193.5Q162,176,179.5,166.5Q197,157,210.5,129.5Q224,102,250,102.5Q276,103,323.5,71.5Q371,40,403.5,67Q436,94,447.5,134Q459,174,442,212Q425,250,394.5,270.5Z;
            
            M437,287Q454,324,438,359.5Q422,395,374,388Q326,381,301,389.5Q276,398,248,409.5Q220,421,192,410Q164,399,131.5,388Q99,377,107.5,338Q116,299,131,274.5Q146,250,138,228Q130,206,120,169.5Q110,133,150.5,140.5Q191,148,210,138.5Q229,129,251.5,120.5Q274,112,319,82.5Q364,53,398.5,75Q433,97,431.5,141Q430,185,425,217.5Q420,250,437,287Z;

            M455.5,283.5Q435,317,419,347.5Q403,378,370.5,390Q338,402,310.5,419Q283,436,247.5,452Q212,468,196,419.5Q180,371,176,343Q172,315,126.5,313Q81,311,104.5,280.5Q128,250,90.5,214Q53,178,87.5,160Q122,142,157.5,146.5Q193,151,211.5,144Q230,137,250,136.5Q270,136,293.5,134.5Q317,133,364.5,123.5Q412,114,380.5,164Q349,214,412.5,232Q476,250,455.5,283.5Z
            '/>
          </path>
        </g>
      </svg>
      </div> */}
      <div className={transition ? 'y' : 'x'}></div>
      <div className={transition ? 'y' : 'p'}></div>
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
};

export default Home;