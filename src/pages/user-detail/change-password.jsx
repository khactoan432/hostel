import { RxAvatar } from "react-icons/rx";
import { LiaFlagUsaSolid } from "react-icons/lia";
import 'flowbite';
import LeftSideBar from "./components/left-side-bar";

const ChangePassWord = () => {
    return (
        <div className="grid grid-cols-10 gap-3">
            <LeftSideBar />
            <div className="h-screen col-start-3 col-span-8 pl-3 text-lg bg-[#b6d6f2]">
                <div className="flex align-center items-center h-24">
                    <div class="relative w-80 ml-14">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-full text-sm text-black-900 bg-gray-50 rounded-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-[#E8C4F2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-6 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg></button>
                    </div>
                    <div className="ml-96 pl-72 flex flex-row align-center items-center  ">
                        <LiaFlagUsaSolid style={{ fontSize: "35px" }} />
                        <RxAvatar style={{ fontSize: "35px", marginLeft: "20px" }} />
                    </div>
                </div>
                <div className="my-8 ml-14 mt-8 hover:cursor-pointer text-2xl font-semibold text-black">
                    UsersList/Duc Phan/Change Password
                </div>
                <div className="mx-14 bg-white text-[#797C7B] p-6 h-2/3 rounded-2xl">
                    <form className="w-1/2 mx-auto mt-16 mb-16">
                        <div class="grid gap-6 mb-10 md:grid-cols-1">
                            <div>
                                <input type="password" id="old_pass" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Old Password" required />
                            </div>
                            <div>
                                <input type="password" id="new_pass" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
                            </div>
                            <div>
                                <input type="password" id="confirm-pass" class="bg-gray-50 border border-[#B6D6F2] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" required />
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-[#25BEB9] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ChangePassWord;