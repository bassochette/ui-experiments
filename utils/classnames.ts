export const classnames = (
  ...classes: (string | undefined | null)[]
): string => {
  return classes
    .filter((_c) => typeof _c === 'string' && _c.length > 0)
    .join(' ')
    .trim();
};
