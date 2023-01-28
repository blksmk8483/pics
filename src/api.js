import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID U5m56mhqXFXXgFwk5XGl9SaiyE4qs4WcUcnCLuSBSw0'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;