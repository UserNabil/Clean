import React from 'react';
import './Footer.css';



export default function Footer() {
    return (
        <div className='footer'>
            <footer>
                <div className='foot-liste'>
                    <div className="foots">
                        <div>
                            <h3>Contactez moi par</h3>
                            <div>
                                <p>+33 7 68 24 34 13<br />
                                    <a href="mailto:#" className='email'>mathiaslacrosse66@gmail.com</a><br />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="foots">
                        <div>
                            <h3>Suivez moi sur</h3>
                            <div>
                                <p className="follow-me-icons">
                                    Facebook<br />
                                    Instagram<br />
                                    Youtube
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="foots">
                        <div>
                            <h3>Avertissement</h3>
                            <div>
                                <p>Ce site est dédié uniquement au conseil</p>
                                <p>Faire du tradding peut comporter des risques.</p>
                            </div>
                        </div>
                    </div>

                    <div className="foots">
                        <div>
                            <div>
                                <p>
                                    Copyright &copy; 2022, Kenza SKALLI. Designed by Kenza
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
