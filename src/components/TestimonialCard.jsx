import React from 'react';

const TestimonialCard = ({ buyerImg, buyerName, buyerText, cardPosition }) => {
    return (
        <div className={`social-testimonial__card md:w-87.5 w-full md:h-58.5 h-fit px-8 py-10 rounded-lg self-${cardPosition}`}>
            <div className='h-full flex flex-col'>
                <div className='h-12 mb-8 p-0 flex'>
                    <img
                        src={buyerImg}
                        alt='avatar img'
                        className='h-full rounded-full'
                    />
                    <div className='h-full w-fit text-[17px] flex flex-col justify-between ml-6'>
                        <h3 className='social-testimonial__card--name font-bold p-0 m-0'>{buyerName}</h3>
                        <span className='social-testimonial__card--type font-medium p-0 m-0'>Verified Buyer</span>
                    </div>
                </div>
                <p className='social-testimonial__card--text text-[17px]/5.5 font-medium tracking-[-3.9%] '>{buyerText}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
