export const getGifs = async (cat) => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=E702g6ZOEJYPlNfPvKhHnsa5VvfGfjSQ&q=${cat}&limit=10`
  );
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
