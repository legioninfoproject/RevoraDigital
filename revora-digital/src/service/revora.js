import api from "./api";

const revoraContact = async (payload) => {
  try {
    const response = await api.post( "/revora", payload );

    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default revoraContact;