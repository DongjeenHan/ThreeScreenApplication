import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const alerts = [
  {
    id: '1',
    title: 'In Class Activity #3',
    time: 'June 19, 2025 at 11:59pm',
    course: 'Spring 2025 Mobile Application Development (CPRG-303-C)',
  },
  {
    id: '2',
    title: 'In Class Activity #2',
    time: 'June 19, 2025 at 11:59pm',
    course: 'Spring 2025 Mobile Application Development (CPRG-303-C)',
  },
  {
    id: '3',
    title: 'In Class Activity #1',
    time: 'June 19, 2025 at 11:59pm',
    course: 'Spring 2025 Mobile Application Development (CPRG-303-C)',
  },
];

export default function AlertsScreen() {
  return (
    <View style={styles.container}>
      {/* Static Labels with blue underline on Updates */}
      <View style={styles.tabRow}>
        <View style={[styles.tabBox, styles.activeTab]}>
          <Text style={styles.tabTextActive}>Updates</Text>
        </View>
        <View style={styles.tabBox}>
          <Text style={styles.tabText}>Subscriptions</Text>
        </View>
      </View>

      {/* Alerts List */}
      {alerts.map((item, index) => (
        <View key={item.id}>
          <View style={styles.alertRow}>
            <View style={styles.blueBar} />
            <View style={styles.textBox}>
              <Text>{item.title}</Text>
              <Text>{item.time}</Text>
              <Text>{item.course}</Text>
            </View>
          </View>
          {index < alerts.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding:10, backgroundColor:'#fff' },

  tabRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
  },
  tabBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#007aff',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  tabTextActive: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },

  alertRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  blueBar: {
    width: 5,
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 2,
    marginRight: 10,
  },
  textBox: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});
