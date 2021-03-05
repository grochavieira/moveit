import { GetServerSideProps } from "next";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import {
  ChallengesContext,
  ChallengesProvider,
} from "../contexts/ChallengesContext";
import Redirect from "../components/Redirect";
import { SideBar } from "../components/SideBar";
import Head from "next/head";
import axios from "axios";
import { signIn, signOut, useSession, session } from "next-auth/client";

import styles from "../styles/pages/Home.module.css";
import { useEffect } from "react";

interface HomeProps {
  theme: string;
}

export default function Home(props: HomeProps) {
  const [session]: any = useSession();
  console.log({ session });

  useEffect(() => {
    async function getUser() {
      if (session) {
        const { data } = await axios.post("api/server/user", {
          userId: session.userId,
        });
        console.log(data);
      }
    }
    getUser();
  }, []);

  if (!session) {
    return <Redirect to="/login" />;
  }

  return (
    <ChallengesProvider theme={props.theme}>
      <SideBar />
      <div className={styles.container}>
        <Head>
          <title>Inicio | MoveIt</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { theme } = ctx.req.cookies;

  return {
    props: {
      theme: String(theme),
    },
  };
};
