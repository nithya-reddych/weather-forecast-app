/*
    Import the button from 'components/Button.tsx'
    Render the button below the h1 tag, passing it the appropriate props
*/
"use client";
import { useState } from 'react';
import Button from '../components/Button';
function Page() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    console.log('Button clicked');
  };

  return (
    <div>
    {!isClicked && <h1 className="text-5xl font-bold mb-4">Welcome to Weather-app!</h1>}
    <Button label="Check Forecast" onClick={handleClick} />
  
  </div>
  );
}

export default Page;
