import Link from '../src/components/Link';
import Title from '../src/components/Title'

export default function FAQPage() {
    return (
        <div>
            <Title as="h2">Alura Cases - Faq Page</Title>
            <Link href="/" passHref>
                ir para Home
            </Link>
        </div>
    )
}