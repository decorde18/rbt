import { Grid, GridColumn } from "@/lib/styled";

export default function ClientInfo({ client }) {
  function InfoField({ label, value }) {
    return (
      <div>
        <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#6b7280" }}>
          {label}
        </p>
        <p style={{ fontSize: "1rem", color: "#111827" }}>{value}</p>
      </div>
    );
  }

  return (
    <Grid gap='1.5rem'>
      <GridColumn span={3}>
        <InfoField label='First Name' value={client.firstName} />
      </GridColumn>
      <GridColumn span={3}>
        <InfoField label='Last Name' value={client.lastName} />
      </GridColumn>
      <GridColumn span={3}>
        <InfoField label='School' value={client.school} />
      </GridColumn>
      <GridColumn span={3}>
        <InfoField label='Grade' value={client.grade} />
      </GridColumn>
      {client.activeSchedule instanceof Error ? (
        <GridColumn span={12} style={{ color: "red" }}>
          {client.activeSchedule.message}
        </GridColumn>
      ) : (
        <>
          <GridColumn span={3}>
            <InfoField
              label='Behavior Data Start'
              value={client.activeSchedule.startDate.toLocaleDateString()}
            />
          </GridColumn>
          <GridColumn span={3}>
            <InfoField
              label='School Start Time'
              value={client.activeSchedule.schoolStart}
            />
          </GridColumn>
          <GridColumn span={3}>
            <InfoField
              label='School End Time'
              value={client.activeSchedule.schoolEnd}
            />
          </GridColumn>
          <GridColumn span={3}>
            <InfoField
              label='Interval in Minutes'
              value={client.activeSchedule.intervalMinutes}
            />
          </GridColumn>
        </>
      )}
    </Grid>
  );
}
