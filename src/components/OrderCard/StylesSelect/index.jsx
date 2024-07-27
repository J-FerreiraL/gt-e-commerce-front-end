import React from 'react';
import Select from 'react-select';

const customStyles = {
  option: (base, state) => ({
    ...base,
    cursor: 'pointer',
    backgroundColor: state.isDisabled
      ? undefined
      : state.isSelected
        ? '#C92071' // Cor de fundo para item selecionado
        : state.isFocused
          ? '#C920714F' // Cor de fundo ao passar o mouse
          : undefined,
    color: state.isSelected
      ? '#FFFFFF' // Texto branco para item selecionado
      : '#C92071',
  }),

  singleValue: (base) => ({
    ...base,
    cursor: 'pointer',
    color: '#474747',
    '&:hover': {
      color: '#C92071',
    },
  }),

  placeholder: (base) => ({
    ...base,
    cursor: 'pointer',
    color: '#474747',
    '&:hover': {
      color: '#C92071',
    },
  }),

  dropdownIndicator: (base) => ({
    ...base,
    cursor: 'pointer',
    color: '#474747',
    '&:hover': {
      color: '#C92071',
    },
  }),

  clearIndicator: (base) => ({
    ...base,
    cursor: 'pointer',
    color: '#474747',
    '&:hover': {
      color: '#C92071',
    },
  }),

  control: (base) => ({
    ...base,
    cursor: 'pointer',
    borderColor: '#474747',
    '&:hover': {
      borderColor: '#C92071',
    },
  }),
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function App() {
  return (
    <Select
      styles={customStyles}
      options={options}
    />
  );
}

export default App;
