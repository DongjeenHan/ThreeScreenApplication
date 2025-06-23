import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function CoursesScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SAIT HOMEPAGE</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Image source={require('../assets/icon.png')} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.courseTitle}>
            Spring 2025 Object-Oriented Programming 3 (CPRG-304-B)
          </Text>
          <Text style={styles.courseCode}>202440 CPRG-304-B • Spring 2025</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/icon.png')} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.courseTitle}>
            Spring 2025 Software Projects: Analysis, Design, and Management (CPSY-301-D)
          </Text>
          <Text style={styles.courseCode}>202440 CPSY-301-D • Spring 2025</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/icon.png')} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.courseTitle}>
            Spring 2025 Mobile Application Development (CPRG-303-C)
          </Text>
          <Text style={styles.courseCode}>202440 CPRG-303-C • Spring 2025</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/icon.png')} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.courseTitle}>
            Spring 2025 Database Programming (CPRG-307-B)
          </Text>
          <Text style={styles.courseCode}>202440 CPRG-307-B • Spring 2025</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/icon.png')} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.courseTitle}>
            Spring 2025 Web Development 2 (CPRG-306-C)
          </Text>
          <Text style={styles.courseCode}>202440 CPRG-306-C • Spring 2025</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#e3e6ec',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
  card: {
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    marginBottom: 30,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 12,
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  courseCode: {
    color: '#666',
  },
});
