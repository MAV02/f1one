'use client';

import ReportDocument from '@/lib/pdf/ReportDocument';
import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// Optional: Register a custom font or use built-in fonts
// Font.register({ family: 'Roboto', src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxM.woff2' });

type Props = {
  title: string;
  content: string;
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    backgroundColor: '#fff',
    color: '#000',
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
    lineHeight: 1.6,
  },
});

const ReportDocument: React.FC<Props> = ({ title, content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.content}>{content}</Text>
      </View>
    </Page>
  </Document>
);

export default ReportDocument;