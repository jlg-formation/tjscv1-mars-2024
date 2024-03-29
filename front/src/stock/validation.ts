export const validateName = (name: string): string => {
  if (name === '') {
    return 'Champ obligatoire';
  }
  if (name.length > 10) {
    return `Champ trop long: (${name.length}>10)`;
  }
  if (name === 'Zut') {
    return 'Zut est interdit';
  }
  return '';
};
