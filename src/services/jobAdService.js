import axios from "axios";

export default class JobAdService{
    getJobAds(){
        return axios.get("http://localhost:8080/api/ads/getByActivated?activated=true");
    }

    getJobDetail(id){
        return axios.get("http://localhost:8080/api/ads/getById?id="+id);
    }

    getBySortedDate(){
        return axios.get("http://localhost:8080/api/ads/getBySortedDate");
    }

    getJobAdByEmployerId(id){
        return axios.get("http://localhost:8080/api/ads/getByEmployerId?id="+id);
    }

    getJobAdByPositionId(jobPositionId){
        return axios.get("http://localhost:8080/api/ads/getByJobPositionId?id="+jobPositionId);
    }

    postAddToJobAd(ad){
        return axios.post("http://localhost:8080/api/ads/add",ad)
    }

}