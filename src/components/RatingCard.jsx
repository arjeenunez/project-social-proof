import React from 'react';
import StarIcon from '/images/icon-star.svg';

const RatingCard = ({ text, cardPosition = '' }) => {
    return (
        <div
            className={`social-rating__card flex md:flex-row flex-col justify-between items-center md:gap-0 gap-4 md:py-0 py-4 px-8 md:w-111 w-full md:h-14 min-h-fit text-center rounded-sm ${cardPosition}`}
        >
            <div className='flex gap-x-2'>
                <img
                    src='/images/icon-star.svg'
                    alt='star'
                />
                <img
                    src='/images/icon-star.svg'
                    alt='star'
                />
                <img
                    src='/images/icon-star.svg'
                    alt='star'
                />
                <img
                    src='/images/icon-star.svg'
                    alt='star'
                />
                <img
                    src='/images/icon-star.svg'
                    alt='star'
                />
            </div>
            <span className='social-rating__card--text w-58 text-[16px] font-bold tracking-[0.24%]'>{text}</span>
        </div>
    );
};

export default RatingCard;
