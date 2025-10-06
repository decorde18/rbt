"use client";
import Card from "@/components/common/Card";
import Badge from "@/components/ui/Badge";

import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Modal from "@/components/ui/Modal";
import Radio from "@/components/ui/Radio";
import Table from "@/components/ui/Table";
import Tabs from "@/components/ui/Tabs";
// import Tabs from "@/components/ui/Tabs";
import Tooltip from "@/components/ui/Tooltip";
import { useState } from "react";

function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const handleDelete = () => {};
  const tabs = [
    { label: "Profile", content: <div>Profile content</div> },
    { label: "Settings", content: <div>Settings content</div> },
    { label: "Notifications", content: <div>Notifications content</div> },
  ];
  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role", render: (val) => <Badge>{val}</Badge> },
    {
      key: "actions",
      label: "Actions",
      sortable: false,
      render: (_, row) => (
        <Button size='sm' onClick={() => handleEdit(row)}>
          Edit
        </Button>
      ),
    },
  ];

  const data = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "User" },
  ];
  return (
    <>
      <Tooltip content='This is a tooltip' position='top'>
        <Button>Hover me</Button>
      </Tooltip>
      <Tabs
        tabs={tabs}
        defaultTab={0}
        onChange={(index) => console.log("Tab changed to:", index)}
      />
      <Card
        variant='elevated'
        header={<h3 className='font-bold text-lg'>Card Title</h3>}
        footer={<Button>Action</Button>}
      >
        <p>Card content goes here</p>
      </Card>
      <Radio name='option' value='1' label='Option 1' />
      <Radio
        name='option'
        value='2'
        label='Option 2'
        variant='success'
        size='lg'
      />
      <Label htmlFor='email'>Email Address</Label>
      <Label htmlFor='name' required>
        Full Name
      </Label>
      <Label size='lg'>Large Label</Label>
      <Table
        columns={columns}
        data={data}
        striped
        sortable
        onRowClick={(row) => console.log(row)}
      />
      <>
        <Badge>Default</Badge>
        <Badge variant='success' size='lg'>
          Success
        </Badge>
        <Badge variant='danger' size='lg' rounded='full'>
          3
        </Badge>
      </>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title='Confirm Action'
        size='md'
        footer={
          <>
            <Button variant='neutral' onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant='danger' onClick={handleDelete}>
              Delete
            </Button>
          </>
        }
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
    </>
  );
}

export default Page;
