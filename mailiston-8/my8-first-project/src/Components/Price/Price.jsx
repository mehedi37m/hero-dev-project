import React from 'react';
import PriceOption from '../PriceOpton/PriceOption';

const Price = () => {

const priceHoldList = [
    {
      "id": 1,
      "name": "Basic Membership",
      "features": [
        "Access to cardio equipment",
        "Access to strength training machines",
        "Locker room access",
        "24/7 access to the gym",
        "Basic fitness assessment",
        "Discounted personal training sessions"
      ],
      "price": 30 
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "features": [
        "All Basic Membership features",
        "Access to group fitness classes",
        "Personalized workout plan",
        "Sauna and steam room access",
        "Towel service",
        "Nutrition workshops",
        "Guest passes (2 per month)"
      ],
      "price": 50 
    },
    {
      "id": 3,
      "name": "VIP Membership",
      "features": [
        "All Premium Membership features",
        "Access to indoor swimming pool",
        "One-on-one personal trainer sessions",
        "Nutrition consultation",
        "Priority scheduling for classes",
        "Massage therapy sessions (1 per month)",
        "Unlimited guest passes"
      ],
      "price": 80 
    }
  ]

    return (
        <div>
            <div>
                <h2 className='text-6xl font-extrabold'>best price </h2>
               <div className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                   priceHoldList.map((option,idx) => <PriceOption 
                   key={idx}
                   option={option}></PriceOption>) 
                }
               </div>
            </div>
        </div>
    );
};

export default Price;