export const mean = (town:string, s:string): number => {
  const arrOfCitys = s.split('\n').map((stroke) => stroke.split(':')).map(i => {
    return {city: i[0], rains: i[1].split(',')}
  });
  const ourCity = arrOfCitys.find(item => item.city === town);
  if(!ourCity) return -1;
  return countMean(ourCity?.rains);
}

export const countMean =(rains: string[]): number => {
  const arrOfNumbers = rains.map(i => i.split(' ')).map(i => parseFloat(i[1]));
  const sum = arrOfNumbers.reduce((prev:number, curr:number) => prev + curr, 0);
  return sum / arrOfNumbers.length;
}

export const variance = (town:string, strng:string): number => {
  // your code
  return 0
}