import React from "react";
import { ANNOUNCEMENT_TEXT } from "../../../constants";

const AnnouncementBar = () => {
  return (
    <div 
      className="bg-[#BE1E2D] text-white py-2.5 px-4 text-center text-xs font-medium tracking-wide"
      role="region"
      aria-label="Announcement"
    >
      {ANNOUNCEMENT_TEXT.split(" Apply Now!").map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i === 0 && (
            <a href="#" className="underline font-bold ml-1 hover:text-white/90">
              Apply Now!
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnnouncementBar;
