import { gql } from "@apollo/client";
import { client } from "./apollo";

export async function getAllPostsForHome() {
  const data = await client.query({
    query: gql`
      query AllQuery {
        reviews {
          nodes {
            reviews {
              name
              reviewerImg {
                sourceUrl
              }
              reviewTitle
            }
            id
            slug
            title
          }
        }
        blogs {
          nodes {
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
            slug
            id
            content
          }
        }
      }
    `
  });

  return data;
}

export async function getReviewPosts() {
  const data = await client.query({
    query: gql`
      query reviewsQuery {
        reviews(first: 50) {
          nodes {
            reviews {
              name
              reviewerImg {
                sourceUrl
              }
              reviewTitle
            }
            id
            slug
            title
          }
        }
      }
    `
  });

  return data;
}

export async function getReviewPostsWithSlug() {
  const data = await client.query({
    query: gql`
      query reviewsQuery {
        reviews(first: 50) {
          nodes {
            slug
          }
        }
      }
    `
  });

  return data;
}

export async function getReviewPost(params: { slug: string }) {
  const data = await client.query({
    query: gql`
      query GetReviewBySlug($slug: String!) {
        reviewBy(slug: $slug) {
          reviews {
            age
            atmosphereImpression
            atmosphereRating
            cleanlinessImpression
            country
            cleanlinessRating
            impression
            locationImpression
            locationRating
            name
            priceImpression
            priceRating
            reviewImg1 {
              sourceUrl
            }
            reviewImg2 {
              sourceUrl
            }
            reviewImg3 {
              sourceUrl
            }
            reviewerImg {
              sourceUrl
            }
            reviewTitle
            staffImpression
            staffMessage
            staffRating
          }
          slug
          title
          date
        }
      }
    `,
    variables: {
      slug: params.slug
    }
  });

  return data;
}

export async function getBlogPosts() {
  const data = await client.query({
    query: gql`
      query blogsQuery {
        blogs(first: 50) {
          nodes {
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
            slug
            id
            content
          }
        }
      }
    `
  });

  return data;
}

export async function getBlogPostsWithSlug() {
  const data = await client.query({
    query: gql`
      query reviewsQuery {
        blogs(first: 50) {
          nodes {
            slug
          }
        }
      }
    `
  });

  return data;
}

export async function getBlogPost(params: { slug: string }) {
  const data = await client.query({
    query: gql`
      query GetBlogBySlug($slug: String!) {
        blogBy(slug: $slug) {
          featuredImage {
            node {
              sourceUrl
            }
          }
          id
          title
          content
          date
        }
      }
    `,
    variables: {
      slug: params.slug
    }
  });

  return data;
}
