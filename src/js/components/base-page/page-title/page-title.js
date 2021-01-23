export default function PageTitle(props) {
  return (
    <div className={"page-title-root"}>
      <h2>{props.title.toUpperCase()}</h2>
    </div>
  );
}
