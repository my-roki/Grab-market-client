import React from "react";

function LikeComponent() {
  const [like, setLike] = React.useState(0);
  // console.log("update component!!");
  function updateLike() {
    setLike(like + 1);
  }

  React.useEffect(() => {
    setLike(like + 1);
  }, []);

  return (
    <div>
      <span>
        <strong> {like} 개의 좋아요 </strong>
      </span>
      <button onClick={updateLike}>👍좋아요</button>
    </div>
  );
}

export default LikeComponent;
