// app/clients/[id]/ClientDetail.js
"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/db";

import Card from "@/components/common/Card";
import { Grid, GridColumn, PageContainer } from "@/lib/styled";
import { getClientSchedule } from "@/lib/db-queries";
import ClientBehaviors from "./ClientBehaviors/ClientBehaviors";
import ClientInfo from "./ClientInfo/ClientInfo";
import ClientActions from "./ClientInfo/ClientActions";
import ClientBehaviorDataSheet from "./ClientBehaviors/ClientBehaviorDataSheet";

export default function ClientDetail({ clientId }) {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClient = async () => {
      const clientData = await db.clients.get(parseInt(clientId));
      const activeSchedule = await getClientSchedule(clientId, new Date());

      setClient({ ...clientData, activeSchedule });
      setLoading(false);
    };
    loadClient();
  }, [clientId]);

  if (loading) return <p>Loading...</p>;
  if (!client) return <p>Client not found.</p>;

  return (
    <PageContainer>
      <Grid gap='1.5rem'>
        <GridColumn span={3}></GridColumn>
        <GridColumn span={6}>
          <Card
            header={
              <h3 variant='elevated' className='font-bold text-lg'>
                {client.firstName} {client.lastName}
              </h3>
            }
            footer={<ClientActions client={client} />}
          >
            <ClientInfo client={client} />
          </Card>
        </GridColumn>
        <GridColumn span={3}></GridColumn>

        <GridColumn span={6}>
          <ClientBehaviors clientId={clientId} />
        </GridColumn>
        <GridColumn span={6}>
          <ClientBehaviorDataSheet clientId={clientId} />
        </GridColumn>
      </Grid>
    </PageContainer>
  );
}
