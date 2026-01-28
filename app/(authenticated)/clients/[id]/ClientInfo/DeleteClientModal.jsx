"use client";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { FormActions } from "@/lib/styled";
import { db } from "@/lib/db";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteClientModal({ client, onClose }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await db.clients.delete(client.id);
    router.push("/clients");
  };

  return (
    <Modal isOpen onClose={onClose} title='Delete Client' size='sm'>
      <p style={{ marginBottom: "1.5rem" }}>
        Are you sure you want to delete{" "}
        <strong>
          {client.firstName} {client.lastName}
        </strong>
        ? This action cannot be undone.
      </p>
      <FormActions justify='center'>
        <Button variant='danger' onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete Client"}
        </Button>
        <Button variant='neutral' onClick={onClose}>
          Cancel
        </Button>
      </FormActions>
    </Modal>
  );
}
