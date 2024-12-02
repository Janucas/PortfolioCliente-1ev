import { useState } from "react"; 
import "./Contact.css"; 

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); // Estado para almacenar los datos del formulario

  const [errors, setErrors] = useState({}); 

  // Función para validar los datos del formulario
  const validate = () => {
    const errors = {};
    if (!/^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/.test(formData.name)) {
      errors.name = "Name must start with uppercase letters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address.";
    }
    if (formData.message.length < 20) {
      errors.message = "Message must be at least 20 characters.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData); 

      // Reiniciar el formulario
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({}); 
    }
  };

  // Manejo de cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`contact-input ${errors.name ? "error" : ""}`}
          />
        </label>
        {errors.name && <p className="error-message">{errors.name}</p>}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`contact-input ${errors.email ? "error" : ""}`}
          />
        </label>
        {errors.email && <p className="error-message">{errors.email}</p>}
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`contact-textarea ${errors.message ? "error" : ""}`}
          />
        </label>
        {errors.message && <p className="error-message">{errors.message}</p>}
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact; 
