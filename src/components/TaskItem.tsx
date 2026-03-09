import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Task } from '../types/task';

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <View style={styles.row}>
      <Pressable
        style={styles.taskContent}
        onPress={() => onToggle(task.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.completed }}
      >
        <View style={styles.checkbox}>
          <Text style={styles.checkboxIcon}>{task.completed ? '☑' : '☐'}</Text>
        </View>
        <Text
          style={[styles.title, task.completed && styles.titleCompleted]}
          numberOfLines={1}
        >
          {task.title}
        </Text>
      </Pressable>
      <Pressable
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}
        accessibilityLabel="Delete task"
      >
        <Text style={styles.deleteIcon}>×</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkbox: {
    width: 24,
    alignItems: 'center',
  },
  checkboxIcon: {
    fontSize: 20,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  deleteButton: {
    padding: 8,
    marginRight: -8,
  },
  deleteIcon: {
    fontSize: 24,
    color: '#999',
    lineHeight: 24,
  },
});
