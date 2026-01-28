"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { Flex } from "@/lib/styled";
import EditClientModal from "./EditClientModal";
import DeleteClientModal from "./DeleteClientModal";
import EditClientScheduleModal from "../ClientSchedule/EditClientScheduleModal";

export default function ClientActions({ client }) {
  const router = useRouter();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isScheduleEditOpen, setIsScheduleEditOpen] = useState(false);

  return (
    <>
      <Flex gap='0.5rem' justify='center'>
        <Button onClick={() => setIsScheduleEditOpen(true)}>
          Edit Client Schedule
        </Button>
        <Button onClick={() => setIsEditOpen(true)}>Edit Client Details</Button>
        <Button variant='danger' onClick={() => setIsDeleteOpen(true)}>
          Delete Client
        </Button>
        <Button variant='neutral' onClick={() => router.push("/clients")}>
          Back
        </Button>
      </Flex>

      {isEditOpen && (
        <EditClientModal client={client} onClose={() => setIsEditOpen(false)} />
      )}
      {isScheduleEditOpen && (
        <EditClientScheduleModal
          client={client}
          onClose={() => setIsScheduleEditOpen(false)}
        />
      )}

      {isDeleteOpen && (
        <DeleteClientModal
          client={client}
          onClose={() => setIsDeleteOpen(false)}
        />
      )}
    </>
  );
}
