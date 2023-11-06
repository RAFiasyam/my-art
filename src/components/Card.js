import React from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <div className="absolute top-[125px] left-[550px] fixed">
            <motion.div
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.20}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: 'grabbing' }}
                className="shadow-2xl border-[5px] border-[#014D83] rounded-[30px] w-[426px] min-h-[600px] items-center text-center justify-center bg-white">
                <div className="p-[30px]">
                    <img className="transition duration-300 ease-in-out hover:scale-110 w-[200px] h-[200px] mx-[80px] object-cover my-[10px] rounded-[20px] border-[5px]" src="https://i.pinimg.com/564x/ce/84/d0/ce84d067aeea6941cc99d8d3da547eba.jpg" />
                    <h1 className="font-poppins font-semibold text-[20px]">Rafi Asyam</h1>
                    <p className="text-justify font-poppins text-gray-500 py-[10px]">
                        Hello everyone, I am a Web Developer/FrontEnd Dev. I really like coding displays, especially for websites. And usually I prefer to use JavaScript rather than PHP or Laravel.
                    </p>
                    <p className="font-poppins text-black " >I developed this website using:</p>
                    <div className="flex flex-row my-[10px] mx-[130px] gap-[10px]" >
                        <img className="w-[40px] h-[40px] transition duration-300 ease-in-out hover:scale-110" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" />
                        <img className="w-[40px] h-[40px] transition duration-300 ease-in-out hover:scale-110" src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/TailwindCSS-Dark.svg" />
                    </div>
                    <div className="flex flex-row my-[20px] mx-[9px] gap-[10px]" >
                        <a className="font-poppins" href="https://www.instagram.com/rafiasyam__/" >Instagram</a>
                        <a className="font-poppins" href="https://www.linkedin.com/in/rafi-asyam-a5bb98289/" >Linkedin</a>
                        <a className="font-poppins" href="https://github.com/RAFiasyam" >Github</a>
                        <a className="font-poppins" href="https://stackoverflow.com/users/17773876/ri-yms" >Stackoverflow</a>
                    </div>
                    <p className="font-poppins text-black" >made with 🧠 by Rafi Asyam</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Card;