import { Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <div className="h-[600px] w-full bg-social flex flex-col items-center justify-center footer">
            <h1 className="text-footer footer-title">Quem somos?</h1>
            <br/>
            <p className="text-footer footer-text w-[30%] p-2 text-justify">
                A Hortogânicos é o lugar que você procura para comprar os seus orgânicos! Nós somos apaixonados pela beleza das
                coisas naturais, somos movidos pelo sonho de que todas as pessoas tenham acesso à produtos orgânicos de qualidade!
                Esperamos que você goste :)
            </p>
            <div className="bg-white w-[45%] h-[0.2%] my-8"/>
            <h1 className="text-footer footer-title">Contate-nos</h1>
            <div className="grid grid-cols-2 w-fit my-2">
                <span className="flex justify-start p-6">
                    <Phone className="text-black mx-4"/>
                    <p className="text-footer footer-text text-justify">
                        (11) 91234-5678
                    </p>
                </span>
                <span className="flex justify-start p-6">
                    <Mail className="text-black mx-4"/>
                    <p className="text-footer footer-text text-justify">
                        administracao@hortoganicos.com.br
                    </p>
                </span>
                <span className="flex justify-start p-6">
                    <button onClick={() => window.location.href = "https://github.com/bpst77/adshortorganicos"} className="flex">
                        <img src="./imagens/github.svg" className="mx-4" alt="Logo do GitHub"/>
                        <p className="text-footer footer-text text-justify">
                            Nosso github!
                        </p>
                    </button>
                </span>
            </div>
        </div>
    )
};