import HText from "@/shared/HText";
import { ClassTypes, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "./Class";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const OurClasses = ({setSelectedPage}: Props) => {
    const classes: Array<ClassTypes> = [
        {
            name: "Class 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae ab, eius alias animi temporibus quia velit voluptatibus! Ab nostrum, corporis asperiores quam consectetur ad consequatur officiis. Sapiente, odit corporis.",
            image: image1,
        },
        {
            name: "Class 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae ab, eius alias animi temporibus quia velit voluptatibus! Ab nostrum, corporis asperiores quam consectetur ad consequatur officiis. Sapiente, odit corporis.",
            image: image2,
        },
        {
            name: "Class 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae ab, eius alias animi temporibus quia velit voluptatibus! Ab nostrum, corporis asperiores quam consectetur ad consequatur officiis. Sapiente, odit corporis.",
            image: image3,
        },
        {
            name: "Class 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae ab, eius alias animi temporibus quia velit voluptatibus! Ab nostrum, corporis asperiores quam consectetur ad consequatur officiis. Sapiente, odit corporis.",
            image: image4,
        },
        {
            name: "Class 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae ab, eius alias animi temporibus quia velit voluptatibus! Ab nostrum, corporis asperiores quam consectetur ad consequatur officiis. Sapiente, odit corporis.",
            image: image5,
        },
        {
            name: "Class 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae ab, eius alias animi temporibus quia velit voluptatibus! Ab nostrum, corporis asperiores quam consectetur ad consequatur officiis. Sapiente, odit corporis.",
            image: image6,
        }
    ];

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div 
                className="mx-auto w-5/6"
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0}
                }}
            >
                <div className="md:w-3/5">
                    <HText>Lorem ipsum dolor sit amet!</HText>
                    <p className="py-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis quo modi minus fuga laudantium ducimus voluptatibus aperiam iste illo doloremque illum soluta est, dolor possimus expedita necessitatibus molestiae. Hic.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((ourClass: ClassTypes, index) => (
                        <Class
                            key={`${ourClass.name}-${index}`}
                            name={ourClass.name}
                            description={ourClass.description}
                            image={ourClass.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses