export const separateThousands = (number: number): string => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
