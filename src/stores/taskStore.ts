import { ref } from 'vue'
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

const useTaskStore = defineStore('task', () => {
  const taskSchema: TTask = {
    id: '',
    title: '',
    description: '',
    status: 'todo',
    dueDate: '',
  }

  const tasks = ref<TTask[]>([])

  function addNewTask(title: string, status: TTaskStatus) {
    const newTask = { ...taskSchema }
    const uniqueId = uuidv4()

    newTask.id = uniqueId
    newTask.title = title
    newTask.status = status

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

  function getTaskById(id: string) {
    return tasks.value.find((task) => task.id === id)
  }

  return {
    tasks,
    addNewTask,
    updateTaskStatus,
    updateTaskDescription,
    getTaskById,
  }
})

export default useTaskStore
