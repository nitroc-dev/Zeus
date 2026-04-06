import { Mic, Server } from "lucide-react";
import { WorkingOnCardProps } from "./props";

const ICON_MAP = {
  server: Server,
  mic: Mic,
} as const;

export default function WorkingCard({ item }: WorkingOnCardProps) {
  const Icon = ICON_MAP[item.iconType];
  return (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg}`}>
          <Icon className={`w-5 h-5 ${item.iconColor}`} />
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          {item.status}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-xs bg-gray-700/60 text-gray-400 border border-gray-600/40"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}