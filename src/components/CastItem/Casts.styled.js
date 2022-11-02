import styled from '@emotion/styled';

export const CastList = styled.ul`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  width: 320px;
  margin: auto;
  gap: 10px;
  @media screen and (min-width: 768px) {
    width: 768px;
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
    grid-template-columns: repeat(10, 1fr);
  }
`;

export const ActorName = styled.p`
  color: white;
  font-weight: 700;
  text-align: center;
`;
export const CharacterName = styled.p`
  color: white;
  font-weight: 500;
  text-align: center;
  font-size: 13px;
`;

export const CastActor = styled.li`
  box-shadow: 0px 0px 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
