import Link from '../src/components/Link';

export default function Page404() {
    return (
        <div>
            <h1>Você se perdeu e caiu na página 404 T_T</h1>
            <Link href="/" passHref>
                ir para Home
            </Link>
        </div>
    )
}