import { test as base } from '@playwright/test';
import { TaskBoardPage } from './pages/TaskBoardPage';

type SeedTask = {
  title: string;
  description?: string;
  dueDate?: string;
  status?: 'pending' | 'inProgress' | 'done';
};

type Fixtures = {
  board: TaskBoardPage;
  /** Writes tasks to localStorage before the app loads, then opens the board. */
  seed: (tasks: SeedTask[]) => Promise<void>;
};

export const test = base.extend<Fixtures>({
  board: async ({ page }, use) => {
    await use(new TaskBoardPage(page));
  },
  seed: async ({ page, board }, use) => {
    await use(async (tasks) => {
      const stored = tasks.map((task, index) => ({
        id: `seed-${index}`,
        description: '',
        dueDate: '',
        status: 'pending',
        ...task
      }));
      await page.addInitScript((value) => {
        if (!sessionStorage.getItem('seeded')) {
          localStorage.setItem('tasks', value);
          sessionStorage.setItem('seeded', '1');
        }
      }, JSON.stringify(stored));
      await board.goto();
    });
  }
});

export { expect } from '@playwright/test';
