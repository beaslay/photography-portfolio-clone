// 🔹 TYPE: Custom hook
// 🔸 BUT : Générer une réponse IA polie (placeholder)
import { useCallback } from "react";

export function useAssistant() {
  const generateReply = useCallback(async (message: string) => {
    try {
      // Appel vers l'API OpenAI à implémenter côté serveur
      const reply = `Merci pour votre message : "${message}".`;
      console.log("Réponse IA:", reply);
      return reply;
    } catch (error) {
      console.error("Erreur IA", error);
    }
  }, []);

  return { generateReply };
}
