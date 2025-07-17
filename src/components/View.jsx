import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav'

const View = () => {
    const [output, setOutput] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4005/viewall").then((response) => {
            setOutput(response.data)
        })
    }, [])

    return (
        <div>
            <Nav />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-bordered table-striped table-hover table-info">
                            <thead className="table-info text-center">
                                <tr>
                                    <th>Name</th>
                                    <th>AdmNo</th>
                                    <th>Course</th>
                                    <th>Present</th>
                                    <th>Total Days</th>
                                    <th>Attendance</th>
                                    <th>Exam 1 Result</th>
                                    <th>Exam 2 Result</th>
                                    <th>Assignment Total</th>
                                    <th>Internal Mark</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    output.map(
                                        (value, index) => (
                                            <tr key={index}>
                                                <td>{value.name}</td>
                                                <td>{value.admno}</td>
                                                <td>{value.subject}</td>
                                                <td>{value.present}</td>
                                                <td>{value.totalDays}</td>
                                                <td>{value.attendance}</td>
                                                <td>{value.exam1Result}</td>
                                                <td>{value.exam2Result}</td>
                                                <td>{value.assignmentTot}</td>
                                                <td>{Number(value.internalMark).toFixed(2)}</td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View
