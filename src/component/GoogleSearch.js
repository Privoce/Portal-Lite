import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  .input {
    width: 6.58rem;
    height: 0.44rem;
    border-radius: 0.1rem 0rem 0rem 0.1rem;
    border: 0.02rem solid #c4c7ce;
    padding: 0.1rem 0.15rem;

    font-size: 0.18rem;
  }
  .btn {
    /* width: 1.4rem;
    height: 0.44rem; */
    background: #4e6ef3;
    border-radius: 0rem 0.1rem 0.1rem 0rem;
    padding: 0.1rem 0.35rem;
    font-size: 0.18rem;
    font-weight: 600;
    color: #ffffff;
    line-height: 0.25rem;
  }
`;
export default function GoogleSearch() {
  return (
    <StyledWrapper>
      <input type="text" className="input" />
      <button className="btn">Google</button>
    </StyledWrapper>
  );
}
