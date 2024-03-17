import React, { useEffect, useState } from 'react';

export default function Description (fsqID) {
	const [desc, setDesc] = useState(null)
	const fetchData = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'fsq3KNUQAodTbqY9zXx82co2/s3fCkkGoluCrXvVynAEdJQ='
                }
            };

            const response = await fetch(`https://api.foursquare.com/v3/places/${fsqID}?fields=description`, options);
            const data = await response.json();
            if (data && data.length > 0) {
                setDesc(data);
            } else {
                setDesc(null);
            }
        } catch(error) {
            console.log(error);
        }
    };
	return <p>{desc.description}</p>
}