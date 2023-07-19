import React from "react";
import Link from 'next/link';

const Column = () => {
  return (
    <>
      <section className="column-main">
        <div className="column-1">
          <img src="/images/admission.jpg" alt="admission" className="sport-image" />
            <Link href='/AdmissionProcess'>
          <div className="column-1-inner">
            <h1>ADMISSIONS</h1>
            
              Learn about your child's admission requirements, how to apply, and
              the next steps once you've applied.
            
          </div>
          </Link>
        </div>
        <div className="column-1">
          <img src="/images/academics.jpg" alt="admission" className="sport-image" />
          <Link href="/AcademicFacilities">
          <div className="column-1-inner">
            <h1>Academics</h1>
            
              The Rukhmani Devi School is a co-education public school. The
              school is affiliated to the CBSE Board.
            
          </div>
          </Link>
        </div>
        <div className="column-1">
          <img src="/images/column-sports.jpg" alt="admission" className="sport-image" />
          <Link href="/GamesSports">
          <div className="column-1-inner">
            <h1>Sports</h1>
            
              Education at Rukhmani Devi Public School isn't limited to the
              classroom. It happens throughout campus each and every day through
              our student activities.
            
          </div>
          </Link>
        </div>
        <div className="column-1">
          <img src="/images/curricular.jpg" alt="admission" className="sport-image" />
          <Link href="/Activities">
          <div className="column-1-inner">
            <h1>co-curricular </h1>
            
              Co-Curricular activities are meant to bring social skills,
              intellectual skills, moral values, personality progress and
              character appeal in students.
            
          </div>
          </Link>
        </div>
        <div className="column-1">
          <img src="/images/column-5.jpg" alt="admission" className="sport-image" />
          <div className="column-1-inner">
            <h1>Boarding</h1>
            
              Where you live, plays an important role in child’s development. We
              ensure the highest form of care is extended to them.
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Column;
