import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
    children: React.ReactNode;  // ReactNode 타입은 컴포넌트가 반환할 수 있는 모든 종류의 값을 포함
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;