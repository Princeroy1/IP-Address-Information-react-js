import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card';

const Api = (props) => {
    const [apidata, setApidata] = useState(null);
    
    const fetchapi = async () => {
        const url = `https://ipwho.is/${props.ip}`;
        console.log(url);
        try {
            const response = await axios.get(url);
            setApidata(response.data);
        } catch (error) {
            console.error('Error fetching data from the API:', error);
        }
    };

    return (
        <>
            <button className="btn btn-primary position-absolute" onClick={fetchapi}>
                Search
            </button>
            <br/>
            {apidata === null? (
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Input IP Adress</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) :  (
                apidata.message === 'Invalid IP address' ? (
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>IP Address not valid</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Card apidata={apidata}/>
                )
            )}
        </>
    );
}

export default Api;
