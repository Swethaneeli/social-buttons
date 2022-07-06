const Button = (props) => {
  return <p>{props.name}</p>;
  //  Write your code here.
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <button className="buttons like-button">
        <Button name="Like" />
      </button>
      <button className="buttons comment-button">
        <Button name="Comment" />
      </button>
      <button className="buttons share-button">
        <Button name="Share" />
      </button>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
