import React from 'react';


function Section({title,children}) {
    return (
        <div>
            <section >
      <h2>{title}</h2>
      {children}
    </section>
        </div>
    )
}

export default Section
