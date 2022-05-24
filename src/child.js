function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>저는 자식 컴포넌트입니다.</p>
      <p>
        저의 이름은 {name}입니다. 저는 {age}살 입니다.
      </p>
    </div>
  );
}

export default ChildComponent;
