"use client";
import { useEffect, useState } from "react";
import { ContentContext } from "./contentContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function ContentProvider({ children }: { children: any }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRef = collection(db, "contents");
        const querySnapshot = await getDocs(usersRef);
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          const chooseSec = docData.content;
          setContent(chooseSec);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContentContext.Provider
      value={{
        content: content,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}
