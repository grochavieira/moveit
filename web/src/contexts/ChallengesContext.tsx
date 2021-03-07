import { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import challenges from "../../challenges.json";
import { LevelUpModal } from "../components/LevelUpModal";
import { useSession } from "next-auth/client";
import axios from "axios";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  name: string;
  profilePicture: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [session]: any = useSession();

  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [level, setLevel] = useState(1);
  const [totalExperience, setTotalExperience] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    async function getUser() {
      if (session) {
        const { data } = await axios.post("api/server/user", {
          userId: session.userId,
        });
        setLevel(data.level);
        setCurrentExperience(data.currentExperience);
        setChallengesCompleted(data.challengesCompleted);
        setTotalExperience(data.totalExperience);
        setName(data.name);
        setProfilePicture(data.image);
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    // Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    // if (Notification.permission === "granted") {
    //   new Notification("Novo desafio!", {
    //     body: `Valendo ${challenge.amount}xp!`,
    //   });
    // }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;
    let newLevel = level;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
      newLevel = level + 1;
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
    setTotalExperience(totalExperience + amount);
    updateUser(
      newLevel,
      finalExperience,
      totalExperience + amount,
      challengesCompleted + 1
    );
  }

  async function updateUser(
    level: number,
    currentExperience: number,
    totalExperience: number,
    challengesCompleted: number
  ) {
    const response = await axios.post("api/server/updateUser", {
      level,
      currentExperience,
      totalExperience,
      challengesCompleted,
      userId: session.userId,
    });
  }

  return (
    <ChallengesContext.Provider
      value={{
        name,
        profilePicture,
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
