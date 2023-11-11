import React, { useState, useEffect } from 'react';
import { FavContainer, GlobalStyleOverride } from './FavouritesPage.styled';
import { useSelector } from 'react-redux';
import { selectedFavorite } from '../../redux/selectors';
import CarsList from '../../components/List/List';
// import LoadmoreBtn from '../../components/LoadmoreBtn/LoadmoreBtn';
// import { toast } from 'react-toastify';
import CarsFilter from '../../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

const carsOnPage = 8;

const FavouritesPage = () => {
  const favorites = useSelector(selectedFavorite);
  const [page] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const paginatedCars = favorites.slice(0, page * carsOnPage);
  // const getPage = () => setPage(page + 1);
  // const totalPages = Math.ceil(favorites.length / carsOnPage);

  return (
    <>
      <FavContainer>
        <GlobalStyleOverride />
        <CarsFilter onSubmitCarsForm={setSearch} />
        <CarsList cars={paginatedCars} search={search} />
        {/* {favorites.length > 0
          ? totalPages !== page && <LoadmoreBtn onClick={getPage} />
          : toast.info('Oops, no more cars...', {
              position: toast.POSITION.TOP_RIGHT,
            })} */}
      </FavContainer>
    </>
  );
};

export default FavouritesPage;
