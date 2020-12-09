import styled from 'styled-components';
import IconFilter from '../../asset/img/icon.filter.png';

const StyledWrapper = styled.aside``;

export default function Filter() {
  return (
    <StyledWrapper>
      <button>
        <img src={IconFilter} alt="过滤图标" />
      </button>
    </StyledWrapper>
  );
}
