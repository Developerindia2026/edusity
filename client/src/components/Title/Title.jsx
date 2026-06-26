import "./Title.css"

function Title({ title, mainTitle }) {
  return (
    <div className="titles" data-aos="fade-up">
      <p>{title}</p>
      <h2>{mainTitle}</h2>
    </div>
  );
}

export default Title;