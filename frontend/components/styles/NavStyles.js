import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  /* width: 100%; */
  border-top: 2px solid ${props => props.theme.lightgrey};
  /* justify-content: flex-end; */

  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 900;
    background: none;
    border: 0;

    &:before {
      content: "";
      background: ${props => props.theme.lightgrey};
      height: 100%;
      width: 2px;
      left: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      transform: skew(-20deg);
    }
    &:after {
      content: "";
      width: 0;
      height: 2px;
      background: red;
      position: absolute;
      margin-top: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    font-size: 1.5rem;
    justify-content: center;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightgrey};
  }
`;

export default NavStyles;
