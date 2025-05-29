import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface ReportProps {
  title: string;
  content: string;
  isPro: boolean;
  track?: string;
  driver?: string;
}

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 18, marginBottom: 10 },
  content: { fontSize: 12 },
});

const ReportDocument = ({ title, content, isPro, track, driver }: ReportProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      {isPro && (
        <>
          {track && <Text>Track: {track}</Text>}
          {driver && <Text>Driver: {driver}</Text>}
        </>
      )}
    </Page>
  </Document>
);

export default ReportDocument;
