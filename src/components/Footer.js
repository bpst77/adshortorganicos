import { Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <div className="w-full bg-social flex flex-col items-center justify-center footer pb-10 pt-10">
            <div className="bg-white w-[45%] h-[0.2%]"/>
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
            </div>
        </div>
    )
};