import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { Button, Form, Input, Select } from 'semantic-ui-react'


export default function JobAdForm() {

    const formik = useFormik({
        initialValues: {
            relaseDate: "",
            lastDate: "",
            detail: "",
            workingType: "",
            workingTime: "",
            minSalary: "",
            maxSalary: "",
            numberOfPositionUnit: "",
            employer: "",
            jobPosition: "",
            city: ""

        }, validationSchema: Yup.object({
            relaseDate: Yup.date().required("Lütfen İlanın Yayınlanmasını İstediğiniz Tarihi Seçin"),
            lastDate: Yup.date().required("Lütfen İlanın Sona Ereceği Tarihi Seçin"),
            detail: Yup.string().required("İlan Detayı Belirtilmelidir."),
            workingType: Yup.string().required("Boş geçilemez").oneOf(["uzaktan", "ofisten"]),
            workingTime: Yup.string().required("Boş Geçilemez").oneOf(["fulltime", "parttime"]),
            minSalary: Yup.number("Minumum Maaş Bilgisi Girilmelidir.").min(0),
            maxSalary: Yup.number("Maximum Maaş Bilgisi Girilmelidir.").min(0),
            numberOfPositionUnit: Yup.number("Açık Pozisyon Sayısı Girilmelidir").required("Boş Bırakılamaz"),
            employer: Yup.string().required("İş Veren Gral"),
            jobPosition: Yup.string().required("Bir Pozisyon Seçiniz").oneOf(["1", "2", "3"]),
            city: Yup.string().required("Şehir Seçmelisiniz").oneOf(["sakarya", "kocaeli"])

        }),
        onSubmit: (values,{resetForm,setSubmitting}) => {
            
            setTimeout(()=>{
                resetForm();
            },3000)
          },
    })

    return (
        <div>
           
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field style={{ marginTop: "1em" }} id="jobPosition" control={Select} label='İş Pozisyonu' placeholder='Örn. Senior Developer...' />
                    <Form.Field style={{ marginTop: "1em" }} control={Select} label='Çalışma Türü' placeholder='Örn. Uzaktan, yakından...' />
                    <Form.Field style={{ marginTop: "1em" }} control={Select} label='Çalışma Zamanı' placeholder='Örn. Part-Time...' />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input style={{ marginTop: "1em", height: "3.5em" }} label='Son Başvuru Tarihi' type="date" />
                    <Form.Field style={{ marginTop: "1em" }} control={Input} label='Minimum Maaş' type="number" placeholder='Örn. 3000...' />
                    <Form.Field style={{ marginTop: "1em" }} control={Input} label='Maximum Maaş' type="number" placeholder='Örn. 5000...' />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field style={{ marginTop: "1em", height: "2.8em" }} control={Input} label='Aranan Çalışan Saysıs' type="number" />
                    <Form.Field style={{ marginTop: "1em" }} control={Select} label='Şehir' placeholder='Örn. Sakarya...' />

                </Form.Group>

                <Form.TextArea id="detail" label='Detay' placeholder='İlan Detayı...' value={formik.values.detail} onChange={formik.handleChange} />
                <Button attached basic color='teal' type="submit" >Yayınla</Button>
            </Form>
           
        </div>
    )
}





// <label htmlFor="detail">Detay</label>
//                 <input id="detail" type="text" placeholder="Detay..." className="input" value={formik.values.detail} onChange={formik.handleChange} />
//                 <label htmlFor="workingType">Detay</label>
//                 <input id="workingType" type="text" placeholder="Çalışma Şekli..." className="input" value={formik.values.workingType} onChange={formik.handleChange} />
//                 <label htmlFor="workingTime">Detay</label>
//                 <input id="workingTime" type="text" placeholder="Çalışma Zamanı..." className="input" value={formik.values.workingTime} onChange={formik.handleChange} />
//                 <label htmlFor="minSalary">Detay</label>
//                 <input id="minSalary" type="number" placeholder="Minimum Maaş..." className="input" value={formik.values.minSalary} onChange={formik.handleChange} />
//                 <label htmlFor="maxSalary">Detay</label>
//                 <input id="maxSalary" type="number" placeholder="Maximum Maaş..." className="input" value={formik.values.maxSalary} onChange={formik.handleChange} />


// <Formik
//             initialValues={{
//                 relaseDate : "",
//                 lastDate : "",
//                 detail : "",
//                 workingType : "",
//                 workingTime : "",
//                 minSalary : "",
//                 maxSalary : "",
//                 numberOfPositionUnit : "",
//                 employer : "",
//                 jobPosition : "",
//                 city : ""

//             }}
//             validationSchema={
//                 Yup.object({
//                     relaseDate: Yup.date().required("Lütfen İlanın Yayınlanmasını İstediğiniz Tarihi Seçin"),
//                     lastDate : Yup.date().required("Lütfen İlanın Sona Ereceği Tarihi Seçin"),
//                     detail : Yup.string().required("İlan Detayı Belirtilmelidir."),
//                     workingType : Yup.string().required("Boş geçilemez").oneOf(["uzaktan","ofisten"]),
//                     workingTime : Yup.string().required("Boş Geçilemez").oneOf(["fulltime","parttime"]),
//                     minSalary : Yup.number("Minumum Maaş Bilgisi Girilmelidir."),
//                     maxSalary : Yup.number("Maximum Maaş Bilgisi Girilmelidir."),
//                     numberOfPositionUnit : Yup.number("Açık Pozisyon Sayısı Girilmelidir").required("Boş Bırakılamaz"),
//                     employer : Yup.string().required("İş Veren Gral"),
//                     jobPosition : Yup.string().required("Bir Pozisyon Seçiniz").oneOf(["1","2","3"]),
//                     city : Yup.string().required("Şehir Seçmelisiniz").oneOf(["sakarya","kocaeli"])

//                 })
//             }
//             />
//             {
//                 ({values,errors,handleChange,handleSubmit,handleReset,dirty,isSubmitting})=> (
//                     <form>
//                         <label htmlFor="detail">Detay</label>
//                         <input id="detail" type="text" placeholder="Detay..." className="input" value={values.detail} onChange= {handleChange} />
//                         <label htmlFor="workingType">Detay</label>
//                         <input id="workingType" type="text" placeholder="Çalışma Şekli..." className="input" value={values.workingType} onChange= {handleChange} />
//                         <label htmlFor="workingTime">Detay</label>
//                         <input id="workingTime" type="text" placeholder="Çalışma Zamanı..." className="input" value={values.workingTime} onChange= {handleChange} />
//                         <label htmlFor="minSalary">Detay</label>
//                         <input id="minSalary" type="number" placeholder="Minimum Maaş..." className="input" value={values.minSalary} onChange= {handleChange} />
//                         <label htmlFor="maxSalary">Detay</label>
//                         <input id="maxSalary" type="number" placeholder="Maximum Maaş..." className="input" value={values.maxSalary} onChange= {handleChange} />
//                     </form>

//                 )

//             }


