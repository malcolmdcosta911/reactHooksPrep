import React, {useEffect, useState} from 'react';
import Image from './Image';
import http from '../services/httpService';
import config from '../config.json';
import a1 from '../public/images/image.jpg';

const Loader = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {

        const controller = new AbortController();

        http.get(config.url + "/posts", { signal: controller.signal }
        )
            .then(function (response) {
                const { data } = response;
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.log(error);
                setError(error);
            });

        return () => {
            controller.abort();
        }

    }, []);

    return ( 
        <Image src={a1} alt=""/>
     );
}
 
export default Loader;