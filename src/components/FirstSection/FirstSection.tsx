function FirstSection () {
  return (
    <section className="first_section">
    <ul>
      {[1, 2, 3, 4].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </section>
  )
}

export default FirstSection;