export const Contact = () => {

  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }


  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input type="text"
            required
            className="form-control"
            autoComplete="false"
            placeholder="Enter Your Name"
            name="userName"
            id="" />

          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter Your Email"
            name="email"
            id="" />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="false"
          ></textarea>

          <button type="submit" value="send">Send</button>
        </form>
      </div>
    </section>
  )
};
