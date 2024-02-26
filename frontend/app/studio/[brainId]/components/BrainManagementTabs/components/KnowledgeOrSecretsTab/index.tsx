"use client";
import { UUID } from "crypto";

import { ApiBrainSecretsInputs } from "@/lib/components/ApiBrainSecretsInputs/ApiBrainSecretsInputs";

import { AddedKnowledge } from "./components/AddedKnowledge/AddedKnowledge";

import { useBrainFetcher } from "../../hooks/useBrainFetcher";
import { NoAccess } from "../NoAccess";

type KnowledgeOrSecretsTabProps = {
  brainId: UUID;
  hasEditRights: boolean;
};
export const KnowledgeOrSecretsTab = ({
  brainId,
  hasEditRights,
}: KnowledgeOrSecretsTabProps): JSX.Element => {
  const { brain } = useBrainFetcher({
    brainId,
  });

  if (!hasEditRights) {
    return <NoAccess />;
  }

  if (brain?.brain_type === "api") {
    return <ApiBrainSecretsInputs brainId={brainId} />;
  }

  return <AddedKnowledge brainId={brainId} />;
};
