const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (feeling) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  //combine theater ixx and vgc
  allTheater = theaterIXX.concat(theaterVGC);

  //read all result from theater
  const result = allTheater.filter((review) => review['hasil'] === feeling);

  //to count all result feeling of the film from ixx and vgc
  return result.length;
};

module.exports = {
  promiseOutput,
};
