import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export type Filter = 'all' | 'active' | 'completed';

type FilterTabsProps = {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
};

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export function FilterTabs({ filter, onFilterChange }: FilterTabsProps) {
  return (
    <View style={styles.container}>
      {FILTERS.map((f) => (
        <Pressable
          key={f.value}
          style={[styles.tab, filter === f.value && styles.tabActive]}
          onPress={() => onFilterChange(f.value)}
        >
          <Text style={[styles.tabText, filter === f.value && styles.tabTextActive]}>
            {f.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
});
