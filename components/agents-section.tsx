"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { agentCategories, agentMatches, agents, type Agent } from "@/lib/catalog";
import { easeOut } from "@/lib/motion";
import { bandBody, bandHeading, bandPad, pillClass, pillMotion } from "@/lib/ui";

const filters = ["All", ...agentCategories];

type AgentsSectionProps = {
  onSelect: (agent: Agent) => void;
};

export function AgentsSection({ onSelect }: AgentsSectionProps) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => agents.filter((agent) => agentMatches(agent, query, category)),
    [category, query],
  );

  const countLabel =
    filtered.length === 0 ? "No agents match." : `${filtered.length} ${filtered.length === 1 ? "agent" : "agents"}`;

  return (
    <section
      id="our-agents"
      aria-labelledby="our-agents-heading"
      className={`scroll-mt-24 bg-white pt-12 pb-20 sm:pt-16 sm:pb-28 ${bandPad}`}
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 id="our-agents-heading" className={bandHeading}>
            Our agents
          </h2>
          <p className={`mt-5 sm:mt-6 ${bandBody}`}>
            Filter by category or search. Open one to see what it covers.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <FilterPill key={item} label={item} pressed={category === item} onSelect={() => setCategory(item)} />
            ))}
          </div>
          <div className="w-full lg:w-60 lg:shrink-0">
            <label htmlFor="agent-search" className="sr-only">
              Search agents
            </label>
            <input
              id="agent-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search agents"
              autoComplete="off"
              aria-controls="agent-results"
              className="agent-search h-10 w-full rounded-full border border-line bg-white px-4 text-base text-ink placeholder:text-muted sm:h-11 sm:text-[15px]"
            />
          </div>
        </div>

        <p role="status" className="mt-6 text-[13px] font-medium text-muted sm:mt-8">
          {countLabel}
        </p>

        {filtered.length > 0 ? (
          <ul id="agent-results" aria-label="Agents" className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {filtered.map((agent) => (
              <li key={agent.id} className="min-w-0">
                <button
                  type="button"
                  className="agent-card flex h-full w-full cursor-pointer flex-col rounded-2xl border border-line bg-white p-5 text-left sm:p-6"
                  onClick={() => onSelect(agent)}
                  aria-haspopup="dialog"
                  aria-controls="agent-panel"
                >
                  <span className="text-[17px] font-semibold tracking-[-0.03em] text-ink">{agent.name}</span>
                  <span className="mt-2 text-pretty text-[14.5px] leading-6 text-[#7d8b9c]">{agent.whatItDoes}</span>
                  <span className="mt-auto flex items-center gap-2 pt-5">
                    <span className="rounded-full border border-line px-2.5 py-[3px] text-[12px] font-medium leading-none tracking-[-0.011em] text-[#5c6b7a]">
                      {agent.category}
                    </span>
                    {agent.ai ? (
                      <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#5c6b7a]">AI</span>
                    ) : null}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

function FilterPill({ label, pressed, onSelect }: { label: string; pressed: boolean; onSelect: () => void }) {
  return (
    <motion.button
      type="button"
      className={pillClass}
      style={{ backgroundColor: pressed ? "#111111" : "#ffffff", color: pressed ? "#ffffff" : "#111111" }}
      aria-pressed={pressed}
      onClick={onSelect}
      {...pillMotion}
    >
      {label}
    </motion.button>
  );
}
