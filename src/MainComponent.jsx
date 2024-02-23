// MainComponent.jsx or App.js
import React from 'react';
import Gigprofile from './Components/Gigprofile/Gigprofile';
const MainComponent = () => {
    return (
        <div className="flex flex-row justify-center items-center -mx-4">
            <div className="px-4">
            {/* First Gigprofile instance */}
            <Gigprofile 
                title="I will be your lawyer and provide you the best legal advice"
                userName="Mozzam"
                userTitle="Adv High Court"
                rating="5.0"
                reviews="192"
                price="PKR5000"
                imageUrl="path_to_image.jpg"
            />

            {/* Second Gigprofile instance */}
            <Gigprofile 
                title="I will design your website"
                userName="Alex"
                userTitle="Web Designer"
                rating="4.8"
                reviews="150"
                price="PKR8000"
                imageUrl="path_to_other_image.jpg"
            />

            {/* Third Gigprofile instance */}
            <Gigprofile 
                title="I will create a custom digital marketing plan"
                userName="Sarah"
                userTitle="Digital Marketer"
                rating="4.9"
                reviews="230"
                price="PKR7000"
                imageUrl="path_to_another_image.jpg"
            />

            {/* Add more Gigprofile instances as needed, each with different props */}
            </div>
        </div>
    );
};

export default MainComponent;
