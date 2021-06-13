import axios from "axios";

export default class LanguageService{

    getJobSeekerId(id){
        return  axios.get("http://localhost:8080/api/languages/getByJobSeekerId?id="+id);
    }
}