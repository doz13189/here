import { GetStaticProps, InferGetServerSidePropsType, AuthenticationError } from "blitz"

type Post = {
  author: string
  content: string
}

export const getStaticProps: GetStaticProps = (context) => {
  try {
    throw new AuthenticationError()
  } catch (error) {
    if (error.name === "AuthenticationError") {
      error.statusCode
      error.message
    }
  }

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
