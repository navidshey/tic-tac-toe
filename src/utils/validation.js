/**check if the value is empty
 * 
 * @param value - value to check its value 
 * @returns true if value is empty and false if not.
 */
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};
