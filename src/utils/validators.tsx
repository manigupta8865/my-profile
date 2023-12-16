export function isStringValid(item: string | null) {
  return item !== null && item !== undefined && item !== '';
}
export function isSameDate(firstDate: Date | null, secondDate: Date | null) {
  if (!firstDate || !secondDate) return false;

  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  );
}
