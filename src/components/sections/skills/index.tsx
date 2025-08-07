"use client";

import { skills } from "@/data/hardcoded-data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-12 text-4xl font-bold tracking-tight">Skills</h2>

        <div className="space-y-8">
          {skills.map((category) => (
            <Card key={category.id}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  {category.icon}
                  <span className="text-xl font-semibold">
                    {category.label}
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <Image
                    src={category.url}
                    alt={category.label}
                    width={100}
                    height={40}
                    className="w-full h-16 object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
