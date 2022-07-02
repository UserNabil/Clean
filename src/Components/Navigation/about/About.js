import React from 'react';
import about from './about.jpg';
import './About.css';


export default function About() {

    return (
        <div>
            <div>
                <div className="pull-right">
                    <aside>
                        <div className="text">
                            <h3>Liens importants</h3>
                            <ul>
                                <li><a href="">Lien 1</a><br />
                                    <span >
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Enim rem, error quae
                                            expedita, magni nesciunt natus nulla eum
                                            illo, magnam iste optio esse doloremque ex
                                            ullam odio accusantium laudantium assumenda.
                                        </p>
                                    </span>
                                </li>
                                <li><a href="">Lien 2</a><br />
                                    <span >
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Enim rem, error quae
                                            expedita, magni nesciunt natus nulla eum
                                            illo, magnam iste optio esse doloremque ex
                                            ullam odio accusantium laudantium assumenda.
                                        </p>
                                    </span>
                                </li>
                                <li><a href="">Lien 3</a><br />
                                    <span >
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Enim rem, error quae
                                            expedita, magni nesciunt natus nulla eum
                                            illo, magnam iste optio esse doloremque ex
                                            ullam odio accusantium laudantium assumenda.
                                        </p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div className="pull-right">

                </div>
                <article>
                    <header>
                        <h1 className="page-title">A propos</h1>
                    </header>
                    <div className="about">
                        <p>
                            Nous savons que la confiance ne suffit pas,
                            c'est pourquoi nous avons décidé
                            de vous transmettre la totalité de nos recherches
                            ainsi que les dates clef qui permet de données
                            une raison valable d'investir
                            sur l'actif au moment opportun
                        </p>
                        <p>
                            N'investissé plus à l'aveugle !
                            Chaque investissement que  vous allez
                            faire sur notre site et prouvé par le
                            partage d'informations et cette information
                            permet la compréhension des raison de vos investissement
                        </p>

                        <h3>Necessitatibus</h3>
                        <p>
                            <img src={about} alt='contenu' width='465px' />
                        </p>

                        <h3>Fugit, laboriosam</h3>
                        <p>
                            Eum, quasi, est, vitae, ipsam nobis
                            consectetur ea aspernatur ad eos
                            voluptatibus fugiat nisi perferendis
                            impedit. Quam, nulla, excepturi,
                            voluptate minus illo tenetur sint
                            ab in culpa cumque impedit quibusdam.
                            Saepe, molestias quia voluptatem natus
                            velit fugiat omnis rem eos sapiente quasi
                            quaerat aspernatur quisquam deleniti
                            accusantium laboriosam odio id?
                        </p>

                        <h3>Doloribus, illo ipsum</h3>
                        <p>
                            Velit, odit, eius, libero unde impedit
                            quaerat dolorem assumenda alias consequuntur
                            optio quae maiores ratione tempore sit aliquid
                            architecto eligendi pariatur ab soluta doloremque
                            dicta aspernatur labore quibusdam dolore corrupti
                            quod inventore. Maiores, repellat, consequuntur
                            eius repellendus eos aliquid molestiae ea laborum
                            ex quibusdam laudantium voluptates placeat
                            consectetur quam aliquam!
                        </p>
                        <p>
                            Eum, quasi, est, vitae, ipsam nobis consectetur
                            ea aspernatur ad eos voluptatibus fugiat nisi
                            perferendis impedit. Quam, nulla, excepturi,
                            voluptate minus illo tenetur sint ab in culpa
                            cumque impedit quibusdam. Saepe, molestias quia
                            voluptatem natus velit fugiat omnis rem eos sapiente
                            quasi quaerat aspernatur quisquam deleniti accusantium
                            laboriosam odio id?
                        </p>
                    </div>
                </article>
                <br />
            </div>
        </div>
    )
}
