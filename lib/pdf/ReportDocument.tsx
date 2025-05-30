'use client';

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

type ReportDocumentProps = {
  title: string;
  content: string;
  isPro: boolean;
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
    lineHeight: 1.6,
  },
  proNote: {
    marginTop: 20,
    fontSize: 10,
    color: 'gray',
  },
});

const ReportDocument: React.FC<ReportDocumentProps> = ({ title, content, isPro }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      {isPro && <Text style={styles.proNote}>Exported using PRO account</Text>}
    </Page>
  </Document>
);

export default ReportDocument;
