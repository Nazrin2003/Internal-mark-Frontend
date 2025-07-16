import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Calc = () => {
    const [output, changeOutput] = useState({
        name: "",
        admno: "",
        subject: "",
        internal: "",
        attendance: "",
        assignment: ""
    })
    const [input, changeInput] = useState({
        "name": "",
        "admno": "",
        "subject": "",
        "present": "",
        "totalDays": "",
        "exam1": "",
        "exam1Total": "",
        "exam2": "",
        "exam2Total": "",
        "asg1": "",
        "asg2": ""
    })
    const inputHandler = (event) => {
        changeInput({
            ...input, [event.target.name]: event.target.value
        })
    }
    const readInput = () => {
        console.log(input)
        axios.post('http://localhost:4004/calculate', input).then(
            (response) => {
                changeOutput(response.data)
            }
        ).catch()
    }
    return (
        <div>
            <Nav/>
            <div className="container py-6">
                <div className="row g-4 px-3 py-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4 px-3 py-3">
                            <center><h3 className='card-title mb-4 text-info'>Internal Mark Calculator</h3></center>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Admission No</label>
                                <input type="text" className="form-control" name="admno" value={input.admno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <label htmlFor="" className="form-label">Subject</label>
                                <input type="text" className="form-control" name="subject" value={input.subject} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Present Days</label>
                                <input type="text" className="form-control" name="present" value={input.present} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total Days</label>
                                <input type="text" className="form-control" name="totalDays" value={input.totalDays} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Exam Mark 1</label>
                                <input type="text" className="form-control" name="exam1" value={input.exam1} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Exam Mark 2</label>
                                <input type="text" className="form-control" name="exam2" value={input.exam2} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total Mark of Exam 1</label>
                                <input type="text" className="form-control" name="exam1Total" value={input.exam1Total} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total Mark of Exam 2</label>
                                <input type="text" className="form-control" name="exam2Total" value={input.exam2Total} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Assignment 1</label>
                                <input type="text" className="form-control" name="asg1" value={input.asg1} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Assignment 2</label>
                                <input type="text" className="form-control" name="asg2" value={input.asg2} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-info" onClick={readInput}>Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="card rounded-4 border-0" style={{ backgroundColor: '#dffcfcff' }}>
                            <div className="card-body px-4">
                                <h3 className="card-title text-center mb-4 text-info">Internal Marks Summary</h3>
                                
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <p><strong>Name:</strong> {output.name}</p>
                                        <p><strong>Admission No:</strong> {output.admno}</p>
                                        <p><strong>Subject:</strong> {output.subject}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><strong>Attendance Mark:</strong> {output.attendance}</p>
                                        <p><strong>Assignment Mark:</strong> {output.assignment}</p>
                                        <p className="text-danger fw-bold fs-5"><strong>Internal Mark:</strong> {output.internal}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Calc