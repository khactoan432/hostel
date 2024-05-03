/** @format */

import RentalFilter from "./RentalFilter";
import { priceFilter, areaFilter } from "./constant.js";
import "./RentalFilterList.scss";

const RentalFilterList = () => {
      return (
            <div className='left-options h-fit flex flex-col gap-3 mr-[50px]'>
                  <RentalFilter {...priceFilter} cols={1} />
                  <RentalFilter {...areaFilter} cols={1} />
            </div>
      );
};

export default RentalFilterList;
