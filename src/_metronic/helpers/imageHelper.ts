
export const getImageUrl = (filename: string) => {
    const SERVER_URL = process.env.REACT_APP_FILE_SERVER_UR;
    const token = process.env.REACT_APP_FILE_SERVER_TOKEN;

    return SERVER_URL + filename +  token;
}