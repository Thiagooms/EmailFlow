import type { ResultData } from "../types/ResultData";

export async function analyzeEmail(fullEmailText: string): Promise<ResultData> {
  const response = await fetch("http://127.0.0.1:5000/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: fullEmailText }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: "Erro de comunicação com o servidor." }));
    throw new Error(errorData.error || "Erro de comunicação com o servidor.");
  }

  const data = await response.json();
  if (data.error) throw new Error(data.error);

  return data;
}
