interface Props {
  name: string
  desc?: string
}

const Desc = (props: Props) => (
  <div>
    <div>{props.name}</div>
  </div>
);

export default Desc;