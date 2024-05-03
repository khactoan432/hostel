/** @format */

import { IoIosArrowForward } from "react-icons/io";

const RentalFilter = ({ filterTitle, filterOptions, cols = 1 }) => {
      return (
            <div className='border border-gray-300 rounded-md background-third  px-3 py-2'>
                  <h5 className='mb-2 text-base font-semibold'>{filterTitle}</h5>
                  <ul className={`list-none grid grid-cols-${cols} gap-2`}>
                        {filterOptions.map((option, i) => {
                              return (
                                    <li
                                          className='flex items-center gap-1 hover:text-[#5f6f52] hover: cursor-pointer'
                                          key={i}
                                    >
                                          <IoIosArrowForward />
                                          <p className='text-sm'>{option}</p>
                                    </li>
                              );
                        })}
                  </ul>
            </div>
      );
};

export default RentalFilter;
