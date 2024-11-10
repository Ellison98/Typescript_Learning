import Header from "../components/common/Header";
import { formatNumber } from "../utils/format";

const COUNT = 100000;

function Home() {
    return (
        <div>
            <Header />
            <div>home</div>
            <div>count : {formatNumber(COUNT)}</div>
        </div>
    )
}

export default Home;