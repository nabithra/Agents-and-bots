/**
 * Agents and industries on the home page.
 * Edit lib/agents.json and lib/industries.json — counts, filters, cards, and tiles all read these files.
 */
import agentsData from "./agents.json";
import industriesData from "./industries.json";

export type Agent = {
  id: string;
  name: string;
  category: string;
  ai: boolean;
  whatItDoes: string;
  covers: string[];
};

export type Industry = {
  name: string;
  whoFor: string;
};

export const agents: Agent[] = agentsData.map((agent) => ({
  id: agent.id,
  name: agent.name,
  category: agent.category,
  ai: agent.ai,
  whatItDoes: agent.whatItDoes,
  covers: [...agent.covers],
}));

export const industries: Industry[] = industriesData.map((industry) => ({
  name: industry.name,
  whoFor: industry.whoFor,
}));

/** First-seen order, so the filter pills follow the JSON. */
export const agentCategories: string[] = [];
for (const agent of agents) {
  if (!agentCategories.includes(agent.category)) agentCategories.push(agent.category);
}

/**
 * Channels spelled out in the hero line. Every other category is "more",
 * so the line stays short when the JSON grows.
 */
const NAMED_CHANNELS = ["WhatsApp", "Web"];

function countPhrase(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function channelPhrase(categories: string[]): string | null {
  const present = new Set(categories);
  const named = NAMED_CHANNELS.filter((channel) => present.has(channel));
  const hasMore = categories.some((category) => !NAMED_CHANNELS.includes(category));

  if (named.length === 0) {
    const unique = [...present];
    if (unique.length === 0) return null;
    if (unique.length <= 2) return `in ${unique.join(" & ")}`;
    return `in ${unique[0]}, ${unique[1]} & more`;
  }

  if (hasMore) return `on ${named.join(", ")} & more`;
  if (named.length === 1) return `on ${named[0]}`;
  return `on ${named.join(" & ")}`;
}

/** Quiet caption under the hero. Numbers and channels come from the JSON. */
export function heroStatsParts(): string[] {
  const parts = [
    countPhrase(agents.length, "agent", "agents"),
    countPhrase(industries.length, "industry", "industries"),
  ];
  const where = channelPhrase(agents.map((agent) => agent.category));
  if (where) parts.push(where);
  return parts;
}

export function agentMatches(agent: Agent, query: string, category: string): boolean {
  if (category !== "All" && agent.category !== category) return false;
  const needle = query.trim().toLowerCase();
  if (!needle) return true;
  const haystack = [agent.name, agent.whatItDoes, agent.category, ...agent.covers].join("\n").toLowerCase();
  return haystack.includes(needle);
}
