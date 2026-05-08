import {
  BookOpen,
  Building2,
  Clock,
  GitCommitHorizontal,
  MapPin,
  Sparkles,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { LocalTime } from "./local-time";

interface CurrentlyItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  sublabel?: React.ReactNode;
  isLast?: boolean;
  isSecondToLast?: boolean;
}

function CurrentlyItem({ icon, label, value, sublabel }: CurrentlyItemProps) {
  return (
    <div
      className="grid gap-3.5 items-center py-3.5 border-b"
      style={{
        gridTemplateColumns: "32px 110px 1fr",
        borderColor: "var(--portfolio-line)",
      }}
    >
      <div
        className="w-8 h-8 rounded-lg grid place-items-center"
        style={{
          background: "var(--navy-2)",
          border: "1px solid var(--portfolio-line)",
          color: "var(--portfolio-accent)",
        }}
      >
        {icon}
      </div>
      <div
        className="font-mono text-[11px] uppercase tracking-[0.1em]"
        style={{ color: "var(--text-p-3)" }}
      >
        {label}
      </div>
      <div
        className="text-[15px] font-medium"
        style={{ color: "var(--text-p-0)" }}
      >
        {value}
        {sublabel && (
          <small
            className="block font-normal text-[13px] mt-0.5"
            style={{ color: "var(--text-p-2)" }}
          >
            {sublabel}
          </small>
        )}
      </div>
    </div>
  );
}

export async function Currently() {
  const t = await getTranslations("currently");

  return (
    <section className="px-6 py-[60px] w-full max-w-[1180px] mx-auto">
      <div
        className="rounded-[16px] px-10 py-9 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, var(--navy-2), var(--navy-1))",
          border: "1px solid var(--portfolio-line-2)",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 300px at 100% 0%, var(--portfolio-accent-soft), transparent 60%)",
          }}
        />

        {/* Header */}
        <div className="flex justify-between items-baseline mb-7 relative">
          <div>
            <div
              className="flex items-center gap-2.5 font-mono text-xs tracking-[0.1em] uppercase mb-2"
              style={{ color: "var(--portfolio-accent)" }}
            >
              <span
                className="w-6 h-px"
                style={{ background: "var(--portfolio-accent)" }}
              />
              {t("eyebrow")}
            </div>
            <h2
              className="text-[28px] font-semibold tracking-tight"
              style={{ color: "var(--text-p-0)" }}
            >
              {t("title")}
            </h2>
          </div>
          <div
            className="hidden sm:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em]"
            style={{ color: "var(--portfolio-ok)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "var(--portfolio-ok)" }}
            />
            {t("liveLabel")}
          </div>
        </div>

        {/* Grid of items */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-7">
          <CurrentlyItem
            icon={<MapPin className="w-3.5 h-3.5" />}
            label={t("locationLabel")}
            value="Brussels, Belgium"
            sublabel={<LocalTime />}
          />
          <CurrentlyItem
            icon={<Building2 className="w-3.5 h-3.5" />}
            label={t("workingOnLabel")}
            value="Merchant tools at Eachstapp"
            sublabel={t("workingSince")}
          />
          <CurrentlyItem
            icon={<BookOpen className="w-3.5 h-3.5" />}
            label={t("readingLabel")}
            value="Designing Data-Intensive Applications"
            sublabel="Kleppmann · ch. 7"
          />
          <CurrentlyItem
            icon={<Sparkles className="w-3.5 h-3.5" />}
            label={t("learningLabel")}
            value="Expo & React Native"
            sublabel={t("learningSublabel")}
          />
          <CurrentlyItem
            icon={<GitCommitHorizontal className="w-3.5 h-3.5" />}
            label={t("commitLabel")}
            value={
              <code
                className="font-mono text-[13px]"
                style={{ color: "var(--portfolio-accent)" }}
              >
                feat/onboarding
              </code>
            }
            sublabel="2h ago · eachstapp/web"
          />
          <div
            className="grid gap-3.5 items-center py-3.5"
            style={{ gridTemplateColumns: "32px 110px 1fr" }}
          >
            <div
              className="w-8 h-8 rounded-lg grid place-items-center"
              style={{
                background: "var(--navy-2)",
                border: "1px solid var(--portfolio-line)",
                color: "var(--portfolio-ok)",
              }}
            >
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div
              className="font-mono text-[11px] uppercase tracking-[0.1em]"
              style={{ color: "var(--text-p-3)" }}
            >
              {t("statusLabel")}
            </div>
            <div
              className="text-[15px] font-medium"
              style={{ color: "var(--portfolio-ok)" }}
            >
              {t("statusValue")}
              <small
                className="block font-normal text-[13px] mt-0.5"
                style={{ color: "var(--text-p-2)" }}
              >
                {t("statusSublabel")}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
