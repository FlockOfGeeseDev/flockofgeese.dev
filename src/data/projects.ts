import syncgooseIcon from "@/assets/syncgoose-icon.png";
import data from "./projects.json";

export type Integration = {
  name: string;
  short: string;
  tone: "red" | "blue" | "orange" | "neutral";
};

export type Project = {
  slug: string;
  name: string;
  platform: string;
  tagline: string;
  icon: string;
  integrations?: Integration[];
  cta: { label: string; href: string };
  hide?: boolean;
};

const ICONS: Record<string, string> = {
  syncgoose: syncgooseIcon,
};

export const projects: Project[] = (data.projects as Array<Omit<Project, "icon"> & { icon: string }>)
  .filter((p) => !p.hide)
  .map((p) => ({ ...p, icon: ICONS[p.icon] ?? "" }));
