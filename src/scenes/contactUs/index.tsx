import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyle = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const formSubmit = async(e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section
        id="contactus"
        className="mx-auto w-5/6 pt-24 pb-32"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            {/* Header */}
            <motion.div
                className="md:3/5"
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {opacity: 1, x: 0}
                }}
            >
                <HText>
                    <span className="text-primary-500">Join Now</span> Lorem, ipsum dolor sit amet!
                </HText>
                <p className="mt-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda cumque quam quis facilis iste aspernatur magnam recusandae praesentium ex, suscipit nisi corrupti perspiciatis, nesciunt accusantium voluptatibus, debitis accusamus dicta enim.
                </p>
            </motion.div>
            {/* Form & Image */}
            <div className="mt-10 md:flex justify-between gap-8">
                {/* Form */}
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {opacity: 1, y: 0}
                    }}
                >
                    <form target="_blank" onSubmit={formSubmit} method="POST" action="https://formsubmit.co/b63b60fd37672d00f489a0d2bc48a3f9">
                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Name"
                            className={inputStyle}
                            {...register("name", {
                                required: true,
                                maxLength: 100
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required!"}
                                {errors.name.type === "maxLength" && "Max Length is 100 characters!"}
                            </p>
                        )}
                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className={inputStyle}
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required!"}
                                {errors.email.type === "pattern" && "Invalid Email Address!"}
                            </p>
                        )}
                        {/* Messages */}
                        <textarea
                            rows={4}
                            cols={50}
                            placeholder="Message"
                            className={inputStyle}
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required!"}
                                {errors.message.type === "maxLength" && "Max Length is 2000 characters!"}
                            </p>
                        )}
                        <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-primary-500 hover:text-white">
                            SUBMIT
                        </button>
                    </form>
                </motion.div>
                {/* Image */}
                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {opacity: 1, y: 0}
                    }}
                >
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" className="w-full" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs