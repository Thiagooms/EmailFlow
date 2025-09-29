import { useState } from "react";
import { analyzeEmail } from "../service/emailService";
import type { ResultData } from "../types/ResultData";

export function useAnalyzeEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function submitEmail(title: string, description: string) {
    setIsLoading(true);
    setResult(null);
    setError(null);

    const fullEmailText = `Título: ${title}\n\nDescrição: ${description}`;

    try {
      const data = await analyzeEmail(fullEmailText);
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  function clear() {
    setResult(null);
    setError(null);
  }

  return { isLoading, result, error, submitEmail, clear };
}
