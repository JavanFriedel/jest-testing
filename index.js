export function capitalize(string) {
  const stringSplit = string.split('');
  stringSplit[0] = stringSplit[0].toUpperCase();

  return stringSplit.join('');
}
