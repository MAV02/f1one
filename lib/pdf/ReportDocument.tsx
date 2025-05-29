
import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

interface Props {
  track: string;
  driver: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  section: {
    marginBottom: 6,
  },
});

const ReportDocument = ({ track, driver }: Props) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>F1 Performance Report</Text>
        <Text style={styles.section}>Track: {track}</Text>
        <Text style={styles.section}>Driver: {driver}</Text>
        <Text style={styles.section}>
          Summary: {driver} completed a competitive stint at {track}. Telemetry and strategy data available upon request.
        </Text>
      </Page>
    </Document>
  );
};

export default ReportDocument;
