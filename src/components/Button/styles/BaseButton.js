import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const handleCircleButton = css`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

export const BaseButton = styled.button`
  border: none;
  background-color: ${({ theme, color }) => color === 'white' ? theme.colors.white : theme.colors.primary};
  color: ${({ theme, color }) => color === 'white' ? theme.colors.primary : theme.colors.white};
  font-size: 1.5rem;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  cursor: pointer;
  flex-basis: auto;
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.grayLight};
    cursor: not-allowed;
  }
  ${({ variant }) => variant ===  'circle' && handleCircleButton}
`;

BaseButton.defaultProps = {
  color: undefined,
  variant: undefined,
};

BaseButton.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
};

BaseButton.displayName = 'BaseButton';