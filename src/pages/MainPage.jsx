import React from 'react';
import RatingCard from '../components/RatingCard';
import TestimonialCard from '../components/TestimonialCard';

const MainPage = () => {
    return (
        <div className='wrapper h-dvh md:h-auto min-h-fit p-0 m-0 bg-base-300 flex justify-center items-center'>
            <div className='social w-full max-w-277.5 min-h-146 flex flex-col justify-between mx-6 my-20 '>
                <div className='social-top min-h-fit flex justify-between flex-wrap'>
                    {/* h-64.5 */}
                    <div className='social-header md:w-103 w-full h-64 md:text-left text-center flex flex-col md:justify-between justify-center'>
                        <h1 className={`social-header__title md:text-[56px]/12.25 text-[40px]/8.25 tracking-[-3.4%] font-bold md:mb-0 mb-5`}>10,000+ of our users love our products.</h1>
                        <p className='social-header__text text-[19px] font-medium tracking-[-3.4%]'>
                            {' '}
                            We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
                        </p>
                    </div>
                    <div className='social-rating md:w-135 w-full md:h-64 h-fit py-7.25 flex flex-col justify-between gap-4'>
                        <RatingCard text='Rated 5 Stars in Reviews' />
                        <RatingCard
                            text='Rated 5 Stars in Report Guru'
                            cardPosition='self-center'
                        />
                        <RatingCard
                            text='Rated 5 Stars in BestTech'
                            cardPosition='self-end'
                        />
                    </div>
                </div>
                <div className='social-bottom flex justify-between flex-wrap gap-2'>
                    {/* h-66.5 */}
                    <TestimonialCard
                        buyerImg={`../../public/images/image-colton.jpg`}
                        buyerName={`Colton Smith`}
                        buyerText={`"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"`}
                    />
                    <TestimonialCard
                        buyerImg={`../../public/images/image-irene.jpg`}
                        cardPosition={'center'}
                        buyerName={`Irene Roberts`}
                        buyerText={`"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."`}
                    />
                    <TestimonialCard
                        buyerImg={`../../public/images/image-anne.jpg`}
                        cardPosition={'end'}
                        buyerName={`Anne Wallace`}
                        buyerText={`"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"`}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
