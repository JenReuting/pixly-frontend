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
    console.log("in request ---> data ", data);
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
    const headers = { "Content-Type": "multipart/form-data" };
    let resp = await this.request(`upload`, image, "post", headers);
    return resp.data;
  }

  /**
   *  Gets 30 images from the database-- > will add pagination for additional later
      Ex resp:
        {"images":
          [
            { creation_date, description, ext, file_name, id, { metadata }, title, url },
            { ... },
          ]
        }
  */
  static async getImages() {
    let resp = await this.request('images/');
    return resp.data;
  }

  /** Gets detail for a single image. Takes in an image id, returns an image detail object
   * Ex resp:
   *  { creation_date, description, ext, file_name, id, { metadata }, title, url }
   */

  static async getImageDetail(id) {
    let resp = await this.request(`images/${id}`);
    return resp.data;
  }

  /** Delete an Image.
   *
   * Ex resp:
   *  { "Image: b41aef8aa2e24426b2330f46eabcd05f deleted" }
   */
  static async deleteImage(id) {
    let resp = await this.request(`images/${id}`, '', 'DELETE');
    return resp.data;
  }
  /** Update an Image.
 *
 * Params: {changes : ['rotate', 'bw', 'sepia']}
 *
 * Ex resp:
 *  { "Image: b41aef8aa2e24426b2330f46eabcd05f" }
 */
  static async updateImage(id, changes) {
    const headers = { "Content-Type": "application/json" };
    console.log("Image Update API Call: id, change ----> ", id, changes);
    // const resp = await axios({
    //   method: 'patch',
    //   url: `images/${id}/`,
    //   params: { change }
    // });

    let resp = await this.request(`/images/${id}`, { "changes": changes }, 'patch', headers);
    console.log("request.data ---->>", resp.data);
    return resp.data;
  }


}

export default PixlyApi;