// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;

  .tab {
    font-size: 0.2rem;
    padding: 0.1rem;
    border: 1px solid #efe;
    margin-right: 0.1rem;
    cursor: pointer;
    &[data-selected='true'] {
      background-color: #eee;
      color: #222;
    }
  }
`;
const pets = [
  {
    pet: 'shibes',
    title: '狗狗'
  },
  {
    pet: 'cats',
    title: '猫咪'
  },
  {
    pet: 'birds',
    title: '小鸟'
  }
];
export default function Pets({ currPet, updatePet, name, toggleWidgetSettingVisible }) {
  const handleUpdate = ({ target }) => {
    const {
      dataset: { pet, selected }
    } = target;
    console.log({ pet, selected });
    if (currPet != pet) {
      updatePet(pet);
      toggleWidgetSettingVisible();
    }
  };
  return createPortal(
    <StyledWrapper>
      {pets.map((p) => {
        const { pet, title } = p;
        let selected = pet == currPet;
        return (
          <span
            className={`tab`}
            data-selected={selected}
            data-pet={pet}
            onClick={handleUpdate}
            key={pet}
          >
            {title}
          </span>
        );
      })}
    </StyledWrapper>,
    document.querySelector(`#widget-${name}-setting`)
  );
}
