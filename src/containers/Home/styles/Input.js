import styled from 'styled-components';

import Input from 'src/components/Input/Input';

export const StyledInput = styled(Input)`
  margin: 0;
  margin-right: ${({ theme }) => theme.spacing.small};
  height: 100%;
`;

StyledInput.displayName = 'StyledInput';
