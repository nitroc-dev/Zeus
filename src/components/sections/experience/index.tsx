"use client";

import { experiences, type Experience } from "@/data/hardcoded-data";
import { ExperienceCard } from "@/components/cards/experience";

export default function Experience() {
  return (
    <section className="px-6 py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences?.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
