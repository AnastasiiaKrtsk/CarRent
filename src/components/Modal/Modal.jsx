import React from 'react';
import {
  Backdrop,
  SvgModal,
  Text,
  CloseBtnModal,
  ConditionTextWrapper,
  ContainerModal,
  ModalMainText,
  ModalText,
  ModalTitleGold,
  Number,
  ImgModal,
  ImgWrapperModal,
  LinkBtn,
  ModalFlexWrapper,
  ModalConditionWrapper,
  ModalContentDiv,
  TitleModal,
} from './Modal.styled';
import sprite from '../../images/sprite.svg';

const Modal = ({
  closeModal,
  model,
  make,
  rentalConditions,
  rentalPrice,
  address,
  functionalities,
  year,
  description,
  accessories,
  id,
  type,
  img,
  mileage,
  fuelConsumption,
  engineSize,
}) => {
  const [city, country] = address.split(', ');
  const rentalConditionsLines = rentalConditions.split('\n', 3);
  const minimumAgeLine = rentalConditionsLines[0];
  const match = minimumAgeLine.match(/\d+/);
  const minimumAge = parseInt(match[0], 10);

  return (
    <Backdrop>
      <ContainerModal>
        <ImgWrapperModal>
          <ImgModal src={img} alt={make + ' photo'} />
        </ImgWrapperModal>
        <CloseBtnModal onClick={() => closeModal(false)}>
          <SvgModal width="20" height="20">
            <use href={`${sprite}#cross-black`} />
          </SvgModal>
        </CloseBtnModal>
        <TitleModal>
          {make} <ModalTitleGold>{model}</ModalTitleGold>, {year}
        </TitleModal>

        <ModalFlexWrapper>
          <ModalContentDiv>
            <ModalText>
              <Text>
                city: {city} | country: {country} | id: {id}
              </Text>
              <Text>
                type: {type} | fuel consumption: {fuelConsumption} | engine
                size: {engineSize}
              </Text>
            </ModalText>
            <ModalMainText>{description}</ModalMainText>
          </ModalContentDiv>

          <ModalContentDiv>
            <ModalMainText>Accessories and functionalities:</ModalMainText>
            <ModalText>
              <Text>
                {accessories[0]} | {accessories[1]} | {accessories[2]}
              </Text>
              <Text>
                {functionalities[0]} | {functionalities[1]}
              </Text>
            </ModalText>
          </ModalContentDiv>

          <ModalContentDiv>
            <ModalMainText>Rental Condition</ModalMainText>
            <ConditionTextWrapper>
              <ModalConditionWrapper>
                Minimum age: <Number>{minimumAge}</Number>
              </ModalConditionWrapper>
              <ModalConditionWrapper>
                {rentalConditionsLines[1]}
              </ModalConditionWrapper>
            </ConditionTextWrapper>

            <ConditionTextWrapper>
              <ModalConditionWrapper>
                {rentalConditionsLines[2]}
              </ModalConditionWrapper>
              <ModalConditionWrapper>
                Mileage: <Number>{mileage.toLocaleString('en-EN')}</Number>
              </ModalConditionWrapper>
              <ModalConditionWrapper>
                Price: <Number>{rentalPrice}</Number>
              </ModalConditionWrapper>
            </ConditionTextWrapper>
          </ModalContentDiv>
        </ModalFlexWrapper>

        <LinkBtn to="/">Rental car</LinkBtn>
      </ContainerModal>
    </Backdrop>
  );
};

export default Modal;
