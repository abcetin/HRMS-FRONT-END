import axios from "axios";

export default class SchoolService{
    getByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/schools/getByJobSeekerId?id="+id);
    }

    getBySortedByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/schools/getBySortedByJobSeekerId?id="+id);
    }
}