import React, { useState, useEffect } from 'react';
import { FavContainer } from './FavouritesPage.styled';
import { useSelector } from 'react-redux';
import { selectedFavorite } from '../../redux/selectors';
import CarsList from '../../components/List/List';
import LoadmoreBtn from '../../components/LoadmoreBtn/LoadmoreBtn';
import { toast } from 'react-toastify';
import CarsFilter from '../../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

const carsOnPage = 8;

const FavouritesPage = () => {
  const favorites = useSelector(selectedFavorite);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate loading time (you should replace this with actual data loading)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change 2000 to the actual loading time

    // Replace the setTimeout with your actual data fetching logic
    // dispatch(fetchFavorites()).then(() => setLoading(false)).catch(error => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />; // Display a loader until data is loaded
  }

  const paginatedCars = favorites.slice(0, page * carsOnPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(favorites.length / carsOnPage);

  return (
    <>
      <FavContainer>
        <CarsFilter onSubmitCarsForm={setSearch} />
        <CarsList cars={paginatedCars} search={search} />
        {favorites.length > 0
          ? totalPages !== page && <LoadmoreBtn onClick={getPage} />
          : toast.info('Unfortunately there are no more cars!', {
              position: toast.POSITION.TOP_RIGHT,
            })}
      </FavContainer>
    </>
  );
};

export default FavouritesPage;
