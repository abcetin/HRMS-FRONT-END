import axios from "axios";

export default class TechnologyService{
    getAll(){
        return axios.get("http://localhost:8080/api/technologies/getAll");
    }

    getByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/technologies/getByJobSeekerId?id="+id);
    }
}