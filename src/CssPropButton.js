import React from 'react';
import { css } from '@emotion/core';

export default function() {
  return (
    <button
      css={css`
        color: hotpink;
      `}
    >
      I should be hot pink!
    </button>
  );
}
