import axios from "axios";

export const getDataFromAPI = async (setMoves, setLoading) => {
  try {
    const response = await axios.get("/api/sample-data"); // This will be proxied to http://test.api.boxigo.in/sample-data
    setMoves(response?.data?.Customer_Estimate_Flow);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  } finally {
    setLoading(false);
  }
};
