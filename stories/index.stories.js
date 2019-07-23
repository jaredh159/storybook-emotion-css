import React from 'react';
import { storiesOf } from '@storybook/react';
import StyledButton from '../src/StyledButton';
import CssPropButton from '../src/CssPropButton';

storiesOf('Emotion Sadness', module)
  .add('styled component', () => <StyledButton />)
  .add('with css prop', () => <CssPropButton />);
