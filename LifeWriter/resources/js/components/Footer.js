import React from 'react';

function Footer()
{
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__column footer__column_1">
                        <div className="footer__dev dev">
                            <div className="dev__text">Handcrafted by Egor</div>
                            <div className="dev__social">
                                <div className="dev__icon">
                                    <a href="https://www.instagram.com/oohegor/"><img src="../../../public/img/instagram.png" alt="instagram"/></a>
                                </div>
                                <div className="dev__icon">
                                    <a href="https://t.me/ooh_egor"><img src="../../../public/img/telegram.png" alt="telegram"/></a>
                                </div>
                                <div className="dev__icon">
                                    <a href="https://www.linkedin.com/in/egor-zdioruc/"><img src="../../../public/img/linkedin.png" alt="linkedin"/></a>
                                </div>
                                <div className="dev__icon">
                                    <a href="https://github.com/oohegor"><img src="../../../public/img/github.png" alt="github"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__column footer__column_2">
                        <div className="footer__description">
                            <p>This application is designed to be alone with your thoughts...</p>
                            <p>28/03/2021</p>
                        </div>
                    </div>
                    <div className="footer__column footer__column_3">
                        <div className="footer__address">
                            <p>Moldova, Chisinau, Hincesti Hwy</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
