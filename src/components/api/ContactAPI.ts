import axios from "axios"

const ContactAPI = async (name: string, email: string, message: string) => {
    const requestObj = {
        name: name,
        email: email,
        message: message
    }
    try{
        //for prod- http://pankaj-weld.vercel.app/api/contact
        const apiURL = process.env.NEXT_PUBLIC_API_URL?.toString() || "";
        const callingContactAPI = await axios.post(`${apiURL}`, requestObj)
        return callingContactAPI.data;
    }catch(error){
        console.error("Error:", error);
        throw error;
    }
}

export default ContactAPI;