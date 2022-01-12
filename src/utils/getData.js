
const getData = async (url) => {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        if (response.status !== 200) {
            const message = `An error has ocurred: ${response.status}`;
            throw new Error(message);  
        }
        return data.image;
    } catch (error) {
        console.error(error);
    }
};


export default getData;