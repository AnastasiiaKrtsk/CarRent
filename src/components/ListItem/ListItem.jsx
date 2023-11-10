import React, { useState } from 'react';
import {
  Img,
  CarItemContainer,
  CarTitle,
  TextContent,
  CarTitleWrapper,
  CarTitleBlue,
  CarBodyText,
  CarText,
  CarButton,
  Heart,
  SvgWrapper,
  ImgWrapper,
  AltText,
  GlobalStyleOverride,
} from './ListItem.styled';
import Modal from '../Modal/Modal';
// import {IoIosHeartEmpty} from 'react-icons/io'
// import heart from '../../images/normal.svg';
// import heartBlue from '../../images/active.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectedFavorite } from '../../redux/selectors';
import { deleteFromFavorites, addToFavorites } from '../../redux/carsSlice';
import fav from '../../images/no-img.jpg';
import sprite from '../../images/sprite.svg';
const CarsItem = ({ car }) => {
  const [openModal, setOpenModal] = useState(false);
  const favorites = useSelector(selectedFavorite);
  const dispatch = useDispatch();

  const addressParts = car.address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const firstFunctionality = car.functionalities[0];

  const choseFavorite = favorites?.some(favorite => favorite.id === car.id);

  const toggleFavorite = () => {
    if (choseFavorite) {
      dispatch(deleteFromFavorites(car));
    } else {
      dispatch(addToFavorites(car));
    }
  };
  return (
    <>
      <GlobalStyleOverride />
      <CarItemContainer>
        <SvgWrapper>
          <Heart onClick={toggleFavorite} width="16" height="16">
            <use
              href={
                choseFavorite
                  ? `${sprite}#heart-active`
                  : `${sprite}#heart-normal`
              }
            />
          </Heart>
          <ImgWrapper>
            <Img src={car.img ? car.img : fav} alt={car.make} />
            <AltText>{car.make}</AltText>
          </ImgWrapper>{' '}
        </SvgWrapper>

        <TextContent>
          <CarTitleWrapper>
            <CarTitle>
              {car.make} <CarTitleBlue>{car.model}</CarTitleBlue>, {car.year}
            </CarTitle>
            <CarTitle>{car.rentalPrice}</CarTitle>
          </CarTitleWrapper>

          <CarBodyText>
            <CarText>
              {city} | {country} | {car.rentalCompany} | {car.type}
            </CarText>
            <CarText>
              {car.make} | {car.model} | {car.id} | {firstFunctionality}
            </CarText>
          </CarBodyText>
        </TextContent>

        <CarButton
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Learn more
        </CarButton>
        {openModal && (
          <Modal
            closeModal={setOpenModal}
            key={car.id}
            model={car.model}
            make={car.make}
            year={car.year}
            rentalPrice={car.rentalPrice}
            address={car.address}
            rentalCompany={car.rentalCompany}
            functionalities={car.functionalities}
            id={car.id}
            type={car.type}
            img={car.img}
            fuelConsumption={car.fuelConsumption}
            engineSize={car.engineSize}
            description={car.description}
            accessories={car.accessories}
            rentalConditions={car.rentalConditions}
            mileage={car.mileage}
          />
        )}
      </CarItemContainer>
    </>
  );
};

export default CarsItem;
