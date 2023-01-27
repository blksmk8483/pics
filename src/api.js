import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID U5m56mhqXFXXgFwk5XGl9SaiyE4qs4WcUcnCLuSBSw0'
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);
    return response;
};

export default searchImages;