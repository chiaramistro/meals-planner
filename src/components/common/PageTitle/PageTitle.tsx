import "./PageTitle.css";

const PageTitle = (props: {title: string}) => {
  const { title } = props;

  return (
    <div className="PageTitle">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
