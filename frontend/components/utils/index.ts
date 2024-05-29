export const isEmpty = (obj: any) => {
  return Object.values(obj).every((value) => value !== '');
};
