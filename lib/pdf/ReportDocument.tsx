import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  section: {
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    fontSize: 10,
    textAlign: 'center',
    color: '#999999',
  },
  badge: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    fontSize: 10,
    color: '#e10600',
    fontWeight: 'bold',
  },
});

const ReportDocument = ({ title, content, isPro }: { title: string; content: string; isPro: boolean }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{title}</Text>
      </View>
      <View style={styles.section}>
        <Text>{content}</Text>
      </View>
      <Text style={styles.footer}>Exported from https://onef1.com – {new Date().toLocaleDateString()}</Text>
      {isPro && <Text style={styles.badge}>ONEF1 PRO</Text>}
    </Page>
  </Document>
);

export default ReportDocument;
