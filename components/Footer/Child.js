import S from "./child.module.scss";
console.log("🚀 1231232 ~ S", S);

export default function Child({ classes = "" }) {
  return (
    <div className={`${S.root} ${classes.root}`}>
      <div className="child__title">Child title</div>
    </div>
  );
}
