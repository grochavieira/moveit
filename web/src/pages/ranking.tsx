import { useEffect, useState } from "react";
import { LeaderboardProfile, User } from "../components/LeaderboardProfile";
import { useSession } from "next-auth/client";
import Redirect from "../components/Redirect";

import axios from "axios";
import styles from "../styles/pages/Ranking.module.css";

export default function Ranking() {
  const [users, setUsers] = useState<User[]>([
    {
      _id: "604294947507e55798cf6f8a",
      userId: "48029638",
      name: "Guilherme Rocha Vieira",
      image: "https://avatars.githubusercontent.com/u/48029638?v=4",
      challengesCompleted: 125,
      level: 3,
      currentExperience: 122,
      totalExperience: 333250,
    },
    {
      _id: "6044d72e5ca0790008041e95",
      userId: "80205697",
      name: "anonymousRGB",
      image: "https://avatars.githubusercontent.com/u/80205697?v=4",
      challengesCompleted: 1,
      level: 2,
      currentExperience: 76,
      totalExperience: 140,
    },
    {
      _id: "604294947507e55798cf6f8a",
      userId: "48029638",
      name: "Guilherme Rocha Vieira",
      image: "https://avatars.githubusercontent.com/u/48029638?v=4",
      challengesCompleted: 5,
      level: 3,
      currentExperience: 122,
      totalExperience: 330,
    },
    {
      _id: "6044d72e5ca0790008041e95",
      userId: "80205697",
      name: "anonymousRGB",
      image: "https://avatars.githubusercontent.com/u/80205697?v=4",
      challengesCompleted: 1000,
      level: 2,
      currentExperience: 76,
      totalExperience: 1442340,
    },
  ]);
  // useEffect(() => {
  //   async function getUsers() {
  //     const { data } = await axios.post("/api/server/users");
  //     if (data.length > 0) {
  //       data.sort((firstObj: User, secondObj: User) =>
  //         firstObj.totalExperience > secondObj.totalExperience ? 1 : -1
  //       );

  //       setUsers(data.reverse());
  //     }
  //   }
  //   getUsers();
  // }, []);

  // const [session]: any = useSession();

  // if (!session) {
  //   return <Redirect to="/login" />;
  // }

  return (
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
          <LeaderboardProfile key={user._id} user={user} rank={index + 98} />
        ))}
    </div>
  );
}
