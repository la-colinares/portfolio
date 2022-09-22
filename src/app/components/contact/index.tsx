import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
    const form = useRef<HTMLFormElement>(null)
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const notify = (msg: string, toastType: TypeOptions) => {
        toast(msg, {
            position: "top-right",
            autoClose: 5000,
            theme: "dark",
            type: toastType,
            hideProgressBar: true,
            pauseOnFocusLoss: false,
        })
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setButtonDisabled(true)

        notify("Sending message...", "info")

        emailjs.sendForm('service_nqh0x1q', 'template_ywelxt9', form.current!!, 'zegVl8JNoU3UWhyoc')
        .then(() => {
            notify("Message Sent! Thank you!", "success")
            setButtonDisabled(false)
            form.current!!.reset()

        }, () => {
            notify("Error occured while sending email message. Please try again.", "error")
        })
    }

    return (
        <section className="container">
            <h1 className="title">Contact Me</h1>
            <form ref={form} onSubmit={sendEmail} className="contact-form row">
                <fieldset>
                    <input placeholder="Full Name:" type="text" name="fullName" tabIndex={1} required/>
                </fieldset>
                <fieldset>
                    <input placeholder="Email Address:" type="email" name="email" tabIndex={2} required/>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Message:" name="message" rows={8} tabIndex={3} required></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" disabled={buttonDisabled}>Send</button>
                </fieldset>
            </form>
            <ToastContainer newestOnTop={true}/>
        </section>
    )
}
