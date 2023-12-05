import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useDbList(motivo) {
  const [cash, setDetails] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsColecction = collection(db, motivo);
    getDocs(itemsColecction).then((snapshot) => {
      if (!snapshot.empty) {
        setDetails(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }
    });
  }, [motivo]);

  return cash;
}
