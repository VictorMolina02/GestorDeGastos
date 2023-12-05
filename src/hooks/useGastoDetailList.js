import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useGastoDetailList() {
  const [gasto, setDetails] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsColecction = collection(db, "gasto");
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
  }, []);
  const gastoTotal = gasto.reduce((acumulador, monto) => {
    return acumulador + Number(monto.monto);
  }, 0);
  return gastoTotal;
}
