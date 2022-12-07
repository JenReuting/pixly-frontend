import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

/** API Class (Static)
 *
 * Contains mehtods used to get/send to the backend API.
 */

class PixlyApi {

  /******************** HELPERS **************************/

  /** Template for API requests */

  static async request(endpoint, data = {}, method = "get") {

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error: ----> ", err.response);
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
    let resp = await this.request(`upload`, "post", image);

    console.log("response from API call--------> ", resp);
    return resp;
  }

}

export default PixlyApi;