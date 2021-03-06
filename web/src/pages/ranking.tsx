import { useEffect, useState } from "react";
import { LeaderboardProfile, User } from "../components/LeaderboardProfile";
import styles from "../styles/pages/Ranking.module.css";
import axios from "axios";

export default function Ranking() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.post("/api/server/users");
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Leaderboard</h1>
      <div className={styles.titleTab}>
        <div>
          <p>Posição</p>
          <p>Usuário</p>
        </div>
        <div>
          <p>Desafios</p>
          <p>Experiência</p>
        </div>
      </div>
      {users &&
        users.map((user, index) => (
          <LeaderboardProfile key={user._id} user={user} rank={index} />
        ))}
    </div>
  );
}
