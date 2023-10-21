import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
    return (
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                <p>Contact</p>
                <h3>Let&apos;s Discuss Your <span className="text-success">Project</span></h3>
                <p><em>Let&apos;s make something new, different and meaningful or make things visual
                    and conceptual </em></p>
            </div>
            <div className="contact-info">
                <div className="personal-contacts">
                    <div className="call">
                        <Icon className='icon2' icon="solar:phone-broken" />
                        <div>
                            <p>Call me</p>
                            <p>+256 706661852</p>
                        </div>
                    </div>
                    <div className="call">
                        <Icon className='icon2' icon="mi:email" />
                        <div>
                            <p>Email me</p>
                            <p>bronnie313@gmail.com</p>
                        </div>
                    </div>
                    <div className="call">
                        <Icon className='icon2' icon="mdi:address-marker-outline" />
                        <div>
                            <p>Address</p>
                            <p>Kitintale, Kampala UG</p>
                        </div>
                    </div>
                </div>
                <form>
                    <input type="text" value="Username" placeholder="Full name" required />
                    <input type="email" name="UserEmail" required placeholder="Email" />
                    <input type="number" name="UserNumber"  required placeholder="Phone number"/>
                    <input type="text" name="userBudget" required placeholder="Budget" />
                    <textarea name="message" placeholder="Message"></textarea>
                </form>
            </div>
        </div>
    )
}

export default Contact