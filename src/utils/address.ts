export const formatAddress = (
  street: string,
  city: string,
  state: string,
  postal_code?: string,
  country?: string,
) => {
  return `${street} ${city} ${state}${postal_code && ` ${postal_code}`}${
    country && ` ${country}`
  }`;
};
