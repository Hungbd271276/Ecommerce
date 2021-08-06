import React from 'react'
import ContactForm from './ContactForm'

const Contact = (props) => {
    return (
        <div>
            <div className="map" style={{ marginTop: '90px' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044327!2d105.74459841488351!3d21.038127785993215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1614847733793!5m2!1sen!2s" width="100%" height={500} style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6" style={{ marginTop: '60px' }}>
                        <h2 className="we-class">THÔNG TIN LIÊN HỆ</h2>
                        <div className="infomation" style={{ lineHeight: '40px' }}>
                            <span> <b>Công Ty: </b> TNHH 123CORP</span><br />
                            <span> <b>Địa chỉ:</b>Đan phượng Hà nội</span><br />
                            <span> <b>Điện thoại:</b> 1234546789</span><br />
                            <span> <b>Email:</b> Hungbdph10926@fpt.edu.vn</span><br />
                            <span> <b>Website:</b> shopthoitrang.vn</span>
                        </div>
                        <div className="poster">
                        </div>
                    </div>
                    <ContactForm {...props} />

                </div>
            </div>
        </div>
    )
}

export default Contact
