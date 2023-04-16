import React, { useEffect, useState } from 'react';

import Map from 'react-map-gl';

const Maps = (props: any) => {
    const [data, setData] = useState<any>()
    const [address, setAddress] = useState(props.location)
    

    const getMapData = async () => {
        const optionsMap = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f9f9ecc392msh91f6c728660d109p1721dfjsn4d81472f4b07',
                'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
            }
        };

        await fetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?street=${address?.area}&city=${address?.city}&country=${address?.country}`, optionsMap)
            .then(response => response.json())
            .then(response => setData(response))
    }       

    const getAddressData = async () => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("source_language", "fa");
        encodedParams.append("target_language", "en");
        encodedParams.append("text", address);
        const optionsAddress = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'f9f9ecc392msh91f6c728660d109p1721dfjsn4d81472f4b07',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
            },
            body: encodedParams
        };

        await fetch('https://text-translator2.p.rapidapi.com/translate', optionsAddress)
            .then(response => response.json())
            .then(response => setAddress(response))
    }

    useEffect(() => {
        getMapData()
        getAddressData()
    }, [])

    return (
        <>
            {
                data ?
                    <Map
                        initialViewState={{
                            longitude: Number(data?.[0]?.lon),
                            latitude: Number(data?.[0]?.lat),
                            zoom: 14
                        }}
                        style={{ width: "95%", height: 400 }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        mapboxAccessToken='pk.eyJ1Ijoic2FtaWxvIiwiYSI6ImNsZzc3c3ZmMjBrd3Izc285YzRyMDhtYzQifQ.Z3aahlA2SI5gy7xz5-oH0g'
                    />
                    :
                    <h1>loading...</h1>
            }
        </>

    );
};

export default Maps;