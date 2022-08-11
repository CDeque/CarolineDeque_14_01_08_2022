// Imports
import styled from "styled-components";
import DataTable from "../../components/Table";

export default function EmployeeList() {
  return (
    <main className="main">
      <Section className="dataTable_section">
        <DataTable />
      </Section>
    </main>
  );
}

const Section = styled.section`
  width: 100%;
`;
