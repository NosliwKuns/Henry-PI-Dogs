import React, {useState, useEffect} from 'react';
import '../../scss/HomeView/Pagination.scss';

function Pagination({ pageNumber, setPageNumber, totalSize, dogsPerPage }) {
  const pages = Math.ceil(totalSize / dogsPerPage)
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
  }

  const [arrCurrBtns, setArrCurrBtns] = useState([]);
  
  useEffect(() => {
    
    let tempNumberOfPages = [...arrCurrBtns];
    let dotsInicial = '...';
    const dotsLeft = '<<';
    let dotsRight = '>>';

    if (pages <= 4) {
      console.log('holi')
      tempNumberOfPages = [...numberOfPages];
    }
    else if(pageNumber >= 1 && pageNumber <= 3) {
      tempNumberOfPages = [1, 2, 3, dotsInicial, pages]
    } 
    else if (pageNumber === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInicial, pages]
    } 
    else if (pageNumber > 4 && pageNumber < pages - 2) {
      const  sliced1 = numberOfPages.slice(pageNumber - 2, pageNumber);
      const sliced2 = numberOfPages.slice(pageNumber, pageNumber + 1);
      tempNumberOfPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pages]
    }
    else if (pageNumber > pages - 3) {
      const sliced = numberOfPages.slice(pages - 5);
      tempNumberOfPages = ([1, dotsLeft, ...sliced])
    }
    else if (pageNumber === dotsInicial) {
      setPageNumber(arrCurrBtns[arrCurrBtns.length - 3] + 1)
    }
    else if (pageNumber === dotsRight) {
      setPageNumber(arrCurrBtns[3] + 2)
    }
    else if (pageNumber === dotsLeft) {
      setPageNumber(arrCurrBtns[3] - 2)
    }
  
    setArrCurrBtns(tempNumberOfPages)
  },[pageNumber, pages, setPageNumber])

  let prev = () => setPageNumber(prev => prev === 1 ? prev : prev - 1);
  let next = () => setPageNumber(prev => prev === pages ? prev : prev + 1); 

  return (
    <div className='pagination'>
      <div className='p-container'>
      <button onClick={prev} 
          className={pageNumber === 1 ? 'btn disabled' : 'btn'}>Prev</button>
        {arrCurrBtns.map(page => {
          return (
            <button 
              onClick={() => setPageNumber(page)}
              className={pageNumber === page ? 'btn active' : 'btn'}>{page}</button>
          )
        })}
      <button onClick={next} 
          className={pageNumber === pages ? 'btn disabled' : 'btn'}>Next</button>
      </div>
    </div>
  )
}

export default Pagination;