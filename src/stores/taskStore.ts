import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import type { TTask, TTaskStatus } from '@/custom-types/types';

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<TTask[]>([
    {
      id: 'sdfsdf',
      title: 'sss',
      description: 'ik',
      status: 'pending',
      dueDate: '2024-03-1'
    },
    {
      id: 'sdfsdfsdfazazazaz',
      title: 'ssqqz',
      description: 'qs',
      status: 'pending',
      dueDate: '2024-03-2'
    },
    {
      id: 'hgjkkhjk',
      title: 'df',
      description: 'qsqs',
      status: 'pending',
      dueDate: '2024-03-3'
    },
    { id: 'sftfgdh', title: '', description: '', status: 'done', dueDate: '2024-03-4' },
    { id: 'tttttr', title: '', description: '', status: 'done', dueDate: '2024-03-6' },
    { id: 'nnnnh', title: '', description: '', status: 'done', dueDate: '2024-03-22' },
    { id: 'ttttf', title: '', description: '', status: 'done', dueDate: '2024-03-10' },
    { id: 'aaaaz', title: '', description: '', status: 'todo', dueDate: '2024-03-14' },
    { id: 'eeeeeeeee', title: '', description: '', status: 'todo', dueDate: '2024-03-13' }
  ]);

  const hasTask = computed(() => tasks.value.length > 0);

  function addNewTask(task: { title: string; description: string; dueDate: string }) {
    try {
      const newTask: TTask = {
        id: uuidv4(),
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        status: 'todo' as TTaskStatus
      };

      tasks.value.push(newTask);
    } catch (error) {
      window.alert(error);
    }
  }

  function editTask(updatedTask: TTask) {
    try {
      const index = tasks.value.findIndex((task) => task.id === updatedTask.id);

      if (index === -1) {
        window.alert(`Task with id ${updatedTask.id} not found.`);
      }

      tasks.value[index] = { ...tasks.value[index], ...updatedTask };
    } catch (error) {
      window.alert(error);
    }
  }

  function deleteTask(id: string) {
    try {
      const initialLength = tasks.value.length;
      tasks.value = tasks.value.filter((task) => task.id !== id);

      if (tasks.value.length === initialLength) {
        window.alert(`Task with id ${id} not found.`);
      }
    } catch (error) {
      window.alert(error);
    }
  }

  function getTaskById(id: string): TTask | undefined {
    try {
      const foundTask = tasks.value.find((task) => task.id === id);
      if (!foundTask) {
        window.alert(`Task with id ${id} not found.`);
      }
      return foundTask;
    } catch (error) {
      window.alert(error instanceof Error ? error.message : String(error));
      return undefined;
    }
  }

  return {
    tasks,
    hasTask,
    addNewTask,
    deleteTask,
    getTaskById,
    editTask
  };
});
