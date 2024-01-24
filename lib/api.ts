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
        reviews {
          nodes {
            slug
          }
        }
      }
    `
  });

  return data;
}

export async function getReviewPost(params) {
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

export async function getBlogPostsWithId() {
  const data = await client.query({
    query: gql`
      query reviewsQuery {
        blogs {
          nodes {
            id
          }
        }
      }
    `
  });

  return data;
}

export async function getBlogPost(params) {
  const data = await client.query({
    query: gql`
      query GetBlogById($id: ID!) {
        blogBy(id: $id) {
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          id
          title
          content
        }
      }
    `,
    variables: {
      id: params.id
    }
  });

  return data;
}
