import React from 'react'


<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"></script>

const GigProfile = ({ title, userName, userTitle, rating, reviews, price, imageUrl }) => {
    return (
        <div className="one-sec">
            <div className="p-20 flex-col justify-center items-start gap-1 inline-flex">

                <div className="w-96 h-72 bg-black bg-opacity-20 rounded-lg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <h1 className='w-96 text-zinc-600 text-2xl font-medium capitalize'>{title}</h1>

                <div className="w-40 h-12 flex items-center relative gap-2">
                    {/* User image and status indicator */}
                    <div className="w-12 h-12 relative">
                        {/* User Image */}
                        <div className="w-12 h-12 left-0 top-0 absolute bg-zinc-300 rounded-full"></div>
                        {/* Status Indicator */}
                        <div className="w-3.5 h-3.5 left-[32px] top-[36px] absolute bg-green-600 rounded-full"></div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="text-black text-2xl font-bold">{userName}</div>
                        <div className="text-zinc-600 text-sm font-semibold">{userTitle}</div>
                    </div>
                </div>

                {/* Rating Section */}
                <div className="RatingSection3 w-32 h-7 flex items-center gap-x-1">
                    <div className="StarIcon h-6 flex-shrink-0 gap-x-4">
                        <i className="fa fa-star text-black" aria-hidden="false"></i>
                    </div>
                    <div className="Rating text-black text-1xl font-extrabold capitalize">{rating}</div>
                    <div className="Rating text-zinc-600 text-1xl font-normal capitalize">({reviews})</div>
                </div>

                {/* Price */}
                <div className="PriceS4 w-96 text-zinc-600 text-1xl font-medium capitalize">Price Start From {price}</div>

            </div>
        </div>
    );
}

export default GigProfile;

