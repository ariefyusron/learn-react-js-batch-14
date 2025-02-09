const Container = ({ title, desc }) => {

  return (
    <div>
      <h1>{title}</h1>
      {!!desc && <p>{desc}</p>}
    </div>
  )
}

export default Container;