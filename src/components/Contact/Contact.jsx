import "./contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hs06z9e', 'template_we1ydwu', form.current, 'ce4cg-fmky6P9w9s1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();   
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>
            <span className="section-subtitle">Here&apos;s how you can get in touch with me</span>

            <div className="contact-container container grid">
                <div className="contact-content">
                    <h3 className="contact-title">Let&apos;s get in touch</h3>

                    <div className="contact-info">
                        <div className="contact-card">
                            <i className="bi bi-send-plus contact-card-icon"></i>
                            <h3 className="contact-card-title">Email</h3>
                            <span className="contact-card-data"></span>
                            <a href="mailto:agworksbox@gmail.com" className="contact-button">
                                Send me and email{" "}
                                <i className="bi bi-arrow-right-short contact-button-icon"></i>
                            </a>
                        </div>

                        <div className="contact-card">
                            <i className="bi bi-linkedin contact-card-icon"></i>
                            <h3 className="contact-card-title">LinkedIn</h3>
                            <span className="contact-card-data"></span>
                            <a href="" className="contact-button">
                                Connect on LinkedIn{" "}
                                <i className="bi bi-arrow-right-short contact-button-icon"></i>
                            </a>
                        </div>

                        <div className="contact-card">
                            <i className="bi bi-twitter-x contact-card-icon"></i>
                            <h3 className="contact-card-title">X (formerly Twitter)</h3>
                            <span className="contact-card-data"></span>
                            <a href="" className="contact-button">
                                Connect on X{" "}
                                <i className="bi bi-arrow-right-short contact-button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-content">
                    <h3 className="contact-title">Send me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact-form" id="contact-form">
                        <div className="contact-form-container">
                            <label htmlFor="name" className="contact-form-tag">Name</label>
                            <input type="text"
                                name="name"
                                id="name"
                                className="contact-form-input"
                                placeholder="Insert your name?" />
                        </div>

                        <div className="contact-form-container">
                            <label htmlFor="email" className="contact-form-tag">Email</label>
                            <input type="email"
                                name="email"
                                id="email"
                                className="contact-form-input"
                                placeholder="Insert your email address?" />
                        </div>

                        <div className="contact-form-container">
                            <label htmlFor="name" className="contact-form-tag">Project</label>
                            <textarea type="text"
                                name="project"
                                id="project"
                                cols={30}
                                rows={10}
                                className="contact-form-area contact-form-input"
                                placeholder="What is your project?">
                            </textarea>
                        </div>
                        <button type="submit" form="contact-form" className="button button-flex send-form-button">Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--body-color)" className="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;