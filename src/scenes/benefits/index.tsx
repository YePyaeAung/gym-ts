import HText from "@/shared/HText";
import { BenefitTypes, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion'
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {

    const benefits: Array<BenefitTypes> = [
        {
            icon: <HomeModernIcon className="h-6 w-6" />,
            title: "Lorem, ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere nemo dignissimos quas, ipsum eius. Totam odio quibusdam doloremque temporibus illum ipsum ab quasi deserunt a necessitatibus, magni accusamus omnis."
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            title: "Lorem, ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere nemo dignissimos quas, ipsum eius. Totam odio quibusdam doloremque temporibus illum ipsum ab quasi deserunt a necessitatibus, magni accusamus omnis."
        },
        {
            icon: <AcademicCapIcon className="h-6 w-6" />,
            title: "Lorem, ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere nemo dignissimos quas, ipsum eius. Totam odio quibusdam doloremque temporibus illum ipsum ab quasi deserunt a necessitatibus, magni accusamus omnis."
        },
    ];

    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    }

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText>Lorem, ipsum dolor sit amet.</HText>
                <p className="my-5 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere nemo dignissimos quas, ipsum eius. Totam odio quibusdam doloremque temporibus illum ipsum ab quasi deserunt a necessitatibus, magni accusamus omnis.
                </p>
            </motion.div>
            {/* Benefits */}
            <motion.div 
                className="mt-5 md:flex items-center justify-between gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitTypes) => (
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
                ))}
            </motion.div>
            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                <img className="mx-auto" src={BenefitsPageGraphic} alt="Benefits-Page-Graphic" />
                {/* Description */}
                <div className="">
                    {/* Title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        Lorem ipsum dolor sit amet{" "}
                                        <span className="text-primary-500">consectetur</span>.    
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                    {/* Description */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}    
                    >
                        <p className="my-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum porro natus debitis facere minus odio ut similique quas fugiat non, cumque doloremque inventore enim pariatur accusamus, delectus, aliquid impedit quo?
                        </p>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus dignissimos numquam, tempora vero alias. Esse tenetur accusamus ipsam recusandae nam fugit saepe nihil, quae magnam at quidem impedit veniam!
                        </p>
                    </motion.div>
                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:-right-20 before:z-[-1] before:content-sparkles">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}  
                            >
                                <ActionButton setSelectedPage={setSelectedPage} >
                                    Join Now
                                </ActionButton>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits