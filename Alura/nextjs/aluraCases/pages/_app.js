import GobalStyle from "../src/theme/GlobalStyle"

function MyApp({ Component, pageProps}) {
    return (
        <>
            <GobalStyle />
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp