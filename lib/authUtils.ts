// lib/authUtils.ts
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import nookies from "nookies";
import { auth } from "./firebaseAdmin"; // Import correct de Firebase Admin

export const withAuth = (gssp: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      const cookies = nookies.get(context);
      const token = cookies.token || null;

      if (!token) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      const decodedToken = await auth.verifyIdToken(token);

      if (!decodedToken) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      const gsspData = await gssp(context);

      if ("props" in gsspData) {
        return {
          ...gsspData,
          props: {
            ...gsspData.props,
            authenticated: true,
            user: decodedToken,
          },
        };
      }

      return gsspData; // Si gsspData est une redirection ou une autre réponse sans props
    } catch (error) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  };
};
