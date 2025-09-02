import axios from "axios";

export const postTopArtist = async (topArtists) => {
  try {
    const res = await axios.post(`http://127.0.0.1:3001/api/roaster/artist`, {
      musicData: topArtists,
    });
    return res.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      throw new Error(err.response.data.error);
    }
    throw new Error("Failed!!!");
  }
};
