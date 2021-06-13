import axios from "axios";

export default class JobSeekerService{

    getAll(){
        return axios.get("http://localhost:8080/api/jobseekers/getall");
    }

    getByUserId(id){
        return axios.get("http://localhost:8080/api/jobseekers/getJobSeekerDetailById?id="+id);
    }
}