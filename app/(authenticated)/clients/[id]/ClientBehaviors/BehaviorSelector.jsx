"use client";

import { GridColumn } from "@/lib/styled";
import Checkbox from "@/components/ui/Checkbox";

export default function BehaviorSelector({
  behaviors,
  selectedBehaviors = [],
  onChange,
}) {
  const handleBehaviorToggle = (behaviorId, isChecked) => {
    let updatedBehaviors;

    if (isChecked) {
      // Add behavior ID to array
      updatedBehaviors = [...selectedBehaviors, behaviorId];
    } else {
      // Remove behavior ID from array
      updatedBehaviors = selectedBehaviors.filter((id) => id !== behaviorId);
    }

    onChange(updatedBehaviors);
  };

  return (
    <>
      {behaviors.map((behavior) => (
        <GridColumn key={behavior.id} span={4}>
          <Checkbox
            label={behavior.name}
            checked={selectedBehaviors.includes(behavior.id)}
            onChange={(e) =>
              handleBehaviorToggle(behavior.id, e.target.checked)
            }
            id={`behavior-${behavior.id}`}
          />
        </GridColumn>
      ))}
    </>
  );
}
