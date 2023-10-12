import React from 'react';

const Card = (props) => {
  const getFlagImageUrl = (countryCode) => {
    return `https://cdn.ipwhois.io/flags/${countryCode.toLowerCase()}.svg`;
};
  return (
    <>
    <div className="container mt-4">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center">IP Information</h4>
                       
                       
                   
                            <div>
                                <p><strong>IP Address:</strong><span className='spa'>{props.apidata.ip}</span></p>
                                <p><strong>Continent:</strong><span className='spa'>{props.apidata.continent}</span></p>
                                <p><strong>Country:</strong><span className='spa'>{props.apidata.country}</span></p>
                                <p><strong>Region:</strong><span className='spa'>{props.apidata.region}</span></p>
                                <p><strong>Region_code:</strong><span className='spa'>{props.apidata.region_code}</span></p>
                                <p><strong>City:</strong><span className='spa'>{props.apidata.city}</span></p>
                                <p><strong>Postal code:</strong><span className='spa'>{props.apidata.postal}</span></p>
                                <p><strong>Calling code:</strong><span className='spa'>{props.apidata.calling_code}</span></p>
                                <p><strong>Capital:</strong><span className='spa'>{props.apidata.capital}</span></p>
                                <p><strong>Borders:</strong><span className='spa'>{props.apidata.borders}</span></p>
                                <p><strong>Flag:</strong><span className='spa'><img
                                            src={getFlagImageUrl(props.apidata.country_code)}
                                            alt="Country Flag"
                                            width="50"
                                        />
                                </span></p>
                          
                                
                                
                            </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                    {/* Add your map component here */}
                    {/* Example: <MapComponent /> */}
                    mappppppppp here
                </div>
        </div>
    </div>
    </>
  );
};

export default Card;
