import React, { useEffect, useState } from 'react';
import CarsList from '../../components/List/List';
import CarsFilter from '../../components/Filter/Filter';
import LoadmoreBtn from '../../components/LoadmoreBtn/LoadmoreBtn';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/carsOperations';
import { selectedCars } from '../../redux/selectors';
import { CarsContainer } from './CarsPage.styled';

const carsOnPage = 8;
const CarsPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const getAllCars = useSelector(selectedCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (!getAllCars) return <Loader />;
  const paginatedCars = getAllCars.slice(0, page * carsOnPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(getAllCars.length / carsOnPage);

  return (
    <CarsContainer>
      <CarsFilter onSubmitCarsForm={setSearch} />
      <CarsList cars={paginatedCars} search={search} />
      {getAllCars.length > 0
        ? totalPages !== page && <LoadmoreBtn onClick={getPage} />
        : toast.info('Unfortunately there are no more cars!', {
            position: toast.POSITION.TOP_RIGHT,
          })}
    </CarsContainer>
  );
};

export default CarsPage;
