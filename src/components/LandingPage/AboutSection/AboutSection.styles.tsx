import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 8rem 2rem 2rem 12rem;
  display: flex;
  position: relative;
  background: #1e1e1e;
  color: #fff;

  @media only screen and (min-height: 675px) {
    padding-top: 13rem;
  }

  @media only screen and (min-height: 775px) {
    padding-top: 18rem;
  }

  @media only screen and (min-height: 900px) {
    padding-top: 22rem;
  }
`;

export const textContainer = (isVisible: boolean) => css`
  display: flex;
  flex-direction: column;
  width: 50%;
  transition: all 1.5s ease;

  ${isVisible
    ? `
     transform: translateX(0);
  `
    : `
     transform: translateX(-80%);
  `}
`;

export const heading = css`
  font-size: 12rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 1225px) {
    font-size: 11rem;
  }

  @media only screen and (max-width: 1125px) {
    font-size: 10rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 8rem;
  }
`;

export const text = css`
  font-size: 2.3rem;
  line-height: 3.2rem;
  font-weight: 500;

  @media only screen and (max-width: 1125px) {
    font-size: 2.1rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 1.9rem;
  }
`;

export const aboutContainer = (isVisible: boolean) => css`
  width: 50%;
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  svg {
    width: 100%;
    transition: all 1s ease;

    ${isVisible
      ? `
     transform: translateX(0);
  `
      : `
     transform: translateX(80%);
  `}
  }
`;
