import axios from "axios";

export const postTopArtist = async (topArtists) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/roaster/artist`,
      { musicData: topArtists }
    );

    return res.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      throw new Error(err.response.data.error);
    }
    throw new Error("Failed!!!");
  }
};
