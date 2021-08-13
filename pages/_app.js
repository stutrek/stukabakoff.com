import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <script
                async
                defer
                data-website-id="a532bc4e-7350-43af-b105-b2f31da13b49"
                src="/umami.js"
            ></script>
        </>
    );
}

export default MyApp;
