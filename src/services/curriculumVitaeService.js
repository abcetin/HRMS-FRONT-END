import axios from "axios";

export default class CurriculumVitaeService{

    getCurriculumVitaeDetailByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/cvs/getCVDetail?id="+id);
    }
}