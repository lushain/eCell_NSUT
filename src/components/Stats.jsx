import React from 'react';
import { stats } from '../constants';
import styles from '../style';
 
const Stats = () =>  (
    <section className={`${styles.flexCenter} flex-col md:flex-row flex-wrap mt-12 sm:mt-20 sm:mb-20 mb-6 px-6 sm:px-10 md:px-20 lg:px-40`}>
  {stats.map((stat) => (
    <div
      key={stat.id}
      className="flex-1 flex items-center justify-center md:justify-start flex-row m-4 min-w-[200px]"
    >
      <h4 className="font-poppins font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[42px] lg:leading-[53px] text-white mr-3">
        {stat.value}
      </h4>
      <p className="font-poppins font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[21px] sm:leading-[24px] text-white">
        {stat.title}
      </p>
    </div>
  ))}
</section>

  );


export default Stats
