import React from "react";
import { graphql } from "gatsby";

export default function Page({ data, errors }) {
  errors && console.error(process.env.NODE_ENV === "development" && errors);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export const pageQuery = graphql`
  query WpPage($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      uri
    }
  }
`;
