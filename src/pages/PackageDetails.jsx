import React from 'react';
import { useLoaderData } from 'react-router';

const PackageDetails = () => {

    const details = useLoaderData()
console.log('package details', details)

const {tour_name, image, duration, departure_location, destination, price, departure_date, contact_no, package_details, guide_email, guide_name, guide_photo} = details

    return (
        <div>
            package details
        </div>
    );
};

export default PackageDetails;