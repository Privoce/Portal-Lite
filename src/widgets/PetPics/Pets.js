import { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconClose from '../Common/Icons/Close';
const StyledIcon = styled.div`
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  z-index: 996;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    width: 0.2rem;
    height: 0.2rem;
  }
`;
const StyledWrapper = styled.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;
  z-index: 996;
  position: absolute;
  left: 0;
  top: 0;
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
  .icon_close {
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    width: 0.2rem;
    height: 0.2rem;
    cursor: pointer;
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
export default function Pets({ currPet, updatePet }) {
  const [petsExpand, setPetsExpand] = useState(false);
  useEffect(() => {}, []);
  const togglePetsExpand = () => {
    setPetsExpand((prev) => !prev);
  };
  const handleUpdate = ({ target }) => {
    const {
      dataset: { pet, selected }
    } = target;
    console.log({ pet, selected });
    if (currPet != pet) {
      updatePet(pet);
      togglePetsExpand();
    }
  };
  if (!petsExpand)
    return (
      <StyledIcon className="expand_icon" onClick={togglePetsExpand}>
        <svg
          t="1610035029137"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5559"
          // width="128"
          // height="128"
        >
          <path
            d="M423.563636 446.836364h-335.127272c-10.24 0-18.618182-8.378182-18.618182-18.618182V93.090909c0-10.24 8.378182-18.618182 18.618182-18.618182h335.127272c10.24 0 18.618182 8.378182 18.618182 18.618182v335.127273c0 10.24-8.378182 18.618182-18.618182 18.618182zM924.392727 446.836364h-335.127272c-10.24 0-18.618182-8.378182-18.618182-18.618182V93.090909c0-10.24 8.378182-18.618182 18.618182-18.618182h335.127272c10.24 0 18.618182 8.378182 18.618182 18.618182v335.127273c0 10.24-8.378182 18.618182-18.618182 18.618182zM423.563636 943.010909h-335.127272c-10.24 0-18.618182-8.378182-18.618182-18.618182v-335.127272c0-10.24 8.378182-18.618182 18.618182-18.618182h335.127272c10.24 0 18.618182 8.378182 18.618182 18.618182v335.127272c0 10.24-8.378182 18.618182-18.618182 18.618182z"
            fill="#4585F5"
            p-id="5560"
          ></path>
          <path
            d="M756.829091 756.829091m-186.181818 0a186.181818 186.181818 0 1 0 372.363636 0 186.181818 186.181818 0 1 0-372.363636 0Z"
            fill="#4585F5"
            p-id="5561"
          ></path>
        </svg>
      </StyledIcon>
    );
  return (
    <StyledWrapper>
      <IconClose className="icon_close" onClick={togglePetsExpand} />
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
    </StyledWrapper>
  );
}
