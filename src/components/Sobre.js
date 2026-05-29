const Sobre = ({imgdir}) => {
    return (
        <section>
            <div className='sobre-container'>
                <h3 className="sobre-top">SOBRE NÓS</h3>
                <div>
                    <p className="sobre-texto">Bem-vindo à nossa loja de eletrônicos! Somos uma equipe apaixonada por tecnologia e inovação, dedicada a oferecer os melhores produtos eletrônicos para nossos clientes. Nossa missão é proporcionar uma experiência de compra excepcional, oferecendo uma ampla variedade de produtos de alta qualidade, desde smartphones e laptops até acessórios e gadgets inteligentes.</p>
                    <p className="sobre-texto">Nosso compromisso é com a satisfação do cliente, e estamos sempre prontos para ajudar com qualquer dúvida ou necessidade que você possa ter. Acreditamos que a tecnologia deve ser acessível a todos, e é por isso que nos esforçamos para oferecer preços competitivos e um serviço ao cliente excepcional.</p>
                    <p className="sobre-texto">Obrigado por escolher nossa loja de eletrônicos. Estamos ansiosos para ajudá-lo a encontrar os produtos perfeitos para suas necessidades tecnológicas!</p>
                </div>

                <h1>Compartilhe as vantagens, leveza e naturalidade dos produtos orgânicos, o que faz você se sentir mais vivo e energizado!</h1>

                <h3 className="sobre-top">NOSSOS PARCEIROS</h3>
                <div className="sobre-parceiros">
                    <div className="sobre-flex">
                        <div>
                            <h4>Delivery</h4>
                            <img src={imgdir + "parc-entrega.png"} alt=""></img>
                        </div>
                        <p>Bem-vindo à nossa loja de eletrônicos! Somos uma equipe apai</p>
                    </div>

                    <div className="sobre-flex">
                        <div>
                            <h4>Hortifrutícolas</h4>
                            <img src={imgdir + "parc-hort.png"} alt=""></img>
                        </div>
                        <p>Bem-vindo à nossa loja de eletrônicos! Somos uma equipe apai</p>
                    </div>

                    <div className="sobre-flex">
                        <div>
                            <h4>Setor <br></br>atacadista</h4>
                            <img src={imgdir + "parc-loja.png"} alt=""></img>
                        </div>
                        <p>Bem-vindo à nossa loja de eletrônicos! Somos uma equipe apai</p>
                    </div>
                </div>
            </div>
        </section>
    ); 
}

export default Sobre;