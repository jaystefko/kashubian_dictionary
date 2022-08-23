import React, { Dispatch, SetStateAction } from 'react';

export const setter = (
  set: Dispatch<SetStateAction<string>>,
  event: React.ChangeEvent<HTMLInputElement>
) => set(event.target.value);
