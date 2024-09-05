import { useState } from "react";

const MembersCardSection = () => {
  const [active, setActive] = useState(false);

  setTimeout(() => {
    setActive(true);
  }, 28 * 1000);
  return (
    <>
      {active && (
        <div>
          <div>Twester</div>
        </div>
      )}
    </>
  );
};

export default MembersCardSection;
