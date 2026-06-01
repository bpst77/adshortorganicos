import Banner from "../components/Banner";
import ReviewList from "../components/review/ReviewList";

export default function HomePage() {
    return (
        <div className="h-full pb-16 flex flex-col items-center justify-between">
            <Banner />
            <h1 className="text-black">Veja o que nossos clientes acharam:</h1>
            <ReviewList/>
        </div>
    );
};
