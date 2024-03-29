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

export const validatePrice = (price: number): string => {
  if (price < 0) {
    return 'Le prix doit être positif';
  }
  return '';
};

export const validateQty = (qty: number): string => {
  if (!Number.isInteger(qty)) {
    return 'La quantité doit être un entier';
  }

  return '';
};
