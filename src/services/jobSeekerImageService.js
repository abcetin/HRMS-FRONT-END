import axios from "axios";

export default class JobSeekerImageService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobSeekerImages/getAll");
    }

    getByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/jobSeekerImages/getByJobSeekerId?id="+id);
    }
}