import axios from "axios";

export const UrlShortener = async (string) => {
    try {
        const response = await axios({
            method: "post",
            url: "",
            data: string
        });
        return response.data;
    } catch (error) {
        return "Something Wrong";
    }
};