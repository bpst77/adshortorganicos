const imgdir = "/imagens/";

const SobrePage = () => {
    return (
        <section>
            <div className='flex flex-col w-full h-full justify-center items-center gap-8'>
                <br/>
                <h3 className="text-lilita text-spot text-4xl">SOBRE NÓS</h3>
                <div className="w-2/4">
                    <p className="text-black text-center">
                        A Hortogânicos é o lugar que você procura para comprar os seus orgânicos! Nós somos apaixonados pela beleza das
                        coisas naturais, somos movidos pelo sonho de que todas as pessoas tenham acesso à produtos orgânicos de qualidade!
                        Esperamos que você goste :)
                    </p>
                    <br/>
                    <p className="text-black text-center">Somos uma equipe dedicada a oferecer os melhores produtos orgânicos para nossos clientes. Nossa missão é proporcionar uma experiência de compra excepcional, oferecendo uma ampla variedade de produtos naturais de alta qualidade, desde vegetais e frutas frescas até grãos e produtos de origem sustentável.</p> 
                    <br/>
                    <p className="text-black text-center">Nosso compromisso é com a satisfação do cliente e com a sustentabilidade do planeta. Estamos sempre prontos para ajudar com qualquer dúvida ou necessidade que você possa ter. Acreditamos que alimentos orgânicos devem ser acessíveis a todos, e é por isso que nos esforçamos para oferecer preços competitivos e um serviço ao cliente excepcional.</p>
                    <br/>
                    <p className="text-black text-center">Obrigado por escolher a Hortogânicos! Estamos ansiosos para ajudá-lo a encontrar os produtos orgânicos perfeitos para uma vida mais saudável e natural!</p>
                </div>

                <h1 className="text-black text-cneter">Compartilhe as vantagens, leveza e naturalidade dos produtos orgânicos, o que faz você se sentir mais vivo e energizado!</h1>

                <h3 className="text-lilita text-spot text-4xl">NOSSOS PARCEIROS</h3>
                <div className="flex w-3/5">
                    <div className="flex items-start justify-center w-1/3">
                        <div className="text-lilita text-spot text-2xl">
                            <h4 className="w-full">Delivery</h4>
                            <img className="w-24 h-24" src={imgdir + "parc-entrega.png"} alt=""></img>
                        </div>
                    </div>

                    <div className="flex items-start justify-center w-1/3">
                        <div className="text-lilita text-spot text-2xl">
                            <h4>Hortifrutícolas</h4>
                            <img className="w-24 h-24 ml-4" src={imgdir + "parc-hort.png"} alt=""></img>
                        </div>
                    </div>

                    <div className="flex items-start justify-center w-1/3">
                        <div className="text-lilita text-spot text-2xl">
                            <h4>Setor atacadista</h4>
                            <img className="w-24 h-24 ml-10" src={imgdir + "parc-loja.png"} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 
}

export default SobrePage;