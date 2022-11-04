import styled from 'styled-components';
import { useLanguage } from 'uselanguage';

const StyledWrapper = styled.section`
  font-size: 0.2rem;
  padding: 0.6rem 0;
  color: #666;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading({ tip = '' }) {
  const {
    language: {
      words: { msg }
    }
  } = useLanguage();
  return <StyledWrapper>{tip || msg.loading}</StyledWrapper>;
}
