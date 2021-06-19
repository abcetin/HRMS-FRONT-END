import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import {   Form, Input, Select } from 'semantic-ui-react'
//import JobAdService from '../services/jobAdService'
import WorkingTypeService from '../services/workingTypeService'
import WorkingTimeService from '../services/workingTimeService'
import JobPositionService from '../services/jobPositionService'
import CityService from '../services/cityService'
 
export default function JobAdForm() {

    //const [ad, setAd] = useState({})
    const [workingTypes, setWorkingTypes] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        let workingTypeService = new WorkingTypeService();
        workingTypeService.getAll().then(result => setWorkingTypes(result.data.data))

        let workingTimeSerivce = new WorkingTimeService()
        workingTimeSerivce.getAll().then(result=>setWorkingTimes(result.data.data))

        let jobPositionService = new JobPositionService()
        jobPositionService.getAll().then(result => setJobPositions(result.data.data))

        let cityService = new CityService()
        cityService.getAll().then(result => setCities(result.data.data)) 
    },[])

   
    
    const workingTypeOptions = workingTypes.map(workingType =>(
        {key: workingType.id, text:workingType.workingType, value: workingType.id}
    ))
    const workingTimeOptions = workingTimes.map(workingTime =>(
        {key: workingTime.id, text:workingTime.workingTime, value: workingTime.id}
    ))
    const jobPositionOptions = jobPositions.map(jobPosition =>(
        {key: jobPosition.jobPositionId, text:jobPosition.positionName, value: jobPosition.jobPositionId}
    ))

    const cityOptions = cities.map(city =>(
        {key: city.cityId, text:city.city, value: city.cityId}
    ))


    const formik = useFormik({
        initialValues: {
            relaseDate: "",
            lastDate: "",
            detail: "",
            workingTypeId: "",
            workingTimeId: "",
            minSalary: "",
            maxSalary: "",
            numberOfPositionUnit: "",
            jobPositionId: "",
            cityId: ""

        }, validationSchema: Yup.object({
            // relaseDate: Yup.date().required("Lütfen İlanın Yayınlanmasını İstediğiniz Tarihi Seçin"),
            // lastDate: Yup.date().required("Lütfen İlanın Sona Ereceği Tarihi Seçin"),
            // detail: Yup.string().required("İlan Detayı Belirtilmelidir."),
            // workingType: Yup.string().required("Boş geçilemez").oneOf(["uzaktan", "ofisten"]),
            // workingTime: Yup.string().required("Boş Geçilemez").oneOf(["fulltime", "parttime"]),
            // minSalary: Yup.number("Minumum Maaş Bilgisi Girilmelidir.").min(0),
            // maxSalary: Yup.number("Maximum Maaş Bilgisi Girilmelidir.").min(0),
            // numberOfPositionUnit: Yup.number("Açık Pozisyon Sayısı Girilmelidir").required("Boş Bırakılamaz"),
            // employerId: Yup.string().required("İş Veren Gral"),
            // jobPosition: Yup.string().required("Bir Pozisyon Seçiniz"),
            // city: Yup.string().required("Şehir Seçmelisiniz").oneOf(["sakarya", "kocaeli"])

        }),
        onSubmit: (values, { resetForm, setSubmitting }) => {
            var today = new Date(),
            date = today.getFullYear() + '-' +(today.getMonth()+1) + '-' + today.getDate();
            alert("Sistem Onayından Sonra İlan Yayınlanacaktır.")
            values.relaseDate = date;
            values.employerId = 230;
            console.log(values)
        },
    })

    const handleChangeSemantic = (value, field) => {
        formik.setFieldValue(field, value);
      }

    return (
        <div>

            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field style={{ marginTop: "1em" }} onChange={(event, data)=>{handleChangeSemantic(data.value, "jobPositionId")}} value={formik.values.jobPositionId} options = {jobPositionOptions} label='Pozisyon' control={Select} placeholder='Örn. Sosyal Mühendis...'/>
                       
                    <Form.Field style={{ marginTop: "1em" }}  onChange={(event, data)=>{handleChangeSemantic(data.value, "workingTimeId")}} value = {formik.values.workingTimeId} options ={workingTypeOptions} label='Çalışma Zamanı' control={Select} placeholder='Örn. Uzaktan...' />
                    <Form.Field style={{ marginTop: "1em" }} onChange={(event, data)=>{handleChangeSemantic(data.value, "workingTypeId")}} value = {formik.values.workingTypeId} control={Select} options ={workingTimeOptions}  label='Çalışma Zamanı' placeholder='Örn. Part-Time...' >

                    </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input style={{ marginTop: "1em", height: "3.5em" }}  id="lastDate" onChange={formik.handleChange}  values = {formik.values.lastDate} label='Son Başvuru Tarihi' type="date" />
                    <Form.Field style={{ marginTop: "1em" }} control={Input} id="minSalary" onChange={formik.handleChange}  values = {formik.values.minSalary} label='Minimum Maaş' type="number" placeholder='Örn. 3000...' />
                    <Form.Field style={{ marginTop: "1em" }} control={Input} id="maxSalary" onChange={formik.handleChange}  values = {formik.values.maxSalary} label='Maximum Maaş' type="number" placeholder='Örn. 5000...' />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field style={{ marginTop: "1em", height: "2.8em" }} id="numberOfPositionUnit" onChange={formik.handleChange} values = {formik.values.numberOfPositionUnit} control={Input} label='Aranan Çalışan Sayısı' type="number" />
                    <Form.Field style={{ marginTop: "1em" }} control={Select}  onChange={(event, data)=>{handleChangeSemantic(data.value, "workingTimeId")}} values = {formik.values.city} options ={cityOptions} label='Şehir' placeholder='Örn. Sakarya...' />

                </Form.Group>

                <Form.TextArea id="detail" label='Detay' onChange={formik.handleChange} value={formik.values.detail} placeholder='İlan Detayı...' />
                <Form.Button circular color="teal" type="submit" >Yayınla</Form.Button>
            </Form>

        </div>
    )
}

