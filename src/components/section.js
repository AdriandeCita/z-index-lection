const sectionContainerStyles = {
  minHeight: '100vh',
  borderBottom: '20px solid #555',
  position: 'relative',
};

function Section({ title, children, flex }) {
  return (
    <div id={`${title.replace(/\s/, '')}`} style={sectionContainerStyles}>
      <h2>
        <a
          href={`/#${title.replace(/\s/, '')}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          {title}
        </a>
      </h2>
      <div
        style={{
          padding: '2em',
          display: flex ? 'flex' : 'initial',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Section;
