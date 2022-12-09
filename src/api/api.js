import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const BASE_URL = 'http://localhost:5001';

/** API Class (Static)
 *
 * Contains mehtods used to get/send to the backend API.
 */

class PixlyApi {

  /******************** HELPERS **************************/

  /** Template for API requests */

  static async request(endpoint, data = {}, method = "get", headers = {}) {

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
      ? data
      : {};

    try {
      // let apiData = await axios({ url, method, data, params });
      // console.log("apiData --------> ", apiData);
      return (await axios({ url, method, data, params, headers }));
    } catch (err) {
      console.error("API Error: ----> ", err);
      let msg = err.response.data.error.message;
      throw Array.isArray(msg) ? msg : [msg];
    }
  };


  /************** INDIVIDUAL API ROUTES ****************/

  /******************** Images *****************/

  /** Post image to backend API
   *  returns: public url (str) of posted image
  */
  static async postImage(image) {
    console.log("image going into API from React ------> ", image.get("image"));


    const headers = { "Content-Type": "multipart/form-data" };
    let resp = await this.request(`upload`, image, "post", headers);

    return resp.data.url;
  }

  /**
   *  Gets 30 images from the database-- > will add pagination for additional later
      Ex resp: {
        "images": [
          {
            "creation_date": "Thu, 08 Dec 2022 21:11:33 GMT",
            "description": null,
            "first_name": "08cf0f209cc3470ca01ed351a929b2e6.jpeg",
            "title": null,
            "url": "https://pixlyapp.s3.amazonaws.com/08cf0f209cc3470ca01ed351a929b2e6.jpeg"
          },
          {
            ...
          }
        ] }
  */
  static async getImages() {
    let resp = await this.request('images');

    console.log("response from API ---------> ", resp.data);
    return resp.data;
  }


}

export default PixlyApi;