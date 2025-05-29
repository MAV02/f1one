
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

type ReportDocumentProps = {
  title: string;
  content: string;
  isPro: boolean;
};

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 20, marginBottom: 10 },
  content: { fontSize: 12 },
  pro: { fontSize: 12, color: 'green', marginTop: 10 },
});

const ReportDocument: React.FC<ReportDocumentProps> = ({ title, content, isPro }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        {isPro && <Text style={styles.pro}>Pro Report</Text>}
      </View>
    </Page>
  </Document>
);

export default ReportDocument;
