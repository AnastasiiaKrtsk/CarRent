import { createSelector } from 'reselect';

export const selectedMakes = createSelector(
  state => state.cars.items,
  items => {
    const uniqueMakes = [...new Set(items.map(car => car.make))];
    return uniqueMakes;
  }
);
export const selectedCars = state => state.cars.items;
export const selectedFavorite = state => state.cars.favorites;
export const selectedFilteredCars = state => state.filter.filteredCars;
