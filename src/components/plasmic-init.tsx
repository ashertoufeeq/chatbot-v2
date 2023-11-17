import { initPlasmicLoader } from "@plasmicapp/loader-react";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "u9oJQdw7G3dubbirgTN23m",  // ID of a project you are using
      token: "z7kdmvR50UtoznLFbPsKOD7hTTuhSq6LoO6krOvbZkwKXrOKydByx7CwZJwihaR0UsXgsiGVgy0w1hRzBeVvg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})