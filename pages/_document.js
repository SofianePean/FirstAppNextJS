import Documents, { Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Documents{
    render(){
        return (
            <Html>
                <Head>
                </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
            </Html>
        )
    }
}

export default MyDocument;