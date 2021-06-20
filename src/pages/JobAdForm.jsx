import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { Form, Input, Label, Select } from 'semantic-ui-react'
import JobAdService from '../services/jobAdService'
import WorkingTypeService from '../services/workingTypeService'
import WorkingTimeService from '../services/workingTimeService'
import JobPositionService from '../services/jobPositionService'
import CityService from '../services/cityService'

export default function JobAdForm() {

    let jobAdService = new JobAdService();

    const [workingTypes, setWorkingTypes] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        let workingTypeService = new WorkingTypeService();
        workingTypeService.getAll().then(result => setWorkingTypes(result.data.data))

        let workingTimeSerivce = new WorkingTimeService()
        workingTimeSerivce.getAll().then(result => setWorkingTimes(result.data.data))

        let jobPositionService = new JobPositionService()
        jobPositionService.getAll().then(result => setJobPositions(result.data.data))

        let cityService = new CityService()
        cityService.getAll().then(result => setCities(result.data.data))



    }, [])



    const workingTypeOptions = workingTypes.map(workingType => (
        { key: workingType.workingTypeId, text: workingType.workingType, value: workingType.workingTypeId }
    ))
    const workingTimeOptions = workingTimes.map(workingTime => (
        { key: workingTime.workingTimeId, text: workingTime.workingTime, value: workingTime.workingTimeId }
    ))
    const jobPositionOptions = jobPositions.map(jobPosition => (
        { key: jobPosition.jobPositionId, text: jobPosition.positionName, value: jobPosition.jobPositionId }
    ))

    const cityOptions = cities.map(city => (
        { key: city.cityId, text: city.city, value: city.cityId }
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
            cityId: "",
            employerId: ""

        }, validationSchema: Yup.object({
            lastDate: Yup.string().required("Lütfen Geçerli Bir Tarih Seçiniz."),
            detail: Yup.string().required("İlan Detayı Belirtilmelidir."),
            workingTypeId: Yup.string().required("Boş geçilemez"),
            workingTimeId: Yup.string().required("Boş Geçilemez"),
            minSalary: Yup.number("Minumum Maaş Bilgisi Girilmelidir.").min(1),
            maxSalary: Yup.number("Maximum Maaş Bilgisi Girilmelidir.").min(1),
            numberOfPositionUnit: Yup.number("Açık Pozisyon Sayısı Girilmelidir").required("Boş Bırakılamaz"),
            jobPositionId: Yup.string().required("Bir Pozisyon Seçiniz"),
            cityId: Yup.string().required("Şehir Seçmelisiniz")
        }),
        onSubmit: (values) => {
            var today = new Date(),
                date = today.getFullYear() + '-' + '0' + (today.getMonth() + 1) + '-' + today.getDate();
            alert("Sistem Onayından Sonra İlan Yayınlanacaktır.")
            values.relaseDate = date.toString();
            let advert = {
                city: { cityId: values.cityId },
                employer: { employerId: 230 },
                jobPosition: { jobPositionId: values.jobPositionId },
                workingTime: { workingTimeId: values.workingTimeId },
                workingType: { workingTypeId: values.workingTypeId },
                detail: values.detail,
                relaseDate: values.relaseDate,
                lastDate: values.lastDate,
                minSalary: values.minSalary,
                maxSalary: values.maxSalary,
                numberOfPositionUnit: values.numberOfPositionUnit
            }
            jobAdService.postAddToJobAd(advert)
        },
    })

    const handleChange = (value, field) => {
        formik.setFieldValue(field, value);
    }

    return (
        <div>

            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field style={{ marginTop: "1em" }} onChange={(event, data) => { handleChange(data.value, "jobPositionId") }} value={formik.values.jobPositionId} options={jobPositionOptions} label='Pozisyon' control={Select} placeholder='Örn. Sosyal Mühendis...'
                        error={formik.errors.jobPositionId && formik.touched.jobPositionId}
                    />
                    <Form.Field style={{ marginTop: "1em" }} onChange={(event, data) => { handleChange(data.value, "workingTimeId") }} value={formik.values.workingTimeId} options={workingTypeOptions} label='Çalışma Zamanı' control={Select} placeholder='Örn. Uzaktan...' 
                    error={formik.errors.workingTimeId && formik.touched.workingTimeId }/>
                    <Form.Field style={{ marginTop: "1em" }} onChange={(event, data) => { handleChange(data.value, "workingTypeId") }} value={formik.values.workingTypeId} options={workingTimeOptions} label='Çalışma Zamanı' control={Select} placeholder='Örn. Part-Time...' 
                    error={formik.errors.workingTypeId && formik.touched.workingTypeId}/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field style={{ marginTop: "1em" }} error={formik.errors.lastDate && formik.touched.lastDate}>
                        <Input
                            style={{ marginTop : "1.7em", height :"3.3em"   }}
                            id="lastDate"
                            type="date"
                            
                            onChange={formik.handleChange}
                            value={formik.values.lastDate}
                            onBlur={formik.handleBlur}
                        />
                        
                    </Form.Field>
                    <Form.Field style={{ marginTop: "-0.3em" }} error={formik.errors.minSalary && formik.touched.minSalary}>
                        <Label basic style={{ marginBottom : "-1.7em"  }} />
                        <Input  style={{ marginTop : "1.7em", height :"3.3em"   }}
                        type="number" 
                        id="minSalary" 
                        onChange={formik.handleChange}
                        values={formik.values.minSalary}
                        placeholder='Örn. 3000...' 
                        />
                    </Form.Field>
                    <Form.Field style={{ marginTop: "-0.3em" }}  error={formik.errors.maxSalary && formik.touched.maxSalary}>
                        <Label basic style={{ marginBottom : "-1.7em"  }} />
                        <Input  style={{ marginTop : "1.7em", height :"3.3em"   }}
                        type="number" 
                        id="maxSalary" 
                        onChange={formik.handleChange}
                        values={formik.values.maxSalary}
                        placeholder='Örn. 5000...'
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field style={{ marginTop: "1em", height: "2.8em" }} id="numberOfPositionUnit" onChange={formik.handleChange} values={formik.values.numberOfPositionUnit} control={Input} label='Aranan Çalışan Sayısı' type="number" 
                    error={formik.errors.numberOfPositionUnit && formik.touched.numberOfPositionUnit}/>
                    <Form.Field style={{ marginTop: "1em" }} control={Select} onChange={(event, data) => { handleChange(data.value, "cityId") }} values={formik.values.cityId} options={cityOptions} label='Şehir' placeholder='Örn. Sakarya...' 
                    error={formik.errors.cityId && formik.touched.cityId}/>

                </Form.Group>

                <Form.TextArea id="detail" label='Detay' onChange={formik.handleChange} value={formik.values.detail} placeholder='İlan Detayı...' 
                error={formik.errors.detail && formik.touched.detail}/>
                <Form.Button circular color="teal" type="Submit" >Yayınla</Form.Button>
            </Form>

        </div>
    )
}

