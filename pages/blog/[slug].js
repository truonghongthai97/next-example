import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function BlogDetail() {
    const router = useRouter()
    console.log(111, router)
    // useEffect(() => {
    //     console.log(111, router.query)
    // }, [])

    return <div>BlogDetail
        <button onClick={() => router.push(`${router.asPath}?counter=10`, undefined, { shallow: true })}>Replace URL</button>
    </div>
}

export function getStaticProps() {
    return { props: {} }
}

export function getStaticPaths(context) {
    console.log(111, context)

    return { paths: [{ params: { slug: '1' } }], fallback: false }
}