import { Bed, Bus, Plane, Train, Smile, Info, Landmark, FileText } from "lucide-react";

export type StepId =
  | "transport"
  | "room"
  | "emotion"
  | "awareness"
  | "culture"
  | "report";

export interface StepDefinition {
  id: StepId;
  title: string;
  subtitle: string;
  icon: any;
}

export const STEP_DEFINITIONS: StepDefinition[] = [
  {
    id: "transport",
    title: "Transport",
    subtitle: "Choose how you'll get there",
    icon: Plane,
  },
  {
    id: "room",
    title: "Stay",
    subtitle: "Pick your room preferences",
    icon: Bed,
  },
  {
    id: "emotion",
    title: "Emotion",
    subtitle: "Personalize for your mood",
    icon: Smile,
  },
  {
    id: "awareness",
    title: "Awareness",
    subtitle: "Be destination-aware",
    icon: Info,
  },
  {
    id: "culture",
    title: "Culture",
    subtitle: "Explore local culture",
    icon: Landmark,
  },
  {
    id: "report",
    title: "Report",
    subtitle: "Wrap-up and notes",
    icon: FileText,
  },
];

export const stepIndexById = (id: StepId) => STEP_DEFINITIONS.findIndex((s) => s.id === id);
