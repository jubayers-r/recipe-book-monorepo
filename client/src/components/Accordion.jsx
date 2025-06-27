import { Slide, Fade } from "react-awesome-reveal";

const Accordion = ({ Q, A }) => {
  return (
    <Slide direction="left">
      <Fade duration={1000}>
        <div className="collapse collapse-arrow bg-[#f5f5f5] dark:bg-[#343131] border border-base-300 dark:text-white">
          <input className="dark:text-black" type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">{Q}</div>
          <div className="collapse-content text-sm">{A}</div>
        </div>
      </Fade>
    </Slide>
  );
};

export default Accordion;
