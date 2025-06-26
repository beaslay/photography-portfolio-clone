// 🔹 TYPE: custom hook
// 🔸 BUT : Génère une réponse automatique polie (placeholder API)
import { useCallback } from "react";

export function useAutoReply() {
  return useCallback(async (message: string) => {
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      console.log("Réponse IA:", data.reply);
    } catch (e) {
      console.error("Erreur IA", e);
    }
  }, []);
}
