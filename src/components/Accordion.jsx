import { useState } from "react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (newIndex) => {
    setExpandedIndex((currentIndex) => {
      if (currentIndex === newIndex) {
        return -1;
      } else {
        return newIndex;
      }
    });
  };

  const renderedItems = items.map(({ title, content, id }, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <AiFillCaretDown /> : <AiFillCaretRight />}</span>
    );

    return (
      <div key={id} className="select-none">
        <h3
          className="flex cursor-pointer items-center justify-between border-b bg-gray-50 p-3"
          onClick={() => handleClick(index)}
        >
          {title}
          {icon}
        </h3>
        {isExpanded && <p className="border-b p-5">{content}</p>}
      </div>
    );
  });

  return <div className="rounded border-x border-t">{renderedItems}</div>;
};

export default Accordion;
