import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Layout.css"

function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen bg-stone-200 bg-opacity-50 dark:bg-zincx-900">
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;