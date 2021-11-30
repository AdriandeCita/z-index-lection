import { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';

const baseElementStyles = {
  width: '300px',
  minHeight: '200px',
  border: '3px dashed #333',
  borderRadius: '0.25em',
  backgroundColor: '#88f',
  fontSize: '20px',
};

const baseContainerStyles = {
  backgroundColor: '#f88',
  padding: '1.5em',
};

function ZBlock({ z, relative, absolute, children }) {
  const element = useRef(null);
  const [index, setIndex] = useState('auto');

  useEffect(() => {
    if (element) {
      const el = element.current;
      // eslint-disable-next-line no-undef
      const computedStyles = window.getComputedStyle(el);
      const z = computedStyles.getPropertyValue('z-index');
      setIndex(z);
    } else {
      setIndex('auto');
    }
  }, [setIndex, z, element]);

  let position = 'static';
  if (relative) {
    position = 'relative';
  } else if (absolute) {
    position = 'absolute';
  }

  return (
    <Draggable
      onStart={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        ref={element}
        style={{
          ...baseElementStyles,
          ...(children ? baseContainerStyles : {}),
          position,
          zIndex: z || 'auto',
        }}
      >
        <p>Current z-indes is: {index}</p>
        {children}
      </div>
    </Draggable>
  );
}

export default ZBlock;
