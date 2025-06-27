import { Slide, Fade } from "react-awesome-reveal";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <Slide direction="left">
      <Fade duration={1000}>
        <div className="text-center my-10">
          <h3 className="text-green-600 font-[Handlee] text-2xl dark:text-emerald-400">
            FAQ
          </h3>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold dark:text-white">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="grid gap-3  lg:w-[70%] mx-auto my-10">
          <Accordion
            Q={"How do I create an account?"}
            A={
              "Click the 'Sign Up' button in the top right corner and follow the registration process."
            }
          />
          <Accordion
            Q={"I forgot my password. What should I do?"}
            A={
              "Click on 'Forgot Password' on the login page and follow the instructions sent to your email."
            }
          />
          <Accordion
            Q={"How much does TasteScript cost?"}
            A={
              "TasteScript is 100% Free OpenSource Recipe Book, means you don't have to pay anything. Just create an account and you are good to go."
            }
          />
          <Accordion
            Q={"Are my recipes public?"}
            A={
              "Yes, Your Recipes are Public, You can Update or delete anytime you want"
            }
          />
        </div>
      </Fade>
    </Slide>
  );
};

export default FAQ;
