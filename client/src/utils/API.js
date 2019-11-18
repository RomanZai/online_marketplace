import axios from "axios";

const BASEURL = "https://api.bestbuy.com/v1/products(search=";
const APIKEY = ")?format=json&show=sku,image,name,customerReviewAverage,salePrice&apiKey=QQQiNhIXaVDeh961QBBwKYjJ";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
