export const formatAddress = (
  street: string,
  city: string,
  state: string,
  postal_code?: string,
  country?: string,
) => {
  return `${street}${city && ` ${city}`}${
    (state || '').length > 0 && ` ${state}`
  }${(postal_code || '')?.length > 0 ? ` ${postal_code}` : ''}${
    (country || '')?.length > 0 ? ` ${country}` : ''
  }`;
};
