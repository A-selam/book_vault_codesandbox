/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/HeroSection";
import { DashboardState } from "../components/DashboardState";
import { Collections } from "../components/Collection";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-10">
      <HeroSection />

      <DashboardState />

      <Collections />
    </div>
  );
}
