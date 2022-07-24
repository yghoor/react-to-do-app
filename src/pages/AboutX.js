import { useParams } from 'react-router-dom';

const AboutX = (props) => {
  const { slug } = useParams();
  const aboutContent = props.aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;

  return (
    <div className="main__content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AboutX;
