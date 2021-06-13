import axios from "axios";

export default class JobExperienceService{

    getAll(){
        return axios.get("http://localhost:8080/api/jobExperiences/getAll");
    }

    getBySortedLeaveDate(){
        return axios.get("http://localhost:8080/api/jobExperiences/getBySortedLeaveDate");
    }

    getByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/jobExperiences/getByJobSeekerId?id="+id);
    }
}