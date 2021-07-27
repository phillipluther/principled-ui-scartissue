import * as React from 'react';

const Button: React.FC = () => {
  const [clickCount, tickClicks] = React.useState(0);

  return (
    <button
      type="button"
      onClick={() => tickClicks(clickCount + 1)}
    >
      Click {clickCount} {`${clickCount === 1 ? 'time' : 'times'}`}
    </button>
  );
}

export default Button;
