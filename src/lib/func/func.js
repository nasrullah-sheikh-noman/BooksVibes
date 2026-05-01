

const API = async () => {
  const res = await fetch("https://books-vibes-server.onrender.com/Books");
  const books = await res.json();
  return books;
};

export const DetailsId = async (id) => {
  const res = await fetch(`https://books-vibes-server.onrender.com/Books/${id}`);
  const books = await res.json();
  return books;
};

export default API;