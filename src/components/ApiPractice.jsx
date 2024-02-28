import React, { useState } from 'react'
import axios from 'axios'
import { TableContext } from './ThemeContext';

const ApiPractice = ({ setData }) => {

    async function fetchData() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(response.data)
            console.log(response.data)
        } catch (e) {
            console.error(e.message)
        }
    }

    return (
        <>
            <div>ApiPractice</div>
            <button onClick={fetchData}>fetch data</button>
            {/* {
                data?.map((value) => (
                    //console.log(value)
                    <table style={{ width: "90vh", margin: "auto" }}>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        <tr key={value.id}>
                            <td >{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.company.name}</td>
                            <td>{value.email}</td>
                            <td>{value.phone}</td>
                        </tr>
                    </table>
                ))} */}
        </>
    )
}

export default ApiPractice