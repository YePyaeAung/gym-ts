import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <div className="bg-primary-300 py-16">
        <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus, voluptatum saepe totam, unde delectus, aliquam placeat aliquid quaerat quis voluptas officiis blanditiis? Culpa repudiandae sapiente cupiditate labore molestias natus?
                </p>
                <p>@ Evogym all rights reserved.</p>
            </div>
            <div className="mt-16 basis-1/2 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className="">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="mt-16 basis-1/2 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="">(448)123-5678</p>
            </div>
        </div>
    </div>
  )
}

export default Footer