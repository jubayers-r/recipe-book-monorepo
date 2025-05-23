import React from 'react';

const Accordion = ({Q, A}) => {
    return (
        <div className="collapse collapse-arrow bg-[#f5f5f5] border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            {Q}
          </div>
          <div className="collapse-content text-sm">
            {A}
          </div>
        </div>
    );
};

export default Accordion;