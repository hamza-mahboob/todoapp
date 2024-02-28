
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { DataContext } from './DataContext';

const Settings = ({ toggleTheme }) => {
    const theme = useContext(ThemeContext);
    const data = useContext(DataContext);

    return (
        <div className={`border-2 mt-8 ${theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-neutral-100 text-gray-800'} p-4 rounded-lg shadow-md justify-center content-center mx-5`}>
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            <button
                onClick={toggleTheme}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
            </button>

               {
                data?.map((value) => {
                    console.log(value);
                    return(
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
                    )
               })}
        </div>
    );
};

export default Settings;

