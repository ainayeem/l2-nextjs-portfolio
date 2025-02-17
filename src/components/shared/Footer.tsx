import { TbCircleLetterC } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <div className="text-xs xl:text-base p-2 xl:p-5 text-center border-t text-primaryColor flex items-center justify-center gap-2 text-teal-500 font-semibold">
        <TbCircleLetterC />
        {new Date().getFullYear()} Copyright Reserved - Nayeem
      </div>
    </footer>
  );
};

export default Footer;
