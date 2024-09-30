const Header = () =>{
    return (
        <header className="flex justify-center">
            <div className="w-[50%]">
            <img src="https://media.licdn.com/dms/image/v2/C4E1BAQGk-k0M5Uyxvg/company-background_10000/company-background_10000/0/1623393693070/university_of_san_carlos_cover?e=2147483647&v=beta&t=Hyc0zMYEZ7Dyf0uq4A_bOgPI7FacICAAXDVOCcw71eo" alt="usc logo" className="w-[450px] h-auto"/>
            </div>
            <div className="w-[50%] flex flex-row-reverse items-center px-[20px]">
                <div className="flex justify-center items-center">
                <img src="https://i.pinimg.com/originals/4e/58/c7/4e58c7c5e09fbf7d2427ce1d610cd305.png" alt="" className="h-auto w-[30px] rounded-full"/>
                <img src="https://e7.pngegg.com/pngimages/177/101/png-clipart-computer-icons-no-symbol-cancel-angle-rim-thumbnail.png" alt="" className="h-auto w-[30px] rounded-full"/>

                <img src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png" alt="" className="h-auto w-[30px] rounded-full"/>
                <h2 className="text-2xl font-extrabold dark:text-white">||</h2>
                <h3 className="text-2xl font-extrabold dark:text-white">23100209</h3>
                </div>
            </div>
        </header>
    )
}


export default Header