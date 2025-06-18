import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function ScheduleScreen() {
  const today = new Date();
  const todayLabel = today.toLocaleString('en-US', { weekday: 'short' });

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const days = Array.from({ length: 7 }).map((_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);

    return {
      label: day.toLocaleString('en-US', { weekday: 'short' }),
      date: day.getDate(),
    };
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabRow}>
        <View style={[styles.tabBox, styles.activeTab]}>
          <Text style={styles.tabText}>To-do</Text>
        </View>
        <View style={styles.tabBox}>
          <Text style={styles.tabText}>Event</Text>
        </View>
        <View style={styles.tabBox}>
          <Text style={styles.tabText}>All</Text>
        </View>
      </View>

      <View style={styles.daysRow}>
        {days.map((day) => {
          const isToday = todayLabel === day.label && today.getDate() === day.date;
          return (
            <View
              key={day.label}
              style={[
                styles.dayBox,
                isToday && styles.todayBox,
              ]}
            >
              <Text style={styles.dayLabel}>{day.label}</Text>
              {isToday ? (
                <View style={styles.todayDateCircle}>
                  <Text style={styles.todayDateText}>{day.date}</Text>
                </View>
              ) : (
                <Text style={styles.dayDate}>{day.date}</Text>
              )}
            </View>
          );
        })}
      </View>

      <View style={styles.dateInfoRow}>
        <View style={styles.dateInfo}>
          <Text style={styles.arrow}>{'<'}</Text>
          <Text style={styles.todayText}>
            {today.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })} (Today)
          </Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
      </View>

      <View style={styles.emptyBox}>
        <Image
          source={require('../assets/schedule.png')}
          style={{ width: 310, height: 150, marginBottom: 15 }}
        />
        <Text style={styles.emptyText}>Nothing is currently scheduled...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  tabRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tabBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTab: {
    borderBottomColor: '#007aff',
  },

  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  dayBox: {
  flex: 1,
  alignItems: 'center',      
  justifyContent: 'flex-start', 
  paddingTop: 12,            
  minHeight: 250,             
  borderLeftWidth: 0.5,
  borderRightWidth: 0.5,
  borderLeftColor: '#ccc',
  borderRightColor: '#ccc',
  },
  todayBox: {
    backgroundColor: '#f2f8ff',
  },
  dayLabel: {
    fontSize: 14,
    color: '#666',
  },
  dayDate: {
    fontSize: 14,
    marginTop: 4,
  },
  todayDateCircle: {
    backgroundColor: '#000',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  todayDateText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  dateInfo: {
    backgroundColor: '#cce0ff',
    alignItems: 'center',
    marginBottom: 20,
    borderTopWidth: 2,            
    borderTopColor: '#007aff',
    flexDirection: 'row',
    justifyContent:'center',
  },
  todayText: {
    fontSize: 16,
    padding:8,
  },

  emptyBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 24,
    paddingHorizontal: 30,
  },
});
