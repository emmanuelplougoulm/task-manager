import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

type TTaskStatus = 'todo' | 'pending' | 'done'

type TTask = {
  id: string
  title: string
  description: string
  status: TTaskStatus
  dueDate: string
}

export const useTaskStore = defineStore('task', () => {
  const taskSchema: TTask = {
    id: '',
    title: '',
    description: '',
    status: 'todo',
    dueDate: '',
  }

  const tasks = ref<TTask[]>([
    { id: 'sdfsdf', title: 'sss', description: 'ik', status: 'pending', dueDate: '2024-03-1' },
    {
      id: 'sdfsdfsdfazazazaz',
      title: 'ssqqz',
      description: 'qs',
      status: 'pending',
      dueDate: '2024-03-2',
    },
    { id: 'hgjkkhjk', title: 'df', description: 'qsqs', status: 'pending', dueDate: '2024-03-3' },
    { id: 'sftfgdh', title: '', description: '', status: 'done', dueDate: '2024-03-4' },
    { id: 'tttttr', title: '', description: '', status: 'done', dueDate: '2024-03-6' },
    { id: 'nnnnh', title: '', description: '', status: 'done', dueDate: '2024-03-22' },
    { id: 'ttttf', title: '', description: '', status: 'done', dueDate: '2024-03-10' },
    { id: 'aaaaz', title: '', description: '', status: 'todo', dueDate: '2024-03-14' },
    { id: 'eeeeeeeee', title: '', description: '', status: 'todo', dueDate: '2024-03-13' },
  ])

  const hasTask = computed(() => tasks.value.length > 0)

  function addNewTask(title: string, description: string, dueDate: string) {
    const newTask = { ...taskSchema }
    const uniqueId = uuidv4()

    newTask.id = uniqueId
    newTask.title = title
    newTask.description = description
    newTask.dueDate = dueDate

    tasks.value.push(newTask)
  }

  function updateTaskStatus(id: string, status: TTaskStatus) {
    const task = tasks.value.find((task) => task.id === id)

    if (task) {
      task.status = status
    }
  }

  function updateTaskDescription(id: string, description: string) {
    const task = tasks.value.find((ticket) => ticket.id === id)

    if (task) {
      task.description = description
    }
  }

  function deleteTask(id: string) {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }

  function getTaskById(id: string) {
    return tasks.value.find((task) => task.id === id)
  }

  return {
    tasks,
    hasTask,
    addNewTask,
    deleteTask,
    updateTaskStatus,
    updateTaskDescription,
    getTaskById,
  }
})
