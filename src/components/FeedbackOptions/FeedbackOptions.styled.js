import styled from '@emotion/styled';

export const FeedbackButton = styled.button`
  padding: 10px;

  cursor: pointer;
  color: #fff;
  background-color: #647c90;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #647c90;
    background-color: #fff;
    border: 1px solid #647c90;
  }
`;
