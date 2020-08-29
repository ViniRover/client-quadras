import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;
`;

const appearFromBack = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  }to {
    opacity: 1;
    transform: translateZ(100%);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 50%;

  background: #fff;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 600px;
  border-radius: 20px;
  padding: 0 30px 30px 30px;

  animation: ${appearFromBack} 2s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #002a13;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#09c734')};
    }
  }
`;

export const FootballArea = styled.div`
  display: flex;

  width: 400px;
  height: 100px;
  border: 2px solid #fff;
`;

export const Midfield = styled.div`
  display: flex;

  width: 100%;
  border: 2px solid #fff;
`;
