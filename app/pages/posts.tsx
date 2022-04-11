import { GetStaticProps, InferGetServerSidePropsType } from "blitz"

type Post = {
  author: string
  content: string
}

export const getStaticProps: GetStaticProps = (context) => {
  console.log({ context })

  const posts = Math.random()

  // return {
  //   notFound: true
  // }

  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}

const Blog = ({ posts }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <p>posts: {posts}</p>
    </>
  )
}

export default Blog
