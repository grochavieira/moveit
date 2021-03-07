import { useEffect, useState } from "react";
import { LeaderboardProfile, User } from "../components/LeaderboardProfile";
import { useSession } from "next-auth/client";
import Redirect from "../components/Redirect";
import Head from "next/head";
import axios from "axios";
import styles from "../styles/pages/Ranking.module.css";

export default function Ranking() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.post("/api/server/users");
      if (data.length > 0) {
        data.sort((firstObj: User, secondObj: User) =>
          firstObj.totalExperience > secondObj.totalExperience ? 1 : -1
        );

        setUsers(data.reverse());
      }
    }
    getUsers();
  }, []);

  const [session]: any = useSession();

  if (!session) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Head>
        <title>Ranking | MoveIt</title>
      </Head>
      <div className={styles.container}>
        <h1>Leaderboard</h1>
        <div className={styles.titleTab}>
          <p>Posição</p>
          <div>
            <p>Usuário</p>

            <div>
              <p>Desafios</p>
              <p>Experiência</p>
            </div>
          </div>
        </div>
        {users &&
          users.map((user, index) => (
            <LeaderboardProfile key={user._id} user={user} rank={index + 1} />
          ))}
      </div>
    </>
  );
}
