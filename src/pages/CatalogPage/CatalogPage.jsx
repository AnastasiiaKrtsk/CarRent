// CatalogPage.js
import React, { useEffect, useState } from 'react';
import CarsList from '../../components/List/List';
import LoadmoreBtn from '../../components/LoadmoreBtn/LoadmoreBtn';
import { Loader } from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/carsOperations';
import {
  selectedCars,
  selectedMakes,
  selectedFilteredCars,
} from '../../redux/selectors';
import { Container, MakeSelector, SearchContainer } from './CatalogPage.styled';
import {
  selectMake,
  setFilteredCars,
  updateFilter,
} from '../../redux/filterSlice';
import SearchButton from 'components/SearchButton/SearchButton';

const carsOnPage = 8;

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getAllCars = useSelector(selectedCars);
  const makes = useSelector(selectedMakes);
  const selectedMake = useSelector(state => state.filter.selectedMake);
  const filteredCars = useSelector(selectedFilteredCars);

  useEffect(() => {
    dispatch(fetchCars())
      .then(() => setLoading(false))
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [dispatch]);

  const handleMakeChange = event => {
    const selectedMake = event.target.value;
    dispatch(selectMake(selectedMake));
  };

  const handleFilterClick = () => {
    filterCars(selectedMake);
    setPage(1);
  };

  const filterCars = make => {
    if (!make) {
      dispatch(setFilteredCars([])); // Clear the filteredCars state when no make is selected
      return;
    }
    const filtered = getAllCars.filter(car => car.make === make);
    dispatch(setFilteredCars(filtered));
  };

  if (loading) {
    return <Loader />;
  }

  const carsToDisplay = filteredCars.length > 0 ? filteredCars : getAllCars;
  const paginatedCars = carsToDisplay.slice(0, page * carsOnPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(carsToDisplay.length / carsOnPage);

  return (
    <Container>
      <SearchContainer>
        {/* <label htmlFor="makeSelector">Select Make: </label> */}
        <MakeSelector id="makeSelector" onChange={handleMakeChange}>
          <option value="">All Makes</option>
          {makes.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </MakeSelector>
        <SearchButton onClick={handleFilterClick}></SearchButton>
      </SearchContainer>
      <CarsList cars={paginatedCars} search={search} />
      {carsToDisplay.length > 0
        ? totalPages !== page && <LoadmoreBtn onClick={getPage} />
        : toast.info('Oops, no more cars...', {
            position: toast.POSITION.TOP_RIGHT,
          })}
    </Container>
  );
};

export default CatalogPage;
